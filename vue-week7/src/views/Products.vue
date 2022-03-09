<template>
  <div>
    <Loading :actuve="isLoading" :z-index="1060"></Loading>
    <div class="text-end mt-4 me-5"> 
      <button type="button" class="btn btn-secondary" @click="openModal(true)">建立新的產品</button>
    </div>
    <table class="w-100 table table-hover mt-4">
      <thead>
        <tr>
          <th width="100">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="120">是否啟用</th>
          <th width="150">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="item in products" :key="item.id"
        >
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.origin_price }}</td>
          <td>{{ item.price }}</td>
          <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
             <button 
                  type="button" 
                  class="btn btn-sm btn-outline-secondary border-end-0 rounded-0"
                >
                  編輯
                </button>
                <button 
                  type="button" 
                  class="btn btn-sm btn-outline-danger rounded-0" 
                >
                  刪除
                </button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- :pages="pagination" 外層 Products.vue 的 pagination 傳遞 data 到內層 Pagination.vue 並自定義名稱為 pages -->
    <!-- @emit-page="getProducts" 內層 Pagination.vue 用 emit 觸發外層 Products.vue 的 getProducts，且自訂義名稱為 emit-page -->
    <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>

  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import CreateProduct from '@/components/CreateProduct.vue';
import DeleteProduct from '@/components/DeleteProduct.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isLoading: false,
      isNew: false,
      status: {},
      // 不太理解這個用途
      // currentPage: 1,
    };
  },
  components: {
    Pagination,
    CreateProduct,
    DeleteProduct,
  },
  // inject: ['emitter'],
  methods: {
    // 抓取頁數商品
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.isLoading = true;
      this.$http.get(api)
      .then((response) => {
        this.products = response.data.products;
        this.pagination = response.data.pagination;
        this.isLoading = false;
      })
      .catch((error) => {
        this.isLoading = false;
        this.$httpMessageState(error.response, '錯誤訊息');
      })
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
        this.isNew = true;
      } else {
        this.tempProduct = { ...item };
        this.isNew = false;
      }
      const productComponent = this.$refs.createProduct;
      productComponent.openModal();
    },
    updateProduct(item) {
      this.tempProduct = item;
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
      this.isLoading = true;
      let httpMethod = 'post';
      let status = '新增產品';
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
        httpMethod = 'put';
        status = '更新產品';
      }
      const productComponent = this.$refs.createProduct;
      this.$http[httpMethod](api, { data: this.tempProduct }).then((response) => {
        this.isLoading = false;
        this.$httpMessageState(response, status);
        productComponent.hideModal();
        this.getProducts(this.currentPage);
      }).catch((error) => {
        this.isLoading = false;
        this.$httpMessageState(error.response, status);
      });
    },
  },
  created() {
    this.getProducts();
  },
}
</script>