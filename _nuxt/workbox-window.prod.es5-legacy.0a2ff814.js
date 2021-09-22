System.register([],(function(e){"use strict";return{execute:function(){e("messageSW",t);try{self["workbox:window:5.1.4"]&&_()}catch(t){}function t(e,t){return new Promise((function(r){var n=new MessageChannel;n.port1.onmessage=function(e){r(e.data)},e.postMessage(t,[n.port2])}))}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function n(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}try{self["workbox:core:5.1.4"]&&_()}catch(t){}var o=function(){var e=this;this.promise=new Promise((function(t,r){e.resolve=t,e.reject=r}))};function i(e,t){var r=location.href;return new URL(e,r).href===new URL(t,r).href}var a=function(e,t){this.type=e,Object.assign(this,t)};function s(e,t,r){return r?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function c(){}function u(e,t){if(!t)return e&&e.then?e.then(c):Promise.resolve()}e("Workbox",function(e){var r,n;function c(t,r){var n,c;return void 0===r&&(r={}),(n=e.call(this)||this).t={},n.i=0,n.o=new o,n.u=new o,n.s=new o,n.v=0,n.h=new Set,n.l=function(){var e=n.m,t=e.installing;n.i>0||!i(t.scriptURL,n.g)||performance.now()>n.v+6e4?(n.p=t,e.removeEventListener("updatefound",n.l)):(n.P=t,n.h.add(t),n.o.resolve(t)),++n.i,t.addEventListener("statechange",n.S)},n.S=function(e){var t=n.m,r=e.target,o=r.state,i=r===n.p,s=i?"external":"",c={sw:r,originalEvent:e};!i&&n.j&&(c.isUpdate=!0),n.dispatchEvent(new a(s+o,c)),"installed"===o?n.A=self.setTimeout((function(){"installed"===o&&t.waiting===r&&n.dispatchEvent(new a(s+"waiting",c))}),200):"activating"===o&&(clearTimeout(n.A),i||n.u.resolve(r))},n.O=function(e){var t=n.P;t===navigator.serviceWorker.controller&&(n.dispatchEvent(new a("controlling",{sw:t,originalEvent:e,isUpdate:n.j})),n.s.resolve(t))},n.U=(c=function(e){var t=e.data,r=e.source;return s(n.getSW(),(function(){n.h.has(r)&&n.dispatchEvent(new a("message",{data:t,sw:r,originalEvent:e}))}))},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return Promise.resolve(c.apply(this,e))}catch(e){return Promise.reject(e)}}),n.g=t,n.t=r,navigator.serviceWorker.addEventListener("message",n.U),n}n=e,(r=c).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n;var v,f=c.prototype;return f.register=function(e){var t=(void 0===e?{}:e).immediate,r=void 0!==t&&t;try{var n=this;return function(e,t){var r=e();return r&&r.then?r.then(t):t()}((function(){if(!r&&"complete"!==document.readyState)return u(new Promise((function(e){return window.addEventListener("load",e)})))}),(function(){return n.j=Boolean(navigator.serviceWorker.controller),n.I=n.M(),s(n.R(),(function(e){n.m=e,n.I&&(n.P=n.I,n.u.resolve(n.I),n.s.resolve(n.I),n.I.addEventListener("statechange",n.S,{once:!0}));var t=n.m.waiting;return t&&i(t.scriptURL,n.g)&&(n.P=t,Promise.resolve().then((function(){n.dispatchEvent(new a("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),n.P&&(n.o.resolve(n.P),n.h.add(n.P)),n.m.addEventListener("updatefound",n.l),navigator.serviceWorker.addEventListener("controllerchange",n.O,{once:!0}),n.m}))}))}catch(e){return Promise.reject(e)}},f.update=function(){try{return this.m?u(this.m.update()):void 0}catch(t){return Promise.reject(t)}},f.getSW=function(){try{return void 0!==this.P?this.P:this.o.promise}catch(t){return Promise.reject(t)}},f.messageSW=function(e){try{return s(this.getSW(),(function(r){return t(r,e)}))}catch(t){return Promise.reject(t)}},f.M=function(){var e=navigator.serviceWorker.controller;return e&&i(e.scriptURL,this.g)?e:void 0},f.R=function(){try{var e=this;return function(e,t){try{var r=e()}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}((function(){return s(navigator.serviceWorker.register(e.g,e.t),(function(t){return e.v=performance.now(),t}))}),(function(e){throw e}))}catch(e){return Promise.reject(e)}},(v=[{key:"active",get:function(){return this.u.promise}},{key:"controlling",get:function(){return this.s.promise}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(c.prototype,v),c}(function(){function e(){this.k=new Map}var t=e.prototype;return t.addEventListener=function(e,t){this.B(e).add(t)},t.removeEventListener=function(e,t){this.B(e).delete(t)},t.dispatchEvent=function(e){e.target=this;for(var t,r=n(this.B(e.type));!(t=r()).done;)(0,t.value)(e)},t.B=function(e){return this.k.has(e)||this.k.set(e,new Set),this.k.get(e)},e}()))}}}));
