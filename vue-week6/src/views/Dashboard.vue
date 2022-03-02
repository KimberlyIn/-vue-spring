<template>
  <div>
    <div class="container">
      <h2 class="mt-3 fw-bolder text-dark">大玖柑仔店後台管理</h2>
      <div id="nav">
        <router-link class="text-dark text-decoration-none" to="/">回到前台</router-link> |
        <router-link class="text-dark text-decoration-none" to="/admin/products">後台產品列表</router-link> |
        <router-link class="text-dark text-decoration-none" to="/admin/orders">後台訂單</router-link> |
        <a href="#" class="text-dark text-decoration-none" @click.prevent="signout">登出</a>
      </div>
    </div>
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