import{_ as o}from"./vendor.21c2b6f5.js";import{b as p,F as d}from"./InputGroup.513e0dd4.js";import{n as c}from"./LogoLight.f7426689.js";const f={name:"ArrayGroup",mixins:[p],components:{FormFieldError:d},props:{inputAllowDuplicates:{default:!1,type:Boolean},inputButtonClass:{default:"border border-l-0 border-theme-primary-subtle button button-primary-subtle rounded-l-none",type:String},inputClass:{default:"border border-theme-base-subtle font-medium px-3 py-2 rounded-l w-full focus:border-theme-primary focus:outline-none focus:ring-0",type:String},inputTrimValues:{default:!0,type:Boolean},inputType:{default:"text",type:String},inputValuesClass:{default:"bg-theme-base-subtle cursor-pointer flex flex-row items-center m-1 px-2 py-1 rounded text-sm text-theme-base-subtle-contrast focus:outline-none focus:ring hover:bg-theme-base-subtle-contrast hover:text-theme-base-subtle",type:String},inputValuesCloseClass:{default:"h-4 ml-2 w-4",type:String},inputValuesWrapperClass:{default:"flex flex-row flex-wrap items-center -mx-1 my-1",type:String},inputWrapperClass:{default:"flex flex-row items-center",type:String}},data(){return{editableInputValue:[],newValue:""}},mounted(){try{Array.isArray(this.inputValue)?this.editableInputValue=o.clone(this.inputValue):this.inputValue&&this.inputValue.length?this.editableInputValue=this.inputValue.split(","):this.editableInputValue=[]}catch{this.editableInputValue=[]}},methods:{addValue(){if(this.errorHideOnInput&&(this.hideError=!0),this.inputTrimValues&&(this.newValue=this.newValue.trim()),!this.newValue.length){this.$errorToast("Please enter a valid value.");return}if(!this.inputAllowDuplicates&&this.editableInputValue.indexOf(this.newValue)>=0){this.$errorToast("Duplicate values not allowed.");return}this.editableInputValue.push(this.newValue),this.newValue="",this.autofocus(),this.onEditableInputChange()},removeValue(a){this.errorHideOnInput&&(this.hideError=!0);try{this.editableInputValue.splice(a,1),this.onEditableInputChange()}catch(e){this.$errorToast("Failed to remove value."),console.log(e)}},onEditableInputChange(){this.$emit("input",this.editableInputValue)}}};var m=function(){var e=this,n=e._self._c;return n("div",{staticClass:"flex flex-col"},[n("label",{class:e.formattedLabelClass,attrs:{for:e.inputId}},[e._t("default",function(){return[n("span",{staticClass:"flex flex-row items-baseline"},[n("span",[e._v(e._s(e.labelText))]),e.inputRequired?n("sup",{staticClass:"text-theme-danger-contrast"},[e._v(" * ")]):e._e()])]})],2),n("div",[n("div",{class:e.inputWrapperClass},[e.inputType==="checkbox"?n("input",{directives:[{name:"model",rawName:"v-model",value:e.newValue,expression:"newValue"}],ref:e.inputId,class:e.formattedInputClass,attrs:{id:e.inputId,disabled:e.inputDisabled,name:e.inputName,required:e.inputRequired,type:"checkbox"},domProps:{checked:Array.isArray(e.newValue)?e._i(e.newValue,null)>-1:e.newValue},on:{blur:e.onInputBlur,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.blurInput.apply(null,arguments)},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),t.stopPropagation(),e.addValue.apply(null,arguments))},change:function(t){var u=e.newValue,l=t.target,i=!!l.checked;if(Array.isArray(u)){var s=null,r=e._i(u,s);l.checked?r<0&&(e.newValue=u.concat([s])):r>-1&&(e.newValue=u.slice(0,r).concat(u.slice(r+1)))}else e.newValue=i}}}):e.inputType==="radio"?n("input",{directives:[{name:"model",rawName:"v-model",value:e.newValue,expression:"newValue"}],ref:e.inputId,class:e.formattedInputClass,attrs:{id:e.inputId,disabled:e.inputDisabled,name:e.inputName,required:e.inputRequired,type:"radio"},domProps:{checked:e._q(e.newValue,null)},on:{blur:e.onInputBlur,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.blurInput.apply(null,arguments)},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),t.stopPropagation(),e.addValue.apply(null,arguments))},change:function(t){e.newValue=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.newValue,expression:"newValue"}],ref:e.inputId,class:e.formattedInputClass,attrs:{id:e.inputId,disabled:e.inputDisabled,name:e.inputName,required:e.inputRequired,type:e.inputType},domProps:{value:e.newValue},on:{blur:e.onInputBlur,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.blurInput.apply(null,arguments)},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),t.stopPropagation(),e.addValue.apply(null,arguments))},input:function(t){t.target.composing||(e.newValue=t.target.value)}}}),n("button",{class:e.inputButtonClass,attrs:{type:"button"},on:{click:e.addValue}},[e._v(" Add ")])]),e.editableInputValue.length?n("div",{class:e.inputValuesWrapperClass},e._l(e.editableInputValue,function(t,u){return n("button",{key:`value-${u}-${t}`,class:e.inputValuesClass,attrs:{type:"button"},on:{click:function(l){return e.removeValue(u)}}},[e._v(" "+e._s(t)+" "),n("icon-x",{class:e.inputValuesCloseClass})],1)}),0):e._e()]),n("form-field-error",{attrs:{"error-class":e.errorClass,"error-message":e.errorMessage,"is-error":e.isError}})],1)},y=[],h=c(f,m,y,!1,null,null,null,null);const k=h.exports;export{k as A};
