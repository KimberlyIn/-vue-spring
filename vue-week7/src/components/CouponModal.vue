<template>
  <div>
    <div 
      class="modal fade" 
      id="couponModal" 
      ref="modal" tabindex="-1" 
      aria-labelledby="exampleModalLabel" 
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-dark">
            <h5 class="modal-title text-light" id="exampleModalLabel">
              <span v-if="isNew">新增優惠卷</span>
              <span v-else>編輯貼文</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div>
              <div class="col-12 mb-3">
                <label for="title" class="form-label">標題</label>
                <input type="text" class="form-control" id="title" v-model="tempCoupon.title" placeholder="請輸入標題">
              </div>
              <div class="col-12 mb-3">
                <label for="coupon-code" class="form-label">優惠碼</label>
                <input type="text" class="form-control" id="coupon-code" v-model="tempCoupon.code" placeholder="請輸入優惠碼">
              </div>
              <div class="col-12 mb-3">
                <label for="due_date" class="form-label">到期日</label>
                <!-- due_date 在 coupons 裡面 -->
                <input type="date" class="form-control" id="due_date" v-model="due_date">
              </div>
              <div class="col-12 mb-3">
                <label for="percent" class="form-label">折扣百分比</label>
                <input type="number" class="form-control" id="percent" v-model="tempCoupon.percent" placeholder="請輸入折扣百分比">
              </div>
              <div class="form-check">
                <input 
                  class="form-check-input" 
                  type="checkbox" 
                  id="is_enabled"
                  v-model="tempCoupon.is_enabled" 
                  :true-value="1" 
                  :false-value="0"
                >
                <label class="form-check-label" for="is_enabled">
                  是否啟用
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
            <button 
              type="button" 
              class="btn btn-secondary" 
              @click="$emit('update-coupon', tempCoupon)"
            >
              <!-- 如果 isNew 是 true 就新增商品，如果是 false 就更新優惠券 -->
              {{ isNew ? '新增商品': '更新優惠券' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    coupon: {
      type: Object,
      default() {
        return {};
      },
    },
    isNew: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tempCoupon: {},
      due_date: '',
    };
  },
  emits: ['update-coupon'],
  mixins: [modalMixin],
  watch: {
    coupon() {
      // 將 this.coupon 賦予 this.tempCoupon
      this.tempCoupon = this.coupon;
      // 對 couponDate 賦予時間
      // this.tempCoupon.due_date 會提取到一個時間戳，像是這樣：1636588800
      // 我們必須轉換成看的懂的樣子，因此要先轉換成豪秒 1636588800 *1000，除非後端給的是 13 碼，那就可以不用 *1000，
      // 此時已經可以拿到一個看的懂得格式，但這個格式也不是我們要的
      // 他是長這個樣子： Thu Nov 11 2021 08:00:00 GMT+0800 (台北標準時間)
      // 我們希望的格式是這樣： 2021-11-11，因此我們還需要再做轉換
      // 所以我們會需要使用到 toISOString()，他是一個瀏覽器內建的函式，ISO 是一個格式，然後是 String
      // 他的格式是 YYYY-MM-DDTHH:mm:ss.sssZ
      // 我們只需要 YYYY-MM-DDTHH，所以使用到 split 把兩者分開，從 T 的地方分開。
      // split 就是分開的方法

      // Z 是時區的意思

      // 這一段回傳後是一個陣列形式
      // 分開之後要賦予回 this.due_date，但是我們只需要 2021-11-11
      // 因此底下 [this.due_date] = couponDate; 的原型就是 this.due_data = dateAndTime[0]，0 的部分就是取到 2021-11-11
      // 為什麼必須寫成 [this.due_date] = couponDate，因為有一些 vue 標準會要求我們寫成陣列結構的模式。

      // 但假如我們今天是 this.due_data = dateAndTime[1] ，那麼就會取到後面時間的部分
      // 因為這裡帶出來的陣列是長這樣 ['2021-11-11', '00:00:00.000Z']
      // 我們這裡寫法又會變成 [,this.due_date] = couponDate;
      const couponDate = new Date(this.tempCoupon.due_date * 1000)
      .toISOString().split('T');
      // 將已賦予日期的 couponDate 賦予 this.due_data
      [this.due_date] = couponDate;
    },
    due_date() {
      // 對 this.tempCoupon.due_data 賦予月份
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000);
    },
  },
}
</script>