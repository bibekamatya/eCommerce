(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{113:function(e,t,c){"use strict";c.r(t);var a,s=c(1),n=c(24),i=c.n(n),r=c(5),l=(c(55),c(56),c(4)),d=c(15),o=c(13),j=c.n(o),b=c(17),m=c(7),p=c(18),x=c.n(p),h=c(0),O=Object(s.createContext)(),u=function(e){var t=Object(s.useState)([]),c=Object(m.a)(t,2),a=c[0],n=c[1];Object(s.useEffect)((function(){i()}),[]);var i=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://fakestoreapi.com/products");case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(O.Provider,{value:{Products:Object(d.a)(a)},children:e.children})},g=c(16),v=c(8),N=c(32),f=function(e,t){var c,a,s,n,i,r=e.shoppingCart,l=e.totalPrice,o=e.qty,j=e.item;switch(t.type){case"ADD_TO_CART":return r.find((function(e){return e.id===t.id}))?e:((c=t.product).qty=1,n=o+1,i=j+1,s=l+c.price,{shoppingCart:[c].concat(Object(d.a)(r)),totalPrice:s,qty:n,item:i});case"PLUS":return(c=t.cart).qty=c.qty+1,s=l+c.price,n=o+1,a=r.findIndex((function(e){return e.id===t.id})),r[a]=c,{shoppingCart:Object(d.a)(r),totalPrice:s,qty:n,item:j};case"MINUS":return(c=t.cart).qty=c.qty-1,s=l-c.price,n=o-1,a=r.findIndex((function(e){return e.id===t.id})),r[a]=c,{shoppingCart:Object(d.a)(r),totalPrice:s,qty:n,item:j};case"DELETE":i=j-1;var b=r.filter((function(e){return e.id!==t.id}));return n=o-(c=t.cart).qty,s=l-c.price*c.qty,{shoppingCart:Object(d.a)(b),totalPrice:s,qty:n,item:i};case"EMPTY":return{shoppingCart:[],totalPrice:0,qty:0,item:0};default:return e}},y=Object(s.createContext)(),w=function(e){var t=e,c=Object(s.useReducer)(f,{shoppingCart:[],totalPrice:0,qty:0,item:0}),a=Object(m.a)(c,2),n=a[0],i=a[1];return Object(h.jsx)(y.Provider,{value:Object(N.a)(Object(N.a)({},n),{},{dispatch:i,HandleCatogory:t}),children:e.children})},C=c(11),T=(c(80),c(19)),k=function(){return Object(h.jsxs)("div",{style:{paddingTop:"100px"},children:[Object(h.jsx)("hr",{className:"hr-or"}),Object(h.jsx)("hr",{className:"hr-or"}),Object(h.jsx)("hr",{className:"hr-or"}),Object(h.jsxs)("footer",{className:"nb-footer",children:[Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-sm-12",children:Object(h.jsxs)("div",{className:"about",children:[Object(h.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}),Object(h.jsx)("div",{className:"social-media",children:Object(h.jsxs)("ul",{className:"list-inline d-flex justify-content-center",children:[Object(h.jsx)("li",{className:"p-1 cursor",children:Object(h.jsx)(r.b,{className:"facebook",to:"/",children:Object(h.jsx)(v.a,{icon:T.a})})}),Object(h.jsx)("li",{className:"p-1",children:Object(h.jsx)(r.b,{className:"twitter",to:"/",title:"",children:Object(h.jsx)(v.a,{icon:T.d})})}),Object(h.jsx)("li",{className:"p-1",children:Object(h.jsx)(r.b,{className:"instagram",to:"/",title:"",children:Object(h.jsx)(v.a,{icon:T.b})})}),Object(h.jsx)("li",{className:"p-1",children:Object(h.jsx)(r.b,{className:"linkedin",to:"/",title:"",children:Object(h.jsx)(v.a,{icon:T.c})})}),Object(h.jsx)("li",{className:"p-1",children:Object(h.jsx)(r.b,{className:"youtube",to:"/",title:"",children:Object(h.jsx)(v.a,{icon:T.e})})})]})})]})})})}),Object(h.jsx)("section",{className:"copyright",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-sm-12 justify-content-center d-flex",children:Object(h.jsx)("p",{children:"\xa9 2021 LostSoul Pvt. Ltd. @ All Rights Reserved."})})})})})]})]})},P=function(){var e=Object(s.useContext)(O),t=Object(s.useContext)(y).dispatch;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"container",style:{paddingTop:"150px",minHeight:"70vh"},children:Object(h.jsx)("div",{className:"row product",children:e.Products.map((function(e){return Object(h.jsx)("div",{className:"col-md-3 p-2 col-6 pb-md-5",children:Object(h.jsxs)("div",{className:"card shadow h-100","data-aos":"fade-up","data-aos-duration":"1000","data-aos-once":"true",children:[e.price<50?Object(h.jsx)("div",{className:"text-start new",children:Object(h.jsx)("span",{children:"New"})}):"",e.price>50?Object(h.jsx)("div",{className:"text-start hot",children:Object(h.jsx)("span",{children:"Hot"})}):"",Object(h.jsxs)("div",{className:"card-body pb-1",children:[Object(h.jsx)("img",{src:e.image,alt:e.title,className:"img-fluid custom-home-image"}),Object(h.jsxs)("div",{className:"pt-4",children:[Object(h.jsx)("h6",{className:"title text-capitalize text-start pb-1",children:e.title}),Object(h.jsx)("p",{className:"text-muted text-start",style:{fontSize:"12px"},children:e.category}),Object(h.jsx)("div",{className:"card-footer bg-white px-0 pt-2 pb-2",children:Object(h.jsxs)("div",{className:"row px-2",children:[Object(h.jsx)("div",{className:"col-6",children:Object(h.jsxs)("h6",{className:"price text-start",children:["$ ",e.price]})}),Object(h.jsx)("div",{className:"col-6 text-end cursor",onClick:function(){C.a.success("Added to Cart",{position:C.a.POSITION.TOP_RIGHT,type:C.a.TYPE.INFO,autoClose:1e3}),t({type:"ADD_TO_CART",id:e.id,product:e})},children:Object(h.jsx)(v.a,{icon:g.a,className:"text-success cursor"})})]})})]})]})]})},e.id)}))})}),Object(h.jsx)(k,{})]})},S=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"jumbotron jumbotron-fluid pt-5 mt-5",children:Object(h.jsxs)("div",{className:"container pt-5 mt-5",children:[Object(h.jsx)("h1",{className:"display-4",children:"I'm Contact"}),Object(h.jsx)("p",{className:"lead",children:"This is a modified jumbotron that occupies the entire horizontal space of its parent."})]})})})},I=(c(83),c.p+"static/media/logo.0dbf582a.PNG"),q=c(45),E=c(46),A=c.n(E),D=c(29),L=Object(s.createContext)(),F=function(e){var t=Object(s.useState)([]),c=Object(m.a)(t,2),n=c[0],i=c[1],r=Object(s.useState)(!1),l=Object(m.a)(r,2),o=l[0],p=l[1];return Object(s.useEffect)((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://fakestoreapi.com/products/categories");case 2:t=e.sent,i(t.data),p(!0),setTimeout((function(){p(!1)}),1e3);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(h.jsx)("div",{children:o?Object(h.jsx)(A.a,{size:100,color:"deepskyblue",loading:o,css:Object(D.css)(a||(a=Object(q.a)(["\n            position: relative;\n            top: 270px !important;\n            @media only screen and (max-width: 768px) {\n              top: 370px !important;\n            }\n          "])))}):Object(h.jsx)(L.Provider,{value:{Category:Object(d.a)(n)},children:e.children})})},_=c(114),z=function(e){var t=Object(s.useContext)(y).item,c=Object(s.useContext)(L),a=Object(s.useState)(!1),n=Object(m.a)(a,2),i=n[0],l=n[1];return Object(s.useEffect)((function(){window.addEventListener("scroll",(function(){l(window.scrollY>10)}))}),[]),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("nav",{className:i?"navbar navbar-expand-lg fixed-top shadow-lg navbar-light bg-light":"navbar navbar-expand-lg fixed-top logo navbar-light bg-light",children:[Object(h.jsx)(r.c,{className:"navbar-brand",to:"/",children:Object(h.jsx)("img",{src:I,alt:"logo",className:i?"logo-after-scroll":"logo-before-scroll"})}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(h.jsxs)("ul",{className:"navbar-nav ms-auto me-auto",children:[Object(h.jsx)(r.b,{to:"/",children:Object(h.jsx)("li",{className:"nav-item active mx-md-2 mx-auto",children:Object(h.jsxs)("span",{className:"nav-link","data-bs-toggle":"collapse","data-bs-target":".navbar-collapse.show",children:["Home ",Object(h.jsx)("span",{className:"sr-only",children:"(current)"})]})})}),Object(h.jsx)(r.b,{to:"/contact",children:Object(h.jsx)("li",{className:"nav-item mx-md-2 mx-auto",children:Object(h.jsx)("span",{className:"nav-link","data-bs-toggle":"collapse","data-bs-target":".navbar-collapse.show",children:"Contact"})})}),Object(h.jsx)(r.b,{to:"/about",children:Object(h.jsx)("li",{className:"nav-item mx-md-2 mx-auto",children:Object(h.jsx)("span",{className:"nav-link","data-bs-toggle":"collapse","data-bs-target":".navbar-collapse.show",children:"About"})})}),Object(h.jsxs)("li",{className:"nav-item dropdown mx-md-2 mx-auto",children:[Object(h.jsx)(r.b,{to:"",className:"nav-link dropdown-toggle","data-bs-toggle":"dropdown",href:"#",role:"button","aria-expanded":"false",children:"Categories"}),Object(h.jsx)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:c.Category.map((function(e,t){return Object(h.jsx)(r.b,{to:{pathname:"/categories/".concat(e),state:{catName:e}},children:Object(h.jsx)("li",{children:Object(h.jsx)("span",{className:"dropdown-item","data-bs-toggle":"collapse","data-bs-target":".navbar-collapse.show",children:e})})},t)}))})]})]}),Object(h.jsxs)("ul",{className:"navbar-nav",children:[Object(h.jsx)(r.b,{to:"/cart",children:Object(h.jsx)("li",{className:"nav-item d-sm-none d-md-block d-none",children:Object(h.jsxs)("span",{className:"nav-link position-relative","data-bs-toggle":"collapse","data-bs-target":".navbar-collapse.show",children:[Object(h.jsx)(v.a,{icon:g.a,className:"text-success cart-basket-icon"}),Object(h.jsx)("div",{id:"cart",children:Object(h.jsx)("span",{className:0===t?"hide-price":"position-absolute my-badge translate-middle badge rounded-pill bg-primary wf-light",children:t})})]})})}),Object(h.jsx)(r.b,{to:"/",children:Object(h.jsx)("li",{className:"nav-item custom-button",children:Object(h.jsx)("span",{className:"nav-link btn login","data-bs-toggle":"collapse","data-bs-target":".navbar-collapse.show",children:"LogIn"})})}),Object(h.jsx)(r.b,{to:"/",children:Object(h.jsx)("li",{className:"nav-item me-md-5 me-0",children:Object(h.jsxs)("button",{className:"nav-links btn btn-primary custom-button signup","data-bs-toggle":"collapse","data-bs-target":".navbar-collapse.show",children:["SignUp ",Object(h.jsx)(_.a,{})]})})})]})]})]}),Object(h.jsx)("div",{className:"icon-bar",children:Object(h.jsx)(r.b,{to:"/cart",children:Object(h.jsxs)("span",{className:"nav-link","data-bs-toggle":"collapse","data-bs-target":".navbar-collapse.show",children:[Object(h.jsx)(v.a,{icon:g.a,className:"text-success cart-basket-icon"}),Object(h.jsx)("div",{id:"cart",children:Object(h.jsx)("span",{className:0===t?"hide-price":" cart-basket d-flex align-items-center justify-content-center",children:t})})]})})})]})})},H=c(49),M=c(115),R=c(116),Y=c(117),J=c(47),U=c.n(J);c(89);C.a.configure();var $=[{id:1,name:"items"},{id:2,name:" name"},{id:3,name:"price"},{id:4,name:"quantity"},{id:6,name:"Delete"},{id:5,name:"total amount"}],Q=function(e){var t=Object(s.useContext)(y),c=t.shoppingCart,a=t.qty,n=t.totalPrice,i=t.dispatch,r=Object(s.useState)(0),l=Object(m.a)(r,1)[0];return Object(h.jsx)("div",{style:{minHeight:"80vh",paddingTop:"100px"},className:"container px-md-auto mx-md-auto cart",children:c.length>0?Object(h.jsxs)("div",{className:"card my-cart shadow-lg pt-md-0 pt-5 pt-xl-0 ",children:[Object(h.jsx)("div",{className:"",children:Object(h.jsx)("div",{className:"pr-md-0",children:Object(h.jsx)("div",{className:"fixTableHead",children:Object(h.jsxs)(H.a,{responsve:!0,className:"table table-striped",children:[Object(h.jsx)("thead",{children:Object(h.jsx)("tr",{children:$.map((function(e){var t=e.name,c=e.id;return Object(h.jsx)("th",{className:"text-capitalize text-light font-weight-normal",children:t},c)}))})}),Object(h.jsx)("tbody",{children:c.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"align-middle",children:Object(h.jsx)("img",{className:"img cart-img ",alt:e.title,src:e.image})}),Object(h.jsx)("td",{className:"align-middle table-data-item-name w-25",children:e.title}),Object(h.jsxs)("td",{className:"align-middle text-danger",children:["$ ",e.price]}),Object(h.jsxs)("td",{className:"align-middle",children:[Object(h.jsx)("span",{className:"cart-icon-list cursor",onClick:function(){return i({type:"MINUS",id:e.id,cart:e})},children:Object(h.jsx)(M.a,{className:"mb-1 plus-minus-icon "})}),Object(h.jsx)("span",{className:"mx-3",children:e.qty}),Object(h.jsx)("span",{className:"cart-icon-list cursor",onClick:function(){return i({type:"PLUS",id:e.id,cart:e})},children:Object(h.jsx)(R.a,{className:"mb-1 plus-minus-icon "})})]}),Object(h.jsx)("td",{className:"align-middle",children:Object(h.jsx)(Y.a,{className:"mb-1 text-danger cursor",onClick:function(){return i({type:"DELETE",id:e.id,cart:e})}})}),Object(h.jsxs)("td",{className:"align-middle",children:["$ ",e.qty*e.price]})]},e.id)}))})]})})})}),Object(h.jsx)("div",{className:"card-body mr-auto mb-2",children:Object(h.jsxs)("div",{className:"text-end",children:[Object(h.jsxs)("p",{children:["Total Quantity : ",a]}),Object(h.jsx)("p",{className:"text-success",children:"Shipping Cost : $ 0"}),Object(h.jsxs)("p",{className:"text-danger bold fw-bold",children:["Total : $ ",n]}),Object(h.jsx)(U.a,{stripeKey:"pk_test_51J5bT7SCgFasMdq4MnJzzDAEzil35dNbMdapFipHacYso9MIljPjwI5k0QiEepP7JUDQrKtJ031L7eQgS8McAQY9005RCqap0n",token:function(){0===l&&(i({type:"EMPTY"}),e.history.push("/"),C.a.success("You have paid successfully",{position:C.a.POSITION.BOTTOM_CENTER,type:C.a.TYPE.INFO}))},billingAddress:!0,shippingAddress:!0,amount:100*n,name:"All Products"})]})})]}):Object(h.jsx)("p",{style:{margin:"15%"},children:"Sorry currently your cart is empty..."})})},B=function(e){var t=e.location.state,c=Object(s.useContext)(y).dispatch,a=Object(s.useState)([]),n=Object(m.a)(a,2),i=n[0],r=n[1];return function(){var e=Object(b.a)(j.a.mark((function e(){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://fakestoreapi.com/products/category/".concat(t.catName));case 2:c=e.sent,r(c.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"container",style:{paddingTop:"150px"},children:Object(h.jsx)("div",{className:"row product",children:i.map((function(e){return Object(h.jsx)("div",{className:"col-md-3 p-2 col-6 pb-md-5",children:Object(h.jsxs)("div",{className:"card shadow h-100",children:[e.price<50?Object(h.jsx)("div",{className:"text-start new",children:Object(h.jsx)("span",{children:"New"})}):"",e.price>50?Object(h.jsx)("div",{className:"text-start hot",children:Object(h.jsx)("span",{children:"Hot"})}):"",Object(h.jsxs)("div",{className:"card-body pb-1",children:[Object(h.jsx)("img",{src:e.image,alt:e.title,className:"img-fluid custom-food-image"}),Object(h.jsxs)("div",{className:"pt-4",children:[Object(h.jsx)("h6",{className:"title text-capitalize text-start pb-1",children:e.title}),Object(h.jsx)("p",{className:"text-muted text-start",style:{fontSize:"12px"},children:e.category}),Object(h.jsx)("div",{className:"card-footer bg-white px-0 pt-2 pb-2",children:Object(h.jsxs)("div",{className:"row px-2",children:[Object(h.jsx)("div",{className:"col-6",children:Object(h.jsxs)("h6",{className:"price text-start",children:["$ ",e.price]})}),Object(h.jsx)("div",{className:"col-6 text-end cursor",onClick:function(){C.a.success("Added to Cart",{position:C.a.POSITION.TOP_RIGHT,type:C.a.TYPE.INFO,autoClose:1e3}),c({type:"ADD_TO_CART",id:e.id,product:e})},children:Object(h.jsx)(v.a,{icon:g.a,className:"text-success cursor"})})]})})]})]})]})},e.id)}))})}),Object(h.jsx)(k,{})]})};var G=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(u,{children:Object(h.jsx)(F,{children:Object(h.jsxs)(w,{children:[Object(h.jsx)(z,{}),Object(h.jsxs)(l.d,{children:[Object(h.jsx)(l.b,{exact:!0,path:"/",component:P}),Object(h.jsx)(l.b,{exact:!0,path:"/contact",component:S}),Object(h.jsx)(l.b,{exact:!0,path:"/cart",component:Q}),Object(h.jsx)(l.b,{exact:!0,path:"/categories/:category",component:B})]}),Object(h.jsx)(l.a,{to:"/"})]})})})})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,118)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};c(90),c(91);i.a.render(Object(h.jsx)(r.a,{children:Object(h.jsx)(G,{})}),document.getElementById("root")),K()},55:function(e,t,c){},56:function(e,t,c){},80:function(e,t,c){},83:function(e,t,c){}},[[113,1,2]]]);
//# sourceMappingURL=main.981a81f3.chunk.js.map