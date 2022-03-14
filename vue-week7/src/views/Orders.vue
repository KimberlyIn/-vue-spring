<template>
  <div>
    <h3>Orders.vue</h3>
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
          <tr>
            <td>2022/3/2</td>
            <td>miss.liu.2018@gmail.com</td>
            <td>黑色真皮側背包 數量：1 個</td>
            <td>5500</td>
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
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: {},
      isLoading: false,
    };
  },
  component: {
    
  },
  mounted() {
    
  },
  methods: {
    getOrders() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=:${this.order.id}`;
      this.isLoading = true;
      this.$http.get(api)
      .then((response) => {
        this.isLoading = false;
        this.orders = response.data.orders;
        this.$httpMessageState(response, '取得訂單');
      })
      .catch((error) => {
        this.isLoading = false;
        this.$httpMessageState(error.response, '');
      })
    },
  },
}
</script>