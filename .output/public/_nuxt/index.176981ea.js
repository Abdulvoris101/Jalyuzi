import{a as x,l as j,m as y,p as T,E as z,P as _,j as I,r as u,o as n,b as r,f as l,w as p,e as s,F as B,s as N,c as $,v as w,t as g,G as b,I as M,k as v,B as O,C as U,z as G}from"./entry.5dbf4d12.js";import{_ as J}from"./Pagination.368333bd.js";const V={async created(){this.getProducts(1)},data(){return{not_product:"\u041D\u0435\u0442\u0443 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 ):",product:[],height:"150",width:"100",overall_price:"",showFilterStatus:!1,page:1,products:[],is_product:!1,showPagination:!0}},computed:{...j(_,b),...y(_,["total","page_size","baseUrl"]),...y(b,["getColors","getCatalogs","getProperties"])},methods:{...T(_,["addToCart","increaseCart"]),changeMyProducts(t){if(t.value.length>=1){this.products=t.value,this.inTheCart(),this.is_product=!0;for(let i=0;i<this.products.length;i++){let e=this.products[i].price_sum.toString();e=`${e.slice(-9,-6)} ${e.slice(-6,-3)} ${e.slice(-3)}`,this.products[i].b_price=e}this.showPagination=!1}else this.products=[],this.is_product=!1,this.showPagination=!1},inTheCart(){for(let t=0;t<this.products.length;t++){let i=localStorage.getItem("product"+this.products[t].id);JSON.parse(i)==null?this.products[t].inCart=!1:this.products[t].inCart=!0}},async getProducts(t,i){let{data:e,pending:m,error:d}=await z("products",()=>$fetch(`${this.baseUrl}/api/products/?page=${t}`),{initialCache:!1});if(e.value.results.length>=1){this.products=e.value.results;for(let a=0;a<this.products.length;a++){let c=this.products[a].price_sum.toString();c=`${c.slice(-9,-6)} ${c.slice(-6,-3)} ${c.slice(-3)}`,this.products[a].b_price=c}this.is_product=!0,this.showPagination=!0,this.inTheCart()}else this.products=[],this.is_product=!1},closeFilter(){this.showFilterStatus=!this.showFilterStatus},loadProducts(t){let i=_();this.$router.push({path:"",query:{page:t}}),i.fetchProducts(t),this.getProducts(t)},async getProduct(t){const{data:i}=await I(`${this.baseUrl}/api/product/${t}`,{initialCache:!1},"$U48yGv7YOO");return i.value.inCart=!0,i.value},showFilter(){this.showFilterStatus=!this.showFilterStatus},toBuy(t){let i=this.getProduct(t),e;i.then(m=>{e=m;let d=parseInt(e.price_sum),a=this.width/100*(this.height/100);if(this.overall_price=parseInt(d*a),e.type_id==!0){let c={id:e.id,width:this.width/100,height:this.height/100,overall_price:this.overall_price,type_id:e.type_id},h=JSON.stringify(c);this.increaseCart(),this.addToCart(h,e.id),this.inTheCart(),this.getProducts(1)}else{let c={id:e.id,width:this.width/100,height:this.height/100,overall_price:this.overall_price,type_id:"None"},h=JSON.stringify(c);this.increaseCart(),this.addToCart(h,e.id),this.inTheCart(),this.getProducts(1)}})}}},C=t=>(O("data-v-faf88617"),t=t(),U(),t),q={id:"products"},A={class:"row gx-0"},D={class:"col-lg-3"},E={class:"col-lg-9"},L={class:"main"},Y={class:"main-container"},H={class:"main-top-card card"},K={class:"card-body d-flex",style:{"justify-content":"space-between"}},Q=C(()=>s("h4",{class:"card-title"},"\u0412\u0441\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B",-1)),R={class:"d-flex",style:{"justify-content":"flex-end"}},W={class:"icon-filter"},X={key:0,class:"row gx-3"},Z={key:0,class:"card main-card"},tt=["src","alt"],st={class:"card-body"},et={class:"card-title"},it={class:"card-price"},ot={key:0},at={key:1},ct={key:0,class:"btn-dis"},nt=["onClick"],rt=C(()=>s("span",null,"\u041F\u043E\u043A\u0443\u043F\u0430\u0442\u044C",-1)),lt={key:1,class:"row gx-3"},dt={class:"container"},ht={style:{"font-weight":"normal"}};function _t(t,i,e,m,d,a){const c=u("Title"),h=u("Meta"),P=M,k=u("b-icon-funnel"),f=G,F=u("b-icon-basket3"),S=J;return n(),r("div",q,[l(c,null,{default:p(()=>[v("Jalyuzi - \u0412\u0441\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435 \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0433.\u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435 \u0446\u0435\u043D\u044B \u0438 \u0430\u0434\u0440\u0435\u0441\u0430 ")]),_:1}),l(h,{name:"keywords",content:"\u0416\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435, \u043A\u0443\u043F\u0438\u0442\u044C \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435, \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0443\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D\u0435, \u0436\u0430\u043B\u044E\u0437\u0438 \u0443\u0437, \u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0436\u0430\u043B\u044E\u0437\u0435\u0439 \u0432 \u0422\u0430\u0448\u043A\u0435\u043D\u0442\u0435, \u0444\u043E\u0442\u043E \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435, jalyuzi, jalyuzi uz, jalyuzi pardalar"}),l(h,{name:"description",content:"\u0446\u0435\u043D\u044B \u043D\u0430 \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435"}),s("div",A,[s("div",D,[l(P,{showFilter:d.showFilterStatus,is_sub:!1,onGetProducts:a.getProducts,onCloseFilter:a.closeFilter,onChangeMyProducts:a.changeMyProducts},null,8,["showFilter","onGetProducts","onCloseFilter","onChangeMyProducts"])]),s("div",E,[s("section",L,[s("div",Y,[s("div",H,[s("div",K,[Q,s("div",R,[s("div",W,[s("a",{onClick:i[0]||(i[0]=(...o)=>a.showFilter&&a.showFilter(...o))},[l(k,{class:""})])])])])]),s("div",null,[d.is_product?(n(),r("div",X,[(n(!0),r(B,null,N(d.products,o=>(n(),r("div",{class:"col-md-3 col-6 col-sm-4",key:o.id},[o.status?(n(),r("div",Z,[l(f,{to:{name:"product-id",params:{id:o.slug}},class:"me-auto ms-auto"},{default:p(()=>[s("img",{src:t.baseUrl+o.image,alt:o.name,class:"card-img"},null,8,tt)]),_:2},1032,["to"]),s("div",st,[l(f,{to:{name:"product-id",params:{id:o.slug}},class:"nav-link"},{default:p(()=>[s("h4",et,g(o.name)+" - "+g(o.weight),1),s("span",it,g(o.b_price)+" \u0441\u0443\u043C",1)]),_:2},1032,["to"]),s("div",null,[o.type_id?(n(),r("div",ot,[l(f,{to:{name:"product-id",params:{id:o.slug}},class:"btn-more w-100 btn btn-success"},{default:p(()=>[v(" \u041F\u0435\u0440\u0435\u0439\u0442\u0438 ")]),_:2},1032,["to"])])):(n(),r("div",at,[o.inCart?(n(),r("div",ct,"\u041F\u0440\u043E\u0434\u0443\u043A\u0442 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0435")):(n(),r("button",{key:1,class:"btn btn-success w-100 btn-more",onClick:ut=>a.toBuy(o.slug)},[rt,v(),l(F,{class:"basket3-icon pb-1"})],8,nt))]))])])])):w("",!0)]))),128)),d.showPagination?(n(),$(S,{key:0,item:t.page_size,total:t.total,onPageChanged:a.loadProducts},null,8,["item","total","onPageChanged"])):w("",!0)])):(n(),r("div",lt,[s("div",dt,[s("h5",ht,g(d.not_product)+" :(",1)])]))])])])])])])}const mt=x(V,[["render",_t],["__scopeId","data-v-faf88617"]]);export{mt as default};
