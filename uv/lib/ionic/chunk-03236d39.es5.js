Ionic.loadBundle("chunk-03236d39.js",["exports"],function(n){window;var t="ion-focused",e=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"];n.startFocusVisible=function(n){var o=[],i=!0;function s(n){o.forEach(function(n){return n.classList.remove(t)}),n.forEach(function(n){return n.classList.add(t)}),o=n}n.addEventListener("keydown",function(n){(i=e.includes(n.key))||s([])});var c=function(){i=!1,s([])};n.addEventListener("focusin",function(n){i&&n.composedPath&&s(n.composedPath().filter(function(n){return!!n.classList&&n.classList.contains("ion-focusable")}))}),n.addEventListener("focusout",function(){n.activeElement===n.body&&s([])}),n.addEventListener("touchstart",c),n.addEventListener("mousedown",c)}});