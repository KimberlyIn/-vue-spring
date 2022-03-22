<template>
  <div>
    <div 
      class="modal fade" 
      id="articleModal" 
      ref="modal" tabindex="-1" 
      aria-labelledby="exampleModalLabel" 
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-dark">
            <h5 class="modal-title text-light" id="exampleModalLabel">
              <span>新增優惠卷</span>
              <span>編輯貼文</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-4"></div>

            </div>


            
            <div>
              <div class="col-12 mb-3">
                <label for="title" class="form-label">標題</label>
                <input type="text" class="form-control" id="title" placeholder="請輸入標題">
              </div>
              <div class="col-12 mb-3">
                <label for="coupon-code" class="form-label">優惠碼</label>
                <input type="text" class="form-control" id="coupon-code" placeholder="請輸入優惠碼">
              </div>
              <div class="col-12 mb-3">
                <label for="due_date" class="form-label">到期日</label>
                <input type="date" class="form-control" id="due_date">
              </div>
              <div class="col-12 mb-3">
                <label for="percent" class="form-label">折扣百分比</label>
                <input type="number" class="form-control" id="percent" placeholder="請輸入折扣百分比">
              </div>
              <div class="form-check">
                <input 
                  class="form-check-input" 
                  type="checkbox" 
                  id="is_enabled"
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
            >
              <!-- 如果 isNew 是 true 就新增商品，如果是 false 就更新優惠券 -->
              isNew ? '新增商品': '更新優惠券' 
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
    article: {
      type: Object,
      default() {
        return {};
      },
    },
    isNew: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    
  },
  emitter: ['get-article'],
  mixins: [modalMixin],
}
</script>