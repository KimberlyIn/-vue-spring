<template>
  <i class="bi bi-bag-fill fs-4 text-secondary"></i>
  <h4 class="text-secondary mt-2">商品列表</h4>

  <div id="app">
    <div class="container">
      <div class="product py-5" >
        <table class="table align-middle">
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="width: 200px">
                <img src="" alt="">
              </td>
              <td>
                title
              </td>
              <td>
                <!-- <div class="h5">原價</div> -->
                <del class="h6">原價 700 元</del>
                <div class="h5">現在只要 600 元</div>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <button 
                    class="btn btn-outline-secondary border-end-0"
                    type="button"
                  >
                    <i 
                      class="fas fa-spinner fa-pulse"
                    ></i>
                    查看更多
                  </button>
                  <button 
                    class="btn btn-outline-danger"
                    type="button"
                  >
                  <i class="fas fa-spinner fa-pulse"></i>
                    加到購物車
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      

    </div>
  </div>


    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-5">
                <img class="img-fluid" src="">
              </div>
              <div class="col-7">
                <div>
                  <span class="px-2 py-1 badge rounded-pill text-light bg-success">category</span>
                  <p class="mt-1">description</p>
                </div>

                <div>
                  <p>content</p>
                </div>

                <div>
                  <p class="mb-0 fw-light text-decoration-line-through">原價 500 元</p>
                  <p>現在只要 600 元</p>
                </div>

                <div>
                  <div class="input-group mb-3">
                    <input 
                      min="1" 
                      type="number" 
                      class="form-control"
                    >
                    <button 
                      type="button" 
                      class="btn btn-success"
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
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    
  },
  mounted() {
    
  },
};
</script>