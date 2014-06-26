/* Modernizr (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms-shiv-cssclasses-svg
 */
;window.Modernizr=function(e,t,n){function T(e){f.cssText=e}function N(e,t){return T(prefixes.join(e+";")+(t||""))}function C(e,t){return typeof e===t}function k(e,t){return!!~(""+e).indexOf(t)}function L(e,t){for(var r in e){var i=e[r];if(!k(i,"-")&&f[i]!==n)return t=="pfx"?i:!0}return!1}function A(e,t,r){for(var i in e){var s=t[e[i]];if(s!==n)return r===!1?e[i]:C(s,"function")?s.bind(r||t):s}return!1}function O(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+p.join(r+" ")+r).split(" ");return C(t,"string")||C(t,"undefined")?L(i,t):(i=(e+" "+d.join(r+" ")+r).split(" "),A(i,t,n))}var r="2.8.2",i={},s=!0,o=t.documentElement,u="modernizr",a=t.createElement(u),f=a.style,l,c={}.toString,h="Webkit Moz O ms",p=h.split(" "),d=h.toLowerCase().split(" "),v={svg:"http://www.w3.org/2000/svg"},m={},g={},y={},b=[],w=b.slice,E,S={}.hasOwnProperty,x;!C(S,"undefined")&&!C(S.call,"undefined")?x=function(e,t){return S.call(e,t)}:x=function(e,t){return t in e&&C(e.constructor.prototype[t],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(t){var n=this;if(typeof n!="function")throw new TypeError;var r=w.call(arguments,1),i=function(){if(this instanceof i){var e=function(){};e.prototype=n.prototype;var s=new e,o=n.apply(s,r.concat(w.call(arguments)));return Object(o)===o?o:s}return n.apply(t,r.concat(w.call(arguments)))};return i}),m.csstransforms=function(){return!!O("transform")},m.svg=function(){return!!t.createElementNS&&!!t.createElementNS(v.svg,"svg").createSVGRect};for(var M in m)x(m,M)&&(E=M.toLowerCase(),i[E]=m[M](),b.push((i[E]?"":"no-")+E));return i.addTest=function(e,t){if(typeof e=="object")for(var r in e)x(e,r)&&i.addTest(r,e[r]);else{e=e.toLowerCase();if(i[e]!==n)return i;t=typeof t=="function"?t():t,typeof s!="undefined"&&s&&(o.className+=" "+(t?"":"no-")+e),i[e]=t}return i},T(""),a=l=null,function(e,t){function c(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function h(){var e=y.elements;return typeof e=="string"?e.split(" "):e}function p(e){var t=f[e[u]];return t||(t={},a++,e[u]=a,f[a]=t),t}function d(e,n,r){n||(n=t);if(l)return n.createElement(e);r||(r=p(n));var o;return r.cache[e]?o=r.cache[e].cloneNode():s.test(e)?o=(r.cache[e]=r.createElem(e)).cloneNode():o=r.createElem(e),o.canHaveChildren&&!i.test(e)&&!o.tagUrn?r.frag.appendChild(o):o}function v(e,n){e||(e=t);if(l)return e.createDocumentFragment();n=n||p(e);var r=n.frag.cloneNode(),i=0,s=h(),o=s.length;for(;i<o;i++)r.createElement(s[i]);return r}function m(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?d(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function g(e){e||(e=t);var n=p(e);return y.shivCSS&&!o&&!n.hasCSS&&(n.hasCSS=!!c(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||m(e,n),e}var n="3.7.0",r=e.html5||{},i=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,s=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,o,u="_html5shiv",a=0,f={},l;(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",o="hidden"in e,l=e.childNodes.length==1||function(){t.createElement("a");var e=t.createDocumentFragment();return typeof e.cloneNode=="undefined"||typeof e.createDocumentFragment=="undefined"||typeof e.createElement=="undefined"}()}catch(n){o=!0,l=!0}})();var y={elements:r.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:n,shivCSS:r.shivCSS!==!1,supportsUnknownElements:l,shivMethods:r.shivMethods!==!1,type:"default",shivDocument:g,createElement:d,createDocumentFragment:v};e.html5=y,g(t)}(this,t),i._version=r,i._domPrefixes=d,i._cssomPrefixes=p,i.testProp=function(e){return L([e])},i.testAllProps=O,o.className=o.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(s?" js "+b.join(" "):""),i}(this,this.document);