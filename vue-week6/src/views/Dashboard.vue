<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">前台</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <router-link class="nav-link" to="/">回到前台</router-link>
            <router-link class="nav-link" to="/admin/products">產品列表</router-link>
          </ul>
          <ul class="navbar-nav ms-auto">
            <router-link class="nav-link" to="/admin/orders">商品訂單</router-link>
            <a href="#" class="nav-link" @click.prevent="signout">登出</a>
          </ul>
        </div>
      </div>
    </nav>
    <router-view v-if="checkSuccess"></router-view>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      checkSuccess: false,
    };
  },
  mounted() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");
      
      if(token) {
        this.$http.defaults.headers.common.Authorization = `${token}`;

        const api = `${process.env.VUE_APP_API}api/user/check`;
        this.$http.post(api, { data: this.token })
        .then(() => {
          this.checkSuccess = true;
        })
        .catch((err) => {
          alert(err.data.message);
          this.$router.push('/login');
        });
      } else {
        alert('您尚未登入');
        this.$router.push("/login");
      }
    },
    signout() {
      document.cookie = 'hexToken=;expires=;';
      alert('token 已清除');
      this.$router.push('/login');
    },
  },
};
</script>