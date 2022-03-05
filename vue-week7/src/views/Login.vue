<template>
  <div>
    <div class="container vh-100">
      <div class="row h-100 align-items-center justify-content-center">
        <div class="col-md-5">
          <div class="h3 mb-4 text-center">請先登入</div>
          <div>
            <form class="form-floating mb-3">
              <input type="email" class="form-control is-invalid" id="floatingInputInvalid" placeholder="name@example.com" value="">
              <label for="floatingInputInvalid">請輸入帳號</label>
            </form>
          </div>
          <div>
            <form class="form-floating mb-3">
              <input type="password" class="form-control is-invalid" id="floatingInputInvalid" placeholder="請輸入密碼" value="">
              <label for="floatingInputInvalid">請輸入密碼</label>
            </form>
          </div>
          <div class="text-center">
            <button type="submit" class="w-50 btn btn-secondary">登入</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
      },
    };
  },
  mounted() {

  },
  methods: {
    login() {
      const api = `${process.env.VUE_APP_API}api/admin/signin`;
      this.$http.post(api, this.user)
      .then((res) => {
        alert(res.data.message);
        const { token, expired } = res.data;
        document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
        this.$router.push('/admin/products');
      })
      .catch((err) => {
        alert(err.data.message);
      })
    },
  },
}
</script>