<template>
  <div class="home">
    <h2 class="mt-3 fw-bolder text-dark">大玖柑仔店</h2>
    <div id="nav">
      <router-link class="text-dark text-decoration-none" to="/">首頁</router-link> |
      <router-link class="text-dark text-decoration-none" to="products">前台產品列表</router-link> |
      <router-link class="text-dark text-decoration-none" to="cart">前台購物車</router-link> |
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {

    };
  },
};
</script>
