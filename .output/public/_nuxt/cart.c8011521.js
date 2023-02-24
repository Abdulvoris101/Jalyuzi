import{a as T,m as S,l as A,p as z,q as y,P as v,r as m,o as n,b as d,f as p,w as C,e as t,k as _,t as u,F as E,s as U,v as k,x as b,y as f,A as V,z as H,B as W,C as q}from"./entry.5dbf4d12.js";const j={data(){return{isEdit:!1,editWidth:"",editHeight:"",changedId:null,allOverPrice:"",addAdress:!1,city:"",state:"",fulladdress:"",product_ordered:!1}},mounted(){this.getCartProducts(),this.allPrice()},computed:{...S(v,["countOfCart","products","lastId","cart_products","baseUrl"]),...A(v),...S(V,["isLogined","addresses"])},methods:{...z(v,["getCartProducts","inTheCart","setCartItem","inCategoryCart"]),buyProducts(){let s=[];if(this.cart_products.length>1){for(let e=0;e<this.cart_products.length;e++){let r=this.cart_products[e],i=`${r.current_width}x${r.current_height}`;s.push({product:r.id,product_price:parseInt(r.price_sum),overall_price:r.current_price,size:i,status:"pending",address:this.addresses[0].id,amount:r.current_count,type_id:r.type_id})}this.createOrder(JSON.stringify(s))}else if(this.cart_products.length==1){let e=this.cart_products[0],r=`${e.current_width}x${e.current_height}`,i=JSON.parse(localStorage.getItem("product"+this.cart_products[0].id));s=[{product:e.id,product_price:e.price_sum,overall_price:e.current_price,size:r,status:"pending",address:this.addresses[0].id,amount:e.current_count,type_id:i.type_id}],this.createOrder(JSON.stringify(s))}},createOrder(s){let e=y("user_token"),r=`${this.baseUrl}/api/orders/`,i=y("csrftoken");this.inTheCart(),this.inCategoryCart();let o=v();o.inTheCart(),o.inCategoryCart(),this.cart_products=[],o.$patch({countOfCart:0,cart_products:[]}),fetch(r,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Token "+e.value,"x-csrftoken":i.value},body:s}).then(a=>{if(a.json(),this.product_ordered=!0,localStorage.removeItem("cart_products"),localStorage.removeItem("lastID"),JSON.parse(s).length>1)for(let g=0;g<JSON.parse(s).length;g++)localStorage.removeItem("product"+JSON.parse(s)[g].product);else JSON.parse(s).length==1&&localStorage.removeItem("product"+JSON.parse(s)[0].product)})},fetchAddress(){let s={city:this.city,state:this.state,address:this.fulladdress},e=y("user_token"),r=`${this.baseUrl}/api/orders/address/`,i=y("csrftoken");fetch(r,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Token "+e.value,"x-csrftoken":i.value},body:JSON.stringify(s)}).then(o=>{o.json(),this.addAdress=!1,this.addresses.push(s)})},allPrice(){let s=null;for(let e=0;e<this.cart_products.length;e++)s+=this.cart_products[e].current_price;s!=null&&(s=s.toString(),s=`${s.slice(-9,-6)} ${s.slice(-6,-3)} ${s.slice(-3)}`,this.allOverPrice=s)},editSquare(s){this.isEdit=!0,this.changedId=s,this.caniEdit(s),this.allPrice()},increaseCount(s){let e=this.cart_products.find(i=>i.id==s),r=JSON.parse(localStorage.getItem("product"+e.id));e.current_count<=e.count&&(e.current_count=e.current_count+1,e.current_price=parseInt(r.overall_price)*e.current_count,localStorage.setItem("cart_products",JSON.stringify(this.cart_products)),this.allPrice())},deleteItem(s){localStorage.removeItem("product"+s);for(let e=0;e<this.cart_products.length;e++)this.cart_products[e].id==s&&(this.cart_products.splice(e,1),localStorage.setItem("cart_products",JSON.stringify(this.cart_products)),this.allOverPrice=0,this.allPrice(),this.setCartItem(),this.inTheCart())},decreaseCount(s){let e=this.cart_products.find(i=>i.id==s),r=JSON.parse(localStorage.getItem("product"+e.id));e.current_count>1?(e.current_price=e.current_price-parseInt(r.overall_price),e.current_count=e.current_count-1,localStorage.setItem("cart_products",JSON.stringify(this.cart_products)),this.allPrice()):e.current_count=1},submitEdit(s){let e=this.cart_products.find(i=>i.id==s),r=JSON.parse(localStorage.getItem("product"+s));if(this.editWidth>0&&this.editHeight>0){let i=parseInt(e.price_sum)*(this.editWidth*this.editHeight);i=i*e.current_count;let o=i;e.current_width=this.editWidth,e.current_height=this.editHeight,e.current_price=o,r.width=this.editWidth,r.height=this.editHeight,r.overall_price=parseInt(i),localStorage.setItem("product"+s,JSON.stringify(r)),localStorage.setItem("cart_products",JSON.stringify(this.cart_products)),this.allPrice(),this.isEdit=!1,this.caniEdit(s)}},caniEdit(s){return!(this.changedId==s&&this.isEdit==!0)}}},l=s=>(W("data-v-c845c49d"),s=s(),q(),s),B={id:"cart-page"},D={class:"container"},L={key:0,class:"product-ordered"},M=l(()=>t("h3",{class:"order-title"},"\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437 \u043F\u0440\u0438\u043D\u044F\u0442!",-1)),F={class:"order-content"},G=l(()=>t("span",{class:"order-content",style:{display:"block"}}," \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0432 \u043D\u0430\u0448\u0435\u043C \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435! ",-1)),K={key:1,class:"row"},Q={class:"col-md-8"},R={class:"card"},X={class:"card-body"},Y={class:"cart-l-title mb-4"},Z={class:"row gx-0"},$={class:"col-md-2 col-2"},tt=["src","alt"],et={class:"col-md-3 col-3"},st={class:"cart-product-title"},ot={key:0},ct={class:"cart-product-comp"},rt={key:1},it={class:"cart-product-comp"},nt={class:"d-flex"},dt=l(()=>t("span",{class:"pt-1 pe-2"},"x",-1)),lt={class:"col-md-3 col-3"},at={class:"input-group mb-3"},ut=["onClick"],_t=["value"],ht=["onClick"],pt={class:"col-md-3 col-2 ps-3"},mt={class:"cart-item-price"},gt={class:"col-md-1 col-1"},bt=["onClick"],ft=l(()=>t("hr",null,null,-1)),yt={class:"col-md-4"},vt={class:"card card-r"},kt={class:"card-body"},St={class:"product-price-title"},Ct=l(()=>t("hr",null,null,-1)),It={class:"product-dt"},Ot={class:"product-dt-item"},xt=l(()=>t("span",null,"\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C:",-1)),Nt=l(()=>t("li",{class:"product-dt-item"},[t("span",null,"\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B:"),_(" \u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435 ")],-1)),Pt=l(()=>t("li",{class:"product-dt-item"},[t("span",null,"\u0422\u0438\u043F \u0437\u0430\u043A\u0430\u0437\u0430:"),_(" \u041F\u0440\u043E\u0434\u0443\u043A\u0442 ")],-1)),wt={key:0},Jt={key:1},Tt=l(()=>t("button",{class:"btn btn-success w-100 mt-3",disabled:""},"\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0417\u0430\u043A\u0430\u0437",-1)),At=l(()=>t("span",{class:"error-authenticate text-danger"},"*\u0427\u0442\u043E\u0431\u044B \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0430\u0434\u0440\u0435\u0441\u0430",-1)),zt=[Tt,At],Et={key:1},Ut=l(()=>t("button",{class:"btn btn-success w-100 mt-3",disabled:""},"\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0417\u0430\u043A\u0430\u0437",-1)),Vt=l(()=>t("span",{class:"text-danger"},"*\u0427\u0442\u043E\u0431\u044B \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 \u0432\u0445\u043E\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443",-1)),Ht=[Ut,Vt],Wt={class:"card mt-3",id:"address"},qt={class:"card-body"},jt={class:"top-address"},Bt=l(()=>t("h4",{class:"cart-a-title pt-1"}," \u0410\u0434\u0440\u0435\u0441\u044B ",-1)),Dt={key:0},Lt={key:0,class:"body-address mt-3"},Mt={class:"form-group"},Ft={key:1},Gt={class:"table"},Kt=l(()=>t("thead",null,[t("tr",null,[t("th",{scope:"col"},"#"),t("th",{scope:"col"},"City"),t("th",{scope:"col"},"State")])],-1)),Qt=l(()=>t("th",{scope:"row"},"1",-1));function Rt(s,e,r,i,o,a){const g=m("Title"),I=m("Meta"),O=H,x=m("b-icon-pencil"),N=m("b-icon-check"),P=m("b-icon-dash"),w=m("b-icon-plus"),J=m("b-icon-x");return n(),d("div",B,[p(g,null,{default:C(()=>[_("Jalyuzi - \u041A\u043E\u0440\u0437\u0438\u043D\u043A\u0430 ")]),_:1}),p(I,{name:"description",content:"\u0446\u0435\u043D\u044B \u043D\u0430 \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435"}),t("div",D,[o.product_ordered?(n(),d("div",L,[M,t("span",F,[_(" \u0415\u0441\u043B\u0438 \u0443 \u0412\u0430\u0441 \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 "),p(O,{to:{name:"contact"}},{default:C(()=>[_("\u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438")]),_:1}),_(". ")]),G])):(n(),d("div",K,[t("div",Q,[t("article",R,[t("div",X,[t("h4",Y," \u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0435 "+u(s.countOfCart)+" \u0442\u043E\u0432\u0430\u0440\u0430 ",1),(n(!0),d(E,null,U(s.cart_products,c=>(n(),d("div",{class:"card-item mb-3",key:c.id},[t("div",Z,[t("div",$,[t("img",{src:s.baseUrl+c.image,class:"img-cart",width:"115",alt:c.name},null,8,tt)]),t("div",et,[t("h3",st,u(c.name)+" - "+u(c.weight),1),a.caniEdit(c.id)?(n(),d("div",ot,[t("h4",ct,[_("\u0420\u0430\u0437\u043C\u0435\u0440\u044B: "+u(c.current_width)+" x "+u(c.current_height)+" ",1),p(x,{onClick:h=>a.editSquare(c.id),class:"pencil-icon pb-1",style:{"font-size":"18px",cursor:"pointer"}},null,8,["onClick"])])])):(n(),d("div",rt,[t("h4",it,[_("\u0420\u0430\u0437\u043C\u0435\u0440\u044B: "),p(N,{onClick:h=>a.submitEdit(c.id),class:"check-icon pb-1",style:{"font-size":"24px",cursor:"pointer"}},null,8,["onClick"])]),t("div",nt,[b(t("input",{type:"number",style:{width:"45%"},placeholder:"W",class:"me-2 form-control","onUpdate:modelValue":e[0]||(e[0]=h=>o.editWidth=h)},null,512),[[f,o.editWidth]]),dt,b(t("input",{type:"number",style:{width:"45%"},placeholder:"H",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=h=>o.editHeight=h)},null,512),[[f,o.editHeight]])])]))]),t("div",lt,[t("div",at,[t("button",{class:"input-group-text btn btn-light toggle-btn",onClick:h=>a.decreaseCount(c.id),id:"basic-addon1"},[p(P,{class:"dash-icon"})],8,ut),t("input",{type:"text",class:"form-control inp-count",value:c.current_count,"aria-label":"Username","aria-describedby":"basic-addon1",readonly:""},null,8,_t),t("button",{class:"input-group-text btn btn-light toggle-btn",onClick:h=>a.increaseCount(c.id),id:"basic-addon1"},[p(w,{class:"plus-icon"})],8,ht)])]),t("div",pt,[t("h4",mt,u(c.current_price)+" \u0441\u0443\u043C",1)]),t("div",gt,[t("button",{class:"btn x-icon-btn pb-2",onClick:h=>a.deleteItem(c.id)},[p(J,{class:"x-icon",style:{"font-size":"20px"}})],8,bt)])]),ft]))),128))])])]),t("div",yt,[t("div",vt,[t("div",kt,[t("h4",St,"\u0418\u0442\u043E\u0433\u043E: "+u(o.allOverPrice)+" \u0441\u0443\u043C ",1),Ct,t("ul",It,[t("li",Ot,[xt,_(" "+u(o.allOverPrice)+" \u0441\u0443\u043C ",1)]),Nt,Pt]),s.isLogined?(n(),d("div",wt,[s.addresses?(n(),d("button",{key:0,class:"btn btn-success w-100 mt-3",onClick:e[2]||(e[2]=(...c)=>a.buyProducts&&a.buyProducts(...c))},"\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0417\u0430\u043A\u0430\u0437")):(n(),d("div",Jt,zt))])):(n(),d("div",Et,Ht))])]),t("article",Wt,[t("div",qt,[t("div",jt,[Bt,s.addresses==!1?(n(),d("div",Dt,[o.addAdress==!1?(n(),d("button",{key:0,class:"btn btn-outline-danger",onClick:e[3]||(e[3]=c=>o.addAdress=!o.addAdress)},"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u0434\u0434\u0440\u0435\u0441 + ")):(n(),d("button",{key:1,class:"btn btn-outline-success",onClick:e[4]||(e[4]=c=>a.fetchAddress())},"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))])):k("",!0)]),o.addAdress?(n(),d("div",Lt,[t("div",Mt,[b(t("input",{type:"text",class:"form-control",placeholder:"\u0413\u043E\u0440\u043E\u0434",required:"","onUpdate:modelValue":e[5]||(e[5]=c=>o.city=c)},null,512),[[f,o.city]]),b(t("input",{type:"text",class:"form-control",placeholder:"\u0420\u0430\u0439\u043E\u043D",required:"","onUpdate:modelValue":e[6]||(e[6]=c=>o.state=c)},null,512),[[f,o.state]])]),b(t("input",{type:"text",class:"form-control mt-3",placeholder:"\u0423\u043B\u0438\u0446\u0430 \u0438 \u041C\u0430\u0445\u0430\u043B\u043B\u0430","onUpdate:modelValue":e[7]||(e[7]=c=>o.fulladdress=c),required:""},null,512),[[f,o.fulladdress]])])):k("",!0),s.addresses?(n(),d("div",Ft,[t("table",Gt,[Kt,t("tbody",null,[t("tr",null,[Qt,t("td",null,u(s.addresses[0].city),1),t("td",null,u(s.addresses[0].state),1)])])])])):k("",!0)])])])]))])])}const Yt=T(j,[["render",Rt],["__scopeId","data-v-c845c49d"]]);export{Yt as default};
