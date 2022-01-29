import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js';

let productModal = {};
let delProductModal = {};

createApp({
  data() {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io/v2',
      apiPath: 'jemmanine',
      products: [],
      isNew: false,
      tempProduct: {
        imagesUrl: [],
      }
    }
  },
  mounted() {
    productModal = new bootstrap.Modal(document.getElementById('productModal'), {
      keyboard: false
    });

    delProductModal = new bootstrap.Modal(document.getElementById('delProductModal'), {
      keyboard: false
    });

    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = token;

    this.checkAdmin();
  },
  methods: {
    checkAdmin() {
      const url = `${this.apiUrl}/api/user/check`;
      axios.post(url)
        .then(() => {
          this.getProduct();
        })
        .catch((err) => {
          alert(err.data.message)
          window.location = 'login.html';
        })
    },
    getProduct() {
      const url = `${this.apiUrl}/api/${this.apiPath}/admin/products/all`;
      axios.get(url)
      .then((response) => {
        this.products = response.data.products;
      })
      .catch((error) => {
        alert(error.data.message);
      })
    },
    updateProduct() {
      const url = `${this.apiUrl}/api/${this.apiPath}/admin/product`
      let http = 'post';

      if(!this.isNew) {
        url = `${this.apiUrl}/api/${this.apiPath}/admin/product/${item.id}`
        http = 'put';
      }

      axios[http](url, { data: this.tempProduct })
      .then((response) => {
        alert(response.data.massage);
        // 為什麼時候的資料會跑到 productModal 裡面？ productModal 在這裡的功用是什麼？
        productModal.hide();
        this.getProduct();
      })
      .catch((error) => {
        alert(error.data.message);
      })
    },
    openModal( isNew, item) {
      if(isNew === 'new') {
        // 新增一個資料
        this.tempProduct = {
          imagesUrl: [],
        };
        this.isNew = true;
        productModal.show();
      } else if(isNew === 'edit') {
        this.isNew = false;
        this.tempProduct = { ...item };
        productModal.show();
      } else if(isNew === 'delete') {
        this.tempProduct = { ...item };
        delProductModal.show();
      }
    },
    createImages() {
      this.tempProduct.imagesUrl = [];
      this.tempProduct.imagesUrl.push('');
    },
  },
}).mount('#app');