import{_ as a,O as o}from"./vendor.21c2b6f5.js";import{I as r}from"./InputGroup.513e0dd4.js";import{S as n}from"./app.c52b09a2.js";import{n as m}from"./LogoLight.f7426689.js";import"./ConfirmationModal.242a99d0.js";const l={name:"AdminCrmFormSubmissionIndex",components:{InputGroup:r,SelectGroup:n},layout:"admin-layout",props:{searchOptions:{required:!0,type:Object|Array},formSubmissions:{required:!0,type:Object},forms:{required:!0,type:Object|Array}},data(){return{editableSearchOptions:{per_page:15,form_id:""},isInitialised:!1}},computed:{showPagination(){try{return this.formSubmissions.pagination.last_page>1}catch{return!1}},showActions(){return this.userCan("cms_advanced.edit")||this.userCan("cms_advanced.delete")},formSubmissionsData(){return!this.formSubmissions||!this.formSubmissions.data||this.formSubmissions.data.length<1?!1:this.formSubmissions.data}},mounted(){this.setSearchOptions(this.searchOptions)},methods:{onSearchOptionsUpdate:a.debounce(function(){!this.isInitialised&&(this.isInitialised=!0,this.formSubmissionsData)||o.get(this.$route("admin.crm.form-submissions.index"),this.editableSearchOptions,{only:["formSubmissions"],preserveState:!0})},500),setSearchOptions(i={}){let t={per_page:15,form_id:""};try{a.forEach(i,(e,s)=>{t[s]=e})}catch(e){console.log(e)}this.editableSearchOptions=a.cloneDeep(t)}},watch:{editableSearchOptions:{deep:!0,handler:"onSearchOptionsUpdate"}}};var c=function(){var t=this,e=t._self._c;return e("section",[t._m(0),e("div",{staticClass:"bg-white py-6 shadow-subtle rounded-lg"},[e("h1",{staticClass:"font-semibold px-6 text-gray-850"},[t._v(" Search "),e("button",{staticClass:"text-sm text-theme-base-subtle-contrast focus:outline-none focus:text-theme-primary hover:text-theme-primary",on:{click:t.setSearchOptions}},[t._v(" (Clear) ")])]),e("div",{staticClass:"flex flex-col items-center mt-4 px-6 space-y-4 md:flex-row md:space-y-0 md:space-x-8"},[e("div",{staticClass:"w-full md:w-1/2"},[e("select-group",{attrs:{"label-hidden":!0,"label-text":"Form","input-any-option-enabled":!0,"input-any-option-label":"Form","input-class":"form-control form-control-short","input-id":"form_id","input-name":"form_id","input-option-label-key":"name","input-option-value-key":"id","input-options":t.forms},model:{value:t.editableSearchOptions.form_id,callback:function(s){t.$set(t.editableSearchOptions,"form_id",s)},expression:"editableSearchOptions.form_id"}})],1)]),t.formSubmissionsData?[e("div",{staticClass:"block mt-8 overflow-x-auto w-full"},[e("table",{staticClass:"table table-hover table-striped w-full"},[e("thead",[e("tr",[e("th",[t._v("Contact")]),e("th",[t._v("Form")]),e("th",[t._v("Submitted At")]),t.showActions?e("th"):t._e()])]),e("tbody",t._l(t.formSubmissionsData,function(s){return e("tr",{key:`template-${s.id}`},[e("td",[s.contact_id?s.contact.name_with_title?e("div",[e("span",[t._v(t._s(s.contact.name_with_title))]),e("br"),e("span",{staticClass:"text-sm text-theme-base-subtle-contrast"},[t._v(" "+t._s(s.contact.email)+" ")])]):e("div",[t._v(" "+t._s(s.contact.email)+" ")]):e("div",[t._v(" - ")])]),e("td",[t._v(" "+t._s(s.form.name?s.form.name:s.form_id)+" ")]),e("td",[t._v(" "+t._s(t._f("humanFriendlyDateTime")(s.submitted_at))+" ")]),t.showActions?e("td",[e("div",{staticClass:"flex flex-row items-center justify-end -mx-1"},[t.userCan("crm_form_submissions.view")?e("inertia-link",{staticClass:"flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide focus:outline-none focus:ring hover:bg-theme-info hover:text-theme-info-contrast",attrs:{href:t.$route("admin.crm.form-submissions.show",s.id),title:"View Submission"}},[e("icon-eye",{staticClass:"w-4"})],1):t._e()],1)]):t._e()])}),0)])]),t.showPagination?e("div",{staticClass:"flex flex-row justify-center mt-12 px-6"},[e("pagination",{attrs:{pagination:t.formSubmissions.pagination}})],1):t._e()]:e("p",{staticClass:"bg-theme-base-subtle mt-8 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast"},[t._v(" No form submissions ")])],2)])},d=[function(){var i=this,t=i._self._c;return t("div",{staticClass:"flex flex-row items-center mb-6"},[t("h1",{staticClass:"font-medium mr-auto text-lg"},[i._v(" Form Submissions ")])])}],u=m(l,c,d,!1,null,null,null,null);const x=u.exports;export{x as default};
