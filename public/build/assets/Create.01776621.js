import{_ as n}from"./vendor.21c2b6f5.js";import{I as i}from"./InlineCheckboxGroup.b3aa2b58.js";import{I as l}from"./InputGroup.513e0dd4.js";import{n as u}from"./LogoLight.f7426689.js";import"./checkbox-form-group.99a615f1.js";const m={name:"AdminUserCreate",components:{InlineCheckboxGroup:i,InputGroup:l},layout:"admin-layout",props:{selectableRoles:{default:null}},data(){return{formData:{email:"",first_name:"",last_name:"",password:"",password_confirmation:"",roles:{}}}},computed:{isSelectableRoles(){try{return Object.keys(this.selectableRoles).length>0}catch{return!1}}},mounted(){this.initialiseRoles()},methods:{initialiseRoles(){n.forEach(this.selectableRoles,(r,e)=>{this.formData.roles.hasOwnProperty(e)||(this.formData.roles[e]=!1)})},submit(){this.$inertia.post(this.$route("admin.users.store"),this.formData)}}};var p=function(){var e=this,t=e._self._c;return t("form",{staticClass:"max-w-5xl mx-auto",attrs:{autocomplete:"off"},on:{submit:function(a){return a.preventDefault(),e.submit.apply(null,arguments)}}},[e.userCan("users.create")?t("div",{staticClass:"flex flex-row items-center mb-6"},[t("h1",{staticClass:"font-medium mr-auto text-lg"},[e._v(" Create User ")]),e.userCan("users.view")?t("inertia-link",{staticClass:"button button-default-responsive button-primary-subtle flex flex-row items-center mr-2",attrs:{href:e.$route("admin.users.index")}},[t("icon-chevron-left",{staticClass:"w-5 md:mr-2"}),t("span",{staticClass:"hidden md:inline"},[e._v(" Back ")])],1):e._e(),t("button",{staticClass:"button button-default-responsive button-primary flex flex-row items-center",attrs:{type:"submit"}},[t("icon-save",{staticClass:"w-5 md:mr-2"}),t("span",{staticClass:"hidden md:inline"},[e._v(" Create User ")])],1)],1):e._e(),t("div",{staticClass:"bg-white py-6 shadow-subtle rounded-lg"},[t("div",{staticClass:"block px-6 w-full"},[t("input-group",{attrs:{"error-message":e.getPageErrorMessage("first_name"),"input-autocomplete":"first_name","input-autofocus":!0,"input-id":"first_name","input-name":"first_name","input-required":!0,"input-type":"text","label-text":"First Name"},on:{errorHidden:function(a){return e.clearPageErrorMessage("first_name")}},model:{value:e.formData.first_name,callback:function(a){e.$set(e.formData,"first_name",a)},expression:"formData.first_name"}}),t("input-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("last_name"),"input-autocomplete":"last_name","input-id":"last_name","input-name":"last_name","input-required":!0,"input-type":"text","label-text":"Last Name"},on:{errorHidden:function(a){return e.clearPageErrorMessage("last_name")}},model:{value:e.formData.last_name,callback:function(a){e.$set(e.formData,"last_name",a)},expression:"formData.last_name"}}),t("input-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("email"),"input-autocomplete":"off","input-id":"email","input-name":"email","input-required":!0,"input-type":"email","label-text":"Email"},on:{errorHidden:function(a){return e.clearPageErrorMessage("email")}},model:{value:e.formData.email,callback:function(a){e.$set(e.formData,"email",a)},expression:"formData.email"}}),t("input-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("password"),"input-autocomplete":"off","input-id":"password","input-name":"password","input-required":!0,"input-type":"password","label-text":"Password"},on:{errorHidden:function(a){return e.clearPageErrorMessage("password")}},model:{value:e.formData.password,callback:function(a){e.$set(e.formData,"password",a)},expression:"formData.password"}}),t("input-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("password_confirmation"),"input-autocomplete":"off","input-id":"password_confirmation","input-name":"password_confirmation","input-required":!0,"input-type":"password","label-text":"Confirm Password"},on:{errorHidden:function(a){return e.clearPageErrorMessage("password_confirmation")}},model:{value:e.formData.password_confirmation,callback:function(a){e.$set(e.formData,"password_confirmation",a)},expression:"formData.password_confirmation"}})],1)]),e.isSelectableRoles?t("div",{staticClass:"bg-white mt-6 py-6 shadow-subtle rounded-lg"},[t("div",{staticClass:"block px-6 w-full"},[t("p",{staticClass:"font-medium mb-4 text-theme-base-contrast tracking-wider"},[e._v(" Roles ")]),t("div",{staticClass:"space-y-2"},e._l(e.selectableRoles,function(a,s){return t("inline-checkbox-group",{key:`user-role-${s}`,attrs:{"input-id":`user-role-${s}`,"input-name":`user-role-${s}`,"label-text":a},model:{value:e.formData.roles[s],callback:function(o){e.$set(e.formData.roles,s,o)},expression:"formData.roles[role_key]"}})}),1)])]):e._e()])},c=[],f=u(m,p,c,!1,null,null,null,null);const v=f.exports;export{v as default};
