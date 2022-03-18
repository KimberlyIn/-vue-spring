<template>
  <div>
    <div>
      <!-- <Loading :actuve="isLoading" :z-index="1060"></Loading> -->
      <div class="text-end mt-4 mx-5"> 
        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#couponModal">
          建立新的頁面
        </button>
      </div>
      <div class="px-3">
        <table class="table table-hover mt-4">
          <thead>
            <tr>
              <th width="200">標題</th>
              <th width="200">作者</th>
              <th>描述</th>
              <th width="150">建立時間</th>
              <th width="150">是否公開</th>
              <th width="150">編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>標題</td>
              <td>作者</td>
              <td>描述</td>
              <td>建立時間</td>
              <td>
                <span class="text-success">已上架</span>
                <span class="text-secondary">未上架</span>
              </td>
              <td>
                <button 
                  type="button" 
                  class="btn btn-sm btn-outline-secondary border-end-0 rounded-0"
                >
                  編輯
                </button>
                <button 
                  type="button" 
                  class="btn btn-sm btn-outline-danger rounded-0"
                >
                  刪除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import DeleteProduct from '@/components/DeleteProduct.vue';
import ArticleModal from '@/components/ArticleModal.vue';

export default {
  data() {
    return {
      isLoading: false,
      isNew: false,
      tempArticle: {},
      currentPage: 1,
    };
  },
  components: {
    DeleteProduct,
    ArticleModal,
  },
  methods: {
    getArticles() {
      this.currentPage = page
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/articles?page=${page}`;
      this.isLoading = true;
      this.$http.get(api)
      .then((response) => {
        this.isLoading = false;
        this.tempArticle = response.data.articles;
        this.pagination = response.data.pagination;
      })
      .catch((error) => {
        this.isLoading = false;
        console.log('error', error.response, error.request, error.message);
      })

    }
  },
  created() {
    this.getArticle();
  },
}
</script>
