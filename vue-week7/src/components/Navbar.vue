<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">大玖柑仔店</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <router-link to="/admin/products" class="nav-link">產品</router-link>
            <li class="nav-item">
              <a class="nav-link" href="#">訂單</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">優惠券</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">貼文</a>
            </li>
            <li class="nav-item">
              <a href="#" @click.prevent="logout" class="nav-link">登出</a>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">購物車</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  inject: ['emitter'],
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}/logout`;
      this.$http.post(api)
      .then((response) => {
        this.$httpMessageState(response, '登出');
        if (response.data.success) {
          this.$router.push('/');
        }
      })
      .catch((error) => {
        this.$httpMessageState(error.response, '錯誤訊息');
      })
    },
  },
};
</script>