import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js';

createApp({
  data() {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io/v2',
      apiPath: 'jemmanine',
      products: [],
      tempProduct: {},
    }
  },
  methods: {
    loginAdmin() {
      const api =  `${this.apiUrl}/api/user/check`;
      axios.post(api)
        .then(() => {
          this.getProducts();
        })
        .catch((err) => {
          alert(err.data.message)
          window.location = 'index.html';
        })
      // .then((response) => {
      //   if(response.data.success){
      //     alert(response.data.message);
      //     this.getProducts();
      //   } else {
      //     alert(response.data.message);
      //     window.location = "index.html";
      //   }
      // })
    },
    getProducts() {
      // const api = `${this.apiUrl}/api/${this.apiPath}/admin/products/all`
      const api = `${this.apiUrl}/api/${this.apiPath}/admin/products`
      axios.get(api)
      .then((response) => {
        this.products = response.data.products;
      })
      .catch((error) => {
        alert(error.data.message);
      })
    },
    openProduct(item) {
      this.tempProduct = item;
    },
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = token;

    this.loginAdmin();
  }
}).mount('#app');