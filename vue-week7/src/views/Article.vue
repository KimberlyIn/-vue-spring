<template>
  <div>
    <div>
      <!-- <Loading :actuve="isLoading" :z-index="1060"></Loading> -->
      <div class="text-end mt-4 mx-5"> 
        <button 
          type="button" 
          class="btn btn-secondary" 
          @click="openModal(true)"
        >
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
            <tr v-for="article in articles" :key="article.id">
              <td>{{ article.title }}</td>
              <td>{{ article.author }}</td>
              <td>{{ article.description }}</td>
              <td>{{ $filters.date(article.create_at) }}</td>
              <td>
                <span class="text-success" v-if="article.isPublic">已上架</span>
                <span class="text-secondary" v-else>未上架</span>
              </td>
              <td>
                <button 
                  type="button" 
                  class="btn btn-sm btn-outline-secondary border-end-0 rounded-0"
                  @click=" getArticle(article.id)"
                >
                  編輯
                </button>
                <button 
                  type="button" 
                  class="btn btn-sm btn-outline-danger rounded-0"
                  @click="openDelModal(article)"
                >
                  刪除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <ArticleModal :article="tempArticle" :isNew="isNew" @get-article="updateArticle" ref="articleModal" />
        <DeleteProduct :item="tempArticle" @del-product="delArticle" ref="deleteProduct" />
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
      articles: [],
      tempArticle: {},
      articleData: {
        title: '',
        create_at: 0,
        author: '',
        isPublic: true,
        content: '',
      },
      currentPage: 1,
    };
  },
  inject: ['emitter'],
  components: {
    DeleteProduct,
    ArticleModal,
  },
  methods: {
    // 取得文章列表
    getArticles(page = 1) {
      this.currentPage = page
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/articles?page=${page}`;
      this.isLoading = true;
      this.$http.get(api)
      .then((response) => {
        this.isLoading = false;
        this.articles = response.data.articles;
        this.pagination = response.data.pagination;
      })
      .catch((error) => {
        this.isLoading = false;
        console.log('error', error.response, error.request, error.message);
        this.isLoading = false;
        this.emitter.$emit('push-message', {
          title: '連線錯誤',
          style: 'danger',
          content: error.message,
        });
      })
    },
    // 取得單一文章
    getArticle(id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${id}`;
      this.isLoading = true;
      this.$http.get(api)
      .then((response) => {
        this.openModal(false, response.data.article);
        this.isNew = false;
      })
      .catch((error) => {
        console.log('error', error.response, error.request, error.message);
        this.isLoading = false;
        this.emitter.emit('push-message', {
          title: '連線錯誤',
          style: 'danger',
          content: error.message,
        });
      })
    },
    openModal(isNew, item) {
      if(isNew) {
        this.tempArticle = {
          isPublic: false,
          create_at: new Date().getTime() / 1000,
          tag: [],
        };
        this.isNew = true;
      } else {
        this.tempArticle = { ...item };
        this.isNew = false;
      }
      this.$refs.articleModal.openModal();
    },
    // 辨別新增文章或編輯文章
    updateArticle() {
      this.isLoading = true;
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article`;
      let apiMethods = 'post';
      let data = this.articleData;
      let status = '新增文章';

      if(!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${this.tempArticle.id}`;
        apiMethods = 'put';
        data = this.articleData;
        status = '更新貼文';
      };

      this.$http[apiMethods](api, { data })
      .then(() => {
        this.isLoading = false,
        this.$httpMessageState(response, status);
        this.$refs.articleModal.openModal();
        this.getArticles(this.currentPage);
      })
      .catch((error) => {
        this.isLoading = false;
        this.$httpMessageState(error.response, '錯誤訊息');
      })
    },
    openDelModal(item) {
      this.tempArticle = {...item};
      this.$refs.deleteProduct.openModal();
    },
    delArticle() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${this.tempArticle.id}`;
      this.isLoading = true;
      this.$http.delete(api)
      .then((response) => {
        this.isLoading = false;
        this.$refs.deleteProduct.openModal();
        this.$httpMessageState(response, '刪除成功');
        this.getArticles(this.currentPage);
      })
      .catch((error) => {
        this.isLoading = false;
        this.$httpMessageState(error.response, '刪除貼文');
      })
    },
  },
  created() {
    this.getArticles();
  },
}
</script>
