(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{235:function(e,t,c){"use strict";c.d(t,"a",(function(){return i})),c.d(t,"b",(function(){return r}));var o=c(27),n=c(23),a=c(43);const i=o.$ecomConfig.get("currency")||"BRL",r=e=>{const t={name:Object(n.a)(e),id:e.sku,price:Object(a.a)(e).toFixed(2)};return e.quantity&&(t.quantity=e.quantity),t}},252:function(e,t,c){"use strict";var o=c(6),n=c(235);t.a=e=>{const t=window.storefrontApp&&window.storefrontApp.router;if(t){let c,a,i;const r=()=>{const e=[];return o.a.data&&Array.isArray(o.a.data.items)&&o.a.data.items.forEach((t=>{e.push(Object(n.b)(t))})),e},s=t=>{e.push({event:"eec.checkout_option",ecommerce:{currencyCode:n.a,checkout_option:{actionField:t}}})},u=(t,o)=>{const i={step:t,option:o};t<=1||!c?(e.push({event:"eec.checkout",ecommerce:{currencyCode:n.a,checkout:{actionField:i,products:r()}}}),e.push({event:"checkout"}),c=!0):a||(s(i),e.push({event:"checkoutOption"}),a=!0)},d=(t,c)=>{if(!i){const{amount:a}=window.storefrontApp,u={id:t,revenue:(a&&a.total||o.a.data&&o.a.data.subtotal||0).toFixed(2)};let d;if(a&&(void 0!==a.freight&&(u.shipping=a.freight.toFixed(2)),void 0!==a.tax&&(u.tax=a.tax.toFixed(2))),c)try{d=JSON.parse(c)}catch(e){}d&&(["payment_method_label","shipping_method_label"].forEach(((e,t)=>{d[e]&&s({step:3+t,option:d[e]})})),d.extra_discount&&d.extra_discount.discount_coupon&&(u.coupon=d.extra_discount.discount_coupon)),e.push({event:"eec.purchase",ecommerce:{currencyCode:n.a,purchase:{actionField:u,products:r()}}}),i=!0}};let p;const h=({name:e,params:t})=>{switch(e){case"cart":u(1,"Review Cart");break;case"checkout":u(2,"Confirm Purchase");break;case"confirmation":clearTimeout(p),t.json?d(t.id,decodeURIComponent(t.json)):p=setTimeout((()=>{d(t.id)}),1500)}};t.currentRoute&&h(t.currentRoute),t.afterEach(h)}}},253:function(e,t,c){"use strict";var o=c(6),n=c(235);t.a=e=>{const t={},c=c=>{const o=Object(n.b)(c);e.push({event:"eec.add",ecommerce:{currencyCode:n.a,add:{products:[o]}}}),e.push({event:"addToCart"}),t[c.sku]=o},a=c=>{const o=t[c.sku];e.push({event:"eec.remove",ecommerce:{currencyCode:n.a,remove:{products:[o?Object.assign({},o):Object(n.b)(c)]}}}),e.push({event:"removeFromCart"}),delete t[c.sku]};o.a.on("addItem",(({item:e})=>c(e))),o.a.on("increaseItemQnt",(({item:e})=>{const o=t[e.sku];if(o){const t=e.quantity-o.quantity;t>0?c({...e,quantity:t}):a({...e,quantity:-t})}else c(e)})),o.a.on("removeItem",(({item:e})=>a(e))),o.a.on("clear",(()=>{for(const e in t)t[e]&&a(t[e])}))}},378:function(e,t,c){"use strict";c.r(t);var o=c(252);const{location:n,$:a}=window;var i=c(253);t.default=(e={})=>{const{gaTrackingId:t}=e,{gtag:c}=window;"function"==typeof c&&(((e,t)=>{const c=()=>setTimeout((()=>{e("event","page_view",{page_title:document.title||"Checkout",page_path:`/${n.hash.split("/")[1]}`,send_to:t})}),300);Object(o.a)({push:({event:t,ecommerce:o})=>{let i;switch(t){case"eec.checkout":case"eec.checkout_option":i=o&&o.checkout,i&&e("event","begin_checkout",{items:i.products}),e("event","set_checkout_option",{checkout_step:n.hash.startsWith("#/cart")?1:2});break;case"eec.purchase":c(),i=o&&o.purchase,i&&i.actionField&&e("event","purchase",{transaction_id:i.actionField.id,affiliation:a('meta[name="author"]').attr("content")||"Shop",value:Number(i.actionField.revenue),currency:o.currencyCode,tax:i.actionField.tax?Number(i.actionField.tax):0,shipping:i.actionField.shipping?Number(i.actionField.shipping):0,items:i.products});break;default:c()}}})})(c,t),(e=>{Object(i.a)({push:({event:t,ecommerce:c})=>{if(c&&("eec.add"===t||"eec.remove"===t)){const o=c[t.slice(4)];o&&o.products&&e("event","eec.add"===t?"add_to_cart":"remove_from_cart",{items:o.products})}}})})(c))}}}]);