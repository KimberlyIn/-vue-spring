<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-5">
              <img class="img-fluid" :src="product.imagesUrl">
            </div>
            <div class="col-7">
              <div>
                <span class="px-2 py-1 badge rounded-pill text-light bg-success">{{ product.category }}</span>
                <p class="mt-1">商品描述：{{ product.description }}</p>
              </div>

              <div>
                <p>商品內容：{{ product.content }}</p>
              </div>

              <div>
                <div class="h5" v-if="!product.price">原價 {{ product.origin_price }}</div>
                <del class="h6 text-muted" v-if="product.price">原價 {{ product.origin_price }}</del>
                <div class="h5" v-if="product.price">現在只要 {{ product.price }}</div>
              </div>

              <div>
                <div class="input-group mb-3">
                  <input 
                    min="1" 
                    type="number" 
                    class="form-control"
                    v-model.number="qty"
                  >
                  <button 
                    type="button" 
                    class="btn btn-success"
                    @click="$emit('add-to-cart', product.id, qty)"
                  >
                    加入購物車
                  </button>
                </div>
              </div>



            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: {
    product: {
      type:Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      status: {},
      modal: '',
      qty: 1,
    };
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal,{
      keyboard: false,
      backdrop: 'static'
    });
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
}
</script>