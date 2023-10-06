"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[435],{435:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var r=n(791),a=n(434),o=n(634),c="ContactForm_contactForm__y0Rca",u="ContactForm_form__dhl+T",i="ContactForm_formItem__dbiTg",s="ContactForm_formInput__GszVU",l="ContactForm_btn__wll+u",f=n(184),m=function(){var e=(0,a.I0)();return(0,f.jsx)("div",{className:c,children:(0,f.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=t.target,r={name:n.elements.name.value,number:n.elements.number.value};e((0,o.uK)(r)),n.reset()},className:u,children:[(0,f.jsxs)("label",{className:i,children:["Name",(0,f.jsx)("input",{className:s,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,f.jsxs)("label",{className:i,children:["Number",(0,f.jsx)("input",{className:s,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,f.jsx)("button",{type:"submit",className:l,children:"Add contact"})]})})},p="NOT_FOUND";var d=function(e,t){return e===t};function h(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,a=void 0===r?d:r,o=n.maxSize,c=void 0===o?1:o,u=n.resultEqualityCheck,i=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}}(a),s=1===c?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:p},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(i):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return p}return{get:r,put:function(t,a){r(t)===p&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(c,i);function l(){var t=s.get(arguments);if(t===p){if(t=e.apply(null,arguments),u){var n=s.getEntries(),r=n.find((function(e){return u(e.value,t)}));r&&(t=r.value)}s.put(arguments,t)}return t}return l.clearCache=function(){return s.clear()},l}function _(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function v(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var o,c=0,u={memoizeOptions:void 0},i=r.pop();if("object"===typeof i&&(u=i,i=r.pop()),"function"!==typeof i)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof i+"]");var s=u,l=s.memoizeOptions,f=void 0===l?n:l,m=Array.isArray(f)?f:[f],p=_(r),d=e.apply(void 0,[function(){return c++,i.apply(null,arguments)}].concat(m)),h=e((function(){for(var e=[],t=p.length,n=0;n<t;n++)e.push(p[n].apply(null,arguments));return o=d.apply(null,e)}));return Object.assign(h,{resultFunc:i,memoizedResultFunc:d,dependencies:p,lastResult:function(){return o},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),h};return a}var y=v(h),b=y([function(e){return e.contacts.items},function(e){return e.filter.filter}],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t)}))})),g="ContactItem_name__XjpNK",x="ContactItem_item__gxreB",C="ContactItem_button__IRFBz",j=function(e){var t=e.contact,n=e.onDeleteContact;return(0,f.jsxs)("li",{className:x,children:[(0,f.jsxs)("span",{className:g,children:[t.name,": ",t.number]}),(0,f.jsx)("button",{type:"button",onClick:function(){return n(t.id)},className:C,children:"Delete"})]})},N="ContactList_list__csErn",A=function(){var e=(0,a.v9)(b),t=(0,a.I0)();(0,r.useEffect)((function(){t((0,o.yF)())}),[t]);var n=function(e){t((0,o.GK)(e))};return e.length?(0,f.jsx)("ul",{className:N,children:e.map((function(e){return(0,f.jsx)(j,{contact:e,onDeleteContact:n},e.id)}))}):null},F=n(993),k="Filter_form__wVnxJ",w="Filter_formItem__MTiJ2",z="Filter_formInput__XNLZn",I=function(){var e=(0,a.I0)();return(0,f.jsx)("form",{className:k,children:(0,f.jsxs)("label",{className:w,children:["Find contacts by name",(0,f.jsx)("input",{className:z,type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:function(t){e((0,F.T)(t.target.value))}})]})})},E="ContactsPage_contactsPage__gV07C",P="ContactsPage_contactsPhonebook__twv49",Z="ContactsPage_contactsTitle__CgPgf",T=function(){return(0,f.jsxs)("div",{className:E,children:[(0,f.jsx)("h1",{className:P,children:"Phonebook"}),(0,f.jsx)(m,{}),(0,f.jsx)("h2",{className:Z,children:"Contacts"}),(0,f.jsx)(I,{}),(0,f.jsx)(A,{})]})}}}]);
//# sourceMappingURL=435.18a44372.chunk.js.map