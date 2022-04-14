<template>
  <div>
    <Navbar/>
    <!-- <ToastMessages></ToastMessages> -->
    <!-- 決定是否呈現畫面 ( 是否登入 )  -->
    <router-view v-if="status"/>
  </div>
</template>

<script>
import emitter from '@/methods/eventBus';
import Navbar from '@/components/Navbar.vue';
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  data() {
    return {
      // 決定是否呈現畫面 ( 是否登入 ) 
      status: false,
    };
  },
  components: {
    Navbar,
    ToastMessages,
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = `${token}`;
    const api = `${process.env.VUE_APP_API}/api/user/check`;
    this.$http.post(api)
    .then((response) => {
      this.$httpMessageState(response, '登入');
      this.status = true;
    })
    .catch((error) => {
      this.$router.push('/');
      this.$httpMessageState(error.response, '錯誤訊息');
    })
  },
}
</script>