<template>
  <div class="container my-3">
    <div class="row justify-content-center">
      <h2 class="mb-3 text-center">請先登入</h2>
      <div class="col-8">
        <form class="form-signin" @submit.prevent="login">
          <div class="form-floating mb-3">
            <input 
              type="email" 
              class="form-control" 
              id="floatingInput" 
              placeholder="name@example.com"
              v-model="user.username"
              required
              autofocus
            >
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input 
              type="password" 
              class="form-control" 
              id="floatingPassword" 
              placeholder="Password"
              v-model="user.password"
              required
            >
            <label for="floatingPassword">Password</label>
          </div>
          <button 
            type="submit" 
            class="btn w-100 mt-3 py-2 btn-secondary"
          >
            登入
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    login() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.$http.post(api, this.user)
      .then((res) => {
        const { token, expired } = res.data;
        document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
        this.$router.push('/admin/products');
      })
      .catch((err) => {
        alert(err.data.message);
      });
    },
  },
}
</script>