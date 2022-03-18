(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c86c7800"],{1799:function(e,t,c){"use strict";var o=c("7a23"),a={class:"d-flex justify-content-center"},n={"aria-label":"Page navigation example"},l={class:"pagination"},r=Object(o["createElementVNode"])("span",{"aria-hidden":"true"},"«",-1),i=[r],d={key:0,class:"page-link"},s=["onClick"],u=Object(o["createElementVNode"])("span",{"aria-hidden":"true"},"»",-1),m=[u];function p(e,t,c,r,u,p){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createElementVNode"])("nav",n,[Object(o["createElementVNode"])("ul",l,[Object(o["createElementVNode"])("li",{class:Object(o["normalizeClass"])([{disabled:!c.pages.has_pre},"page-item"])},[Object(o["createElementVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=Object(o["withModifiers"])((function(e){return p.updatePage(c.pages.current_page-1)}),["prevent"]))},i)],2),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(c.pages.total_pages,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{class:Object(o["normalizeClass"])(["page-item",{active:e===c.pages.current_page}]),key:e},[e===c.pages.current_page?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",d,Object(o["toDisplayString"])(e),1)):(Object(o["openBlock"])(),Object(o["createElementBlock"])("a",{key:1,class:"page-link",href:"#",onClick:Object(o["withModifiers"])((function(t){return p.updatePage(e)}),["prevent"])},Object(o["toDisplayString"])(e),9,s))],2)})),128)),Object(o["createElementVNode"])("li",{class:Object(o["normalizeClass"])(["page-item",{disabled:!c.pages.has_next}])},[Object(o["createElementVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(e){return p.updatePage(c.pages.current_page+1)}),["prevent"]))},m)],2)])])])}var b={props:["pages"],methods:{updatePage:function(e){this.$emit("emitPages",e)}}},j=c("6b0d"),O=c.n(j);const h=O()(b,[["render",p]]);t["a"]=h},a434:function(e,t,c){"use strict";var o=c("23e7"),a=c("da84"),n=c("23cb"),l=c("5926"),r=c("07fa"),i=c("7b0b"),d=c("65f0"),s=c("8418"),u=c("1dde"),m=u("splice"),p=a.TypeError,b=Math.max,j=Math.min,O=9007199254740991,h="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!m},{splice:function(e,t){var c,o,a,u,m,f,g=i(this),v=r(g),E=n(e,v),V=arguments.length;if(0===V?c=o=0:1===V?(c=0,o=v-E):(c=V-2,o=j(b(l(t),0),v-E)),v+c-o>O)throw p(h);for(a=d(g,o),u=0;u<o;u++)m=E+u,m in g&&s(a,u,g[m]);if(a.length=o,c<o){for(u=E;u<v-o;u++)m=u+o,f=u+c,m in g?g[f]=g[m]:delete g[f];for(u=v;u>v-o+c;u--)delete g[u-1]}else if(c>o)for(u=v-o;u>E;u--)m=u+o-1,f=u+c-1,m in g?g[f]=g[m]:delete g[f];for(u=0;u<c;u++)g[u+E]=arguments[u+2];return g.length=v-o+c,a}})},e6dc:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),a={class:"text-end mt-4 mx-5"},n={class:"px-3"},l={class:"table table-hover mt-4"},r=Object(o["createElementVNode"])("thead",null,[Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("th",{width:"100"},"分類"),Object(o["createElementVNode"])("th",null,"產品名稱"),Object(o["createElementVNode"])("th",{width:"120"},"原價"),Object(o["createElementVNode"])("th",{width:"120"},"售價"),Object(o["createElementVNode"])("th",{width:"120"},"是否啟用"),Object(o["createElementVNode"])("th",{width:"150"},"編輯")])],-1),i={key:0,class:"text-success"},d={key:1},s=["onClick"],u=["onClick"];function m(e,t,c,m,p,b){var j=Object(o["resolveComponent"])("Loading"),O=Object(o["resolveComponent"])("Pagination"),h=Object(o["resolveComponent"])("CreateProduct"),f=Object(o["resolveComponent"])("DeleteProduct");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createVNode"])(j,{actuve:p.isLoading,"z-index":1060},null,8,["actuve"]),Object(o["createElementVNode"])("div",a,[Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-secondary",onClick:t[0]||(t[0]=function(e){return b.openModal(!0)})},"建立新的產品")]),Object(o["createElementVNode"])("div",n,[Object(o["createElementVNode"])("table",l,[r,Object(o["createElementVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(p.products,(function(t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",{key:t.id},[Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(t.category),1),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(t.title),1),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(e.$filters.currency(t.origin_price)),1),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(e.$filters.currency(t.price)),1),Object(o["createElementVNode"])("td",null,[t.is_enabled?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",i,"啟用")):(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",d,"未啟用"))]),Object(o["createElementVNode"])("td",null,[Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-sm btn-outline-secondary border-end-0 rounded-0",onClick:function(e){return b.openModal(!1,t)}}," 編輯 ",8,s),Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-sm btn-outline-danger rounded-0",onClick:function(e){return b.openDelProductModal(t)}}," 刪除 ",8,u)])])})),128))])])]),Object(o["createVNode"])(O,{pages:p.pagination,onEmitPages:b.getProducts},null,8,["pages","onEmitPages"]),Object(o["createVNode"])(h,{product:p.tempProduct,isNew:p.isNew,onUpdateProduct:b.updateProduct,ref:"createProduct"},null,8,["product","isNew","onUpdateProduct"]),Object(o["createVNode"])(f,{item:p.tempProduct,ref:"deleteProduct",onDelProduct:b.delProduct},null,8,["item","onDelProduct"])])}var p=c("5530"),b=(c("99af"),c("1799")),j=(c("a434"),c("a4d3"),c("e01a"),{class:"modal fade",id:"createProduct",ref:"modal","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}),O={class:"modal-dialog modal-xl"},h={class:"modal-content"},f={class:"modal-header bg-dark"},g={class:"modal-title text-light",id:"staticBackdropLabel"},v={key:0},E={key:1},V=Object(o["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),N={class:"modal-body d-flex"},P={class:"col-sm-4 pe-3"},k={class:"mb-3"},y=Object(o["createElementVNode"])("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),w={class:"mb-3"},x={for:"customFile",class:"form-label"},B=Object(o["createTextVNode"])("或 上傳圖片 "),U={key:0,class:"fas fa-spinner fa-spin"},M=["src"],C={key:0,class:"mt-5"},D=["onUpdate:modelValue"],$=["src"],L=["onClick"],_={key:0},S={class:"col-sm-8 pe-3"},T={class:"mb-3"},F=Object(o["createElementVNode"])("label",{for:"title",class:"form-label mb-2"},"標題",-1),z={class:"row mb-3"},I={class:"col-6"},J=Object(o["createElementVNode"])("label",{for:"category",class:"form-label"},"分類",-1),A={class:"col-6"},q=Object(o["createElementVNode"])("label",{for:"origin_price",class:"form-label"},"原價",-1),G={class:"row mb-3"},H={class:"col-6"},K=Object(o["createElementVNode"])("label",{for:"unit",class:"form-label"},"單位",-1),Q={class:"col-6"},R=Object(o["createElementVNode"])("label",{for:"price",class:"form-label"},"售價",-1),W={class:"mb-3"},X=Object(o["createElementVNode"])("label",{for:"description",class:"form-label"},"產品描述",-1),Y={class:"mb-3"},Z=Object(o["createElementVNode"])("label",{for:"content",class:"form-label"},"說明內容",-1),ee={class:"form-check"},te=Object(o["createElementVNode"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),ce={class:"modal-footer"},oe=Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消",-1);function ae(e,t,c,a,n,l){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createElementVNode"])("div",j,[Object(o["createElementVNode"])("div",O,[Object(o["createElementVNode"])("div",h,[Object(o["createElementVNode"])("div",f,[Object(o["createElementVNode"])("h5",g,[c.isNew?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",v,"新增產品")):(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",E,"編輯產品"))]),V]),Object(o["createElementVNode"])("div",N,[Object(o["createElementVNode"])("div",P,[Object(o["createElementVNode"])("div",k,[y,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":t[0]||(t[0]=function(e){return n.tempProduct.imageUrl=e}),placeholder:"請輸入圖片連結"},null,512),[[o["vModelText"],n.tempProduct.imageUrl]])]),Object(o["createElementVNode"])("div",w,[Object(o["createElementVNode"])("label",x,[B,n.status.fileUploading?(Object(o["openBlock"])(),Object(o["createElementBlock"])("i",U)):Object(o["createCommentVNode"])("",!0)]),Object(o["createElementVNode"])("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:t[1]||(t[1]=function(){return l.uploadFile&&l.uploadFile.apply(l,arguments)})},null,544)]),Object(o["createElementVNode"])("img",{class:"img-fluid",src:n.tempProduct.imageUrl},null,8,M),n.tempProduct.imagesUrl?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",C,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(n.tempProduct.imagesUrl,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"mb-3",key:t},[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":function(e){return n.tempProduct.imagesUrl[t]=e},placeholder:"請輸入連結"},null,8,D),[[o["vModelText"],n.tempProduct.imagesUrl[t]]]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("img",{class:"img-fluid",src:e},null,8,$)]),Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(e){return n.tempProduct.imagesUrl.splice(t,1)}}," 移除 ",8,L)])})),128)),n.tempProduct.imagesUrl[n.tempProduct.imagesUrl.length-1]||!n.tempProduct.imagesUrl.length?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",_,[Object(o["createElementVNode"])("button",{class:"btn btn-outline-secondary btn-sm d-block w-100",onClick:t[2]||(t[2]=function(e){return n.tempProduct.imagesUrl.push("")})}," 新增圖片 ")])):Object(o["createCommentVNode"])("",!0)])):Object(o["createCommentVNode"])("",!0)]),Object(o["createElementVNode"])("div",S,[Object(o["createElementVNode"])("div",T,[F,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control w-100",id:"title","onUpdate:modelValue":t[3]||(t[3]=function(e){return n.tempProduct.title=e}),placeholder:"請輸入標題"},null,512),[[o["vModelText"],n.tempProduct.title]])]),Object(o["createElementVNode"])("div",z,[Object(o["createElementVNode"])("div",I,[J,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control w-100",id:"category","onUpdate:modelValue":t[4]||(t[4]=function(e){return n.tempProduct.category=e}),placeholder:"請輸入分類"},null,512),[[o["vModelText"],n.tempProduct.category]])]),Object(o["createElementVNode"])("div",A,[q,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"number",class:"form-control w-100",id:"origin_price",min:"0","onUpdate:modelValue":t[5]||(t[5]=function(e){return n.tempProduct.origin_price=e}),placeholder:"請輸入原價"},null,512),[[o["vModelText"],n.tempProduct.origin_price,void 0,{number:!0}]])])]),Object(o["createElementVNode"])("div",G,[Object(o["createElementVNode"])("div",H,[K,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control w-100",id:"unit","onUpdate:modelValue":t[6]||(t[6]=function(e){return n.tempProduct.unit=e}),placeholder:"請輸入單位"},null,512),[[o["vModelText"],n.tempProduct.unit]])]),Object(o["createElementVNode"])("div",Q,[R,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"number",class:"form-control w-100",id:"price",min:"0","onUpdate:modelValue":t[7]||(t[7]=function(e){return n.tempProduct.price=e}),placeholder:"請輸入售價"},null,512),[[o["vModelText"],n.tempProduct.price,void 0,{number:!0}]])])]),Object(o["createElementVNode"])("div",W,[X,Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{class:"form-control w-100",id:"description","onUpdate:modelValue":t[8]||(t[8]=function(e){return n.tempProduct.description=e}),placeholder:"請輸入產品描述"},null,512),[[o["vModelText"],n.tempProduct.description]])]),Object(o["createElementVNode"])("div",Y,[Z,Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{class:"form-control w-100",id:"content","onUpdate:modelValue":t[9]||(t[9]=function(e){return n.tempProduct.content=e}),placeholder:"請輸入說明內容"},null,512),[[o["vModelText"],n.tempProduct.content]])]),Object(o["createElementVNode"])("div",ee,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{class:"form-check-input",type:"checkbox",id:"is_enabled","onUpdate:modelValue":t[10]||(t[10]=function(e){return n.tempProduct.is_enabled=e}),"true-value":1,"false-value":0},null,512),[[o["vModelCheckbox"],n.tempProduct.is_enabled]]),te])])]),Object(o["createElementVNode"])("div",ce,[oe,Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-secondary",onClick:t[11]||(t[11]=function(t){return e.$emit("update-product",n.tempProduct)})},"確認")])])])],512)])}var ne=c("e0ae"),le={props:{product:{type:Object,default:function(){return{}}},isNew:{type:Boolean,default:!1}},data:function(){return{status:{},modal:"",tempProduct:{}}},emits:["update-product"],mixins:[ne["a"]],inject:["emitter"],watch:{product:function(){this.tempProduct=this.product,this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[]),this.tempProduct.imageUrl||(this.tempProduct.imageUrl="")}},methods:{uploadFile:function(){var e=this,t=this.$refs.fileInput.files[0],c=new FormData;c.append("file-to-upload",t);var o="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("jemmanine","/admin/upload");this.status.fileUploading=!0,this.$http.post(o,c,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.status.fileUploading=!1,t.data.success?(e.tempProduct.imageUrl=t.data.imageUrl,e.$refs.fileInput.value="",e.emitter.emit("push-message",{style:"success",title:"圖片上傳結果",content:t.data.message})):(e.$refs.fileInput.value="",e.emitter.emit("push-message",{style:"danger",title:"圖片上傳結果",content:t.data.message}))})).catch((function(t){e.status.fileUploading=!1,e.$httpMessageState(t.response,"圖片失敗")}))}}},re=c("6b0d"),ie=c.n(re);const de=ie()(le,[["render",ae]]);var se=de,ue=c("cc52"),me={data:function(){return{products:[],pagination:{},tempProduct:{},isLoading:!1,isNew:!1,status:{fileUploading:!1},currentPage:1}},components:{Pagination:b["a"],CreateProduct:se,DeleteProduct:ue["a"]},inject:["emitter"],methods:{getProducts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.currentPage=t;var c="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("jemmanine","/admin/products?page=").concat(t);this.isLoading=!0,this.$http.get(c).then((function(t){e.products=t.data.products,e.pagination=t.data.pagination,e.isLoading=!1})).catch((function(t){e.isLoading=!1,e.$httpMessageState(t.response,"錯誤訊息")}))},openModal:function(e,t){e?(this.tempProduct={},this.isNew=!0):(this.tempProduct=Object(p["a"])({},t),this.isNew=!1);var c=this.$refs.createProduct;c.openModal()},updateProduct:function(e){var t=this;this.tempProduct=e;var c="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("jemmanine","/admin/product");this.isLoading=!0;var o="post",a="新增產品";this.isNew||(c="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("jemmanine","/admin/product/").concat(this.tempProduct.id),o="put",a="更新產品");var n=this.$refs.createProduct;this.$http[o](c,{data:this.tempProduct}).then((function(e){t.isLoading=!1,t.$httpMessageState(e,a),n.hideModal(),t.getProducts(t.currentPage)})).catch((function(e){t.isLoading=!1,t.$httpMessageState(e.response,a)}))},openDelProductModal:function(e){this.tempProduct=Object(p["a"])({},e);var t=this.$refs.deleteProduct;t.openModal()},delProduct:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("jemmanine","/admin/product/").concat(this.tempProduct.id);this.isLoading=!0,this.$http.delete(t).then((function(t){e.isLoading=!1,e.$httpMessageState(t,"刪除產品");var c=e.$refs.deleteProduct;c.hideModal(),e.getProducts(e.currentPage)})).catch((function(t){e.isLoading=!1,e.$httpMessageState(t.response,"刪除產品")}))}},created:function(){this.getProducts()}};const pe=ie()(me,[["render",m]]);t["default"]=pe}}]);
//# sourceMappingURL=chunk-c86c7800.4edf3473.js.map