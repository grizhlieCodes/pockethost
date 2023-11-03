import{s as he,z as ye,e as ke,i as y,d,r as lt,u as rt,v as nt,w as it,f as m,a as $,l as Y,g as h,h as v,x as O,c as w,m as W,j as c,y as f,E as ce,A as fe,F as Xe,n as we,G as Ie,C as me,o as at,p as Me,H as Ae,B as ot,I as ut,D as Ze}from"../chunks/scheduler.de195056.js";import{S as _e,i as ge,b as ee,d as te,m as se,a as V,t as C,e as le,g as ve,c as be,f as Ee,h as Te,j as Se,k as Ne}from"../chunks/index.c6f2ad36.js";import{L as ft}from"../chunks/Logo.3024a5fe.js";import{A as et,U as ct}from"../chunks/UserLoggedIn.488e1a77.js";import{i as tt,b as dt,a as st}from"../chunks/stores.a280ff67.js";import{s as re}from"../chunks/index.3f7c9ec2.js";import{a as pt,b as mt,c as ht}from"../chunks/database.5ddaa35e.js";import"../chunks/singletons.430f5ae5.js";import{g as Be}from"../chunks/index.a7625b7a.js";import{I as je,v as _t}from"../chunks/index.56f88796.js";import{e as Re}from"../chunks/each.e59479a4.js";import{C as gt,a as vt}from"../chunks/CardHeader.7b4b88a9.js";function ze(a){let e;const s=a[1].default,t=lt(s,a,a[2],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,r){t&&t.m(l,r),e=!0},p(l,r){t&&t.p&&(!e||r&4)&&rt(t,s,l,l[2],e?it(s,l[2],r,null):nt(l[2]),null)},i(l){e||(V(t,l),e=!0)},o(l){C(t,l),e=!1},d(l){t&&t.d(l)}}}function bt(a){let e,s,t=!a[0]&&ze(a);return{c(){t&&t.c(),e=ke()},l(l){t&&t.l(l),e=ke()},m(l,r){t&&t.m(l,r),y(l,e,r),s=!0},p(l,r){l[0]?t&&(ve(),C(t,1,1,()=>{t=null}),be()):t?(t.p(l,r),r&1&&V(t,1)):(t=ze(l),t.c(),V(t,1),t.m(e.parentNode,e))},i(l){s||(V(t),s=!0)},o(l){C(t),s=!1},d(l){l&&d(e),t&&t.d(l)}}}function $t(a){let e,s;return e=new et({props:{$$slots:{default:[bt]},$$scope:{ctx:a}}}),{c(){ee(e.$$.fragment)},l(t){te(e.$$.fragment,t)},m(t,l){se(e,t,l),s=!0},p(t,[l]){const r={};l&5&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||(V(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){le(e,t)}}}function wt(a,e,s){let t;ye(a,tt,n=>s(0,t=n));let{$$slots:l={},$$scope:r}=e;return a.$$set=n=>{"$$scope"in n&&s(2,r=n.$$scope)},[t,l,r]}class It extends _e{constructor(e){super(),ge(this,e,wt,$t,he,{})}}function Fe(a){let e,s,t,l,r,n,i;return{c(){e=m("div"),s=m("i"),t=$(),l=m("span"),r=Y(a[2]),this.h()},l(o){e=h(o,"DIV",{class:!0});var u=v(e);s=h(u,"I",{class:!0}),v(s).forEach(d),t=w(u),l=h(u,"SPAN",{});var _=v(l);r=W(_,a[2]),_.forEach(d),u.forEach(d),this.h()},h(){c(s,"class","fa-solid fa-circle-exclamation"),c(e,"class","alert alert-error mb-5")},m(o,u){y(o,e,u),f(e,s),f(e,t),f(e,l),f(l,r),i=!0},p(o,u){(!i||u&4)&&we(r,o[2])},i(o){i||(o&&Ie(()=>{i&&(n||(n=Ee(e,re,{},!0)),n.run(1))}),i=!0)},o(o){o&&(n||(n=Ee(e,re,{},!1)),n.run(0)),i=!1},d(o){o&&d(e),o&&n&&n.end()}}}function kt(a){let e,s;return{c(){e=Y("Log In "),s=m("i"),this.h()},l(t){e=W(t,"Log In "),s=h(t,"I",{class:!0}),v(s).forEach(d),this.h()},h(){c(s,"class","fa-solid fa-arrow-right")},m(t,l){y(t,e,l),y(t,s,l)},d(t){t&&(d(e),d(s))}}}function Et(a){let e;return{c(){e=m("span"),this.h()},l(s){e=h(s,"SPAN",{class:!0}),v(e).forEach(d),this.h()},h(){c(e,"class","loading loading-spinner")},m(s,t){y(s,e,t)},d(s){s&&d(e)}}}function Vt(a){let e,s,t="Log In",l,r,n,i='<span class="label-text">Email</span>',o,u,_,p,g,k='<span class="label-text">Password</span>',E,I,j,R,z,G,J,H,P,ie,N,de="Create A New Account",K,B,X='Forgot Your Password? <a href="login/password-reset" class="link font-bold">Reset Password</a>',q,ne,U=a[2]&&Fe(a);function ae(b,T){return b[4]?Et:kt}let Q=ae(a),M=Q(a);return{c(){e=m("form"),s=m("h2"),s.textContent=t,l=$(),r=m("div"),n=m("label"),n.innerHTML=i,o=$(),u=m("input"),_=$(),p=m("div"),g=m("label"),g.innerHTML=k,E=$(),I=m("input"),j=$(),U&&U.c(),R=$(),z=m("div"),G=m("button"),M.c(),J=$(),H=m("div"),P=m("div"),ie=Y("Need to Register? "),N=m("button"),N.textContent=de,K=$(),B=m("div"),B.innerHTML=X,this.h()},l(b){e=h(b,"FORM",{class:!0});var T=v(e);s=h(T,"H2",{class:!0,"data-svelte-h":!0}),O(s)!=="svelte-74kl0c"&&(s.textContent=t),l=w(T),r=h(T,"DIV",{class:!0});var oe=v(r);n=h(oe,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),O(n)!=="svelte-mm6dwg"&&(n.innerHTML=i),o=w(oe),u=h(oe,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0,autocomplete:!0}),oe.forEach(d),_=w(T),p=h(T,"DIV",{class:!0});var Z=v(p);g=h(Z,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),O(g)!=="svelte-6ylp8f"&&(g.innerHTML=k),E=w(Z),I=h(Z,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0,autocomplete:!0}),Z.forEach(d),j=w(T),U&&U.l(T),R=w(T),z=h(T,"DIV",{class:!0});var S=v(z);G=h(S,"BUTTON",{type:!0,class:!0});var D=v(G);M.l(D),D.forEach(d),S.forEach(d),T.forEach(d),J=w(b),H=h(b,"DIV",{class:!0});var L=v(H);P=h(L,"DIV",{class:!0});var A=v(P);ie=W(A,"Need to Register? "),N=h(A,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),O(N)!=="svelte-1riq9p4"&&(N.textContent=de),A.forEach(d),K=w(L),B=h(L,"DIV",{"data-svelte-h":!0}),O(B)!=="svelte-x3ycwi"&&(B.innerHTML=X),L.forEach(d),this.h()},h(){c(s,"class","font-bold text-white mb-3 text-center text-2xl"),c(n,"class","label"),c(n,"for","id"),c(u,"type","email"),c(u,"class","input input-bordered w-full"),c(u,"id","email"),c(u,"placeholder","name@example.com"),c(u,"autocomplete","email"),u.required=!0,c(r,"class","mb-3"),c(g,"class","label"),c(g,"for","password"),c(I,"type","password"),c(I,"class","input input-bordered w-full"),c(I,"id","password"),c(I,"placeholder","Password"),c(I,"autocomplete","current-password"),I.required=!0,c(p,"class","mb-3"),c(G,"type","submit"),c(G,"class","btn btn-primary"),G.disabled=a[3],c(z,"class","card-actions justify-end"),c(e,"class","card-body"),c(N,"type","button"),c(N,"class","link font-bold"),c(P,"class","mb-4"),c(H,"class","p-4 bg-zinc-800 text-center")},m(b,T){y(b,e,T),f(e,s),f(e,l),f(e,r),f(r,n),f(r,o),f(r,u),ce(u,a[0]),f(e,_),f(e,p),f(p,g),f(p,E),f(p,I),ce(I,a[1]),f(e,j),U&&U.m(e,null),f(e,R),f(e,z),f(z,G),M.m(G,null),y(b,J,T),y(b,H,T),f(H,P),f(P,ie),f(P,N),f(H,K),f(H,B),q||(ne=[fe(u,"input",a[8]),fe(I,"input",a[9]),fe(e,"submit",a[6]),fe(N,"click",a[5])],q=!0)},p(b,[T]){T&1&&u.value!==b[0]&&ce(u,b[0]),T&2&&I.value!==b[1]&&ce(I,b[1]),b[2]?U?(U.p(b,T),T&4&&V(U,1)):(U=Fe(b),U.c(),V(U,1),U.m(e,R)):U&&(ve(),C(U,1,1,()=>{U=null}),be()),Q!==(Q=ae(b))&&(M.d(1),M=Q(b),M&&(M.c(),M.m(G,null))),T&8&&(G.disabled=b[3])},i(b){V(U)},o(b){C(U)},d(b){b&&(d(e),d(J),d(H)),U&&U.d(),M.d(),q=!1,Xe(ne)}}}function yt(a,e,s){let{isSignUpView:t=!0}=e,l="",r="",n="",i=!0,o=!1;const u=()=>{s(7,t=!t)},_=async k=>{k.preventDefault(),s(3,i=!0),s(4,o=!0),await pt(l,r,E=>{s(2,n=E)}),s(3,i=!1),s(4,o=!1)};function p(){l=this.value,s(0,l)}function g(){r=this.value,s(1,r)}return a.$$set=k=>{"isSignUpView"in k&&s(7,t=k.isSignUpView)},a.$$.update=()=>{a.$$.dirty&3&&s(3,i=l.length===0||r.length===0)},[l,r,n,i,o,u,_,t,p,g]}class Lt extends _e{constructor(e){super(),ge(this,e,yt,Vt,he,{isSignUpView:7})}}const Dt=a=>a[Math.floor(Math.random()*a.length)];function Ct(a){let e,s,t,l,r,n,i="Creating Your New Instance...",o,u,_;return{c(){e=m("div"),s=m("div"),t=m("span"),l=$(),r=m("div"),n=m("h2"),n.textContent=i,o=$(),u=m("p"),_=Y(a[0]),this.h()},l(p){e=h(p,"DIV",{class:!0});var g=v(e);s=h(g,"DIV",{class:!0});var k=v(s);t=h(k,"SPAN",{class:!0}),v(t).forEach(d),l=w(k),r=h(k,"DIV",{});var E=v(r);n=h(E,"H2",{class:!0,"data-svelte-h":!0}),O(n)!=="svelte-c7riil"&&(n.textContent=i),o=w(E),u=h(E,"P",{class:!0});var I=v(u);_=W(I,a[0]),I.forEach(d),E.forEach(d),k.forEach(d),g.forEach(d),this.h()},h(){c(t,"class","loading loading-spinner loading-lg mb-4"),c(n,"class","mb-12 font-bold text-white text-2xl"),c(u,"class","italic"),c(s,"class","text-center"),c(e,"class","card-body")},m(p,g){y(p,e,g),f(e,s),f(s,t),f(s,l),f(s,r),f(r,n),f(r,o),f(r,u),f(u,_)},p:me,i:me,o:me,d(p){p&&d(e)}}}function Ut(a){return[Dt(["Did you know it takes fourteen sentient robots to create each instance on PocketHost?"])]}class Tt extends _e{constructor(e){super(),ge(this,e,Ut,Ct,he,{})}}function Oe(a){let e,s,t,l,r,n,i;return{c(){e=m("div"),s=m("i"),t=$(),l=m("span"),r=Y(a[3]),this.h()},l(o){e=h(o,"DIV",{class:!0});var u=v(e);s=h(u,"I",{class:!0}),v(s).forEach(d),t=w(u),l=h(u,"SPAN",{});var _=v(l);r=W(_,a[3]),_.forEach(d),u.forEach(d),this.h()},h(){c(s,"class","fa-solid fa-circle-exclamation"),c(e,"class","alert alert-error mb-5")},m(o,u){y(o,e,u),f(e,s),f(e,t),f(e,l),f(l,r),i=!0},p(o,u){(!i||u&8)&&we(r,o[3])},i(o){i||(o&&Ie(()=>{i&&(n||(n=Ee(e,re,{},!0)),n.run(1))}),i=!0)},o(o){o&&(n||(n=Ee(e,re,{},!1)),n.run(0)),i=!1},d(o){o&&d(e),o&&n&&n.end()}}}function St(a){let e,s,t="Register and Create Your <br/>First Instance",l,r,n,i='<span class="label-text">Email</span>',o,u,_,p,g,k='<span class="label-text">Password</span>',E,I,j,R,z,G='<span class="label-text">Instance Name</span>',J,H,P,ie,N,de='<i class="fa-solid fa-rotate"></i>',K,B,X,q,ne,U,ae,Q,M,b,T="Login",oe,Z,S=a[3]&&Oe(a);return{c(){e=m("form"),s=m("h2"),s.innerHTML=t,l=$(),r=m("div"),n=m("label"),n.innerHTML=i,o=$(),u=m("input"),_=$(),p=m("div"),g=m("label"),g.innerHTML=k,E=$(),I=m("input"),j=$(),R=m("div"),z=m("label"),z.innerHTML=G,J=$(),H=m("div"),P=m("input"),ie=$(),N=m("button"),N.innerHTML=de,K=$(),S&&S.c(),B=$(),X=m("div"),q=m("button"),ne=Y("Create "),U=m("i"),ae=$(),Q=m("div"),M=Y("Already have an account? "),b=m("button"),b.textContent=T,this.h()},l(D){e=h(D,"FORM",{class:!0});var L=v(e);s=h(L,"H2",{class:!0,"data-svelte-h":!0}),O(s)!=="svelte-j2ogso"&&(s.innerHTML=t),l=w(L),r=h(L,"DIV",{class:!0});var A=v(r);n=h(A,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),O(n)!=="svelte-mm6dwg"&&(n.innerHTML=i),o=w(A),u=h(A,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0,autocomplete:!0}),A.forEach(d),_=w(L),p=h(L,"DIV",{class:!0});var x=v(p);g=h(x,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),O(g)!=="svelte-6ylp8f"&&(g.innerHTML=k),E=w(x),I=h(x,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0,autocomplete:!0}),x.forEach(d),j=w(L),R=h(L,"DIV",{class:!0});var F=v(R);z=h(F,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),O(z)!=="svelte-78zuxk"&&(z.innerHTML=G),J=w(F),H=h(F,"DIV",{class:!0});var pe=v(H);P=h(pe,"INPUT",{type:!0,placeholder:!0,id:!0,class:!0}),ie=w(pe),N=h(pe,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),O(N)!=="svelte-ygf5zn"&&(N.innerHTML=de),pe.forEach(d),F.forEach(d),K=w(L),S&&S.l(L),B=w(L),X=h(L,"DIV",{class:!0});var Ve=v(X);q=h(Ve,"BUTTON",{type:!0,class:!0});var ue=v(q);ne=W(ue,"Create "),U=h(ue,"I",{class:!0}),v(U).forEach(d),ue.forEach(d),Ve.forEach(d),L.forEach(d),ae=w(D),Q=h(D,"DIV",{class:!0});var $e=v(Q);M=W($e,"Already have an account? "),b=h($e,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),O(b)!=="svelte-15vypbb"&&(b.textContent=T),$e.forEach(d),this.h()},h(){c(s,"class","font-bold text-white mb-3 text-center text-2xl"),c(n,"class","label"),c(n,"for","id"),c(u,"type","email"),c(u,"class","input input-bordered w-full"),c(u,"id","email"),c(u,"placeholder","name@example.com"),c(u,"autocomplete","email"),u.required=!0,c(r,"class","mb-3"),c(g,"class","label"),c(g,"for","password"),c(I,"type","password"),c(I,"class","input input-bordered w-full"),c(I,"id","password"),c(I,"placeholder","Password"),c(I,"autocomplete","new-password"),I.required=!0,c(p,"class","mb-3"),c(z,"class","label"),c(z,"for","instance"),c(P,"type","text"),c(P,"placeholder","instance-name"),c(P,"id","instance"),c(P,"class","input input-bordered w-full"),c(N,"type","button"),c(N,"class","btn btn-square"),c(H,"class","input-group"),c(R,"class","mb-12"),c(U,"class","fa-solid fa-arrow-right"),c(q,"type","submit"),c(q,"class","btn btn-primary"),q.disabled=a[4],c(X,"class","card-actions justify-end"),c(e,"class","card-body"),c(b,"type","button"),c(b,"class","link font-bold"),c(Q,"class","p-4 bg-zinc-800 text-center")},m(D,L){y(D,e,L),f(e,s),f(e,l),f(e,r),f(r,n),f(r,o),f(r,u),ce(u,a[0]),f(e,_),f(e,p),f(p,g),f(p,E),f(p,I),ce(I,a[1]),f(e,j),f(e,R),f(R,z),f(R,J),f(R,H),f(H,P),ce(P,a[2]),f(H,ie),f(H,N),f(e,K),S&&S.m(e,null),f(e,B),f(e,X),f(X,q),f(q,ne),f(q,U),y(D,ae,L),y(D,Q,L),f(Q,M),f(Q,b),oe||(Z=[fe(u,"input",a[10]),fe(I,"input",a[11]),fe(P,"input",a[12]),fe(N,"click",a[5]),fe(e,"submit",a[7]),fe(b,"click",a[6])],oe=!0)},p(D,[L]){L&1&&u.value!==D[0]&&ce(u,D[0]),L&2&&I.value!==D[1]&&ce(I,D[1]),L&4&&P.value!==D[2]&&ce(P,D[2]),D[3]?S?(S.p(D,L),L&8&&V(S,1)):(S=Oe(D),S.c(),V(S,1),S.m(e,B)):S&&(ve(),C(S,1,1,()=>{S=null}),be()),L&16&&(q.disabled=D[4])},i(D){V(S)},o(D){C(S)},d(D){D&&(d(e),d(ae),d(Q)),S&&S.d(),oe=!1,Xe(Z)}}}function Pt(a,e,s){let{isProcessing:t=!1}=e,{isSignUpView:l=!1}=e,r="",n="",i=Be(2),o="",u=!0;const _=()=>{s(2,i=Be(2))},p=()=>{s(9,l=!l)},g=async j=>{j.preventDefault(),s(4,u=!0),s(8,t=!0),await mt(r,n,i,R=>{s(3,o=R)}),s(4,u=!1),s(8,t=!1)};function k(){r=this.value,s(0,r)}function E(){n=this.value,s(1,n)}function I(){i=this.value,s(2,i)}return a.$$set=j=>{"isProcessing"in j&&s(8,t=j.isProcessing),"isSignUpView"in j&&s(9,l=j.isSignUpView)},a.$$.update=()=>{a.$$.dirty&7&&s(4,u=r.length===0||n.length===0||i.length===0)},[r,n,i,o,u,_,p,g,t,l,k,E,I]}class Mt extends _e{constructor(e){super(),ge(this,e,Pt,St,he,{isProcessing:8,isSignUpView:9})}}function qe(a){let e,s,t,l,r,n;const i=[Nt,At],o=[];function u(_,p){return _[1]?0:1}return s=u(a),t=o[s]=i[s](a),{c(){e=m("div"),t.c()},l(_){e=h(_,"DIV",{});var p=v(e);t.l(p),p.forEach(d)},m(_,p){y(_,e,p),o[s].m(e,null),n=!0},p(_,p){let g=s;s=u(_),s===g?o[s].p(_,p):(ve(),C(o[g],1,1,()=>{o[g]=null}),be(),t=o[s],t?t.p(_,p):(t=o[s]=i[s](_),t.c()),V(t,1),t.m(e,null))},i(_){n||(V(t),_&&Ie(()=>{n&&(r&&r.end(1),l=Te(e,re,{delay:400}),l.start())}),n=!0)},o(_){C(t),l&&l.invalidate(),_&&(r=Se(e,re,{})),n=!1},d(_){_&&d(e),o[s].d(),_&&r&&r.end()}}}function At(a){let e,s,t,l,r,n,i;function o(p){a[2](p)}function u(p){a[3](p)}let _={};return a[1]!==void 0&&(_.isProcessing=a[1]),a[0]!==void 0&&(_.isSignUpView=a[0]),s=new Mt({props:_}),Me.push(()=>Ne(s,"isProcessing",o)),Me.push(()=>Ne(s,"isSignUpView",u)),{c(){e=m("div"),ee(s.$$.fragment)},l(p){e=h(p,"DIV",{});var g=v(e);te(s.$$.fragment,g),g.forEach(d)},m(p,g){y(p,e,g),se(s,e,null),i=!0},p(p,g){const k={};!t&&g&2&&(t=!0,k.isProcessing=p[1],Ae(()=>t=!1)),!l&&g&1&&(l=!0,k.isSignUpView=p[0],Ae(()=>l=!1)),s.$set(k)},i(p){i||(V(s.$$.fragment,p),p&&Ie(()=>{i&&(n&&n.end(1),r=Te(e,re,{delay:400}),r.start())}),i=!0)},o(p){C(s.$$.fragment,p),r&&r.invalidate(),p&&(n=Se(e,re,{})),i=!1},d(p){p&&d(e),le(s),p&&n&&n.end()}}}function Nt(a){let e,s,t,l,r;return s=new Tt({}),{c(){e=m("div"),ee(s.$$.fragment)},l(n){e=h(n,"DIV",{});var i=v(e);te(s.$$.fragment,i),i.forEach(d)},m(n,i){y(n,e,i),se(s,e,null),r=!0},p:me,i(n){r||(V(s.$$.fragment,n),n&&Ie(()=>{r&&(l&&l.end(1),t=Te(e,re,{delay:400}),t.start())}),r=!0)},o(n){C(s.$$.fragment,n),t&&t.invalidate(),n&&(l=Se(e,re,{})),r=!1},d(n){n&&d(e),le(s),n&&l&&l.end()}}}function xe(a){let e,s,t,l,r,n;function i(u){a[4](u)}let o={};return a[0]!==void 0&&(o.isSignUpView=a[0]),s=new Lt({props:o}),Me.push(()=>Ne(s,"isSignUpView",i)),{c(){e=m("div"),ee(s.$$.fragment)},l(u){e=h(u,"DIV",{});var _=v(e);te(s.$$.fragment,_),_.forEach(d)},m(u,_){y(u,e,_),se(s,e,null),n=!0},p(u,_){const p={};!t&&_&1&&(t=!0,p.isSignUpView=u[0],Ae(()=>t=!1)),s.$set(p)},i(u){n||(V(s.$$.fragment,u),u&&Ie(()=>{n&&(r&&r.end(1),l=Te(e,re,{delay:400}),l.start())}),n=!0)},o(u){C(s.$$.fragment,u),l&&l.invalidate(),u&&(r=Se(e,re,{})),n=!1},d(u){u&&d(e),le(s),u&&r&&r.end()}}}function Ht(a){let e,s,t,l=a[0]&&qe(a),r=!a[0]&&xe(a);return{c(){e=m("div"),l&&l.c(),s=$(),r&&r.c(),this.h()},l(n){e=h(n,"DIV",{class:!0});var i=v(e);l&&l.l(i),s=w(i),r&&r.l(i),i.forEach(d),this.h()},h(){c(e,"class","card w-96 bg-zinc-900 mx-auto shadow-xl overflow-hidden")},m(n,i){y(n,e,i),l&&l.m(e,null),f(e,s),r&&r.m(e,null),t=!0},p(n,[i]){n[0]?l?(l.p(n,i),i&1&&V(l,1)):(l=qe(n),l.c(),V(l,1),l.m(e,s)):l&&(ve(),C(l,1,1,()=>{l=null}),be()),n[0]?r&&(ve(),C(r,1,1,()=>{r=null}),be()):r?(r.p(n,i),i&1&&V(r,1)):(r=xe(n),r.c(),V(r,1),r.m(e,null))},i(n){t||(V(l),V(r),t=!0)},o(n){C(l),C(r),t=!1},d(n){n&&d(e),l&&l.d(),r&&r.d()}}}function Bt(a,e,s){let t=!0,l=!1;at(()=>{new URLSearchParams(window.location.search).get("view")==="login"&&s(0,t=!1)});function r(o){l=o,s(1,l)}function n(o){t=o,s(0,t)}function i(o){t=o,s(0,t)}return[t,l,r,n,i]}class jt extends _e{constructor(e){super(),ge(this,e,Bt,Ht,he,{})}}function Ge(a){let e,s,t,l,r="Please verify your account by clicking the link in your email",n,i,o;function u(k,E){return k[0]?zt:Rt}let _=u(a),p=_(a),g=a[1]&&Qe(a);return{c(){e=m("div"),s=m("i"),t=$(),l=m("div"),l.textContent=r,n=$(),i=m("div"),p.c(),o=$(),g&&g.c(),this.h()},l(k){e=h(k,"DIV",{class:!0});var E=v(e);s=h(E,"I",{class:!0}),v(s).forEach(d),t=w(E),l=h(E,"DIV",{"data-svelte-h":!0}),O(l)!=="svelte-pq1nsn"&&(l.textContent=r),n=w(E),i=h(E,"DIV",{class:!0});var I=v(i);p.l(I),o=w(I),g&&g.l(I),I.forEach(d),E.forEach(d),this.h()},h(){c(s,"class","fa-regular fa-envelopes"),c(i,"class","text-right"),c(e,"class","alert alert-info mb-8")},m(k,E){y(k,e,E),f(e,s),f(e,t),f(e,l),f(e,n),f(e,i),p.m(i,null),f(i,o),g&&g.m(i,null)},p(k,E){_===(_=u(k))&&p?p.p(k,E):(p.d(1),p=_(k),p&&(p.c(),p.m(i,o))),k[1]?g?(g.p(k,E),E&2&&V(g,1)):(g=Qe(k),g.c(),V(g,1),g.m(i,null)):g&&(ve(),C(g,1,1,()=>{g=null}),be())},d(k){k&&d(e),p.d(),g&&g.d()}}}function Rt(a){let e,s="Resend Email",t,l;return{c(){e=m("button"),e.textContent=s,this.h()},l(r){e=h(r,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),O(e)!=="svelte-zsc2zt"&&(e.textContent=s),this.h()},h(){c(e,"type","button"),c(e,"class","btn btn-outline-secondary")},m(r,n){y(r,e,n),t||(l=fe(e,"click",a[4]),t=!0)},p:me,d(r){r&&d(e),t=!1,l()}}}function zt(a){let e,s='<i class="fa-regular fa-check"></i> Sent!';return{c(){e=m("div"),e.innerHTML=s,this.h()},l(t){e=h(t,"DIV",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-1dy7s30"&&(e.innerHTML=s),this.h()},h(){c(e,"class","btn btn-success")},m(t,l){y(t,e,l)},p:me,d(t){t&&d(e)}}}function Qe(a){let e,s,t,l;return{c(){e=m("div"),s=Y(a[1]),this.h()},l(r){e=h(r,"DIV",{class:!0});var n=v(e);s=W(n,a[1]),n.forEach(d),this.h()},h(){c(e,"class","border-top text-center mt-2 pt-2")},m(r,n){y(r,e,n),f(e,s),l=!0},p(r,n){(!l||n&2)&&we(s,r[1])},i(r){l||(r&&Ie(()=>{l&&(t||(t=Ee(e,re,{},!0)),t.run(1))}),l=!0)},o(r){r&&(t||(t=Ee(e,re,{},!1)),t.run(0)),l=!1},d(r){r&&d(e),r&&t&&t.end()}}}function Ft(a){let e,s=a[2]&&!a[3]&&Ge(a);return{c(){s&&s.c(),e=ke()},l(t){s&&s.l(t),e=ke()},m(t,l){s&&s.m(t,l),y(t,e,l)},p(t,[l]){t[2]&&!t[3]?s?s.p(t,l):(s=Ge(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},i:me,o:me,d(t){t&&d(e),s&&s.d(t)}}}function Ot(a,e,s){let t,l;ye(a,tt,o=>s(2,t=o)),ye(a,dt,o=>s(3,l=o));let r=!1,n="";return[r,n,t,l,()=>{s(0,r=!0),ht(o=>{s(1,n=o),s(0,r=!1)}),setTimeout(()=>{s(0,r=!1)},5e3)}]}class qt extends _e{constructor(e){super(),ge(this,e,Ot,Ft,he,{})}}function Ye(a,e,s){const t=a.slice();return t[2]=e[s],t[4]=s,t}function xt(a){let e;return{c(){e=Y("Active Instances")},l(s){e=W(s,"Active Instances")},m(s,t){y(s,e,t)},d(s){s&&d(e)}}}function We(a){let e,s='<i class="fa-regular fa-triangle-person-digging text-warning"></i> <span class="text-warning">Maintenance Mode</span>';return{c(){e=m("div"),e.innerHTML=s,this.h()},l(t){e=h(t,"DIV",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-jx18fm"&&(e.innerHTML=s),this.h()},h(){c(e,"class","badge badge-outline border-warning gap-2")},m(t,l){y(t,e,l)},d(t){t&&d(e)}}}function Je(a){let e,s,t,l=a[2].subdomain+"",r,n,i,o,u,_,p=a[2].status+"",g,k,E,I,j=Math.ceil(a[2].secondsThisMonth/60)+"",R,z,G,J,H,P=a[2].version+"",ie,N,de,K,B,X,q,ne,U="Details",ae,Q,M,b,T,oe,Z,S="Admin",D,L,A=a[2].maintenance&&We();return{c(){e=m("div"),s=m("div"),t=m("h4"),r=Y(l),n=$(),i=m("div"),o=m("div"),u=Y("Status:  "),_=m("span"),g=Y(p),k=$(),E=m("div"),I=Y("Usage: "),R=Y(j),z=Y(" mins"),G=$(),J=m("div"),H=Y("Version: "),ie=Y(P),N=$(),A&&A.c(),de=$(),K=m("div"),B=m("a"),X=m("i"),q=$(),ne=m("span"),ne.textContent=U,Q=$(),M=m("a"),b=m("img"),oe=$(),Z=m("span"),Z.textContent=S,L=$(),this.h()},l(x){e=h(x,"DIV",{class:!0});var F=v(e);s=h(F,"DIV",{class:!0});var pe=v(s);t=h(pe,"H4",{class:!0});var Ve=v(t);r=W(Ve,l),Ve.forEach(d),n=w(pe),i=h(pe,"DIV",{class:!0});var ue=v(i);o=h(ue,"DIV",{class:!0});var $e=v(o);u=W($e,"Status:  "),_=h($e,"SPAN",{class:!0});var He=v(_);g=W(He,p),He.forEach(d),$e.forEach(d),k=w(ue),E=h(ue,"DIV",{class:!0});var Le=v(E);I=W(Le,"Usage: "),R=W(Le,j),z=W(Le," mins"),Le.forEach(d),G=w(ue),J=h(ue,"DIV",{class:!0});var Pe=v(J);H=W(Pe,"Version: "),ie=W(Pe,P),Pe.forEach(d),N=w(ue),A&&A.l(ue),ue.forEach(d),pe.forEach(d),de=w(F),K=h(F,"DIV",{class:!0});var De=v(K);B=h(De,"A",{href:!0,class:!0});var Ce=v(B);X=h(Ce,"I",{class:!0}),v(X).forEach(d),q=w(Ce),ne=h(Ce,"SPAN",{"data-svelte-h":!0}),O(ne)!=="svelte-17ve4f4"&&(ne.textContent=U),Ce.forEach(d),Q=w(De),M=h(De,"A",{class:!0,href:!0,target:!0});var Ue=v(M);b=h(Ue,"IMG",{src:!0,alt:!0,class:!0}),oe=w(Ue),Z=h(Ue,"SPAN",{"data-svelte-h":!0}),O(Z)!=="svelte-bk0mpz"&&(Z.textContent=S),Ue.forEach(d),De.forEach(d),L=w(F),F.forEach(d),this.h()},h(){c(t,"class","font-bold capitalize mb-2"),c(_,"class","capitalize"),c(o,"class","badge badge-accent badge-outline"),c(E,"class","badge badge-accent badge-outline"),c(J,"class","badge badge-accent badge-outline"),c(i,"class","flex items-center flex-wrap justify-center gap-2"),c(s,"class","lg:text-left text-center mb-6 lg:mb-0"),c(X,"class","fa-regular fa-circle-info"),c(B,"href",ae=`/app/instances/${a[2].id}`),c(B,"class","btn btn-primary"),ut(b.src,T="/images/pocketbase-logo.svg")||c(b,"src",T),c(b,"alt","PocketBase Logo"),c(b,"class","w-6"),c(M,"class","btn btn-secondary"),c(M,"href",D=je(a[2].subdomain)),c(M,"target","_blank"),c(K,"class","flex items-center justify-center gap-2"),c(e,"class","lg:flex items-center justify-between transition-all duration-500 lg:py-8 py-16 px-4 rounded-2xl "+(a[4]%2===0?"":"bg-base-100"))},m(x,F){y(x,e,F),f(e,s),f(s,t),f(t,r),f(s,n),f(s,i),f(i,o),f(o,u),f(o,_),f(_,g),f(i,k),f(i,E),f(E,I),f(E,R),f(E,z),f(i,G),f(i,J),f(J,H),f(J,ie),f(i,N),A&&A.m(i,null),f(e,de),f(e,K),f(K,B),f(B,X),f(B,q),f(B,ne),f(K,Q),f(K,M),f(M,b),f(M,oe),f(M,Z),f(e,L)},p(x,F){F&1&&l!==(l=x[2].subdomain+"")&&we(r,l),F&1&&p!==(p=x[2].status+"")&&we(g,p),F&1&&j!==(j=Math.ceil(x[2].secondsThisMonth/60)+"")&&we(R,j),F&1&&P!==(P=x[2].version+"")&&we(ie,P),x[2].maintenance?A||(A=We(),A.c(),A.m(i,null)):A&&(A.d(1),A=null),F&1&&ae!==(ae=`/app/instances/${x[2].id}`)&&c(B,"href",ae),F&1&&D!==(D=je(x[2].subdomain))&&c(M,"href",D)},d(x){x&&d(e),A&&A.d()}}}function Gt(a){let e,s,t,l;e=new vt({props:{$$slots:{default:[xt]},$$scope:{ctx:a}}});let r=Re(a[0]),n=[];for(let i=0;i<r.length;i+=1)n[i]=Je(Ye(a,r,i));return{c(){ee(e.$$.fragment),s=$(),t=m("div");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){te(e.$$.fragment,i),s=w(i),t=h(i,"DIV",{class:!0});var o=v(t);for(let u=0;u<n.length;u+=1)n[u].l(o);o.forEach(d),this.h()},h(){c(t,"class","grid")},m(i,o){se(e,i,o),y(i,s,o),y(i,t,o);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(t,null);l=!0},p(i,o){const u={};if(o&32&&(u.$$scope={dirty:o,ctx:i}),e.$set(u),o&1){r=Re(i[0]);let _;for(_=0;_<r.length;_+=1){const p=Ye(i,r,_);n[_]?n[_].p(p,o):(n[_]=Je(p),n[_].c(),n[_].m(t,null))}for(;_<n.length;_+=1)n[_].d(1);n.length=r.length}},i(i){l||(V(e.$$.fragment,i),l=!0)},o(i){C(e.$$.fragment,i),l=!1},d(i){i&&(d(s),d(t)),le(e,i),ot(n,i)}}}function Qt(a){let e,s;return e=new gt({props:{height:"h-auto",$$slots:{default:[Gt]},$$scope:{ctx:a}}}),{c(){ee(e.$$.fragment)},l(t){te(e.$$.fragment,t)},m(t,l){se(e,t,l),s=!0},p(t,[l]){const r={};l&33&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||(V(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){le(e,t)}}}function Yt(a,e,s){let t,l;return ye(a,st,r=>s(1,l=r)),a.$$.update=()=>{a.$$.dirty&2&&s(0,t=Object.values(l))},[t,l]}class Wt extends _e{constructor(e){super(),ge(this,e,Yt,Qt,he,{})}}function Ke(a){let e,s='<h2 class="text-4xl text-base-content font-bold capitalize">Dashboard</h2> <a href="/app/new" class="m-3 btn btn-primary"><i class="fa-solid fa-plus"></i> New App</a>',t,l,r,n,i;return l=new qt({}),n=new Wt({}),{c(){e=m("div"),e.innerHTML=s,t=$(),ee(l.$$.fragment),r=$(),ee(n.$$.fragment),this.h()},l(o){e=h(o,"DIV",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-3gie2k"&&(e.innerHTML=s),t=w(o),te(l.$$.fragment,o),r=w(o),te(n.$$.fragment,o),this.h()},h(){c(e,"class","flex items-center justify-between mb-6")},m(o,u){y(o,e,u),y(o,t,u),se(l,o,u),y(o,r,u),se(n,o,u),i=!0},i(o){i||(V(l.$$.fragment,o),V(n.$$.fragment,o),i=!0)},o(o){C(l.$$.fragment,o),C(n.$$.fragment,o),i=!1},d(o){o&&(d(e),d(t),d(r)),le(l,o),le(n,o)}}}function Jt(a){let e,s,t=!a[0]&&Ke();return{c(){t&&t.c(),e=ke()},l(l){t&&t.l(l),e=ke()},m(l,r){t&&t.m(l,r),y(l,e,r),s=!0},p(l,r){l[0]?t&&(ve(),C(t,1,1,()=>{t=null}),be()):t?r&1&&V(t,1):(t=Ke(),t.c(),V(t,1),t.m(e.parentNode,e))},i(l){s||(V(t),s=!0)},o(l){C(t),s=!1},d(l){l&&d(e),t&&t.d(l)}}}function Kt(a){let e,s,t;return s=new et({props:{$$slots:{default:[Jt]},$$scope:{ctx:a}}}),{c(){e=$(),ee(s.$$.fragment),this.h()},l(l){Ze("svelte-1dvcujy",document.head).forEach(d),e=w(l),te(s.$$.fragment,l),this.h()},h(){document.title="Dashboard - PocketHost"},m(l,r){y(l,e,r),se(s,l,r),t=!0},p(l,[r]){const n={};r&5&&(n.$$scope={dirty:r,ctx:l}),s.$set(n)},i(l){t||(V(s.$$.fragment,l),t=!0)},o(l){C(s.$$.fragment,l),t=!1},d(l){l&&d(e),le(s,l)}}}function Xt(a,e,s){let t,l;return ye(a,st,r=>s(1,l=r)),a.$$.update=()=>{a.$$.dirty&2&&s(0,t=_t(l).length===0)},[t,l]}class Zt extends _e{constructor(e){super(),ge(this,e,Xt,Kt,he,{})}}function es(a){let e,s;return e=new Zt({}),{c(){ee(e.$$.fragment)},l(t){te(e.$$.fragment,t)},m(t,l){se(e,t,l),s=!0},i(t){s||(V(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){le(e,t)}}}function ts(a){let e,s,t,l,r,n;return t=new ft({}),r=new jt({}),{c(){e=m("div"),s=m("div"),ee(t.$$.fragment),l=$(),ee(r.$$.fragment),this.h()},l(i){e=h(i,"DIV",{class:!0});var o=v(e);s=h(o,"DIV",{});var u=v(s);te(t.$$.fragment,u),l=w(u),te(r.$$.fragment,u),u.forEach(d),o.forEach(d),this.h()},h(){c(e,"class","min-h-screen flex items-center justify-center")},m(i,o){y(i,e,o),f(e,s),se(t,s,null),f(s,l),se(r,s,null),n=!0},p:me,i(i){n||(V(t.$$.fragment,i),V(r.$$.fragment,i),n=!0)},o(i){C(t.$$.fragment,i),C(r.$$.fragment,i),n=!1},d(i){i&&d(e),le(t),le(r)}}}function ss(a){let e,s,t,l,r,n;return t=new ct({props:{$$slots:{default:[es]},$$scope:{ctx:a}}}),r=new It({props:{$$slots:{default:[ts]},$$scope:{ctx:a}}}),{c(){e=$(),s=m("div"),ee(t.$$.fragment),l=$(),ee(r.$$.fragment),this.h()},l(i){Ze("svelte-toxitl",document.head).forEach(d),e=w(i),s=h(i,"DIV",{});var u=v(s);te(t.$$.fragment,u),l=w(u),te(r.$$.fragment,u),u.forEach(d),this.h()},h(){document.title="Home - PocketHost"},m(i,o){y(i,e,o),y(i,s,o),se(t,s,null),f(s,l),se(r,s,null),n=!0},p(i,[o]){const u={};o&1&&(u.$$scope={dirty:o,ctx:i}),t.$set(u);const _={};o&1&&(_.$$scope={dirty:o,ctx:i}),r.$set(_)},i(i){n||(V(t.$$.fragment,i),V(r.$$.fragment,i),n=!0)},o(i){C(t.$$.fragment,i),C(r.$$.fragment,i),n=!1},d(i){i&&(d(e),d(s)),le(t),le(r)}}}class hs extends _e{constructor(e){super(),ge(this,e,null,ss,he,{})}}export{hs as component};