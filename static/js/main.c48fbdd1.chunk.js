(this["webpackJsonpsd-0x-project-frontend-online-store"]=this["webpackJsonpsd-0x-project-frontend-online-store"]||[]).push([[0],{24:function(e,t,a){},28:function(e,t,a){},32:function(e,t,a){e.exports=a.p+"static/media/mercadolivre.5cb1cb3e.png"},33:function(e,t,a){e.exports=a(54)},38:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(29),l=a.n(c),i=(a(38),a(39),a(14)),o=a(2),s=a(13),u=a.n(s),m=a(15),d=a(3),p=a(4),h=a(10),f=a(6),v=a(5),E=a(31),b=a(19);function g(){return y.apply(this,arguments)}function y(){return(y=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.mercadolibre.com/sites/MLB/categories");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t){return j.apply(this,arguments)}function j(){return(j=Object(m.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.mercadolibre.com/sites/MLB/search?category=".concat(t,"&q=").concat(a));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a(41);var N=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={categoryList:[]},e.sendId=e.sendId.bind(Object(h.a)(e)),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.fetchCategoryList()}},{key:"sendId",value:function(e){(0,this.props.fetchAPI)(e)}},{key:"fetchCategoryList",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,this.setState({categoryList:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.categoryList;return r.a.createElement("nav",{className:"side-nav"},r.a.createElement("aside",null,t.map((function(t){var a=t.name,n=t.id;return r.a.createElement("option",{onClick:function(){return e.sendId(n)},"data-testid":"category",key:n,className:"side-nav-option"},a)}))))}}]),a}(n.Component),S=(a(28),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).addItem=function(){var e=[],t=n.props.item;null!==localStorage.getItem("item")?(e=JSON.parse(localStorage.getItem("item"))).push(t):e.push(t),localStorage.setItem("item",JSON.stringify(e))},n.addItem=n.addItem.bind(Object(h.a)(n)),n}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classId;return r.a.createElement("button",{type:"button","data-testid":t,onClick:function(){return e.addItem()},className:"card-add-to-cart"},"Adicionar ao Carrinho")}}]),a}(n.Component)),k=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.itemId;return r.a.createElement("div",{className:"card-body"},r.a.createElement(i.b,{"data-testid":"product-detail-link",to:{pathname:"/product-details",itemCard:t,itemId:a},className:"card-link"},r.a.createElement("div",{"data-testid":"product",className:"card-upper"},r.a.createElement("h4",{className:"card-title"},t.title),r.a.createElement("img",{src:t.thumbnail,alt:"im\xe1gem do produto",className:"card-img"}),r.a.createElement("p",{className:"card-price"},"R$ ".concat(t.price)))),r.a.createElement(S,{item:t,classId:"product-add-to-cart"}))}}]),a}(n.Component),C=(a(50),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.list;return r.a.createElement("div",{className:"main-product-list"},0===e.length?r.a.createElement("span",null,"Nenhum produto foi encontrado"):e.map((function(e){return r.a.createElement(k,{item:e,itemId:e.id,key:e.id})})))}}]),a}(n.Component)),I=(a(51),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).fetchAPI=function(){var e=Object(m.a)(u.a.mark((function e(t){var a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.state.category,a=t,r=n.state.input,e.next=5,O(a,r);case 5:c=e.sent,n.setState({list:c.results,category:a});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={category:"",input:"",list:[]},n.changeState=n.changeState.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(p.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"changeState",value:function(e){this.setState({input:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.input,a=e.list;return r.a.createElement("div",{className:"main-body"},r.a.createElement(N,{fetchAPI:this.fetchAPI,className:"side-category"}),r.a.createElement("div",{className:"main-holder"},r.a.createElement("div",{className:"main-header"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"main-header-form"},r.a.createElement("input",{"data-testid":"query-input",type:"text",value:t,onChange:this.changeState,placeholder:"Digite algum termo de pesquisa ou escolha uma categoria.",className:"search-input"}),r.a.createElement(b.b,{type:"submit","data-testid":"query-button",onClick:this.fetchAPI,className:"search-btn"})),r.a.createElement(E.Link,{"data-testid":"shopping-cart-button",to:"/shopping-cart",className:"shopping-cart"},r.a.createElement(b.c,null))),r.a.createElement(C,{list:a})))}}]),a}(n.Component)),x=a(8),P=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;Object(d.a)(this,a),n=t.call(this,e);for(var r=JSON.parse(localStorage.getItem("item")),c=[],l=[],i=0;i<r.length;i+=1)c=[].concat(Object(x.a)(c),[1]),l=[].concat(Object(x.a)(l),[r[i].price]);return n.itemValues=n.itemValues.bind(Object(h.a)(n)),n.state={qtdeProduct:c,cart:r,values:l,redirect:!1},n}return Object(p.a)(a,[{key:"itemValues",value:function(){var e=this.state,t=e.qtdeProduct,a=e.values;localStorage.setItem("qtd",JSON.stringify(t)),localStorage.setItem("totValue",JSON.stringify(a)),this.setState({redirect:!0})}},{key:"addValueByQuantify",value:function(e){var t=this.state,a=t.qtdeProduct,n=t.cart;return a[e]*n[e].price}},{key:"updateValues",value:function(e,t){for(var a=this.state,n=a.cart,r=a.values,c=t*n[e].price,l=[],i=0;i<n.length;i+=1)l=[].concat(Object(x.a)(l),i===e?[c]:[r[i]]);this.setState({values:l})}},{key:"addTotalCartValue",value:function(){var e=this.state.values;return r.a.createElement("div",null,"Valor total da compra: R$ ".concat(e.reduce((function(e,t){return e+t}))))}},{key:"increaseProductQuantify",value:function(e){for(var t=this.state.qtdeProduct,a=[],n=0;n<t.length;n+=1)a=[].concat(Object(x.a)(a),n===e?[t[n]+1]:[t[n]]),this.setState({qtdeProduct:a}),this.updateValues(e,a[e])}},{key:"decreaseProductQuantify",value:function(e){var t=this.state.qtdeProduct;if(!(t[e]<=1))for(var a=[],n=0;n<t.length;n+=1)a=[].concat(Object(x.a)(a),n===e?[t[n]-1]:[t[n]]),this.setState({qtdeProduct:a}),this.updateValues(e,a[e])}},{key:"removeProduct",value:function(e){var t=this.state.cart,a=JSON.parse(localStorage.getItem("item")),n=[];a.forEach((function(a){a.id!==t[e].id&&n.push(a)})),localStorage.setItem("item",JSON.stringify(n)),window.location.reload()}},{key:"renderCart",value:function(){var e=this,t=this.state,a=t.qtdeProduct;return t.cart.map((function(t,n){return r.a.createElement("div",{key:n},r.a.createElement("button",{type:"button",onClick:function(){return e.removeProduct(n)}},"X"),r.a.createElement("img",{src:t.thumbnail,alt:t.title,width:"50px"}),r.a.createElement("span",{"data-testid":"shopping-cart-product-name"},t.title),r.a.createElement("button",{"data-testid":"product-decrease-quantity",type:"button",onClick:function(){return e.decreaseProductQuantify(n)}},"-"),r.a.createElement("span",{"data-testid":"shopping-cart-product-quantity"}," ".concat(a[n]," ")),r.a.createElement("button",{"data-testid":"product-increase-quantity",type:"button",onClick:function(){return e.increaseProductQuantify(n)}},"+"),r.a.createElement("span",null,"R$ ".concat(e.addValueByQuantify(n))))}))}},{key:"render",value:function(){var e=this,t=this.state.redirect;return r.a.createElement("div",null,this.renderCart(),this.addTotalCartValue(),r.a.createElement("button",{onClick:function(){return e.itemValues()},"data-testid":"checkout-products",type:"submit"},"Finalizar compra"),t&&r.a.createElement(o.Redirect,{to:"/checkout"}))}}]),a}(n.Component),q=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;Object(d.a)(this,a),n=t.call(this,e);var r=[];return null!==localStorage.getItem("item")&&(r=JSON.parse(localStorage.getItem("item"))),n.state={cart:r},n}return Object(p.a)(a,[{key:"empityMessage",value:function(){return r.a.createElement("p",{"data-testid":"shopping-cart-empty-message"},"Seu carrinho est\xe1 vazio")}},{key:"render",value:function(){var e=this.state.cart;return r.a.createElement("div",null,0===e.length?this.empityMessage():r.a.createElement(P,{cart:e}))}}]),a}(n.Component),R=a(17),A=a(20),w=(a(24),function(e){var t=function(t){var a;e.setStarCount(t.target.id[4]),a=parseInt(t.target.id[4],10),function(){for(var e=document.querySelectorAll(".star-font"),t=0;t<e.length;t+=1)e[t].classList.remove("prev-star")}(),function(e){for(var t=document.querySelectorAll(".star-font"),a=0;a<e-1;a+=1)t[a].classList.add("prev-star")}(a)};return r.a.createElement("div",{className:"rating"},r.a.createElement("label",{htmlFor:"star1",className:"star-label"},r.a.createElement("input",{type:"radio",name:"star",id:"star1",onClick:function(e){return t(e)},className:"star-input"}),r.a.createElement(A.a,{className:"star-font"})),r.a.createElement("label",{htmlFor:"star2",className:"star-label"},r.a.createElement("input",{type:"radio",name:"star",id:"star2",onClick:function(e){return t(e)},className:"star-input"}),r.a.createElement(A.a,{className:"star-font"})),r.a.createElement("label",{htmlFor:"star3",className:"star-label"},r.a.createElement("input",{type:"radio",name:"star",id:"star3",onClick:function(e){return t(e)},className:"star-input"}),r.a.createElement(A.a,{className:"star-font"})),r.a.createElement("label",{htmlFor:"star4",className:"star-label"},r.a.createElement("input",{type:"radio",name:"star",id:"star4",onClick:function(e){return t(e)},className:"star-input"}),r.a.createElement(A.a,{className:"star-font"})),r.a.createElement("label",{htmlFor:"star5",className:"star-label"},r.a.createElement("input",{type:"radio",name:"star",id:"star5",onClick:function(e){return t(e)},className:"star-input"}),r.a.createElement(A.a,{className:"star-font",htmlFor:"star5"})))}),M=function(e){var t=r.a.useState([]),a=Object(R.a)(t,2),n=a[0],c=a[1],l=r.a.useState([]),i=Object(R.a)(l,2),o=i[0],s=i[1],u=e.itemId,m=r.a.useState(localStorage["".concat(u,"-email")]?localStorage.getItem("".concat(u,"-email")).split(","):[]),d=Object(R.a)(m,2),p=d[0],h=d[1],f=r.a.useState(localStorage["".concat(u,"-text")]?localStorage.getItem("".concat(u,"-text")).split(","):[]),v=Object(R.a)(f,2),E=v[0],b=v[1],g=r.a.useState([]),y=Object(R.a)(g,2),O=y[0],j=y[1],N=r.a.useState([]),S=Object(R.a)(N,2),k=S[0],C=S[1],I=function(){b(Object(x.a)(o)),C(Object(x.a)(O)),localStorage.setItem("".concat(u,"-text"),[].concat(Object(x.a)(E),[document.getElementById("text-area").value]))},P=function(){""===document.getElementById("text-area").value&&s([].concat(Object(x.a)(o),[document.getElementById("text-area").value]))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"rate-form"},r.a.createElement("h3",null,"Avalie o Produto:"),r.a.createElement("div",{className:"email-rating"},r.a.createElement("label",{htmlFor:"email",className:"email"},r.a.createElement("input",{id:"email",name:"email",placeholder:"digite seu email",required:!0,onBlur:function(e){c([].concat(Object(x.a)(n),[e.target.value]))},className:"email-input"})),r.a.createElement(w,{setStarCount:function(e){j([].concat(Object(x.a)(O),[e]))}})),r.a.createElement("textarea",{onBlur:function(e){return s([].concat(Object(x.a)(o),[e.target.value]))},className:"text-area",id:"text-area",placeholder:"escreva aqui sua avalia\xe7ao","data-testid":"product-detail-evaluation"}),r.a.createElement("button",{type:"button",onClick:function(){var e=document.getElementById("text-area");h(Object(x.a)(n)),P(),I(),localStorage.setItem("".concat(u,"-email"),[].concat(Object(x.a)(p),[document.getElementById("email").value])),e.value="",document.getElementById("email").value=""}},"Avaliar")),r.a.createElement("div",{className:"content-container"},r.a.createElement("h3",null,"Avalia\xe7\xf5es: "),r.a.createElement("div",{className:"ratings"},p.map((function(e,t){return r.a.createElement("div",{key:e,className:"comment"},r.a.createElement("p",null,e),r.a.createElement("p",null,function(e){for(var t=[],a=1;a<=e;a+=1)t.push("\u2605");return r.a.createElement("span",{className:"stars"},t)}(k[t])),r.a.createElement("p",{className:"text-area"},E[t]))})))))},B=(a(52),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.location,t=e.itemCard,a=e.itemId,n=t.title,c=t.price,l=t.thumbnail;return r.a.createElement("div",{className:"details-body"},r.a.createElement("div",{className:"details-header"},r.a.createElement(i.b,{to:"/",className:"details-header-back"},r.a.createElement(b.a,null)),r.a.createElement(i.b,{to:"/shopping-cart",className:"details-header-cart"},r.a.createElement(b.c,null))),r.a.createElement("div",{className:"details-container"},r.a.createElement("div",{className:"details-container-1"},r.a.createElement("h2",{"data-testid":"product-detail-name",className:"details-container-title"},"".concat(n)),r.a.createElement("img",{src:l,alt:"Imagem do Produto",className:"details-container-img"})),r.a.createElement("div",{className:"details-container-rigth"},r.a.createElement("div",{className:"details-container-2"},r.a.createElement("h2",null,"R$ ".concat(c)),r.a.createElement(S,{item:t,classId:"product-detail-add-to-cart"})),r.a.createElement("div",{className:"details-reviews"},r.a.createElement("ul",null,r.a.createElement("li",null,"O produto \xe9 bom"),r.a.createElement("li",null,"O produto \xe9 bom demais"),r.a.createElement("li",null,"O produto \xe9 b\xe3o"))))),r.a.createElement(M,{itemId:a}))}}]),a}(n.Component)),V=["AC - Acre","AL - Alagoas","AP - Amap\xe1","AM - Amazonas","BA - Bahia","CE - Cear\xe1","DF - Distrito Federal","ES - Esp\xedrito Santo","GO - Go\xedas","MA - Maranh\xe3o","MT - Mato Grosso","MS - Mato Grosso do Sul","MG - Minas Gerais","PA - Par\xe1","PB - Para\xedba","PR - Paran\xe1","PE - Pernambuco","PI - Piau\xed","RJ - Rio de Janeiro","RN - Rio Grande do Norte","RS - Rio Grande do Sul","RO - Rond\xf4nia","RR - Rora\xedma","SC - Santa Catarina","SP - S\xe3o Paulo","SE - Sergipe","TO - Tocantins"],F=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={redirect:!1},e.compreMais=e.compreMais.bind(Object(h.a)(e)),e}return Object(p.a)(a,[{key:"compreMais",value:function(){localStorage.clear(),this.setState({redirect:!0})}},{key:"render",value:function(){var e=this.state.redirect;return r.a.createElement("form",{method:"get",onSubmit:this.compreMais},r.a.createElement("h3",null,"Informa\xe7\xf5es do Comprador"),r.a.createElement("div",null,r.a.createElement("input",{"data-testid":"checkout-fullname",type:"text",placeholder:"Nome Completo",name:"id-cliente",required:!0}),r.a.createElement("input",{"data-testid":"checkout-cpf",type:"text",placeholder:"CPF",name:"id-cliente",required:!0}),r.a.createElement("input",{"data-testid":"checkout-email",type:"email",placeholder:"Email",name:"id-cliente",required:!0}),r.a.createElement("input",{"data-testid":"checkout-phone",type:"tel",placeholder:"Telefone",name:"id-cliente",id:"tel",required:!0})),r.a.createElement("div",null,r.a.createElement("input",{"data-testid":"checkout-cep",type:"text",placeholder:"CEP",name:"endere\xe7o",required:!0}),r.a.createElement("input",{"data-testid":"checkout-address",type:"text",placeholder:"Endere\xe7o",name:"endere\xe7o",required:!0})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Complemento",name:"endere\xe7o",required:!0}),r.a.createElement("input",{type:"text",placeholder:"Numero",name:"endere\xe7o",required:!0}),r.a.createElement("input",{type:"text",placeholder:"Cidade",name:"endere\xe7o",required:!0}),r.a.createElement("select",{name:"endere\xe7o",placeholder:"Estado",required:!0},r.a.createElement("option",{value:""},"Estados"),V.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("section",null,r.a.createElement("h3",null,"M\xe9todo de Pagamento"),r.a.createElement("label",{htmlFor:"boleto"},"Boleto",r.a.createElement("input",{type:"radio",id:"boleto",value:"boleto",name:"forma-pagamento",required:!0})),r.a.createElement("label",{htmlFor:"master"},"Master",r.a.createElement("input",{type:"radio",id:"master",value:"master",name:"forma-pagamento"})),r.a.createElement("label",{htmlFor:"visa"},"Visa",r.a.createElement("input",{type:"radio",id:"visa",value:"visa",name:"forma-pagamento"})),r.a.createElement("label",{htmlFor:"elo"},"Elo",r.a.createElement("input",{type:"radio",id:"elo",value:"elo",name:"forma-pagamento"}))),r.a.createElement("button",{type:"submit"},"Comprar"),e&&r.a.createElement(o.Redirect,{to:"/"})))}}]),a}(n.Component),J=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(d.a)(this,a),e=t.call(this);var n=JSON.parse(localStorage.getItem("item")),r=JSON.parse(localStorage.getItem("totValue"));return e.state={item:n,totValue:r},e}return Object(p.a)(a,[{key:"renderCart",value:function(){var e=this.state,t=e.item,a=e.totValue;return t.map((function(e,t){return r.a.createElement("div",{key:e.id},r.a.createElement("img",{src:e.thumbnail,alt:e.title,width:"50px"}),r.a.createElement("span",{"data-testid":"shopping-cart-product-name"},e.title),r.a.createElement("span",null," - R$".concat(a[t])))}))}},{key:"render",value:function(){var e=this.state.totValue;return r.a.createElement("div",null,r.a.createElement("section",null,r.a.createElement("h3",null,"Revise seus pedidos."),this.renderCart(),r.a.createElement("h2",null,"Total: R$".concat(e.reduce((function(e,t){return e+t}))))),r.a.createElement("div",null,"Alguma coisa",r.a.createElement(F,null)))}}]),a}(n.Component),L=a(32),G=a.n(L),T=(a(53),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{src:G.a,alt:"logo mercadolivre",className:"header-img"}),r.a.createElement("div",{className:"header-title"},r.a.createElement("h1",{className:"header-h1"},"Mercado Fake"),r.a.createElement("p",{className:"header-p"},"A loja do grupo 26")))}}]),a}(n.Component));var $=function(){return r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(i.a,null,r.a.createElement(o.Switch,null,r.a.createElement(o.Route,{exact:!0,path:"/",component:I}),r.a.createElement(o.Route,{path:"/category/:id",render:function(e){return r.a.createElement(I,e)}}),r.a.createElement(o.Route,{exact:!0,path:"/shopping-cart",component:q}),r.a.createElement(o.Route,{exact:!0,path:"/product-details",component:B}),r.a.createElement(o.Route,{exact:!0,path:"/checkout",component:J}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.c48fbdd1.chunk.js.map