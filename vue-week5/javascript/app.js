import userProductModal from './userProductModal.js';

const { defineRule, Form, Field, ErrorMessage, configure } = VeeValidate;
const { required, email, min, max } = VeeValidateRules;
const { localize, loadLocaleFromURL } = VeeValidateI18n;

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('max', max);

loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_TW.json');

configure({
  generateMessage: localize('zh_TW'),
});

const apiUrl = 'https://vue3-course-api.hexschool.io/v2';
const apiPath = 'jemmanine';

Vue.createApp({
  data() {
    return {
      loadingStatus: {
        loadingItem: '',
      },
      products: [],
      product: {},
      cart: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    }
  },
  components: {
    VForm: Form,
    VField: Field,
    ErrorMessage: ErrorMessage,
  },
  methods: {
    // checkAdmin() {
    //   const api = `${apiUrl}/api/user/check`;
    //   axios.post(api)
    //   .then(() => {
    //     this.getData();
    //   })
    //   .catch((err) => {
    //     alert(err.res.data.message);
    //     window.location = '<indox className="h"></indox>tml';
    //   })
    // },

    // 取得全部商品
    getData() {
      const api = `${apiUrl}/api/${apiPath}/products`;
      axios.get(api)
      .then((res) => {
        this.products = res.data.products;
      })
      .catch((err) => {
        alert(err.data.massage);
      })
    },
    // 取得單一商品
    getProduct(id) {
      const api = `${apiUrl}/api/${apiPath}/product/${id}`;
      this.loadingStatus.loadingItem = id;
      axios.get(api)
      .then((res) => {
        this.loadingStatus.loadingItem = '';
        this.product = res.data.product;
        this.$refs.userProductModal.openModal();
      })
      .catch((err) => {
        alert(err.data.massage);
      })
    },
    // 加入購物車
    addToCart(id, qty = 1) {
      const url = `${apiUrl}/api/${apiPath}/cart`;
      this.loadingStatus.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };

      this.$refs.userProductModal.hideModal();
      axios.post(url, { data: cart }).then((response) => {
        this.loadingStatus.loadingItem = '';
        alert(response.data.message);
        this.getCart();
      }).catch((err) => {
        alert(err.data.message);
      });
    },
    // 更新購物車
    updateCart(data) {
      const api = `${apiUrl}/api/${apiPath}/cart/${data.id}`;
      this.loadingStatus.loadingItem = data.id;
      const cart = {
        product_id: data.product_id,
        qty: data.qty,
      };
      axios.put(api, { data: cart })
      .then((res) => { 
        alert(res.data.message);
        this.loadingStatus.loadingItem = '';
        this.getCart();
      })
      .catch((err) => {
        alert(err.data.message);
        this.loadingStatus.loadingItem = '';
      });
    },
    // 取得購物車
    getCart() {
      const api = `${apiUrl}/api/${apiPath}/cart`;
      axios.get(api)
      .then((res) => {
        this.cart = res.data.data;
      })
      .catch((err) => {
        alert(err.res.data.message);
      })
    },
    // 刪除單一商品
    removeCartItem(id) {
      const api = `${apiUrl}/api/${apiPath}/cart/${id}`;
      this.loadingStatus.loadingItem = id;
      axios.delete(api)
      .then((res) => {
        alert(res.data.message);
        this.loadingStatus.loadingItem = '';
        this.getCart();
      })
      .catch((err) => {
        alert(err.data.message);
      })
    },
    // 清空購物車
    delCartAll() {
      const api = `${apiUrl}/api/${apiPath}/carts`;
      axios.delete(api)
      .then((res) => {
        alert(res.data.message);
        this.getCart();
      })
      .catch((err) => {
        alert(err.data.message);
      })
    },
    // 建立訂單
    createOrder() {
      const api = `${apiUrl}/api/${apiPath}/order`;
      const order = this.form;
      axios.post(api, { data: order })
      .then((res) => {
        alert(res.data.message);
        this.$refs.form.resetForm();
        this.getCart();
      })
      .catch((err) => {
        alert(err.data.message);
      });
    },
  },
  mounted() {
    this.getData();
    this.getCart();
    // const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    // axios.defaults.headers.common.Authorization = token;
    // this.checkAdmin();
  },
})

.component('userProductModal', userProductModal)
.mount('#app');