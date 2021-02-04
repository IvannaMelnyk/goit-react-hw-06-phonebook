(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={filterLabel:"Filter_filterLabel__nNiPL",filterInput:"Filter_filterInput__27Twc"}},30:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(11),o=n.n(r),l=(n(30),n(20)),i=n(9),s=n.n(i),b=n(6),u=n.n(b),j=n(3),d=n(4),m=Object(d.b)("contacts/add",(function(t,e){return{payload:{id:s.a.generate(),name:t,number:e}}})),f=Object(d.b)("contacts/changeFilter"),O={addContact:m,deleteContact:Object(d.b)("contacts/delete"),changeFilter:f},h=function(t){return t.contacts.items},p=function(t){return t.contacts.filter},x=function(t){var e=h(t),n=p(t);return function(t){var e=n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))}(e)},_=n(1);function C(){var t=Object(a.useState)(""),e=Object(l.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),i=o[0],b=o[1],d=s.a.generate(),m=s.a.generate(),f=Object(j.b)(),p=Object(j.c)(h),x=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":b(a);break;default:return}},C=function(){c(""),b("")};return Object(_.jsxs)("form",{className:u.a.form,onSubmit:function(t){if(t.preventDefault(),""!==n)if(""!==i){if(p.find((function(t){return t.name===n})))return alert("".concat(n," is already in contacts.")),void C();f(O.addContact(n,i)),C()}else alert("Please enter phone number");else alert("Please enter all data")},children:[Object(_.jsxs)("label",{className:u.a.label,htmlFor:d,children:["Name",Object(_.jsx)("input",{className:u.a.input,type:"text",name:"name",placeholder:"\u0421ontact name",value:n,onChange:x,id:d})]}),Object(_.jsxs)("label",{className:u.a.label,htmlFor:m,children:["Number",Object(_.jsx)("input",{className:u.a.input,type:"text",name:"number",placeholder:"\u0421ontact number",value:i,onChange:x,id:m})]}),Object(_.jsx)("button",{className:u.a.button,type:"submit",children:"Add contact"})]})}var v=n(7),g=n.n(v);function N(){var t=Object(j.c)(x),e=Object(j.b)();return Object(_.jsx)("ul",{className:g.a.list,children:t.map((function(t){var n=t.id,a=t.name,c=t.number;return Object(_.jsxs)("li",{className:g.a.listItem,children:[Object(_.jsxs)("span",{className:g.a.listItemText,children:[a,":"]}),Object(_.jsx)("span",{className:g.a.listItemText,children:c}),Object(_.jsx)("button",{className:g.a.button,type:"button",onClick:function(){return function(t){return e(O.deleteContact(t))}(n)},children:"Delete"})]},n)}))})}var F=n(19),y=n.n(F),w=function(){var t=Object(j.c)(p),e=Object(j.b)();return Object(_.jsxs)("label",{className:y.a.filterLabel,children:["Find contacts by name",Object(_.jsx)("input",{className:y.a.filterInput,type:"text",value:t,placeholder:"Enter name for Search",onChange:function(t){return e(O.changeFilter(t.target.value))}})]})};function I(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h1",{children:"Phonebook"}),Object(_.jsx)(C,{}),Object(_.jsx)("h2",{children:"Contacts"}),Object(_.jsx)(w,{}),Object(_.jsx)(N,{})]})}var k,L=n(23),T=n(13),P=n(5),S=n(24),E=n.n(S),J=n(25),q=n.n(J),z=n(14),A=n(2),B=Object(d.c)([],(k={},Object(z.a)(k,O.addContact,(function(t,e){var n=e.payload;return[].concat(Object(T.a)(t),[n])})),Object(z.a)(k,O.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),k)),D=Object(d.c)("",Object(z.a)({},O.changeFilter,(function(t,e){return e.payload}))),R=Object(A.c)({items:B,filter:D}),M=[].concat(Object(T.a)(Object(d.d)({serializableCheck:{ignoredActions:[P.a,P.f,P.b,P.c,P.d,P.e]}})),[q.a]),Q={key:"contacts",storage:E.a,blacklist:["filter"]},V=Object(d.a)({reducer:{contacts:Object(P.g)(Q,R)},middleware:M,devTools:!1}),Z=Object(P.h)(V);o.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(j.a,{store:V,children:Object(_.jsx)(L.a,{loading:null,persistor:Z,children:Object(_.jsx)(I,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={form:"ContactForm_form__5V45I",label:"ContactForm_label__xeEBR",input:"ContactForm_input__oLwFw",button:"ContactForm_button__n_PQf"}},7:function(t,e,n){t.exports={list:"ContactList_list__2qERz",listItem:"ContactList_listItem__2Zod5",listItemText:"ContactList_listItemText__3Jqet",button:"ContactList_button__3015w"}}},[[47,1,2]]]);
//# sourceMappingURL=main.d81d5668.chunk.js.map