System.register(["./p-905de140.system.js","./p-45890bdd.system.js","./p-af5b12d0.system.js"],function(e){"use strict";var r,t,n,s,i,a;return{setters:[function(e){r=e.r;t=e.d;n=e.h;s=e.H},function(e){i=e.b},function(e){a=e.c}],execute:function(){var u={lines:{dur:1e3,lines:12,fn:function(e,r,t){var n="rotate("+(30*r+(r<6?180:-180))+"deg)";var s=e*r/t-e+"ms";return{y1:17,y2:29,style:{transform:n,"animation-delay":s}}}},"lines-small":{dur:1e3,lines:12,fn:function(e,r,t){var n="rotate("+(30*r+(r<6?180:-180))+"deg)";var s=e*r/t-e+"ms";return{y1:12,y2:20,style:{transform:n,"animation-delay":s}}}},bubbles:{dur:1e3,circles:9,fn:function(e,r,t){var n=e*r/t-e+"ms";var s=2*Math.PI*r/t;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:function(e,r,t){var n=r/t;var s=e*n-e+"ms";var i=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":s}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(e,r){var t=-(110*r)+"ms";return{r:6,style:{left:9-9*r+"px","animation-delay":t}}}}};var o=u;var l=function(){function e(e){r(this,e);this.paused=false}e.prototype.getName=function(){var e=this.name||i.get("spinner");var r=t(this);if(e){return e}return r==="ios"?"lines":"crescent"};e.prototype.render=function(){var e;var r=t(this);var u=this.getName();var l=o[u]||o["lines"];var d=typeof this.duration==="number"&&this.duration>10?this.duration:l.dur;var y=[];if(l.circles!==undefined){for(var v=0;v<l.circles;v++){y.push(c(l,d,v,l.circles))}}else if(l.lines!==undefined){for(var v=0;v<l.lines;v++){y.push(f(l,d,v,l.lines))}}return n(s,{class:Object.assign({},a(this.color),(e={},e[r]=true,e["spinner-"+u]=true,e["spinner-paused"]=!!this.paused||i.getBoolean("_testing"),e))},y)};Object.defineProperty(e,"style",{get:function(){return":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg,[dir=rtl] svg{left:unset;right:unset;right:0;-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-paused) svg{-webkit-animation-play-state:paused;animation-play-state:paused}\@-webkit-keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}\@keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}\@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}\@keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}\@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}\@keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}"},enumerable:true,configurable:true});return e}();e("ion_spinner",l);var c=function(e,r,t,s){var i=e.fn(r,t,s);i.style["animation-duration"]=r+"ms";return n("svg",{viewBox:"0 0 64 64",style:i.style},n("circle",{transform:"translate(32,32)",r:i.r}))};var f=function(e,r,t,s){var i=e.fn(r,t,s);i.style["animation-duration"]=r+"ms";return n("svg",{viewBox:"0 0 64 64",style:i.style},n("line",{transform:"translate(32,32)",y1:i.y1,y2:i.y2}))}}}});