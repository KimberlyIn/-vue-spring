<template>
<!-- 講義連結：https://quip.com/nKbJA0ae4Tou/2022-Vue-5 -->
  <!-- style="z-index: 1500" 必須蓋在最上面，甚至比 loading 更上面 -->
  <div
    class="toast-container position-fixed pe-3 top-0 end-0"
    style="z-index: 1500"
  >
    <!-- 
    要做堆疊的 toast，因此會使用到 v-for，
    我們把資料放在 data 裡面的 massage，
    一個 toast 就是一個物件。

    msg 就是 data 裡面的 message，裡面存放 title、content....資料。
    -->
    <div
      v-for="(msg, key) in messages"
      :key="key"
      class="toast show"
      :class="`toast${key}`"
      role="alert"
    >
      <div class="toast-header">
        <!-- 
        :class="`bg-${msg.style}`" 是樣式，把 bootstrap 的 bg-success 代進來，
        它是一個 綠色的方形吧？
        -->
        <span
          :class="`bg-${msg.style}`"
          class="p-2 rounded me-2 d-inline-block"
        ></span>
        <strong class="me-auto">{{ msg.title }}</strong>
        <button
          type="button"
          class="btn-close"
          @click="clearToast(key)"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body" v-if="msg.content">
        {{ msg.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 該怎麼把 messages 的資料傳進來這個 messages 陣列呢？
      // 會使用到 mitt 來元件與元件間互相傳遞，也就是這邊這個 inject: ['emitter']
      messages: [],
    };
  },
  inject: ['emitter'],
  methods: {
    toastShow() {
      setTimeout(() => {
        this.messages.shift();
      }, 6000);
    },
    clearToast(index) {
      this.messages.splice(index, 1);
    },
  },
  mounted() {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message;
      this.messages.push({ style, title, content });
      this.toastShow();
    });
  },
};
</script>
