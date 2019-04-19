aleph.loadBundle("ntyhmnnl",["exports","./chunk-010c0ff7.js"],function(e,n){var t=window.aleph.h,i=function(){function e(){this._debounceRangeMS=250,this.boundingBoxVisible=!1,this.displayMode=n.DisplayMode.MESH,this.optionsEnabled=!0,this.optionsVisible=!0,this.orientation=n.Orientation.CORONAL,this.graphEnabled=!1,this.graphVisible=!0}return e.prototype.watchStackhelper=function(){this.slicesIndex=void 0,this.slicesWindowCenter=void 0,this.slicesWindowWidth=void 0,this.volumeSteps=void 0,this.volumeWindowCenter=void 0,this.volumeWindowWidth=void 0},e.prototype._boundingBoxVisible=function(e){this.boundingBoxVisible=e,this.boundingBoxVisibleChanged.emit(e)},e.prototype._displayMode=function(e){this.displayMode=e,this.displayModeChanged.emit(e)},e.prototype._graphEnabled=function(e){this.graphEnabled=e,this.graphEnabledChanged.emit(e)},e.prototype._orientation=function(e){this.orientation=e,this.orientationChanged.emit(e)},e.prototype._slicesIndex=function(e){this.slicesIndex=e,this.slicesIndexChanged.emit(e)},e.prototype._slicesWindowCenter=function(e){this.slicesWindowCenter=e,this.slicesWindowCenterChanged.emit(e)},e.prototype._slicesWindowWidth=function(e){this.slicesWindowWidth=e,this.slicesWindowWidthChanged.emit(e)},e.prototype._volumeSteps=function(e){this.volumeSteps=e,this.volumeStepsChanged.emit(e)},e.prototype._volumeWindowCenter=function(e){this.volumeWindowCenter=e,this.volumeWindowCenterChanged.emit(e)},e.prototype._volumeWindowWidth=function(e){this.volumeWindowWidth=e,this.volumeWindowWidthChanged.emit(e)},e.prototype.renderDisplayModeToggle=function(){var e=this;return this.displayMode!==n.DisplayMode.MESH?t("ion-item",{id:"mode"},t("ion-icon",{name:"eye",slot:"start"}),t("select",{slot:"end",onChange:function(n){return e._displayMode(n.srcElement.value)}},t("option",{selected:this.displayMode===n.DisplayMode.SLICES,value:n.DisplayMode.SLICES},"Slices"),t("option",{selected:this.displayMode===n.DisplayMode.VOLUME,value:n.DisplayMode.VOLUME},"Volume"))):null},e.prototype.renderNodesToggle=function(){var e=this;return this.graphVisible?t("ion-item",null,t("ion-icon",{name:"add-circle",slot:"start"}),t("ion-toggle",{slot:"end",checked:this.graphEnabled,onIonChange:function(n){return e._graphEnabled(n.detail.checked)}})):null},e.prototype.renderBoundingBoxEnabled=function(){var e=this;return t("ion-item",null,t("ion-icon",{name:"cube",slot:"start"}),t("ion-toggle",{slot:"end",checked:this.boundingBoxVisible,onIonChange:function(n){return e._boundingBoxVisible(n.detail.checked)}}))},e.prototype._reverseNumber=function(e,n,t){return t+n-e},e.prototype.renderOptions=function(){var e=this;switch(this.displayMode){case n.DisplayMode.SLICES:if(!this.stackhelper||this.stackhelper&&!this.stackhelper.slice)break;var i,o=Object.keys(n.Orientation).indexOf(this.orientation.toUpperCase()),s=this.stackhelper.stack.zCosine;i=1===Math.round(s.x)?1:1===Math.round(s.y)?2:0;var a,l=Math.round((o+i)%3),d=Math.round((o+i+2)%3),r=this.stackhelper.stack.dimensionsIJK[Object.keys(this.stackhelper.stack.dimensionsIJK)[d]]-1;a=d!==this._lastStackOrientationIndex||void 0===this.slicesIndex?Math.floor(r/2):this.slicesIndex,this._lastStackOrientationIndex=d;var h=this.stackhelper.stack.minMax[1]-this.stackhelper.stack.minMax[0],c=void 0;c=void 0===this.slicesWindowWidth?h/2:this.slicesWindowWidth;var u=this.stackhelper.stack.minMax[0],p=this.stackhelper.stack.minMax[1],m=void 0;return m=void 0===this.slicesWindowCenter?p/2:this.slicesWindowCenter,this.stackhelper.orientation=l,this.stackhelper.index=a,this.stackhelper.slice.windowWidth=c,this.stackhelper.slice.windowCenter=m,this.optionsVisible&&this.optionsEnabled?t("div",null,this.renderBoundingBoxEnabled(),t("ion-item",null,t("ion-icon",{name:"swap",slot:"start"}),t("ion-range",{slot:"end",min:"0",max:r,value:a,onIonChange:function(n){return e._slicesIndex(n.detail.value)}})),t("ion-item",null,t("ion-icon",{name:"compass",slot:"start"}),t("select",{slot:"end",onChange:function(n){return e._orientation(n.srcElement.value)}},t("option",{selected:this.orientation===n.Orientation.CORONAL,value:n.Orientation.CORONAL},"Coronal"),t("option",{selected:this.orientation===n.Orientation.SAGGITAL,value:n.Orientation.SAGGITAL},"Saggital"),t("option",{selected:this.orientation===n.Orientation.AXIAL,value:n.Orientation.AXIAL},"Axial"))),t("ion-item",null,t("ion-icon",{name:"sunny",slot:"start"}),t("ion-range",{slot:"end",min:u,max:p,value:this._reverseNumber(m,u,p),onIonChange:function(n){return e._slicesWindowCenter(e._reverseNumber(n.detail.value,u,p))}})),t("ion-item",null,t("ion-icon",{name:"contrast",slot:"start"}),t("ion-range",{slot:"end",min:1,max:h,value:this._reverseNumber(c,1,h),onIonChange:function(n){return e._slicesWindowWidth(e._reverseNumber(n.detail.value,1,h))}}))):null;case n.DisplayMode.VOLUME:if(!this.stackhelper)break;var b,g=this.stackhelper.stack.minMax[1]-this.stackhelper.stack.minMax[0];c=void 0,c=void 0===this.volumeWindowWidth?g/2:this.volumeWindowWidth;var v=this.stackhelper.stack.minMax[0],C=this.stackhelper.stack.minMax[1];return m=void 0,m=void 0===this.volumeWindowCenter?C/2:this.volumeWindowCenter,this.stackhelper.steps=b=void 0===this.volumeSteps?16:this.volumeSteps,this.stackhelper.windowWidth=c,this.stackhelper.windowCenter=m,t("div",null,this.renderBoundingBoxEnabled(),t("ion-item",null,t("ion-icon",{name:"swap",slot:"start"}),t("ion-range",{slot:"end",min:1,max:128,value:b,debounce:this._debounceRangeMS,onIonChange:function(n){return e._volumeSteps(n.srcElement.value)}})),t("ion-item",null,t("ion-icon",{name:"sunny",slot:"start"}),t("ion-range",{slot:"end",min:v,max:C,value:m,debounce:this._debounceRangeMS,onIonChange:function(n){return e._volumeWindowCenter(n.srcElement.value)}})),t("ion-item",null,t("ion-icon",{name:"contrast",slot:"start"}),t("ion-range",{slot:"end",min:1,max:g,value:c,debounce:this._debounceRangeMS,onIonChange:function(n){return e._volumeWindowWidth(n.srcElement.value)}})));case n.DisplayMode.MESH:return this.renderBoundingBoxEnabled()}return null},e.prototype.render=function(){return[this.renderDisplayModeToggle(),this.renderNodesToggle(),this.renderOptions()]},Object.defineProperty(e,"is",{get:function(){return"al-control-panel"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{boundingBoxVisible:{type:Boolean,attr:"bounding-box-visible",mutable:!0},displayMode:{type:String,attr:"display-mode",mutable:!0},graphEnabled:{type:Boolean,attr:"graph-enabled",mutable:!0},graphVisible:{type:Boolean,attr:"graph-visible",mutable:!0},optionsEnabled:{type:Boolean,attr:"options-enabled",mutable:!0},optionsVisible:{type:Boolean,attr:"options-visible",mutable:!0},orientation:{type:String,attr:"orientation",mutable:!0},slicesIndex:{type:Number,attr:"slices-index",mutable:!0},slicesWindowCenter:{type:Number,attr:"slices-window-center",mutable:!0},slicesWindowWidth:{type:Number,attr:"slices-window-width",mutable:!0},stackhelper:{type:"Any",attr:"stackhelper",mutable:!0,watchCallbacks:["watchStackhelper"]},volumeSteps:{type:Number,attr:"volume-steps",mutable:!0},volumeWindowCenter:{type:Number,attr:"volume-window-center",mutable:!0},volumeWindowWidth:{type:Number,attr:"volume-window-width",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"boundingBoxVisibleChanged",method:"boundingBoxVisibleChanged",bubbles:!0,cancelable:!0,composed:!0},{name:"displayModeChanged",method:"displayModeChanged",bubbles:!0,cancelable:!0,composed:!0},{name:"optionsEnabledChanged",method:"optionsEnabledChanged",bubbles:!0,cancelable:!0,composed:!0},{name:"orientationChanged",method:"orientationChanged",bubbles:!0,cancelable:!0,composed:!0},{name:"slicesIndexChanged",method:"slicesIndexChanged",bubbles:!0,cancelable:!0,composed:!0},{name:"slicesWindowCenterChanged",method:"slicesWindowCenterChanged",bubbles:!0,cancelable:!0,composed:!0},{name:"slicesWindowWidthChanged",method:"slicesWindowWidthChanged",bubbles:!0,cancelable:!0,composed:!0},{name:"graphEnabledChanged",method:"graphEnabledChanged",bubbles:!0,cancelable:!0,composed:!0},{name:"volumeStepsChanged",method:"volumeStepsChanged",bubbles:!0,cancelable:!0,composed:!0},{name:"volumeWindowCenterChanged",method:"volumeWindowCenterChanged",bubbles:!0,cancelable:!0,composed:!0},{name:"volumeWindowWidthChanged",method:"volumeWindowWidthChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-item{--border-width:0 0 0 0;--inner-border-width:0 0 0 0}ion-item select{padding:5px;min-width:100px}"},enumerable:!0,configurable:!0}),e}();e.AlControlPanel=i,Object.defineProperty(e,"__esModule",{value:!0})});