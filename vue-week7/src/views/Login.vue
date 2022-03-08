<template>
  <div>
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <ToastMessages></ToastMessages>
    <div class="container vh-100">
      <form 
        class="form-floating row h-100 align-items-center justify-content-center"
        @submit.prevent="login"
      >
        <div class="col-md-5">
          <div class="h3 mb-4 text-center">請先登入</div>
          <div class="mb-3">
            <label for="floatingInputInvalid">Email address</label>
            <input 
              type="email" 
              class="form-control" 
              id="floatingInputInvalid" 
              placeholder="name@example.com"
              v-model="user.username"
              required
              autofocus
            >
          </div>
          <div class="mb-4">
            <label for="floatingInputInvalid2">Password</label>
            <input 
              type="password" 
              class="form-control" 
              id="floatingInputInvalid2" 
              placeholder="請輸入密碼" 
              v-model="user.password"
              required
            >
          </div>
          <div class="text-center">
            <button type="submit" class="w-50 btn btn-secondary">登入</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  data() {
    return {
      isLoading: false,
      user: {},
    };
  },
  components: {
    ToastMessages,
  },
  mounted() {

  },
  methods: {
    login() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}/admin/signin`;
      this.$http.post(api, this.user)
      .then((res) => {
        alert(res.data.message);
        const { token, expired } = res.data;
        document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
        this.isLoading = false;
        this.$router.push('/admin/products');
      })
      .catch((error) => {
        this.isLoading = false;
        this.$httpMessageState(error.res, '登入');
      })
    },
  },
};
</script>