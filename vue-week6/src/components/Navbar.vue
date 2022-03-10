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
            <router-link class="nav-link" to="/">首頁</router-link>
            <router-link class="nav-link" to="products">產品列表</router-link>
          </ul>
          <ul class="navbar-nav ms-auto">
            <router-link class="nav-link" to="cart">
              購物車
              <span class="cart-quantity">{{ cart.carts.length }}</span>
              <!-- 使用問號也可以防止出錯，但是購物車的數字可能會有不會呈現的情況 -->
              <!-- <span class="cart-quantity">{{ cart?.carts?.length }}</span> -->
            </router-link>
            <router-link class="nav-link" to="/admin/products">後台管理</router-link>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  data() {
    return {
      // cart: {},
      // 這方法比較不容易出錯，建議選這個方式，預先定義
      cart: {
        carts: [],
      },
    };
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api)
      .then((res) => {
        this.cart = res.data.data;
        this.isLoading = false;
      })
      .catch((err) => {
        alert(err.data.message);
      })
    },
  },
  mounted() {
    this.getCart();
    // this.emitter.on('get-cart', () => {
    //   this.getCart();
    // });
  },
};
</script>