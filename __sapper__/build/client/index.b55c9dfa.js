import{S as r,i as a,s as t,B as n,e,t as s,c as o,b as i,d as l,f as c,g as h,h as C,j as f,u as b,C as d,D as L,E,F as B,n as u,a as R,v as m,G as p,p as v,z as w,q as g,A as y,H as $,I as x,J as S,m as z,r as M}from"./chunk.b11b1129.js";function I(r){const a=r-1;return a*a*a+1}function T(r,{delay:a=0,duration:t=400}){const n=+getComputedStyle(r).opacity;return{delay:a,duration:t,css:r=>`opacity: ${r*n}`}}function A(r,{delay:a=0,duration:t=400,easing:n=I,x:e=0,y:s=0,opacity:o=0}){const i=getComputedStyle(r),l=+i.opacity,c="none"===i.transform?"":i.transform,h=l*(1-o);return{delay:a,duration:t,easing:n,css:(r,a)=>`\n\t\t\ttransform: ${c} translate(${(1-r)*e}px, ${(1-r)*s}px);\n\t\t\topacity: ${l-h*a}`}}function D(r){var a,t,L,E,B=r.dispSmall?r.titleSmall:r.titleBig;return{c(){a=e("h1"),t=s(B),this.h()},l(r){a=o(r,"H1",{class:!0},!1);var n=i(a);t=l(n,B),n.forEach(c),this.h()},h(){h(a,"class","text-display lg-view svelte-13iz6yw")},m(r,n){C(r,a,n),f(a,t),E=!0},p(r,a){(!E||r.dispSmall||r.titleSmall||r.titleBig)&&B!==(B=a.dispSmall?a.titleSmall:a.titleBig)&&b(t,B)},i(r){E||(n(()=>{L||(L=d(a,T,{},!0)),L.run(1)}),E=!0)},o(r){L||(L=d(a,T,{},!1)),L.run(0),E=!1},d(r){r&&(c(a),L&&L.end())}}}function N(r){var a,t,e;return{c(){a=L("svg"),t=L("path"),this.h()},l(r){a=o(r,"svg",{xmlns:!0,viewBox:!0,width:!0,height:!0,class:!0,style:!0},!0);var n=i(a);t=o(n,"path",{d:!0,opacity:!0},!0),i(t).forEach(c),n.forEach(c),this.h()},h(){h(t,"d",r.svg),h(t,"opacity","0.6"),h(a,"xmlns","http://www.w3.org/2000/svg"),h(a,"viewBox","0 0 64 64"),h(a,"width","64px"),h(a,"height","64px"),h(a,"class","parallax svelte-13iz6yw"),E(a,"transform","translate(0, "+.4*r.sy+"px)")},m(r,n){C(r,a,n),f(a,t)},p(r,n){r.svg&&h(t,"d",n.svg),r.sy&&E(a,"transform","translate(0, "+.4*n.sy+"px)")},i(r){e||n(()=>{(e=B(t,A,{y:-5,delay:250})).start()})},o:u,d(r){r&&c(a)}}}function V(r){var a,t,e,s,o,i=!1,h=()=>{i=!1};n(r.onwindowscroll),n(r.onwindowresize);var f=r.visible&&D(r),b=r.visible&&N(r);return{c(){f&&f.c(),t=R(),b&&b.c(),e=m(),this.h()},l(r){f&&f.l(r),t=l(r,"\n"),b&&b.l(r),e=m(),this.h()},h(){o=[p(window,"scroll",()=>{i=!0,clearTimeout(a),a=setTimeout(h,100),r.onwindowscroll()}),p(window,"resize",r.onwindowresize)]},m(r,a){f&&f.m(r,a),C(r,t,a),b&&b.m(r,a),C(r,e,a),s=!0},p(r,n){r.sy&&!i&&(i=!0,clearTimeout(a),scrollTo(window.pageXOffset,n.sy),a=setTimeout(h,100)),n.visible?f?(f.p(r,n),v(f,1)):((f=D(n)).c(),v(f,1),f.m(t.parentNode,t)):f&&(w(),g(f,1,()=>{f=null}),y()),n.visible?b?(b.p(r,n),v(b,1)):((b=N(n)).c(),v(b,1),b.m(e.parentNode,e)):b&&(b.d(1),b=null)},i(r){s||(v(f),v(b),s=!0)},o(r){g(f),s=!1},d(r){f&&f.d(r),r&&c(t),b&&b.d(r),r&&c(e),$(o)}}}function U(r,a,t){let n,e=!1,{svg:s,titleBig:o,titleSmall:i}=a,l=0,c=0;return x(()=>{t("visible",e=!0)}),r.$set=(r=>{"svg"in r&&t("svg",s=r.svg),"titleBig"in r&&t("titleBig",o=r.titleBig),"titleSmall"in r&&t("titleSmall",i=r.titleSmall)}),r.$$.update=((r={iw:1})=>{r.iw&&t("dispSmall",n=c<=1e3)}),{visible:e,svg:s,titleBig:o,titleSmall:i,sy:l,iw:c,dispSmall:n,onwindowscroll:function(){l=window.pageYOffset,t("sy",l)},onwindowresize:function(){c=window.innerWidth,t("iw",c)}}}class H extends r{constructor(r){super(),a(this,r,U,V,t,["svg","titleBig","titleSmall"])}}function O(r){var a,t,b;return{c(){a=e("span"),t=s("We are"),this.h()},l(r){a=o(r,"SPAN",{class:!0},!1);var n=i(a);t=l(n,"We are"),n.forEach(c),this.h()},h(){h(a,"class","formal")},m(r,n){C(r,a,n),f(a,t)},i(r){b||n(()=>{(b=B(a,T,{})).start()})},o:u,d(r){r&&c(a)}}}function P(r){var a,t,d,L,E,u=r.brotherLabels[r.wordIndex];return{c(){a=e("span"),t=s(u),this.h()},l(r){a=o(r,"SPAN",{class:!0},!1);var n=i(a);t=l(n,u),n.forEach(c),this.h()},h(){h(a,"class","formal")},m(r,n){C(r,a,n),f(a,t),E=!0},p(r,a){E&&!r.brotherLabels&&!r.wordIndex||u===(u=a.brotherLabels[a.wordIndex])||b(t,u)},i(t){E||(n(()=>{L&&L.end(1),d||(d=B(a,r.typewriter,{})),d.start()}),E=!0)},o(r){d&&d.invalidate(),L=S(a,T,{}),E=!1},d(r){r&&(c(a),L&&L.end())}}}function W(r){var a,t,n,s,b=r.weAreVisible&&O(),d=r.visible&&P(r);return{c(){a=e("section"),t=e("h1"),b&&b.c(),n=R(),d&&d.c(),this.h()},l(r){a=o(r,"SECTION",{},!1);var e=i(a);t=o(e,"H1",{class:!0},!1);var s=i(t);b&&b.l(s),n=l(s,"\n        "),d&&d.l(s),s.forEach(c),e.forEach(c),this.h()},h(){h(t,"class","svelte-1fobi24")},m(r,e){C(r,a,e),f(a,t),b&&b.m(t,null),f(t,n),d&&d.m(t,null),s=!0},p(r,a){a.weAreVisible?b?v(b,1):((b=O()).c(),v(b,1),b.m(t,n)):b&&(b.d(1),b=null),a.visible?d?(d.p(r,a),v(d,1)):((d=P(a)).c(),v(d,1),d.m(t,null)):d&&(w(),g(d,1,()=>{d=null}),y())},i(r){s||(v(b),v(d),s=!0)},o(r){g(d),s=!1},d(r){r&&c(a),b&&b.d(),d&&d.d()}}}function j(r,a,t){let{brotherLabels:n}=a,e=!1,s=!1,o=0;return x(()=>{t("weAreVisible",s=!0)}),setInterval(()=>{t("visible",e=!0),setTimeout(()=>{t("visible",e=!1),t("wordIndex",o=(o+1)%n.length)},2e3)},2800),r.$set=(r=>{"brotherLabels"in r&&t("brotherLabels",n=r.brotherLabels)}),{brotherLabels:n,visible:e,weAreVisible:s,wordIndex:o,typewriter:function(r,{speed:a=50}){if(o<0||o>=n.length)throw new Error("wordIndex out of bounds.");const t=n[o];return{duration:t.length*a,tick:a=>{const n=~~(t.length*a);r.textContent=t.slice(0,n)}}}}}class k extends r{constructor(r){super(),a(this,r,j,W,t,["brotherLabels"])}}const q="M 33.740234 2.0605469 C 32.610234 2.0605469 31.490234 2.339375 30.490234 2.859375 C 30.490234 2.859375 29.670234 3.2400781 29.490234 3.3300781 L 20.109375 8.0195312 C 19.629375 8.2595313 19.190547 8.5692188 18.810547 8.9492188 L 8.8300781 18.939453 C 8.5100781 19.249453 8.2395312 19.610234 8.0195312 19.990234 L 3.0292969 28.810547 C 2.3792969 29.900547 2.0292969 31.140156 2.0292969 32.410156 L 2.0976562 45.912109 C 2.0496562 46.744109 2.047375 47.552078 2.109375 48.330078 C 2.139375 48.740078 2.1902344 49.150781 2.2402344 49.550781 C 2.4102344 50.620781 2.6903125 51.609297 3.0703125 52.529297 C 3.1903125 52.809297 3.3209375 53.079609 3.4609375 53.349609 C 3.9309375 54.249609 4.5202344 55.069062 5.2402344 55.789062 C 5.5042344 56.053063 5.7813125 56.30025 6.0703125 56.53125 C 6.2393125 56.66625 6.4206563 56.784203 6.5976562 56.908203 C 6.7236563 56.996203 6.8426562 57.091828 6.9726562 57.173828 C 7.2296562 57.336828 7.5013906 57.480094 7.7753906 57.621094 C 7.8343906 57.651094 7.8892187 57.68975 7.9492188 57.71875 C 8.2692188 57.87575 8.6013594 58.014578 8.9433594 58.142578 C 8.9613594 58.149578 8.9790469 58.159016 8.9980469 58.166016 C 10.448047 58.701016 12.096687 58.976188 13.929688 58.992188 C 13.938688 58.993187 13.944125 58.998047 13.953125 58.998047 C 13.969125 59.000047 13.985 59 14 59 C 14.007 59 14.012531 58.996094 14.019531 58.996094 C 14.047531 58.996094 14.071609 59 14.099609 59 C 14.469609 59 14.840938 58.990938 15.210938 58.960938 C 15.670938 58.940937 16.129609 58.899609 16.599609 58.849609 L 16.619141 58.849609 L 55.5 56.910156 C 56.54 56.860156 57.360391 56.030234 57.400391 54.990234 L 58.890625 16.289062 C 58.900625 16.219062 58.970703 14.320391 58.970703 14.150391 C 58.970703 13.392391 58.907453 12.669797 58.814453 11.966797 C 58.771453 11.600797 58.720391 11.240625 58.650391 10.890625 C 58.640391 10.890625 58.640391 10.879141 58.650391 10.869141 C 58.440391 9.8591406 58.130703 8.9205469 57.720703 8.0605469 C 57.220703 7.0205469 56.569766 6.0795312 55.759766 5.2695312 C 53.629766 3.1395313 50.650391 2.0605469 46.900391 2.0605469 L 33.740234 2.0605469 z M 35.119141 4.0605469 L 43.669922 4.0605469 L 43.369141 4.390625 L 40.060547 7.9335938 C 39.689547 7.3175938 39.195312 6.7676094 38.570312 6.3496094 L 37.910156 5.9101562 L 35.890625 4.5703125 L 35.880859 4.5703125 L 35.119141 4.0605469 z M 46.900391 4.0605469 C 50.100391 4.0605469 52.599609 4.9396875 54.349609 6.6796875 C 54.579609 6.9096875 54.790234 7.1501562 54.990234 7.4101562 C 56.321234 9.1281562 56.978984 11.475016 56.958984 14.291016 L 37.683594 20.658203 L 40.539062 12.089844 C 40.768062 11.403844 40.824906 10.696812 40.753906 10.007812 L 46.160156 11.919922 C 46.270156 11.959922 46.380234 11.980469 46.490234 11.980469 C 46.900234 11.980469 47.289453 11.720547 47.439453 11.310547 C 47.619453 10.790547 47.350078 10.219063 46.830078 10.039062 L 42.320312 8.4394531 L 46.390625 4.0703125 C 46.560625 4.0603125 46.730391 4.0605469 46.900391 4.0605469 z M 31.720703 4.8007812 C 32.310703 4.8007812 32.890625 4.9707812 33.390625 5.3007812 L 33.75 5.5390625 L 35.679688 6.8300781 L 37.460938 8.0097656 C 38.580937 8.7597656 39.070625 10.180938 38.640625 11.460938 L 35.490234 20.900391 C 35.320234 21.400391 35.030625 21.849219 34.640625 22.199219 L 22.390625 33.080078 C 22.010625 33.420078 21.550781 33.659531 21.050781 33.769531 L 11.050781 35.990234 C 9.9207813 36.240234 8.7805469 35.829453 8.0605469 34.939453 L 7.4804688 34.210938 L 6.1503906 32.550781 L 6.140625 32.539062 L 5.6699219 31.949219 C 5.2299219 31.409219 5.0097656 30.750078 5.0097656 30.080078 C 5.0097656 29.750078 5.0596875 29.429375 5.1796875 29.109375 C 5.2296875 28.929375 5.3101562 28.759844 5.4101562 28.589844 L 9.7597656 20.980469 C 9.8897656 20.750469 10.050234 20.539609 10.240234 20.349609 L 20.220703 10.369141 C 20.450703 10.139141 20.72 9.9507813 21 9.8007812 L 30.380859 5.109375 C 30.530859 5.039375 30.679844 4.9796875 30.839844 4.9296875 C 31.129844 4.8396875 31.430703 4.8007813 31.720703 4.8007812 z M 50.310547 11.351562 C 49.921625 11.374859 49.564531 11.624875 49.425781 12.015625 C 49.241781 12.536625 49.514156 13.107969 50.035156 13.292969 L 52.482422 14.160156 C 52.592422 14.199156 52.705406 14.21875 52.816406 14.21875 C 53.228406 14.21875 53.613766 13.961781 53.759766 13.550781 C 53.943766 13.030781 53.670391 12.458438 53.150391 12.273438 L 50.703125 11.40625 C 50.573125 11.36025 50.440188 11.343797 50.310547 11.351562 z M 56.873047 16.423828 C 56.877047 16.450828 56.873906 16.483766 56.878906 16.509766 L 56.869141 16.769531 C 55.885141 24.060531 50.844734 33.314406 42.802734 41.566406 C 42.797734 41.542406 42.799969 41.518141 42.792969 41.494141 L 40.242188 32.804688 C 40.086188 32.274687 39.530953 31.967953 39.001953 32.126953 C 38.471953 32.281953 38.168219 32.837187 38.324219 33.367188 L 40.3125 40.146484 L 24.191406 34.160156 L 35.970703 23.689453 C 36.152703 23.527453 36.317656 23.350062 36.472656 23.164062 L 56.873047 16.423828 z M 56.560547 24.810547 L 55.400391 54.910156 L 25.279297 56.419922 C 31.399297 53.829922 37.839609 49.390859 43.599609 43.630859 C 49.619609 37.610859 54.050547 30.980547 56.560547 24.810547 z M 37.345703 25.099609 C 37.216797 25.084812 37.083172 25.095516 36.951172 25.134766 C 36.421172 25.289766 36.118437 25.845 36.273438 26.375 L 37.017578 28.914062 C 37.145578 29.350062 37.543563 29.632813 37.976562 29.632812 C 38.069563 29.632812 38.163813 29.619797 38.257812 29.591797 C 38.787813 29.436797 39.090547 28.881563 38.935547 28.351562 L 38.191406 25.8125 C 38.074406 25.415 37.732422 25.144 37.345703 25.099609 z M 4.0292969 33.089844 C 4.0492969 33.129844 4.079375 33.159219 4.109375 33.199219 L 5.1796875 34.529297 L 6.4902344 36.179688 C 6.5002344 36.199688 6.5192969 36.220469 6.5292969 36.230469 C 6.9452969 36.736469 7.4442344 37.138453 7.9902344 37.439453 C 7.9872344 37.529453 12.708984 56.933594 12.708984 56.933594 C 11.832984 56.856594 11.021578 56.699656 10.267578 56.472656 C 10.183578 56.447656 10.097625 56.423484 10.015625 56.396484 C 9.839625 56.338484 9.6709531 56.273031 9.5019531 56.207031 C 9.3839531 56.160031 9.2634375 56.1135 9.1484375 56.0625 C 9.0034375 55.9985 8.8636094 55.931328 8.7246094 55.861328 C 8.5906094 55.793328 8.4590781 55.722438 8.3300781 55.648438 C 8.2130781 55.581437 8.097375 55.513406 7.984375 55.441406 C 7.833375 55.344406 7.6879219 55.239766 7.5449219 55.134766 C 7.4599219 55.072766 7.3720625 55.012266 7.2890625 54.947266 C 7.0660625 54.769266 6.8514375 54.581859 6.6484375 54.380859 C 4.5694375 52.289859 3.73 49.210781 4 45.550781 L 7.5292969 40.25 C 7.8392969 39.79 7.7197656 39.169141 7.2597656 38.869141 C 6.7997656 38.559141 6.1791406 38.680625 5.8691406 39.140625 L 4.9492188 40.509766 L 4.9492188 40.529297 L 4.0292969 41.900391 L 4.0292969 33.089844 z M 22.130859 35.527344 L 41.484375 42.714844 C 41.532375 42.732844 41.583813 42.729234 41.632812 42.740234 C 33.416812 50.775234 23.95 56.028141 16.25 56.869141 L 16.089844 56.880859 C 16.004844 56.889859 15.927703 56.894344 15.845703 56.902344 C 15.783703 56.907344 15.719203 56.913969 15.658203 56.917969 C 15.579203 56.925969 15.502828 56.9305 15.423828 56.9375 L 19.464844 45.195312 C 19.644844 44.673313 19.36675 44.105781 18.84375 43.925781 C 18.32175 43.744781 17.751266 44.023875 17.572266 44.546875 L 14.162109 54.457031 L 10.142578 38.046875 C 10.221578 38.050875 10.300859 38.060547 10.380859 38.060547 C 10.750859 38.060547 11.120469 38.019453 11.480469 37.939453 L 21.490234 35.720703 C 21.708234 35.670703 21.921859 35.604344 22.130859 35.527344 z M 45.904297 43.990234 C 45.648547 43.990234 45.392766 44.087703 45.197266 44.283203 L 43.783203 45.697266 C 43.392203 46.087266 43.392203 46.720328 43.783203 47.111328 C 43.978203 47.306328 44.234234 47.404297 44.490234 47.404297 C 44.746234 47.404297 45.002266 47.306328 45.197266 47.111328 L 46.611328 45.697266 C 47.002328 45.306266 47.002328 44.674203 46.611328 44.283203 C 46.415828 44.087703 46.160047 43.990234 45.904297 43.990234 z M 49.439453 47.523438 C 49.183703 47.523437 48.927922 47.620906 48.732422 47.816406 L 47.318359 49.232422 C 46.927359 49.623422 46.927359 50.255484 47.318359 50.646484 C 47.513359 50.842484 47.769391 50.939453 48.025391 50.939453 C 48.281391 50.939453 48.537422 50.841484 48.732422 50.646484 L 50.146484 49.230469 C 50.537484 48.839469 50.537484 48.207406 50.146484 47.816406 C 49.950984 47.620906 49.695203 47.523438 49.439453 47.523438 z M 52.976562 51.060547 C 52.720812 51.060547 52.465031 51.158016 52.269531 51.353516 L 50.853516 52.767578 C 50.462516 53.158578 50.462516 53.790641 50.853516 54.181641 C 51.048516 54.376641 51.304547 54.474609 51.560547 54.474609 C 51.816547 54.474609 52.072578 54.376641 52.267578 54.181641 L 53.683594 52.767578 C 54.074594 52.376578 54.074594 51.744516 53.683594 51.353516 C 53.488094 51.158016 53.232313 51.060547 52.976562 51.060547 z";function F(r){var a,t,n,b,d,L,E,B,u,m,p,w,y,$,x,S,I,T,A,D,N,V,U,O,P,W,j,F,G,J,X,Y,K,Q,Z,_,rr,ar,tr,nr,er,sr,or,ir,lr,cr,hr,Cr,fr,br,dr,Lr,Er,Br,ur,Rr,mr,pr,vr,wr,gr,yr,$r,xr,Sr,zr,Mr,Ir,Tr,Ar,Dr,Nr,Vr,Ur,Hr,Or,Pr,Wr,jr,kr,qr,Fr,Gr,Jr,Xr,Yr,Kr,Qr,Zr,_r,ra,aa,ta,na,ea,sa,oa,ia,la,ca,ha,Ca,fa,ba,da,La,Ea,Ba,ua,Ra,ma,pa,va,wa,ga,ya,$a,xa,Sa,za,Ma,Ia,Ta,Aa,Da,Na,Va,Ua,Ha,Oa,Pa,Wa,ja,ka,qa,Fa=new H({props:{titleBig:"UCSD Theta Tau",titleSmall:"UCSD ΘΤ",tagline:"Epsilon Delta",svg:q,alt:"a hero"}}),Ga=new k({props:{brotherLabels:r.brotherLabels}});return{c(){a=R(),t=e("div"),Fa.$$.fragment.c(),n=R(),Ga.$$.fragment.c(),b=R(),d=e("br"),L=R(),E=e("br"),B=R(),u=e("br"),m=R(),p=e("br"),w=R(),y=e("br"),$=R(),x=e("br"),S=R(),I=e("br"),T=R(),A=e("br"),D=R(),N=e("br"),V=R(),U=e("br"),O=R(),P=e("br"),W=R(),j=e("br"),F=R(),G=e("br"),J=R(),X=e("br"),Y=R(),K=e("br"),Q=R(),Z=e("br"),_=R(),rr=e("br"),ar=R(),tr=e("br"),nr=R(),er=e("br"),sr=R(),or=e("br"),ir=R(),lr=e("br"),cr=R(),hr=e("br"),Cr=R(),fr=e("br"),br=R(),dr=e("br"),Lr=R(),Er=e("br"),Br=R(),ur=e("br"),Rr=R(),mr=e("br"),pr=R(),vr=e("br"),wr=R(),gr=e("br"),yr=R(),$r=e("br"),xr=R(),Sr=e("br"),zr=R(),Mr=e("br"),Ir=R(),Tr=e("br"),Ar=R(),Dr=e("br"),Nr=R(),Vr=e("br"),Ur=R(),Hr=e("br"),Or=R(),Pr=e("br"),Wr=R(),jr=e("br"),kr=R(),qr=e("br"),Fr=R(),Gr=e("br"),Jr=R(),Xr=e("br"),Yr=R(),Kr=e("br"),Qr=R(),Zr=e("br"),_r=R(),ra=e("br"),aa=R(),ta=e("br"),na=R(),ea=e("br"),sa=R(),oa=e("br"),ia=R(),la=e("br"),ca=R(),ha=e("br"),Ca=R(),fa=e("br"),ba=R(),da=e("br"),La=R(),Ea=e("br"),Ba=R(),ua=e("br"),Ra=R(),ma=e("br"),pa=R(),va=e("br"),wa=R(),ga=e("br"),ya=R(),$a=e("br"),xa=R(),Sa=e("br"),za=R(),Ma=e("br"),Ia=R(),Ta=e("br"),Aa=R(),Da=e("br"),Na=R(),Va=e("br"),Ua=R(),Ha=e("br"),Oa=R(),Pa=e("p"),Wa=s("Icons from "),ja=e("a"),ka=s("icons8"),this.h()},l(r){a=l(r,"\n\n"),t=o(r,"DIV",{class:!0},!1);var e=i(t);Fa.$$.fragment.l(e),e.forEach(c),n=l(r,"\n"),Ga.$$.fragment.l(r),b=l(r,"\n\n\n\n\n\n\n"),d=o(r,"BR",{},!1),i(d).forEach(c),L=l(r,"\n"),E=o(r,"BR",{},!1),i(E).forEach(c),B=l(r,"\n"),u=o(r,"BR",{},!1),i(u).forEach(c),m=l(r,"\n"),p=o(r,"BR",{},!1),i(p).forEach(c),w=l(r,"\n"),y=o(r,"BR",{},!1),i(y).forEach(c),$=l(r,"\n"),x=o(r,"BR",{},!1),i(x).forEach(c),S=l(r,"\n"),I=o(r,"BR",{},!1),i(I).forEach(c),T=l(r,"\n"),A=o(r,"BR",{},!1),i(A).forEach(c),D=l(r,"\n"),N=o(r,"BR",{},!1),i(N).forEach(c),V=l(r,"\n"),U=o(r,"BR",{},!1),i(U).forEach(c),O=l(r,"\n"),P=o(r,"BR",{},!1),i(P).forEach(c),W=l(r,"\n"),j=o(r,"BR",{},!1),i(j).forEach(c),F=l(r,"\n"),G=o(r,"BR",{},!1),i(G).forEach(c),J=l(r,"\n"),X=o(r,"BR",{},!1),i(X).forEach(c),Y=l(r,"\n"),K=o(r,"BR",{},!1),i(K).forEach(c),Q=l(r,"\n"),Z=o(r,"BR",{},!1),i(Z).forEach(c),_=l(r,"\n"),rr=o(r,"BR",{},!1),i(rr).forEach(c),ar=l(r,"\n"),tr=o(r,"BR",{},!1),i(tr).forEach(c),nr=l(r,"\n"),er=o(r,"BR",{},!1),i(er).forEach(c),sr=l(r,"\n"),or=o(r,"BR",{},!1),i(or).forEach(c),ir=l(r,"\n"),lr=o(r,"BR",{},!1),i(lr).forEach(c),cr=l(r,"\n"),hr=o(r,"BR",{},!1),i(hr).forEach(c),Cr=l(r,"\n"),fr=o(r,"BR",{},!1),i(fr).forEach(c),br=l(r,"\n"),dr=o(r,"BR",{},!1),i(dr).forEach(c),Lr=l(r,"\n"),Er=o(r,"BR",{},!1),i(Er).forEach(c),Br=l(r,"\n"),ur=o(r,"BR",{},!1),i(ur).forEach(c),Rr=l(r,"\n"),mr=o(r,"BR",{},!1),i(mr).forEach(c),pr=l(r,"\n"),vr=o(r,"BR",{},!1),i(vr).forEach(c),wr=l(r,"\n"),gr=o(r,"BR",{},!1),i(gr).forEach(c),yr=l(r,"\n"),$r=o(r,"BR",{},!1),i($r).forEach(c),xr=l(r,"\n"),Sr=o(r,"BR",{},!1),i(Sr).forEach(c),zr=l(r,"\n"),Mr=o(r,"BR",{},!1),i(Mr).forEach(c),Ir=l(r,"\n"),Tr=o(r,"BR",{},!1),i(Tr).forEach(c),Ar=l(r,"\n"),Dr=o(r,"BR",{},!1),i(Dr).forEach(c),Nr=l(r,"\n"),Vr=o(r,"BR",{},!1),i(Vr).forEach(c),Ur=l(r,"\n"),Hr=o(r,"BR",{},!1),i(Hr).forEach(c),Or=l(r,"\n"),Pr=o(r,"BR",{},!1),i(Pr).forEach(c),Wr=l(r,"\n"),jr=o(r,"BR",{},!1),i(jr).forEach(c),kr=l(r,"\n"),qr=o(r,"BR",{},!1),i(qr).forEach(c),Fr=l(r,"\n"),Gr=o(r,"BR",{},!1),i(Gr).forEach(c),Jr=l(r,"\n"),Xr=o(r,"BR",{},!1),i(Xr).forEach(c),Yr=l(r,"\n"),Kr=o(r,"BR",{},!1),i(Kr).forEach(c),Qr=l(r,"\n"),Zr=o(r,"BR",{},!1),i(Zr).forEach(c),_r=l(r,"\n"),ra=o(r,"BR",{},!1),i(ra).forEach(c),aa=l(r,"\n"),ta=o(r,"BR",{},!1),i(ta).forEach(c),na=l(r,"\n"),ea=o(r,"BR",{},!1),i(ea).forEach(c),sa=l(r,"\n"),oa=o(r,"BR",{},!1),i(oa).forEach(c),ia=l(r,"\n"),la=o(r,"BR",{},!1),i(la).forEach(c),ca=l(r,"\n"),ha=o(r,"BR",{},!1),i(ha).forEach(c),Ca=l(r,"\n"),fa=o(r,"BR",{},!1),i(fa).forEach(c),ba=l(r,"\n"),da=o(r,"BR",{},!1),i(da).forEach(c),La=l(r,"\n"),Ea=o(r,"BR",{},!1),i(Ea).forEach(c),Ba=l(r,"\n"),ua=o(r,"BR",{},!1),i(ua).forEach(c),Ra=l(r,"\n"),ma=o(r,"BR",{},!1),i(ma).forEach(c),pa=l(r,"\n"),va=o(r,"BR",{},!1),i(va).forEach(c),wa=l(r,"\n"),ga=o(r,"BR",{},!1),i(ga).forEach(c),ya=l(r,"\n"),$a=o(r,"BR",{},!1),i($a).forEach(c),xa=l(r,"\n"),Sa=o(r,"BR",{},!1),i(Sa).forEach(c),za=l(r,"\n"),Ma=o(r,"BR",{},!1),i(Ma).forEach(c),Ia=l(r,"\n"),Ta=o(r,"BR",{},!1),i(Ta).forEach(c),Aa=l(r,"\n"),Da=o(r,"BR",{},!1),i(Da).forEach(c),Na=l(r,"\n"),Va=o(r,"BR",{},!1),i(Va).forEach(c),Ua=l(r,"\n"),Ha=o(r,"BR",{},!1),i(Ha).forEach(c),Oa=l(r,"\n"),Pa=o(r,"P",{class:!0},!1);var s=i(Pa);Wa=l(s,"Icons from "),ja=o(s,"A",{href:!0},!1);var h=i(ja);ka=l(h,"icons8"),h.forEach(c),s.forEach(c),this.h()},h(){document.title="UCSD Theta Tau",h(t,"class","hero-div svelte-vdha4f"),h(ja,"href","https://icons8.com/icons"),h(Pa,"class","svelte-vdha4f")},m(r,e){C(r,a,e),C(r,t,e),z(Fa,t,null),C(r,n,e),z(Ga,r,e),C(r,b,e),C(r,d,e),C(r,L,e),C(r,E,e),C(r,B,e),C(r,u,e),C(r,m,e),C(r,p,e),C(r,w,e),C(r,y,e),C(r,$,e),C(r,x,e),C(r,S,e),C(r,I,e),C(r,T,e),C(r,A,e),C(r,D,e),C(r,N,e),C(r,V,e),C(r,U,e),C(r,O,e),C(r,P,e),C(r,W,e),C(r,j,e),C(r,F,e),C(r,G,e),C(r,J,e),C(r,X,e),C(r,Y,e),C(r,K,e),C(r,Q,e),C(r,Z,e),C(r,_,e),C(r,rr,e),C(r,ar,e),C(r,tr,e),C(r,nr,e),C(r,er,e),C(r,sr,e),C(r,or,e),C(r,ir,e),C(r,lr,e),C(r,cr,e),C(r,hr,e),C(r,Cr,e),C(r,fr,e),C(r,br,e),C(r,dr,e),C(r,Lr,e),C(r,Er,e),C(r,Br,e),C(r,ur,e),C(r,Rr,e),C(r,mr,e),C(r,pr,e),C(r,vr,e),C(r,wr,e),C(r,gr,e),C(r,yr,e),C(r,$r,e),C(r,xr,e),C(r,Sr,e),C(r,zr,e),C(r,Mr,e),C(r,Ir,e),C(r,Tr,e),C(r,Ar,e),C(r,Dr,e),C(r,Nr,e),C(r,Vr,e),C(r,Ur,e),C(r,Hr,e),C(r,Or,e),C(r,Pr,e),C(r,Wr,e),C(r,jr,e),C(r,kr,e),C(r,qr,e),C(r,Fr,e),C(r,Gr,e),C(r,Jr,e),C(r,Xr,e),C(r,Yr,e),C(r,Kr,e),C(r,Qr,e),C(r,Zr,e),C(r,_r,e),C(r,ra,e),C(r,aa,e),C(r,ta,e),C(r,na,e),C(r,ea,e),C(r,sa,e),C(r,oa,e),C(r,ia,e),C(r,la,e),C(r,ca,e),C(r,ha,e),C(r,Ca,e),C(r,fa,e),C(r,ba,e),C(r,da,e),C(r,La,e),C(r,Ea,e),C(r,Ba,e),C(r,ua,e),C(r,Ra,e),C(r,ma,e),C(r,pa,e),C(r,va,e),C(r,wa,e),C(r,ga,e),C(r,ya,e),C(r,$a,e),C(r,xa,e),C(r,Sa,e),C(r,za,e),C(r,Ma,e),C(r,Ia,e),C(r,Ta,e),C(r,Aa,e),C(r,Da,e),C(r,Na,e),C(r,Va,e),C(r,Ua,e),C(r,Ha,e),C(r,Oa,e),C(r,Pa,e),f(Pa,Wa),f(Pa,ja),f(ja,ka),qa=!0},p(r,a){var t={};r.garnetUnfilled&&(t.svg=q),Fa.$set(t);var n={};r.brotherLabels&&(n.brotherLabels=a.brotherLabels),Ga.$set(n)},i(r){qa||(v(Fa.$$.fragment,r),v(Ga.$$.fragment,r),qa=!0)},o(r){g(Fa.$$.fragment,r),g(Ga.$$.fragment,r),qa=!1},d(r){r&&(c(a),c(t)),M(Fa),r&&c(n),M(Ga,r),r&&(c(b),c(d),c(L),c(E),c(B),c(u),c(m),c(p),c(w),c(y),c($),c(x),c(S),c(I),c(T),c(A),c(D),c(N),c(V),c(U),c(O),c(P),c(W),c(j),c(F),c(G),c(J),c(X),c(Y),c(K),c(Q),c(Z),c(_),c(rr),c(ar),c(tr),c(nr),c(er),c(sr),c(or),c(ir),c(lr),c(cr),c(hr),c(Cr),c(fr),c(br),c(dr),c(Lr),c(Er),c(Br),c(ur),c(Rr),c(mr),c(pr),c(vr),c(wr),c(gr),c(yr),c($r),c(xr),c(Sr),c(zr),c(Mr),c(Ir),c(Tr),c(Ar),c(Dr),c(Nr),c(Vr),c(Ur),c(Hr),c(Or),c(Pr),c(Wr),c(jr),c(kr),c(qr),c(Fr),c(Gr),c(Jr),c(Xr),c(Yr),c(Kr),c(Qr),c(Zr),c(_r),c(ra),c(aa),c(ta),c(na),c(ea),c(sa),c(oa),c(ia),c(la),c(ca),c(ha),c(Ca),c(fa),c(ba),c(da),c(La),c(Ea),c(Ba),c(ua),c(Ra),c(ma),c(pa),c(va),c(wa),c(ga),c(ya),c($a),c(xa),c(Sa),c(za),c(Ma),c(Ia),c(Ta),c(Aa),c(Da),c(Na),c(Va),c(Ua),c(Ha),c(Oa),c(Pa))}}}function G(r){return{brotherLabels:["brothers","entrepreneurs","leaders","pioneers","philanthropists","best friends","family","world changers"]}}export default class extends r{constructor(r){super(),a(this,r,G,F,t,[])}}
//# sourceMappingURL=index.b55c9dfa.js.map