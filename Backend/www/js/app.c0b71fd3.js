(function(e){function r(r){for(var a,i,o=r[0],l=r[1],m=r[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(r);while(f.length)f.shift()();return n.push.apply(n,m||[]),t()}function t(){for(var e,r=0;r<n.length;r++){for(var t=n[r],a=!0,o=1;o<t.length;o++){var l=t[o];0!==s[l]&&(a=!1)}a&&(n.splice(r--,1),e=i(i.s=t[0]))}return e}var a={},s={app:0},n=[];function i(r){if(a[r])return a[r].exports;var t=a[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=a,i.d=function(e,r,t){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,r){if(1&r&&(e=i(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)i.d(t,a,function(r){return e[r]}.bind(null,a));return t},i.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=r,o=o.slice();for(var m=0;m<o.length;m++)r(o[m]);var c=l;n.push([0,"chunk-vendors"]),t()})({0:function(e,r,t){e.exports=t("56d7")},"0928":function(e,r,t){"use strict";t("9239")},"56d7":function(e,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),s=t("7bb1"),n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],o=t("2877"),l={},m=Object(o["a"])(l,n,i,!1,null,null,null),c=m.exports,u=t("8c4f"),f=function(){var e=this,r=e.$createElement;e._self._c;return e._m(0)},d=[function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:t("cf05")}})])}],p={name:"Home"},v=p,_=Object(o["a"])(v,f,d,!1,null,null,null),b=_.exports,g=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"register"},[t("img",{staticClass:"img-logo",attrs:{src:"/img/logo3.png",alt:"Logo"}}),t("div",{staticClass:"card"},[t("h1",{staticClass:"card-header"},[e._v(" ลงทะเบียน ")]),t("div",{staticClass:"card-body"},[t("form",{on:{submit:function(r){return r.preventDefault(),e.onSubmit()}}},[t("div",{staticClass:"form-group mb-3"},[t("label",{attrs:{for:""}},[e._v("ชื่อ")]),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model.trim",value:e.form.r_firstname,expression:"form.r_firstname",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":e.errors.has("r_firstname")},attrs:{type:"text",name:"r_firstname"},domProps:{value:e.form.r_firstname},on:{input:function(r){r.target.composing||e.$set(e.form,"r_firstname",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}}),t("span",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.first("r_firstname")))])]),t("div",{staticClass:"form-group mb-3"},[t("label",{attrs:{for:""}},[e._v("นามสกุล")]),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model.trim",value:e.form.r_lastname,expression:"form.r_lastname",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":e.errors.has("r_lastname")},attrs:{type:"text",name:"r_lastname"},domProps:{value:e.form.r_lastname},on:{input:function(r){r.target.composing||e.$set(e.form,"r_lastname",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}}),t("span",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.first("r_lastname")))])]),t("div",{staticClass:"form-group mb-3"},[t("label",{attrs:{for:""}},[e._v("เบอร์โทรศัพท์")]),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model.trim",value:e.form.r_phone,expression:"form.r_phone",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":e.errors.has("r_phone")},attrs:{type:"text",name:"r_phone"},domProps:{value:e.form.r_phone},on:{input:function(r){r.target.composing||e.$set(e.form,"r_phone",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}}),t("span",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.first("r_phone")))])]),t("div",{staticClass:"form-group mb-3"},[t("label",{attrs:{for:""}},[e._v("E-mail")]),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model.trim",value:e.form.r_email,expression:"form.r_email",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":e.errors.has("r_email")},attrs:{type:"text",name:"r_email"},domProps:{value:e.form.r_email},on:{input:function(r){r.target.composing||e.$set(e.form,"r_email",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}}),t("span",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.first("r_email")))])]),t("div",{staticClass:"form-group mb-3"},[t("label",{attrs:{for:""}},[e._v("ID Line")]),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model.trim",value:e.form.r_line,expression:"form.r_line",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":e.errors.has("r_line")},attrs:{type:"text",name:"r_line"},domProps:{value:e.form.r_line},on:{input:function(r){r.target.composing||e.$set(e.form,"r_line",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}}),t("span",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.first("r_line")))])]),t("div",{staticClass:"form-group mb-3"},[t("label",{attrs:{for:""}},[e._v("รหัสกระเป๋า")]),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model.trim",value:e.form.r_number,expression:"form.r_number",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":e.errors.has("r_number")},attrs:{type:"text",name:"r_number"},domProps:{value:e.form.r_number},on:{input:function(r){r.target.composing||e.$set(e.form,"r_number",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}}),t("span",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.first("r_number")))])]),e.errorMessage?t("div",{staticClass:"alert alert-warning text-center"},[e._v(" "+e._s(e.errorMessage)+" ")]):e._e(),e._m(0)])])])])},h=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"d-grid gap-2 mb-3"},[t("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("ลงทะเบียน")]),t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"}},[e._v("ยกเลิก")])])}],C=t("1da1"),x=(t("96cf"),t("bc3a")),w=t.n(x),y={data:function(){return{form:{r_firstname:"",r_lastname:"",r_phone:"",r_email:"",r_line:"",r_number:""},errorMessage:""}},methods:{onSubmit:function(){var e=this;this.$validator.validateAll().then(function(){var r=Object(C["a"])(regeneratorRuntime.mark((function r(t){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t){r.next=2;break}return r.abrupt("return");case 2:w.a.post("api/account/register",e.form).then((function(r){e.onReset(),e.onRedirectToHome()})).catch((function(r){return e.errorMessage=r.response.data.message}));case 3:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},onReset:function(){this.$validator.reset(),this.form={r_firstname:"",r_lastname:"",r_phone:"",r_email:"",r_line:"",r_number:""}},onRedirectToHome:function(){this.$router.push({name:"Confirm"})}}},$=y,O=(t("829e"),Object(o["a"])($,g,h,!1,null,"7945d5f5",null)),j=O.exports,k=function(){var e=this,r=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"confirm"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-2"}),t("div",{staticClass:"col-md-8"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-body"},[t("div",{staticClass:"row g-0"},[t("div",{staticClass:"col-md-5"},[t("img",{staticClass:"img-token",attrs:{src:"/img/token.png",alt:"Logo"}})]),t("div",{staticClass:"col-md-7"},[t("div",{staticClass:"card-body mt-5"},[t("h5",{staticClass:"card-title"},[e._v("ลงทะเบียนสำเร็จ !!!")]),t("p",{staticClass:"card-text"},[e._v("ระบบได้บันทึกข้อมูลของท่านเรียบร้อยแล้ว ทางบริษัทจะทำการโอนเหรียญให้ท่านหลังจากปิดการลงทะเบียนแล้ว ขอบคุณที่เข้าร่วมกิจกรรมกับทางเรา")])])])])])])]),t("div",{staticClass:"col-md-2"})])])}],q=(t("0928"),{}),N=Object(o["a"])(q,k,P,!1,null,"12d8f76a",null),E=N.exports;a["a"].use(u["a"]);var M=[{path:"/home",name:"Home",component:b},{path:"/",name:"Register",component:j},{path:"/confirm",name:"Confirm",component:E}],R=new u["a"]({mode:"history",base:"/",routes:M}),S=R;t("f9e3"),t("4989"),t("a347");a["a"].config.productionTip=!1,a["a"].use(s["a"]),new a["a"]({router:S,render:function(e){return e(c)}}).$mount("#app")},"829e":function(e,r,t){"use strict";t("d1de")},9239:function(e,r,t){},a347:function(e,r,t){},cf05:function(e,r,t){e.exports=t.p+"img/logo.82b9c7a5.png"},d1de:function(e,r,t){}});
//# sourceMappingURL=app.c0b71fd3.js.map