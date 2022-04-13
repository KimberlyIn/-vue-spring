<template>
  <!-- 影音在 vue spring 第七週助教解說 -->
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
      // 呈現 3 秒後消失
    },
    // 我們在上面 close button 的地方綁了一個 @click="clearToast(key)"
    // 這裡的意思是他會根據 ID 幫我們從 message 裡面刪除一筆資料，並且消失提示
    // 這裡使用到兩樣東西 toastShow 和 clearToast
    clearToast(index) {
      this.messages.splice(index, 1);
    },
  },
  // emitter.on（'自訂名稱', ()=>{...}）
  // emitter.emit('自訂名稱', {...})
  mounted() {
    this.emitter.on('push-message', (message) => {
      // 接收資料的地方，會寫在 toast 元件
      // 那麼觸發的地方則寫在觸發的頁面

      // 這裡是物件結構
      // 透過 push-message 將其他頁面 ( 譬如： UserProductModal.vue ) 資料傳過來
      // 傳過來的資料就是 style: 'success', title: '圖片已上傳'
      const { style = 'success', title, content } = message;
      // 那麼如果我們不寫物件結構的話則是會長這樣
      // const style = message.style 這裡的 message 就是我們 UserProductModal.vue 傳過來的物件資料， message.style 會被賦予到 style
      // const title = message.title
      // 至於 content 沒有的話就不會呈現而已
      // 這個 message 的長相就是這樣
      // message: {
      //   style: 'success',
      //   title: '圖片已上傳',
      // }

      // 另外，const { style = 'success', title, content } = message;
      // 它的原型是這樣 const { style, title, content } = message;
      // 如果加了等號，叫做設定一個預設值
      // 他的意思是，當我今天傳過來的 message 裡面沒有 style 的時候
      // 我預設他就會是 success

      // 但今天會有一個狀況
      // 假如今天我們的 style 是長這樣： style: 'danger';
      // 他傳進來的會是 danger，因為預設只有在沒有任何東西的時候才會出現

      // 這邊這個也是物件縮寫
      // .push({
      //   // 這個 style 就是 const style = message.style 這裡的 style
      //   style: style,
      // })

      // 最後他們都會傳到上面 data 的 message 陣列裡
      this.messages.push({ style, title, content });
      this.toastShow();
    });
  },
};
</script>
