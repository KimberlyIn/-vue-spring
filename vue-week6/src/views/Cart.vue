<template>
  <div class="container text-center">
    <h4 class="text-secondary mt-3">
      <i class="bi bi-cart-fill text-center fs-4 text-secondary"></i>
      購物車
    </h4>

    <div class="product-cart py-5">
      <Loading :active="isLoading"></Loading>
      <table class="w-100">
        <thead>
          <tr>
            <th></th>
            <th>品名</th>
            <th style="width: 150px">數量</th>
            <th class="text-end">單價</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="cart.carts">
            <tr v-for="item in cart.carts" :key="item.id">
              <td>
                <button 
                  type="button" 
                  class="close btn btn-outline-secondary"
                  @click="removeCartItem(item.id)"
                  :disabled="loadingStatus.loadingItem === item.id"
                >
                  <i 
                    class="fas fa-spinner fa-pulse"
                    v-if="loadingStatus.loadingItem === item.id"
                  ></i>
                  x
                </button>
              </td>
              <td>
                <div v-if="item.coupon">已套用優惠券</div>
                {{ item.product.title }}
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <div class="input-group mb-3">
                    <input 
                      min="1" 
                      type="number" 
                      class="form-control"
                      v-model.number="item.qty"
                      @blur="updateCart(item)"
                    >
                    <span class="input-group-text" id="basic-addon2">{{ item.product.unit }}</span>
                  </div>
                </div>
              </td>
              <td class="text-end">
                <small class="text-success" v-if="cart.final_total !== cart.total">折扣價：</small>
                {{ item.final_total }}
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>總計</td>
              <td class="text-end">{{ cart.total }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{ cart.final_total }}</td>
            </tr>
          </template>
        </tbody>
      </table>
      <div class="mt-5 text-end">
        <button 
          type="button" 
          class="btn btn-outline-danger"
          @click="deleteAll"
        >
          清空購物車
        </button>
      </div>
    </div>

    <div class="order py-5">
      <div class="col-6 mx-auto">
        <Form 
          ref="form"
          class="row g-3"
          v-slot="{ errors }"
          @submit="createOrder"
        >
          <div class="col-md-12">
            <label for="email" class="form-label">Email</label>
            <Field 
              type="email"
              name="email"
              class="form-control" 
              id="email" 
              placeholder="請輸入信箱"
              :class="{ 'is-invalid':errors['email'] }"
              rules="email|required"
              v-model="form.user.email"
            ></Field>
            <error-message name="email" class="invalid-feedback"></error-message>
          </div>
          <div class="col-md-12">
            <label for="name" class="form-label">姓名</label>
            <Field 
              type="text"
              name="姓名"
              class="form-control" 
              id="name" 
              placeholder="請輸入姓名"
              :class="{ 'is-invalid':errors['姓名'] }"
              rules="required"
              v-model="form.user.name"
            ></Field>
            <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="col-12">
            <label for="tel" class="form-label">電話</label>
            <Field 
              type="text"
              name="電話"
              class="form-control" 
              id="tel" 
              placeholder="請輸入電話"
              :class="{ 'is-invalid':errors['電話'] }"
              rules="required"
              v-model="form.user.tel"
            ></Field>
            <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="col-12">
            <label for="address" class="form-label">地址</label>
            <Field 
              type="text"
              name="地址"
              class="form-control" 
              id="address" 
              placeholder="請輸入地址"
              :class="{ 'is-invalid':errors['地址'] }"
              rules="required"
              v-model="form.user.address"
            ></Field>
            <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="col-12">
            <label for="message" class="form-label">留言</label>
            <textarea 
              class="form-control" 
              placeholder="請輸入留言" 
              id="message" 
              style="height: 200px"
              v-model="form.message"
            ></textarea>
          </div>
          <div class="col-12 text-end">
            <button 
              type="submit" 
              class="btn btn-danger"
            >送出訂單</button>
          </div>
        </Form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      loadingStatus: {
        loadingItem: '',
      },
      isLoading: false,
      cart: [],
      form: {
        user: {
          name: '',
          email: "",
          tel: "",
          address: "",
        },
        message: '',
      },
      coupon: '',
    };
  },
  mounted() {
    this.getCart();
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api)
      .then((res) => {
        this.cart = res.data.data;
        this.isLoading = false;
      })
      .catch((err) => {
        alert(err.data.message);
      })
    },
    updateCart(data) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${data.id}`;
      const cart = {
        product_id: data.product_id,
        qty: data.qty
      };

      this.$http.put(api, { data: cart })
      .then((res) => {
        alert(res.data.message);
        this.getCart();
      })
      .catch((err) => {
        alert(err.data.message);
      })
    },
    removeCartItem(id) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(api)
      .then((res) => {
        alert(res.data.message);
        this.getCart();
      })
      .catch((err) => {
        alert(err.data.message);
      });
      this.loadingStatus.loadingItem = "";
      this.isLoading = false;
    },
    deleteAll() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
      this.$http.delete(api)
      .then((res) => {
        alert(res.data.message);
        this.getCart();
      })
      .catch((err) => {
        alert(err.data.message);
      });
      this.loadingStatus.loadingItem = "";
      this.isLoading = false;
    },
    createOrder() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(api, { data: order })
      .then((res) => {
        alert(res.data.message);
        this.$refs.form.resetForm();
        this.isLoading = false;
      })
      .catch((err) => {
        alert(err.data.message);
      });
    },
  },
};
</script>