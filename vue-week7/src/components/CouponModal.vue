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
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
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
      due_data: '',
    };
  },
  emits: ['get-coupon'],
  mixins: [modalMixin],
  watch: {
    coupon() {
      this.tempCoupon = this.coupon;
      const couponDate = new date(this.tempCoupon.due_data / 1000)
      
    },
  },
}
</script>