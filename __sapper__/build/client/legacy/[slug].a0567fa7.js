import{_ as t,a as s,b as n,c as a,i as r,s as e,d as o,S as i,f as c,e as u,t as p,j as h,g as f,h as l,k as m,l as d,m as v,o as k,y as x,n as b}from"./chunk.037d3820.js";import{_ as j,a as g}from"./chunk.b05ee1a3.js";function y(t){var s,n,a,r,e,o,i=t.post.title,j=t.post.html;return document.title=s=t.post.title,{c:function(){n=c(),a=u("h1"),r=p(i),e=c(),o=u("div"),this.h()},l:function(t){n=h(t,"\r\n\r\n"),a=f(t,"H1",{},!1);var s=l(a);r=h(s,i),s.forEach(m),e=h(t,"\r\n\r\n"),o=f(t,"DIV",{class:!0},!1),l(o).forEach(m),this.h()},h:function(){d(o,"class","content svelte-dkhkxh")},m:function(t,s){v(t,n,s),v(t,a,s),k(a,r),v(t,e,s),v(t,o,s),o.innerHTML=j},p:function(t,n){t.post&&s!==(s=n.post.title)&&(document.title=s),t.post&&i!==(i=n.post.title)&&x(r,i),t.post&&j!==(j=n.post.html)&&(o.innerHTML=j)},i:b,o:b,d:function(t){t&&(m(n),m(a),m(e),m(o))}}}function H(t){return w.apply(this,arguments)}function w(){return(w=j(g.mark(function t(s){var n,a,r;return g.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.params,s.query,t.next=3,this.fetch("blog/".concat(n.slug,".json"));case 3:return a=t.sent,t.next=6,a.json();case 6:if(r=t.sent,200!==a.status){t.next=11;break}return t.abrupt("return",{post:r});case 11:this.error(a.status,r.message);case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function E(t,s,n){var a=s.post;return t.$set=function(t){"post"in t&&n("post",a=t.post)},{post:a}}export default(function(c){function u(t){var i;return s(this,u),i=n(this,a(u).call(this)),r(o(i),t,E,y,e,["post"]),i}return t(u,i),u}());export{H as preload};
//# sourceMappingURL=[slug].a0567fa7.js.map
