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
    <!-- 
    在這裡寫下這一段，我們說給他一個狀態，讓他決定是否把上面兩個 router link 呈現出來，
    底下 data 我們放 checkSuccess: false 這是一個初始值，他的初始就是 false，因此代表一開始這一段是不會出現的，
    那麼這一段不出現的結果就是，上面兩個 router link 也不會出現，這樣可以防範說，當你還沒有登入城東的時候，
    當然是不會呈現畫面的。
    
    這邊做完以後，假如成功登入，底下的 checkLogin 就會馬上動作，確認我們是否登入。 
    
    當身份驗證成功之後，會看到裡面有個 this.checkSuccess = true; 這個時候就會呈現上面兩個 router link，
    也就是我們登入成功了。

    這樣的好處在於，不需要在每個頁面都寫上 checkLogin。
    -->
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