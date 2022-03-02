<template>
  <div>
    <div class="container">
      <h4 class="text-secondary mt-3">
        <i class="bi bi-bag-fill fs-4 text-secondary"></i>
        商品列表
      </h4>
    </div>

    <div class="container">
      <Loading :active="isLoading"></Loading>
      <div class="product py-5" >
        <table class="table align-middle">
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td style="width: 200px">
                <div
                  style="height: 100px; background-size: cover; background-position: center"
                  :style="{backgroundImage: `url(${item.imageUrl})`}"
                ></div>
              </td>
              <td>
                {{ item.title }}
              </td>
              <td>
                <div class="h5" v-if="!item.id">{{ item.origin_price }} 元</div>
                <del class="h6 text-muted" v-if="item.id">原價 {{ item.origin_price }} 元</del>
                <div class="h5" v-if="item.id">現在只要 {{ item.price }} 元</div>
              </td>
              <td>
                <div>
                  <button 
                    class="btn btn-outline-secondary border-end-0"
                    type="button"
                    @click="getProduct(item.id)"
                    :disabled="loadingStatus.loadingItem === item.id"
                  >
                    <i 
                      class="fas fa-spinner fa-pulse"
                      v-if="loadingStatus.loadingItem === item.id"
                    ></i>
                    查看更多
                  </button>
                  <button 
                    class="btn btn-outline-danger"
                    type="button"
                    @click="addToCart(item.id)"
                    :disabled="loadingStatus.loadingItem === item.id"
                  >
                  <i 
                    class="fas fa-spinner fa-pulse"
                    v-if="loadingStatus.loadingItem === item.id"
                  ></i>
                    加到購物車
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <UserProductModal ref="userProductModal" :product="product" @add-to-cart="addToCart"></UserProductModal>
      </div>
    </div>
  </div>
</template>

<script>
import UserProductModal from '@/components/UserProductModal.vue';

export default {
  data() {
    return {
      loadingStatus: {
        loadingItem: '',
      },
      isLoading: false,
      products: [],
      product:{},
    };
  },
  components: {
    UserProductModal,
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    addToCart(id, qty = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.loadingStatus.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(api, { data: cart })
      .then((res) => {
        alert(res.data.message);
        this.$refs.userProductModal.hideModal(); 
        this.loadingStatus.loadingItem = '';    
        this.isLoading = false;      
      })
      .catch((err) => {
        alert(err.data.message);
      });
    },
    getProducts() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`;
      this.$http.get(api)
      .then((res) => {
        this.products = res.data.products;
        this.isLoading = false;
      })
      .catch((err) => {
        alert(err.data.message);
      })
    },
    getProduct(id) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.loadingStatus.loadingItem = id;
      this.$http.get(api)
      .then((res) => {
        this.loadingStatus.loadingItem = '';
        this.product = res.data.product;
        this.isLoading = false;
        this.$refs.userProductModal.openModal();
      })
      .catch((err) => {
        alert(err.data.message);
      }) 
    },
  },
};
</script>