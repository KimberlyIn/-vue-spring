<template>
  <div>
    <div class="modal fade " id="productModal" ref="productModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header bg-secondary">
            <h5 class="modal-title text-light" id="staticBackdropLabel">
              <span>新增產品</span>
              <span>編輯產品</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body d-flex">
            <div class="col-sm-4 pe-3">
              <div class="mb-3">
                <label for="imageUrl" class="form-label">輸入主圖片網址</label>
                <input 
                  type="text" 
                  class="form-control w-100" 
                  placeholder="輸入主圖片網址" 
                  aria-label="輸入主圖片網址"
                  
                >
                <!-- 因為圖片是由外層 tempProduct 傳進內層 Product？ -->
                <img class="img-fluid"  alt="">
              </div>
              <div>
                <div 
                  class="mb-3">
                  <div>
                    <label for="imageUrl" class="form-label">輸入圖片網址</label> 
                    <input 
                      type="text" 
                      class="form-control w-100" 
                      placeholder="輸入圖片網址" 
                      aria-label="輸入圖片網址"
                       
                    >
                    <img class="img-fluid">
                  </div>
                </div>
                <div>
                  <button 
                    type="button" 
                    class="btn w-100 btn-outline-secondary"
                  >
                    新增圖片
                  </button>
                </div>
                <div>
                  <button 
                    type="button" 
                    class="btn w-100 btn-danger"
                  >
                    刪除圖片
                  </button>
                </div>
              </div>
              <!-- 這一段不寫，還是可以新增圖片跟刪除圖片，不是很理解這一段的意思 -->
              <div>
                <button 
                  type="button" 
                  class="btn w-100 btn-outline-secondary"
                >
                  新增圖片
                </button>
              </div>
            </div>
            <div class="col-sm-8 pe-3">
              <div class="mb-3">
                <label for="title" class="form-label mb-2">標題</label>
                <input type="text" class="form-control w-100" id="title" placeholder="請輸入標題" aria-label="請輸入標題" >
              </div>

              <div class="row mb-3">
                <div class="col-6">
                  <label for="category" class="form-label">分類</label>
                  <input type="text" class="form-control w-100" id="category" placeholder="請輸入分類" aria-label="請輸入分類" >
                </div>
                <div class="col-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input type="text" class="form-control w-100" id="origin_price" placeholder="請輸入原價" aria-label="請輸入原價">
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-6">
                  <label for="unit" class="form-label">單位</label>
                  <input type="text" class="form-control w-100" id="unit" placeholder="請輸入單位" aria-label="請輸入單位">
                </div>
                <div class="col-6">
                  <label for="price" class="form-label">售價</label>
                  <input type="text" class="form-control w-100" id="price" placeholder="請輸入售價" aria-label="請輸入售價">
                </div>
              </div>

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea class="form-control w-100" id="description" placeholder="請輸入產品描述"></textarea>
              </div>

              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea class="form-control w-100" id="content" placeholder="請輸入說明內容"></textarea>
              </div>

              <div class="check-box">
                <input id="is_enabled" class="form-check-input" type="checkbox">
                <label for="is_enabled" class="form-label">是否取用</label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-dark">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>