(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{229:function(o,t,i){var e=i(234);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[o.i,e,""]]),e.locals&&(o.exports=e.locals);(0,i(173).default)("6cc07505",e,!0,{})},231:function(o,t,i){"use strict";var e={name:"ABackdrop",props:{isVisible:{type:Boolean,default:!0},zIndexOnShow:{type:Number,default:1080},transitionMs:{type:Number,default:150}},data:()=>({opacity:0,zIndex:null,top:null}),computed:{style(){const{top:o,zIndex:t,transitionMs:i,opacity:e}=this;return{top:o,transition:`opacity ${i}ms linear`,opacity:e,zIndex:t}}},methods:{hide(){this.$emit("update:is-visible",!1),this.$emit("hide")},lockBodyScroll(){document.body.style.maxWidth=`${document.body.offsetWidth}px`,document.body.style.overflow="hidden"}},watch:{isVisible(o){o?(this.opacity=null,this.lockBodyScroll()):(this.opacity=0,document.body.style.overflow=document.body.style.maxWidth=null)},opacity(o){0===o?setTimeout((()=>{this.top=this.zIndex=null}),this.transitionMs):(this.zIndex=this.zIndexOnShow,this.top=0)}},mounted(){this.isVisible&&(setTimeout((()=>{this.opacity=null}),this.transitionMs),this.lockBodyScroll())}},a=(i(233),i(51)),s=Object(a.a)(e,(function(){var o=this,t=o.$createElement;return(o._self._c||t)("div",{staticClass:"backdrop",style:o.style,on:{click:o.hide}})}),[],!1,null,null,null);t.a=s.exports},233:function(o,t,i){"use strict";i(229)},234:function(o,t,i){(t=i(172)(!0)).push([o.i,".backdrop{position:fixed;top:-100vh;left:0;width:100vw;height:100vh;background-color:var(--dark);opacity:.65;cursor:pointer;z-index:-100}","",{version:3,sources:["ABackdrop.scss"],names:[],mappings:"AAAA,UAAU,cAAc,CAAC,UAAU,CAAC,MAAM,CAAC,WAAW,CAAC,YAAY,CAAC,4BAA4B,CAAC,WAAW,CAAC,cAAc,CAAC,YAAY",file:"ABackdrop.scss",sourcesContent:[".backdrop{position:fixed;top:-100vh;left:0;width:100vw;height:100vh;background-color:var(--dark);opacity:.65;cursor:pointer;z-index:-100}"]}]),o.exports=t},236:function(o,t,i){"use strict";var e=i(26),a=i(42),s={name:"AAlert",props:{canShow:{type:Boolean,default:!0},variant:{type:String,default:"warning"}},data:()=>({count:1}),computed:{i19close:()=>Object(a.a)(e.J)},watch:{canShow(o){o&&this.count++}}},n=i(51),r=Object(n.a)(s,(function(){var o=this,t=o.$createElement,i=o._self._c||t;return i("div",[i("transition",{attrs:{"enter-active-class":"animated fadeInDown fast"}},[o.canShow?i("div",{key:o.count},[o._m(0)]):o._e()])],1)}),[function(){var o=this,t=o.$createElement,i=o._self._c||t;return i("div",{staticClass:"alert alert-dismissible fade show",class:"alert-"+o.variant,attrs:{role:"alert"}},[o._t("default"),i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":o.i19close},on:{click:function(t){return o.$emit("dismiss")}}},[i("span",{attrs:{"aria-hidden":"true"}},[o._v("×")])])],2)}],!1,null,null,null);t.a=r.exports},270:function(o,t,i){var e=i(316);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[o.i,e,""]]),e.locals&&(o.exports=e.locals);(0,i(173).default)("5ba7bbf2",e,!0,{})},315:function(o,t,i){"use strict";i(270)},316:function(o,t,i){(t=i(172)(!0)).push([o.i,".login-modal__box{z-index:1090;position:fixed;top:0;left:0;width:100vw;box-sizing:border-box;border-radius:0}@media (min-width:410px){.login-modal__box{width:400px;left:50%;margin-left:-200px;top:var(--spacer-4);border-radius:var(--border-radius)}}@media (min-height:400px){.login-modal__box{top:15%}}.login-modal .alert{margin-bottom:var(--spacer-3)}.login-modal__logout{margin-top:var(--spacer-3)}.login-modal__btn{color:#fff;text-align:left;line-height:var(--line-height-lg);padding:.7rem;min-width:15rem}.login-modal__btn:hover{color:#fff}.login-modal__btn:focus{box-shadow:none}.login-modal__btn--facebook{background:#3b5999;border-color:#2f4d8a}.login-modal__btn--facebook:hover{background:#274480;border-color:#274480}.login-modal__btn--google{background:#cb4023;border-color:#be3419}.login-modal__btn--google:hover{background:#c1361a;border-color:#c1361a}.login-modal__btn--windowslive{background:#329ffc;border-color:#2996f2}.login-modal__btn--windowslive:hover{background:#1f8ce9;border-color:#1f8ce9}.login-modal__btn-icon{display:inline-block;width:1.4rem;text-align:center;margin-right:var(--spacer-1)}.login-modal__back{display:block;padding-left:.3rem;padding-right:.3rem}.login-modal__back:focus{box-shadow:none}.login-modal__visitor-info{font-size:var(--font-size-sm);margin-top:var(--spacer-2);text-align:center;color:var(--text-muted)}","",{version:3,sources:["LoginModal.scss"],names:[],mappings:"AAAA,kBAAkB,YAAY,CAAC,cAAc,CAAC,KAAK,CAAC,MAAM,CAAC,WAAW,CAAC,qBAAqB,CAAC,eAAe,CAAC,yBAAyB,kBAAkB,WAAW,CAAC,QAAQ,CAAC,kBAAkB,CAAC,mBAAmB,CAAC,kCAAkC,CAAC,CAAC,0BAA0B,kBAAkB,OAAO,CAAC,CAAC,oBAAoB,6BAA6B,CAAC,qBAAqB,0BAA0B,CAAC,kBAAkB,UAAU,CAAC,eAAe,CAAC,iCAAiC,CAAC,aAAa,CAAC,eAAe,CAAC,wBAAwB,UAAU,CAAC,wBAAwB,eAAe,CAAC,4BAA4B,kBAAkB,CAAC,oBAAoB,CAAC,kCAAkC,kBAAkB,CAAC,oBAAoB,CAAC,0BAA0B,kBAAkB,CAAC,oBAAoB,CAAC,gCAAgC,kBAAkB,CAAC,oBAAoB,CAAC,+BAA+B,kBAAkB,CAAC,oBAAoB,CAAC,qCAAqC,kBAAkB,CAAC,oBAAoB,CAAC,uBAAuB,oBAAoB,CAAC,YAAY,CAAC,iBAAiB,CAAC,4BAA4B,CAAC,mBAAmB,aAAa,CAAC,kBAAkB,CAAC,mBAAmB,CAAC,yBAAyB,eAAe,CAAC,2BAA2B,6BAA6B,CAAC,0BAA0B,CAAC,iBAAiB,CAAC,uBAAuB",file:"LoginModal.scss",sourcesContent:[".login-modal__box{z-index:1090;position:fixed;top:0;left:0;width:100vw;box-sizing:border-box;border-radius:0}@media (min-width:410px){.login-modal__box{width:400px;left:50%;margin-left:-200px;top:var(--spacer-4);border-radius:var(--border-radius)}}@media (min-height:400px){.login-modal__box{top:15%}}.login-modal .alert{margin-bottom:var(--spacer-3)}.login-modal__logout{margin-top:var(--spacer-3)}.login-modal__btn{color:#fff;text-align:left;line-height:var(--line-height-lg);padding:.7rem;min-width:15rem}.login-modal__btn:hover{color:#fff}.login-modal__btn:focus{box-shadow:none}.login-modal__btn--facebook{background:#3b5999;border-color:#2f4d8a}.login-modal__btn--facebook:hover{background:#274480;border-color:#274480}.login-modal__btn--google{background:#cb4023;border-color:#be3419}.login-modal__btn--google:hover{background:#c1361a;border-color:#c1361a}.login-modal__btn--windowslive{background:#329ffc;border-color:#2996f2}.login-modal__btn--windowslive:hover{background:#1f8ce9;border-color:#1f8ce9}.login-modal__btn-icon{display:inline-block;width:1.4rem;text-align:center;margin-right:var(--spacer-1)}.login-modal__back{display:block;padding-left:.3rem;padding-right:.3rem}.login-modal__back:focus{box-shadow:none}.login-modal__visitor-info{font-size:var(--font-size-sm);margin-top:var(--spacer-2);text-align:center;color:var(--text-muted)}"]}]),o.exports=t},373:function(o,t,i){"use strict";i.r(t);var e=i(34),a=i(26),s=i(42),n=i(52),r=i(185),l=i(236),c=i(231),d={name:"LoginModal",components:{ALink:r.a,AAlert:l.a,ABackdrop:c.a},props:{isVisible:{type:Boolean,default:!0},getGreetingsMsg:Function,accountUrl:{type:String,default:"/app/#/account/"},ordersUrl:{type:String,default:"/app/#/account/orders"},ecomPassport:{type:Object,default:()=>n.a}},data:()=>({isLoading:!1,isWaitingPopup:!1,isLogged:!1,email:"",name:"",oauthProviders:[],isLoginForm:!1,hasLoginError:!1,hasNoProfileFound:!1}),computed:{i19close:()=>Object(s.a)(a.J),i19continueLoginOnPopup:()=>Object(s.a)(a.T),i19email:()=>Object(s.a)(a.hb),i19guestCheckoutMsg:()=>Object(s.a)(a.Bb),i19loginErrorMsg:()=>Object(s.a)(a.Ub),i19login:()=>Object(s.a)(a.Tb),i19logout:()=>Object(s.a)(a.Wb),i19myAccount:()=>Object(s.a)(a.dc),i19myOrders:()=>Object(s.a)(a.ec),i19noProfileFoundWithEmail:()=>Object(s.a)(a.mc),i19signInWith:()=>Object(s.a)(a.yd),i19signInWithAnotherEmail:()=>Object(s.a)(a.zd),i19signUpWith:()=>Object(s.a)(a.Ad),greetings(){return"function"==typeof this.getGreetingsMsg?this.getGreetingsMsg(this.name):`${Object(s.a)(a.Db)} ${this.name||Object(s.a)(a.Td)}`}},methods:{hide(){this.$emit("update:is-visible",!1)},update(){const{checkLogin:o,getCustomerName:t}=this.ecomPassport;this.name=t(),this.isLogged=o(),this.email="",this.isWaitingPopup=!1},waitPromise(o){this.isLoading=!0,o.catch(console.error).finally((()=>{this.isLoading=!1}))},setOauthProviders(){const o=this.ecomPassport.fetchOauthProviders().then((({host:o,baseUri:t,oauthPath:i,providers:e})=>{const a=[];for(const s in e)if(e[s]){const{faIcon:n,providerName:r}=e[s];a.push({link:o+t+s+i,faIcon:n,provider:s,providerName:r})}this.oauthProviders=a})).catch((o=>{throw this.presetOauthProviders(),o}));return this.waitPromise(o),o},presetOauthProviders(){this.oauthProviders=[{faIcon:"fa-facebook-f",providerName:"Facebook",provider:"facebook"},{faIcon:"fa-google",providerName:"Google",provider:"google"},{faIcon:"fa-windows",providerName:"Windows",provider:"windowslive"}]},openOauthPopup(o,t){if(this.hasLoginError=!1,o)this.ecomPassport.popupOauthLink(o),this.isWaitingPopup=!0;else{const o=this.setOauthProviders().then((()=>{const o=this.oauthProviders.find((o=>o.provider===t));this.openOauthPopup(o,t)})).catch((o=>{throw this.hasLoginError=!0,o}));this.waitPromise(o)}},submitEmail(){this.isLoginForm=!1;const o=this.ecomPassport.fetchLogin(this.email).catch((o=>{const{response:t}=o;if(!t||403!==t.status)throw setTimeout((()=>{this.hasLoginError=!0}),100),o;this.hasNoProfileFound=!0}));this.waitPromise(o)},logout(){this.ecomPassport.logout()}},watch:{hasNoProfileFound(o){!1===o&&(this.email=""),this.isLoginForm=!o},isLoginForm(o){this.hasLoginError=!1,o&&(this.isWaitingPopup=!1,this.$nextTick((()=>{setTimeout((()=>{this.$refs.input.focus()}),200)})))}},mounted(){["login","logout"].forEach((o=>{this.ecomPassport.on(o,(t=>{this.update(),this.$emit(o,t)}))})),this.update(),this.setOauthProviders()}},A=(i(315),i(51)),u=Object(A.a)(d,(function(){var o=this,t=o.$createElement,i=o._self._c||t;return i("div",{staticClass:"login-modal"},[i("a-backdrop",{attrs:{"is-visible":o.isVisible},on:{hide:o.hide}}),i("transition",{attrs:{"enter-active-class":"animated zoomIn","leave-active-class":"animated fadeOutUp slow"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:o.isVisible,expression:"isVisible"}],staticClass:"login-modal__box card"},[o._t("header",(function(){return[i("div",{staticClass:"login-modal__header card-header"},[o._v(" "+o._s(o.greetings)+" "),i("button",{staticClass:"close",attrs:{type:"button","aria-label":o.i19close},on:{click:o.hide}},[i("span",{attrs:{"aria-hidden":"true"}},[o._v("×")])])])]})),i("div",{staticClass:"login-modal__body card-body"},[o.hasLoginError?i("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[o._v(" "+o._s(o.i19loginErrorMsg)+" ")]):o._e(),i("transition-group",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated position-absolute fadeOut faster"}},[o.isLoading?i("div",{key:"waiting"},[i("div",{staticClass:"spinner-border m-3",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[o._v("Loading...")])])]):o.isLogged?i("div",{key:"logged"},[i("div",{staticClass:"list-group list-group-flush"},[i("a-link",{staticClass:"list-group-item list-group-item-action",attrs:{href:o.ordersUrl}},[o._v(" "+o._s(o.i19myOrders)+" ")]),i("a-link",{staticClass:"list-group-item list-group-item-action",attrs:{href:o.accountUrl}},[o._v(" "+o._s(o.i19myAccount)+" ")])],1),i("button",{staticClass:"login-modal__logout btn btn-block btn-danger",attrs:{type:"button"},on:{click:o.logout}},[i("i",{staticClass:"fas fa-sign-out-alt"}),o._v(" "+o._s(o.i19logout)+" ")])]):o.isLoginForm?i("div",{key:"form"},[i("form",{on:{submit:function(t){return t.preventDefault(),o.submitEmail.apply(null,arguments)}}},[i("div",{staticClass:"form-group"},[i("button",{staticClass:"login-modal__back btn",attrs:{type:"button"},on:{click:function(t){o.isLoginForm=!1}}},[i("i",{staticClass:"fas fa-arrow-left"})]),i("label",{attrs:{for:"login-modal-email"}},[o._v(" "+o._s(o.i19signInWith+" "+o.i19email)+" ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:o.email,expression:"email"}],ref:"input",staticClass:"form-control",attrs:{type:"email",id:"login-modal-email",placeholder:"email@mail.com",required:""},domProps:{value:o.email},on:{input:function(t){t.target.composing||(o.email=t.target.value)}}})]),i("button",{staticClass:"btn btn-block btn-primary",attrs:{type:"submit"}},[o._v(" "+o._s(o.i19login)+" ")])])]):i("div",{key:"oauth"},[!o.isWaitingPopup&&o.hasNoProfileFound?i("div",{staticClass:"alert alert-info",attrs:{role:"alert"}},[o._v(" "+o._s(o.i19noProfileFoundWithEmail)+" "),i("b",[o._v(o._s(o.email))]),o._v(". "),i("br"),i("a",{staticClass:"alert-link",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),o.hasNoProfileFound=!1}}},[o._v(" "+o._s(o.i19signInWithAnotherEmail)+" ")])]):o._e(),i("a-alert",{attrs:{"can-show":o.isWaitingPopup,variant:"info"}},[o._v(" "+o._s(o.i19continueLoginOnPopup)+". ")]),o._l(o.oauthProviders,(function(t){var e=t.link,a=t.faIcon,s=t.providerName,n=t.provider;return i("button",{key:n,staticClass:"login-modal__btn btn btn-block",class:"login-modal__btn--"+n,attrs:{type:"button"},on:{click:function(t){return o.openOauthPopup(e,n)}}},[i("span",{staticClass:"login-modal__btn-icon"},[i("i",{class:"fab "+a})]),o._v(" "+o._s(o.hasNoProfileFound?o.i19signUpWith:o.i19signInWith)+" "+o._s(s)+" ")])})),o.hasNoProfileFound?i("div",{staticClass:"login-modal__visitor-info"},[o._v(" "+o._s(o.i19guestCheckoutMsg)+" ")]):i("button",{key:"email",staticClass:"login-modal__btn btn btn-block btn-secondary",attrs:{type:"button"},on:{click:function(t){o.isLoginForm=!0}}},[i("span",{staticClass:"login-modal__btn-icon"},[i("i",{staticClass:"fas fa-envelope"})]),o._v(" "+o._s(o.i19signInWith+" "+o.i19email)+" ")])],2)])],1)],2)])],1)}),[],!1,null,null,null).exports;t.default=(o={},t="login-modal",i="user-button")=>{const a=document.getElementById(t),s=document.getElementById(i);if(a&&s){const i=window.storefront&&window.storefront.getScopedSlots;new e.a({data:{isVisible:!1},created(){s.addEventListener("click",(o=>{o.preventDefault(),this.isVisible=!0}))},render(e){const s=this;return e(u,{attrs:{id:t},props:{...o.props,isVisible:s.isVisible},on:{"update:is-visible"(o){s.isVisible=o}},scopedSlots:"function"==typeof i?i(a,e):void 0})}}).$mount(a)}}}}]);