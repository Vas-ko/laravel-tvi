import{C as a}from"./CheckboxGroup.7b759576.js";import{D as s}from"./DateTimePickerGroup.36fef719.js";import{I as i}from"./InputGroup.513e0dd4.js";import{_ as n}from"./vendor.21c2b6f5.js";import{n as o}from"./LogoLight.f7426689.js";import"./checkbox-form-group.99a615f1.js";const l={name:"AdminCmsRedirectEdit",components:{CheckboxGroup:a,DateTimePickerGroup:s,InputGroup:i},layout:"admin-layout",props:{redirect:{type:Object,required:!0}},data(){return{formData:{}}},created(){this.formData=n.cloneDeep(this.redirect)},methods:{submit(){this.$inertia.put(this.$route("admin.cms.redirects.update",this.redirect.id),this.formData)}}};var u=function(){var e=this,t=e._self._c;return t("form",{staticClass:"max-w-5xl mx-auto",attrs:{autocomplete:"off"},on:{submit:function(r){return r.preventDefault(),e.submit.apply(null,arguments)}}},[e.userCan("cms_advanced.edit")?t("div",{staticClass:"flex flex-row items-center mb-6 sticky-menu"},[t("h1",{staticClass:"font-medium mr-auto text-lg"},[e._v(" Edit Redirect - "+e._s(e.redirect.url_from)+" ")]),e.userCan("cms_advanced.view")?t("inertia-link",{staticClass:"button button-default-responsive button-primary-subtle flex flex-row items-center mr-2",attrs:{href:e.$route("admin.cms.redirects.index")}},[t("icon-chevron-left",{staticClass:"w-5 md:mr-2"}),t("span",{staticClass:"hidden md:inline"},[e._v(" Back ")])],1):e._e(),t("button",{staticClass:"button button-default-responsive button-primary flex flex-row items-center",attrs:{type:"submit"}},[t("icon-save",{staticClass:"w-5 md:mr-2"}),t("span",{staticClass:"hidden md:inline"},[e._v(" Save Changes ")])],1)],1):e._e(),t("div",{staticClass:"bg-white py-6 shadow-subtle rounded-lg"},[t("div",{staticClass:"block px-6 w-full"},[t("input-group",{attrs:{"error-message":e.getPageErrorMessage("url_from"),"input-autocomplete":"url_from","input-id":"url_from","input-name":"url_from","input-required":!0,"input-type":"text","label-text":"URL From"},on:{errorHidden:function(r){return e.clearPageErrorMessage("url_from")}},model:{value:e.formData.url_from,callback:function(r){e.$set(e.formData,"url_from",r)},expression:"formData.url_from"}}),t("p",{staticClass:"mt-4 text-sm"},[e._v("Note: URL From should begin with '/'")]),t("input-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("url_to"),"input-autocomplete":"url_to","input-id":"url_to","input-name":"url_to","input-required":!0,"input-type":"text","label-text":"URL To"},on:{errorHidden:function(r){return e.clearPageErrorMessage("url_to")}},model:{value:e.formData.url_to,callback:function(r){e.$set(e.formData,"url_to",r)},expression:"formData.url_to"}})],1)]),t("div",{staticClass:"bg-white mt-6 py-6 shadow-subtle rounded-lg"},[t("div",{staticClass:"block px-6 w-full"},[t("checkbox-group",{attrs:{"error-message":e.getPageErrorMessage("is_enabled"),"input-id":"is_enabled","input-name":"is_enabled","label-text":"Enabled?"},on:{errorHidden:function(r){return e.clearPageErrorMessage("is_enabled")}},model:{value:e.formData.is_enabled,callback:function(r){e.$set(e.formData,"is_enabled",r)},expression:"formData.is_enabled"}}),t("checkbox-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("is_permanent"),"input-id":"is_permanent","input-name":"is_permanent","label-text":"Permanent?"},on:{errorHidden:function(r){return e.clearPageErrorMessage("is_permanent")}},model:{value:e.formData.is_permanent,callback:function(r){e.$set(e.formData,"is_permanent",r)},expression:"formData.is_permanent"}}),t("date-time-picker-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("published_at"),"input-id":"published_at","input-name":"published_at","label-text":"Publish Date"},on:{errorHidden:function(r){return e.clearPageErrorMessage("published_at")}},model:{value:e.formData.published_at,callback:function(r){e.$set(e.formData,"published_at",r)},expression:"formData.published_at"}}),t("date-time-picker-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("expired_at"),"input-id":"expired_at","input-name":"expired_at","label-text":"Expiry Date"},on:{errorHidden:function(r){return e.clearPageErrorMessage("expired_at")}},model:{value:e.formData.expired_at,callback:function(r){e.$set(e.formData,"expired_at",r)},expression:"formData.expired_at"}})],1)])])},m=[],d=o(l,u,m,!1,null,null,null,null);const v=d.exports;export{v as default};
