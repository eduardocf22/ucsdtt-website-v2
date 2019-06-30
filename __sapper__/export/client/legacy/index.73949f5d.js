import{_ as n,a as t,b as e,c as o,i,s as r,d as s,S as a,G as c,e as l,t as u,g as h,h as f,j as d,k as v,l as p,m as C,o as m,y as w,H as g,n as L,I as b,J as $,f as y,z as S,K as x,v as E,L as T,M as z,N as I,D as N,w as O,E as M,p as B,r as k,u as G,q as R,x as D}from"./chunk.037d3820.js";function A(n){var t=n-1;return t*t*t+1}function U(n,t){var e=t.delay,o=void 0===e?0:e,i=t.duration,r=void 0===i?400:i,s=+getComputedStyle(n).opacity;return{delay:o,duration:r,css:function(n){return"opacity: ".concat(n*s)}}}function F(n,t){var e=t.delay,o=void 0===e?0:e,i=t.duration,r=void 0===i?400:i,s=t.easing,a=void 0===s?A:s,c=t.x,l=void 0===c?0:c,u=t.y,h=void 0===u?0:u,f=t.opacity,d=void 0===f?0:f,v=getComputedStyle(n),p=+v.opacity,C="none"===v.transform?"":v.transform,m=p*(1-d);return{delay:o,duration:r,easing:a,css:function(n,t){return"\n\t\t\ttransform: ".concat(C," translate(").concat((1-n)*l,"px, ").concat((1-n)*h,"px);\n\t\t\topacity: ").concat(p-m*t)}}}function P(n){var t,e,o,i=n.dispSmall?n.titleSmall:n.titleBig;return{c:function(){t=l("h1"),e=u(i),this.h()},l:function(n){t=h(n,"H1",{class:!0},!1);var o=f(t);e=d(o,i),o.forEach(v),this.h()},h:function(){p(t,"class","text-display lg-view svelte-1p2qno9")},m:function(n,o){C(n,t,o),m(t,e)},p:function(n,t){(n.dispSmall||n.titleSmall||n.titleBig)&&i!==(i=t.dispSmall?t.titleSmall:t.titleBig)&&w(e,i)},i:function(n){o||c(function(){(o=g(t,U,{})).start()})},o:L,d:function(n){n&&v(t)}}}function V(n){var t,e,o;return{c:function(){t=b("svg"),e=b("path"),this.h()},l:function(n){t=h(n,"svg",{xmlns:!0,viewBox:!0,width:!0,height:!0,class:!0,style:!0},!0);var o=f(t);e=h(o,"path",{d:!0,opacity:!0},!0),f(e).forEach(v),o.forEach(v),this.h()},h:function(){p(e,"d",n.svg),p(e,"opacity","0.6"),p(t,"xmlns","http://www.w3.org/2000/svg"),p(t,"viewBox","0 0 64 64"),p(t,"width","64px"),p(t,"height","64px"),p(t,"class","parallax svelte-1p2qno9"),$(t,"transform","translate(0, "+.4*n.sy+"px)")},m:function(n,o){C(n,t,o),m(t,e)},p:function(n,o){n.svg&&p(e,"d",o.svg),n.sy&&$(t,"transform","translate(0, "+.4*o.sy+"px)")},i:function(n){o||c(function(){(o=g(e,F,{y:-5,delay:250})).start()})},o:L,d:function(n){n&&v(t)}}}function W(n){var t,e,o,i,r=!1,s=function(){r=!1};c(n.onwindowscroll),c(n.onwindowresize);var a=n.visible&&P(n),l=n.visible&&V(n);return{c:function(){a&&a.c(),e=y(),l&&l.c(),o=S(),this.h()},l:function(n){a&&a.l(n),e=d(n,"\n"),l&&l.l(n),o=S(),this.h()},h:function(){i=[x(window,"scroll",function(){r=!0,clearTimeout(t),t=setTimeout(s,100),n.onwindowscroll()}),x(window,"resize",n.onwindowresize)]},m:function(n,t){a&&a.m(n,t),C(n,e,t),l&&l.m(n,t),C(n,o,t)},p:function(n,i){n.sy&&!r&&(r=!0,clearTimeout(t),scrollTo(window.pageXOffset,i.sy),t=setTimeout(s,100)),i.visible?a?(a.p(n,i),E(a,1)):((a=P(i)).c(),E(a,1),a.m(e.parentNode,e)):a&&(a.d(1),a=null),i.visible?l?(l.p(n,i),E(l,1)):((l=V(i)).c(),E(l,1),l.m(o.parentNode,o)):l&&(l.d(1),l=null)},i:function(n){E(a),E(l)},o:L,d:function(n){a&&a.d(n),n&&v(e),l&&l.d(n),n&&v(o),T(i)}}}function H(n,t,e){var o,i=!1,r=t.svg,s=t.titleBig,a=t.titleSmall,c=0,l=0;return z(function(){e("visible",i=!0)}),n.$set=function(n){"svg"in n&&e("svg",r=n.svg),"titleBig"in n&&e("titleBig",s=n.titleBig),"titleSmall"in n&&e("titleSmall",a=n.titleSmall)},n.$$.update=function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{iw:1}).iw&&e("dispSmall",o=l<=1e3)},{visible:i,svg:r,titleBig:s,titleSmall:a,sy:c,iw:l,dispSmall:o,onwindowscroll:function(){c=window.pageYOffset,e("sy",c)},onwindowresize:function(){l=window.innerWidth,e("iw",l)}}}var j=function(c){function l(n){var a;return t(this,l),a=e(this,o(l).call(this)),i(s(a),n,H,W,r,["svg","titleBig","titleSmall"]),a}return n(l,a),l}();function q(n){var t,e,o;return{c:function(){t=l("span"),e=u("We are"),this.h()},l:function(n){t=h(n,"SPAN",{class:!0},!1);var o=f(t);e=d(o,"We are"),o.forEach(v),this.h()},h:function(){p(t,"class","formal")},m:function(n,o){C(n,t,o),m(t,e)},i:function(n){o||c(function(){(o=g(t,U,{})).start()})},o:L,d:function(n){n&&v(t)}}}function K(n){var t,e,o,i,r,s=n.brotherLabels[n.wordIndex];return{c:function(){t=l("span"),e=u(s),this.h()},l:function(n){t=h(n,"SPAN",{class:!0},!1);var o=f(t);e=d(o,s),o.forEach(v),this.h()},h:function(){p(t,"class","formal")},m:function(n,o){C(n,t,o),m(t,e),r=!0},p:function(n,t){r&&!n.brotherLabels&&!n.wordIndex||s===(s=t.brotherLabels[t.wordIndex])||w(e,s)},i:function(e){r||(c(function(){i&&i.end(1),o||(o=g(t,n.typewriter,{})),o.start()}),r=!0)},o:function(n){o&&o.invalidate(),i=I(t,U,{duration:280}),r=!1},d:function(n){n&&(v(t),i&&i.end())}}}function J(n){var t,e,o,i,r=n.weAreVisible&&q(),s=n.visible&&K(n);return{c:function(){t=l("section"),e=l("h1"),r&&r.c(),o=y(),s&&s.c(),this.h()},l:function(n){t=h(n,"SECTION",{},!1);var i=f(t);e=h(i,"H1",{class:!0},!1);var a=f(e);r&&r.l(a),o=d(a,"\n        "),s&&s.l(a),a.forEach(v),i.forEach(v),this.h()},h:function(){p(e,"class","svelte-tjniru")},m:function(n,a){C(n,t,a),m(t,e),r&&r.m(e,null),m(e,o),s&&s.m(e,null),i=!0},p:function(n,t){t.weAreVisible?r?E(r,1):((r=q()).c(),E(r,1),r.m(e,o)):r&&(r.d(1),r=null),t.visible?s?(s.p(n,t),E(s,1)):((s=K(t)).c(),E(s,1),s.m(e,null)):s&&(N(),O(s,1,function(){s=null}),M())},i:function(n){i||(E(r),E(s),i=!0)},o:function(n){O(s),i=!1},d:function(n){n&&v(t),r&&r.d(),s&&s.d()}}}function Q(n,t,e){var o=t.brotherLabels,i=!1,r=!1,s=0;return z(function(){e("weAreVisible",r=!0),setInterval(function(){e("visible",i=!0),setTimeout(function(){e("visible",i=!1),e("wordIndex",s=function(n){var t=Math.floor(Math.random()*o.length);if(t===n)return(n+1)%o.length;return t}(s))},1e3)},1500)}),n.$set=function(n){"brotherLabels"in n&&e("brotherLabels",o=n.brotherLabels)},{brotherLabels:o,visible:i,weAreVisible:r,wordIndex:s,typewriter:function(n,t){var e=t.speed,i=void 0===e?50:e;if(s<0||s>=o.length)throw new Error("wordIndex out of bounds.");var r=o[s];return{duration:r.length*i,tick:function(t){var e=~~(r.length*t);n.textContent=r.slice(0,e)}}}}}var X=function(c){function l(n){var a;return t(this,l),a=e(this,o(l).call(this)),i(s(a),n,Q,J,r,["brotherLabels"]),a}return n(l,a),l}(),Y=function(){return{}},_=function(){return{}},Z=function(){return{}},nn=function(){return{}},tn=function(){return{}},en=function(){return{class:"header svelte-xiwb3z"}};function on(n){var t,e,o,i,r,s,a,c,u,w=n.$$slots.header,g=B(w,n,en),L=n.$$slots.left,b=B(L,n,nn),$=n.$$slots.right,S=B($,n,_);return{c:function(){t=l("section"),g&&g.c(),e=y(),o=l("hr"),i=y(),r=l("div"),s=l("section"),b&&b.c(),a=y(),c=l("section"),S&&S.c(),this.h()},l:function(n){t=h(n,"SECTION",{class:!0},!1);var l=f(t);g&&g.l(l),e=d(l,"\n    "),o=h(l,"HR",{},!1),f(o).forEach(v),i=d(l,"\n    "),r=h(l,"DIV",{class:!0},!1);var u=f(r);s=h(u,"SECTION",{class:!0},!1);var p=f(s);b&&b.l(p),p.forEach(v),a=d(u,"\n        "),c=h(u,"SECTION",{class:!0},!1);var C=f(c);S&&S.l(C),C.forEach(v),u.forEach(v),l.forEach(v),this.h()},h:function(){p(s,"class","left-div subcards svelte-xiwb3z"),p(c,"class","right-div subcards svelte-xiwb3z"),p(r,"class","wrapper svelte-xiwb3z"),p(t,"class","card svelte-xiwb3z")},m:function(n,l){C(n,t,l),g&&g.m(t,null),m(t,e),m(t,o),m(t,i),m(t,r),m(r,s),b&&b.m(s,null),m(r,a),m(r,c),S&&S.m(c,null),u=!0},p:function(n,t){g&&g.p&&n.$$scope&&g.p(k(w,t,n,tn),G(w,t,en)),b&&b.p&&n.$$scope&&b.p(k(L,t,n,Z),G(L,t,nn)),S&&S.p&&n.$$scope&&S.p(k($,t,n,Y),G($,t,_))},i:function(n){u||(E(g,n),E(b,n),E(S,n),u=!0)},o:function(n){O(g,n),O(b,n),O(S,n),u=!1},d:function(n){n&&v(t),g&&g.d(n),b&&b.d(n),S&&S.d(n)}}}function rn(n,t,e){var o=t.section,i=t.$$slots,r=void 0===i?{}:i,s=t.$$scope;return n.$set=function(n){"section"in n&&e("section",o=n.section),"$$scope"in n&&e("$$scope",s=n.$$scope)},{section:o,$$slots:r,$$scope:s}}var sn=function(c){function l(n){var a;return t(this,l),a=e(this,o(l).call(this)),i(s(a),n,rn,on,r,["section"]),a}return n(l,a),l}(),an="M 33.740234 2.0605469 C 32.610234 2.0605469 31.490234 2.339375 30.490234 2.859375 C 30.490234 2.859375 29.670234 3.2400781 29.490234 3.3300781 L 20.109375 8.0195312 C 19.629375 8.2595313 19.190547 8.5692188 18.810547 8.9492188 L 8.8300781 18.939453 C 8.5100781 19.249453 8.2395312 19.610234 8.0195312 19.990234 L 3.0292969 28.810547 C 2.3792969 29.900547 2.0292969 31.140156 2.0292969 32.410156 L 2.0976562 45.912109 C 2.0496562 46.744109 2.047375 47.552078 2.109375 48.330078 C 2.139375 48.740078 2.1902344 49.150781 2.2402344 49.550781 C 2.4102344 50.620781 2.6903125 51.609297 3.0703125 52.529297 C 3.1903125 52.809297 3.3209375 53.079609 3.4609375 53.349609 C 3.9309375 54.249609 4.5202344 55.069062 5.2402344 55.789062 C 5.5042344 56.053063 5.7813125 56.30025 6.0703125 56.53125 C 6.2393125 56.66625 6.4206563 56.784203 6.5976562 56.908203 C 6.7236563 56.996203 6.8426562 57.091828 6.9726562 57.173828 C 7.2296562 57.336828 7.5013906 57.480094 7.7753906 57.621094 C 7.8343906 57.651094 7.8892187 57.68975 7.9492188 57.71875 C 8.2692188 57.87575 8.6013594 58.014578 8.9433594 58.142578 C 8.9613594 58.149578 8.9790469 58.159016 8.9980469 58.166016 C 10.448047 58.701016 12.096687 58.976188 13.929688 58.992188 C 13.938688 58.993187 13.944125 58.998047 13.953125 58.998047 C 13.969125 59.000047 13.985 59 14 59 C 14.007 59 14.012531 58.996094 14.019531 58.996094 C 14.047531 58.996094 14.071609 59 14.099609 59 C 14.469609 59 14.840938 58.990938 15.210938 58.960938 C 15.670938 58.940937 16.129609 58.899609 16.599609 58.849609 L 16.619141 58.849609 L 55.5 56.910156 C 56.54 56.860156 57.360391 56.030234 57.400391 54.990234 L 58.890625 16.289062 C 58.900625 16.219062 58.970703 14.320391 58.970703 14.150391 C 58.970703 13.392391 58.907453 12.669797 58.814453 11.966797 C 58.771453 11.600797 58.720391 11.240625 58.650391 10.890625 C 58.640391 10.890625 58.640391 10.879141 58.650391 10.869141 C 58.440391 9.8591406 58.130703 8.9205469 57.720703 8.0605469 C 57.220703 7.0205469 56.569766 6.0795312 55.759766 5.2695312 C 53.629766 3.1395313 50.650391 2.0605469 46.900391 2.0605469 L 33.740234 2.0605469 z M 35.119141 4.0605469 L 43.669922 4.0605469 L 43.369141 4.390625 L 40.060547 7.9335938 C 39.689547 7.3175938 39.195312 6.7676094 38.570312 6.3496094 L 37.910156 5.9101562 L 35.890625 4.5703125 L 35.880859 4.5703125 L 35.119141 4.0605469 z M 46.900391 4.0605469 C 50.100391 4.0605469 52.599609 4.9396875 54.349609 6.6796875 C 54.579609 6.9096875 54.790234 7.1501562 54.990234 7.4101562 C 56.321234 9.1281562 56.978984 11.475016 56.958984 14.291016 L 37.683594 20.658203 L 40.539062 12.089844 C 40.768062 11.403844 40.824906 10.696812 40.753906 10.007812 L 46.160156 11.919922 C 46.270156 11.959922 46.380234 11.980469 46.490234 11.980469 C 46.900234 11.980469 47.289453 11.720547 47.439453 11.310547 C 47.619453 10.790547 47.350078 10.219063 46.830078 10.039062 L 42.320312 8.4394531 L 46.390625 4.0703125 C 46.560625 4.0603125 46.730391 4.0605469 46.900391 4.0605469 z M 31.720703 4.8007812 C 32.310703 4.8007812 32.890625 4.9707812 33.390625 5.3007812 L 33.75 5.5390625 L 35.679688 6.8300781 L 37.460938 8.0097656 C 38.580937 8.7597656 39.070625 10.180938 38.640625 11.460938 L 35.490234 20.900391 C 35.320234 21.400391 35.030625 21.849219 34.640625 22.199219 L 22.390625 33.080078 C 22.010625 33.420078 21.550781 33.659531 21.050781 33.769531 L 11.050781 35.990234 C 9.9207813 36.240234 8.7805469 35.829453 8.0605469 34.939453 L 7.4804688 34.210938 L 6.1503906 32.550781 L 6.140625 32.539062 L 5.6699219 31.949219 C 5.2299219 31.409219 5.0097656 30.750078 5.0097656 30.080078 C 5.0097656 29.750078 5.0596875 29.429375 5.1796875 29.109375 C 5.2296875 28.929375 5.3101562 28.759844 5.4101562 28.589844 L 9.7597656 20.980469 C 9.8897656 20.750469 10.050234 20.539609 10.240234 20.349609 L 20.220703 10.369141 C 20.450703 10.139141 20.72 9.9507813 21 9.8007812 L 30.380859 5.109375 C 30.530859 5.039375 30.679844 4.9796875 30.839844 4.9296875 C 31.129844 4.8396875 31.430703 4.8007813 31.720703 4.8007812 z M 50.310547 11.351562 C 49.921625 11.374859 49.564531 11.624875 49.425781 12.015625 C 49.241781 12.536625 49.514156 13.107969 50.035156 13.292969 L 52.482422 14.160156 C 52.592422 14.199156 52.705406 14.21875 52.816406 14.21875 C 53.228406 14.21875 53.613766 13.961781 53.759766 13.550781 C 53.943766 13.030781 53.670391 12.458438 53.150391 12.273438 L 50.703125 11.40625 C 50.573125 11.36025 50.440188 11.343797 50.310547 11.351562 z M 56.873047 16.423828 C 56.877047 16.450828 56.873906 16.483766 56.878906 16.509766 L 56.869141 16.769531 C 55.885141 24.060531 50.844734 33.314406 42.802734 41.566406 C 42.797734 41.542406 42.799969 41.518141 42.792969 41.494141 L 40.242188 32.804688 C 40.086188 32.274687 39.530953 31.967953 39.001953 32.126953 C 38.471953 32.281953 38.168219 32.837187 38.324219 33.367188 L 40.3125 40.146484 L 24.191406 34.160156 L 35.970703 23.689453 C 36.152703 23.527453 36.317656 23.350062 36.472656 23.164062 L 56.873047 16.423828 z M 56.560547 24.810547 L 55.400391 54.910156 L 25.279297 56.419922 C 31.399297 53.829922 37.839609 49.390859 43.599609 43.630859 C 49.619609 37.610859 54.050547 30.980547 56.560547 24.810547 z M 37.345703 25.099609 C 37.216797 25.084812 37.083172 25.095516 36.951172 25.134766 C 36.421172 25.289766 36.118437 25.845 36.273438 26.375 L 37.017578 28.914062 C 37.145578 29.350062 37.543563 29.632813 37.976562 29.632812 C 38.069563 29.632812 38.163813 29.619797 38.257812 29.591797 C 38.787813 29.436797 39.090547 28.881563 38.935547 28.351562 L 38.191406 25.8125 C 38.074406 25.415 37.732422 25.144 37.345703 25.099609 z M 4.0292969 33.089844 C 4.0492969 33.129844 4.079375 33.159219 4.109375 33.199219 L 5.1796875 34.529297 L 6.4902344 36.179688 C 6.5002344 36.199688 6.5192969 36.220469 6.5292969 36.230469 C 6.9452969 36.736469 7.4442344 37.138453 7.9902344 37.439453 C 7.9872344 37.529453 12.708984 56.933594 12.708984 56.933594 C 11.832984 56.856594 11.021578 56.699656 10.267578 56.472656 C 10.183578 56.447656 10.097625 56.423484 10.015625 56.396484 C 9.839625 56.338484 9.6709531 56.273031 9.5019531 56.207031 C 9.3839531 56.160031 9.2634375 56.1135 9.1484375 56.0625 C 9.0034375 55.9985 8.8636094 55.931328 8.7246094 55.861328 C 8.5906094 55.793328 8.4590781 55.722438 8.3300781 55.648438 C 8.2130781 55.581437 8.097375 55.513406 7.984375 55.441406 C 7.833375 55.344406 7.6879219 55.239766 7.5449219 55.134766 C 7.4599219 55.072766 7.3720625 55.012266 7.2890625 54.947266 C 7.0660625 54.769266 6.8514375 54.581859 6.6484375 54.380859 C 4.5694375 52.289859 3.73 49.210781 4 45.550781 L 7.5292969 40.25 C 7.8392969 39.79 7.7197656 39.169141 7.2597656 38.869141 C 6.7997656 38.559141 6.1791406 38.680625 5.8691406 39.140625 L 4.9492188 40.509766 L 4.9492188 40.529297 L 4.0292969 41.900391 L 4.0292969 33.089844 z M 22.130859 35.527344 L 41.484375 42.714844 C 41.532375 42.732844 41.583813 42.729234 41.632812 42.740234 C 33.416812 50.775234 23.95 56.028141 16.25 56.869141 L 16.089844 56.880859 C 16.004844 56.889859 15.927703 56.894344 15.845703 56.902344 C 15.783703 56.907344 15.719203 56.913969 15.658203 56.917969 C 15.579203 56.925969 15.502828 56.9305 15.423828 56.9375 L 19.464844 45.195312 C 19.644844 44.673313 19.36675 44.105781 18.84375 43.925781 C 18.32175 43.744781 17.751266 44.023875 17.572266 44.546875 L 14.162109 54.457031 L 10.142578 38.046875 C 10.221578 38.050875 10.300859 38.060547 10.380859 38.060547 C 10.750859 38.060547 11.120469 38.019453 11.480469 37.939453 L 21.490234 35.720703 C 21.708234 35.670703 21.921859 35.604344 22.130859 35.527344 z M 45.904297 43.990234 C 45.648547 43.990234 45.392766 44.087703 45.197266 44.283203 L 43.783203 45.697266 C 43.392203 46.087266 43.392203 46.720328 43.783203 47.111328 C 43.978203 47.306328 44.234234 47.404297 44.490234 47.404297 C 44.746234 47.404297 45.002266 47.306328 45.197266 47.111328 L 46.611328 45.697266 C 47.002328 45.306266 47.002328 44.674203 46.611328 44.283203 C 46.415828 44.087703 46.160047 43.990234 45.904297 43.990234 z M 49.439453 47.523438 C 49.183703 47.523437 48.927922 47.620906 48.732422 47.816406 L 47.318359 49.232422 C 46.927359 49.623422 46.927359 50.255484 47.318359 50.646484 C 47.513359 50.842484 47.769391 50.939453 48.025391 50.939453 C 48.281391 50.939453 48.537422 50.841484 48.732422 50.646484 L 50.146484 49.230469 C 50.537484 48.839469 50.537484 48.207406 50.146484 47.816406 C 49.950984 47.620906 49.695203 47.523438 49.439453 47.523438 z M 52.976562 51.060547 C 52.720812 51.060547 52.465031 51.158016 52.269531 51.353516 L 50.853516 52.767578 C 50.462516 53.158578 50.462516 53.790641 50.853516 54.181641 C 51.048516 54.376641 51.304547 54.474609 51.560547 54.474609 C 51.816547 54.474609 52.072578 54.376641 52.267578 54.181641 L 53.683594 52.767578 C 54.074594 52.376578 54.074594 51.744516 53.683594 51.353516 C 53.488094 51.158016 53.232313 51.060547 52.976562 51.060547 z";function cn(n){var t,e,o;return{c:function(){t=l("h3"),e=l("strong"),o=u("UC San Diego's premier engineering fraternity"),this.h()},l:function(n){t=h(n,"H3",{slot:!0},!1);var i=f(t);e=h(i,"STRONG",{},!1);var r=f(e);o=d(r,"UC San Diego's premier engineering fraternity"),r.forEach(v),i.forEach(v),this.h()},h:function(){p(t,"slot","header")},m:function(n,i){C(n,t,i),m(t,e),m(e,o)},d:function(n){n&&v(t)}}}function ln(n){var t,e,o,i,r,s,a,c,w,g,L,b,$,S,x,E,T,z,I,N,O,M,B,k,G,R,D;return{c:function(){t=l("section"),e=l("p"),o=u("Formed in 1904 with chapters in over 80 campuses, Theta Tau is both the\n      "),i=l("strong"),r=u("nation's largest and oldest co-ed engineering fraternity"),s=u(".\n      Our brothers develop each other to not only focus on one aspect of\n      ourselves, but on many. We strive to be well-rounded people who excel in\n      "),a=l("strong"),c=u("brotherhood"),w=u(",\n      "),g=l("strong"),L=u("philanthropy"),b=u(", and\n      "),$=l("strong"),S=u("professionalism"),x=u("."),E=y(),T=l("p"),z=u("Brothers assist each other with homework, open doors professionally,\n      provide a support system, improve the world for those in need, and hang\n      out with each other among many more things. In addition, a deep,\n      multidisciplinary network of alumni is always there to help at any time.\n      Most importantly, Theta Tau has brought people together to form\n      "),I=l("strong"),N=u("connections that will last a lifetime"),O=u("."),M=y(),B=l("p"),k=u("No matter where your interests lie or what kind of engineer you may be,\n      "),G=l("strong"),R=u("come check us out"),D=u("!"),this.h()},l:function(n){t=h(n,"SECTION",{slot:!0},!1);var l=f(t);e=h(l,"P",{class:!0},!1);var u=f(e);o=d(u,"Formed in 1904 with chapters in over 80 campuses, Theta Tau is both the\n      "),i=h(u,"STRONG",{},!1);var p=f(i);r=d(p,"nation's largest and oldest co-ed engineering fraternity"),p.forEach(v),s=d(u,".\n      Our brothers develop each other to not only focus on one aspect of\n      ourselves, but on many. We strive to be well-rounded people who excel in\n      "),a=h(u,"STRONG",{},!1);var C=f(a);c=d(C,"brotherhood"),C.forEach(v),w=d(u,",\n      "),g=h(u,"STRONG",{},!1);var m=f(g);L=d(m,"philanthropy"),m.forEach(v),b=d(u,", and\n      "),$=h(u,"STRONG",{},!1);var y=f($);S=d(y,"professionalism"),y.forEach(v),x=d(u,"."),u.forEach(v),E=d(l,"\n    "),T=h(l,"P",{class:!0},!1);var A=f(T);z=d(A,"Brothers assist each other with homework, open doors professionally,\n      provide a support system, improve the world for those in need, and hang\n      out with each other among many more things. In addition, a deep,\n      multidisciplinary network of alumni is always there to help at any time.\n      Most importantly, Theta Tau has brought people together to form\n      "),I=h(A,"STRONG",{},!1);var U=f(I);N=d(U,"connections that will last a lifetime"),U.forEach(v),O=d(A,"."),A.forEach(v),M=d(l,"\n    "),B=h(l,"P",{class:!0},!1);var F=f(B);k=d(F,"No matter where your interests lie or what kind of engineer you may be,\n      "),G=h(F,"STRONG",{},!1);var P=f(G);R=d(P,"come check us out"),P.forEach(v),D=d(F,"!"),F.forEach(v),l.forEach(v),this.h()},h:function(){p(e,"class","svelte-wr6xou"),p(T,"class","svelte-wr6xou"),p(B,"class","svelte-wr6xou"),p(t,"slot","left")},m:function(n,l){C(n,t,l),m(t,e),m(e,o),m(e,i),m(i,r),m(e,s),m(e,a),m(a,c),m(e,w),m(e,g),m(g,L),m(e,b),m(e,$),m($,S),m(e,x),m(t,E),m(t,T),m(T,z),m(T,I),m(I,N),m(T,O),m(t,M),m(t,B),m(B,k),m(B,G),m(G,R),m(B,D)},d:function(n){n&&v(t)}}}function un(n){var t,e,o,i;return{c:function(){t=l("iframe"),e=y(),o=l("figcaption"),i=u("Our rush video for Spring 2019!"),this.h()},l:function(n){t=h(n,"IFRAME",{id:!0,width:!0,height:!0,title:!0,"max-width":!0,src:!0,frameborder:!0,allow:!0,allowfullscreen:!0,class:!0},!1),f(t).forEach(v),e=d(n,"\n      "),o=h(n,"FIGCAPTION",{class:!0},!1);var r=f(o);i=d(r,"Our rush video for Spring 2019!"),r.forEach(v),this.h()},h:function(){p(t,"id","rush-video"),p(t,"width","960"),p(t,"height","540"),p(t,"title","SP19 rush video"),p(t,"max-width","calc(100vw - 4em)"),p(t,"src","https://www.youtube.com/embed/FLfQ3UrGNKk"),p(t,"frameborder","0"),p(t,"allow","accelerometer; autoplay; encrypted-media; gyroscope;\n        picture-in-picture"),t.allowFullscreen=!0,p(t,"class","svelte-wr6xou"),p(o,"class","svelte-wr6xou")},m:function(n,r){C(n,t,r),C(n,e,r),C(n,o,r),m(o,i)},d:function(n){n&&(v(t),v(e),v(o))}}}function hn(n){var t,e=n.iw>1e3&&un();return{c:function(){t=l("figure"),e&&e.c(),this.h()},l:function(n){t=h(n,"FIGURE",{slot:!0},!1);var o=f(t);e&&e.l(o),o.forEach(v),this.h()},h:function(){p(t,"slot","right")},m:function(n,o){C(n,t,o),e&&e.m(t,null)},p:function(n,o){o.iw>1e3?e||((e=un()).c(),e.m(t,null)):e&&(e.d(1),e=null)},d:function(n){n&&v(t),e&&e.d()}}}function fn(n){var t,e;return{c:function(){t=y(),e=y()},l:function(n){t=d(n,"\n  "),e=d(n,"\n  ")},m:function(n,o){C(n,t,o),C(n,e,o)},p:L,d:function(n){n&&(v(t),v(e))}}}function dn(n){var t,e,o,i,r,s;c(n.onwindowresize);var a=new j({props:{titleBig:"UCSD Theta Tau",titleSmall:"UCSD ΘΤ",tagline:"Epsilon Delta",svg:an,alt:"a hero"}}),u=new X({props:{brotherLabels:n.brotherLabels}}),m=new sn({props:{$$slots:{default:[fn],right:[hn],left:[ln],header:[cn]},$$scope:{ctx:n}}});return{c:function(){t=y(),e=l("div"),a.$$.fragment.c(),o=y(),u.$$.fragment.c(),i=y(),m.$$.fragment.c(),this.h()},l:function(n){t=d(n,"\n\n"),e=h(n,"DIV",{class:!0},!1);var r=f(e);a.$$.fragment.l(r),r.forEach(v),o=d(n,"\n"),u.$$.fragment.l(n),i=d(n,"\n\n"),m.$$.fragment.l(n),this.h()},h:function(){document.title="UCSD Theta Tau",p(e,"class","hero-div svelte-wr6xou"),s=x(window,"resize",n.onwindowresize)},m:function(n,s){C(n,t,s),C(n,e,s),R(a,e,null),C(n,o,s),R(u,n,s),C(n,i,s),R(m,n,s),r=!0},p:function(n,t){var e={};n.garnetUnfilled&&(e.svg=an),a.$set(e);var o={};n.brotherLabels&&(o.brotherLabels=t.brotherLabels),u.$set(o);var i={};(n.$$scope||n.iw)&&(i.$$scope={changed:n,ctx:t}),m.$set(i)},i:function(n){r||(E(a.$$.fragment,n),E(u.$$.fragment,n),E(m.$$.fragment,n),r=!0)},o:function(n){O(a.$$.fragment,n),O(u.$$.fragment,n),O(m.$$.fragment,n),r=!1},d:function(n){n&&(v(t),v(e)),D(a),n&&v(o),D(u,n),n&&v(i),D(m,n),s()}}}function vn(n,t,e){var o;return{brotherLabels:["brothers","entrepreneurs","leaders","pioneers","philanthropists","friends","family","diverse","adventurers","pro gamers","youtube stars","CEOs","project managers","artists","inclusive"],iw:o,onwindowresize:function(){o=window.innerWidth,e("iw",o)}}}export default(function(c){function l(n){var a;return t(this,l),a=e(this,o(l).call(this)),i(s(a),n,vn,dn,r,[]),a}return n(l,a),l}());
//# sourceMappingURL=index.73949f5d.js.map
