(function(t){function e(e){for(var s,n,l=e[0],o=e[1],c=e[2],d=0,v=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&v.push(r[n][0]),r[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},i=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"3f58":function(t,e,a){"use strict";a("8cc8")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-app-bar",{staticClass:"pa-0",attrs:{dense:"",flat:"",app:"",color:"primary"}}),a("v-main",[a("v-container",{staticClass:"fill-height align-content-start"},[a("v-row",{staticClass:"justify-space-between pa-3 mt-3",attrs:{align:"center"}},[a("v-col",{staticClass:"px-0",attrs:{col:"12",xs:"2",sm:"3",md:"3",lg:"3",xl:"2"}},[a("v-text-field",{staticClass:"text-area rounded-0",attrs:{dense:"",solo:"",flat:"",label:"nome ou e-mail","hide-details":"","append-icon":"mdi-magnify"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-col",{staticClass:"justify-center ml-15",attrs:{cols:"5",sm:"3",md:"2",xl:"2"}},[a("v-row",{staticClass:"align-center",staticStyle:{"flex-wrap":"nowrap"}},[a("v-select",{attrs:{color:"primary",label:"Filtro","hide-details":"",standard:"",dense:"",items:t.status},model:{value:t.currentStatus,callback:function(e){t.currentStatus=e},expression:"currentStatus"}}),a("NewUser",{on:{dataNewUser:t.registerUser}})],1)],1)],1),a("UsersList",{attrs:{usersList:t.usersBySearch,search:t.search},on:{remove:t.removeUser}})],1)],1)],1)},i=[],n=(a("4de4"),a("466d"),a("ac1f"),a("b0c0"),a("841c"),a("a434"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"ml-3",attrs:{tile:"",color:"primary",dark:""}},"v-btn",r,!1),s),[t._v(" Novo ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"indigo darken-4"},[a("span",{staticClass:"headline white--text"},[t._v("Cadastrar Aluno")])]),a("v-card-text",{staticClass:"pt-4 px-6 pb-0"},[a("v-form",{ref:"form",attrs:{"no-gutters":"",col:"12"},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-col",{attrs:{col:"12"}},[a("v-col",{staticClass:"pb-0 px-0",attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Nome",filled:"",dense:"",rules:t.validations.nameRules,required:""},model:{value:t.dataField.name,callback:function(e){t.$set(t.dataField,"name",e)},expression:"dataField.name"}})],1),a("v-col",{staticClass:"pb-0 px-0",attrs:{cols:"12"}},[a("v-text-field",{attrs:{hint:"usuario@email.com",label:"E-mail",filled:"",dense:"",rules:t.validations.emailRules,required:""},model:{value:t.dataField.email,callback:function(e){t.$set(t.dataField,"email",e)},expression:"dataField.email"}})],1),a("v-col",{staticClass:"pb-0 px-0",attrs:{cols:"6"}},[a("v-text-field",{attrs:{label:"Idade",filled:"",dense:"",counter:3,rules:t.validations.ageRules,required:""},model:{value:t.dataField.age,callback:function(e){t.$set(t.dataField,"age",e)},expression:"dataField.age"}})],1),a("v-col",{staticClass:"pb-0 px-0",attrs:{cols:"6"}},[a("v-text-field",{attrs:{hint:"(xx)xxxxx-xxxx",label:"Telefone",type:"tel",filled:"",dense:"",rules:t.validations.phoneRules,required:""},model:{value:t.dataField.phone,callback:function(e){t.$set(t.dataField,"phone",e)},expression:"dataField.phone"}})],1)],1)],1)],1),a("v-card-actions",[a("v-btn",{attrs:{tile:"",color:"secondary",text:""},on:{click:function(e){return e.preventDefault(),t.resetForm(e)}}},[t._v(" Cancelar ")]),a("v-spacer"),a("v-btn",{staticClass:"white--text px-5",attrs:{tile:"",color:"primary",disabled:!t.valid},on:{click:t.callFuncRegister}},[t._v(" Salvar ")])],1)],1)],1)}),l=[],o={name:"newUser",props:{},data:function(){return{dialog:!1,valid:!1,validations:{nameRules:[function(t){return!!t||"Necessário Nome e Sobrenome"}],emailRules:[function(t){return/.+@.+\..+/.test(t)||"E-mail inválido"}],ageRules:[function(t){return!!t||"Idade inválida"}],phoneRules:[function(t){return!!t&&t.length>13||"Insira um número de telefone válido"}]},dataField:{name:"",email:"",phone:"",age:"",lastAvaliation:"12/10/2019",isActive:!0}}},methods:{resetForm:function(){return this.$refs.form.reset(),this.dialog=!1},callFuncRegister:function(){return this.$emit("dataNewUser",this.dataField),this.resetField,this.dialog=!1}}},c=o,u=a("2877"),d=a("6544"),v=a.n(d),m=a("8336"),f=a("b0af"),p=a("99d9"),h=a("62ad"),b=a("169a"),g=a("4bd4"),x=a("2fa4"),y=a("8654"),S=Object(u["a"])(c,n,l,!1,null,null,null),_=S.exports;v()(S,{VBtn:m["a"],VCard:f["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VCol:h["a"],VDialog:b["a"],VForm:g["a"],VSpacer:x["a"],VTextField:y["a"]});var C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.usersList.length>0?a("v-row",{staticClass:"flex-column"},t._l(t.usersList,(function(e,s){return a("v-col",{key:s},[a("v-card",{staticClass:"col-auto elevation-0",attrs:{disabled:!e.isActive}},[a("v-list",{staticClass:"pa-0",attrs:{"three-line":""}},[a("v-list-item",[a("v-badge",{attrs:{dot:"",left:"",overlap:"",color:e.isActive?"green":"red"}},[a("v-list-item-avatar",[a("v-img",{attrs:{size:"48",src:"https://cdn.vuetifyjs.com/images/lists/1.jpg"}})],1)],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(e.name)+" ")]),a("v-list-item-subtitle",[t._v(" "+t._s(e.email)+" ")]),a("v-list-item-subtitle",[t._v(" "+t._s(e.age)+" "+t._s(e.phone)+" ")]),a("v-list-item-subtitle",[t._v(" Última avaliação: "+t._s(e.lastAvaliation)+" ")])],1),a("v-list-item-action",{staticClass:"align-self-center"},[a("v-btn",{attrs:{small:"",plain:"",color:"error"},on:{click:function(e){return t.remove(s)}}},[t._v(" remover ")]),a("v-snackbar",{attrs:{text:"",color:"primary"},scopedSlots:t._u([{key:"action",fn:function(e){var s=e.attrs;return[a("v-btn",t._b({attrs:{text:"",color:"primary"},on:{click:function(e){t.snackbar=!1}}},"v-btn",s,!1),[t._v(" FECHAR ")])]}}],null,!0),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.text)+" ")])],1)],1)],1)],1)],1)})),1):!t.usersList.length&&t.search?a("v-row",{staticClass:"justify-center"},[a("p",[t._v("Não há usuários com os critérios de busca utilizado")])]):a("v-row",{staticClass:"justify-center"},[a("p",[t._v("Não há usuários cadastrados")])])},V=[],A={name:"users-list",data:function(){return{snackbar:!1,text:"Usuário removido"}},components:{},props:{usersList:Array,search:String},methods:{remove:function(t){this.$emit("remove",t),this.snackbar=!0}}},w=A,k=(a("3f58"),a("4ca6")),F=a("adda"),j=a("8860"),O=a("da13"),I=a("1800"),L=a("8270"),R=a("5d23"),N=a("0fd9"),U=a("2db4"),$=Object(u["a"])(w,C,V,!1,null,null,null),T=$.exports;v()($,{VBadge:k["a"],VBtn:m["a"],VCard:f["a"],VCol:h["a"],VImg:F["a"],VList:j["a"],VListItem:O["a"],VListItemAction:I["a"],VListItemAvatar:L["a"],VListItemContent:R["a"],VListItemSubtitle:R["b"],VListItemTitle:R["c"],VRow:N["a"],VSnackbar:U["a"]});var B={name:"App",components:{UsersList:T,NewUser:_},data:function(){return{search:"",status:["Todos","Ativo","Inativo"],currentStatus:"",users:[{name:"Ana Santos Sá",email:"anasantossa@gmail.com",phone:"(21)97957895",age:31,lastAvaliation:"12/10/2019",avatar:null,isActive:!0},{name:"Jel Chibuzo",email:"sorela@gmail.com",phone:"(21)97957895",age:31,lastAvaliation:"12/10/2019",avatar:null,isActive:!1},{name:"Sah Santos Sá",email:"sahsantossa@gmail.com",phone:"(21)97957895",age:31,lastAvaliation:"12/10/2019",avatar:null,isActive:!0},{name:"Sah Santos Sá",email:"sahsantossa@gmail.com",phone:"(21)97957895",age:31,lastAvaliation:"12/10/2019",avatar:null,isActive:!0},{name:"Sah Santos Sá",email:"sahsantossa@gmail.com",phone:"(21)97957895",age:31,lastAvaliation:"12/10/2019",avatar:null,isActive:!0}]}},computed:{usersBySearch:function(){var t=this;return this.usersByStatus.filter((function(e){return e.name.match(t.search)||e.email.match(t.search)}))},usersByStatus:function(){var t=this;return this.users.filter((function(e){return"Ativo"==t.currentStatus?e.isActive:"Inativo"!=t.currentStatus||!e.isActive}))}},mounted:function(){var t=JSON.stringify(this.users);localStorage.setItem("users",t)},methods:{sendProfile:function(){localStorage.users&&this.$emit("profile",this.users)},registerUser:function(t){this.users.unshift(t);var e=JSON.stringify(this.users);localStorage.setItem("users",e),localStorage.getItem("users")},removeUser:function(t){this.users.splice(t,1)}}},E=B,P=(a("034f"),a("7496")),J=a("40dc"),M=a("a523"),q=a("f6c4"),z=a("b974"),D=Object(u["a"])(E,r,i,!1,null,null,null),H=D.exports;v()(D,{VApp:P["a"],VAppBar:J["a"],VCol:h["a"],VContainer:M["a"],VMain:q["a"],VRow:N["a"],VSelect:z["a"],VTextField:y["a"]});var G=a("f309");s["a"].use(G["a"]);var K=new G["a"]({theme:{themes:{light:{primary:"#444AE4",secondary:"#280e95",cardLogin:"#444AE4",error:"#b71c1c"}}}});s["a"].config.productionTip=!1,new s["a"]({vuetify:K,render:function(t){return t(H)}}).$mount("#app")},"85ec":function(t,e,a){},"8cc8":function(t,e,a){}});
//# sourceMappingURL=app.a5917909.js.map