webpackJsonp([12],{dzmi:function(e,a){},gbUe:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={components:{},data:function(){return{sexList:[{id:1,name:"ch"==this.$i18n.locale?"男":"Man"},{id:2,name:"ch"==this.$i18n.locale?"女":"Woman"},{id:3,name:"ch"==this.$i18n.locale?"保密":"Secrecy"}],avatar:"",formData:{avatar:"",nickname:"",gender:"",remark:"",email:"",mobile:"",address:""},rules:{nickname:[{required:!0,message:this.$t("rules.username_no"),trigger:"blur|change"}],mobile:[{required:!0,message:this.$t("rules.phone_no"),trigger:"blur|change"},{pattern:/^1[1|2|3|4|5|6|7|8|9][0-9]\d{8}$/,message:this.$t("rules.phone_err"),trigger:"blur|change"}],email:[{required:!0,message:this.$t("rules.email_no"),trigger:"blur|change"},{pattern:"^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$",message:this.$t("rules.email_err"),trigger:"blur|change"}]}}},created:function(){this.getformtoken()},methods:{fileUpload:function(e){var a=this;e.status="uploading";var t=new FormData;t.append("file",e.file),a.$request.Upload(t).then(function(t){1==t.code?(e.status="done",a.formData.avatar=t.data.url,a.avatar=t.data.fullUrl):e.status="failed"})},getformtoken:function(e){var a=this;a.$request.getformtoken().then(function(e){1==e.code&&(a.form_token=e.data.token,a.getUserInfo())})},getUserInfo:function(){var e=this;e.$request.getuserinfo({form_token:e.form_token}).then(function(a){if(1==a.code)for(var t in e.avatar=a.data.full_avatar,a.data)for(var r in e.formData)t==r&&(e.formData[t]=a.data[t])})},submitForm:function(e){var a=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;a.$request.updateuserinfo(a.formData).then(function(e){1==e.code?a.$toast({type:"success",message:e.msg}):a.$toast({type:"fail",message:e.msg})})})}}},i={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"usereditinfo_container"},[t("div",{staticClass:"web_infocontainer"},[t("div",{staticClass:"fl"},[t("div",{staticClass:"edit-info"},[t("div",{staticClass:"header-height"}),e._v(" "),t("div",{staticClass:"box edit-box"},[t("div",{staticClass:"box-container"},[t("div",{staticClass:"edit-form"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.formData,rules:e.rules,"label-width":"100px","label-position":"top"}},[t("div",{staticClass:"avatar"},[t("el-image",{attrs:{src:e.avatar}}),e._v(" "),t("van-uploader",{attrs:{"preview-full-image":!1,"after-read":e.fileUpload,"max-count":1}},[t("el-button",[e._v(e._s(e.$t("config.avatar_up")))])],1)],1),e._v(" "),t("div",{staticClass:"info-input"},[t("el-form-item",{attrs:{label:e.$t("config.nickname"),prop:"nickname"}},[t("el-input",{model:{value:e.formData.nickname,callback:function(a){e.$set(e.formData,"nickname",a)},expression:"formData.nickname"}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("config.gender")}},[t("el-radio-group",{model:{value:e.formData.gender,callback:function(a){e.$set(e.formData,"gender",a)},expression:"formData.gender"}},e._l(e.sexList,function(a,r){return t("el-radio",{key:a.id,staticClass:"radio_con",attrs:{label:a.id}},[e._v(e._s(a.name))])}),1)],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("config.email"),prop:"email"}},[t("el-input",{model:{value:e.formData.email,callback:function(a){e.$set(e.formData,"email",a)},expression:"formData.email"}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("config.phone"),prop:"phone"}},[t("el-input",{model:{value:e.formData.mobile,callback:function(a){e.$set(e.formData,"mobile",a)},expression:"formData.mobile"}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("config.remark"),prop:""}},[t("el-input",{attrs:{maxlength:"100","show-word-limit":"",type:"textarea"},model:{value:e.formData.remark,callback:function(a){e.$set(e.formData,"remark",a)},expression:"formData.remark"}})],1),e._v(" "),t("el-form-item",{staticClass:"form-btn"},[t("el-button",{attrs:{type:"primary"},on:{click:function(a){return e.submitForm("ruleForm")}}},[e._v("Submit")])],1)],1)])],1)])])])])])])},staticRenderFns:[]};var o=t("VU/8")(r,i,!1,function(e){t("dzmi")},"data-v-adc22394",null);a.default=o.exports}});