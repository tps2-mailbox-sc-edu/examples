/*! Built with http://stenciljs.com */
(function(window,document,Context,namespace,hydratedCssClass,components,resourcesUrl){"use strict";
(function(s){s&&(resourcesUrl=s.getAttribute('data-resources-url'))})(document.querySelector("script[data-namespace='amiviewer']"));
function t(t,e){return"sc-"+t.t+(e&&e!==j?"-"+e:"")}function e(t,e){return t+(e?"-h":"-s")}function n(e,n,o,i){let c=o.t+i.mode,f=o[c];if((2===o.e||1===o.e&&!e.o.n)&&(i["s-sc"]=f?t(o,i.mode):t(o)),f||(f=o[c=o.t+j]),f){let t=n.i.head;if(n.n)if(1===o.e)t=i.shadowRoot;else{let e=i;for(;e=n.c(e);)if(e.host&&e.host.shadowRoot){t=e.host.shadowRoot;break}}let r=e.f.get(t);if(r||e.f.set(t,r={}),!r[c]){let e;{e=f.content.cloneNode(!0),r[c]=!0;const o=t.querySelectorAll("[data-styles]");n.r(t,e,o.length&&o[o.length-1].nextSibling||t.firstChild)}}}}function o(t,e,n,o,f,r,s){if("class"!==n||r)if("style"===n){for(const t in o)f&&null!=f[t]||(/-/.test(t)?e.style.removeProperty(t):e.style[t]="");for(const t in f)o&&f[t]===o[t]||(/-/.test(t)?e.style.setProperty(t,f[t]):e.style[t]=f[t])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in e)if("list"!==n&&"type"!==n&&!r&&(n in e||-1!==["object","function"].indexOf(typeof f)&&null!==f)){const o=t.s(e);o&&o.l&&o.l[n]?c(e,n,f):"ref"!==n&&(c(e,n,null==f?"":f),null!=f&&!1!==f||t.o.u(e,n))}else null!=f&&"key"!==n?function l(t,e,n,o="boolean"==typeof n){const i=e!==(e=e.replace(/^xlink\:?/,""));null==n||o&&(!n||"false"===n)?i?t.removeAttributeNS(S,E(e)):t.removeAttribute(e):"function"!=typeof n&&(n=o?"":n.toString(),i?t.setAttributeNS(S,E(e),n):t.setAttribute(e,n))}(e,n,f):(r||t.o.a(e,n)&&(null==f||!1===f))&&t.o.u(e,n);else n=E(n)in e?E(n.substring(2)):E(n[2])+n.substring(3),f?f!==o&&t.o.p(e,n,f):t.o.d(e,n);else if(o!==f){const t=i(o),n=i(f),c=t.filter(t=>!n.includes(t)),r=i(e.className).filter(t=>!c.includes(t)),s=n.filter(e=>!t.includes(e)&&!r.includes(e));r.push(...s),e.className=r.join(" ")}}function i(t){return null==t||""===t?[]:t.trim().split(/\s+/)}function c(t,e,n){try{t[e]=n}catch(t){}}function f(t,e,n,i,c){const f=11===n.v.nodeType&&n.v.host?n.v.host:n.v,r=e&&e.vattrs||x,s=n.vattrs||x;for(c in r)s&&null!=s[c]||null==r[c]||o(t,f,c,r[c],void 0,i,n.m);for(c in s)c in r&&s[c]===("value"===c||"checked"===c?f[c]:r[c])||o(t,f,c,r[c],s[c],i,n.m)}function r(t,e){function n(i,c,r,s,l,p,y,h,w){if(h=c.vchildren[r],u||(d=!0,"slot"===h.vtag&&(a&&e.b(s,a+"-s"),h.vchildren?h.y=!0:h.w=!0)),W(h.vtext))h.v=e.g(h.vtext);else if(h.w)h.v=e.g("");else{if(p=h.v=A||"svg"===h.vtag?e.M("http://www.w3.org/2000/svg",h.vtag):e.k(h.y?"slot-fb":h.vtag),t.C(p)&&t.j.delete(b),A="svg"===h.vtag||"foreignObject"!==h.vtag&&A,f(t,null,h,A),W(a)&&p["s-si"]!==a&&e.b(p,p["s-si"]=a),h.vchildren)for(l=0;l<h.vchildren.length;++l)(y=n(i,h,l,p))&&e.x(p,y);"svg"===h.vtag&&(A=!1)}return h.v["s-hn"]=m,(h.y||h.w)&&(h.v["s-sr"]=!0,h.v["s-cr"]=v,h.v["s-sn"]=h.vname||"",(w=i&&i.vchildren&&i.vchildren[r])&&w.vtag===h.vtag&&i.v&&o(i.v)),h.v}function o(n,i,c,f){t.O=!0;const r=e.W(n);for(c=r.length-1;c>=0;c--)(f=r[c])["s-hn"]!==m&&f["s-ol"]&&(e.N(f),e.r(l(f),f,s(f)),e.N(f["s-ol"]),f["s-ol"]=null,d=!0),i&&o(f,i);t.O=!1}function i(t,o,i,c,f,r,l,u){const a=t["s-cr"];for((l=a&&e.c(a)||t).shadowRoot&&e.S(l)===m&&(l=l.shadowRoot);f<=r;++f)c[f]&&(u=W(c[f].vtext)?e.g(c[f].vtext):n(null,i,f,t))&&(c[f].v=u,e.r(l,u,s(o)))}function c(t,n,i,c){for(;n<=i;++n)W(t[n])&&(c=t[n].v,p=!0,c["s-ol"]?e.N(c["s-ol"]):o(c,!0),e.N(c))}function r(t,e){return t.vtag===e.vtag&&t.vkey===e.vkey&&("slot"!==t.vtag||t.vname===e.vname)}function s(t){return t&&t["s-ol"]?t["s-ol"]:t}function l(t){return e.c(t["s-ol"]?t["s-ol"]:t)}let u,a,p,d,v,m,b;const y=[];return function h(w,g,$,M,k,C,j,x,O,E,N,S){if(b=w,m=e.S(b),v=b["s-cr"],u=M,a=b["s-sc"],d=p=!1,function u(a,p,d){const v=p.v=a.v,m=a.vchildren,b=p.vchildren;A=p.v&&W(e.A(p.v))&&void 0!==p.v.ownerSVGElement,A="svg"===p.vtag||"foreignObject"!==p.vtag&&A,W(p.vtext)?(d=v["s-cr"])?e.R(e.c(d),p.vtext):a.vtext!==p.vtext&&e.R(v,p.vtext):("slot"!==p.vtag&&f(t,a,p,A),W(m)&&W(b)?function y(t,f,a,p,d,v,m,b){let y=0,h=0,w=f.length-1,g=f[0],$=f[w],M=p.length-1,k=p[0],C=p[M];for(;y<=w&&h<=M;)if(null==g)g=f[++y];else if(null==$)$=f[--w];else if(null==k)k=p[++h];else if(null==C)C=p[--M];else if(r(g,k))u(g,k),g=f[++y],k=p[++h];else if(r($,C))u($,C),$=f[--w],C=p[--M];else if(r(g,C))"slot"!==g.vtag&&"slot"!==C.vtag||o(e.c(g.v)),u(g,C),e.r(t,g.v,e.T($.v)),g=f[++y],C=p[--M];else if(r($,k))"slot"!==g.vtag&&"slot"!==C.vtag||o(e.c($.v)),u($,k),e.r(t,$.v,g.v),$=f[--w],k=p[++h];else{for(d=null,v=y;v<=w;++v)if(f[v]&&W(f[v].vkey)&&f[v].vkey===k.vkey){d=v;break}W(d)?((b=f[d]).vtag!==k.vtag?m=n(f&&f[h],a,d,t):(u(b,k),f[d]=void 0,m=b.v),k=p[++h]):(m=n(f&&f[h],a,h,t),k=p[++h]),m&&e.r(l(g.v),m,s(g.v))}y>w?i(t,null==p[M+1]?null:p[M+1].v,a,p,h,M):h>M&&c(f,y,w)}(v,m,p,b):W(b)?(W(a.vtext)&&e.R(v,""),i(v,null,p,b,0,b.length-1)):W(m)&&c(m,0,m.length-1)),A&&"svg"===p.vtag&&(A=!1)}(g,$),d){for(function t(n,o,i,c,f,r,s,l,u,a){for(f=0,r=(o=e.W(n)).length;f<r;f++){if((i=o[f])["s-sr"]&&(c=i["s-cr"]))for(l=e.W(e.c(c)),u=i["s-sn"],s=l.length-1;s>=0;s--)(c=l[s])["s-cn"]||c["s-nr"]||c["s-hn"]===i["s-hn"]||((3===(a=e.L(c))||8===a)&&""===u||1===a&&null===e.D(c,"slot")&&""===u||1===a&&e.D(c,"slot")===u)&&(y.some(t=>t.I===c)||(p=!0,c["s-sn"]=u,y.push({P:i,I:c})));1===e.L(i)&&t(i)}}($.v),j=0;j<y.length;j++)(x=y[j]).I["s-ol"]||((O=e.g(""))["s-nr"]=x.I,e.r(e.c(x.I),x.I["s-ol"]=O,x.I));for(t.O=!0,j=0;j<y.length;j++){for(x=y[j],N=e.c(x.P),S=e.T(x.P),O=x.I["s-ol"];O=e.q(O);)if((E=O["s-nr"])&&E&&E["s-sn"]===x.I["s-sn"]&&N===e.c(E)&&(E=e.T(E))&&E&&!E["s-nr"]){S=E;break}(!S&&N!==e.c(x.I)||e.T(x.I)!==S)&&x.I!==S&&(e.N(x.I),e.r(N,x.I,S))}t.O=!1}return p&&function t(n,o,i,c,f,r,s,l){for(c=0,f=(i=e.W(n)).length;c<f;c++)if(o=i[c],1===e.L(o)){if(o["s-sr"])for(s=o["s-sn"],o.hidden=!1,r=0;r<f;r++)if(i[r]["s-hn"]!==o["s-hn"])if(l=e.L(i[r]),""!==s){if(1===l&&s===e.D(i[r],"slot")){o.hidden=!0;break}}else if(1===l||3===l&&""!==e.B(i[r]).trim()){o.hidden=!0;break}t(o)}}($.v),y.length=0,$}}function s(t,e){t&&(t.vattrs&&t.vattrs.ref&&t.vattrs.ref(e?null:t.v),t.vchildren&&t.vchildren.forEach(t=>{s(t,e)}))}function l(t,e,n,o,i){const c=t.L(e);let f,r,s,u;if(i&&1===c){(r=t.D(e,C))&&(s=r.split("."))[0]===o&&((u={}).vtag=t.S(u.v=e),n.vchildren||(n.vchildren=[]),n.vchildren[s[1]]=u,n=u,i=""!==s[2]);for(let c=0;c<e.childNodes.length;c++)l(t,e.childNodes[c],n,o,i)}else 3===c&&(f=e.previousSibling)&&8===t.L(f)&&"s"===(s=t.B(f).split("."))[0]&&s[1]===o&&((u={vtext:t.B(e)}).v=e,n.vchildren||(n.vchildren=[]),n.vchildren[s[2]]=u)}function u(t,e){let n,o,i=null,c=!1,f=!1;for(var r=arguments.length;r-- >2;)R.push(arguments[r]);for(;R.length>0;){let e=R.pop();if(e&&void 0!==e.pop)for(r=e.length;r--;)R.push(e[r]);else"boolean"==typeof e&&(e=null),(f="function"!=typeof t)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(f=!1)),f&&c?i[i.length-1].vtext+=e:null===i?i=[f?{vtext:e}:e]:i.push(f?{vtext:e}:e),c=f}if(null!=e){if(e.className&&(e.class=e.className),"object"==typeof e.class){for(r in e.class)e.class[r]&&R.push(r);e.class=R.join(" "),R.length=0}null!=e.key&&(n=e.key),null!=e.name&&(o=e.name)}return"function"==typeof t?t(e,i||[],T):{vtag:t,vchildren:i,vtext:void 0,vattrs:e,vkey:n,vname:o,v:void 0,m:!1}}function a(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}function p(t){const[e,n,,o,i,c]=t,f={color:{F:"color"}};if(o)for(let t=0;t<o.length;t++){const e=o[t];f[e[0]]={H:e[1],U:!!e[2],F:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,Q:e[4]}}return{t:e,Z:n,l:Object.assign({},f),e:i,z:c?c.map(d):void 0}}function d(t){return{G:t[0],J:t[1],K:!!t[2],V:!!t[3],X:!!t[4]}}function v(t,e){if(W(e)&&"object"!=typeof e&&"function"!=typeof e){if(t===Boolean||4===t)return"false"!==e&&(""===e||!!e);if(t===Number||8===t)return parseFloat(e);if(t===String||2===t)return e.toString()}return e}function m(t,e,n){t.Y.add(e),t._.has(e)||(t._.set(e,!0),t.tt?t.queue.write(()=>b(t,e,n)):t.queue.tick(()=>b(t,e,n)))}async function b(t,n,o,i,c,f){if(t._.delete(n),!t.et.has(n)){if(!(c=t.nt.get(n))){if((f=t.ot.get(n))&&!f["s-rn"])return void(f["s-rc"]=f["s-rc"]||[]).push(()=>{b(t,n,o)});c=function r(t,e,n,o,i,c,f,s){try{i=new(c=t.s(e).it),function l(t,e,n,o,i,c){t.ct.set(o,n),t.ft.has(n)||t.ft.set(n,{}),Object.entries(Object.assign({color:{type:String}},e.properties,{mode:{type:String}})).forEach(([e,f])=>{(function r(t,e,n,o,i,c,f,s,l){if(e.type||e.state){const r=t.ft.get(n);e.state||(!e.attr||void 0!==r[i]&&""!==r[i]||(s=c&&c.rt)&&W(l=s[e.attr])&&(r[i]=v(e.type,l)),n.hasOwnProperty(i)&&(void 0===r[i]&&(r[i]=v(e.type,n[i])),"mode"!==i&&delete n[i])),o.hasOwnProperty(i)&&void 0===r[i]&&(r[i]=o[i]),e.watchCallbacks&&(r[L+i]=e.watchCallbacks.slice()),w(o,i,function u(e){return(e=t.ft.get(t.ct.get(this)))&&e[i]},function a(n,o){(o=t.ct.get(this))&&(e.state||e.mutable)&&y(t,o,i,n,f)})}else e.method&&h(n,i,o[i].bind(o))})(t,f,n,o,e,i,c)})}(t,c,e,i,n,o),function u(t,e,n){if(e){const o=t.ct.get(n);e.forEach(e=>{n[e.method]={emit:n=>t.st(o,e.name,{bubbles:e.bubbles,composed:e.composed,cancelable:e.cancelable,detail:n})}})}}(t,c.events,i);try{if(f=t.lt.get(e)){for(s=0;s<f.length;s+=2)i[f[s]](f[s+1]);t.lt.delete(e)}}catch(n){t.ut(n,2,e)}}catch(n){i={},t.ut(n,7,e,!0)}return t.nt.set(e,i),i}(t,n,t.at.get(n),o)}(function s(t,n,o,i,c){try{const c=n.it.host,f=n.it.encapsulation,r="shadow"===f&&t.o.n;let s,l=o;if(r&&(l=o.shadowRoot),!o["s-rn"]){t.pt(t,t.o,n,o);const i=o["s-sc"];i&&(t.o.b(o,e(i,!0)),"scoped"===f&&t.o.b(o,e(i)))}if(i.render||i.hostData||c||s){t.dt=!0;const e=i.render&&i.render();let n;t.dt=!1;const c=t.vt.get(o)||{};c.v=l;const s=u(null,n,e);t.vt.set(o,t.render(o,c,s,r,f))}o["s-rn"]=!0,o["s-rc"]&&(o["s-rc"].forEach(t=>t()),o["s-rc"]=null)}catch(e){t.dt=!1,t.ut(e,8,o,!0)}})(t,t.s(n),n,c),n["s-init"]()}}function y(t,e,n,o,i,c){let f=t.ft.get(e);f||t.ft.set(e,f={});const r=f[n];if(o!==r&&(f[n]=o,c=t.nt.get(e))){{const t=f[L+n];if(t)for(let e=0;e<t.length;e++)try{c[t[e]].call(c,o,r,n)}catch(t){}}!t.dt&&e["s-rn"]&&m(t,e,i)}}function h(t,e,n){Object.defineProperty(t,e,{configurable:!0,value:n})}function w(t,e,n,o){Object.defineProperty(t,e,{configurable:!0,get:n,set:o})}function g(t,e,n,o,i,c){if(t.Y.delete(e),(i=t.ot.get(e))&&((o=i["s-ld"])&&((n=o.indexOf(e))>-1&&o.splice(n,1),o.length||i["s-init"]&&i["s-init"]()),t.ot.delete(e)),t.mt.length&&!t.Y.size)for(;c=t.mt.shift();)c()}function $(t,e,n,o,i){if(n.connectedCallback=function(){(function n(t,e,o,i){t.bt.has(o)||(t.bt.set(o,!0),function c(t,e){const n=t.s(e);n.z&&n.z.forEach(n=>{n.K||t.o.p(e,n.G,function o(t,e,n,i){return o=>{(i=t.nt.get(e))?i[n](o):((i=t.lt.get(e)||[]).push(n,o),t.lt.set(e,i))}}(t,e,n.J),n.X,n.V)})}(t,o)),t.et.delete(o),t.yt.has(o)||(o["s-id"]||(o["s-id"]=t.ht()),t.wt=!0,t.Y.add(o),t.yt.set(o,!0),function f(t,e,n){for(n=e;n=t.o.A(n);)if(t.C(n)){t.j.has(e)||(t.ot.set(e,n),(n["s-ld"]=n["s-ld"]||[]).push(e));break}}(t,o),t.queue.tick(()=>{t.at.set(o,function n(t,e,o,i,c){return o.mode||(o.mode=t.gt(o)),o["s-cr"]||t.D(o,k)||t.n&&1===e.e||(o["s-cr"]=t.g(""),o["s-cr"]["s-cn"]=!0,t.r(o,o["s-cr"],t.W(o)[0])),t.n||1!==e.e||(o.shadowRoot=o),1===e.e&&t.n&&!o.shadowRoot&&t.$t(o,{mode:"open"}),i={Mt:o["s-id"],rt:{}},e.l&&Object.keys(e.l).forEach(n=>{(c=e.l[n].F)&&(i.rt[c]=t.D(o,c))}),i}(t.o,e,o)),t.kt(e,o)}))})(t,e,this)},n.disconnectedCallback=function(){(function e(t,n,o){!t.O&&function i(t,e){for(;e;){if(!t.c(e))return 9!==t.L(e);e=t.c(e)}}(t.o,n)&&(t.et.set(n,!0),g(t,n),s(t.vt.get(n),!0),t.o.d(n),t.bt.delete(n),[t.ot,t.Ct,t.at].forEach(t=>t.delete(n)))})(t,this)},n["s-init"]=function(){(function e(t,n,o,i,c,f,r){if((c=t.nt.get(n))&&!t.et.has(n)&&(!n["s-ld"]||!n["s-ld"].length)){t.j.set(n,!0),(r=t.jt.has(n))||(t.jt.set(n,!0),n["s-ld"]=void 0,t.o.b(n,o));try{s(t.vt.get(n)),(f=t.Ct.get(n))&&(f.forEach(t=>t(n)),t.Ct.delete(n)),!r&&c.componentDidLoad&&c.componentDidLoad()}catch(e){t.ut(e,4,n)}g(t,n)}})(t,this,o)},n.forceUpdate=function(){m(t,this,i)},e.l){const o=Object.entries(e.l);{let t={};o.forEach(([e,{F:n}])=>{n&&(t[n]=e)}),t=Object.assign({},t),n.attributeChangedCallback=function(e,n,o){(function i(t,e,n,o){const i=t[E(n)];i&&(e[i]=o)})(t,this,e,o)}}(function c(t,e,n,o){e.forEach(([e,i])=>{const c=i.H;3&c?w(n,e,function n(){return(t.ft.get(this)||{})[e]},function n(c){y(t,this,e,v(i.Q,c),o)}):32===c&&h(n,e,N)})})(t,o,n,i)}}function M(t,e,n,o){return function(){const i=arguments;return function c(t,e,n){let o=e[n];const i=t.i.body;return i?(o||(o=i.querySelector(n)),o||(o=e[n]=t.k(n),t.x(i,o)),o.componentOnReady()):Promise.resolve()}(t,e,n).then(t=>t[o].apply(t,i))}}const k="ssrv",C="ssrc",j="$",x={},O={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},W=t=>null!=t,E=t=>t.toLowerCase(),N=()=>{},S="http://www.w3.org/1999/xlink";let A=!1;const R=[],T={forEach:(t,e)=>{t.forEach((t,n,o)=>e(a(t),n,o))},map:(t,e)=>t.map((t,n,o)=>(function i(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}})(e(a(t),n,o)))},L="wc-";(function D(t,e,o,i,c,f,s){function a(t,e){const n=t.t;o.customElements.get(n)||($(x,v[n]=t,e.prototype,f,d),e.observedAttributes=Object.values(t.l).map(t=>t.F).filter(t=>!!t),o.customElements.define(t.t,e))}const d=o.performance,v={html:{}},b={},y=o[t]=o[t]||{},h=function w(t,e,n){t.ael||(t.ael=((t,e,n,o)=>t.addEventListener(e,n,o)),t.rel=((t,e,n,o)=>t.removeEventListener(e,n,o)));const o=new WeakMap,i={i:n,n:!!n.documentElement.attachShadow,xt:!1,L:t=>t.nodeType,k:t=>n.createElement(t),M:(t,e)=>n.createElementNS(t,e),g:t=>n.createTextNode(t),Ot:t=>n.createComment(t),r:(t,e,n)=>t.insertBefore(e,n),N:t=>t.remove(),x:(t,e)=>t.appendChild(e),b:(t,e)=>{t.classList.add(e)},W:t=>t.childNodes,c:t=>t.parentNode,T:t=>t.nextSibling,q:t=>t.previousSibling,S:t=>E(t.nodeName),B:t=>t.textContent,R:(t,e)=>t.textContent=e,D:(t,e)=>t.getAttribute(e),Wt:(t,e,n)=>t.setAttribute(e,n),Et:(t,e,n,o)=>t.setAttributeNS(e,n,o),u:(t,e)=>t.removeAttribute(e),a:(t,e)=>t.hasAttribute(e),gt:e=>e.getAttribute("mode")||(t.Context||{}).mode,Nt:(t,o)=>"child"===o?t.firstElementChild:"parent"===o?i.A(t):"body"===o?n.body:"document"===o?n:"window"===o?e:t,p:(e,n,c,f,r,s,l,u)=>{const a=n;let p=e,d=o.get(e);if(d&&d[a]&&d[a](),"string"==typeof s?p=i.Nt(e,s):"object"==typeof s?p=s:(u=n.split(":")).length>1&&(p=i.Nt(e,u[0]),n=u[1]),!p)return;let v=c;(u=n.split(".")).length>1&&(n=u[0],v=(t=>{t.keyCode===O[u[1]]&&c(t)})),l=i.xt?{capture:!!f,passive:!!r}:!!f,t.ael(p,n,v,l),d||o.set(e,d={}),d[a]=(()=>{p&&t.rel(p,n,v,l),d[a]=null})},d:(t,e)=>{const n=o.get(t);n&&(e?n[e]&&n[e]():Object.keys(n).forEach(t=>{n[t]&&n[t]()}))},St:(t,n,o)=>{const i=new e.CustomEvent(n,o);return t&&t.dispatchEvent(i),i},A:(t,e)=>(e=i.c(t))&&11===i.L(e)?e.host:e,$t:(t,e)=>t.attachShadow(e)};try{e.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.xt=!0}))}catch(t){}return i}(y,o,i);e.isServer=e.isPrerender=!(e.isClient=!0),e.window=o,e.location=o.location,e.document=i,e.resourcesUrl=e.publicPath=c,e.enableListener=((t,e,n,o,i)=>(function c(t,e,n,o,i,f){if(e){const c=t.ct.get(e),r=t.s(c);if(r&&r.z)if(o){const o=r.z.find(t=>t.G===n);o&&t.o.p(c,n,t=>e[o.J](t),o.X,void 0===f?o.V:!!f,i)}else t.o.d(c,n)}})(x,t,e,n,o,i)),e.emit=((t,n,o)=>h.St(t,e.eventNameFn?e.eventNameFn(n):n,o)),y.h=u,y.Context=e;const g=o["s-defined"]=o["s-defined"]||{};let C=0;const x={o:h,At:a,st:e.emit,s:t=>v[h.S(t)],Rt:t=>e[t],isClient:!0,C:t=>!(!g[h.S(t)]&&!x.s(t)),ht:()=>t+C++,ut:(t,e,n)=>void 0,Tt:t=>(function e(t,n,o){return{create:M(t,n,o,"create"),componentOnReady:M(t,n,o,"componentOnReady")}})(h,b,t),queue:e.queue=function W(t,e){function n(e){return n=>{e.push(n),v||(v=!0,t.raf(c))}}function o(t){for(let e=0;e<t.length;e++)try{t[e](f())}catch(t){}t.length=0}function i(t,e){let n,o=0;for(;o<t.length&&(n=f())<e;)try{t[o++](n)}catch(t){}o===t.length?t.length=0:0!==o&&t.splice(0,o)}function c(){d++,o(u);const e=r?f()+7*Math.ceil(d*(1/22)):Infinity;i(a,e),i(p,e),a.length>0&&(p.push(...a),a.length=0),(v=u.length+a.length+p.length>0)?t.raf(c):d=0}const f=()=>e.performance.now(),r=!1!==t.asyncQueue,s=Promise.resolve(),l=[],u=[],a=[],p=[];let d=0,v=!1;return t.raf||(t.raf=e.requestAnimationFrame.bind(e)),{tick(t){l.push(t),1===l.length&&s.then(()=>o(l))},read:n(u),write:n(a)}}(y,o),kt:function N(t,e,n){if(t.it)m(x,e,d);else{const n="string"==typeof t.Z?t.Z:t.Z[e.mode],o=!h.n;import(c+n+(o?".sc":"")+".entry.js").then(n=>{try{t.it=n[(t=>E(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""))(t.t)],function o(t,e,n,i,c,f){if(i){const n=e.t+(c||j);if(!e[n]){const o=t.k("template");e[n]=o,o.innerHTML=`<style>${i}</style>`,t.x(t.i.head,o)}}}(h,t,t.e,t.it.style,t.it.styleMode),m(x,e,d)}catch(e){t.it=class{}}},t=>void 0)}},dt:!1,tt:!1,O:!1,pt:n,ot:new WeakMap,f:new WeakMap,yt:new WeakMap,bt:new WeakMap,jt:new WeakMap,j:new WeakMap,ct:new WeakMap,at:new WeakMap,nt:new WeakMap,et:new WeakMap,_:new WeakMap,Ct:new WeakMap,lt:new WeakMap,vt:new WeakMap,ft:new WeakMap,Y:new Set,mt:[]};y.onReady=(()=>new Promise(t=>x.queue.write(()=>x.Y.size?x.mt.push(t):t()))),x.render=r(x,h);const S=h.i.documentElement;return S["s-ld"]=[],S["s-rn"]=!0,S["s-init"]=(()=>{x.j.set(S,y.loaded=x.tt=!0),h.St(o,"appload",{detail:{namespace:t}})}),function A(t,e,n){const o=n.querySelectorAll(`[${k}]`),i=o.length;let c,f,r,s,u,a;if(i>0)for(t.j.set(n,!0),s=0;s<i;s++)for(c=o[s],f=e.D(c,k),(r={}).vtag=e.S(r.v=c),t.vt.set(c,r),u=0,a=c.childNodes.length;u<a;u++)l(e,c.childNodes[u],r,f,!0)}(x,h,S),s.map(p).forEach(t=>a(t,class extends HTMLElement{})),x.wt||S["s-init"](),function R(t,e,n,o,i,c){if(e.componentOnReady=((e,n)=>{if(!e.nodeName.includes("-"))return n(null),!1;const o=t.s(e);if(o)if(t.j.has(e))n(e);else{const o=t.Ct.get(e)||[];o.push(n),t.Ct.set(e,o)}return!!o}),i){for(c=i.length-1;c>=0;c--)e.componentOnReady(i[c][0],i[c][1])&&i.splice(c,1);for(c=0;c<o.length;c++)if(!n[o[c]].componentOnReady)return;for(c=0;c<i.length;c++)i[c][1](null);i.length=0}}(x,y,o,o["s-apps"],o["s-cr"]),y.initialized=!0,x})(namespace,Context,window,document,resourcesUrl,hydratedCssClass,components);
})(window,document,{},"amiviewer","hydrated",[["ami-mesh-viewer","vukdfon6",1,[["reset",32],["resize",32],["series",1,0,1,2]],1],["ami-slices-viewer","vukdfon6",1,[["reset",32],["resize",32],["series",1,0,1,2]],1],["ami-viewer","vukdfon6",1,[["mode",1,0,1,2],["reset",32],["resize",32],["series",1,0,1,2]],1,[["onViewerLoaded","loaded"]]],["ami-volume-viewer","vukdfon6",1,[["reset",32],["resize",32],["series",1,0,1,2]],1]]);