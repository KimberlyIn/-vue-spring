import eventBus from '@/methods/eventBus';

// 直接 export 這整段出去，並且在 main.js 直接全域載入
// 他被定義為 $httpMessageStatus，前面會有錢字號助教猜測是老師額外定義的方法，不希望受到混淆。
export default function (response, title = '更新') {
  if (response.data.success) {
    eventBus.emit('push-message', {
      style: 'success',
      title: `${title}成功`,
    });
  } else {
    // 有些訊息是字串，有些則是陣列，在此統一格式
    const message = typeof response.data.message === 'string'
      ? [response.data.message] : response.data.message;
    // 這個部分在別的地方會一直看到，原因是因為這裡是必須重複的寫的。
    eventBus.emit('push-message', {
      style: 'danger',
      title: `${title}失敗`,
      content: message.join('、'),
    });
  }
}