import{r as i,d as s,c as t,h as n,H as o,e}from"./p-d5219e04.js";import{b as a}from"./p-1074393c.js";import{B as r,d as c,e as p,f as d}from"./p-8754b5fd.js";import{g as h}from"./p-353a032e.js";import{s as l}from"./p-cae2ca23.js";const m=(i,s)=>{const t=new i,n=new i;n.addElement(s.querySelector("ion-backdrop"));const o=new i;return o.addElement(s.querySelector(".loading-wrapper")),n.fromTo("opacity",.01,.3),o.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(t.addElement(s).easing("ease-in-out").duration(200).add(n).add(o))},g=(i,s)=>{const t=new i,n=new i;n.addElement(s.querySelector("ion-backdrop"));const o=new i;return o.addElement(s.querySelector(".loading-wrapper")),n.fromTo("opacity",.3,0),o.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(t.addElement(s).easing("ease-in-out").duration(200).add(n).add(o))},u=(i,s)=>{const t=new i,n=new i;n.addElement(s.querySelector("ion-backdrop"));const o=new i;return o.addElement(s.querySelector(".loading-wrapper")),n.fromTo("opacity",.01,.32),o.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(t.addElement(s).easing("ease-in-out").duration(200).add(n).add(o))},w=(i,s)=>{const t=new i,n=new i;n.addElement(s.querySelector("ion-backdrop"));const o=new i;return o.addElement(s.querySelector(".loading-wrapper")),n.fromTo("opacity",.32,0),o.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(t.addElement(s).easing("ease-in-out").duration(200).add(n).add(o))};class L{constructor(n){i(this,n),this.presented=!1,this.mode=s(this),this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,r)},this.didPresent=t(this,"ionLoadingDidPresent",7),this.willPresent=t(this,"ionLoadingWillPresent",7),this.willDismiss=t(this,"ionLoadingWillDismiss",7),this.didDismiss=t(this,"ionLoadingDidDismiss",7)}componentWillLoad(){if(void 0===this.spinner){const i=s(this);this.spinner=a.get("loadingSpinner",a.get("spinner","ios"===i?"lines":"crescent"))}}async present(){await c(this,"loadingEnter",m,u,void 0),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(),this.duration+10))}dismiss(i,s){return this.durationTimeout&&clearTimeout(this.durationTimeout),p(this,i,s,"loadingLeave",g,w)}onDidDismiss(){return d(this.el,"ionLoadingDidDismiss")}onWillDismiss(){return d(this.el,"ionLoadingWillDismiss")}render(){const{message:i,spinner:t}=this,e=s(this);return n(o,{onIonBackdropTap:this.onBackdropTap,style:{zIndex:`${4e4+this.overlayIndex}`},class:Object.assign({},h(this.cssClass),{[e]:!0,"loading-translucent":this.translucent})},n("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),n("div",{class:"loading-wrapper",role:"dialog"},t&&n("div",{class:"loading-spinner"},n("ion-spinner",{name:t})),i&&n("div",{class:"loading-content",innerHTML:l(i)})))}get el(){return e(this)}static get style(){return".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-md, .spinner-circles.sc-ion-loading-md, .spinner-crescent.sc-ion-loading-md, .spinner-dots.sc-ion-loading-md, .spinner-lines.sc-ion-loading-md, .spinner-lines-small.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50,#f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary,#3880ff);color:var(--ion-color-step-850,#262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0,0,0,.4);box-shadow:0 16px 20px rgba(0,0,0,.4)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}}export{L as ion_loading};