(this["webpackJsonpusing-pre-built-react-components-completed"]=this["webpackJsonpusing-pre-built-react-components-completed"]||[]).push([[0],{34:function(e,t,n){e.exports=n(45)},45:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(6),r=n.n(c),o=n(30),u=n(16),i=n(25),m=n.n(i);var E=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(m.a,null),"Keeper"))};var f=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",e))},s=n(27),p=n.n(s);var d=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(p.a,null)))},v=n(19),b=n(28),h=n(29),j=n.n(h),O=n(60),g=n(61);var k=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)({title:"",content:""}),i=Object(u.a)(o,2),m=i[0],E=i[1];function f(e){var t=e.target,n=t.name,a=t.value;E((function(e){return Object(b.a)({},e,Object(v.a)({},n,a))}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},c&&l.a.createElement("input",{name:"title",onChange:f,value:m.title,placeholder:"Title",autoComplete:"off"}),l.a.createElement("textarea",{name:"content",onClick:function(){r(!0)},onChange:f,value:m.content,placeholder:"Take a note...",rows:c?3:1}),l.a.createElement(g.a,{in:c},l.a.createElement(O.a,{onClick:function(t){e.onAdd(m),E({title:"",content:""}),t.preventDefault()}},l.a.createElement(j.a,null)))))},C=function(e){return l.a.createElement("div",{className:"scroll"},e.children)};var w=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1];function r(e){c((function(t){return t.filter((function(t,n){return n!==e}))}))}return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(k,{onAdd:function(e){c((function(t){return[].concat(Object(o.a)(t),[e])}))}}),l.a.createElement(C,null,n.map((function(e,t){return l.a.createElement(d,{key:t,id:t,title:e.title,content:e.content,onDelete:r})}))),l.a.createElement(f,null))};r.a.render(l.a.createElement(w,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.7cba5e61.chunk.js.map