(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,a){e.exports=a(38)},31:function(e,t,a){},32:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},33:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(10),c=a.n(l),r=(a(31),a(20)),i=a(9),u=(a(32),a(33),a(56)),m=a(55),s=["Kaitlyn","Cathy","Joanne","coffee","boba tea","chocolate","pizza","dumpling","noodle"],h=["enjoys","tastes","plays","likes","wants","owns"];var d=function(){var e=s[Math.floor(Math.random()*s.length)],t=h[Math.floor(Math.random()*h.length)],a=s[Math.floor(Math.random()*s.length)],l=Object(n.useState)(""),c=Object(i.a)(l,2),d=c[0],b=c[1],f=Object(n.useState)(""),p=Object(i.a)(f,2),g=p[0],v=p[1],j=Object(n.useState)(!1),E=Object(i.a)(j,2),O=E[0],y=E[1],M=Object(n.useState)(e),k=Object(i.a)(M,2),w=k[0],C=k[1],S=Object(n.useState)(t),x=Object(i.a)(S,2),A=x[0],J=x[1],W=Object(n.useState)(a),z=Object(i.a)(W,2),B=z[0],I=z[1],H=Object(n.useState)(["".concat(w," ").concat(A," ").concat(B)]),K=Object(i.a)(H,2),L=K[0],N=K[1],P=Object(n.useState)(s),R=Object(i.a)(P,2),V=R[0],$=R[1],q=Object(n.useState)(h),D=Object(i.a)(q,2),F=D[0],G=D[1];function Q(e,t){var a=[];if(null===e||0===e.length||null===t||void 0===t)return a;for(var n=0;n<e.length;n++){var o=e[n];o!==t&&a.push(o)}return a}return o.a.createElement("div",{className:"App",style:{margin:"50px",backgroundColor:"#cfe8fc"}},o.a.createElement("div",null,"Hello there, ","welcome to my website","!"),o.a.createElement("ol",null,o.a.createElement("p",null,"List of Items: ",V.join(", ")," "),o.a.createElement("p",null,"Verbs to choose from: ",F.join(", ")," ")),o.a.createElement("div",{style:{margin:"10px"}},o.a.createElement("input",{type:"text",value:d,onChange:function(e){b(e.target.value)}}),o.a.createElement("button",{onClick:function(){$([].concat(Object(r.a)(V),[d])),b("")}},"Add an item")),o.a.createElement("div",null,o.a.createElement("input",{type:"text",value:g,onChange:function(e){v(e.target.value)}}),o.a.createElement("button",{onClick:function(){G([].concat(Object(r.a)(F),[g])),v("")}},"Add an verb")),o.a.createElement("div",null,o.a.createElement(u.a,{color:"Primary",type:"checkbox",checked:O,onChange:function(){y(!O)}}),o.a.createElement("span",null,o.a.createElement("span",{style:{color:"blue",fontWeight:"bold"}},"Remove verb and object")," that are used")),o.a.createElement("p",null,"Click to see the solitaire"),o.a.createElement("ol",null,L.map((function(e,t){return o.a.createElement("p",{key:t}," ",e," ")}))),o.a.createElement("div",null,0===V.length||0===F.length?o.a.createElement("p",null,"Out of items or verbs..."):null),o.a.createElement("div",null,o.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){var e=Q(V,B),t=Q(F,A);if((0===t.length||0===e.length)&&O)return $(e),void G(t);if(0!==F.length&&0!==V.length){var a=F[Math.floor(Math.random()*F.length)],n=V[Math.floor(Math.random()*V.length)];O&&(a=t[Math.floor(Math.random()*t.length)],n=e[Math.floor(Math.random()*e.length)]);var o="".concat(B," ").concat(a," ").concat(n);N([].concat(Object(r.a)(L),[o])),O&&($(e),G(t)),C(B),J(a),I(n)}}},"Click me")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.8564cd38.chunk.js.map