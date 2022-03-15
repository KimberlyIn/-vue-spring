<template>
  <div>
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <table class="table mt-4">
        <thead>
          <tr>
            <th>購買時間</th>
            <th>Email</th>
            <th>購買款項</th>
            <th>應付金額</th>
            <th>是否付款</th>
            <th>編輯</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, key) in orders" :key="key">
            <tr>
              <td>{{ item.create_at }}</td>
              <td>
                <span v-text="item.user.email" v-if="item.user"></span>
              </td>
              <td>
                <ul class="list-unstyled">
                  <!-- v-for="(product, i) in item.products" (product, i) product 可以自行定義， i 為索引值
                  item.products 用網頁看 vue 項目會看到，項目底下有一個 products
                  products 裡面還有一個 product
                  因此 {{ product.product.title }} 則是 {{ 自定義的 product.項目裡的 product.product 裡的 title }} -->
                  <li v-for="(product, i) in item.products" :key="i">
                    <p>{{ product.product.title }} </p>
                    <!-- {{ product.qty }} 用網頁看 vue 可以看到 qty 和 product 同層，因此這邊是 {{ 自定義 product.products 的 qty }} -->
                    <p>數量：{{ product.qty }} {{ product.product.unit }}</p>
                  </li>
                </ul>
              </td>
              <td>
                {{ item.total }}
              </td>
              <td>已付款</td>
              <td>
                <button 
                  type="button" 
                  class="btn btn-sm btn-outline-secondary border-end-0 rounded-0"
                >
                  檢視
                </button>
                <button 
                  type="button" 
                  class="btn btn-sm btn-outline-danger rounded-0" 
                >
                  刪除
                </button>
              </td>
            </tr>
          </template>         
        </tbody>
      </table>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      orders: {},
      isLoading: false,
      pagination: {},
      currentPage: 1,
    };
  },
  component: {
    Pagination,
  },
  methods: {
    getOrders(currentPage = 1) {
      this.currentPage = currentPage;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=:${currentPage}`;
      this.isLoading = true;
      this.$http.get(api)
      .then((response) => {
        this.orders = response.data.orders;
        this.pagination = response.data.pagination;
        this.isLoading = false;
      })
      .catch((error) => {
        this.isLoading = false;
        this.$httpMessageState(error.response, '錯誤訊息');
      })
    },
  },
  created() {
    this.getOrders();
  },
}
</script>