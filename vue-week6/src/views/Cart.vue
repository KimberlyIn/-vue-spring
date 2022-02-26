<template>
  <i class="bi bi-cart-fill text-center fs-4 text-secondary"></i>
  <h4 class="text-secondary mt-2">購物車</h4>

  <div class="product-cart py-5">
    <table class="w-100">
      <thead>
        <tr>
          <th></th>
          <th>品名</th>
          <th style="width: 150px">數量</th>
          <th>單價</th>
        </tr>
      </thead>
      <tbody>
        <template>
          <tr>
            <td>
              <button 
                type="button" 
                class="close btn btn-outline-secondary"
              >
                <i class="fas fa-spinner fa-pulse"></i>
                x
              </button>
            </td>
            <td>
              title
            </td>
            <td>
              <div class="input-group input-group-sm">
                <div class="input-group mb-3">
                  <input 
                    min="1" 
                    type="number" 
                    class="form-control"
                  >
                  <span class="input-group-text" id="basic-addon2">個</span>
                </div>
              </div>
            </td>
            <td class="text-end">
              <small class="text-success">折扣價：</small>
              final_total
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>總計</td>
            <td class="text-end">total</td>
          </tr>
          <tr>
            <td colspan="3" class="text-end text-success">折扣價</td>
            <td class="text-end text-success">final_total</td>
          </tr>
        </template>
      </tbody>
    </table>
    <div class="mt-5 text-end">
      <button 
        type="button" 
        class="btn btn-outline-danger"
      >
        清空購物車
      </button>
    </div>
  </div>

  <div class="order py-5">
    <div class="col-6 mx-auto">
      <v-form class="row g-3">
        errors
        <div class="col-md-12">
          <label for="email" class="form-label">Email</label>
          <v-field 
            type="email"
            name="email"
            class="form-control" 
            id="email" 
            placeholder="請輸入信箱"
          ></v-field>
        </div>
        <div class="col-md-12">
          <label for="name" class="form-label">姓名</label>
          <v-field 
            type="text"
            name="姓名"
            class="form-control" 
            id="name" 
            placeholder="請輸入姓名"
          ></v-field>
        </div>
        <div class="col-12">
          <label for="tel" class="form-label">電話</label>
          <v-field 
            type="text"
            name="電話"
            class="form-control" 
            id="tel" 
            placeholder="請輸入電話"
          ></v-field>
        </div>
        <div class="col-12">
          <label for="address" class="form-label">地址</label>
          <v-field 
            type="text"
            name="地址"
            class="form-control" 
            id="address" 
            placeholder="請輸入地址"
          ></v-field>
        </div>
        <div class="col-12">
          <label for="message" class="form-label">留言</label>
          <textarea class="form-control" placeholder="請輸入留言" id="message" style="height: 200px"></textarea>
        </div>
        <div class="col-12 text-end">
          <button type="submit" class="btn btn-danger">送出訂單</button>
        </div>
      </v-form>
    </div>
  </div>


</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>