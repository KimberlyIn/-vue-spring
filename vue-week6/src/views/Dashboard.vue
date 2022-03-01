<template>
  <h4>後台頁面</h4>
  <div id="nav">
    <router-link to="/">回到前台</router-link> |
    <router-link to="/admin/products">後台產品列表</router-link> |
    <a href="#" @click.prevent="signout">登出</a>
  </div>
  <router-view v-if="checkSuccess"></router-view>
</template>

<script>
export default {
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
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1");
      
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
      }
    },
    signout() {
      document.cookie = 'hexToken=;expires=;';
      alert('token 已清除');
      this.$router.push('/login');
    },
  },

}
</script>