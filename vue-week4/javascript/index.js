import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js';

createApp({
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      const api = 'https://vue3-course-api.hexschool.io/admin/signin';
      axios.post(api, this.user)
      .then((res) => {
        // 取得 token
        // 存取至 cookie
        // 跳轉頁面
        const { token, expired } = res.data;
        document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`;
        window.location = 'products.html';
      })
      .catch((err) => {
        alert(err.data.message);
      });
    },
  },
}).mount('#app');