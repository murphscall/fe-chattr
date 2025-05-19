function ch(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function dh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sd={exports:{}},Ai={},ad={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var so=Symbol.for("react.element"),fh=Symbol.for("react.portal"),ph=Symbol.for("react.fragment"),hh=Symbol.for("react.strict_mode"),mh=Symbol.for("react.profiler"),gh=Symbol.for("react.provider"),vh=Symbol.for("react.context"),yh=Symbol.for("react.forward_ref"),xh=Symbol.for("react.suspense"),wh=Symbol.for("react.memo"),Sh=Symbol.for("react.lazy"),lu=Symbol.iterator;function kh(e){return e===null||typeof e!="object"?null:(e=lu&&e[lu]||e["@@iterator"],typeof e=="function"?e:null)}var ud={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cd=Object.assign,dd={};function ar(e,t,n){this.props=e,this.context=t,this.refs=dd,this.updater=n||ud}ar.prototype.isReactComponent={};ar.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ar.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fd(){}fd.prototype=ar.prototype;function na(e,t,n){this.props=e,this.context=t,this.refs=dd,this.updater=n||ud}var ra=na.prototype=new fd;ra.constructor=na;cd(ra,ar.prototype);ra.isPureReactComponent=!0;var su=Array.isArray,pd=Object.prototype.hasOwnProperty,oa={current:null},hd={key:!0,ref:!0,__self:!0,__source:!0};function md(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)pd.call(t,r)&&!hd.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:so,type:e,key:i,ref:l,props:o,_owner:oa.current}}function jh(e,t){return{$$typeof:so,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ia(e){return typeof e=="object"&&e!==null&&e.$$typeof===so}function Ch(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var au=/\/+/g;function dl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ch(""+e.key):t.toString(36)}function Yo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case so:case fh:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+dl(l,0):r,su(o)?(n="",e!=null&&(n=e.replace(au,"$&/")+"/"),Yo(o,t,n,"",function(c){return c})):o!=null&&(ia(o)&&(o=jh(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(au,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",su(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+dl(i,a);l+=Yo(i,t,n,u,o)}else if(u=kh(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+dl(i,a++),l+=Yo(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function go(e,t,n){if(e==null)return e;var r=[],o=0;return Yo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Eh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Go={transition:null},$h={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Go,ReactCurrentOwner:oa};function gd(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:go,forEach:function(e,t,n){go(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return go(e,function(){t++}),t},toArray:function(e){return go(e,function(t){return t})||[]},only:function(e){if(!ia(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=ar;M.Fragment=ph;M.Profiler=mh;M.PureComponent=na;M.StrictMode=hh;M.Suspense=xh;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$h;M.act=gd;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=cd({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=oa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)pd.call(t,u)&&!hd.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:so,type:e.type,key:o,ref:i,props:r,_owner:l}};M.createContext=function(e){return e={$$typeof:vh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gh,_context:e},e.Consumer=e};M.createElement=md;M.createFactory=function(e){var t=md.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:yh,render:e}};M.isValidElement=ia;M.lazy=function(e){return{$$typeof:Sh,_payload:{_status:-1,_result:e},_init:Eh}};M.memo=function(e,t){return{$$typeof:wh,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Go.transition;Go.transition={};try{e()}finally{Go.transition=t}};M.unstable_act=gd;M.useCallback=function(e,t){return xe.current.useCallback(e,t)};M.useContext=function(e){return xe.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};M.useEffect=function(e,t){return xe.current.useEffect(e,t)};M.useId=function(){return xe.current.useId()};M.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return xe.current.useMemo(e,t)};M.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};M.useRef=function(e){return xe.current.useRef(e)};M.useState=function(e){return xe.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return xe.current.useTransition()};M.version="18.3.1";ad.exports=M;var k=ad.exports;const _e=dh(k),zh=ch({__proto__:null,default:_e},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ph=k,_h=Symbol.for("react.element"),Lh=Symbol.for("react.fragment"),Ih=Object.prototype.hasOwnProperty,Nh=Ph.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rh={key:!0,ref:!0,__self:!0,__source:!0};function vd(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Ih.call(t,r)&&!Rh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:_h,type:e,key:i,ref:l,props:o,_owner:Nh.current}}Ai.Fragment=Lh;Ai.jsx=vd;Ai.jsxs=vd;sd.exports=Ai;var s=sd.exports,Zl={},yd={exports:{}},Re={},xd={exports:{}},wd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,E){var L=I.length;I.push(E);e:for(;0<L;){var D=L-1>>>1,b=I[D];if(0<o(b,E))I[D]=E,I[L]=b,L=D;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var E=I[0],L=I.pop();if(L!==E){I[0]=L;e:for(var D=0,b=I.length,qe=b>>>1;D<qe;){var He=2*(D+1)-1,jt=I[He],$e=He+1,ut=I[$e];if(0>o(jt,L))$e<b&&0>o(ut,jt)?(I[D]=ut,I[$e]=L,D=$e):(I[D]=jt,I[He]=L,D=He);else if($e<b&&0>o(ut,L))I[D]=ut,I[$e]=L,D=$e;else break e}}return E}function o(I,E){var L=I.sortIndex-E.sortIndex;return L!==0?L:I.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],c=[],m=1,p=null,v=3,x=!1,w=!1,y=!1,$=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var E=n(c);E!==null;){if(E.callback===null)r(c);else if(E.startTime<=I)r(c),E.sortIndex=E.expirationTime,t(u,E);else break;E=n(c)}}function S(I){if(y=!1,g(I),!w)if(n(u)!==null)w=!0,qt(z);else{var E=n(c);E!==null&&at(S,E.startTime-I)}}function z(I,E){w=!1,y&&(y=!1,f(j),j=-1),x=!0;var L=v;try{for(g(E),p=n(u);p!==null&&(!(p.expirationTime>E)||I&&!ge());){var D=p.callback;if(typeof D=="function"){p.callback=null,v=p.priorityLevel;var b=D(p.expirationTime<=E);E=e.unstable_now(),typeof b=="function"?p.callback=b:p===n(u)&&r(u),g(E)}else r(u);p=n(u)}if(p!==null)var qe=!0;else{var He=n(c);He!==null&&at(S,He.startTime-E),qe=!1}return qe}finally{p=null,v=L,x=!1}}var _=!1,C=null,j=-1,A=5,R=-1;function ge(){return!(e.unstable_now()-R<A)}function lt(){if(C!==null){var I=e.unstable_now();R=I;var E=!0;try{E=C(!0,I)}finally{E?st():(_=!1,C=null)}}else _=!1}var st;if(typeof d=="function")st=function(){d(lt)};else if(typeof MessageChannel<"u"){var Cn=new MessageChannel,pr=Cn.port2;Cn.port1.onmessage=lt,st=function(){pr.postMessage(null)}}else st=function(){$(lt,0)};function qt(I){C=I,_||(_=!0,st())}function at(I,E){j=$(function(){I(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,qt(z))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(I){switch(v){case 1:case 2:case 3:var E=3;break;default:E=v}var L=v;v=E;try{return I()}finally{v=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,E){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var L=v;v=I;try{return E()}finally{v=L}},e.unstable_scheduleCallback=function(I,E,L){var D=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?D+L:D):L=D,I){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=L+b,I={id:m++,callback:E,priorityLevel:I,startTime:L,expirationTime:b,sortIndex:-1},L>D?(I.sortIndex=L,t(c,I),n(u)===null&&I===n(c)&&(y?(f(j),j=-1):y=!0,at(S,L-D))):(I.sortIndex=b,t(u,I),w||x||(w=!0,qt(z))),I},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(I){var E=v;return function(){var L=v;v=E;try{return I.apply(this,arguments)}finally{v=L}}}})(wd);xd.exports=wd;var Th=xd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh=k,Ne=Th;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sd=new Set,Ar={};function Sn(e,t){Xn(e,t),Xn(e+"Capture",t)}function Xn(e,t){for(Ar[e]=t,e=0;e<t.length;e++)Sd.add(t[e])}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jl=Object.prototype.hasOwnProperty,Mh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uu={},cu={};function Dh(e){return Jl.call(cu,e)?!0:Jl.call(uu,e)?!1:Mh.test(e)?cu[e]=!0:(uu[e]=!0,!1)}function bh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fh(e,t,n,r){if(t===null||typeof t>"u"||bh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var la=/[\-:]([a-z])/g;function sa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(la,sa);de[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(la,sa);de[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(la,sa);de[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function aa(e,t,n,r){var o=de.hasOwnProperty(t)?de[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fh(t,n,o,r)&&(n=null),r||o===null?Dh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var kt=Oh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vo=Symbol.for("react.element"),In=Symbol.for("react.portal"),Nn=Symbol.for("react.fragment"),ua=Symbol.for("react.strict_mode"),ql=Symbol.for("react.profiler"),kd=Symbol.for("react.provider"),jd=Symbol.for("react.context"),ca=Symbol.for("react.forward_ref"),es=Symbol.for("react.suspense"),ts=Symbol.for("react.suspense_list"),da=Symbol.for("react.memo"),It=Symbol.for("react.lazy"),Cd=Symbol.for("react.offscreen"),du=Symbol.iterator;function mr(e){return e===null||typeof e!="object"?null:(e=du&&e[du]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,fl;function Er(e){if(fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);fl=t&&t[1]||""}return`
`+fl+e}var pl=!1;function hl(e,t){if(!e||pl)return"";pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{pl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Er(e):""}function Ah(e){switch(e.tag){case 5:return Er(e.type);case 16:return Er("Lazy");case 13:return Er("Suspense");case 19:return Er("SuspenseList");case 0:case 2:case 15:return e=hl(e.type,!1),e;case 11:return e=hl(e.type.render,!1),e;case 1:return e=hl(e.type,!0),e;default:return""}}function ns(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nn:return"Fragment";case In:return"Portal";case ql:return"Profiler";case ua:return"StrictMode";case es:return"Suspense";case ts:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jd:return(e.displayName||"Context")+".Consumer";case kd:return(e._context.displayName||"Context")+".Provider";case ca:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case da:return t=e.displayName||null,t!==null?t:ns(e.type)||"Memo";case It:t=e._payload,e=e._init;try{return ns(e(t))}catch{}}return null}function Uh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ns(t);case 8:return t===ua?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ed(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bh(e){var t=Ed(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yo(e){e._valueTracker||(e._valueTracker=Bh(e))}function $d(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ed(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function rs(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function fu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zd(e,t){t=t.checked,t!=null&&aa(e,"checked",t,!1)}function os(e,t){zd(e,t);var n=Yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?is(e,t.type,n):t.hasOwnProperty("defaultValue")&&is(e,t.type,Yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function is(e,t,n){(t!=="number"||di(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $r=Array.isArray;function Hn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Yt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ls(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if($r(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Yt(n)}}function Pd(e,t){var n=Yt(t.value),r=Yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function mu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _d(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ss(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_d(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xo,Ld=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xo=xo||document.createElement("div"),xo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ur(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vh=["Webkit","ms","Moz","O"];Object.keys(Lr).forEach(function(e){Vh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Lr[t]=Lr[e]})});function Id(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Lr.hasOwnProperty(e)&&Lr[e]?(""+t).trim():t+"px"}function Nd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Id(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Hh=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function as(e,t){if(t){if(Hh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function us(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cs=null;function fa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ds=null,Wn=null,Qn=null;function gu(e){if(e=co(e)){if(typeof ds!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Wi(t),ds(e.stateNode,e.type,t))}}function Rd(e){Wn?Qn?Qn.push(e):Qn=[e]:Wn=e}function Td(){if(Wn){var e=Wn,t=Qn;if(Qn=Wn=null,gu(e),t)for(e=0;e<t.length;e++)gu(t[e])}}function Od(e,t){return e(t)}function Md(){}var ml=!1;function Dd(e,t,n){if(ml)return e(t,n);ml=!0;try{return Od(e,t,n)}finally{ml=!1,(Wn!==null||Qn!==null)&&(Md(),Td())}}function Br(e,t){var n=e.stateNode;if(n===null)return null;var r=Wi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var fs=!1;if(yt)try{var gr={};Object.defineProperty(gr,"passive",{get:function(){fs=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{fs=!1}function Wh(e,t,n,r,o,i,l,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Ir=!1,fi=null,pi=!1,ps=null,Qh={onError:function(e){Ir=!0,fi=e}};function Yh(e,t,n,r,o,i,l,a,u){Ir=!1,fi=null,Wh.apply(Qh,arguments)}function Gh(e,t,n,r,o,i,l,a,u){if(Yh.apply(this,arguments),Ir){if(Ir){var c=fi;Ir=!1,fi=null}else throw Error(P(198));pi||(pi=!0,ps=c)}}function kn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vu(e){if(kn(e)!==e)throw Error(P(188))}function Kh(e){var t=e.alternate;if(!t){if(t=kn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return vu(o),e;if(i===r)return vu(o),t;i=i.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Fd(e){return e=Kh(e),e!==null?Ad(e):null}function Ad(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ad(e);if(t!==null)return t;e=e.sibling}return null}var Ud=Ne.unstable_scheduleCallback,yu=Ne.unstable_cancelCallback,Xh=Ne.unstable_shouldYield,Zh=Ne.unstable_requestPaint,q=Ne.unstable_now,Jh=Ne.unstable_getCurrentPriorityLevel,pa=Ne.unstable_ImmediatePriority,Bd=Ne.unstable_UserBlockingPriority,hi=Ne.unstable_NormalPriority,qh=Ne.unstable_LowPriority,Vd=Ne.unstable_IdlePriority,Ui=null,ot=null;function em(e){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Ui,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:rm,tm=Math.log,nm=Math.LN2;function rm(e){return e>>>=0,e===0?32:31-(tm(e)/nm|0)|0}var wo=64,So=4194304;function zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function mi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=zr(a):(i&=l,i!==0&&(r=zr(i)))}else l=n&~o,l!==0?r=zr(l):i!==0&&(r=zr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),o=1<<n,r|=e[n],t&=~o;return r}function om(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function im(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Ke(i),a=1<<l,u=o[l];u===-1?(!(a&n)||a&r)&&(o[l]=om(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function hs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hd(){var e=wo;return wo<<=1,!(wo&4194240)&&(wo=64),e}function gl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ao(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function lm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ke(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ha(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var B=0;function Wd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qd,ma,Yd,Gd,Kd,ms=!1,ko=[],bt=null,Ft=null,At=null,Vr=new Map,Hr=new Map,Rt=[],sm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xu(e,t){switch(e){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":Vr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hr.delete(t.pointerId)}}function vr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=co(t),t!==null&&ma(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function am(e,t,n,r,o){switch(t){case"focusin":return bt=vr(bt,e,t,n,r,o),!0;case"dragenter":return Ft=vr(Ft,e,t,n,r,o),!0;case"mouseover":return At=vr(At,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Vr.set(i,vr(Vr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Hr.set(i,vr(Hr.get(i)||null,e,t,n,r,o)),!0}return!1}function Xd(e){var t=ln(e.target);if(t!==null){var n=kn(t);if(n!==null){if(t=n.tag,t===13){if(t=bd(n),t!==null){e.blockedOn=t,Kd(e.priority,function(){Yd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ko(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cs=r,n.target.dispatchEvent(r),cs=null}else return t=co(n),t!==null&&ma(t),e.blockedOn=n,!1;t.shift()}return!0}function wu(e,t,n){Ko(e)&&n.delete(t)}function um(){ms=!1,bt!==null&&Ko(bt)&&(bt=null),Ft!==null&&Ko(Ft)&&(Ft=null),At!==null&&Ko(At)&&(At=null),Vr.forEach(wu),Hr.forEach(wu)}function yr(e,t){e.blockedOn===t&&(e.blockedOn=null,ms||(ms=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,um)))}function Wr(e){function t(o){return yr(o,e)}if(0<ko.length){yr(ko[0],e);for(var n=1;n<ko.length;n++){var r=ko[n];r.blockedOn===e&&(r.blockedOn=null)}}for(bt!==null&&yr(bt,e),Ft!==null&&yr(Ft,e),At!==null&&yr(At,e),Vr.forEach(t),Hr.forEach(t),n=0;n<Rt.length;n++)r=Rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)Xd(n),n.blockedOn===null&&Rt.shift()}var Yn=kt.ReactCurrentBatchConfig,gi=!0;function cm(e,t,n,r){var o=B,i=Yn.transition;Yn.transition=null;try{B=1,ga(e,t,n,r)}finally{B=o,Yn.transition=i}}function dm(e,t,n,r){var o=B,i=Yn.transition;Yn.transition=null;try{B=4,ga(e,t,n,r)}finally{B=o,Yn.transition=i}}function ga(e,t,n,r){if(gi){var o=gs(e,t,n,r);if(o===null)$l(e,t,r,vi,n),xu(e,r);else if(am(o,e,t,n,r))r.stopPropagation();else if(xu(e,r),t&4&&-1<sm.indexOf(e)){for(;o!==null;){var i=co(o);if(i!==null&&Qd(i),i=gs(e,t,n,r),i===null&&$l(e,t,r,vi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else $l(e,t,r,null,n)}}var vi=null;function gs(e,t,n,r){if(vi=null,e=fa(r),e=ln(e),e!==null)if(t=kn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vi=e,null}function Zd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jh()){case pa:return 1;case Bd:return 4;case hi:case qh:return 16;case Vd:return 536870912;default:return 16}default:return 16}}var Ot=null,va=null,Xo=null;function Jd(){if(Xo)return Xo;var e,t=va,n=t.length,r,o="value"in Ot?Ot.value:Ot.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Xo=o.slice(e,1<r?1-r:void 0)}function Zo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jo(){return!0}function Su(){return!1}function Te(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?jo:Su,this.isPropagationStopped=Su,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),t}var ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ya=Te(ur),uo=Z({},ur,{view:0,detail:0}),fm=Te(uo),vl,yl,xr,Bi=Z({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xr&&(xr&&e.type==="mousemove"?(vl=e.screenX-xr.screenX,yl=e.screenY-xr.screenY):yl=vl=0,xr=e),vl)},movementY:function(e){return"movementY"in e?e.movementY:yl}}),ku=Te(Bi),pm=Z({},Bi,{dataTransfer:0}),hm=Te(pm),mm=Z({},uo,{relatedTarget:0}),xl=Te(mm),gm=Z({},ur,{animationName:0,elapsedTime:0,pseudoElement:0}),vm=Te(gm),ym=Z({},ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xm=Te(ym),wm=Z({},ur,{data:0}),ju=Te(wm),Sm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},km={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jm[e])?!!t[e]:!1}function xa(){return Cm}var Em=Z({},uo,{key:function(e){if(e.key){var t=Sm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?km[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xa,charCode:function(e){return e.type==="keypress"?Zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$m=Te(Em),zm=Z({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cu=Te(zm),Pm=Z({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xa}),_m=Te(Pm),Lm=Z({},ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),Im=Te(Lm),Nm=Z({},Bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rm=Te(Nm),Tm=[9,13,27,32],wa=yt&&"CompositionEvent"in window,Nr=null;yt&&"documentMode"in document&&(Nr=document.documentMode);var Om=yt&&"TextEvent"in window&&!Nr,qd=yt&&(!wa||Nr&&8<Nr&&11>=Nr),Eu=" ",$u=!1;function ef(e,t){switch(e){case"keyup":return Tm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rn=!1;function Mm(e,t){switch(e){case"compositionend":return tf(t);case"keypress":return t.which!==32?null:($u=!0,Eu);case"textInput":return e=t.data,e===Eu&&$u?null:e;default:return null}}function Dm(e,t){if(Rn)return e==="compositionend"||!wa&&ef(e,t)?(e=Jd(),Xo=va=Ot=null,Rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qd&&t.locale!=="ko"?null:t.data;default:return null}}var bm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bm[e.type]:t==="textarea"}function nf(e,t,n,r){Rd(r),t=yi(t,"onChange"),0<t.length&&(n=new ya("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rr=null,Qr=null;function Fm(e){hf(e,0)}function Vi(e){var t=Mn(e);if($d(t))return e}function Am(e,t){if(e==="change")return t}var rf=!1;if(yt){var wl;if(yt){var Sl="oninput"in document;if(!Sl){var Pu=document.createElement("div");Pu.setAttribute("oninput","return;"),Sl=typeof Pu.oninput=="function"}wl=Sl}else wl=!1;rf=wl&&(!document.documentMode||9<document.documentMode)}function _u(){Rr&&(Rr.detachEvent("onpropertychange",of),Qr=Rr=null)}function of(e){if(e.propertyName==="value"&&Vi(Qr)){var t=[];nf(t,Qr,e,fa(e)),Dd(Fm,t)}}function Um(e,t,n){e==="focusin"?(_u(),Rr=t,Qr=n,Rr.attachEvent("onpropertychange",of)):e==="focusout"&&_u()}function Bm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vi(Qr)}function Vm(e,t){if(e==="click")return Vi(t)}function Hm(e,t){if(e==="input"||e==="change")return Vi(t)}function Wm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Je=typeof Object.is=="function"?Object.is:Wm;function Yr(e,t){if(Je(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Jl.call(t,o)||!Je(e[o],t[o]))return!1}return!0}function Lu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Iu(e,t){var n=Lu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lu(n)}}function lf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sf(){for(var e=window,t=di();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=di(e.document)}return t}function Sa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qm(e){var t=sf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lf(n.ownerDocument.documentElement,n)){if(r!==null&&Sa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Iu(n,i);var l=Iu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ym=yt&&"documentMode"in document&&11>=document.documentMode,Tn=null,vs=null,Tr=null,ys=!1;function Nu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ys||Tn==null||Tn!==di(r)||(r=Tn,"selectionStart"in r&&Sa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tr&&Yr(Tr,r)||(Tr=r,r=yi(vs,"onSelect"),0<r.length&&(t=new ya("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Tn)))}function Co(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var On={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionend:Co("Transition","TransitionEnd")},kl={},af={};yt&&(af=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function Hi(e){if(kl[e])return kl[e];if(!On[e])return e;var t=On[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in af)return kl[e]=t[n];return e}var uf=Hi("animationend"),cf=Hi("animationiteration"),df=Hi("animationstart"),ff=Hi("transitionend"),pf=new Map,Ru="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kt(e,t){pf.set(e,t),Sn(t,[e])}for(var jl=0;jl<Ru.length;jl++){var Cl=Ru[jl],Gm=Cl.toLowerCase(),Km=Cl[0].toUpperCase()+Cl.slice(1);Kt(Gm,"on"+Km)}Kt(uf,"onAnimationEnd");Kt(cf,"onAnimationIteration");Kt(df,"onAnimationStart");Kt("dblclick","onDoubleClick");Kt("focusin","onFocus");Kt("focusout","onBlur");Kt(ff,"onTransitionEnd");Xn("onMouseEnter",["mouseout","mouseover"]);Xn("onMouseLeave",["mouseout","mouseover"]);Xn("onPointerEnter",["pointerout","pointerover"]);Xn("onPointerLeave",["pointerout","pointerover"]);Sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));function Tu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Gh(r,t,void 0,e),e.currentTarget=null}function hf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&o.isPropagationStopped())break e;Tu(o,a,c),i=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&o.isPropagationStopped())break e;Tu(o,a,c),i=u}}}if(pi)throw e=ps,pi=!1,ps=null,e}function W(e,t){var n=t[js];n===void 0&&(n=t[js]=new Set);var r=e+"__bubble";n.has(r)||(mf(t,e,2,!1),n.add(r))}function El(e,t,n){var r=0;t&&(r|=4),mf(n,e,r,t)}var Eo="_reactListening"+Math.random().toString(36).slice(2);function Gr(e){if(!e[Eo]){e[Eo]=!0,Sd.forEach(function(n){n!=="selectionchange"&&(Xm.has(n)||El(n,!1,e),El(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Eo]||(t[Eo]=!0,El("selectionchange",!1,t))}}function mf(e,t,n,r){switch(Zd(t)){case 1:var o=cm;break;case 4:o=dm;break;default:o=ga}n=o.bind(null,t,n,e),o=void 0,!fs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function $l(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;a!==null;){if(l=ln(a),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Dd(function(){var c=i,m=fa(n),p=[];e:{var v=pf.get(e);if(v!==void 0){var x=ya,w=e;switch(e){case"keypress":if(Zo(n)===0)break e;case"keydown":case"keyup":x=$m;break;case"focusin":w="focus",x=xl;break;case"focusout":w="blur",x=xl;break;case"beforeblur":case"afterblur":x=xl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=hm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=_m;break;case uf:case cf:case df:x=vm;break;case ff:x=Im;break;case"scroll":x=fm;break;case"wheel":x=Rm;break;case"copy":case"cut":case"paste":x=xm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Cu}var y=(t&4)!==0,$=!y&&e==="scroll",f=y?v!==null?v+"Capture":null:v;y=[];for(var d=c,g;d!==null;){g=d;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,f!==null&&(S=Br(d,f),S!=null&&y.push(Kr(d,S,g)))),$)break;d=d.return}0<y.length&&(v=new x(v,w,null,n,m),p.push({event:v,listeners:y}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",v&&n!==cs&&(w=n.relatedTarget||n.fromElement)&&(ln(w)||w[xt]))break e;if((x||v)&&(v=m.window===m?m:(v=m.ownerDocument)?v.defaultView||v.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=c,w=w?ln(w):null,w!==null&&($=kn(w),w!==$||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=c),x!==w)){if(y=ku,S="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=Cu,S="onPointerLeave",f="onPointerEnter",d="pointer"),$=x==null?v:Mn(x),g=w==null?v:Mn(w),v=new y(S,d+"leave",x,n,m),v.target=$,v.relatedTarget=g,S=null,ln(m)===c&&(y=new y(f,d+"enter",w,n,m),y.target=g,y.relatedTarget=$,S=y),$=S,x&&w)t:{for(y=x,f=w,d=0,g=y;g;g=En(g))d++;for(g=0,S=f;S;S=En(S))g++;for(;0<d-g;)y=En(y),d--;for(;0<g-d;)f=En(f),g--;for(;d--;){if(y===f||f!==null&&y===f.alternate)break t;y=En(y),f=En(f)}y=null}else y=null;x!==null&&Ou(p,v,x,y,!1),w!==null&&$!==null&&Ou(p,$,w,y,!0)}}e:{if(v=c?Mn(c):window,x=v.nodeName&&v.nodeName.toLowerCase(),x==="select"||x==="input"&&v.type==="file")var z=Am;else if(zu(v))if(rf)z=Hm;else{z=Bm;var _=Um}else(x=v.nodeName)&&x.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(z=Vm);if(z&&(z=z(e,c))){nf(p,z,n,m);break e}_&&_(e,v,c),e==="focusout"&&(_=v._wrapperState)&&_.controlled&&v.type==="number"&&is(v,"number",v.value)}switch(_=c?Mn(c):window,e){case"focusin":(zu(_)||_.contentEditable==="true")&&(Tn=_,vs=c,Tr=null);break;case"focusout":Tr=vs=Tn=null;break;case"mousedown":ys=!0;break;case"contextmenu":case"mouseup":case"dragend":ys=!1,Nu(p,n,m);break;case"selectionchange":if(Ym)break;case"keydown":case"keyup":Nu(p,n,m)}var C;if(wa)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Rn?ef(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(qd&&n.locale!=="ko"&&(Rn||j!=="onCompositionStart"?j==="onCompositionEnd"&&Rn&&(C=Jd()):(Ot=m,va="value"in Ot?Ot.value:Ot.textContent,Rn=!0)),_=yi(c,j),0<_.length&&(j=new ju(j,e,null,n,m),p.push({event:j,listeners:_}),C?j.data=C:(C=tf(n),C!==null&&(j.data=C)))),(C=Om?Mm(e,n):Dm(e,n))&&(c=yi(c,"onBeforeInput"),0<c.length&&(m=new ju("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:c}),m.data=C))}hf(p,t)})}function Kr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Br(e,n),i!=null&&r.unshift(Kr(e,i,o)),i=Br(e,t),i!=null&&r.push(Kr(e,i,o))),e=e.return}return r}function En(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ou(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,o?(u=Br(n,i),u!=null&&l.unshift(Kr(n,u,a))):o||(u=Br(n,i),u!=null&&l.push(Kr(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Zm=/\r\n?/g,Jm=/\u0000|\uFFFD/g;function Mu(e){return(typeof e=="string"?e:""+e).replace(Zm,`
`).replace(Jm,"")}function $o(e,t,n){if(t=Mu(t),Mu(e)!==t&&n)throw Error(P(425))}function xi(){}var xs=null,ws=null;function Ss(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ks=typeof setTimeout=="function"?setTimeout:void 0,qm=typeof clearTimeout=="function"?clearTimeout:void 0,Du=typeof Promise=="function"?Promise:void 0,eg=typeof queueMicrotask=="function"?queueMicrotask:typeof Du<"u"?function(e){return Du.resolve(null).then(e).catch(tg)}:ks;function tg(e){setTimeout(function(){throw e})}function zl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Wr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Wr(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cr=Math.random().toString(36).slice(2),rt="__reactFiber$"+cr,Xr="__reactProps$"+cr,xt="__reactContainer$"+cr,js="__reactEvents$"+cr,ng="__reactListeners$"+cr,rg="__reactHandles$"+cr;function ln(e){var t=e[rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bu(e);e!==null;){if(n=e[rt])return n;e=bu(e)}return t}e=n,n=e.parentNode}return null}function co(e){return e=e[rt]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Wi(e){return e[Xr]||null}var Cs=[],Dn=-1;function Xt(e){return{current:e}}function Y(e){0>Dn||(e.current=Cs[Dn],Cs[Dn]=null,Dn--)}function H(e,t){Dn++,Cs[Dn]=e.current,e.current=t}var Gt={},me=Xt(Gt),je=Xt(!1),hn=Gt;function Zn(e,t){var n=e.type.contextTypes;if(!n)return Gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ce(e){return e=e.childContextTypes,e!=null}function wi(){Y(je),Y(me)}function Fu(e,t,n){if(me.current!==Gt)throw Error(P(168));H(me,t),H(je,n)}function gf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,Uh(e)||"Unknown",o));return Z({},n,r)}function Si(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gt,hn=me.current,H(me,e),H(je,je.current),!0}function Au(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=gf(e,t,hn),r.__reactInternalMemoizedMergedChildContext=e,Y(je),Y(me),H(me,e)):Y(je),H(je,n)}var pt=null,Qi=!1,Pl=!1;function vf(e){pt===null?pt=[e]:pt.push(e)}function og(e){Qi=!0,vf(e)}function Zt(){if(!Pl&&pt!==null){Pl=!0;var e=0,t=B;try{var n=pt;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}pt=null,Qi=!1}catch(o){throw pt!==null&&(pt=pt.slice(e+1)),Ud(pa,Zt),o}finally{B=t,Pl=!1}}return null}var bn=[],Fn=0,ki=null,ji=0,De=[],be=0,mn=null,ht=1,mt="";function nn(e,t){bn[Fn++]=ji,bn[Fn++]=ki,ki=e,ji=t}function yf(e,t,n){De[be++]=ht,De[be++]=mt,De[be++]=mn,mn=e;var r=ht;e=mt;var o=32-Ke(r)-1;r&=~(1<<o),n+=1;var i=32-Ke(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,ht=1<<32-Ke(t)+o|n<<o|r,mt=i+e}else ht=1<<i|n<<o|r,mt=e}function ka(e){e.return!==null&&(nn(e,1),yf(e,1,0))}function ja(e){for(;e===ki;)ki=bn[--Fn],bn[Fn]=null,ji=bn[--Fn],bn[Fn]=null;for(;e===mn;)mn=De[--be],De[be]=null,mt=De[--be],De[be]=null,ht=De[--be],De[be]=null}var Ie=null,Le=null,G=!1,Ge=null;function xf(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Uu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,Le=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mn!==null?{id:ht,overflow:mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ie=e,Le=null,!0):!1;default:return!1}}function Es(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $s(e){if(G){var t=Le;if(t){var n=t;if(!Uu(e,t)){if(Es(e))throw Error(P(418));t=Ut(n.nextSibling);var r=Ie;t&&Uu(e,t)?xf(r,n):(e.flags=e.flags&-4097|2,G=!1,Ie=e)}}else{if(Es(e))throw Error(P(418));e.flags=e.flags&-4097|2,G=!1,Ie=e}}}function Bu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function zo(e){if(e!==Ie)return!1;if(!G)return Bu(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ss(e.type,e.memoizedProps)),t&&(t=Le)){if(Es(e))throw wf(),Error(P(418));for(;t;)xf(e,t),t=Ut(t.nextSibling)}if(Bu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=Ie?Ut(e.stateNode.nextSibling):null;return!0}function wf(){for(var e=Le;e;)e=Ut(e.nextSibling)}function Jn(){Le=Ie=null,G=!1}function Ca(e){Ge===null?Ge=[e]:Ge.push(e)}var ig=kt.ReactCurrentBatchConfig;function wr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Po(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vu(e){var t=e._init;return t(e._payload)}function Sf(e){function t(f,d){if(e){var g=f.deletions;g===null?(f.deletions=[d],f.flags|=16):g.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function o(f,d){return f=Wt(f,d),f.index=0,f.sibling=null,f}function i(f,d,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<d?(f.flags|=2,d):g):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,g,S){return d===null||d.tag!==6?(d=Ol(g,f.mode,S),d.return=f,d):(d=o(d,g),d.return=f,d)}function u(f,d,g,S){var z=g.type;return z===Nn?m(f,d,g.props.children,S,g.key):d!==null&&(d.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===It&&Vu(z)===d.type)?(S=o(d,g.props),S.ref=wr(f,d,g),S.return=f,S):(S=oi(g.type,g.key,g.props,null,f.mode,S),S.ref=wr(f,d,g),S.return=f,S)}function c(f,d,g,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=Ml(g,f.mode,S),d.return=f,d):(d=o(d,g.children||[]),d.return=f,d)}function m(f,d,g,S,z){return d===null||d.tag!==7?(d=dn(g,f.mode,S,z),d.return=f,d):(d=o(d,g),d.return=f,d)}function p(f,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ol(""+d,f.mode,g),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case vo:return g=oi(d.type,d.key,d.props,null,f.mode,g),g.ref=wr(f,null,d),g.return=f,g;case In:return d=Ml(d,f.mode,g),d.return=f,d;case It:var S=d._init;return p(f,S(d._payload),g)}if($r(d)||mr(d))return d=dn(d,f.mode,g,null),d.return=f,d;Po(f,d)}return null}function v(f,d,g,S){var z=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return z!==null?null:a(f,d,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case vo:return g.key===z?u(f,d,g,S):null;case In:return g.key===z?c(f,d,g,S):null;case It:return z=g._init,v(f,d,z(g._payload),S)}if($r(g)||mr(g))return z!==null?null:m(f,d,g,S,null);Po(f,g)}return null}function x(f,d,g,S,z){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(g)||null,a(d,f,""+S,z);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case vo:return f=f.get(S.key===null?g:S.key)||null,u(d,f,S,z);case In:return f=f.get(S.key===null?g:S.key)||null,c(d,f,S,z);case It:var _=S._init;return x(f,d,g,_(S._payload),z)}if($r(S)||mr(S))return f=f.get(g)||null,m(d,f,S,z,null);Po(d,S)}return null}function w(f,d,g,S){for(var z=null,_=null,C=d,j=d=0,A=null;C!==null&&j<g.length;j++){C.index>j?(A=C,C=null):A=C.sibling;var R=v(f,C,g[j],S);if(R===null){C===null&&(C=A);break}e&&C&&R.alternate===null&&t(f,C),d=i(R,d,j),_===null?z=R:_.sibling=R,_=R,C=A}if(j===g.length)return n(f,C),G&&nn(f,j),z;if(C===null){for(;j<g.length;j++)C=p(f,g[j],S),C!==null&&(d=i(C,d,j),_===null?z=C:_.sibling=C,_=C);return G&&nn(f,j),z}for(C=r(f,C);j<g.length;j++)A=x(C,f,j,g[j],S),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?j:A.key),d=i(A,d,j),_===null?z=A:_.sibling=A,_=A);return e&&C.forEach(function(ge){return t(f,ge)}),G&&nn(f,j),z}function y(f,d,g,S){var z=mr(g);if(typeof z!="function")throw Error(P(150));if(g=z.call(g),g==null)throw Error(P(151));for(var _=z=null,C=d,j=d=0,A=null,R=g.next();C!==null&&!R.done;j++,R=g.next()){C.index>j?(A=C,C=null):A=C.sibling;var ge=v(f,C,R.value,S);if(ge===null){C===null&&(C=A);break}e&&C&&ge.alternate===null&&t(f,C),d=i(ge,d,j),_===null?z=ge:_.sibling=ge,_=ge,C=A}if(R.done)return n(f,C),G&&nn(f,j),z;if(C===null){for(;!R.done;j++,R=g.next())R=p(f,R.value,S),R!==null&&(d=i(R,d,j),_===null?z=R:_.sibling=R,_=R);return G&&nn(f,j),z}for(C=r(f,C);!R.done;j++,R=g.next())R=x(C,f,j,R.value,S),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?j:R.key),d=i(R,d,j),_===null?z=R:_.sibling=R,_=R);return e&&C.forEach(function(lt){return t(f,lt)}),G&&nn(f,j),z}function $(f,d,g,S){if(typeof g=="object"&&g!==null&&g.type===Nn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case vo:e:{for(var z=g.key,_=d;_!==null;){if(_.key===z){if(z=g.type,z===Nn){if(_.tag===7){n(f,_.sibling),d=o(_,g.props.children),d.return=f,f=d;break e}}else if(_.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===It&&Vu(z)===_.type){n(f,_.sibling),d=o(_,g.props),d.ref=wr(f,_,g),d.return=f,f=d;break e}n(f,_);break}else t(f,_);_=_.sibling}g.type===Nn?(d=dn(g.props.children,f.mode,S,g.key),d.return=f,f=d):(S=oi(g.type,g.key,g.props,null,f.mode,S),S.ref=wr(f,d,g),S.return=f,f=S)}return l(f);case In:e:{for(_=g.key;d!==null;){if(d.key===_)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(f,d.sibling),d=o(d,g.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=Ml(g,f.mode,S),d.return=f,f=d}return l(f);case It:return _=g._init,$(f,d,_(g._payload),S)}if($r(g))return w(f,d,g,S);if(mr(g))return y(f,d,g,S);Po(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(f,d.sibling),d=o(d,g),d.return=f,f=d):(n(f,d),d=Ol(g,f.mode,S),d.return=f,f=d),l(f)):n(f,d)}return $}var qn=Sf(!0),kf=Sf(!1),Ci=Xt(null),Ei=null,An=null,Ea=null;function $a(){Ea=An=Ei=null}function za(e){var t=Ci.current;Y(Ci),e._currentValue=t}function zs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gn(e,t){Ei=e,Ea=An=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ke=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(Ea!==e)if(e={context:e,memoizedValue:t,next:null},An===null){if(Ei===null)throw Error(P(308));An=e,Ei.dependencies={lanes:0,firstContext:e}}else An=An.next=e;return t}var sn=null;function Pa(e){sn===null?sn=[e]:sn.push(e)}function jf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Pa(t)):(n.next=o.next,o.next=n),t.interleaved=n,wt(e,r)}function wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nt=!1;function _a(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,wt(e,n)}return o=r.interleaved,o===null?(t.next=t,Pa(r)):(t.next=o.next,o.next=t),r.interleaved=t,wt(e,n)}function Jo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ha(e,n)}}function Hu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $i(e,t,n,r){var o=e.updateQueue;Nt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,c=u.next;u.next=null,l===null?i=c:l.next=c,l=u;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=c:a.next=c,m.lastBaseUpdate=u))}if(i!==null){var p=o.baseState;l=0,m=c=u=null,a=i;do{var v=a.lane,x=a.eventTime;if((r&v)===v){m!==null&&(m=m.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,y=a;switch(v=t,x=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){p=w.call(x,p,v);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,v=typeof w=="function"?w.call(x,p,v):w,v==null)break e;p=Z({},p,v);break e;case 2:Nt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[a]:v.push(a))}else x={eventTime:x,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(c=m=x,u=p):m=m.next=x,l|=v;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;v=a,a=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(!0);if(m===null&&(u=p),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);vn|=l,e.lanes=l,e.memoizedState=p}}function Wu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var fo={},it=Xt(fo),Zr=Xt(fo),Jr=Xt(fo);function an(e){if(e===fo)throw Error(P(174));return e}function La(e,t){switch(H(Jr,t),H(Zr,e),H(it,fo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ss(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ss(t,e)}Y(it),H(it,t)}function er(){Y(it),Y(Zr),Y(Jr)}function Ef(e){an(Jr.current);var t=an(it.current),n=ss(t,e.type);t!==n&&(H(Zr,e),H(it,n))}function Ia(e){Zr.current===e&&(Y(it),Y(Zr))}var K=Xt(0);function zi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _l=[];function Na(){for(var e=0;e<_l.length;e++)_l[e]._workInProgressVersionPrimary=null;_l.length=0}var qo=kt.ReactCurrentDispatcher,Ll=kt.ReactCurrentBatchConfig,gn=0,X=null,re=null,ie=null,Pi=!1,Or=!1,qr=0,lg=0;function fe(){throw Error(P(321))}function Ra(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Je(e[n],t[n]))return!1;return!0}function Ta(e,t,n,r,o,i){if(gn=i,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qo.current=e===null||e.memoizedState===null?cg:dg,e=n(r,o),Or){i=0;do{if(Or=!1,qr=0,25<=i)throw Error(P(301));i+=1,ie=re=null,t.updateQueue=null,qo.current=fg,e=n(r,o)}while(Or)}if(qo.current=_i,t=re!==null&&re.next!==null,gn=0,ie=re=X=null,Pi=!1,t)throw Error(P(300));return e}function Oa(){var e=qr!==0;return qr=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?X.memoizedState=ie=e:ie=ie.next=e,ie}function Be(){if(re===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=ie===null?X.memoizedState:ie.next;if(t!==null)ie=t,re=e;else{if(e===null)throw Error(P(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},ie===null?X.memoizedState=ie=e:ie=ie.next=e}return ie}function eo(e,t){return typeof t=="function"?t(e):t}function Il(e){var t=Be(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=re,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,u=null,c=i;do{var m=c.lane;if((gn&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,l=r):u=u.next=p,X.lanes|=m,vn|=m}c=c.next}while(c!==null&&c!==i);u===null?l=r:u.next=a,Je(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,X.lanes|=i,vn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Nl(e){var t=Be(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Je(i,t.memoizedState)||(ke=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function $f(){}function zf(e,t){var n=X,r=Be(),o=t(),i=!Je(r.memoizedState,o);if(i&&(r.memoizedState=o,ke=!0),r=r.queue,Ma(Lf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,to(9,_f.bind(null,n,r,o,t),void 0,null),ae===null)throw Error(P(349));gn&30||Pf(n,t,o)}return o}function Pf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _f(e,t,n,r){t.value=n,t.getSnapshot=r,If(t)&&Nf(e)}function Lf(e,t,n){return n(function(){If(t)&&Nf(e)})}function If(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Je(e,n)}catch{return!0}}function Nf(e){var t=wt(e,1);t!==null&&Xe(t,e,1,-1)}function Qu(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:eo,lastRenderedState:e},t.queue=e,e=e.dispatch=ug.bind(null,X,e),[t.memoizedState,e]}function to(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Rf(){return Be().memoizedState}function ei(e,t,n,r){var o=tt();X.flags|=e,o.memoizedState=to(1|t,n,void 0,r===void 0?null:r)}function Yi(e,t,n,r){var o=Be();r=r===void 0?null:r;var i=void 0;if(re!==null){var l=re.memoizedState;if(i=l.destroy,r!==null&&Ra(r,l.deps)){o.memoizedState=to(t,n,i,r);return}}X.flags|=e,o.memoizedState=to(1|t,n,i,r)}function Yu(e,t){return ei(8390656,8,e,t)}function Ma(e,t){return Yi(2048,8,e,t)}function Tf(e,t){return Yi(4,2,e,t)}function Of(e,t){return Yi(4,4,e,t)}function Mf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Df(e,t,n){return n=n!=null?n.concat([e]):null,Yi(4,4,Mf.bind(null,t,e),n)}function Da(){}function bf(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ra(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ff(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ra(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Af(e,t,n){return gn&21?(Je(n,t)||(n=Hd(),X.lanes|=n,vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n)}function sg(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=Ll.transition;Ll.transition={};try{e(!1),t()}finally{B=n,Ll.transition=r}}function Uf(){return Be().memoizedState}function ag(e,t,n){var r=Ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bf(e))Vf(t,n);else if(n=jf(e,t,n,r),n!==null){var o=ye();Xe(n,e,r,o),Hf(n,t,r)}}function ug(e,t,n){var r=Ht(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bf(e))Vf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Je(a,l)){var u=t.interleaved;u===null?(o.next=o,Pa(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=jf(e,t,o,r),n!==null&&(o=ye(),Xe(n,e,r,o),Hf(n,t,r))}}function Bf(e){var t=e.alternate;return e===X||t!==null&&t===X}function Vf(e,t){Or=Pi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ha(e,n)}}var _i={readContext:Ue,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},cg={readContext:Ue,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:Yu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ei(4194308,4,Mf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ei(4194308,4,e,t)},useInsertionEffect:function(e,t){return ei(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ag.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:Qu,useDebugValue:Da,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=Qu(!1),t=e[0];return e=sg.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,o=tt();if(G){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),ae===null)throw Error(P(349));gn&30||Pf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Yu(Lf.bind(null,r,i,e),[e]),r.flags|=2048,to(9,_f.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=tt(),t=ae.identifierPrefix;if(G){var n=mt,r=ht;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dg={readContext:Ue,useCallback:bf,useContext:Ue,useEffect:Ma,useImperativeHandle:Df,useInsertionEffect:Tf,useLayoutEffect:Of,useMemo:Ff,useReducer:Il,useRef:Rf,useState:function(){return Il(eo)},useDebugValue:Da,useDeferredValue:function(e){var t=Be();return Af(t,re.memoizedState,e)},useTransition:function(){var e=Il(eo)[0],t=Be().memoizedState;return[e,t]},useMutableSource:$f,useSyncExternalStore:zf,useId:Uf,unstable_isNewReconciler:!1},fg={readContext:Ue,useCallback:bf,useContext:Ue,useEffect:Ma,useImperativeHandle:Df,useInsertionEffect:Tf,useLayoutEffect:Of,useMemo:Ff,useReducer:Nl,useRef:Rf,useState:function(){return Nl(eo)},useDebugValue:Da,useDeferredValue:function(e){var t=Be();return re===null?t.memoizedState=e:Af(t,re.memoizedState,e)},useTransition:function(){var e=Nl(eo)[0],t=Be().memoizedState;return[e,t]},useMutableSource:$f,useSyncExternalStore:zf,useId:Uf,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ps(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gi={isMounted:function(e){return(e=e._reactInternals)?kn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),o=Ht(e),i=gt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Bt(e,i,o),t!==null&&(Xe(t,e,o,r),Jo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),o=Ht(e),i=gt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Bt(e,i,o),t!==null&&(Xe(t,e,o,r),Jo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=Ht(e),o=gt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Bt(e,o,r),t!==null&&(Xe(t,e,r,n),Jo(t,e,r))}};function Gu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Yr(n,r)||!Yr(o,i):!0}function Wf(e,t,n){var r=!1,o=Gt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ue(i):(o=Ce(t)?hn:me.current,r=t.contextTypes,i=(r=r!=null)?Zn(e,o):Gt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Gi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ku(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Gi.enqueueReplaceState(t,t.state,null)}function _s(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},_a(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ue(i):(i=Ce(t)?hn:me.current,o.context=Zn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ps(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Gi.enqueueReplaceState(o,o.state,null),$i(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function tr(e,t){try{var n="",r=t;do n+=Ah(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Rl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ls(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pg=typeof WeakMap=="function"?WeakMap:Map;function Qf(e,t,n){n=gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ii||(Ii=!0,As=r),Ls(e,t)},n}function Yf(e,t,n){n=gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ls(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ls(e,t),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Xu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=zg.bind(null,e,t,n),t.then(e,e))}function Zu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ju(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=gt(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e)}var hg=kt.ReactCurrentOwner,ke=!1;function ve(e,t,n,r){t.child=e===null?kf(t,null,n,r):qn(t,e.child,n,r)}function qu(e,t,n,r,o){n=n.render;var i=t.ref;return Gn(t,o),r=Ta(e,t,n,r,i,o),n=Oa(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,St(e,t,o)):(G&&n&&ka(t),t.flags|=1,ve(e,t,r,o),t.child)}function ec(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Wa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Gf(e,t,i,r,o)):(e=oi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Yr,n(l,r)&&e.ref===t.ref)return St(e,t,o)}return t.flags|=1,e=Wt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Gf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Yr(i,r)&&e.ref===t.ref)if(ke=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(ke=!0);else return t.lanes=e.lanes,St(e,t,o)}return Is(e,t,n,r,o)}function Kf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(Bn,Pe),Pe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(Bn,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,H(Bn,Pe),Pe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,H(Bn,Pe),Pe|=r;return ve(e,t,o,n),t.child}function Xf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Is(e,t,n,r,o){var i=Ce(n)?hn:me.current;return i=Zn(t,i),Gn(t,o),n=Ta(e,t,n,r,i,o),r=Oa(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,St(e,t,o)):(G&&r&&ka(t),t.flags|=1,ve(e,t,n,o),t.child)}function tc(e,t,n,r,o){if(Ce(n)){var i=!0;Si(t)}else i=!1;if(Gn(t,o),t.stateNode===null)ti(e,t),Wf(t,n,r),_s(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ue(c):(c=Ce(n)?hn:me.current,c=Zn(t,c));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Ku(t,l,r,c),Nt=!1;var v=t.memoizedState;l.state=v,$i(t,r,l,o),u=t.memoizedState,a!==r||v!==u||je.current||Nt?(typeof m=="function"&&(Ps(t,n,m,r),u=t.memoizedState),(a=Nt||Gu(t,n,a,r,v,u,c))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Cf(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Qe(t.type,a),l.props=c,p=t.pendingProps,v=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ue(u):(u=Ce(n)?hn:me.current,u=Zn(t,u));var x=n.getDerivedStateFromProps;(m=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||v!==u)&&Ku(t,l,r,u),Nt=!1,v=t.memoizedState,l.state=v,$i(t,r,l,o);var w=t.memoizedState;a!==p||v!==w||je.current||Nt?(typeof x=="function"&&(Ps(t,n,x,r),w=t.memoizedState),(c=Nt||Gu(t,n,c,r,v,w,u)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Ns(e,t,n,r,i,o)}function Ns(e,t,n,r,o,i){Xf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Au(t,n,!1),St(e,t,i);r=t.stateNode,hg.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=qn(t,e.child,null,i),t.child=qn(t,null,a,i)):ve(e,t,a,i),t.memoizedState=r.state,o&&Au(t,n,!0),t.child}function Zf(e){var t=e.stateNode;t.pendingContext?Fu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fu(e,t.context,!1),La(e,t.containerInfo)}function nc(e,t,n,r,o){return Jn(),Ca(o),t.flags|=256,ve(e,t,n,r),t.child}var Rs={dehydrated:null,treeContext:null,retryLane:0};function Ts(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jf(e,t,n){var r=t.pendingProps,o=K.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),H(K,o&1),e===null)return $s(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Zi(l,r,0,null),e=dn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ts(n),t.memoizedState=Rs,e):ba(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return mg(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Wt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Wt(a,i):(i=dn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ts(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Rs,r}return i=e.child,e=i.sibling,r=Wt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ba(e,t){return t=Zi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _o(e,t,n,r){return r!==null&&Ca(r),qn(t,e.child,null,n),e=ba(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mg(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Rl(Error(P(422))),_o(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Zi({mode:"visible",children:r.children},o,0,null),i=dn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&qn(t,e.child,null,l),t.child.memoizedState=Ts(l),t.memoizedState=Rs,i);if(!(t.mode&1))return _o(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(P(419)),r=Rl(i,r,void 0),_o(e,t,l,r)}if(a=(l&e.childLanes)!==0,ke||a){if(r=ae,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,wt(e,o),Xe(r,e,o,-1))}return Ha(),r=Rl(Error(P(421))),_o(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Pg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Le=Ut(o.nextSibling),Ie=t,G=!0,Ge=null,e!==null&&(De[be++]=ht,De[be++]=mt,De[be++]=mn,ht=e.id,mt=e.overflow,mn=t),t=ba(t,r.children),t.flags|=4096,t)}function rc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zs(e.return,t,n)}function Tl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function qf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ve(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rc(e,n,t);else if(e.tag===19)rc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(K,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&zi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Tl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&zi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Tl(t,!0,n,null,i);break;case"together":Tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ti(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function St(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gg(e,t,n){switch(t.tag){case 3:Zf(t),Jn();break;case 5:Ef(t);break;case 1:Ce(t.type)&&Si(t);break;case 4:La(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;H(Ci,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?Jf(e,t,n):(H(K,K.current&1),e=St(e,t,n),e!==null?e.sibling:null);H(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return qf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),H(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,Kf(e,t,n)}return St(e,t,n)}var ep,Os,tp,np;ep=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Os=function(){};tp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,an(it.current);var i=null;switch(n){case"input":o=rs(e,o),r=rs(e,r),i=[];break;case"select":o=Z({},o,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":o=ls(e,o),r=ls(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xi)}as(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ar.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ar.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&W("scroll",e),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};np=function(e,t,n,r){n!==r&&(t.flags|=4)};function Sr(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vg(e,t,n){var r=t.pendingProps;switch(ja(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ce(t.type)&&wi(),pe(t),null;case 3:return r=t.stateNode,er(),Y(je),Y(me),Na(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ge!==null&&(Vs(Ge),Ge=null))),Os(e,t),pe(t),null;case 5:Ia(t);var o=an(Jr.current);if(n=t.type,e!==null&&t.stateNode!=null)tp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return pe(t),null}if(e=an(it.current),zo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[rt]=t,r[Xr]=i,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(o=0;o<Pr.length;o++)W(Pr[o],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":fu(r,i),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},W("invalid",r);break;case"textarea":hu(r,i),W("invalid",r)}as(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&$o(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&$o(r.textContent,a,e),o=["children",""+a]):Ar.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":yo(r),pu(r,i,!0);break;case"textarea":yo(r),mu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=xi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_d(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[rt]=t,e[Xr]=r,ep(e,t,!1,!1),t.stateNode=e;e:{switch(l=us(n,r),n){case"dialog":W("cancel",e),W("close",e),o=r;break;case"iframe":case"object":case"embed":W("load",e),o=r;break;case"video":case"audio":for(o=0;o<Pr.length;o++)W(Pr[o],e);o=r;break;case"source":W("error",e),o=r;break;case"img":case"image":case"link":W("error",e),W("load",e),o=r;break;case"details":W("toggle",e),o=r;break;case"input":fu(e,r),o=rs(e,r),W("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Z({},r,{value:void 0}),W("invalid",e);break;case"textarea":hu(e,r),o=ls(e,r),W("invalid",e);break;default:o=r}as(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?Nd(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ld(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ur(e,u):typeof u=="number"&&Ur(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ar.hasOwnProperty(i)?u!=null&&i==="onScroll"&&W("scroll",e):u!=null&&aa(e,i,u,l))}switch(n){case"input":yo(e),pu(e,r,!1);break;case"textarea":yo(e),mu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Yt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Hn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Hn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=xi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)np(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=an(Jr.current),an(it.current),zo(t)){if(r=t.stateNode,n=t.memoizedProps,r[rt]=t,(i=r.nodeValue!==n)&&(e=Ie,e!==null))switch(e.tag){case 3:$o(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$o(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rt]=t,t.stateNode=r}return pe(t),null;case 13:if(Y(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Le!==null&&t.mode&1&&!(t.flags&128))wf(),Jn(),t.flags|=98560,i=!1;else if(i=zo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[rt]=t}else Jn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),i=!1}else Ge!==null&&(Vs(Ge),Ge=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?oe===0&&(oe=3):Ha())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return er(),Os(e,t),e===null&&Gr(t.stateNode.containerInfo),pe(t),null;case 10:return za(t.type._context),pe(t),null;case 17:return Ce(t.type)&&wi(),pe(t),null;case 19:if(Y(K),i=t.memoizedState,i===null)return pe(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Sr(i,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=zi(e),l!==null){for(t.flags|=128,Sr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(K,K.current&1|2),t.child}e=e.sibling}i.tail!==null&&q()>nr&&(t.flags|=128,r=!0,Sr(i,!1),t.lanes=4194304)}else{if(!r)if(e=zi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!G)return pe(t),null}else 2*q()-i.renderingStartTime>nr&&n!==1073741824&&(t.flags|=128,r=!0,Sr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=q(),t.sibling=null,n=K.current,H(K,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return Va(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pe&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function yg(e,t){switch(ja(t),t.tag){case 1:return Ce(t.type)&&wi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return er(),Y(je),Y(me),Na(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ia(t),null;case 13:if(Y(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(K),null;case 4:return er(),null;case 10:return za(t.type._context),null;case 22:case 23:return Va(),null;case 24:return null;default:return null}}var Lo=!1,he=!1,xg=typeof WeakSet=="function"?WeakSet:Set,N=null;function Un(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function Ms(e,t,n){try{n()}catch(r){J(e,t,r)}}var oc=!1;function wg(e,t){if(xs=gi,e=sf(),Sa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,c=0,m=0,p=e,v=null;t:for(;;){for(var x;p!==n||o!==0&&p.nodeType!==3||(a=l+o),p!==i||r!==0&&p.nodeType!==3||(u=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(x=p.firstChild)!==null;)v=p,p=x;for(;;){if(p===e)break t;if(v===n&&++c===o&&(a=l),v===i&&++m===r&&(u=l),(x=p.nextSibling)!==null)break;p=v,v=p.parentNode}p=x}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ws={focusedElem:e,selectionRange:n},gi=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,$=w.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Qe(t.type,y),$);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(S){J(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return w=oc,oc=!1,w}function Mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ms(t,n,i)}o=o.next}while(o!==r)}}function Ki(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ds(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function rp(e){var t=e.alternate;t!==null&&(e.alternate=null,rp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[rt],delete t[Xr],delete t[js],delete t[ng],delete t[rg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function op(e){return e.tag===5||e.tag===3||e.tag===4}function ic(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||op(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xi));else if(r!==4&&(e=e.child,e!==null))for(bs(e,t,n),e=e.sibling;e!==null;)bs(e,t,n),e=e.sibling}function Fs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fs(e,t,n),e=e.sibling;e!==null;)Fs(e,t,n),e=e.sibling}var ue=null,Ye=!1;function Et(e,t,n){for(n=n.child;n!==null;)ip(e,t,n),n=n.sibling}function ip(e,t,n){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Ui,n)}catch{}switch(n.tag){case 5:he||Un(n,t);case 6:var r=ue,o=Ye;ue=null,Et(e,t,n),ue=r,Ye=o,ue!==null&&(Ye?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ye?(e=ue,n=n.stateNode,e.nodeType===8?zl(e.parentNode,n):e.nodeType===1&&zl(e,n),Wr(e)):zl(ue,n.stateNode));break;case 4:r=ue,o=Ye,ue=n.stateNode.containerInfo,Ye=!0,Et(e,t,n),ue=r,Ye=o;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ms(n,t,l),o=o.next}while(o!==r)}Et(e,t,n);break;case 1:if(!he&&(Un(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){J(n,t,a)}Et(e,t,n);break;case 21:Et(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,Et(e,t,n),he=r):Et(e,t,n);break;default:Et(e,t,n)}}function lc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xg),t.forEach(function(r){var o=_g.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Ye=!1;break e;case 3:ue=a.stateNode.containerInfo,Ye=!0;break e;case 4:ue=a.stateNode.containerInfo,Ye=!0;break e}a=a.return}if(ue===null)throw Error(P(160));ip(i,l,o),ue=null,Ye=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){J(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lp(t,e),t=t.sibling}function lp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),et(e),r&4){try{Mr(3,e,e.return),Ki(3,e)}catch(y){J(e,e.return,y)}try{Mr(5,e,e.return)}catch(y){J(e,e.return,y)}}break;case 1:We(t,e),et(e),r&512&&n!==null&&Un(n,n.return);break;case 5:if(We(t,e),et(e),r&512&&n!==null&&Un(n,n.return),e.flags&32){var o=e.stateNode;try{Ur(o,"")}catch(y){J(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&zd(o,i),us(a,l);var c=us(a,i);for(l=0;l<u.length;l+=2){var m=u[l],p=u[l+1];m==="style"?Nd(o,p):m==="dangerouslySetInnerHTML"?Ld(o,p):m==="children"?Ur(o,p):aa(o,m,p,c)}switch(a){case"input":os(o,i);break;case"textarea":Pd(o,i);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Hn(o,!!i.multiple,x,!1):v!==!!i.multiple&&(i.defaultValue!=null?Hn(o,!!i.multiple,i.defaultValue,!0):Hn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Xr]=i}catch(y){J(e,e.return,y)}}break;case 6:if(We(t,e),et(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){J(e,e.return,y)}}break;case 3:if(We(t,e),et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wr(t.containerInfo)}catch(y){J(e,e.return,y)}break;case 4:We(t,e),et(e);break;case 13:We(t,e),et(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ua=q())),r&4&&lc(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(he=(c=he)||m,We(t,e),he=c):We(t,e),et(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(N=e,m=e.child;m!==null;){for(p=N=m;N!==null;){switch(v=N,x=v.child,v.tag){case 0:case 11:case 14:case 15:Mr(4,v,v.return);break;case 1:Un(v,v.return);var w=v.stateNode;if(typeof w.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){J(r,n,y)}}break;case 5:Un(v,v.return);break;case 22:if(v.memoizedState!==null){ac(p);continue}}x!==null?(x.return=v,N=x):ac(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{o=p.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,u=p.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Id("display",l))}catch(y){J(e,e.return,y)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(y){J(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:We(t,e),et(e),r&4&&lc(e);break;case 21:break;default:We(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(op(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ur(o,""),r.flags&=-33);var i=ic(e);Fs(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=ic(e);bs(e,a,l);break;default:throw Error(P(161))}}catch(u){J(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sg(e,t,n){N=e,sp(e)}function sp(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var o=N,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Lo;if(!l){var a=o.alternate,u=a!==null&&a.memoizedState!==null||he;a=Lo;var c=he;if(Lo=l,(he=u)&&!c)for(N=o;N!==null;)l=N,u=l.child,l.tag===22&&l.memoizedState!==null?uc(o):u!==null?(u.return=l,N=u):uc(o);for(;i!==null;)N=i,sp(i),i=i.sibling;N=o,Lo=a,he=c}sc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,N=i):sc(e)}}function sc(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||Ki(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Wu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Wr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}he||t.flags&512&&Ds(t)}catch(v){J(t,t.return,v)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function ac(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function uc(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ki(4,t)}catch(u){J(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){J(t,o,u)}}var i=t.return;try{Ds(t)}catch(u){J(t,i,u)}break;case 5:var l=t.return;try{Ds(t)}catch(u){J(t,l,u)}}}catch(u){J(t,t.return,u)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var kg=Math.ceil,Li=kt.ReactCurrentDispatcher,Fa=kt.ReactCurrentOwner,Ae=kt.ReactCurrentBatchConfig,F=0,ae=null,te=null,ce=0,Pe=0,Bn=Xt(0),oe=0,no=null,vn=0,Xi=0,Aa=0,Dr=null,Se=null,Ua=0,nr=1/0,dt=null,Ii=!1,As=null,Vt=null,Io=!1,Mt=null,Ni=0,br=0,Us=null,ni=-1,ri=0;function ye(){return F&6?q():ni!==-1?ni:ni=q()}function Ht(e){return e.mode&1?F&2&&ce!==0?ce&-ce:ig.transition!==null?(ri===0&&(ri=Hd()),ri):(e=B,e!==0||(e=window.event,e=e===void 0?16:Zd(e.type)),e):1}function Xe(e,t,n,r){if(50<br)throw br=0,Us=null,Error(P(185));ao(e,n,r),(!(F&2)||e!==ae)&&(e===ae&&(!(F&2)&&(Xi|=n),oe===4&&Tt(e,ce)),Ee(e,r),n===1&&F===0&&!(t.mode&1)&&(nr=q()+500,Qi&&Zt()))}function Ee(e,t){var n=e.callbackNode;im(e,t);var r=mi(e,e===ae?ce:0);if(r===0)n!==null&&yu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&yu(n),t===1)e.tag===0?og(cc.bind(null,e)):vf(cc.bind(null,e)),eg(function(){!(F&6)&&Zt()}),n=null;else{switch(Wd(r)){case 1:n=pa;break;case 4:n=Bd;break;case 16:n=hi;break;case 536870912:n=Vd;break;default:n=hi}n=mp(n,ap.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ap(e,t){if(ni=-1,ri=0,F&6)throw Error(P(327));var n=e.callbackNode;if(Kn()&&e.callbackNode!==n)return null;var r=mi(e,e===ae?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ri(e,r);else{t=r;var o=F;F|=2;var i=cp();(ae!==e||ce!==t)&&(dt=null,nr=q()+500,cn(e,t));do try{Eg();break}catch(a){up(e,a)}while(!0);$a(),Li.current=i,F=o,te!==null?t=0:(ae=null,ce=0,t=oe)}if(t!==0){if(t===2&&(o=hs(e),o!==0&&(r=o,t=Bs(e,o))),t===1)throw n=no,cn(e,0),Tt(e,r),Ee(e,q()),n;if(t===6)Tt(e,r);else{if(o=e.current.alternate,!(r&30)&&!jg(o)&&(t=Ri(e,r),t===2&&(i=hs(e),i!==0&&(r=i,t=Bs(e,i))),t===1))throw n=no,cn(e,0),Tt(e,r),Ee(e,q()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:rn(e,Se,dt);break;case 3:if(Tt(e,r),(r&130023424)===r&&(t=Ua+500-q(),10<t)){if(mi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ks(rn.bind(null,e,Se,dt),t);break}rn(e,Se,dt);break;case 4:if(Tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Ke(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kg(r/1960))-r,10<r){e.timeoutHandle=ks(rn.bind(null,e,Se,dt),r);break}rn(e,Se,dt);break;case 5:rn(e,Se,dt);break;default:throw Error(P(329))}}}return Ee(e,q()),e.callbackNode===n?ap.bind(null,e):null}function Bs(e,t){var n=Dr;return e.current.memoizedState.isDehydrated&&(cn(e,t).flags|=256),e=Ri(e,t),e!==2&&(t=Se,Se=n,t!==null&&Vs(t)),e}function Vs(e){Se===null?Se=e:Se.push.apply(Se,e)}function jg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Je(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tt(e,t){for(t&=~Aa,t&=~Xi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function cc(e){if(F&6)throw Error(P(327));Kn();var t=mi(e,0);if(!(t&1))return Ee(e,q()),null;var n=Ri(e,t);if(e.tag!==0&&n===2){var r=hs(e);r!==0&&(t=r,n=Bs(e,r))}if(n===1)throw n=no,cn(e,0),Tt(e,t),Ee(e,q()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rn(e,Se,dt),Ee(e,q()),null}function Ba(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(nr=q()+500,Qi&&Zt())}}function yn(e){Mt!==null&&Mt.tag===0&&!(F&6)&&Kn();var t=F;F|=1;var n=Ae.transition,r=B;try{if(Ae.transition=null,B=1,e)return e()}finally{B=r,Ae.transition=n,F=t,!(F&6)&&Zt()}}function Va(){Pe=Bn.current,Y(Bn)}function cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qm(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(ja(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wi();break;case 3:er(),Y(je),Y(me),Na();break;case 5:Ia(r);break;case 4:er();break;case 13:Y(K);break;case 19:Y(K);break;case 10:za(r.type._context);break;case 22:case 23:Va()}n=n.return}if(ae=e,te=e=Wt(e.current,null),ce=Pe=t,oe=0,no=null,Aa=Xi=vn=0,Se=Dr=null,sn!==null){for(t=0;t<sn.length;t++)if(n=sn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}sn=null}return e}function up(e,t){do{var n=te;try{if($a(),qo.current=_i,Pi){for(var r=X.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Pi=!1}if(gn=0,ie=re=X=null,Or=!1,qr=0,Fa.current=null,n===null||n.return===null){oe=1,no=t,te=null;break}e:{var i=e,l=n.return,a=n,u=t;if(t=ce,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=a,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var v=m.alternate;v?(m.updateQueue=v.updateQueue,m.memoizedState=v.memoizedState,m.lanes=v.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=Zu(l);if(x!==null){x.flags&=-257,Ju(x,l,a,i,t),x.mode&1&&Xu(i,c,t),t=x,u=c;var w=t.updateQueue;if(w===null){var y=new Set;y.add(u),t.updateQueue=y}else w.add(u);break e}else{if(!(t&1)){Xu(i,c,t),Ha();break e}u=Error(P(426))}}else if(G&&a.mode&1){var $=Zu(l);if($!==null){!($.flags&65536)&&($.flags|=256),Ju($,l,a,i,t),Ca(tr(u,a));break e}}i=u=tr(u,a),oe!==4&&(oe=2),Dr===null?Dr=[i]:Dr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Qf(i,u,t);Hu(i,f);break e;case 1:a=u;var d=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Vt===null||!Vt.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Yf(i,a,t);Hu(i,S);break e}}i=i.return}while(i!==null)}fp(n)}catch(z){t=z,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function cp(){var e=Li.current;return Li.current=_i,e===null?_i:e}function Ha(){(oe===0||oe===3||oe===2)&&(oe=4),ae===null||!(vn&268435455)&&!(Xi&268435455)||Tt(ae,ce)}function Ri(e,t){var n=F;F|=2;var r=cp();(ae!==e||ce!==t)&&(dt=null,cn(e,t));do try{Cg();break}catch(o){up(e,o)}while(!0);if($a(),F=n,Li.current=r,te!==null)throw Error(P(261));return ae=null,ce=0,oe}function Cg(){for(;te!==null;)dp(te)}function Eg(){for(;te!==null&&!Xh();)dp(te)}function dp(e){var t=hp(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?fp(e):te=t,Fa.current=null}function fp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yg(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,te=null;return}}else if(n=vg(n,t,Pe),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);oe===0&&(oe=5)}function rn(e,t,n){var r=B,o=Ae.transition;try{Ae.transition=null,B=1,$g(e,t,n,r)}finally{Ae.transition=o,B=r}return null}function $g(e,t,n,r){do Kn();while(Mt!==null);if(F&6)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(lm(e,i),e===ae&&(te=ae=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Io||(Io=!0,mp(hi,function(){return Kn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ae.transition,Ae.transition=null;var l=B;B=1;var a=F;F|=4,Fa.current=null,wg(e,n),lp(n,e),Qm(ws),gi=!!xs,ws=xs=null,e.current=n,Sg(n),Zh(),F=a,B=l,Ae.transition=i}else e.current=n;if(Io&&(Io=!1,Mt=e,Ni=o),i=e.pendingLanes,i===0&&(Vt=null),em(n.stateNode),Ee(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ii)throw Ii=!1,e=As,As=null,e;return Ni&1&&e.tag!==0&&Kn(),i=e.pendingLanes,i&1?e===Us?br++:(br=0,Us=e):br=0,Zt(),null}function Kn(){if(Mt!==null){var e=Wd(Ni),t=Ae.transition,n=B;try{if(Ae.transition=null,B=16>e?16:e,Mt===null)var r=!1;else{if(e=Mt,Mt=null,Ni=0,F&6)throw Error(P(331));var o=F;for(F|=4,N=e.current;N!==null;){var i=N,l=i.child;if(N.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(N=c;N!==null;){var m=N;switch(m.tag){case 0:case 11:case 15:Mr(8,m,i)}var p=m.child;if(p!==null)p.return=m,N=p;else for(;N!==null;){m=N;var v=m.sibling,x=m.return;if(rp(m),m===c){N=null;break}if(v!==null){v.return=x,N=v;break}N=x}}}var w=i.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var $=y.sibling;y.sibling=null,y=$}while(y!==null)}}N=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,N=l;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Mr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,N=f;break e}N=i.return}}var d=e.current;for(N=d;N!==null;){l=N;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,N=g;else e:for(l=d;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ki(9,a)}}catch(z){J(a,a.return,z)}if(a===l){N=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,N=S;break e}N=a.return}}if(F=o,Zt(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Ui,e)}catch{}r=!0}return r}finally{B=n,Ae.transition=t}}return!1}function dc(e,t,n){t=tr(n,t),t=Qf(e,t,1),e=Bt(e,t,1),t=ye(),e!==null&&(ao(e,1,t),Ee(e,t))}function J(e,t,n){if(e.tag===3)dc(e,e,n);else for(;t!==null;){if(t.tag===3){dc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){e=tr(n,e),e=Yf(t,e,1),t=Bt(t,e,1),e=ye(),t!==null&&(ao(t,1,e),Ee(t,e));break}}t=t.return}}function zg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(ce&n)===n&&(oe===4||oe===3&&(ce&130023424)===ce&&500>q()-Ua?cn(e,0):Aa|=n),Ee(e,t)}function pp(e,t){t===0&&(e.mode&1?(t=So,So<<=1,!(So&130023424)&&(So=4194304)):t=1);var n=ye();e=wt(e,t),e!==null&&(ao(e,t,n),Ee(e,n))}function Pg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),pp(e,n)}function _g(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),pp(e,n)}var hp;hp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ke=!1,gg(e,t,n);ke=!!(e.flags&131072)}else ke=!1,G&&t.flags&1048576&&yf(t,ji,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ti(e,t),e=t.pendingProps;var o=Zn(t,me.current);Gn(t,n),o=Ta(null,t,r,e,o,n);var i=Oa();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(i=!0,Si(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,_a(t),o.updater=Gi,t.stateNode=o,o._reactInternals=t,_s(t,r,e,n),t=Ns(null,t,r,!0,i,n)):(t.tag=0,G&&i&&ka(t),ve(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ti(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Ig(r),e=Qe(r,e),o){case 0:t=Is(null,t,r,e,n);break e;case 1:t=tc(null,t,r,e,n);break e;case 11:t=qu(null,t,r,e,n);break e;case 14:t=ec(null,t,r,Qe(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),Is(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),tc(e,t,r,o,n);case 3:e:{if(Zf(t),e===null)throw Error(P(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Cf(e,t),$i(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=tr(Error(P(423)),t),t=nc(e,t,r,n,o);break e}else if(r!==o){o=tr(Error(P(424)),t),t=nc(e,t,r,n,o);break e}else for(Le=Ut(t.stateNode.containerInfo.firstChild),Ie=t,G=!0,Ge=null,n=kf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jn(),r===o){t=St(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return Ef(t),e===null&&$s(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Ss(r,o)?l=null:i!==null&&Ss(r,i)&&(t.flags|=32),Xf(e,t),ve(e,t,l,n),t.child;case 6:return e===null&&$s(t),null;case 13:return Jf(e,t,n);case 4:return La(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=qn(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),qu(e,t,r,o,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,H(Ci,r._currentValue),r._currentValue=l,i!==null)if(Je(i.value,l)){if(i.children===o.children&&!je.current){t=St(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=gt(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),zs(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(P(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),zs(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ve(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Gn(t,n),o=Ue(o),r=r(o),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,o=Qe(r,t.pendingProps),o=Qe(r.type,o),ec(e,t,r,o,n);case 15:return Gf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),ti(e,t),t.tag=1,Ce(r)?(e=!0,Si(t)):e=!1,Gn(t,n),Wf(t,r,o),_s(t,r,o,n),Ns(null,t,r,!0,e,n);case 19:return qf(e,t,n);case 22:return Kf(e,t,n)}throw Error(P(156,t.tag))};function mp(e,t){return Ud(e,t)}function Lg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new Lg(e,t,n,r)}function Wa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ig(e){if(typeof e=="function")return Wa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ca)return 11;if(e===da)return 14}return 2}function Wt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oi(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Wa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Nn:return dn(n.children,o,i,t);case ua:l=8,o|=8;break;case ql:return e=Fe(12,n,t,o|2),e.elementType=ql,e.lanes=i,e;case es:return e=Fe(13,n,t,o),e.elementType=es,e.lanes=i,e;case ts:return e=Fe(19,n,t,o),e.elementType=ts,e.lanes=i,e;case Cd:return Zi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kd:l=10;break e;case jd:l=9;break e;case ca:l=11;break e;case da:l=14;break e;case It:l=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Fe(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function dn(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function Zi(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=Cd,e.lanes=n,e.stateNode={isHidden:!1},e}function Ol(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function Ml(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ng(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gl(0),this.expirationTimes=gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Qa(e,t,n,r,o,i,l,a,u){return e=new Ng(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Fe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_a(i),e}function Rg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function gp(e){if(!e)return Gt;e=e._reactInternals;e:{if(kn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Ce(n))return gf(e,n,t)}return t}function vp(e,t,n,r,o,i,l,a,u){return e=Qa(n,r,!0,e,o,i,l,a,u),e.context=gp(null),n=e.current,r=ye(),o=Ht(n),i=gt(r,o),i.callback=t??null,Bt(n,i,o),e.current.lanes=o,ao(e,o,r),Ee(e,r),e}function Ji(e,t,n,r){var o=t.current,i=ye(),l=Ht(o);return n=gp(n),t.context===null?t.context=n:t.pendingContext=n,t=gt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(o,t,l),e!==null&&(Xe(e,o,l,i),Jo(e,o,l)),l}function Ti(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ya(e,t){fc(e,t),(e=e.alternate)&&fc(e,t)}function Tg(){return null}var yp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ga(e){this._internalRoot=e}qi.prototype.render=Ga.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Ji(e,t,null,null)};qi.prototype.unmount=Ga.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yn(function(){Ji(null,e,null,null)}),t[xt]=null}};function qi(e){this._internalRoot=e}qi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&Xd(e)}};function Ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function el(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pc(){}function Og(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Ti(l);i.call(c)}}var l=vp(t,r,e,0,null,!1,!1,"",pc);return e._reactRootContainer=l,e[xt]=l.current,Gr(e.nodeType===8?e.parentNode:e),yn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Ti(u);a.call(c)}}var u=Qa(e,0,!1,null,null,!1,!1,"",pc);return e._reactRootContainer=u,e[xt]=u.current,Gr(e.nodeType===8?e.parentNode:e),yn(function(){Ji(t,u,n,r)}),u}function tl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var u=Ti(l);a.call(u)}}Ji(t,l,e,o)}else l=Og(n,t,e,o,r);return Ti(l)}Qd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zr(t.pendingLanes);n!==0&&(ha(t,n|1),Ee(t,q()),!(F&6)&&(nr=q()+500,Zt()))}break;case 13:yn(function(){var r=wt(e,1);if(r!==null){var o=ye();Xe(r,e,1,o)}}),Ya(e,1)}};ma=function(e){if(e.tag===13){var t=wt(e,134217728);if(t!==null){var n=ye();Xe(t,e,134217728,n)}Ya(e,134217728)}};Yd=function(e){if(e.tag===13){var t=Ht(e),n=wt(e,t);if(n!==null){var r=ye();Xe(n,e,t,r)}Ya(e,t)}};Gd=function(){return B};Kd=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};ds=function(e,t,n){switch(t){case"input":if(os(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Wi(r);if(!o)throw Error(P(90));$d(r),os(r,o)}}}break;case"textarea":Pd(e,n);break;case"select":t=n.value,t!=null&&Hn(e,!!n.multiple,t,!1)}};Od=Ba;Md=yn;var Mg={usingClientEntryPoint:!1,Events:[co,Mn,Wi,Rd,Td,Ba]},kr={findFiberByHostInstance:ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dg={bundleType:kr.bundleType,version:kr.version,rendererPackageName:kr.rendererPackageName,rendererConfig:kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fd(e),e===null?null:e.stateNode},findFiberByHostInstance:kr.findFiberByHostInstance||Tg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var No=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!No.isDisabled&&No.supportsFiber)try{Ui=No.inject(Dg),ot=No}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mg;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ka(t))throw Error(P(200));return Rg(e,t,null,n)};Re.createRoot=function(e,t){if(!Ka(e))throw Error(P(299));var n=!1,r="",o=yp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Qa(e,1,!1,null,null,n,!1,r,o),e[xt]=t.current,Gr(e.nodeType===8?e.parentNode:e),new Ga(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Fd(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return yn(e)};Re.hydrate=function(e,t,n){if(!el(t))throw Error(P(200));return tl(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!Ka(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=yp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=vp(t,null,e,1,n??null,o,!1,i,l),e[xt]=t.current,Gr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new qi(t)};Re.render=function(e,t,n){if(!el(t))throw Error(P(200));return tl(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!el(e))throw Error(P(40));return e._reactRootContainer?(yn(function(){tl(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1};Re.unstable_batchedUpdates=Ba;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!el(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return tl(e,t,n,!1,r)};Re.version="18.3.1-next-f1338f8080-20240426";function xp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xp)}catch(e){console.error(e)}}xp(),yd.exports=Re;var bg=yd.exports,hc=bg;Zl.createRoot=hc.createRoot,Zl.hydrateRoot=hc.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ro(){return ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ro.apply(this,arguments)}var Dt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Dt||(Dt={}));const mc="popstate";function Fg(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:a}=r.location;return Hs("",{pathname:i,search:l,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Sp(o)}return Ug(t,n,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ag(){return Math.random().toString(36).substr(2,8)}function gc(e,t){return{usr:e.state,key:e.key,idx:t}}function Hs(e,t,n,r){return n===void 0&&(n=null),ro({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?dr(t):t,{state:n,key:t&&t.key||r||Ag()})}function Sp(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function dr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ug(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=Dt.Pop,u=null,c=m();c==null&&(c=0,l.replaceState(ro({},l.state,{idx:c}),""));function m(){return(l.state||{idx:null}).idx}function p(){a=Dt.Pop;let $=m(),f=$==null?null:$-c;c=$,u&&u({action:a,location:y.location,delta:f})}function v($,f){a=Dt.Push;let d=Hs(y.location,$,f);c=m()+1;let g=gc(d,c),S=y.createHref(d);try{l.pushState(g,"",S)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;o.location.assign(S)}i&&u&&u({action:a,location:y.location,delta:1})}function x($,f){a=Dt.Replace;let d=Hs(y.location,$,f);c=m();let g=gc(d,c),S=y.createHref(d);l.replaceState(g,"",S),i&&u&&u({action:a,location:y.location,delta:0})}function w($){let f=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof $=="string"?$:Sp($);return d=d.replace(/ $/,"%20"),ne(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let y={get action(){return a},get location(){return e(o,l)},listen($){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(mc,p),u=$,()=>{o.removeEventListener(mc,p),u=null}},createHref($){return t(o,$)},createURL:w,encodeLocation($){let f=w($);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:v,replace:x,go($){return l.go($)}};return y}var vc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(vc||(vc={}));function Bg(e,t,n){return n===void 0&&(n="/"),Vg(e,t,n)}function Vg(e,t,n,r){let o=typeof t=="string"?dr(t):t,i=Cp(o.pathname||"/",n);if(i==null)return null;let l=kp(e);Hg(l);let a=null;for(let u=0;a==null&&u<l.length;++u){let c=n0(i);a=qg(l[u],c)}return a}function kp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,a)=>{let u={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};u.relativePath.startsWith("/")&&(ne(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=fn([r,u.relativePath]),m=n.concat(u);i.children&&i.children.length>0&&(ne(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),kp(i.children,t,m,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Zg(c,i.index),routesMeta:m})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let u of jp(i.path))o(i,l,u)}),t}function jp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=jp(r.join("/")),a=[];return a.push(...l.map(u=>u===""?i:[i,u].join("/"))),o&&a.push(...l),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function Hg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Jg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Wg=/^:[\w-]+$/,Qg=3,Yg=2,Gg=1,Kg=10,Xg=-2,yc=e=>e==="*";function Zg(e,t){let n=e.split("/"),r=n.length;return n.some(yc)&&(r+=Xg),t&&(r+=Yg),n.filter(o=>!yc(o)).reduce((o,i)=>o+(Wg.test(i)?Qg:i===""?Gg:Kg),r)}function Jg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function qg(e,t,n){let{routesMeta:r}=e,o={},i="/",l=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,m=i==="/"?t:t.slice(i.length)||"/",p=e0({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},m),v=u.route;if(!p)return null;Object.assign(o,p.params),l.push({params:o,pathname:fn([i,p.pathname]),pathnameBase:l0(fn([i,p.pathnameBase])),route:v}),p.pathnameBase!=="/"&&(i=fn([i,p.pathnameBase]))}return l}function e0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=t0(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,m,p)=>{let{paramName:v,isOptional:x}=m;if(v==="*"){let y=a[p]||"";l=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const w=a[p];return x&&!w?c[v]=void 0:c[v]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:l,pattern:e}}function t0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),wp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function n0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Cp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function r0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?dr(e):e;return{pathname:n?n.startsWith("/")?n:o0(n,t):t,search:s0(r),hash:a0(o)}}function o0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Dl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function i0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ep(e,t){let n=i0(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $p(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=dr(e):(o=ro({},e),ne(!o.pathname||!o.pathname.includes("?"),Dl("?","pathname","search",o)),ne(!o.pathname||!o.pathname.includes("#"),Dl("#","pathname","hash",o)),ne(!o.search||!o.search.includes("#"),Dl("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(l==null)a=n;else{let p=t.length-1;if(!r&&l.startsWith("..")){let v=l.split("/");for(;v[0]==="..";)v.shift(),p-=1;o.pathname=v.join("/")}a=p>=0?t[p]:"/"}let u=r0(o,a),c=l&&l!=="/"&&l.endsWith("/"),m=(i||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||m)&&(u.pathname+="/"),u}const fn=e=>e.join("/").replace(/\/\/+/g,"/"),l0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),s0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,a0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function u0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const zp=["post","put","patch","delete"];new Set(zp);const c0=["get",...zp];new Set(c0);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oo(){return oo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oo.apply(this,arguments)}const Xa=k.createContext(null),d0=k.createContext(null),po=k.createContext(null),nl=k.createContext(null),Jt=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Pp=k.createContext(null);function ho(){return k.useContext(nl)!=null}function rl(){return ho()||ne(!1),k.useContext(nl).location}function _p(e){k.useContext(po).static||k.useLayoutEffect(e)}function jn(){let{isDataRoute:e}=k.useContext(Jt);return e?E0():f0()}function f0(){ho()||ne(!1);let e=k.useContext(Xa),{basename:t,future:n,navigator:r}=k.useContext(po),{matches:o}=k.useContext(Jt),{pathname:i}=rl(),l=JSON.stringify(Ep(o,n.v7_relativeSplatPath)),a=k.useRef(!1);return _p(()=>{a.current=!0}),k.useCallback(function(c,m){if(m===void 0&&(m={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let p=$p(c,JSON.parse(l),i,m.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:fn([t,p.pathname])),(m.replace?r.replace:r.push)(p,m.state,m)},[t,r,l,i,e])}function p0(){let{matches:e}=k.useContext(Jt),t=e[e.length-1];return t?t.params:{}}function h0(e,t){return m0(e,t)}function m0(e,t,n,r){ho()||ne(!1);let{navigator:o,static:i}=k.useContext(po),{matches:l}=k.useContext(Jt),a=l[l.length-1],u=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let m=rl(),p;if(t){var v;let f=typeof t=="string"?dr(t):t;c==="/"||(v=f.pathname)!=null&&v.startsWith(c)||ne(!1),p=f}else p=m;let x=p.pathname||"/",w=x;if(c!=="/"){let f=c.replace(/^\//,"").split("/");w="/"+x.replace(/^\//,"").split("/").slice(f.length).join("/")}let y=Bg(e,{pathname:w}),$=w0(y&&y.map(f=>Object.assign({},f,{params:Object.assign({},u,f.params),pathname:fn([c,o.encodeLocation?o.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?c:fn([c,o.encodeLocation?o.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),l,n,r);return t&&$?k.createElement(nl.Provider,{value:{location:oo({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Dt.Pop}},$):$}function g0(){let e=C0(),t=u0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:o},n):null,null)}const v0=k.createElement(g0,null);class y0 extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(Jt.Provider,{value:this.props.routeContext},k.createElement(Pp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function x0(e){let{routeContext:t,match:n,children:r}=e,o=k.useContext(Xa);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Jt.Provider,{value:t},r)}function w0(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let m=l.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);m>=0||ne(!1),l=l.slice(0,Math.min(l.length,m+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<l.length;m++){let p=l[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=m),p.route.id){let{loaderData:v,errors:x}=n,w=p.route.loader&&v[p.route.id]===void 0&&(!x||x[p.route.id]===void 0);if(p.route.lazy||w){u=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((m,p,v)=>{let x,w=!1,y=null,$=null;n&&(x=a&&p.route.id?a[p.route.id]:void 0,y=p.route.errorElement||v0,u&&(c<0&&v===0?($0("route-fallback"),w=!0,$=null):c===v&&(w=!0,$=p.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,v+1)),d=()=>{let g;return x?g=y:w?g=$:p.route.Component?g=k.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=m,k.createElement(x0,{match:p,routeContext:{outlet:m,matches:f,isDataRoute:n!=null},children:g})};return n&&(p.route.ErrorBoundary||p.route.errorElement||v===0)?k.createElement(y0,{location:n.location,revalidation:n.revalidation,component:y,error:x,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var Lp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Lp||{}),Ip=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ip||{});function S0(e){let t=k.useContext(Xa);return t||ne(!1),t}function k0(e){let t=k.useContext(d0);return t||ne(!1),t}function j0(e){let t=k.useContext(Jt);return t||ne(!1),t}function Np(e){let t=j0(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function C0(){var e;let t=k.useContext(Pp),n=k0(),r=Np();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function E0(){let{router:e}=S0(Lp.UseNavigateStable),t=Np(Ip.UseNavigateStable),n=k.useRef(!1);return _p(()=>{n.current=!0}),k.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,oo({fromRouteId:t},i)))},[e,t])}const xc={};function $0(e,t,n){xc[e]||(xc[e]=!0)}function z0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function jr(e){let{to:t,replace:n,state:r,relative:o}=e;ho()||ne(!1);let{future:i,static:l}=k.useContext(po),{matches:a}=k.useContext(Jt),{pathname:u}=rl(),c=jn(),m=$p(t,Ep(a,i.v7_relativeSplatPath),u,o==="path"),p=JSON.stringify(m);return k.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:o}),[c,p,o,n,r]),null}function on(e){ne(!1)}function P0(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Dt.Pop,navigator:i,static:l=!1,future:a}=e;ho()&&ne(!1);let u=t.replace(/^\/*/,"/"),c=k.useMemo(()=>({basename:u,navigator:i,static:l,future:oo({v7_relativeSplatPath:!1},a)}),[u,a,i,l]);typeof r=="string"&&(r=dr(r));let{pathname:m="/",search:p="",hash:v="",state:x=null,key:w="default"}=r,y=k.useMemo(()=>{let $=Cp(m,u);return $==null?null:{location:{pathname:$,search:p,hash:v,state:x,key:w},navigationType:o}},[u,m,p,v,x,w,o]);return y==null?null:k.createElement(po.Provider,{value:c},k.createElement(nl.Provider,{children:n,value:y}))}function _0(e){let{children:t,location:n}=e;return h0(Ws(t),n)}new Promise(()=>{});function Ws(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,o)=>{if(!k.isValidElement(r))return;let i=[...t,o];if(r.type===k.Fragment){n.push.apply(n,Ws(r.props.children,i));return}r.type!==on&&ne(!1),!r.props.index||!r.props.children||ne(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Ws(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const L0="6";try{window.__reactRouterVersion=L0}catch{}const I0="startTransition",wc=zh[I0];function N0(e){let{basename:t,children:n,future:r,window:o}=e,i=k.useRef();i.current==null&&(i.current=Fg({window:o,v5Compat:!0}));let l=i.current,[a,u]=k.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},m=k.useCallback(p=>{c&&wc?wc(()=>u(p)):u(p)},[u,c]);return k.useLayoutEffect(()=>l.listen(m),[l,m]),k.useEffect(()=>z0(r),[r]),k.createElement(P0,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}var Sc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Sc||(Sc={}));var kc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(kc||(kc={}));var se=function(){return se=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},se.apply(this,arguments)};function rr(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Q="-ms-",Fr="-moz-",U="-webkit-",Rp="comm",ol="rule",Za="decl",R0="@import",Tp="@keyframes",T0="@layer",Op=Math.abs,Ja=String.fromCharCode,Qs=Object.assign;function O0(e,t){return le(e,0)^45?(((t<<2^le(e,0))<<2^le(e,1))<<2^le(e,2))<<2^le(e,3):0}function Mp(e){return e.trim()}function ft(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,n){return e.replace(t,n)}function ii(e,t,n){return e.indexOf(t,n)}function le(e,t){return e.charCodeAt(t)|0}function or(e,t,n){return e.slice(t,n)}function nt(e){return e.length}function Dp(e){return e.length}function _r(e,t){return t.push(e),e}function M0(e,t){return e.map(t).join("")}function jc(e,t){return e.filter(function(n){return!ft(n,t)})}var il=1,ir=1,bp=0,Ve=0,ee=0,fr="";function ll(e,t,n,r,o,i,l,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:il,column:ir,length:l,return:"",siblings:a}}function Lt(e,t){return Qs(ll("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function $n(e){for(;e.root;)e=Lt(e.root,{children:[e]});_r(e,e.siblings)}function D0(){return ee}function b0(){return ee=Ve>0?le(fr,--Ve):0,ir--,ee===10&&(ir=1,il--),ee}function Ze(){return ee=Ve<bp?le(fr,Ve++):0,ir++,ee===10&&(ir=1,il++),ee}function pn(){return le(fr,Ve)}function li(){return Ve}function sl(e,t){return or(fr,e,t)}function Ys(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function F0(e){return il=ir=1,bp=nt(fr=e),Ve=0,[]}function A0(e){return fr="",e}function bl(e){return Mp(sl(Ve-1,Gs(e===91?e+2:e===40?e+1:e)))}function U0(e){for(;(ee=pn())&&ee<33;)Ze();return Ys(e)>2||Ys(ee)>3?"":" "}function B0(e,t){for(;--t&&Ze()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return sl(e,li()+(t<6&&pn()==32&&Ze()==32))}function Gs(e){for(;Ze();)switch(ee){case e:return Ve;case 34:case 39:e!==34&&e!==39&&Gs(ee);break;case 40:e===41&&Gs(e);break;case 92:Ze();break}return Ve}function V0(e,t){for(;Ze()&&e+ee!==57;)if(e+ee===84&&pn()===47)break;return"/*"+sl(t,Ve-1)+"*"+Ja(e===47?e:Ze())}function H0(e){for(;!Ys(pn());)Ze();return sl(e,Ve)}function W0(e){return A0(si("",null,null,null,[""],e=F0(e),0,[0],e))}function si(e,t,n,r,o,i,l,a,u){for(var c=0,m=0,p=l,v=0,x=0,w=0,y=1,$=1,f=1,d=0,g="",S=o,z=i,_=r,C=g;$;)switch(w=d,d=Ze()){case 40:if(w!=108&&le(C,p-1)==58){ii(C+=O(bl(d),"&","&\f"),"&\f",Op(c?a[c-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:C+=bl(d);break;case 9:case 10:case 13:case 32:C+=U0(w);break;case 92:C+=B0(li()-1,7);continue;case 47:switch(pn()){case 42:case 47:_r(Q0(V0(Ze(),li()),t,n,u),u);break;default:C+="/"}break;case 123*y:a[c++]=nt(C)*f;case 125*y:case 59:case 0:switch(d){case 0:case 125:$=0;case 59+m:f==-1&&(C=O(C,/\f/g,"")),x>0&&nt(C)-p&&_r(x>32?Ec(C+";",r,n,p-1,u):Ec(O(C," ","")+";",r,n,p-2,u),u);break;case 59:C+=";";default:if(_r(_=Cc(C,t,n,c,m,o,a,g,S=[],z=[],p,i),i),d===123)if(m===0)si(C,t,_,_,S,i,p,a,z);else switch(v===99&&le(C,3)===110?100:v){case 100:case 108:case 109:case 115:si(e,_,_,r&&_r(Cc(e,_,_,0,0,o,a,g,o,S=[],p,z),z),o,z,p,a,r?S:z);break;default:si(C,_,_,_,[""],z,0,a,z)}}c=m=x=0,y=f=1,g=C="",p=l;break;case 58:p=1+nt(C),x=w;default:if(y<1){if(d==123)--y;else if(d==125&&y++==0&&b0()==125)continue}switch(C+=Ja(d),d*y){case 38:f=m>0?1:(C+="\f",-1);break;case 44:a[c++]=(nt(C)-1)*f,f=1;break;case 64:pn()===45&&(C+=bl(Ze())),v=pn(),m=p=nt(g=C+=H0(li())),d++;break;case 45:w===45&&nt(C)==2&&(y=0)}}return i}function Cc(e,t,n,r,o,i,l,a,u,c,m,p){for(var v=o-1,x=o===0?i:[""],w=Dp(x),y=0,$=0,f=0;y<r;++y)for(var d=0,g=or(e,v+1,v=Op($=l[y])),S=e;d<w;++d)(S=Mp($>0?x[d]+" "+g:O(g,/&\f/g,x[d])))&&(u[f++]=S);return ll(e,t,n,o===0?ol:a,u,c,m,p)}function Q0(e,t,n,r){return ll(e,t,n,Rp,Ja(D0()),or(e,2,-2),0,r)}function Ec(e,t,n,r,o){return ll(e,t,n,Za,or(e,0,r),or(e,r+1,-1),r,o)}function Fp(e,t,n){switch(O0(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 4789:return Fr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+Fr+e+Q+e+e;case 5936:switch(le(e,t+11)){case 114:return U+e+Q+O(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+Q+O(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+Q+O(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return U+e+Q+e+e;case 6165:return U+e+Q+"flex-"+e+e;case 5187:return U+e+O(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+Q+"flex-$1$2")+e;case 5443:return U+e+Q+"flex-item-"+O(e,/flex-|-self/g,"")+(ft(e,/flex-|baseline/)?"":Q+"grid-row-"+O(e,/flex-|-self/g,""))+e;case 4675:return U+e+Q+"flex-line-pack"+O(e,/align-content|flex-|-self/g,"")+e;case 5548:return U+e+Q+O(e,"shrink","negative")+e;case 5292:return U+e+Q+O(e,"basis","preferred-size")+e;case 6060:return U+"box-"+O(e,"-grow","")+U+e+Q+O(e,"grow","positive")+e;case 4554:return U+O(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return O(O(O(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+Q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4200:if(!ft(e,/flex-|baseline/))return Q+"grid-column-align"+or(e,t)+e;break;case 2592:case 3360:return Q+O(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,ft(r.props,/grid-\w+-end/)})?~ii(e+(n=n[t].value),"span",0)?e:Q+O(e,"-start","")+e+Q+"grid-row-span:"+(~ii(n,"span",0)?ft(n,/\d+/):+ft(n,/\d+/)-+ft(e,/\d+/))+";":Q+O(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ft(r.props,/grid-\w+-start/)})?e:Q+O(O(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nt(e)-1-t>6)switch(le(e,t+1)){case 109:if(le(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+Fr+(le(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ii(e,"stretch",0)?Fp(O(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return O(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,a,u,c){return Q+o+":"+i+c+(l?Q+o+"-span:"+(a?u:+u-+i)+c:"")+e});case 4949:if(le(e,t+6)===121)return O(e,":",":"+U)+e;break;case 6444:switch(le(e,le(e,14)===45?18:11)){case 120:return O(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+U+(le(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+Q+"$2box$3")+e;case 100:return O(e,":",":"+Q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return O(e,"scroll-","scroll-snap-")+e}return e}function Oi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Y0(e,t,n,r){switch(e.type){case T0:if(e.children.length)break;case R0:case Za:return e.return=e.return||e.value;case Rp:return"";case Tp:return e.return=e.value+"{"+Oi(e.children,r)+"}";case ol:if(!nt(e.value=e.props.join(",")))return""}return nt(n=Oi(e.children,r))?e.return=e.value+"{"+n+"}":""}function G0(e){var t=Dp(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function K0(e){return function(t){t.root||(t=t.return)&&e(t)}}function X0(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Za:e.return=Fp(e.value,e.length,n);return;case Tp:return Oi([Lt(e,{value:O(e.value,"@","@"+U)})],r);case ol:if(e.length)return M0(n=e.props,function(o){switch(ft(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":$n(Lt(e,{props:[O(o,/:(read-\w+)/,":"+Fr+"$1")]})),$n(Lt(e,{props:[o]})),Qs(e,{props:jc(n,r)});break;case"::placeholder":$n(Lt(e,{props:[O(o,/:(plac\w+)/,":"+U+"input-$1")]})),$n(Lt(e,{props:[O(o,/:(plac\w+)/,":"+Fr+"$1")]})),$n(Lt(e,{props:[O(o,/:(plac\w+)/,Q+"input-$1")]})),$n(Lt(e,{props:[o]})),Qs(e,{props:jc(n,r)});break}return""})}}var Z0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ze={},lr=typeof process<"u"&&ze!==void 0&&(ze.REACT_APP_SC_ATTR||ze.SC_ATTR)||"data-styled",Ap="active",Up="data-styled-version",al="6.1.18",qa=`/*!sc*/
`,Mi=typeof window<"u"&&typeof document<"u",J0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ze!==void 0&&ze.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ze.REACT_APP_SC_DISABLE_SPEEDY!==""?ze.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ze.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ze!==void 0&&ze.SC_DISABLE_SPEEDY!==void 0&&ze.SC_DISABLE_SPEEDY!==""&&ze.SC_DISABLE_SPEEDY!=="false"&&ze.SC_DISABLE_SPEEDY),q0={},ul=Object.freeze([]),sr=Object.freeze({});function Bp(e,t,n){return n===void 0&&(n=sr),e.theme!==n.theme&&e.theme||t||n.theme}var Vp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),e1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,t1=/(^-|-$)/g;function $c(e){return e.replace(e1,"-").replace(t1,"")}var n1=/(a)(d)/gi,Ro=52,zc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ks(e){var t,n="";for(t=Math.abs(e);t>Ro;t=t/Ro|0)n=zc(t%Ro)+n;return(zc(t%Ro)+n).replace(n1,"$1-$2")}var Fl,Hp=5381,Vn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Wp=function(e){return Vn(Hp,e)};function eu(e){return Ks(Wp(e)>>>0)}function r1(e){return e.displayName||e.name||"Component"}function Al(e){return typeof e=="string"&&!0}var Qp=typeof Symbol=="function"&&Symbol.for,Yp=Qp?Symbol.for("react.memo"):60115,o1=Qp?Symbol.for("react.forward_ref"):60112,i1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Gp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s1=((Fl={})[o1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Fl[Yp]=Gp,Fl);function Pc(e){return("type"in(t=e)&&t.type.$$typeof)===Yp?Gp:"$$typeof"in e?s1[e.$$typeof]:i1;var t}var a1=Object.defineProperty,u1=Object.getOwnPropertyNames,_c=Object.getOwnPropertySymbols,c1=Object.getOwnPropertyDescriptor,d1=Object.getPrototypeOf,Lc=Object.prototype;function Kp(e,t,n){if(typeof t!="string"){if(Lc){var r=d1(t);r&&r!==Lc&&Kp(e,r,n)}var o=u1(t);_c&&(o=o.concat(_c(t)));for(var i=Pc(e),l=Pc(t),a=0;a<o.length;++a){var u=o[a];if(!(u in l1||n&&n[u]||l&&u in l||i&&u in i)){var c=c1(t,u);try{a1(e,u,c)}catch{}}}}return e}function xn(e){return typeof e=="function"}function tu(e){return typeof e=="object"&&"styledComponentId"in e}function un(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Di(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function io(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xs(e,t,n){if(n===void 0&&(n=!1),!n&&!io(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Xs(e[r],t[r]);else if(io(t))for(var r in t)e[r]=Xs(e[r],t[r]);return e}function nu(e,t){Object.defineProperty(e,"toString",{value:t})}function wn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var f1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw wn(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),u=(l=0,n.length);l<u;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(qa);return n},e}(),ai=new Map,bi=new Map,ui=1,To=function(e){if(ai.has(e))return ai.get(e);for(;bi.has(ui);)ui++;var t=ui++;return ai.set(e,t),bi.set(t,e),t},p1=function(e,t){ui=t+1,ai.set(e,t),bi.set(t,e)},h1="style[".concat(lr,"][").concat(Up,'="').concat(al,'"]'),m1=new RegExp("^".concat(lr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),g1=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},v1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(qa),o=[],i=0,l=r.length;i<l;i++){var a=r[i].trim();if(a){var u=a.match(m1);if(u){var c=0|parseInt(u[1],10),m=u[2];c!==0&&(p1(m,c),g1(e,m,u[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(a)}}},Ic=function(e){for(var t=document.querySelectorAll(h1),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(lr)!==Ap&&(v1(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function y1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Xp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var u=Array.from(a.querySelectorAll("style[".concat(lr,"]")));return u[u.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(lr,Ap),r.setAttribute(Up,al);var l=y1();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},x1=function(){function e(t){this.element=Xp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw wn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),w1=function(){function e(t){this.element=Xp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),S1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Nc=Mi,k1={isServer:!Mi,useCSSOMInjection:!J0},Fi=function(){function e(t,n,r){t===void 0&&(t=sr),n===void 0&&(n={});var o=this;this.options=se(se({},k1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Mi&&Nc&&(Nc=!1,Ic(this)),nu(this,function(){return function(i){for(var l=i.getTag(),a=l.length,u="",c=function(p){var v=function(f){return bi.get(f)}(p);if(v===void 0)return"continue";var x=i.names.get(v),w=l.getGroup(p);if(x===void 0||!x.size||w.length===0)return"continue";var y="".concat(lr,".g").concat(p,'[id="').concat(v,'"]'),$="";x!==void 0&&x.forEach(function(f){f.length>0&&($+="".concat(f,","))}),u+="".concat(w).concat(y,'{content:"').concat($,'"}').concat(qa)},m=0;m<a;m++)c(m);return u}(o)})}return e.registerId=function(t){return To(t)},e.prototype.rehydrate=function(){!this.server&&Mi&&Ic(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(se(se({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new S1(o):r?new x1(o):new w1(o)}(this.options),new f1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(To(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(To(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(To(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),j1=/&/g,C1=/^\s*\/\/.*$/gm;function Zp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Zp(n.children,t)),n})}function E1(e){var t,n,r,o=sr,i=o.options,l=i===void 0?sr:i,a=o.plugins,u=a===void 0?ul:a,c=function(v,x,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):v},m=u.slice();m.push(function(v){v.type===ol&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(j1,n).replace(r,c))}),l.prefix&&m.push(X0),m.push(Y0);var p=function(v,x,w,y){x===void 0&&(x=""),w===void 0&&(w=""),y===void 0&&(y="&"),t=y,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var $=v.replace(C1,""),f=W0(w||x?"".concat(w," ").concat(x," { ").concat($," }"):$);l.namespace&&(f=Zp(f,l.namespace));var d=[];return Oi(f,G0(m.concat(K0(function(g){return d.push(g)})))),d};return p.hash=u.length?u.reduce(function(v,x){return x.name||wn(15),Vn(v,x.name)},Hp).toString():"",p}var $1=new Fi,Zs=E1(),Jp=_e.createContext({shouldForwardProp:void 0,styleSheet:$1,stylis:Zs});Jp.Consumer;_e.createContext(void 0);function Js(){return k.useContext(Jp)}var qp=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Zs);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,nu(this,function(){throw wn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Zs),this.name+t.hash},e}(),z1=function(e){return e>="A"&&e<="Z"};function Rc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;z1(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var eh=function(e){return e==null||e===!1||e===""},th=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!eh(i)&&(Array.isArray(i)&&i.isCss||xn(i)?r.push("".concat(Rc(o),":"),i,";"):io(i)?r.push.apply(r,rr(rr(["".concat(o," {")],th(i),!1),["}"],!1)):r.push("".concat(Rc(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Z0||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Qt(e,t,n,r){if(eh(e))return[];if(tu(e))return[".".concat(e.styledComponentId)];if(xn(e)){if(!xn(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Qt(o,t,n,r)}var i;return e instanceof qp?n?(e.inject(n,r),[e.getName(r)]):[e]:io(e)?th(e):Array.isArray(e)?Array.prototype.concat.apply(ul,e.map(function(l){return Qt(l,t,n,r)})):[e.toString()]}function nh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(xn(n)&&!tu(n))return!1}return!0}var P1=Wp(al),_1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&nh(t),this.componentId=n,this.baseHash=Vn(P1,n),this.baseStyle=r,Fi.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=un(o,this.staticRulesId);else{var i=Di(Qt(this.rules,t,n,r)),l=Ks(Vn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}o=un(o,l),this.staticRulesId=l}else{for(var u=Vn(this.baseHash,r.hash),c="",m=0;m<this.rules.length;m++){var p=this.rules[m];if(typeof p=="string")c+=p;else if(p){var v=Di(Qt(p,t,n,r));u=Vn(u,v+m),c+=v}}if(c){var x=Ks(u>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(c,".".concat(x),void 0,this.componentId)),o=un(o,x)}}return o},e}(),lo=_e.createContext(void 0);lo.Consumer;function L1(e){var t=_e.useContext(lo),n=k.useMemo(function(){return function(r,o){if(!r)throw wn(14);if(xn(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw wn(8);return o?se(se({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?_e.createElement(lo.Provider,{value:n},e.children):null}var Ul={};function I1(e,t,n){var r=tu(e),o=e,i=!Al(e),l=t.attrs,a=l===void 0?ul:l,u=t.componentId,c=u===void 0?function(S,z){var _=typeof S!="string"?"sc":$c(S);Ul[_]=(Ul[_]||0)+1;var C="".concat(_,"-").concat(eu(al+_+Ul[_]));return z?"".concat(z,"-").concat(C):C}(t.displayName,t.parentComponentId):u,m=t.displayName,p=m===void 0?function(S){return Al(S)?"styled.".concat(S):"Styled(".concat(r1(S),")")}(e):m,v=t.displayName&&t.componentId?"".concat($c(t.displayName),"-").concat(t.componentId):t.componentId||c,x=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,w=t.shouldForwardProp;if(r&&o.shouldForwardProp){var y=o.shouldForwardProp;if(t.shouldForwardProp){var $=t.shouldForwardProp;w=function(S,z){return y(S,z)&&$(S,z)}}else w=y}var f=new _1(n,v,r?o.componentStyle:void 0);function d(S,z){return function(_,C,j){var A=_.attrs,R=_.componentStyle,ge=_.defaultProps,lt=_.foldedComponentIds,st=_.styledComponentId,Cn=_.target,pr=_e.useContext(lo),qt=Js(),at=_.shouldForwardProp||qt.shouldForwardProp,I=Bp(C,pr,ge)||sr,E=function(jt,$e,ut){for(var hr,en=se(se({},$e),{className:void 0,theme:ut}),cl=0;cl<jt.length;cl+=1){var mo=xn(hr=jt[cl])?hr(en):hr;for(var Ct in mo)en[Ct]=Ct==="className"?un(en[Ct],mo[Ct]):Ct==="style"?se(se({},en[Ct]),mo[Ct]):mo[Ct]}return $e.className&&(en.className=un(en.className,$e.className)),en}(A,C,I),L=E.as||Cn,D={};for(var b in E)E[b]===void 0||b[0]==="$"||b==="as"||b==="theme"&&E.theme===I||(b==="forwardedAs"?D.as=E.forwardedAs:at&&!at(b,L)||(D[b]=E[b]));var qe=function(jt,$e){var ut=Js(),hr=jt.generateAndInjectStyles($e,ut.styleSheet,ut.stylis);return hr}(R,E),He=un(lt,st);return qe&&(He+=" "+qe),E.className&&(He+=" "+E.className),D[Al(L)&&!Vp.has(L)?"class":"className"]=He,j&&(D.ref=j),k.createElement(L,D)}(g,S,z)}d.displayName=p;var g=_e.forwardRef(d);return g.attrs=x,g.componentStyle=f,g.displayName=p,g.shouldForwardProp=w,g.foldedComponentIds=r?un(o.foldedComponentIds,o.styledComponentId):"",g.styledComponentId=v,g.target=r?o.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(z){for(var _=[],C=1;C<arguments.length;C++)_[C-1]=arguments[C];for(var j=0,A=_;j<A.length;j++)Xs(z,A[j],!0);return z}({},o.defaultProps,S):S}}),nu(g,function(){return".".concat(g.styledComponentId)}),i&&Kp(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function Tc(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Oc=function(e){return Object.assign(e,{isCss:!0})};function ru(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(xn(e)||io(e))return Oc(Qt(Tc(ul,rr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Qt(r):Oc(Qt(Tc(r,t)))}function qs(e,t,n){if(n===void 0&&(n=sr),!t)throw wn(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,ru.apply(void 0,rr([o],i,!1)))};return r.attrs=function(o){return qs(e,t,se(se({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return qs(e,t,se(se({},n),o))},r}var rh=function(e){return qs(I1,e)},h=rh;Vp.forEach(function(e){h[e]=rh(e)});var N1=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=nh(t),Fi.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(Di(Qt(this.rules,n,r,o)),""),l=this.componentId+t;r.insertRules(l,l,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Fi.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function R1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ru.apply(void 0,rr([e],t,!1)),o="sc-global-".concat(eu(JSON.stringify(r))),i=new N1(r,o),l=function(u){var c=Js(),m=_e.useContext(lo),p=_e.useRef(c.styleSheet.allocateGSInstance(o)).current;return c.styleSheet.server&&a(p,u,c.styleSheet,m,c.stylis),_e.useLayoutEffect(function(){if(!c.styleSheet.server)return a(p,u,c.styleSheet,m,c.stylis),function(){return i.removeStyles(p,c.styleSheet)}},[p,u,c.styleSheet,m,c.stylis]),null};function a(u,c,m,p,v){if(i.isStatic)i.renderStyles(u,q0,m,v);else{var x=se(se({},c),{theme:Bp(c,p,l.defaultProps)});i.renderStyles(u,x,m,v)}}return _e.memo(l)}function T1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Di(ru.apply(void 0,rr([e],t,!1))),o=eu(r);return new qp(o,r)}const O1=R1`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({theme:e})=>e.colors.background};
    color: ${({theme:e})=>e.colors.text};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  input, textarea {
    font-family: inherit;
  }
`,M1={colors:{primary:"#6e7582",secondary:"#a0a7b5",background:"#f8f9fa",surface:"#ffffff",text:"#333333",textLight:"#666666",border:"#e0e4e8",error:"#e53935",success:"#43a047"},shadows:{small:"0 2px 4px rgba(0, 0, 0, 0.05)",medium:"0 4px 6px rgba(0, 0, 0, 0.07)",large:"0 10px 15px rgba(0, 0, 0, 0.1)"},breakpoints:{mobile:"576px",tablet:"768px",desktop:"1024px"}},T=[{userId:"user1",email:"wlsgnwkd22@naver.com",phone:"010-2212-9624",createdAt:"2011-11-11",name:"김채팅",avatar:"https://api.dicebear.com/7.x/initials/svg?seed=김채팅"},{userId:"user2",email:"wlsgnwkd22@naver.com",phone:"010-2212-9624",createdAt:"2011-11-11",name:"이메시지",avatar:"https://api.dicebear.com/7.x/initials/svg?seed=이메시지"},{userId:"user3",email:"wlsgnwkd22@naver.com",phone:"010-2212-9624",createdAt:"2011-11-11",name:"박소통",avatar:"https://api.dicebear.com/7.x/initials/svg?seed=박소통"},{userId:"user4",email:"wlsgnwkd22@naver.com",phone:"010-2212-9624",createdAt:"2011-11-11",name:"최대화",avatar:"https://api.dicebear.com/7.x/initials/svg?seed=최대화"},{userId:"system",email:"wlsgnwkd22@naver.com",phone:"010-2212-9624",createdAt:"2011-11-11",name:"시스템",avatar:"https://api.dicebear.com/7.x/initials/svg?seed=System"}],D1=[{id:"1",name:"일상 대화방",createdBy:"system",participants:[T[0],T[1]],category:"일상",participantsCount:12,isHot:!0,lastMessage:{id:"msg1",sender:T[0],content:"오늘 날씨가 정말 좋네요!",timestamp:new Date(Date.now()-1e3*60*5).toISOString()}},{id:"2",name:"게임 모임",createdBy:"system",participants:[T[1],T[2]],category:"게임",participantsCount:28,isHot:!0,lastMessage:{id:"msg2",sender:T[1],content:"오늘 저녁 8시에 같이 게임할 사람?",timestamp:new Date(Date.now()-1e3*60*15).toISOString()}},{id:"3",name:"음악 추천",createdBy:"system",participants:[T[2],T[3]],category:"음악",participantsCount:8,isHot:!1,lastMessage:{id:"msg3",sender:T[2],content:"요즘 인기있는 노래 추천해주세요!",timestamp:new Date(Date.now()-1e3*60*30).toISOString()}},{id:"4",name:"영화 토론방",createdBy:"system",participants:[T[0],T[3]],category:"영화",participantsCount:15,isHot:!1,lastMessage:{id:"msg4",sender:T[3],content:"어제 개봉한 영화 보신 분 있나요?",timestamp:new Date(Date.now()-1e3*60*45).toISOString()}},{id:"5",name:"IT 기술 공유",createdBy:"system",participants:[T[1],T[2]],category:"IT/기술",participantsCount:20,isHot:!0,lastMessage:{id:"msg5",sender:T[1],content:"React 18 새로운 기능에 대해 이야기해봐요",timestamp:new Date(Date.now()-1e3*60*60).toISOString()}},{id:"6",name:"취업 정보 공유",createdBy:"user1",participants:[T[0],T[2]],category:"취업/진로",participantsCount:18,isHot:!0,lastMessage:{id:"msg6",sender:T[0],content:"요즘 IT 취업 시장 어떤가요?",timestamp:new Date(Date.now()-1e3*60*120).toISOString()}},{id:"7",name:"여행 계획",createdBy:"user2",participants:[T[1],T[3]],category:"여행",participantsCount:7,isHot:!1,lastMessage:{id:"msg7",sender:T[3],content:"제주도 여행 코스 추천해주세요!",timestamp:new Date(Date.now()-1e3*60*180).toISOString()}},{id:"8",name:"맛집 탐방",createdBy:"user3",participants:[T[2],T[0]],category:"음식",participantsCount:14,isHot:!0,lastMessage:{id:"msg8",sender:T[2],content:"강남역 근처 맛집 추천 부탁드려요!",timestamp:new Date(Date.now()-1e3*60*240).toISOString()}}],b1={1:[{id:"msg1-1",sender:T[4],content:"일상 대화방에 오신 것을 환영합니다!",timestamp:new Date(Date.now()-1e3*60*60*2).toISOString()},{id:"msg1-2",sender:T[1],content:"안녕하세요! 반갑습니다 :)",timestamp:new Date(Date.now()-1e3*60*30).toISOString()},{id:"msg1-3",sender:T[2],content:"오늘 날씨가 정말 좋네요!",timestamp:new Date(Date.now()-1e3*60*15).toISOString()},{id:"msg1-4",sender:T[0],content:"네, 정말 화창하네요. 다들 주말 계획 있으신가요?",timestamp:new Date(Date.now()-1e3*60*5).toISOString()}],2:[{id:"msg2-1",sender:T[4],content:"게임 모임방에 오신 것을 환영합니다!",timestamp:new Date(Date.now()-1e3*60*60*3).toISOString()},{id:"msg2-2",sender:T[2],content:"롤 같이 하실 분 계신가요?",timestamp:new Date(Date.now()-1e3*60*45).toISOString()},{id:"msg2-3",sender:T[3],content:"저요! 오늘 저녁에 가능합니다.",timestamp:new Date(Date.now()-1e3*60*30).toISOString()},{id:"msg2-4",sender:T[1],content:"오늘 저녁 8시에 같이 게임할 사람?",timestamp:new Date(Date.now()-1e3*60*15).toISOString()}],3:[{id:"msg3-1",sender:T[4],content:"음악 추천방에 오신 것을 환영합니다!",timestamp:new Date(Date.now()-1e3*60*60*4).toISOString()},{id:"msg3-2",sender:T[0],content:"요즘 뉴진스 노래 정말 좋은 것 같아요",timestamp:new Date(Date.now()-1e3*60*50).toISOString()},{id:"msg3-3",sender:T[1],content:"저는 아이유 신곡 추천합니다!",timestamp:new Date(Date.now()-1e3*60*40).toISOString()},{id:"msg3-4",sender:T[2],content:"요즘 인기있는 노래 추천해주세요!",timestamp:new Date(Date.now()-1e3*60*30).toISOString()}],4:[{id:"msg4-1",sender:T[4],content:"영화 토론방에 오신 것을 환영합니다!",timestamp:new Date(Date.now()-1e3*60*60*5).toISOString()},{id:"msg4-2",sender:T[3],content:"인터스텔라 정말 명작인 것 같아요",timestamp:new Date(Date.now()-1e3*60*55).toISOString()},{id:"msg4-3",sender:T[0],content:"저는 최근에 본 '듄' 시리즈가 인상적이었어요",timestamp:new Date(Date.now()-1e3*60*50).toISOString()},{id:"msg4-4",sender:T[3],content:"어제 개봉한 영화 보신 분 있나요?",timestamp:new Date(Date.now()-1e3*60*45).toISOString()}],5:[{id:"msg5-1",sender:T[4],content:"IT 기술 공유방에 오신 것을 환영합니다!",timestamp:new Date(Date.now()-1e3*60*60*6).toISOString()},{id:"msg5-2",sender:T[2],content:"Next.js 14 써보신 분 계신가요?",timestamp:new Date(Date.now()-1e3*60*120).toISOString()},{id:"msg5-3",sender:T[0],content:"저는 최근에 시작했는데 App Router가 정말 편리한 것 같아요",timestamp:new Date(Date.now()-1e3*60*90).toISOString()},{id:"msg5-4",sender:T[1],content:"React 18 새로운 기능에 대해 이야기해봐요",timestamp:new Date(Date.now()-1e3*60*60).toISOString()}]};async function F1(e,t){const o=await(await fetch("http://localhost:8080/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t}),credentials:"include"})).json();if(o.status!=="success")throw new Error(o.message||"로그인에 실패했습니다");return{...o.data,avatar:o.data.avatar||`https://api.dicebear.com/7.x/initials/svg?seed=${o.data.name}`}}async function A1(e){const t={email:e.email,password:e.password,name:e.name,phone:e.phone||""},r=await(await fetch("http://localhost:8080/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),credentials:"include"})).json();if(r.status!=="success")throw new Error(r.message||"회원가입에 실패했습니다");return!0}async function U1(){const t=await(await fetch("http://localhost:8080/api/auth/logout",{method:"POST",credentials:"include"})).json();if(t.status!=="success")throw new Error(t.message||"로그아웃에 실패했습니다")}async function B1(){try{const t=await(await fetch("http:localhost:8080/api/users/me",{credentials:"include"})).json();return t.status!=="success"?null:{...t.data,avatar:t.data.avatar||`https://api.dicebear.com/7.x/initials/svg?seed=${t.data.name}`}}catch(e){return console.error("사용자 정보 가져오기 오류:",e),null}}function V1(){const[e,t]=k.useState(()=>{try{const m=localStorage.getItem("user");return m?JSON.parse(m):null}catch(m){return console.error("Failed to parse user from localStorage:",m),localStorage.removeItem("user"),null}}),[n,r]=k.useState(!0),[o,i]=k.useState(null),l=k.useCallback(async()=>{try{r(!0);const m=await B1();m?(t(m),localStorage.setItem("user",JSON.stringify(m))):(t(null),localStorage.removeItem("user")),i(null)}catch{i("사용자 정보를 불러오는데 실패했습니다."),t(null),localStorage.removeItem("user")}finally{r(!1)}},[]),a=k.useCallback(async(m,p)=>{try{r(!0);const v=await F1(m,p);return t(v),localStorage.setItem("user",JSON.stringify(v)),i(null),!0}catch(v){return i(v instanceof Error?v.message:"로그인에 실패했습니다."),!1}finally{r(!1)}},[]),u=k.useCallback(async m=>{try{r(!0);const p=await A1(m);return i(null),p}catch(p){return i(p instanceof Error?p.message:"회원가입에 실패했습니다."),!1}finally{r(!1)}},[]),c=k.useCallback(async()=>{try{r(!0),await U1(),t(null),localStorage.removeItem("user"),i(null)}catch(m){i(m instanceof Error?m.message:"로그아웃에 실패했습니다.")}finally{r(!1)}},[]);return k.useEffect(()=>{l()},[l]),{user:e,loading:n,error:o,login:a,register:u,logout:c,loadUser:l}}async function oh(e,t={}){const n={credentials:"include",headers:{"Content-Type":"application/json",...t.headers}},o=await(await fetch(e,{...n,...t})).json();if(o.status!=="success")throw new Error(o.message||"API 요청 실패");return o}async function ih(e){return(await oh(e)).data}async function ou(e,t){return(await oh(e,{method:"POST",body:JSON.stringify(t)})).data}async function Mc(){return await ih("/api/chat-rooms")}async function H1(e,t){return await ou("/api/chat-rooms",{name:e,category:t})}async function W1(e){await ou(`/api/chat-rooms/${e}/join`,{})}async function Q1(e){return await ih(`/api/chat-rooms/${e}/messages`)}async function Y1(e,t){return await ou("/api/messages",{roomId:e,content:t})}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var G1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),V=(e,t)=>{const n=k.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:a="",children:u,...c},m)=>k.createElement("svg",{ref:m,...G1,width:o,height:o,stroke:r,strokeWidth:l?Number(i)*24/Number(o):i,className:["lucide",`lucide-${K1(e)}`,a].join(" "),...c},[...t.map(([p,v])=>k.createElement(p,v)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=V("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=V("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=V("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=V("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=V("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=V("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=V("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=V("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=V("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=V("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=V("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=V("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=V("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=V("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=V("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=V("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=V("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=V("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=V("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=V("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=V("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=V("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=V("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=V("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=V("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=V("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=V("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=V("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),iu=({user:e,onLogout:t})=>{const n=jn(),r=rl(),[o,i]=k.useState(!1),[l,a]=k.useState(!1);k.useEffect(()=>{const c=()=>{window.scrollY>10?i(!0):i(!1)};return window.addEventListener("scroll",c),c(),()=>window.removeEventListener("scroll",c)},[]);const u=r.pathname==="/";return s.jsxs(pv,{isScrolled:o,isHomePage:u,children:[s.jsxs(hv,{children:[s.jsxs(mv,{onClick:()=>n("/"),children:[s.jsx(gv,{children:s.jsx(vt,{size:24})}),s.jsx(vv,{children:"Chattr"})]}),s.jsxs(yv,{children:[s.jsx(Oo,{isActive:r.pathname==="/",onClick:()=>n("/"),children:"홈"}),s.jsx(Oo,{isActive:r.pathname==="/features",onClick:()=>n("/features"),children:"기능"}),s.jsx(Oo,{isActive:r.pathname==="/pricing",onClick:()=>n("/pricing"),children:"요금제"}),s.jsx(Oo,{isActive:r.pathname==="/about",onClick:()=>n("/about"),children:"소개"})]}),s.jsx(xv,{children:e?s.jsxs(s.Fragment,{children:[s.jsxs(wv,{onClick:()=>n("/mypage"),children:[s.jsx(bc,{src:e.avatar,alt:e.name}),s.jsx(Fc,{children:e.name})]}),s.jsxs(Ac,{onClick:()=>n("/chats"),children:[s.jsx(vt,{size:18}),s.jsx("span",{children:"채팅"})]}),s.jsxs(Ac,{onClick:t,isLogout:!0,children:[s.jsx(Dc,{size:18}),s.jsx("span",{children:"로그아웃"})]})]}):s.jsxs(s.Fragment,{children:[s.jsx(Sv,{onClick:()=>n("/login"),children:"로그인"}),s.jsx(kv,{onClick:()=>n("/signup"),children:"회원가입"})]})}),s.jsx(jv,{onClick:()=>a(!l),children:l?s.jsx(ah,{size:24}):s.jsx(iv,{size:24})})]}),l&&s.jsxs(Cv,{children:[s.jsx(tn,{onClick:()=>{n("/"),a(!1)},children:"홈"}),s.jsx(tn,{onClick:()=>{n("/features"),a(!1)},children:"기능"}),s.jsx(tn,{onClick:()=>{n("/pricing"),a(!1)},children:"요금제"}),s.jsx(tn,{onClick:()=>{n("/about"),a(!1)},children:"소개"}),s.jsx(Ev,{}),e?s.jsxs(s.Fragment,{children:[s.jsxs($v,{children:[s.jsx(bc,{src:e.avatar,alt:e.name}),s.jsx(Fc,{children:e.name})]}),s.jsxs(tn,{onClick:()=>{n("/mypage"),a(!1)},children:[s.jsx(sh,{size:18}),s.jsx("span",{children:"마이페이지"})]}),s.jsxs(tn,{onClick:()=>{n("/chats"),a(!1)},children:[s.jsx(vt,{size:18}),s.jsx("span",{children:"채팅"})]}),s.jsxs(tn,{onClick:()=>{t(),a(!1)},children:[s.jsx(Dc,{size:18}),s.jsx("span",{children:"로그아웃"})]})]}):s.jsxs(s.Fragment,{children:[s.jsx(Uc,{onClick:()=>{n("/login"),a(!1)},children:"로그인"}),s.jsx(Uc,{primary:!0,onClick:()=>{n("/signup"),a(!1)},children:"회원가입"})]})]})]})},pv=h.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({isScrolled:e,isHomePage:t,theme:n})=>e?"rgba(255, 255, 255, 0.95)":t?"transparent":n.colors.surface};
  backdrop-filter: ${({isScrolled:e})=>e?"blur(8px)":"none"};
  box-shadow: ${({isScrolled:e,theme:t})=>e?t.shadows.small:"none"};
  transition: all 0.3s ease;
  height: 64px; /* 헤더 높이 고정 */
  display: flex;
  align-items: center;
`,hv=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`,mv=h.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,gv=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4285f4;
  margin-right: 0.5rem;
`,vv=h.h1`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(90deg, #4285f4, #34a853);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,yv=h.nav`
  display: none;
  
  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`,Oo=h.button`
  font-size: 0.95rem;
  font-weight: ${({isActive:e})=>e?"600":"500"};
  color: ${({isActive:e,theme:t})=>e?"#4285f4":t.colors.text};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: ${({isActive:e})=>e?"100%":"0"};
    height: 2px;
    background-color: #4285f4;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`,xv=h.div`
  display: none;
  
  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`,wv=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 50px;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`,bc=h.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`,Fc=h.span`
  font-size: 0.9rem;
  font-weight: 500;
`,Ac=h.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({isLogout:e})=>e?"#f43f5e":"#4285f4"};
  background-color: ${({isLogout:e})=>e?"rgba(244, 63, 94, 0.1)":"rgba(66, 133, 244, 0.1)"};
  transition: all 0.2s;
  
  &:hover {
    background-color: ${({isLogout:e})=>e?"rgba(244, 63, 94, 0.2)":"rgba(66, 133, 244, 0.2)"};
  }
`,Sv=h.button`
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #4285f4;
  transition: all 0.2s;
  
  &:hover {
    background-color: rgba(66, 133, 244, 0.1);
  }
`,kv=h.button`
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
  background-color: #4285f4;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(66, 133, 244, 0.3);
  
  &:hover {
    background-color: #3367d6;
    box-shadow: 0 4px 12px rgba(66, 133, 244, 0.4);
  }
`,jv=h.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.text};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    display: none;
  }
`,Cv=h.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background-color: white;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    display: none;
  }
`,tn=h.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0;
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.text};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
`,Ev=h.div`
  height: 1px;
  background-color: ${({theme:e})=>e.colors.border};
  margin: 0.5rem 0;
`,$v=h.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,Uc=h.button`
  padding: 0.75rem;
  margin-top: 0.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  color: ${({primary:e})=>e?"white":"#4285f4"};
  background-color: ${({primary:e})=>e?"#4285f4":"transparent"};
  border: ${({primary:e})=>e?"none":"1px solid #4285f4"};
`,zv=()=>s.jsxs(Pv,{children:[s.jsx(_v,{children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 100",preserveAspectRatio:"none",children:s.jsx("path",{fill:"#f8f9fa",fillOpacity:"1",d:"M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,42.7C840,32,960,32,1080,37.3C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"})})}),s.jsx(Lv,{children:s.jsxs(Iv,{children:[s.jsxs(Nv,{children:[s.jsxs(Rv,{children:[s.jsx(vt,{size:24}),s.jsx(Tv,{children:"Chattr"})]}),s.jsx(Ov,{children:"실시간 소통을 위한 최고의 채팅 플랫폼으로, 언제 어디서나 친구, 동료들과 쉽고 빠르게 대화할 수 있습니다."}),s.jsxs(Mv,{children:[s.jsx(Mo,{href:"#","aria-label":"Facebook",children:s.jsx(tv,{size:18})}),s.jsx(Mo,{href:"#","aria-label":"Instagram",children:s.jsx(ov,{size:18})}),s.jsx(Mo,{href:"#","aria-label":"Twitter",children:s.jsx(fv,{size:18})}),s.jsx(Mo,{href:"#","aria-label":"Github",children:s.jsx(nv,{size:18})})]})]}),s.jsxs(Dv,{children:[s.jsxs(Bl,{children:[s.jsx(Vl,{children:"서비스"}),s.jsx(Oe,{href:"#",children:"기능"}),s.jsx(Oe,{href:"#",children:"요금제"}),s.jsx(Oe,{href:"#",children:"API"}),s.jsx(Oe,{href:"#",children:"파트너십"})]}),s.jsxs(Bl,{children:[s.jsx(Vl,{children:"회사"}),s.jsx(Oe,{href:"#",children:"소개"}),s.jsx(Oe,{href:"#",children:"블로그"}),s.jsx(Oe,{href:"#",children:"채용"}),s.jsx(Oe,{href:"#",children:"연락처"})]}),s.jsxs(Bl,{children:[s.jsx(Vl,{children:"지원"}),s.jsx(Oe,{href:"#",children:"도움말"}),s.jsx(Oe,{href:"#",children:"FAQ"}),s.jsx(Oe,{href:"#",children:"개인정보처리방침"}),s.jsx(Oe,{href:"#",children:"이용약관"})]})]})]})}),s.jsx(bv,{children:s.jsxs(Fv,{children:[s.jsx(Av,{children:"© 2024 Chattr. All rights reserved."}),s.jsxs(Uv,{children:[s.jsx(Hl,{children:"상호: (주)채트 | 대표자명: 김채트"}),s.jsx(Hl,{children:"사업자등록번호: 000-00-00000 | 통신판매업신고번호: 제0000-서울마포-0000호"}),s.jsx(Hl,{children:"주소: 서울특별시 마포구 월드컵북로 00, 2층"})]})]})})]}),Pv=h.footer`
    position: relative;
    background-color: #111827;
    color: #f3f4f6;
`,_v=h.div`
    position: absolute;
    top: -99px;
    left: 0;
    width: 100%;
    height: 100px;
    overflow: hidden;
    line-height: 0;

    svg {
        width: 100%;
        height: 100%;
    }
`,Lv=h.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem 2rem;
`,Iv=h.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
        flex-direction: row;
    }
`,Nv=h.div`
    flex: 2;
    max-width: 100%;

    @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
        max-width: 350px;
    }
`,Rv=h.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
    color: #4285f4;
`,Tv=h.h2`
    font-size: 1.8rem;
    font-weight: 700;
    background: linear-gradient(90deg, #4285f4, #34a853);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`,Ov=h.p`
    color: #9ca3af;
    line-height: 1.6;
    margin-bottom: 1.5rem;
`,Mv=h.div`
    display: flex;
    gap: 1rem;
`,Mo=h.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #1f2937;
    color: #e5e7eb;
    transition: all 0.2s;

    &:hover {
        background: linear-gradient(135deg, #4285f4, #34a853);
        color: white;
        transform: translateY(-3px);
    }
`,Dv=h.div`
    flex: 3;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;

    @media (min-width: ${({theme:e})=>e.breakpoints.mobile}) {
        grid-template-columns: repeat(3, 1fr);
    }
`,Bl=h.div`
    display: flex;
    flex-direction: column;
`,Vl=h.h3`
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1.25rem;
    color: #f9fafb;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 30px;
        height: 2px;
        background: linear-gradient(90deg, #4285f4, #34a853);
    }
`,Oe=h.a`
    color: #9ca3af;
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
    transition: color 0.2s, transform 0.2s;
    display: inline-block;

    &:hover {
        color: #f9fafb;
        transform: translateX(3px);
    }
`,bv=h.div`
    background-color: #0f172a;
    padding: 1.5rem 0;
`,Fv=h.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`,Av=h.p`
  color: #9ca3af;
  font-size: 0.9rem;
`,Uv=h.div`
  font-size: 0.8rem;
  color: #6b7280;
  line-height: 1.6;
  text-align: left;
  
  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    text-align: right;
  }
`,Hl=h.p`
  margin-bottom: 0.25rem;
`,Bv=({user:e,onLogout:t})=>{const n=jn(),r=()=>{n(e?"/chats":"/login")};return s.jsxs(Vv,{children:[s.jsx(iu,{user:e,onLogout:t}),s.jsx(Hv,{children:s.jsxs(Wv,{children:[s.jsxs(Qv,{children:["실시간으로 소통하는 ",s.jsx(Yv,{children:"새로운 방법"})]}),s.jsxs(Gv,{children:["언제 어디서나 친구, 동료들과 실시간으로 대화하세요.",s.jsx("br",{}),"간편한 채팅방 생성과 관리 기능으로 더 효율적인 소통이 가능합니다."]}),s.jsxs(Kv,{children:[s.jsx(Xv,{onClick:r,children:"시작하기"}),s.jsxs(Zv,{onClick:()=>n("/features"),children:["기능 살펴보기 ",s.jsx(Z1,{size:16})]})]}),s.jsxs(Jv,{children:[s.jsx(Cr,{size:"lg",top:"20%",left:"10%",delay:"0s"}),s.jsx(Cr,{size:"md",top:"60%",left:"20%",delay:"0.2s"}),s.jsx(Cr,{size:"sm",top:"30%",left:"80%",delay:"0.4s"}),s.jsx(Cr,{size:"md",top:"70%",left:"70%",delay:"0.6s"}),s.jsx(Cr,{size:"sm",top:"15%",left:"60%",delay:"0.8s"})]})]})}),s.jsxs(qv,{children:[s.jsx(ey,{children:"주요 기능"}),s.jsxs(ty,{children:[s.jsxs(Do,{children:[s.jsx(bo,{children:s.jsx(vt,{size:28})}),s.jsx(Fo,{children:"실시간 채팅"}),s.jsx(Ao,{children:"지연 없는 빠른 메시지 전송으로 실시간 대화를 경험하세요."})]}),s.jsxs(Do,{children:[s.jsx(bo,{children:s.jsx(ea,{size:28})}),s.jsx(Fo,{children:"그룹 채팅"}),s.jsx(Ao,{children:"여러 사람과 함께 대화할 수 있는 그룹 채팅방을 만들어보세요."})]}),s.jsxs(Do,{children:[s.jsx(bo,{children:s.jsx(ta,{size:28})}),s.jsx(Fo,{children:"빠른 접근성"}),s.jsx(Ao,{children:"언제 어디서나 모바일과 데스크톱에서 쉽게 접근할 수 있습니다."})]}),s.jsxs(Do,{children:[s.jsx(bo,{children:s.jsx(dv,{size:28})}),s.jsx(Fo,{children:"보안 강화"}),s.jsx(Ao,{children:"안전한 대화를 위한 보안 기능으로 개인정보를 보호합니다."})]})]})]}),s.jsx(ny,{children:s.jsxs(ry,{children:[s.jsx(oy,{children:"지금 바로 시작하세요"}),s.jsx(iy,{children:"Chattr와 함께 더 효율적이고 즐거운 소통을 경험해보세요."}),s.jsx(ly,{onClick:r,children:"무료로 시작하기"})]})}),s.jsx(zv,{})]})},Vv=h.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,Hv=h.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem 6rem; /* 상단 패딩 조정 */
  background-color: ${({theme:e})=>e.colors.background};
  position: relative;
  overflow: hidden;
  min-height: 80vh;
  margin-top: 0; /* 헤더와의 간격 제거 */
`,Wv=h.div`
  text-align: center;
  max-width: 800px;
  position: relative;
  z-index: 2;
`,Qv=h.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: ${({theme:e})=>e.colors.text};
  line-height: 1.2;
  
  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    font-size: 4rem;
  }
`,Yv=h.span`
  color: #4285f4;
  background: linear-gradient(90deg, #4285f4, #34a853);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,Gv=h.p`
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  color: ${({theme:e})=>e.colors.textLight};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,Kv=h.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  
  @media (min-width: ${({theme:e})=>e.breakpoints.mobile}) {
    flex-direction: row;
  }
`,Xv=h.button`
  padding: 1rem 2rem;
  background-color: #4285f4;
  color: white;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(66, 133, 244, 0.3);
  
  &:hover {
    background-color: #3367d6;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(66, 133, 244, 0.4);
  }
`,Zv=h.button`
  padding: 1rem 2rem;
  background-color: transparent;
  color: #4285f4;
  border: 2px solid #4285f4;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: rgba(66, 133, 244, 0.1);
    transform: translateY(-2px);
  }
`,Jv=h.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`,Cr=h.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  background: linear-gradient(135deg, #4285f4, #34a853);
  width: ${({size:e})=>e==="sm"?"50px":e==="md"?"100px":"150px"};
  height: ${({size:e})=>e==="sm"?"50px":e==="md"?"100px":"150px"};
  top: ${({top:e})=>e};
  left: ${({left:e})=>e};
  animation: float 6s ease-in-out infinite;
  animation-delay: ${({delay:e})=>e};

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`,qv=h.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
`,ey=h.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: ${({theme:e})=>e.colors.text};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #4285f4, #34a853);
    border-radius: 2px;
  }
`,ty=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${({theme:e})=>e.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Do=h.div`
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
`,bo=h.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4285f4, #34a853);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
`,Fo=h.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({theme:e})=>e.colors.text};
`,Ao=h.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({theme:e})=>e.colors.textLight};
`,ny=h.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #4285f4, #34a853);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
  }
  
  &::before {
    top: -100px;
    left: -100px;
  }
  
  &::after {
    bottom: -100px;
    right: -100px;
  }
`,ry=h.div`
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,oy=h.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`,iy=h.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`,ly=h.button`
  padding: 1rem 2.5rem;
  background-color: white;
  color: #4285f4;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
`,sy=({onLogin:e})=>{const t=jn(),[n,r]=k.useState(""),[o,i]=k.useState(""),[l,a]=k.useState("email"),[u,c]=k.useState(""),[m,p]=k.useState(!1),v=async w=>{if(w.preventDefault(),!n.trim()){c("이메일을 입력해주세요.");return}if(!o.trim()){c("비밀번호를 입력해주세요.");return}p(!0),c("");try{await e(n.trim(),o)||c("로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.")}catch{c("로그인 중 오류가 발생했습니다. 다시 시도해주세요.")}finally{p(!1)}},x=w=>{window.location.href=`http://localhost:8080/oauth2/authorization/${w}`};return s.jsxs(ay,{children:[s.jsxs(uy,{children:[s.jsxs(cy,{children:[s.jsxs(dy,{children:[s.jsx(vt,{size:32}),s.jsx(fy,{children:"Chattr"})]}),s.jsx(py,{children:"실시간으로 소통하는 새로운 방법"})]}),s.jsxs(hy,{children:[s.jsxs(Uo,{children:[s.jsx(Bo,{children:s.jsx(Me,{size:16})}),s.jsx(Vo,{children:"간편한 채팅방 생성 및 관리"})]}),s.jsxs(Uo,{children:[s.jsx(Bo,{children:s.jsx(Me,{size:16})}),s.jsx(Vo,{children:"실시간 메시지 전송 및 알림"})]}),s.jsxs(Uo,{children:[s.jsx(Bo,{children:s.jsx(Me,{size:16})}),s.jsx(Vo,{children:"다양한 기기에서 동기화"})]}),s.jsxs(Uo,{children:[s.jsx(Bo,{children:s.jsx(Me,{size:16})}),s.jsx(Vo,{children:"안전한 대화 보안 시스템"})]})]})]}),s.jsx(my,{children:s.jsxs(gy,{children:[s.jsxs(vy,{children:[s.jsx(yy,{children:"로그인"}),s.jsx(xy,{children:"계정에 로그인하고 대화를 시작하세요"})]}),s.jsxs(wy,{children:[s.jsx(Bc,{isActive:l==="email",onClick:()=>a("email"),children:"이메일 로그인"}),s.jsx(Bc,{isActive:l==="social",onClick:()=>a("social"),children:"소셜 로그인"})]}),l==="email"?s.jsxs(Sy,{onSubmit:v,children:[s.jsxs(Vc,{children:[s.jsx(Hc,{htmlFor:"email",children:"이메일"}),s.jsxs(Wc,{children:[s.jsx(Qc,{children:s.jsx(lh,{size:18})}),s.jsx(Yc,{id:"email",type:"email",value:n,onChange:w=>{r(w.target.value),c("")},placeholder:"이메일을 입력하세요",hasError:!!u})]})]}),s.jsxs(Vc,{children:[s.jsx(Hc,{htmlFor:"password",children:"비밀번호"}),s.jsxs(Wc,{children:[s.jsx(Qc,{children:s.jsx(ci,{size:18})}),s.jsx(Yc,{id:"password",type:"password",value:o,onChange:w=>{i(w.target.value),c("")},placeholder:"비밀번호를 입력하세요"})]})]}),s.jsx(ky,{href:"#",children:"비밀번호를 잊으셨나요?"}),u&&s.jsxs(jy,{children:[s.jsx(ct,{size:16}),s.jsx("span",{children:u})]}),s.jsx(Cy,{type:"submit",disabled:m,children:m?"로그인 중...":"로그인"})]}):s.jsxs(Ey,{children:[s.jsxs(Gc,{onClick:()=>x("kakao"),provider:"kakao",children:[s.jsx(Kc,{src:"/icon/kakao-svgrepo-com.svg",alt:"Kakao"}),"카카오로 로그인"]}),s.jsxs(Gc,{onClick:()=>x("google"),provider:"google",children:[s.jsx(Kc,{src:"/icon/google-logo.png",alt:"Google"}),"구글로 로그인"]})]}),s.jsxs($y,{children:["계정이 없으신가요? ",s.jsx(zy,{onClick:()=>t("/signup"),children:"회원가입"})]})]})})]})},ay=h.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({theme:e})=>e.colors.background};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    flex-direction: column;
  }
`,uy=h.div`
  display: none;
  
  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    padding: 3rem;
    background: linear-gradient(135deg, #4285f4, #34a853);
    color: white;
  }
`,cy=h.div`
  margin-bottom: 4rem;
`,dy=h.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`,fy=h.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-left: 0.75rem;
`,py=h.p`
  font-size: 1.5rem;
  font-weight: 300;
  opacity: 0.9;
`,hy=h.ul`
  list-style: none;
  padding: 0;
`,Uo=h.li`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
  font-size: 1.1rem;
`,Bo=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  margin-right: 1rem;
`,Vo=h.span`
  opacity: 0.9;
`,my=h.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`,gy=h.div`
  width: 100%;
  max-width: 450px;
  padding: 2.5rem;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
`,vy=h.div`
  text-align: center;
  margin-bottom: 2rem;
`,yy=h.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: ${({theme:e})=>e.colors.text};
`,xy=h.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.textLight};
`,wy=h.div`
  display: flex;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,Bc=h.button`
  flex: 1;
  padding: 0.75rem 0;
  font-size: 0.95rem;
  font-weight: ${({isActive:e})=>e?"600":"400"};
  color: ${({isActive:e,theme:t})=>e?"#4285f4":t.colors.textLight};
  border-bottom: 2px solid ${({isActive:e})=>e?"#4285f4":"transparent"};
  transition: all 0.2s;
  
  &:hover {
    color: ${({isActive:e,theme:t})=>e?"#4285f4":t.colors.text};
  }
`,Sy=h.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Vc=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Hc=h.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
`,Wc=h.div`
  position: relative;
`,Qc=h.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.colors.textLight};
`,Yc=h.input`
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 2.75rem;
  border: 1px solid ${({hasError:e,theme:t})=>e?"#ef4444":t.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    border-color: ${({hasError:e})=>e?"#ef4444":"#4285f4"};
    box-shadow: 0 0 0 3px ${({hasError:e})=>e?"rgba(239, 68, 68, 0.15)":"rgba(66, 133, 244, 0.15)"};
  }
  
  &::placeholder {
    color: ${({theme:e})=>e.colors.textLight};
    opacity: 0.6;
  }
`,ky=h.a`
  font-size: 0.9rem;
  color: #4285f4;
  text-align: right;
  margin-top: -0.5rem;
  
  &:hover {
    text-decoration: underline;
  }
`,jy=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background-color: #fee2e2;
  border-radius: 8px;
  color: #ef4444;
  font-size: 0.9rem;
`,Cy=h.button`
  padding: 0.875rem;
  background-color: #4285f4;
  color: white;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(66, 133, 244, 0.3);
  
  &:hover:not(:disabled) {
    background-color: #3367d6;
    box-shadow: 0 4px 12px rgba(66, 133, 244, 0.4);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,Ey=h.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Gc=h.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.875rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s;
  
  ${({provider:e})=>{if(e==="kakao")return`
        background-color: #FEE500;
        color: #000000;
        
        &:hover {
          background-color: #F6DC00;
        }
      `;if(e==="google")return`
        background-color: white;
        color: #4285F4;
        border: 1px solid #DADCE0;
        
        &:hover {
          background-color: #F8FAFF;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        }
      `}}
`,Kc=h.img`
  width: 24px;
  height: 24px;
`,$y=h.p`
  margin-top: 2rem;
  text-align: center;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.textLight};
`,zy=h.a`
  color: #4285f4;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`,Py=({onRegister:e})=>{const t=jn(),[n,r]=k.useState({name:"",email:"",password:"",confirmPassword:"",phone:"",verificationCode:""}),[o,i]=k.useState({}),[l,a]=k.useState(null),[u,c]=k.useState(!1),m=k.useRef(null),[p,v]=k.useState(!1),[x,w]=k.useState(null),[y,$]=k.useState(null),[f,d]=k.useState("idle"),[g,S]=k.useState(!1),[z,_]=k.useState(!1),[C,j]=k.useState(""),A=E=>{const L=E.replace(/[^\d]/g,"");return L.length<=3?L:L.length<=7?`${L.slice(0,3)}-${L.slice(3)}`:`${L.slice(0,3)}-${L.slice(3,7)}-${L.slice(7,11)}`},R=E=>{const{name:L,value:D}=E.target;r(L==="phone"?b=>({...b,[L]:A(D)}):b=>({...b,[L]:D})),o[L]&&i(b=>{const qe={...b};return delete qe[L],qe}),L==="password"&&ge(D),L==="email"&&f!=="idle"&&(d("idle"),j(""))},ge=E=>{if(!E){a(null);return}const L=/[a-zA-Z]/.test(E),D=/[0-9]/.test(E),b=/[!@#$%^&*(),.?":{}|<>]/.test(E);E.length<6?a("weak"):E.length>=8&&L&&D&&b?a("strong"):a("medium")},lt=()=>{w(1800),y&&clearInterval(y);const E=setInterval(()=>{w(L=>L===null||L<=1?(clearInterval(E),0):L-1)},1e3);$(E)},st=E=>{const L=Math.floor(E/60),D=E%60;return`${L.toString().padStart(2,"0")}:${D.toString().padStart(2,"0")}`},Cn=async()=>{if(!n.email){i(E=>({...E,email:"이메일을 입력해주세요."}));return}if(!/^[a-zA-Z0-9_+&*-]{1,30}@[A-Za-z0-9-]{1,20}\.[A-Za-z]{2,10}$/.test(n.email)){i(E=>({...E,email:"이메일 형식을 올바르게 입력해주세요."}));return}try{S(!0),j("");const L=await(await fetch("http://localhost:8080/api/email/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.email})})).json();L.status==="success"?(d("requested"),j("인증 코드가 이메일로 전송되었습니다. 이메일을 확인해주세요."),lt(),setTimeout(()=>{m.current&&m.current.focus()},100)):j(L.message||"인증 코드 전송에 실패했습니다. 다시 시도해주세요.")}catch(E){console.error("인증 코드 요청 오류:",E),j("인증 코드 요청 중 오류가 발생했습니다. 다시 시도해주세요.")}finally{S(!1)}},pr=async()=>{if(!n.verificationCode){i(E=>({...E,verificationCode:"인증 코드를 입력해주세요."}));return}try{_(!0),j("");const L=await(await fetch("http://localhost:8080/api/email/verify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.email,code:n.verificationCode})})).json();L.status==="success"?(d("verified"),j("이메일 인증이 완료되었습니다.")):j(L.message||"인증 코드가 올바르지 않습니다. 다시 확인해주세요.")}catch(E){console.error("인증 코드 확인 오류:",E),j("인증 코드 확인 중 오류가 발생했습니다. 다시 시도해주세요.")}finally{_(!1)}},qt=()=>{const E={};return n.name.trim()?/^[가-힣]{3,5}$/.test(n.name)||(E.name="이름은 한글 3~5자로 입력해주세요."):E.name="이름을 입력해주세요.",n.email.trim()?/^[a-zA-Z0-9_+&*-]{1,30}@[A-Za-z0-9-]{1,20}\.[A-Za-z]{2,10}$/.test(n.email)||(E.email="이메일 형식을 올바르게 입력해주세요."):E.email="이메일을 입력해주세요.",f!=="verified"&&(E.email="이메일 인증이 필요합니다."),n.password?/^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}$/.test(n.password)||(E.password="비밀번호는 8~20자 영문 소문자, 숫자, 특수문자를 포함해야 합니다."):E.password="비밀번호를 입력해주세요.",n.password!==n.confirmPassword&&(E.confirmPassword="비밀번호가 일치하지 않습니다."),n.phone?/^\d{3}-\d{3,4}-\d{4}$/.test(n.phone)||(E.phone="전화번호 형식을 올바르게 입력해주세요. (예: 010-1234-5678)"):E.phone="전화번호를 입력해주세요.",i(E),Object.keys(E).length===0},at=async E=>{if(E.preventDefault(),qt())try{c(!0),await e({name:n.name,email:n.email,password:n.password,phone:n.phone})?v(!0):i({form:"회원가입에 실패했습니다. 다시 시도해주세요."})}catch(L){console.error("회원가입 오류:",L),i({form:"회원가입 중 오류가 발생했습니다."})}finally{c(!1)}},I=()=>{t("/login")};return k.useEffect(()=>()=>{y&&clearInterval(y)},[y]),p?s.jsxs(Xc,{children:[s.jsxs(Zc,{children:[s.jsxs(Jc,{children:[s.jsxs(qc,{children:[s.jsx(vt,{size:32}),s.jsx(ed,{children:"Chattr"})]}),s.jsx(td,{children:"실시간으로 소통하는 새로운 방법"})]}),s.jsxs(nd,{children:[s.jsxs($t,{children:[s.jsx(zt,{children:s.jsx(Me,{size:16})}),s.jsx(Pt,{children:"간편한 채팅방 생성 및 관리"})]}),s.jsxs($t,{children:[s.jsx(zt,{children:s.jsx(Me,{size:16})}),s.jsx(Pt,{children:"실시간 메시지 전송 및 알림"})]}),s.jsxs($t,{children:[s.jsx(zt,{children:s.jsx(Me,{size:16})}),s.jsx(Pt,{children:"다양한 기기에서 동기화"})]}),s.jsxs($t,{children:[s.jsx(zt,{children:s.jsx(Me,{size:16})}),s.jsx(Pt,{children:"안전한 대화 보안 시스템"})]})]})]}),s.jsx(rd,{children:s.jsxs(tx,{children:[s.jsx(nx,{children:s.jsx(q1,{size:80})}),s.jsx(rx,{children:"회원가입 완료!"}),s.jsxs(ox,{children:[s.jsx("strong",{children:n.name}),"님, 회원가입이 성공적으로 완료되었습니다.",s.jsx("br",{}),"이제 로그인하여 Chattr의 다양한 기능을 이용해보세요."]}),s.jsx(ix,{onClick:I,children:"로그인하기"}),s.jsx(lx,{onClick:()=>t("/"),children:"홈으로 돌아가기"})]})})]}):s.jsxs(Xc,{children:[s.jsxs(Zc,{children:[s.jsxs(Jc,{children:[s.jsxs(qc,{children:[s.jsx(vt,{size:32}),s.jsx(ed,{children:"Chattr"})]}),s.jsx(td,{children:"실시간으로 소통하는 새로운 방법"})]}),s.jsxs(nd,{children:[s.jsxs($t,{children:[s.jsx(zt,{children:s.jsx(Me,{size:16})}),s.jsx(Pt,{children:"간편한 채팅방 생성 및 관리"})]}),s.jsxs($t,{children:[s.jsx(zt,{children:s.jsx(Me,{size:16})}),s.jsx(Pt,{children:"실시간 메시지 전송 및 알림"})]}),s.jsxs($t,{children:[s.jsx(zt,{children:s.jsx(Me,{size:16})}),s.jsx(Pt,{children:"다양한 기기에서 동기화"})]}),s.jsxs($t,{children:[s.jsx(zt,{children:s.jsx(Me,{size:16})}),s.jsx(Pt,{children:"안전한 대화 보안 시스템"})]})]})]}),s.jsx(rd,{children:s.jsxs(_y,{children:[s.jsxs(Ly,{children:[s.jsx(Iy,{children:"회원가입"}),s.jsx(Ny,{children:"계정을 만들고 대화를 시작하세요"})]}),s.jsxs(Ry,{onSubmit:at,children:[s.jsxs(Pn,{children:[s.jsx(_n,{htmlFor:"name",children:"이름"}),s.jsxs(Ho,{children:[s.jsx(Ln,{children:s.jsx(sh,{size:18})}),s.jsx(Wo,{id:"name",name:"name",type:"text",value:n.name,onChange:R,placeholder:"이름을 입력하세요 (한글 3~5자)",hasError:!!o.name})]}),o.name&&s.jsxs(_t,{children:[s.jsx(ct,{size:16}),s.jsx("span",{children:o.name})]})]}),s.jsxs(Pn,{children:[s.jsx(_n,{htmlFor:"email",children:"이메일"}),s.jsxs(Wy,{children:[s.jsx(Ln,{children:s.jsx(lh,{size:18})}),s.jsx(Qy,{id:"email",name:"email",type:"email",value:n.email,onChange:R,placeholder:"이메일을 입력하세요",hasError:!!o.email,disabled:f==="verified"}),s.jsx(Yy,{type:"button",onClick:Cn,disabled:g||f==="verified"||!n.email,children:g?"요청 중...":f==="verified"?"인증 완료":"인증 요청"})]}),o.email&&s.jsxs(_t,{children:[s.jsx(ct,{size:16}),s.jsx("span",{children:o.email})]}),C&&s.jsxs(qy,{isSuccess:f==="verified",children:[f==="verified"?s.jsx(zn,{size:16}):s.jsx(ev,{size:16}),s.jsx("span",{children:C}),x!==null&&x>0&&f==="requested"&&s.jsxs(Zy,{children:["남은 시간: ",st(x)]}),x===0&&f==="requested"&&s.jsx(Jy,{children:"인증 시간이 만료되었습니다. 다시 요청해주세요."})]})]}),f==="requested"&&s.jsxs(Pn,{children:[s.jsx(_n,{htmlFor:"verificationCode",children:"인증 코드"}),s.jsxs(Gy,{children:[s.jsx(Ln,{children:s.jsx(ci,{size:18})}),s.jsx(Ky,{id:"verificationCode",name:"verificationCode",type:"text",value:n.verificationCode,onChange:R,placeholder:"이메일로 받은 인증 코드를 입력하세요",hasError:!!o.verificationCode,disabled:x===0,ref:m}),s.jsx(Xy,{type:"button",onClick:pr,disabled:z||!n.verificationCode||x===0,children:z?"확인 중...":"인증완료"})]}),o.verificationCode&&s.jsxs(_t,{children:[s.jsx(ct,{size:16}),s.jsx("span",{children:o.verificationCode})]}),x===0&&s.jsxs(_t,{children:[s.jsx(ct,{size:16}),s.jsx("span",{children:"인증 시간이 만료되었습니다. 다시 인증 요청을 해주세요."})]})]}),s.jsxs(Pn,{children:[s.jsx(_n,{htmlFor:"phone",children:"전화번호"}),s.jsxs(Ho,{children:[s.jsx(Ln,{children:s.jsx(lv,{size:18})}),s.jsx(Wo,{id:"phone",name:"phone",type:"tel",value:n.phone,onChange:R,placeholder:"전화번호를 입력하세요 (예: 010-1234-5678)",hasError:!!o.phone})]}),o.phone&&s.jsxs(_t,{children:[s.jsx(ct,{size:16}),s.jsx("span",{children:o.phone})]})]}),s.jsxs(Pn,{children:[s.jsx(_n,{htmlFor:"password",children:"비밀번호"}),s.jsxs(Ho,{children:[s.jsx(Ln,{children:s.jsx(ci,{size:18})}),s.jsx(Wo,{id:"password",name:"password",type:"password",value:n.password,onChange:R,placeholder:"비밀번호를 입력하세요",hasError:!!o.password})]}),s.jsxs(ex,{children:[s.jsxs(Qo,{met:n.password.length>=8,children:[s.jsx(zn,{size:14})," 8자 이상"]}),s.jsxs(Qo,{met:/[a-z]/.test(n.password),children:[s.jsx(zn,{size:14})," 영문 소문자 포함"]}),s.jsxs(Qo,{met:/\d/.test(n.password),children:[s.jsx(zn,{size:14})," 숫자 포함"]}),s.jsxs(Qo,{met:/[!@#$%^&*()_+]/.test(n.password),children:[s.jsx(zn,{size:14})," 특수문자 포함"]})]}),l&&s.jsxs(Oy,{strength:l,children:[s.jsxs(My,{children:[l==="weak"&&"약함",l==="medium"&&"보통",l==="strong"&&"강함"]}),s.jsx(Dy,{children:s.jsx(by,{strength:l})})]}),o.password&&s.jsxs(_t,{children:[s.jsx(ct,{size:16}),s.jsx("span",{children:o.password})]})]}),s.jsxs(Pn,{children:[s.jsx(_n,{htmlFor:"confirmPassword",children:"비밀번호 확인"}),s.jsxs(Ho,{children:[s.jsx(Ln,{children:s.jsx(ci,{size:18})}),s.jsx(Wo,{id:"confirmPassword",name:"confirmPassword",type:"password",value:n.confirmPassword,onChange:R,placeholder:"비밀번호를 다시 입력하세요",hasError:!!o.confirmPassword})]}),n.confirmPassword&&n.password===n.confirmPassword&&s.jsxs(Ty,{children:[s.jsx(zn,{size:16}),s.jsx("span",{children:"비밀번호가 일치합니다"})]}),o.confirmPassword&&s.jsxs(_t,{children:[s.jsx(ct,{size:16}),s.jsx("span",{children:o.confirmPassword})]})]}),o.form&&s.jsxs(_t,{children:[s.jsx(ct,{size:16}),s.jsx("span",{children:o.form})]}),s.jsxs(Fy,{children:[s.jsx(Ay,{type:"checkbox",id:"terms",required:!0}),s.jsxs(Uy,{htmlFor:"terms",children:[s.jsx("a",{href:"#",onClick:E=>E.preventDefault(),children:"이용약관"}),"과"," ",s.jsx("a",{href:"#",onClick:E=>E.preventDefault(),children:"개인정보처리방침"}),"에 동의합니다"]})]}),s.jsx(By,{type:"submit",disabled:u||f!=="verified",children:u?"처리 중...":"회원가입"})]}),s.jsxs(Vy,{children:["이미 계정이 있으신가요? ",s.jsx(Hy,{onClick:()=>t("/login"),children:"로그인"})]})]})})]})},Xc=h.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({theme:e})=>e.colors.background};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    flex-direction: column;
  }
`,Zc=h.div`
  display: none;
  
  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    padding: 3rem;
    background: linear-gradient(135deg, #4285f4, #34a853);
    color: white;
  }
`,Jc=h.div`
  margin-bottom: 4rem;
`,qc=h.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`,ed=h.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-left: 0.75rem;
`,td=h.p`
  font-size: 1.5rem;
  font-weight: 300;
  opacity: 0.9;
`,nd=h.ul`
  list-style: none;
  padding: 0;
`,$t=h.li`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
  font-size: 1.1rem;
`,zt=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  margin-right: 1rem;
`,Pt=h.span`
  opacity: 0.9;
`,rd=h.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`,_y=h.div`
  width: 100%;
  max-width: 500px;
  padding: 2.5rem;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
`,Ly=h.div`
  text-align: center;
  margin-bottom: 2rem;
`,Iy=h.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: ${({theme:e})=>e.colors.text};
`,Ny=h.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.textLight};
`,Ry=h.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Pn=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,_n=h.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
`,Ho=h.div`
  position: relative;
  display: flex;
`,Ln=h.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.colors.textLight};
`,Wo=h.input`
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 2.75rem;
  border: 1px solid ${({hasError:e,theme:t})=>e?"#ef4444":t.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    border-color: ${({hasError:e})=>e?"#ef4444":"#4285f4"};
    box-shadow: 0 0 0 3px ${({hasError:e})=>e?"rgba(239, 68, 68, 0.15)":"rgba(66, 133, 244, 0.15)"};
  }
  
  &::placeholder {
    color: ${({theme:e})=>e.colors.textLight};
    opacity: 0.6;
  }
  
  &:disabled {
    background-color: #f9fafb;
    cursor: not-allowed;
  }
`,_t=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  font-size: 0.85rem;
  color: #ef4444;
`,Ty=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  font-size: 0.85rem;
  color: #10b981;
`,Oy=h.div`
  margin-top: 0.5rem;
`,My=h.span`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.colors.textLight};
  margin-bottom: 0.25rem;
  display: block;
`,Dy=h.div`
  height: 4px;
  background-color: #e5e7eb;
  border-radius: 2px;
  overflow: hidden;
`,by=h.div`
  height: 100%;
  border-radius: 2px;
  width: ${({strength:e})=>e==="weak"?"30%":e==="medium"?"60%":"100%"};
  background-color: ${({strength:e})=>e==="weak"?"#ef4444":e==="medium"?"#f59e0b":"#10b981"};
  transition: width 0.3s ease, background-color 0.3s ease;
`,Fy=h.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
`,Ay=h.input`
  width: 18px;
  height: 18px;
  accent-color: #4285f4;
  cursor: pointer;
`,Uy=h.label`
  font-size: 0.9rem;
  color: ${({theme:e})=>e.colors.textLight};
  
  a {
    color: #4285f4;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,By=h.button`
  padding: 0.875rem;
  background-color: #4285f4;
  color: white;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(66, 133, 244, 0.3);
  margin-top: 1rem;
  
  &:hover:not(:disabled) {
    background-color: #3367d6;
    box-shadow: 0 4px 12px rgba(66, 133, 244, 0.4);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,Vy=h.p`
  margin-top: 2rem;
  text-align: center;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.textLight};
`,Hy=h.a`
  color: #4285f4;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`,Wy=h.div`
  position: relative;
  display: flex;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.border};
  transition: all 0.2s;
  
  &:focus-within {
    border-color: #4285f4;
    box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.15);
  }
`,Qy=h.input`
  flex: 1;
  padding: 0.875rem 1rem 0.875rem 2.75rem;
  border: none;
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: ${({theme:e})=>e.colors.textLight};
    opacity: 0.6;
  }
  
  &:disabled {
    background-color: #f9fafb;
    cursor: not-allowed;
  }
`,Yy=h.button`
  white-space: nowrap;
  padding: 0 1rem;
  background-color: #4285f4;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover:not(:disabled) {
    background-color: #3367d6;
  }
  
  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`,Gy=h.div`
  position: relative;
  display: flex;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.border};
  transition: all 0.2s;
  
  &:focus-within {
    border-color: #4285f4;
    box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.15);
  }
`,Ky=h.input`
  flex: 1;
  padding: 0.875rem 1rem 0.875rem 2.75rem;
  border: none;
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: ${({theme:e})=>e.colors.textLight};
    opacity: 0.6;
  }
  
  &:disabled {
    background-color: #f9fafb;
    cursor: not-allowed;
  }
`,Xy=h.button`
  white-space: nowrap;
  padding: 0 1rem;
  background-color: #10b981;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover:not(:disabled) {
    background-color: #059669;
  }
  
  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`,Zy=h.span`
  margin-left: auto;
  font-weight: 500;
  color: #f59e0b;
`,Jy=h.span`
  color: #ef4444;
  font-weight: 500;
`,qy=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  font-size: 0.85rem;
  color: ${({isSuccess:e})=>e?"#10b981":"#f59e0b"};
`,ex=h.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-top: 0.5rem;
  font-size: 0.8rem;
`,Qo=h.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({met:e})=>e?"#10b981":"#9ca3af"};
  
  svg {
    color: ${({met:e})=>e?"#10b981":"#9ca3af"};
    opacity: ${({met:e})=>e?1:.5};
  }
`,tx=h.div`
  width: 100%;
  max-width: 500px;
  padding: 3rem 2.5rem;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`,nx=h.div`
  color: #10b981;
  margin-bottom: 1.5rem;
  animation: fadeIn 0.5s ease-in-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`,rx=h.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({theme:e})=>e.colors.text};
  animation: slideUp 0.5s ease-in-out;
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,ox=h.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({theme:e})=>e.colors.textLight};
  margin-bottom: 2rem;
  animation: slideUp 0.5s ease-in-out 0.1s both;
`,ix=h.button`
  padding: 1rem 2.5rem;
  background-color: #4285f4;
  color: white;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(66, 133, 244, 0.3);
  margin-bottom: 1rem;
  animation: slideUp 0.5s ease-in-out 0.2s both;
  
  &:hover {
    background-color: #3367d6;
    box-shadow: 0 4px 12px rgba(66, 133, 244, 0.4);
    transform: translateY(-2px);
  }
`,lx=h.a`
  color: ${({theme:e})=>e.colors.textLight};
  font-size: 0.95rem;
  text-decoration: underline;
  cursor: pointer;
  animation: slideUp 0.5s ease-in-out 0.3s both;
  
  &:hover {
    color: ${({theme:e})=>e.colors.text};
  }
`,uh=e=>new Date(e).toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit"}),od=["일상","게임","음악","영화","스포츠","여행","음식","패션","IT/기술","취업/진로","학교/학원","기타"],sx=({user:e,chatRooms:t,onCreateChatRoom:n,onJoinChatRoom:r,onLogout:o})=>{const i=jn(),[l,a]=k.useState(""),[u,c]=k.useState(!1),[m,p]=k.useState(""),[v,x]=k.useState("일상"),[w,y]=k.useState("my"),[$,f]=k.useState("전체"),d=t.filter(j=>j.participants.some(A=>A.userId===e.userId)&&j.name.toLowerCase().includes(l.toLowerCase())&&($==="전체"||j.category===$)),g=t.filter(j=>j.isHot&&j.name.toLowerCase().includes(l.toLowerCase())&&($==="전체"||j.category===$)),S=t.filter(j=>j.name.toLowerCase().includes(l.toLowerCase())&&($==="전체"||j.category===$)),z=w==="my"?d:w==="hot"?g:S,_=j=>{r(j),i(`/chat/${j}`)},C=()=>{m.trim()&&(n(m.trim(),v),p(""),x("일상"),c(!1))};return s.jsxs(ax,{children:[s.jsx(iu,{user:e,onLogout:o}),s.jsxs(ux,{children:[s.jsxs(cx,{children:[s.jsx(dx,{children:"채팅 목록"}),s.jsxs(fx,{children:[s.jsxs(Wl,{isActive:w==="my",onClick:()=>y("my"),children:[s.jsx(ea,{size:16}),"내 채팅방"]}),s.jsxs(Wl,{isActive:w==="hot",onClick:()=>y("hot"),children:[s.jsx(ta,{size:16}),"핫한 채팅"]}),s.jsxs(Wl,{isActive:w==="all",onClick:()=>y("all"),children:[s.jsx(vt,{size:16}),"전체 채팅"]})]})]}),s.jsxs(px,{children:[s.jsxs(hx,{children:[s.jsx(mx,{children:s.jsx(uv,{size:18})}),s.jsx(gx,{type:"text",placeholder:"채팅방 검색...",value:l,onChange:j=>a(j.target.value)}),l&&s.jsx(vx,{onClick:()=>a(""),children:s.jsx(ah,{size:16})})]}),s.jsxs(yx,{children:[s.jsx(xx,{children:"주제:"}),s.jsxs(wx,{value:$,onChange:j=>f(j.target.value),children:[s.jsx("option",{value:"전체",children:"전체"}),od.map(j=>s.jsx("option",{value:j,children:j},j))]})]})]}),z.length>0?s.jsx(Sx,{children:z.map(j=>s.jsxs(kx,{onClick:()=>_(j.id),children:[s.jsxs(jx,{children:[s.jsxs(Cx,{children:[s.jsx(Ex,{children:j.name}),j.isHot&&s.jsxs($x,{children:[s.jsx(ta,{size:12})," 인기"]})]}),s.jsxs(zx,{children:[s.jsxs(Px,{children:[s.jsx(rv,{size:12}),j.category]}),s.jsxs(_x,{children:[s.jsx(ea,{size:12}),j.participantsCount,"명 참여 중"]})]}),j.lastMessage&&s.jsx(Lx,{children:j.lastMessage.content})]}),j.lastMessage&&s.jsx(Ix,{children:uh(j.lastMessage.timestamp)})]},j.id))}):s.jsx(Nx,{children:l?"검색 결과가 없습니다.":w==="my"?"참여 중인 채팅방이 없습니다.":w==="hot"?"현재 인기 채팅방이 없습니다.":"채팅방이 없습니다."}),s.jsx(Rx,{onClick:()=>c(!0),children:s.jsx(sv,{size:24})})]}),u&&s.jsx(Tx,{children:s.jsxs(Ox,{children:[s.jsx(Mx,{children:"새 채팅방 만들기"}),s.jsxs(id,{children:[s.jsx(ld,{children:"채팅방 이름"}),s.jsx(Dx,{type:"text",placeholder:"채팅방 이름",value:m,onChange:j=>p(j.target.value),autoFocus:!0})]}),s.jsxs(id,{children:[s.jsx(ld,{children:"주제 선택"}),s.jsx(bx,{children:od.map(j=>s.jsx(Fx,{isSelected:v===j,onClick:()=>x(j),children:j},j))})]}),s.jsxs(Ax,{children:[s.jsx(Ux,{onClick:()=>c(!1),children:"취소"}),s.jsx(Bx,{onClick:C,disabled:!m.trim(),children:"만들기"})]})]})})]})},ax=h.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,ux=h.main`
  flex: 1;
  padding: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  padding-top: 1.5rem; /* 헤더와의 간격 일관되게 유지 */
`,cx=h.div`
  margin-bottom: 1.5rem;
`,dx=h.h1`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({theme:e})=>e.colors.text};
`,fx=h.div`
  display: flex;
  gap: 0.5rem;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  margin-bottom: 1.5rem;
`,Wl=h.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  font-weight: ${({isActive:e})=>e?"600":"400"};
  color: ${({isActive:e,theme:t})=>e?"#4285f4":t.colors.textLight};
  border-bottom: 2px solid ${({isActive:e})=>e?"#4285f4":"transparent"};
  transition: all 0.2s;
  
  &:hover {
    color: ${({isActive:e,theme:t})=>e?"#4285f4":t.colors.text};
  }
`,px=h.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
  }
`,hx=h.div`
  position: relative;
  flex: 1;
`,mx=h.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.colors.textLight};
`,gx=h.input`
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 2.5rem;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 8px;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
  }
`,vx=h.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.colors.textLight};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.border};
  }
`,yx=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,xx=h.span`
  font-size: 0.9rem;
  color: ${({theme:e})=>e.colors.textLight};
  white-space: nowrap;
`,wx=h.select`
  padding: 0.75rem;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 8px;
  font-size: 0.9rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
  }
`,Sx=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,kx=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({theme:e})=>e.colors.surface};
  border-radius: 8px;
  box-shadow: ${({theme:e})=>e.shadows.small};
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.shadows.medium};
  }
`,jx=h.div`
  flex: 1;
  min-width: 0;
`,Cx=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
`,Ex=h.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
`,$x=h.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  background-color: #ef4444;
  color: white;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
`,zx=h.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
`,Px=h.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  background-color: #f3f4f6;
  color: ${({theme:e})=>e.colors.textLight};
  border-radius: 12px;
  font-size: 0.75rem;
`,_x=h.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textLight};
`,Lx=h.p`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.textLight};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 250px;
`,Ix=h.span`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textLight};
  margin-left: 1rem;
  white-space: nowrap;
`,Nx=h.div`
  text-align: center;
  padding: 3rem 0;
  color: ${({theme:e})=>e.colors.textLight};
`,Rx=h.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #4285f4;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(66, 133, 244, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    background-color: #3367d6;
    box-shadow: 0 6px 20px rgba(66, 133, 244, 0.4);
  }
`,Tx=h.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,Ox=h.div`
  width: 90%;
  max-width: 500px;
  background-color: ${({theme:e})=>e.colors.surface};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: ${({theme:e})=>e.shadows.large};
`,Mx=h.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${({theme:e})=>e.colors.text};
`,id=h.div`
  margin-bottom: 1.5rem;
`,ld=h.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.colors.text};
`,Dx=h.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 8px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4285f4;
    box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.15);
  }
`,bx=h.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  
  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Fx=h.div`
  padding: 0.75rem 0.5rem;
  text-align: center;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${({isSelected:e})=>e?"#4285f4":"#f3f4f6"};
  color: ${({isSelected:e})=>e?"white":"#4b5563"};
  
  &:hover {
    background-color: ${({isSelected:e})=>e?"#3367d6":"#e5e7eb"};
  }
`,Ax=h.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`,Ux=h.button`
  padding: 0.6rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  color: ${({theme:e})=>e.colors.textLight};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({theme:e})=>e.colors.border};
  }
`,Bx=h.button`
  padding: 0.6rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  background-color: #4285f4;
  color: white;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background-color: #3367d6;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Vx=({user:e,messages:t,onSendMessage:n,onJoinChatRoom:r})=>{const{roomId:o}=p0(),i=jn(),[l,a]=k.useState(""),u=k.useRef(null),c=o&&t[o]?t[o]:[];k.useEffect(()=>{o&&r(o)},[o,r]),k.useEffect(()=>{var p;(p=u.current)==null||p.scrollIntoView({behavior:"smooth"})},[c]);const m=p=>{p.preventDefault(),o&&l.trim()&&(n(o,l.trim()),a(""))};return o?s.jsxs(Hx,{children:[s.jsxs(Wx,{children:[s.jsx(Qx,{onClick:()=>i("/chats"),children:s.jsx(X1,{size:20})}),s.jsx(Yx,{children:"채팅방"})]}),s.jsxs(Gx,{children:[c.length>0?c.map(p=>{const v=p.sender.userId===e.userId;return s.jsxs(Kx,{isOwnMessage:v,children:[!v&&s.jsx(Xx,{src:p.sender.avatar,alt:p.sender.name}),s.jsxs(Zx,{isOwnMessage:v,children:[!v&&s.jsx(Jx,{children:p.sender.name}),s.jsx(qx,{isOwnMessage:v,children:p.content}),s.jsx(ew,{isOwnMessage:v,children:uh(p.timestamp)})]})]},p.id)}):s.jsxs(tw,{children:[s.jsx("p",{children:"아직 메시지가 없습니다."}),s.jsx("p",{children:"첫 메시지를 보내보세요!"})]}),s.jsx("div",{ref:u})]}),s.jsxs(nw,{onSubmit:m,children:[s.jsx(rw,{value:l,onChange:p=>a(p.target.value),placeholder:"메시지를 입력하세요..."}),s.jsx(ow,{type:"submit",disabled:!l.trim(),children:s.jsx(cv,{size:20})})]})]}):s.jsx("div",{children:"잘못된 접근입니다."})},Hx=h.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`,Wx=h.header`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${({theme:e})=>e.colors.surface};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  box-shadow: ${({theme:e})=>e.shadows.small};
`,Qx=h.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: ${({theme:e})=>e.colors.primary};
`,Yx=h.h1`
  font-size: 1.2rem;
  color: ${({theme:e})=>e.colors.text};
`,Gx=h.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  background-color: ${({theme:e})=>e.colors.background};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Kx=h.div`
  display: flex;
  flex-direction: ${({isOwnMessage:e})=>e?"row-reverse":"row"};
  align-items: flex-start;
  gap: 0.5rem;
  max-width: 80%;
  align-self: ${({isOwnMessage:e})=>e?"flex-end":"flex-start"};
`,Xx=h.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`,Zx=h.div`
  display: flex;
  flex-direction: column;
  align-items: ${({isOwnMessage:e})=>e?"flex-end":"flex-start"};
`,Jx=h.span`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.colors.textLight};
  margin-bottom: 0.25rem;
`,qx=h.div`
  padding: 0.75rem 1rem;
  border-radius: 16px;
  background-color: ${({theme:e,isOwnMessage:t})=>t?e.colors.primary:e.colors.surface};
  color: ${({theme:e,isOwnMessage:t})=>t?"white":e.colors.text};
  max-width: 100%;
  word-break: break-word;
  box-shadow: ${({theme:e})=>e.shadows.small};
`,ew=h.span`
  font-size: 0.7rem;
  color: ${({theme:e})=>e.colors.textLight};
  margin-top: 0.25rem;
  align-self: ${({isOwnMessage:e})=>e?"flex-end":"flex-start"};
`,tw=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${({theme:e})=>e.colors.textLight};
  text-align: center;
  gap: 0.5rem;
`,nw=h.form`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${({theme:e})=>e.colors.surface};
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,rw=h.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 24px;
  font-size: 1rem;
  margin-right: 0.75rem;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
  }
`,ow=h.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.primary};
  color: white;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: ${({theme:e})=>e.colors.primary}dd;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,iw=({user:e,onLogout:t})=>{const[n,r]=k.useState(e.name),[o,i]=k.useState(!1),l=()=>{i(!1),alert("프로필이 업데이트되었습니다.")};return s.jsxs(lw,{children:[s.jsx(iu,{user:e,onLogout:t}),s.jsxs(sw,{children:[s.jsx(aw,{children:"마이페이지"}),s.jsxs(uw,{children:[s.jsxs(cw,{children:[s.jsx(dw,{src:e.avatar,alt:e.name}),s.jsx(fw,{children:s.jsx(J1,{size:24})})]}),s.jsxs(pw,{children:[o?s.jsx(mw,{type:"text",value:e.name,onChange:a=>r(a.target.value),autoFocus:!0}):s.jsx(hw,{children:n}),s.jsxs(gw,{children:["ID: ",e.email]})]}),o?s.jsxs(yw,{onClick:l,children:[s.jsx(av,{size:18}),"저장"]}):s.jsx(vw,{onClick:()=>i(!0),children:"프로필 수정"})]}),s.jsxs(xw,{children:[s.jsx(ww,{children:"설정"}),s.jsxs(Ql,{children:[s.jsx(Yl,{children:"알림"}),s.jsxs(Gl,{children:[s.jsx(Kl,{type:"checkbox",id:"notifications",defaultChecked:!0}),s.jsx(Xl,{})]})]}),s.jsxs(Ql,{children:[s.jsx(Yl,{children:"다크 모드"}),s.jsxs(Gl,{children:[s.jsx(Kl,{type:"checkbox",id:"darkMode"}),s.jsx(Xl,{})]})]}),s.jsxs(Ql,{children:[s.jsx(Yl,{children:"소리"}),s.jsxs(Gl,{children:[s.jsx(Kl,{type:"checkbox",id:"sound",defaultChecked:!0}),s.jsx(Xl,{})]})]})]}),s.jsx(Sw,{onClick:t,children:"로그아웃"})]})]})},lw=h.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,sw=h.main`
  flex: 1;
  padding: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
`,aw=h.h1`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${({theme:e})=>e.colors.text};
`,uw=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: ${({theme:e})=>e.colors.surface};
  border-radius: 8px;
  box-shadow: ${({theme:e})=>e.shadows.medium};
  margin-bottom: 2rem;
`,cw=h.div`
  position: relative;
  margin-bottom: 1.5rem;
`,dw=h.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`,fw=h.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 32px;
  height: 32px;
  background-color: ${({theme:e})=>e.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  box-shadow: ${({theme:e})=>e.shadows.small};
`,pw=h.div`
  text-align: center;
  margin-bottom: 1.5rem;
`,hw=h.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.colors.text};
`,mw=h.input`
  font-size: 1.5rem;
  padding: 0.5rem;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 4px;
  text-align: center;
  margin-bottom: 0.5rem;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
  }
`,gw=h.p`
  font-size: 0.9rem;
  color: ${({theme:e})=>e.colors.textLight};
`,vw=h.button`
  padding: 0.6rem 1.2rem;
  background-color: transparent;
  border: 1px solid ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.primary};
  border-radius: 4px;
  font-size: 0.9rem;
  transition: all 0.2s;

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary}11;
  }
`,yw=h.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background-color: ${({theme:e})=>e.colors.primary};
  color: white;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary}dd;
  }
`,xw=h.section`
  background-color: ${({theme:e})=>e.colors.surface};
  border-radius: 8px;
  box-shadow: ${({theme:e})=>e.shadows.medium};
  padding: 1.5rem;
  margin-bottom: 2rem;
`,ww=h.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: ${({theme:e})=>e.colors.text};
`,Ql=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};

  &:last-child {
    border-bottom: none;
  }
`,Yl=h.label`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.text};
`,Gl=h.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
`,Kl=h.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${({theme:e})=>e.colors.primary};
  }

  &:checked + span:before {
    transform: translateX(24px);
  }
`,Xl=h.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({theme:e})=>e.colors.border};
  transition: 0.4s;
  border-radius: 24px;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`,Sw=h.button`
  width: 100%;
  padding: 0.75rem;
  background-color: ${({theme:e})=>e.colors.error};
  color: white;
  border-radius: 4px;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({theme:e})=>e.colors.error}dd;
  }
`,kw=({size:e=40,color:t="#4285f4"})=>s.jsx(Cw,{children:s.jsx(Ew,{size:e,color:t})}),jw=T1`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Cw=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
`,Ew=h.div`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: ${({color:e})=>e};
  animation: ${jw} 0.8s linear infinite;
`;function $w(){const{user:e,loading:t,login:n,logout:r,register:o}=V1(),[i,l]=k.useState(D1),[a,u]=k.useState(b1),[c,m]=k.useState(!0);k.useEffect(()=>{const y=()=>{window.scrollTo(0,0)};return window.addEventListener("popstate",y),()=>{window.removeEventListener("popstate",y)}},[]),k.useEffect(()=>{t||m(!1)},[t]),k.useEffect(()=>{if(!e)return;(async()=>{try{const $=await Mc();l($)}catch($){console.error("채팅방 목록을 가져오는데 실패했습니다:",$)}})()},[e]);const p=async(y,$)=>{if(e)try{const f=await Y1(y,$);u(d=>({...d,[y]:[...d[y]||[],f]})),l(d=>d.map(g=>g.id===y?{...g,lastMessage:f}:g))}catch(f){if(console.error("메시지 전송 오류:",f),e){const d={id:Date.now().toString(),sender:e,content:$,timestamp:new Date().toISOString()};u(g=>({...g,[y]:[...g[y]||[],d]})),l(g=>g.map(S=>S.id===y?{...S,lastMessage:d}:S))}}},v=async(y,$)=>{if(e)try{const f=await H1(y,$);return l(d=>[...d,f]),f.id}catch(f){console.error("채팅방 생성 오류:",f);const d={id:Date.now().toString(),name:y,createdBy:e.userId,participants:[e],category:$||"일상",participantsCount:1,isHot:!1};return l(g=>[...g,d]),d.id}},x=async y=>{if(e)try{await W1(y);const $=await Q1(y);u(d=>({...d,[y]:$}));const f=await Mc();l(f)}catch($){console.error("채팅방 참여 오류:",$),l(f=>f.map(d=>{if(d.id===y&&!d.participants.some(g=>g.userId===e.userId)){const g=[...d.participants,e],S=d.participantsCount+1,z=S>=10;return{...d,participants:g,participantsCount:S,isHot:z}}return d})),a[y]||u(f=>({...f,[y]:[]}))}},w=async y=>{try{return await o(y)}catch($){return console.error("회원가입 오류:",$),!1}};return c?s.jsx(kw,{}):s.jsxs(L1,{theme:M1,children:[s.jsx(O1,{}),s.jsx(N0,{children:s.jsxs(_0,{children:[s.jsx(on,{path:"/",element:s.jsx(Bv,{user:e,onLogout:r})}),s.jsx(on,{path:"/login",element:e?s.jsx(jr,{to:"/"}):s.jsx(sy,{onLogin:n})}),s.jsx(on,{path:"/signup",element:e?s.jsx(jr,{to:"/"}):s.jsx(Py,{onRegister:w})}),s.jsx(on,{path:"/chats",element:e?s.jsx(sx,{user:e,chatRooms:i,onCreateChatRoom:v,onJoinChatRoom:x,onLogout:r}):s.jsx(jr,{to:"/login"})}),s.jsx(on,{path:"/chat/:roomId",element:e?s.jsx(Vx,{user:e,messages:a,onSendMessage:p,onJoinChatRoom:x,onLogout:r}):s.jsx(jr,{to:"/login"})}),s.jsx(on,{path:"/mypage",element:e?s.jsx(iw,{user:e,onLogout:r}):s.jsx(jr,{to:"/login"})})]})})]})}Zl.createRoot(document.getElementById("root")).render(s.jsx(_e.StrictMode,{children:s.jsx($w,{})}));
