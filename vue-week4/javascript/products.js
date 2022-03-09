import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js';

let productModal = {};
let delProductModal = {};

  createApp({
    data() {
      return {
        // 存放使用者帳號密碼
        apiUrl: 'https://vue3-course-api.hexschool.io/v2',
        apiPath: 'jemmanine',
        products: [],
        tempProduct: {
          imagesUrl: [],
        },
        pagination: {},
        isNew: false,
      }
    },
    mounted() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      axios.defaults.headers.common.Authorization = token;
      this.checkAdmin();
    },
    methods: {
      checkAdmin() {
        const api = `${this.apiUrl}/api/user/check`
        axios.post(api)
        .then(() => {
          this.getData();
        })
        .catch(err => {
          alert(err.data.message);
          window.location = 'index.html';
        })
      },
      getData( page = 1) {
        const api = `${this.apiUrl}/api/${this.apiPath}/admin/products?page=${page}`;
        axios.get(api)
        .then((res) => {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          alert(err.data.message);
          window.location = 'index.html';
        })
      },
      openModal(isNew, item) {
        if(isNew === 'new') {
          this.tempProduct = {
            imagesUrl: [],
          };
          this.isNew = true;
          productModal.show();
        } else if (isNew === 'edit') {
          this.tempProduct = {...item};
          this.isNew = false;
          productModal.show();
        } else if (isNew === 'delete') {
          this.tempProduct = { ...item};
          delProductModal.show();
        }
      },
    },
  })

  .component('pagination', {
    template: '#pagination',
    props: ['pages'],
    methods: {
      emitPage(item) {
        this.$emit('emit-page', item);
      },
    },
  })

  .component('productModal', {
    template: '#productModal',
    props: ['product', 'isNew'],
    data() {
      return {
        apiUrl: 'https://vue3-course-api.hexschool.io/v2',
        apiPath: 'jemmanine',
        modal: null,
      };
    },
    mounted() {
      productModal = new bootstrap.Modal(document.getElementById('productModal'), {
        keyboard: false,
        backdrop: 'static'
      });
    },
    methods: {
      updateProduct() {
        let api = `${this.apiUrl}/api/${this.apiPath}/admin/product`;
        let http = 'post';

        if(!this.isNew) {
          api = `${this.apiUrl}/api/${this.apiPath}/admin/product/${this.product.id}`;
          http = 'put';
        }

        axios[http](api, { data: this.product })
        .then((res) => {
          alert(res.data.message);
          this.hideModal();
        })
        .catch((err) => {
          alert(err.data.message);
        });
      },
      createImages() {
        this.product.imagesUrl = [];
        this.product.imagesUrl.push('');
      },
      openModal() {
        productModal.show();
      },
      hideModal() {
        productModal.hide();
      },
    },
  })

  .component('delProductModal', {
    template: '#delProductModal',
    props: ['item'],
    data() {
      return {
        apiUrl: 'https://vue3-course-api.hexschool.io/v2',
        apiPath: 'jemmanine',
        modal: null,
      }
    },
    mounted() {
      delProductModal = new bootstrap.Modal(document.getElementById('delProductModal'), {
        keyboard: false,
        backdrop: 'static'
      });
    },
    methods: {
      deleteProduct() {
        const api = `${this.apiUrl}/api/${this.apiPath}/admin/product/${this.item.id}`;
        axios.delete(api)
        .then((res) => {
          this.hideModal();
          this.$emit('update');
        })
        .catch((err) => {
          alert(err.data.message);
        });
      },
      openModal() {
        delProductModal.show();
      },
      hideModal() {
        delProductModal.hide();
      },
    },
  })
.mount('#app');