var requirejs,require,define;(function(e){function h(e,t){return f.call(e,t)}function p(e,t){var n,r,i,s,o,a,f,l,h,p,d,v=t&&t.split("/"),m=u.map,g=m&&m["*"]||{};if(e&&e.charAt(0)===".")if(t){v=v.slice(0,v.length-1),e=e.split("/"),o=e.length-1,u.nodeIdCompat&&c.test(e[o])&&(e[o]=e[o].replace(c,"")),e=v.concat(e);for(h=0;h<e.length;h+=1){d=e[h];if(d===".")e.splice(h,1),h-=1;else if(d===".."){if(h===1&&(e[2]===".."||e[0]===".."))break;h>0&&(e.splice(h-1,2),h-=2)}}e=e.join("/")}else e.indexOf("./")===0&&(e=e.substring(2));if((v||g)&&m){n=e.split("/");for(h=n.length;h>0;h-=1){r=n.slice(0,h).join("/");if(v)for(p=v.length;p>0;p-=1){i=m[v.slice(0,p).join("/")];if(i){i=i[r];if(i){s=i,a=h;break}}}if(s)break;!f&&g&&g[r]&&(f=g[r],l=h)}!s&&f&&(s=f,a=l),s&&(n.splice(0,a,s),e=n.join("/"))}return e}function d(t,r){return function(){return n.apply(e,l.call(arguments,0).concat([t,r]))}}function v(e){return function(t){return p(t,e)}}function m(e){return function(t){s[e]=t}}function g(n){if(h(o,n)){var r=o[n];delete o[n],a[n]=!0,t.apply(e,r)}if(!h(s,n)&&!h(a,n))throw new Error("No "+n);return s[n]}function y(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function b(e){return function(){return u&&u.config&&u.config[e]||{}}}var t,n,r,i,s={},o={},u={},a={},f=Object.prototype.hasOwnProperty,l=[].slice,c=/\.js$/;r=function(e,t){var n,r=y(e),i=r[0];return e=r[1],i&&(i=p(i,t),n=g(i)),i?n&&n.normalize?e=n.normalize(e,v(t)):e=p(e,t):(e=p(e,t),r=y(e),i=r[0],e=r[1],i&&(n=g(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},i={require:function(e){return d(e)},exports:function(e){var t=s[e];return typeof t!="undefined"?t:s[e]={}},module:function(e){return{id:e,uri:"",exports:s[e],config:b(e)}}},t=function(t,n,u,f){var l,c,p,v,y,b=[],w=typeof u,E;f=f||t;if(w==="undefined"||w==="function"){n=!n.length&&u.length?["require","exports","module"]:n;for(y=0;y<n.length;y+=1){v=r(n[y],f),c=v.f;if(c==="require")b[y]=i.require(t);else if(c==="exports")b[y]=i.exports(t),E=!0;else if(c==="module")l=b[y]=i.module(t);else if(h(s,c)||h(o,c)||h(a,c))b[y]=g(c);else{if(!v.p)throw new Error(t+" missing "+c);v.p.load(v.n,d(f,!0),m(c),{}),b[y]=s[c]}}p=u?u.apply(s[t],b):undefined;if(t)if(l&&l.exports!==e&&l.exports!==s[t])s[t]=l.exports;else if(p!==e||!E)s[t]=p}else t&&(s[t]=u)},requirejs=require=n=function(s,o,a,f,l){if(typeof s=="string")return i[s]?i[s](o):g(r(s,o).f);if(!s.splice){u=s,u.deps&&n(u.deps,u.callback);if(!o)return;o.splice?(s=o,o=a,a=null):s=e}return o=o||function(){},typeof a=="function"&&(a=f,f=l),f?t(e,s,o,a):setTimeout(function(){t(e,s,o,a)},4),n},n.config=function(e){return n(e)},requirejs._defined=s,define=function(e,t,n){t.splice||(n=t,t=[]),!h(s,e)&&!h(o,e)&&(o[e]=[e,t,n])},define.amd={jQuery:!0}})(),define("almond",function(){}),define("../libs/utils/utils",[],function(){"use strict";function e(e,t,n){var r,i="<object",s,o,u=t||{},a=n||{};u.type="application/x-shockwave-flash",window.ActiveXObject?(u.classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",a.movie=e):u.data=e;for(r in u)i+=" "+r+'="'+u[r]+'"';i+=">";for(r in a)i+='<param name="'+r+'" value="'+a[r]+'" />';return i+="</object>",s=document.createElement("div"),s.innerHTML=i,o=s.firstChild,s.removeChild(o),o}return{createSwf:e}}),function(e,t){Function.prototype.throttle=function(e,n){var r=this,i=0,s;return e===t&&(e=100),function(){var t=this,o=arguments,u=function(){i=new Date,r.apply(t,o)};s&&(clearTimeout(s),s=null);var l=new Date-i;l>e?u():n||(s=setTimeout(u,e-l))}},Function.prototype.debounce=function(e){var n=this,r;return e===t&&(e=100),function(){var t=this,i=arguments;r&&(clearTimeout(r),r=null),r=setTimeout(function(){n.apply(t,i)},e)}}}(this),define("../../node_modules/js-throttle-debounce/build/js-throttle-debounce.min.js",function(){}),define("app",["../libs/utils/utils","../../node_modules/js-throttle-debounce/build/js-throttle-debounce.min.js"],function(e){"use strict";var t={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"},n=function(){this.options={baseColor:[0,.7,.89],greetings:["Hey","你好","Salut","Hallo","Shalom","Ciào","안녕","Olá","Hej","Xin chào"],animEndEventName:t[Modernizr.prefixed("animation")],support:Modernizr.cssanimations,prevScroll:0,headerTop:0}};n.prototype={init:function(){this.bindEvents(),this.setupPage()},el:{styles:$("#custom-styles"),colored:{paths:$(".colored-svg path"),bgs:$(".colored-bg")},header:$("#page-header"),breadcrumb:$("#page-breadcrumb"),homePage:$("#home-page"),greeting:$("#intro-greeting"),portfolioPage:$("#portfolio-page"),entries:$("#portfolio > section")},bindEvents:function(){$("main").on("scroll",".page.active",function(){this.checkHeader.throttle(100)}.bind(this)),$(window).on("hashchange",this.hashChange.bind(this)),this.el.portfolioPage.on("click",".swf-trigger",this.showSwf.bind(this))},setupPage:function(){this.hashChange()},setGreeting:function(){var e=this.options.greetings[Math.floor(Math.random()*this.options.greetings.length)];this.el.greeting.text(e).show()},checkHeader:function(e){var t=e.currentTarget.scrollTop;this.options.headerHeight===void 0&&(this.options.headerHeight=this.el.header.outerHeight());var n=this.options.headerTop+(this.options.prevScroll-t);n>=0?n=0:n<=-this.options.headerHeight&&(n=-this.options.headerHeight),n!==this.options.headerTop&&(this.el.header.css("transform","translate3d(0px, "+n+"px, 0px)"),this.options.headerTop=n),this.options.prevScroll=t},hashChange:function(e){var t=window.location.hash.indexOf("/")==-1?"":window.location.hash.split("/")[1];if(t==="")this.el.breadcrumb.removeClass("active"),this.hideSwfs(),this.setGreeting(),window.location.hash!=="#!"&&window.location.hash!=="#"?window.location.replace("#!"):this.changePage(this.el.homePage);else{var n=t.split("-").join(" ");this.el.breadcrumb.find("span").html("&nbsp;&nbsp;&raquo;&nbsp;&nbsp;"+n).end().addClass("active"),this.el.portfolioPage.find("section:visible").hide();var r=this.el.portfolioPage.find('[data-entry="'+t+'"]');r.length!==0?(r.show(),this.changePage(this.el.portfolioPage)):window.location.replace("#!")}},loadImages:function(e){if(e.length===0)return;e.find("section:visible img[data-src]").each(function(e){var t=$(this);t.css("opacity",0).on("load",function(){$(this).addClass("show")}).attr("src",t.data("src"))})},changePage:function(e){var t=$(".page.active"),n=this.options.animEndEventName,r=this;if(e.length===0||t[0]===e[0])return;$("body").css("background-color",$("a").first().css("color")),e.data("originalClass")===void 0&&e.data("originalClass",e[0].className);if(t.length===0){e.addClass("active"),this.loadImages(e);return}var i=t.index()<e.index()?["Left","Right"]:["Right","Left"],s="page-moveTo"+i[0],o="page-moveFrom"+i[1],u=function(){t.attr("class",t.data("originalClass")),e.attr("class",e.data("originalClass")),e.scrollTop(0).trigger("scroll"),t.off(n).addClass(s).on(n,function(){t.attr("class",t.data("originalClass")).off(n)}),e.off(n).addClass("active "+o).on(n,function(){e.removeClass(o).off(n),r.loadImages(e)})};this.options.animEndEventName===void 0?setTimeout(u,10):u()},showSwf:function(t){t.preventDefault();var n=$(t.currentTarget).data("swfid");if(!n)return;var r=$('img[data-swfpreview="'+n+'"]'),i=$('div[data-swfid="'+n+'"]'),s=i.data("url"),o=i.data("width"),u=i.data("height");r.hide();var a=e.createSwf(s,{width:o,height:u},{wmode:"transparent"});i.html(a).show()},hideSwfs:function(){var e=$("div[data-swfid]");e.each(function(){var e=$(this),t=e.data("swfid");$('img[data-swfpreview="'+t+'"]').show(),e.empty()})}};var r=new n;return r}),function(){"use strict";function e(t,r){function s(e,t){return function(){return e.apply(t,arguments)}}var i;r=r||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=r.touchBoundary||10,this.layer=t,this.tapDelay=r.tapDelay||200,this.tapTimeout=r.tapTimeout||700;if(e.notNeeded(t))return;var o=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],u=this;for(var a=0,f=o.length;a<f;a++)u[o[a]]=s(u[o[a]],u);n&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,r){var i=Node.prototype.removeEventListener;e==="click"?i.call(t,e,n.hijacked||n,r):i.call(t,e,n,r)},t.addEventListener=function(e,n,r){var i=Node.prototype.addEventListener;e==="click"?i.call(t,e,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e)}),r):i.call(t,e,n,r)}),typeof t.onclick=="function"&&(i=t.onclick,t.addEventListener("click",function(e){i(e)},!1),t.onclick=null)}var t=navigator.userAgent.indexOf("Windows Phone")>=0,n=navigator.userAgent.indexOf("Android")>0&&!t,r=/iP(ad|hone|od)/.test(navigator.userAgent)&&!t,i=r&&/OS 4_\d(_\d)?/.test(navigator.userAgent),s=r&&/OS [6-7]_\d/.test(navigator.userAgent),o=navigator.userAgent.indexOf("BB10")>0;e.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(r&&e.type==="file"||e.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(e.className)},e.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},e.prototype.sendClick=function(e,t){var n,r;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),r=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(e),!0,!0,window,1,r.screenX,r.screenY,r.clientX,r.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n)},e.prototype.determineEventType=function(e){return n&&e.tagName.toLowerCase()==="select"?"mousedown":"click"},e.prototype.focus=function(e){var t;r&&e.setSelectionRange&&e.type.indexOf("date")!==0&&e.type!=="time"&&e.type!=="month"?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},e.prototype.updateScrollParent=function(e){var t,n;t=e.fastClickScrollParent;if(!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},e.prototype.getTargetElementFromEventTarget=function(e){return e.nodeType===Node.TEXT_NODE?e.parentNode:e},e.prototype.onTouchStart=function(e){var t,n,s;if(e.targetTouches.length>1)return!0;t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0];if(r){s=window.getSelection();if(s.rangeCount&&!s.isCollapsed)return!0;if(!i){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0},e.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n?!0:!1},e.prototype.onTouchMove=function(e){if(!this.trackingClick)return!0;if(this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))this.trackingClick=!1,this.targetElement=null;return!0},e.prototype.findControl=function(e){return e.control!==undefined?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},e.prototype.onTouchEnd=function(e){var t,o,u,a,f,l=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(e.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,o=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,s&&(f=e.changedTouches[0],l=document.elementFromPoint(f.pageX-window.pageXOffset,f.pageY-window.pageYOffset)||l,l.fastClickScrollParent=this.targetElement.fastClickScrollParent),u=l.tagName.toLowerCase();if(u==="label"){t=this.findControl(l);if(t){this.focus(l);if(n)return!1;l=t}}else if(this.needsFocus(l)){if(e.timeStamp-o>100||r&&window.top!==window&&u==="input")return this.targetElement=null,!1;this.focus(l),this.sendClick(l,e);if(!r||u!=="select")this.targetElement=null,e.preventDefault();return!1}if(r&&!i){a=l.fastClickScrollParent;if(a&&a.fastClickLastScrollTop!==a.scrollTop)return!0}return this.needsClick(l)||(e.preventDefault(),this.sendClick(l,e)),!1},e.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},e.prototype.onMouse=function(e){return this.targetElement?e.forwardedTouchEvent?!0:e.cancelable?!this.needsClick(this.targetElement)||this.cancelNextClick?(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1):!0:!0:!0},e.prototype.onClick=function(e){var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):e.target.type==="submit"&&e.detail===0?!0:(t=this.onMouse(e),t||(this.targetElement=null),t)},e.prototype.destroy=function(){var e=this.layer;n&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},e.notNeeded=function(e){var t,r,i,s;if(typeof window.ontouchstart=="undefined")return!0;r=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(r){if(!n)return!0;t=document.querySelector("meta[name=viewport]");if(t){if(t.content.indexOf("user-scalable=no")!==-1)return!0;if(r>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(o){i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);if(i[1]>=10&&i[2]>=3){t=document.querySelector("meta[name=viewport]");if(t){if(t.content.indexOf("user-scalable=no")!==-1)return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}}}if(e.style.msTouchAction==="none"||e.style.touchAction==="manipulation")return!0;s=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(s>=27){t=document.querySelector("meta[name=viewport]");if(t&&(t.content.indexOf("user-scalable=no")!==-1||document.documentElement.scrollWidth<=window.outerWidth))return!0}return e.style.touchAction==="none"||e.style.touchAction==="manipulation"?!0:!1},e.attach=function(t,n){return new e(t,n)},typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("fastclick",[],function(){return e}):typeof module!="undefined"&&module.exports?(module.exports=e.attach,module.exports.FastClick=e):window.FastClick=e}(),require.config({paths:{fastclick:"../../node_modules/fastclick/lib/fastclick","jquery-throttle-debounce":"../../node_modules/js-throttle-debounce/build/js-throttle-debounce.min.js",utils:"../libs/utils/utils",app:"rainbowlemon"}}),require(["app","fastclick"],function(e,t){"use strict";t.attach(document.body),e.init()}),define("main",function(){});