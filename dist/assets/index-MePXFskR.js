function lS(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in n)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(n,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function uS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var vf={exports:{}},ul={},wf={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy;function cS(){if(Dy)return Ne;Dy=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function I(M){return M===null||typeof M!="object"?null:(M=E&&M[E]||M["@@iterator"],typeof M=="function"?M:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,V={};function A(M,W,de){this.props=M,this.context=W,this.refs=V,this.updater=de||L}A.prototype.isReactComponent={},A.prototype.setState=function(M,W){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,W,"setState")},A.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function X(){}X.prototype=A.prototype;function Y(M,W,de){this.props=M,this.context=W,this.refs=V,this.updater=de||L}var K=Y.prototype=new X;K.constructor=Y,P(K,A.prototype),K.isPureReactComponent=!0;var te=Array.isArray,_e=Object.prototype.hasOwnProperty,me={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function S(M,W,de){var Re,Pe={},De=null,je=null;if(W!=null)for(Re in W.ref!==void 0&&(je=W.ref),W.key!==void 0&&(De=""+W.key),W)_e.call(W,Re)&&!x.hasOwnProperty(Re)&&(Pe[Re]=W[Re]);var Be=arguments.length-2;if(Be===1)Pe.children=de;else if(1<Be){for(var Ge=Array(Be),At=0;At<Be;At++)Ge[At]=arguments[At+2];Pe.children=Ge}if(M&&M.defaultProps)for(Re in Be=M.defaultProps,Be)Pe[Re]===void 0&&(Pe[Re]=Be[Re]);return{$$typeof:n,type:M,key:De,ref:je,props:Pe,_owner:me.current}}function k(M,W){return{$$typeof:n,type:M.type,key:W,ref:M.ref,props:M.props,_owner:M._owner}}function b(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function D(M){var W={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(de){return W[de]})}var U=/\/+/g;function C(M,W){return typeof M=="object"&&M!==null&&M.key!=null?D(""+M.key):W.toString(36)}function $e(M,W,de,Re,Pe){var De=typeof M;(De==="undefined"||De==="boolean")&&(M=null);var je=!1;if(M===null)je=!0;else switch(De){case"string":case"number":je=!0;break;case"object":switch(M.$$typeof){case n:case e:je=!0}}if(je)return je=M,Pe=Pe(je),M=Re===""?"."+C(je,0):Re,te(Pe)?(de="",M!=null&&(de=M.replace(U,"$&/")+"/"),$e(Pe,W,de,"",function(At){return At})):Pe!=null&&(b(Pe)&&(Pe=k(Pe,de+(!Pe.key||je&&je.key===Pe.key?"":(""+Pe.key).replace(U,"$&/")+"/")+M)),W.push(Pe)),1;if(je=0,Re=Re===""?".":Re+":",te(M))for(var Be=0;Be<M.length;Be++){De=M[Be];var Ge=Re+C(De,Be);je+=$e(De,W,de,Ge,Pe)}else if(Ge=I(M),typeof Ge=="function")for(M=Ge.call(M),Be=0;!(De=M.next()).done;)De=De.value,Ge=Re+C(De,Be++),je+=$e(De,W,de,Ge,Pe);else if(De==="object")throw W=String(M),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return je}function yt(M,W,de){if(M==null)return M;var Re=[],Pe=0;return $e(M,Re,"","",function(De){return W.call(de,De,Pe++)}),Re}function qe(M){if(M._status===-1){var W=M._result;W=W(),W.then(function(de){(M._status===0||M._status===-1)&&(M._status=1,M._result=de)},function(de){(M._status===0||M._status===-1)&&(M._status=2,M._result=de)}),M._status===-1&&(M._status=0,M._result=W)}if(M._status===1)return M._result.default;throw M._result}var Fe={current:null},ie={transition:null},ge={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:ie,ReactCurrentOwner:me};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Ne.Children={map:yt,forEach:function(M,W,de){yt(M,function(){W.apply(this,arguments)},de)},count:function(M){var W=0;return yt(M,function(){W++}),W},toArray:function(M){return yt(M,function(W){return W})||[]},only:function(M){if(!b(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Ne.Component=A,Ne.Fragment=t,Ne.Profiler=o,Ne.PureComponent=Y,Ne.StrictMode=r,Ne.Suspense=p,Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge,Ne.act=oe,Ne.cloneElement=function(M,W,de){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var Re=P({},M.props),Pe=M.key,De=M.ref,je=M._owner;if(W!=null){if(W.ref!==void 0&&(De=W.ref,je=me.current),W.key!==void 0&&(Pe=""+W.key),M.type&&M.type.defaultProps)var Be=M.type.defaultProps;for(Ge in W)_e.call(W,Ge)&&!x.hasOwnProperty(Ge)&&(Re[Ge]=W[Ge]===void 0&&Be!==void 0?Be[Ge]:W[Ge])}var Ge=arguments.length-2;if(Ge===1)Re.children=de;else if(1<Ge){Be=Array(Ge);for(var At=0;At<Ge;At++)Be[At]=arguments[At+2];Re.children=Be}return{$$typeof:n,type:M.type,key:Pe,ref:De,props:Re,_owner:je}},Ne.createContext=function(M){return M={$$typeof:u,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:a,_context:M},M.Consumer=M},Ne.createElement=S,Ne.createFactory=function(M){var W=S.bind(null,M);return W.type=M,W},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(M){return{$$typeof:d,render:M}},Ne.isValidElement=b,Ne.lazy=function(M){return{$$typeof:v,_payload:{_status:-1,_result:M},_init:qe}},Ne.memo=function(M,W){return{$$typeof:y,type:M,compare:W===void 0?null:W}},Ne.startTransition=function(M){var W=ie.transition;ie.transition={};try{M()}finally{ie.transition=W}},Ne.unstable_act=oe,Ne.useCallback=function(M,W){return Fe.current.useCallback(M,W)},Ne.useContext=function(M){return Fe.current.useContext(M)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(M){return Fe.current.useDeferredValue(M)},Ne.useEffect=function(M,W){return Fe.current.useEffect(M,W)},Ne.useId=function(){return Fe.current.useId()},Ne.useImperativeHandle=function(M,W,de){return Fe.current.useImperativeHandle(M,W,de)},Ne.useInsertionEffect=function(M,W){return Fe.current.useInsertionEffect(M,W)},Ne.useLayoutEffect=function(M,W){return Fe.current.useLayoutEffect(M,W)},Ne.useMemo=function(M,W){return Fe.current.useMemo(M,W)},Ne.useReducer=function(M,W,de){return Fe.current.useReducer(M,W,de)},Ne.useRef=function(M){return Fe.current.useRef(M)},Ne.useState=function(M){return Fe.current.useState(M)},Ne.useSyncExternalStore=function(M,W,de){return Fe.current.useSyncExternalStore(M,W,de)},Ne.useTransition=function(){return Fe.current.useTransition()},Ne.version="18.3.1",Ne}var Ly;function Ap(){return Ly||(Ly=1,wf.exports=cS()),wf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vy;function hS(){if(Vy)return ul;Vy=1;var n=Ap(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,y){var v,E={},I=null,L=null;y!==void 0&&(I=""+y),p.key!==void 0&&(I=""+p.key),p.ref!==void 0&&(L=p.ref);for(v in p)r.call(p,v)&&!a.hasOwnProperty(v)&&(E[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)E[v]===void 0&&(E[v]=p[v]);return{$$typeof:e,type:d,key:I,ref:L,props:E,_owner:o.current}}return ul.Fragment=t,ul.jsx=u,ul.jsxs=u,ul}var My;function dS(){return My||(My=1,vf.exports=hS()),vf.exports}var z=dS(),ne=Ap();const bi=uS(ne),fS=lS({__proto__:null,default:bi},[ne]);var yc={},Ef={exports:{}},ln={},Tf={exports:{}},If={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uy;function pS(){return Uy||(Uy=1,(function(n){function e(ie,ge){var oe=ie.length;ie.push(ge);e:for(;0<oe;){var M=oe-1>>>1,W=ie[M];if(0<o(W,ge))ie[M]=ge,ie[oe]=W,oe=M;else break e}}function t(ie){return ie.length===0?null:ie[0]}function r(ie){if(ie.length===0)return null;var ge=ie[0],oe=ie.pop();if(oe!==ge){ie[0]=oe;e:for(var M=0,W=ie.length,de=W>>>1;M<de;){var Re=2*(M+1)-1,Pe=ie[Re],De=Re+1,je=ie[De];if(0>o(Pe,oe))De<W&&0>o(je,Pe)?(ie[M]=je,ie[De]=oe,M=De):(ie[M]=Pe,ie[Re]=oe,M=Re);else if(De<W&&0>o(je,oe))ie[M]=je,ie[De]=oe,M=De;else break e}}return ge}function o(ie,ge){var oe=ie.sortIndex-ge.sortIndex;return oe!==0?oe:ie.id-ge.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var p=[],y=[],v=1,E=null,I=3,L=!1,P=!1,V=!1,A=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function K(ie){for(var ge=t(y);ge!==null;){if(ge.callback===null)r(y);else if(ge.startTime<=ie)r(y),ge.sortIndex=ge.expirationTime,e(p,ge);else break;ge=t(y)}}function te(ie){if(V=!1,K(ie),!P)if(t(p)!==null)P=!0,qe(_e);else{var ge=t(y);ge!==null&&Fe(te,ge.startTime-ie)}}function _e(ie,ge){P=!1,V&&(V=!1,X(S),S=-1),L=!0;var oe=I;try{for(K(ge),E=t(p);E!==null&&(!(E.expirationTime>ge)||ie&&!D());){var M=E.callback;if(typeof M=="function"){E.callback=null,I=E.priorityLevel;var W=M(E.expirationTime<=ge);ge=n.unstable_now(),typeof W=="function"?E.callback=W:E===t(p)&&r(p),K(ge)}else r(p);E=t(p)}if(E!==null)var de=!0;else{var Re=t(y);Re!==null&&Fe(te,Re.startTime-ge),de=!1}return de}finally{E=null,I=oe,L=!1}}var me=!1,x=null,S=-1,k=5,b=-1;function D(){return!(n.unstable_now()-b<k)}function U(){if(x!==null){var ie=n.unstable_now();b=ie;var ge=!0;try{ge=x(!0,ie)}finally{ge?C():(me=!1,x=null)}}else me=!1}var C;if(typeof Y=="function")C=function(){Y(U)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,yt=$e.port2;$e.port1.onmessage=U,C=function(){yt.postMessage(null)}}else C=function(){A(U,0)};function qe(ie){x=ie,me||(me=!0,C())}function Fe(ie,ge){S=A(function(){ie(n.unstable_now())},ge)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ie){ie.callback=null},n.unstable_continueExecution=function(){P||L||(P=!0,qe(_e))},n.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<ie?Math.floor(1e3/ie):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ie){switch(I){case 1:case 2:case 3:var ge=3;break;default:ge=I}var oe=I;I=ge;try{return ie()}finally{I=oe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ie,ge){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var oe=I;I=ie;try{return ge()}finally{I=oe}},n.unstable_scheduleCallback=function(ie,ge,oe){var M=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?M+oe:M):oe=M,ie){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=oe+W,ie={id:v++,callback:ge,priorityLevel:ie,startTime:oe,expirationTime:W,sortIndex:-1},oe>M?(ie.sortIndex=oe,e(y,ie),t(p)===null&&ie===t(y)&&(V?(X(S),S=-1):V=!0,Fe(te,oe-M))):(ie.sortIndex=W,e(p,ie),P||L||(P=!0,qe(_e))),ie},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(ie){var ge=I;return function(){var oe=I;I=ge;try{return ie.apply(this,arguments)}finally{I=oe}}}})(If)),If}var Fy;function mS(){return Fy||(Fy=1,Tf.exports=pS()),Tf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jy;function gS(){if(jy)return ln;jy=1;var n=Ap(),e=mS();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},E={};function I(i){return p.call(E,i)?!0:p.call(v,i)?!1:y.test(i)?E[i]=!0:(v[i]=!0,!1)}function L(i,s,l,h){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function P(i,s,l,h){if(s===null||typeof s>"u"||L(i,s,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function V(i,s,l,h,f,g,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=f,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=g,this.removeEmptyString=w}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){A[i]=new V(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];A[s]=new V(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){A[i]=new V(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){A[i]=new V(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){A[i]=new V(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){A[i]=new V(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){A[i]=new V(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){A[i]=new V(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){A[i]=new V(i,5,!1,i.toLowerCase(),null,!1,!1)});var X=/[\-:]([a-z])/g;function Y(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(X,Y);A[s]=new V(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(X,Y);A[s]=new V(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(X,Y);A[s]=new V(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){A[i]=new V(i,1,!1,i.toLowerCase(),null,!1,!1)}),A.xlinkHref=new V("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){A[i]=new V(i,1,!1,i.toLowerCase(),null,!0,!0)});function K(i,s,l,h){var f=A.hasOwnProperty(s)?A[s]:null;(f!==null?f.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(P(s,l,f,h)&&(l=null),h||f===null?I(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):f.mustUseProperty?i[f.propertyName]=l===null?f.type===3?!1:"":l:(s=f.attributeName,h=f.attributeNamespace,l===null?i.removeAttribute(s):(f=f.type,l=f===3||f===4&&l===!0?"":""+l,h?i.setAttributeNS(h,s,l):i.setAttribute(s,l))))}var te=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_e=Symbol.for("react.element"),me=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),yt=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),Fe=Symbol.for("react.offscreen"),ie=Symbol.iterator;function ge(i){return i===null||typeof i!="object"?null:(i=ie&&i[ie]||i["@@iterator"],typeof i=="function"?i:null)}var oe=Object.assign,M;function W(i){if(M===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);M=s&&s[1]||""}return`
`+M+i}var de=!1;function Re(i,s){if(!i||de)return"";de=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch($){var h=$}Reflect.construct(i,[],s)}else{try{s.call()}catch($){h=$}i.call(s.prototype)}else{try{throw Error()}catch($){h=$}i()}}catch($){if($&&h&&typeof $.stack=="string"){for(var f=$.stack.split(`
`),g=h.stack.split(`
`),w=f.length-1,R=g.length-1;1<=w&&0<=R&&f[w]!==g[R];)R--;for(;1<=w&&0<=R;w--,R--)if(f[w]!==g[R]){if(w!==1||R!==1)do if(w--,R--,0>R||f[w]!==g[R]){var N=`
`+f[w].replace(" at new "," at ");return i.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",i.displayName)),N}while(1<=w&&0<=R);break}}}finally{de=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?W(i):""}function Pe(i){switch(i.tag){case 5:return W(i.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return i=Re(i.type,!1),i;case 11:return i=Re(i.type.render,!1),i;case 1:return i=Re(i.type,!0),i;default:return""}}function De(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case x:return"Fragment";case me:return"Portal";case k:return"Profiler";case S:return"StrictMode";case C:return"Suspense";case $e:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case D:return(i.displayName||"Context")+".Consumer";case b:return(i._context.displayName||"Context")+".Provider";case U:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case yt:return s=i.displayName||null,s!==null?s:De(i.type)||"Memo";case qe:s=i._payload,i=i._init;try{return De(i(s))}catch{}}return null}function je(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Be(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ge(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function At(i){var s=Ge(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),h=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,g=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return f.call(this)},set:function(w){h=""+w,g.call(this,w)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Cr(i){i._valueTracker||(i._valueTracker=At(i))}function Gs(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),h="";return i&&(h=Ge(i)?i.checked?"true":"false":i.value),i=h,i!==l?(s.setValue(i),!0):!1}function Zr(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Ji(i,s){var l=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Ks(i,s){var l=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;l=Be(s.value!=null?s.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ma(i,s){s=s.checked,s!=null&&K(i,"checked",s,!1)}function ga(i,s){ma(i,s);var l=Be(s.value),h=s.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Qs(i,s.type,l):s.hasOwnProperty("defaultValue")&&Qs(i,s.type,Be(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function nu(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Qs(i,s,l){(s!=="number"||Zr(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Pr=Array.isArray;function kr(i,s,l,h){if(i=i.options,s){s={};for(var f=0;f<l.length;f++)s["$"+l[f]]=!0;for(l=0;l<i.length;l++)f=s.hasOwnProperty("$"+i[l].value),i[l].selected!==f&&(i[l].selected=f),f&&h&&(i[l].defaultSelected=!0)}else{for(l=""+Be(l),s=null,f=0;f<i.length;f++){if(i[f].value===l){i[f].selected=!0,h&&(i[f].defaultSelected=!0);return}s!==null||i[f].disabled||(s=i[f])}s!==null&&(s.selected=!0)}}function ya(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Js(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Pr(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:Be(l)}}function Xs(i,s){var l=Be(s.value),h=Be(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function _a(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function _t(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vt(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?_t(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Nr,va=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,h,f){MSApp.execUnsafeLocalFunction(function(){return i(s,l,h,f)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Nr=Nr||document.createElement("div"),Nr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Nr.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function ei(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yi=["Webkit","ms","Moz","O"];Object.keys(Xi).forEach(function(i){Yi.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Xi[s]=Xi[i]})});function wa(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Xi.hasOwnProperty(i)&&Xi[i]?(""+s).trim():s+"px"}function Ea(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var h=l.indexOf("--")===0,f=wa(l,s[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,f):i[l]=f}}var Ta=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ia(i,s){if(s){if(Ta[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Sa(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zi=null;function Ys(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Zs=null,Sn=null,ir=null;function eo(i){if(i=Ka(i)){if(typeof Zs!="function")throw Error(t(280));var s=i.stateNode;s&&(s=bu(s),Zs(i.stateNode,i.type,s))}}function sr(i){Sn?ir?ir.push(i):ir=[i]:Sn=i}function Ra(){if(Sn){var i=Sn,s=ir;if(ir=Sn=null,eo(i),s)for(i=0;i<s.length;i++)eo(s[i])}}function es(i,s){return i(s)}function Aa(){}var xr=!1;function Ca(i,s,l){if(xr)return i(s,l);xr=!0;try{return es(i,s,l)}finally{xr=!1,(Sn!==null||ir!==null)&&(Aa(),Ra())}}function ut(i,s){var l=i.stateNode;if(l===null)return null;var h=bu(l);if(h===null)return null;l=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var to=!1;if(d)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){to=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{to=!1}function ts(i,s,l,h,f,g,w,R,N){var $=Array.prototype.slice.call(arguments,3);try{s.apply(l,$)}catch(Z){this.onError(Z)}}var ns=!1,no=null,Fn=!1,Pa=null,Wh={onError:function(i){ns=!0,no=i}};function ro(i,s,l,h,f,g,w,R,N){ns=!1,no=null,ts.apply(Wh,arguments)}function ru(i,s,l,h,f,g,w,R,N){if(ro.apply(this,arguments),ns){if(ns){var $=no;ns=!1,no=null}else throw Error(t(198));Fn||(Fn=!0,Pa=$)}}function jn(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function rs(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Bn(i){if(jn(i)!==i)throw Error(t(188))}function iu(i){var s=i.alternate;if(!s){if(s=jn(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,h=s;;){var f=l.return;if(f===null)break;var g=f.alternate;if(g===null){if(h=f.return,h!==null){l=h;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===l)return Bn(f),i;if(g===h)return Bn(f),s;g=g.sibling}throw Error(t(188))}if(l.return!==h.return)l=f,h=g;else{for(var w=!1,R=f.child;R;){if(R===l){w=!0,l=f,h=g;break}if(R===h){w=!0,h=f,l=g;break}R=R.sibling}if(!w){for(R=g.child;R;){if(R===l){w=!0,l=g,h=f;break}if(R===h){w=!0,h=g,l=f;break}R=R.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function ka(i){return i=iu(i),i!==null?io(i):null}function io(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=io(i);if(s!==null)return s;i=i.sibling}return null}var so=e.unstable_scheduleCallback,Na=e.unstable_cancelCallback,su=e.unstable_shouldYield,Gh=e.unstable_requestPaint,Ke=e.unstable_now,ou=e.unstable_getCurrentPriorityLevel,is=e.unstable_ImmediatePriority,ti=e.unstable_UserBlockingPriority,Rn=e.unstable_NormalPriority,xa=e.unstable_LowPriority,au=e.unstable_IdlePriority,ss=null,mn=null;function lu(i){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(ss,i,void 0,(i.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:cu,ba=Math.log,uu=Math.LN2;function cu(i){return i>>>=0,i===0?32:31-(ba(i)/uu|0)|0}var oo=64,ao=4194304;function ni(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function os(i,s){var l=i.pendingLanes;if(l===0)return 0;var h=0,f=i.suspendedLanes,g=i.pingedLanes,w=l&268435455;if(w!==0){var R=w&~f;R!==0?h=ni(R):(g&=w,g!==0&&(h=ni(g)))}else w=l&~f,w!==0?h=ni(w):g!==0&&(h=ni(g));if(h===0)return 0;if(s!==0&&s!==h&&(s&f)===0&&(f=h&-h,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if((h&4)!==0&&(h|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=h;0<s;)l=31-Qt(s),f=1<<l,h|=i[l],s&=~f;return h}function Kh(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function br(i,s){for(var l=i.suspendedLanes,h=i.pingedLanes,f=i.expirationTimes,g=i.pendingLanes;0<g;){var w=31-Qt(g),R=1<<w,N=f[w];N===-1?((R&l)===0||(R&h)!==0)&&(f[w]=Kh(R,s)):N<=s&&(i.expiredLanes|=R),g&=~R}}function gn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function as(){var i=oo;return oo<<=1,(oo&4194240)===0&&(oo=64),i}function ri(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function ii(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Qt(s),i[s]=l}function We(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var f=31-Qt(l),g=1<<f;s[f]=0,h[f]=-1,i[f]=-1,l&=~g}}function si(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var h=31-Qt(l),f=1<<h;f&s|i[h]&s&&(i[h]|=s),l&=~f}}var Oe=0;function oi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var hu,lo,du,fu,pu,Oa=!1,or=[],bt=null,zn=null,$n=null,ai=new Map,An=new Map,ar=[],Qh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mu(i,s){switch(i){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":ai.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":An.delete(s.pointerId)}}function en(i,s,l,h,f,g){return i===null||i.nativeEvent!==g?(i={blockedOn:s,domEventName:l,eventSystemFlags:h,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Ka(s),s!==null&&lo(s)),i):(i.eventSystemFlags|=h,s=i.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),i)}function Jh(i,s,l,h,f){switch(s){case"focusin":return bt=en(bt,i,s,l,h,f),!0;case"dragenter":return zn=en(zn,i,s,l,h,f),!0;case"mouseover":return $n=en($n,i,s,l,h,f),!0;case"pointerover":var g=f.pointerId;return ai.set(g,en(ai.get(g)||null,i,s,l,h,f)),!0;case"gotpointercapture":return g=f.pointerId,An.set(g,en(An.get(g)||null,i,s,l,h,f)),!0}return!1}function gu(i){var s=ds(i.target);if(s!==null){var l=jn(s);if(l!==null){if(s=l.tag,s===13){if(s=rs(l),s!==null){i.blockedOn=s,pu(i.priority,function(){du(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Or(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=uo(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);Zi=h,l.target.dispatchEvent(h),Zi=null}else return s=Ka(l),s!==null&&lo(s),i.blockedOn=l,!1;s.shift()}return!0}function ls(i,s,l){Or(i)&&l.delete(s)}function yu(){Oa=!1,bt!==null&&Or(bt)&&(bt=null),zn!==null&&Or(zn)&&(zn=null),$n!==null&&Or($n)&&($n=null),ai.forEach(ls),An.forEach(ls)}function Hn(i,s){i.blockedOn===s&&(i.blockedOn=null,Oa||(Oa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,yu)))}function qn(i){function s(f){return Hn(f,i)}if(0<or.length){Hn(or[0],i);for(var l=1;l<or.length;l++){var h=or[l];h.blockedOn===i&&(h.blockedOn=null)}}for(bt!==null&&Hn(bt,i),zn!==null&&Hn(zn,i),$n!==null&&Hn($n,i),ai.forEach(s),An.forEach(s),l=0;l<ar.length;l++)h=ar[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<ar.length&&(l=ar[0],l.blockedOn===null);)gu(l),l.blockedOn===null&&ar.shift()}var Dr=te.ReactCurrentBatchConfig,li=!0;function tt(i,s,l,h){var f=Oe,g=Dr.transition;Dr.transition=null;try{Oe=1,Da(i,s,l,h)}finally{Oe=f,Dr.transition=g}}function Xh(i,s,l,h){var f=Oe,g=Dr.transition;Dr.transition=null;try{Oe=4,Da(i,s,l,h)}finally{Oe=f,Dr.transition=g}}function Da(i,s,l,h){if(li){var f=uo(i,s,l,h);if(f===null)ld(i,s,h,us,l),mu(i,h);else if(Jh(f,i,s,l,h))h.stopPropagation();else if(mu(i,h),s&4&&-1<Qh.indexOf(i)){for(;f!==null;){var g=Ka(f);if(g!==null&&hu(g),g=uo(i,s,l,h),g===null&&ld(i,s,h,us,l),g===f)break;f=g}f!==null&&h.stopPropagation()}else ld(i,s,h,null,l)}}var us=null;function uo(i,s,l,h){if(us=null,i=Ys(h),i=ds(i),i!==null)if(s=jn(i),s===null)i=null;else if(l=s.tag,l===13){if(i=rs(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return us=i,null}function La(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ou()){case is:return 1;case ti:return 4;case Rn:case xa:return 16;case au:return 536870912;default:return 16}default:return 16}}var yn=null,co=null,tn=null;function Va(){if(tn)return tn;var i,s=co,l=s.length,h,f="value"in yn?yn.value:yn.textContent,g=f.length;for(i=0;i<l&&s[i]===f[i];i++);var w=l-i;for(h=1;h<=w&&s[l-h]===f[g-h];h++);return tn=f.slice(i,1<h?1-h:void 0)}function ho(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function lr(){return!0}function Ma(){return!1}function Ot(i){function s(l,h,f,g,w){this._reactName=l,this._targetInst=f,this.type=h,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var R in i)i.hasOwnProperty(R)&&(l=i[R],this[R]=l?l(g):g[R]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?lr:Ma,this.isPropagationStopped=Ma,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=lr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=lr)},persist:function(){},isPersistent:lr}),s}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fo=Ot(Wn),ur=oe({},Wn,{view:0,detail:0}),Yh=Ot(ur),po,Lr,ui,cs=oe({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==ui&&(ui&&i.type==="mousemove"?(po=i.screenX-ui.screenX,Lr=i.screenY-ui.screenY):Lr=po=0,ui=i),po)},movementY:function(i){return"movementY"in i?i.movementY:Lr}}),mo=Ot(cs),Ua=oe({},cs,{dataTransfer:0}),_u=Ot(Ua),go=oe({},ur,{relatedTarget:0}),yo=Ot(go),vu=oe({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Vr=Ot(vu),wu=oe({},Wn,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Eu=Ot(wu),Tu=oe({},Wn,{data:0}),Fa=Ot(Tu),_o={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Su(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=Iu[i])?!!s[i]:!1}function cr(){return Su}var c=oe({},ur,{key:function(i){if(i.key){var s=_o[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=ho(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Jt[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cr,charCode:function(i){return i.type==="keypress"?ho(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ho(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),m=Ot(c),_=oe({},cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T=Ot(_),F=oe({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cr}),q=Ot(F),se=oe({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),He=Ot(se),wt=oe({},cs,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Le=Ot(wt),Ct=[9,13,27,32],ft=d&&"CompositionEvent"in window,Cn=null;d&&"documentMode"in document&&(Cn=document.documentMode);var _n=d&&"TextEvent"in window&&!Cn,hs=d&&(!ft||Cn&&8<Cn&&11>=Cn),vo=" ",Pm=!1;function km(i,s){switch(i){case"keyup":return Ct.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var wo=!1;function sI(i,s){switch(i){case"compositionend":return Nm(s);case"keypress":return s.which!==32?null:(Pm=!0,vo);case"textInput":return i=s.data,i===vo&&Pm?null:i;default:return null}}function oI(i,s){if(wo)return i==="compositionend"||!ft&&km(i,s)?(i=Va(),tn=co=yn=null,wo=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return hs&&s.locale!=="ko"?null:s.data;default:return null}}var aI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xm(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!aI[i.type]:s==="textarea"}function bm(i,s,l,h){sr(h),s=ku(s,"onChange"),0<s.length&&(l=new fo("onChange","change",null,l,h),i.push({event:l,listeners:s}))}var ja=null,Ba=null;function lI(i){Jm(i,0)}function Ru(i){var s=Ro(i);if(Gs(s))return i}function uI(i,s){if(i==="change")return s}var Om=!1;if(d){var Zh;if(d){var ed="oninput"in document;if(!ed){var Dm=document.createElement("div");Dm.setAttribute("oninput","return;"),ed=typeof Dm.oninput=="function"}Zh=ed}else Zh=!1;Om=Zh&&(!document.documentMode||9<document.documentMode)}function Lm(){ja&&(ja.detachEvent("onpropertychange",Vm),Ba=ja=null)}function Vm(i){if(i.propertyName==="value"&&Ru(Ba)){var s=[];bm(s,Ba,i,Ys(i)),Ca(lI,s)}}function cI(i,s,l){i==="focusin"?(Lm(),ja=s,Ba=l,ja.attachEvent("onpropertychange",Vm)):i==="focusout"&&Lm()}function hI(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Ru(Ba)}function dI(i,s){if(i==="click")return Ru(s)}function fI(i,s){if(i==="input"||i==="change")return Ru(s)}function pI(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Gn=typeof Object.is=="function"?Object.is:pI;function za(i,s){if(Gn(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),h=Object.keys(s);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var f=l[h];if(!p.call(s,f)||!Gn(i[f],s[f]))return!1}return!0}function Mm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Um(i,s){var l=Mm(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=s&&h>=s)return{node:l,offset:s-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Mm(l)}}function Fm(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Fm(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function jm(){for(var i=window,s=Zr();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=Zr(i.document)}return s}function td(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function mI(i){var s=jm(),l=i.focusedElem,h=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&Fm(l.ownerDocument.documentElement,l)){if(h!==null&&td(l)){if(s=h.start,i=h.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var f=l.textContent.length,g=Math.min(h.start,f);h=h.end===void 0?g:Math.min(h.end,f),!i.extend&&g>h&&(f=h,h=g,g=f),f=Um(l,g);var w=Um(l,h);f&&w&&(i.rangeCount!==1||i.anchorNode!==f.node||i.anchorOffset!==f.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),i.removeAllRanges(),g>h?(i.addRange(s),i.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var gI=d&&"documentMode"in document&&11>=document.documentMode,Eo=null,nd=null,$a=null,rd=!1;function Bm(i,s,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;rd||Eo==null||Eo!==Zr(h)||(h=Eo,"selectionStart"in h&&td(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),$a&&za($a,h)||($a=h,h=ku(nd,"onSelect"),0<h.length&&(s=new fo("onSelect","select",null,s,l),i.push({event:s,listeners:h}),s.target=Eo)))}function Au(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var To={animationend:Au("Animation","AnimationEnd"),animationiteration:Au("Animation","AnimationIteration"),animationstart:Au("Animation","AnimationStart"),transitionend:Au("Transition","TransitionEnd")},id={},zm={};d&&(zm=document.createElement("div").style,"AnimationEvent"in window||(delete To.animationend.animation,delete To.animationiteration.animation,delete To.animationstart.animation),"TransitionEvent"in window||delete To.transitionend.transition);function Cu(i){if(id[i])return id[i];if(!To[i])return i;var s=To[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in zm)return id[i]=s[l];return i}var $m=Cu("animationend"),Hm=Cu("animationiteration"),qm=Cu("animationstart"),Wm=Cu("transitionend"),Gm=new Map,Km="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ci(i,s){Gm.set(i,s),a(s,[i])}for(var sd=0;sd<Km.length;sd++){var od=Km[sd],yI=od.toLowerCase(),_I=od[0].toUpperCase()+od.slice(1);ci(yI,"on"+_I)}ci($m,"onAnimationEnd"),ci(Hm,"onAnimationIteration"),ci(qm,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(Wm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ha));function Qm(i,s,l){var h=i.type||"unknown-event";i.currentTarget=l,ru(h,s,void 0,i),i.currentTarget=null}function Jm(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],f=h.event;h=h.listeners;e:{var g=void 0;if(s)for(var w=h.length-1;0<=w;w--){var R=h[w],N=R.instance,$=R.currentTarget;if(R=R.listener,N!==g&&f.isPropagationStopped())break e;Qm(f,R,$),g=N}else for(w=0;w<h.length;w++){if(R=h[w],N=R.instance,$=R.currentTarget,R=R.listener,N!==g&&f.isPropagationStopped())break e;Qm(f,R,$),g=N}}}if(Fn)throw i=Pa,Fn=!1,Pa=null,i}function Je(i,s){var l=s[pd];l===void 0&&(l=s[pd]=new Set);var h=i+"__bubble";l.has(h)||(Xm(s,i,2,!1),l.add(h))}function ad(i,s,l){var h=0;s&&(h|=4),Xm(l,i,h,s)}var Pu="_reactListening"+Math.random().toString(36).slice(2);function qa(i){if(!i[Pu]){i[Pu]=!0,r.forEach(function(l){l!=="selectionchange"&&(vI.has(l)||ad(l,!1,i),ad(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Pu]||(s[Pu]=!0,ad("selectionchange",!1,s))}}function Xm(i,s,l,h){switch(La(s)){case 1:var f=tt;break;case 4:f=Xh;break;default:f=Da}l=f.bind(null,s,l,i),f=void 0,!to||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),h?f!==void 0?i.addEventListener(s,l,{capture:!0,passive:f}):i.addEventListener(s,l,!0):f!==void 0?i.addEventListener(s,l,{passive:f}):i.addEventListener(s,l,!1)}function ld(i,s,l,h,f){var g=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var R=h.stateNode.containerInfo;if(R===f||R.nodeType===8&&R.parentNode===f)break;if(w===4)for(w=h.return;w!==null;){var N=w.tag;if((N===3||N===4)&&(N=w.stateNode.containerInfo,N===f||N.nodeType===8&&N.parentNode===f))return;w=w.return}for(;R!==null;){if(w=ds(R),w===null)return;if(N=w.tag,N===5||N===6){h=g=w;continue e}R=R.parentNode}}h=h.return}Ca(function(){var $=g,Z=Ys(l),ee=[];e:{var Q=Gm.get(i);if(Q!==void 0){var ae=fo,ce=i;switch(i){case"keypress":if(ho(l)===0)break e;case"keydown":case"keyup":ae=m;break;case"focusin":ce="focus",ae=yo;break;case"focusout":ce="blur",ae=yo;break;case"beforeblur":case"afterblur":ae=yo;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=mo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=_u;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=q;break;case $m:case Hm:case qm:ae=Vr;break;case Wm:ae=He;break;case"scroll":ae=Yh;break;case"wheel":ae=Le;break;case"copy":case"cut":case"paste":ae=Eu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=T}var he=(s&4)!==0,ct=!he&&i==="scroll",j=he?Q!==null?Q+"Capture":null:Q;he=[];for(var O=$,B;O!==null;){B=O;var re=B.stateNode;if(B.tag===5&&re!==null&&(B=re,j!==null&&(re=ut(O,j),re!=null&&he.push(Wa(O,re,B)))),ct)break;O=O.return}0<he.length&&(Q=new ae(Q,ce,null,l,Z),ee.push({event:Q,listeners:he}))}}if((s&7)===0){e:{if(Q=i==="mouseover"||i==="pointerover",ae=i==="mouseout"||i==="pointerout",Q&&l!==Zi&&(ce=l.relatedTarget||l.fromElement)&&(ds(ce)||ce[Mr]))break e;if((ae||Q)&&(Q=Z.window===Z?Z:(Q=Z.ownerDocument)?Q.defaultView||Q.parentWindow:window,ae?(ce=l.relatedTarget||l.toElement,ae=$,ce=ce?ds(ce):null,ce!==null&&(ct=jn(ce),ce!==ct||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(ae=null,ce=$),ae!==ce)){if(he=mo,re="onMouseLeave",j="onMouseEnter",O="mouse",(i==="pointerout"||i==="pointerover")&&(he=T,re="onPointerLeave",j="onPointerEnter",O="pointer"),ct=ae==null?Q:Ro(ae),B=ce==null?Q:Ro(ce),Q=new he(re,O+"leave",ae,l,Z),Q.target=ct,Q.relatedTarget=B,re=null,ds(Z)===$&&(he=new he(j,O+"enter",ce,l,Z),he.target=B,he.relatedTarget=ct,re=he),ct=re,ae&&ce)t:{for(he=ae,j=ce,O=0,B=he;B;B=Io(B))O++;for(B=0,re=j;re;re=Io(re))B++;for(;0<O-B;)he=Io(he),O--;for(;0<B-O;)j=Io(j),B--;for(;O--;){if(he===j||j!==null&&he===j.alternate)break t;he=Io(he),j=Io(j)}he=null}else he=null;ae!==null&&Ym(ee,Q,ae,he,!1),ce!==null&&ct!==null&&Ym(ee,ct,ce,he,!0)}}e:{if(Q=$?Ro($):window,ae=Q.nodeName&&Q.nodeName.toLowerCase(),ae==="select"||ae==="input"&&Q.type==="file")var fe=uI;else if(xm(Q))if(Om)fe=fI;else{fe=hI;var ve=cI}else(ae=Q.nodeName)&&ae.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(fe=dI);if(fe&&(fe=fe(i,$))){bm(ee,fe,l,Z);break e}ve&&ve(i,Q,$),i==="focusout"&&(ve=Q._wrapperState)&&ve.controlled&&Q.type==="number"&&Qs(Q,"number",Q.value)}switch(ve=$?Ro($):window,i){case"focusin":(xm(ve)||ve.contentEditable==="true")&&(Eo=ve,nd=$,$a=null);break;case"focusout":$a=nd=Eo=null;break;case"mousedown":rd=!0;break;case"contextmenu":case"mouseup":case"dragend":rd=!1,Bm(ee,l,Z);break;case"selectionchange":if(gI)break;case"keydown":case"keyup":Bm(ee,l,Z)}var we;if(ft)e:{switch(i){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else wo?km(i,l)&&(Te="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Te="onCompositionStart");Te&&(hs&&l.locale!=="ko"&&(wo||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&wo&&(we=Va()):(yn=Z,co="value"in yn?yn.value:yn.textContent,wo=!0)),ve=ku($,Te),0<ve.length&&(Te=new Fa(Te,i,null,l,Z),ee.push({event:Te,listeners:ve}),we?Te.data=we:(we=Nm(l),we!==null&&(Te.data=we)))),(we=_n?sI(i,l):oI(i,l))&&($=ku($,"onBeforeInput"),0<$.length&&(Z=new Fa("onBeforeInput","beforeinput",null,l,Z),ee.push({event:Z,listeners:$}),Z.data=we))}Jm(ee,s)})}function Wa(i,s,l){return{instance:i,listener:s,currentTarget:l}}function ku(i,s){for(var l=s+"Capture",h=[];i!==null;){var f=i,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=ut(i,l),g!=null&&h.unshift(Wa(i,g,f)),g=ut(i,s),g!=null&&h.push(Wa(i,g,f))),i=i.return}return h}function Io(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Ym(i,s,l,h,f){for(var g=s._reactName,w=[];l!==null&&l!==h;){var R=l,N=R.alternate,$=R.stateNode;if(N!==null&&N===h)break;R.tag===5&&$!==null&&(R=$,f?(N=ut(l,g),N!=null&&w.unshift(Wa(l,N,R))):f||(N=ut(l,g),N!=null&&w.push(Wa(l,N,R)))),l=l.return}w.length!==0&&i.push({event:s,listeners:w})}var wI=/\r\n?/g,EI=/\u0000|\uFFFD/g;function Zm(i){return(typeof i=="string"?i:""+i).replace(wI,`
`).replace(EI,"")}function Nu(i,s,l){if(s=Zm(s),Zm(i)!==s&&l)throw Error(t(425))}function xu(){}var ud=null,cd=null;function hd(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var dd=typeof setTimeout=="function"?setTimeout:void 0,TI=typeof clearTimeout=="function"?clearTimeout:void 0,eg=typeof Promise=="function"?Promise:void 0,II=typeof queueMicrotask=="function"?queueMicrotask:typeof eg<"u"?function(i){return eg.resolve(null).then(i).catch(SI)}:dd;function SI(i){setTimeout(function(){throw i})}function fd(i,s){var l=s,h=0;do{var f=l.nextSibling;if(i.removeChild(l),f&&f.nodeType===8)if(l=f.data,l==="/$"){if(h===0){i.removeChild(f),qn(s);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=f}while(l);qn(s)}function hi(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function tg(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var So=Math.random().toString(36).slice(2),hr="__reactFiber$"+So,Ga="__reactProps$"+So,Mr="__reactContainer$"+So,pd="__reactEvents$"+So,RI="__reactListeners$"+So,AI="__reactHandles$"+So;function ds(i){var s=i[hr];if(s)return s;for(var l=i.parentNode;l;){if(s=l[Mr]||l[hr]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=tg(i);i!==null;){if(l=i[hr])return l;i=tg(i)}return s}i=l,l=i.parentNode}return null}function Ka(i){return i=i[hr]||i[Mr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Ro(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function bu(i){return i[Ga]||null}var md=[],Ao=-1;function di(i){return{current:i}}function Xe(i){0>Ao||(i.current=md[Ao],md[Ao]=null,Ao--)}function Qe(i,s){Ao++,md[Ao]=i.current,i.current=s}var fi={},jt=di(fi),nn=di(!1),fs=fi;function Co(i,s){var l=i.type.contextTypes;if(!l)return fi;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in l)f[g]=s[g];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=f),f}function rn(i){return i=i.childContextTypes,i!=null}function Ou(){Xe(nn),Xe(jt)}function ng(i,s,l){if(jt.current!==fi)throw Error(t(168));Qe(jt,s),Qe(nn,l)}function rg(i,s,l){var h=i.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var f in h)if(!(f in s))throw Error(t(108,je(i)||"Unknown",f));return oe({},l,h)}function Du(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||fi,fs=jt.current,Qe(jt,i),Qe(nn,nn.current),!0}function ig(i,s,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=rg(i,s,fs),h.__reactInternalMemoizedMergedChildContext=i,Xe(nn),Xe(jt),Qe(jt,i)):Xe(nn),Qe(nn,l)}var Ur=null,Lu=!1,gd=!1;function sg(i){Ur===null?Ur=[i]:Ur.push(i)}function CI(i){Lu=!0,sg(i)}function pi(){if(!gd&&Ur!==null){gd=!0;var i=0,s=Oe;try{var l=Ur;for(Oe=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}Ur=null,Lu=!1}catch(f){throw Ur!==null&&(Ur=Ur.slice(i+1)),so(is,pi),f}finally{Oe=s,gd=!1}}return null}var Po=[],ko=0,Vu=null,Mu=0,Pn=[],kn=0,ps=null,Fr=1,jr="";function ms(i,s){Po[ko++]=Mu,Po[ko++]=Vu,Vu=i,Mu=s}function og(i,s,l){Pn[kn++]=Fr,Pn[kn++]=jr,Pn[kn++]=ps,ps=i;var h=Fr;i=jr;var f=32-Qt(h)-1;h&=~(1<<f),l+=1;var g=32-Qt(s)+f;if(30<g){var w=f-f%5;g=(h&(1<<w)-1).toString(32),h>>=w,f-=w,Fr=1<<32-Qt(s)+f|l<<f|h,jr=g+i}else Fr=1<<g|l<<f|h,jr=i}function yd(i){i.return!==null&&(ms(i,1),og(i,1,0))}function _d(i){for(;i===Vu;)Vu=Po[--ko],Po[ko]=null,Mu=Po[--ko],Po[ko]=null;for(;i===ps;)ps=Pn[--kn],Pn[kn]=null,jr=Pn[--kn],Pn[kn]=null,Fr=Pn[--kn],Pn[kn]=null}var vn=null,wn=null,nt=!1,Kn=null;function ag(i,s){var l=On(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function lg(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,vn=i,wn=hi(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,vn=i,wn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ps!==null?{id:Fr,overflow:jr}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=On(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,vn=i,wn=null,!0):!1;default:return!1}}function vd(i){return(i.mode&1)!==0&&(i.flags&128)===0}function wd(i){if(nt){var s=wn;if(s){var l=s;if(!lg(i,s)){if(vd(i))throw Error(t(418));s=hi(l.nextSibling);var h=vn;s&&lg(i,s)?ag(h,l):(i.flags=i.flags&-4097|2,nt=!1,vn=i)}}else{if(vd(i))throw Error(t(418));i.flags=i.flags&-4097|2,nt=!1,vn=i}}}function ug(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;vn=i}function Uu(i){if(i!==vn)return!1;if(!nt)return ug(i),nt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!hd(i.type,i.memoizedProps)),s&&(s=wn)){if(vd(i))throw cg(),Error(t(418));for(;s;)ag(i,s),s=hi(s.nextSibling)}if(ug(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){wn=hi(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}wn=null}}else wn=vn?hi(i.stateNode.nextSibling):null;return!0}function cg(){for(var i=wn;i;)i=hi(i.nextSibling)}function No(){wn=vn=null,nt=!1}function Ed(i){Kn===null?Kn=[i]:Kn.push(i)}var PI=te.ReactCurrentBatchConfig;function Qa(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var f=h,g=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(w){var R=f.refs;w===null?delete R[g]:R[g]=w},s._stringRef=g,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Fu(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function hg(i){var s=i._init;return s(i._payload)}function dg(i){function s(j,O){if(i){var B=j.deletions;B===null?(j.deletions=[O],j.flags|=16):B.push(O)}}function l(j,O){if(!i)return null;for(;O!==null;)s(j,O),O=O.sibling;return null}function h(j,O){for(j=new Map;O!==null;)O.key!==null?j.set(O.key,O):j.set(O.index,O),O=O.sibling;return j}function f(j,O){return j=Ti(j,O),j.index=0,j.sibling=null,j}function g(j,O,B){return j.index=B,i?(B=j.alternate,B!==null?(B=B.index,B<O?(j.flags|=2,O):B):(j.flags|=2,O)):(j.flags|=1048576,O)}function w(j){return i&&j.alternate===null&&(j.flags|=2),j}function R(j,O,B,re){return O===null||O.tag!==6?(O=ff(B,j.mode,re),O.return=j,O):(O=f(O,B),O.return=j,O)}function N(j,O,B,re){var fe=B.type;return fe===x?Z(j,O,B.props.children,re,B.key):O!==null&&(O.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===qe&&hg(fe)===O.type)?(re=f(O,B.props),re.ref=Qa(j,O,B),re.return=j,re):(re=uc(B.type,B.key,B.props,null,j.mode,re),re.ref=Qa(j,O,B),re.return=j,re)}function $(j,O,B,re){return O===null||O.tag!==4||O.stateNode.containerInfo!==B.containerInfo||O.stateNode.implementation!==B.implementation?(O=pf(B,j.mode,re),O.return=j,O):(O=f(O,B.children||[]),O.return=j,O)}function Z(j,O,B,re,fe){return O===null||O.tag!==7?(O=Is(B,j.mode,re,fe),O.return=j,O):(O=f(O,B),O.return=j,O)}function ee(j,O,B){if(typeof O=="string"&&O!==""||typeof O=="number")return O=ff(""+O,j.mode,B),O.return=j,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case _e:return B=uc(O.type,O.key,O.props,null,j.mode,B),B.ref=Qa(j,null,O),B.return=j,B;case me:return O=pf(O,j.mode,B),O.return=j,O;case qe:var re=O._init;return ee(j,re(O._payload),B)}if(Pr(O)||ge(O))return O=Is(O,j.mode,B,null),O.return=j,O;Fu(j,O)}return null}function Q(j,O,B,re){var fe=O!==null?O.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return fe!==null?null:R(j,O,""+B,re);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case _e:return B.key===fe?N(j,O,B,re):null;case me:return B.key===fe?$(j,O,B,re):null;case qe:return fe=B._init,Q(j,O,fe(B._payload),re)}if(Pr(B)||ge(B))return fe!==null?null:Z(j,O,B,re,null);Fu(j,B)}return null}function ae(j,O,B,re,fe){if(typeof re=="string"&&re!==""||typeof re=="number")return j=j.get(B)||null,R(O,j,""+re,fe);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case _e:return j=j.get(re.key===null?B:re.key)||null,N(O,j,re,fe);case me:return j=j.get(re.key===null?B:re.key)||null,$(O,j,re,fe);case qe:var ve=re._init;return ae(j,O,B,ve(re._payload),fe)}if(Pr(re)||ge(re))return j=j.get(B)||null,Z(O,j,re,fe,null);Fu(O,re)}return null}function ce(j,O,B,re){for(var fe=null,ve=null,we=O,Te=O=0,Nt=null;we!==null&&Te<B.length;Te++){we.index>Te?(Nt=we,we=null):Nt=we.sibling;var Ue=Q(j,we,B[Te],re);if(Ue===null){we===null&&(we=Nt);break}i&&we&&Ue.alternate===null&&s(j,we),O=g(Ue,O,Te),ve===null?fe=Ue:ve.sibling=Ue,ve=Ue,we=Nt}if(Te===B.length)return l(j,we),nt&&ms(j,Te),fe;if(we===null){for(;Te<B.length;Te++)we=ee(j,B[Te],re),we!==null&&(O=g(we,O,Te),ve===null?fe=we:ve.sibling=we,ve=we);return nt&&ms(j,Te),fe}for(we=h(j,we);Te<B.length;Te++)Nt=ae(we,j,Te,B[Te],re),Nt!==null&&(i&&Nt.alternate!==null&&we.delete(Nt.key===null?Te:Nt.key),O=g(Nt,O,Te),ve===null?fe=Nt:ve.sibling=Nt,ve=Nt);return i&&we.forEach(function(Ii){return s(j,Ii)}),nt&&ms(j,Te),fe}function he(j,O,B,re){var fe=ge(B);if(typeof fe!="function")throw Error(t(150));if(B=fe.call(B),B==null)throw Error(t(151));for(var ve=fe=null,we=O,Te=O=0,Nt=null,Ue=B.next();we!==null&&!Ue.done;Te++,Ue=B.next()){we.index>Te?(Nt=we,we=null):Nt=we.sibling;var Ii=Q(j,we,Ue.value,re);if(Ii===null){we===null&&(we=Nt);break}i&&we&&Ii.alternate===null&&s(j,we),O=g(Ii,O,Te),ve===null?fe=Ii:ve.sibling=Ii,ve=Ii,we=Nt}if(Ue.done)return l(j,we),nt&&ms(j,Te),fe;if(we===null){for(;!Ue.done;Te++,Ue=B.next())Ue=ee(j,Ue.value,re),Ue!==null&&(O=g(Ue,O,Te),ve===null?fe=Ue:ve.sibling=Ue,ve=Ue);return nt&&ms(j,Te),fe}for(we=h(j,we);!Ue.done;Te++,Ue=B.next())Ue=ae(we,j,Te,Ue.value,re),Ue!==null&&(i&&Ue.alternate!==null&&we.delete(Ue.key===null?Te:Ue.key),O=g(Ue,O,Te),ve===null?fe=Ue:ve.sibling=Ue,ve=Ue);return i&&we.forEach(function(aS){return s(j,aS)}),nt&&ms(j,Te),fe}function ct(j,O,B,re){if(typeof B=="object"&&B!==null&&B.type===x&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case _e:e:{for(var fe=B.key,ve=O;ve!==null;){if(ve.key===fe){if(fe=B.type,fe===x){if(ve.tag===7){l(j,ve.sibling),O=f(ve,B.props.children),O.return=j,j=O;break e}}else if(ve.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===qe&&hg(fe)===ve.type){l(j,ve.sibling),O=f(ve,B.props),O.ref=Qa(j,ve,B),O.return=j,j=O;break e}l(j,ve);break}else s(j,ve);ve=ve.sibling}B.type===x?(O=Is(B.props.children,j.mode,re,B.key),O.return=j,j=O):(re=uc(B.type,B.key,B.props,null,j.mode,re),re.ref=Qa(j,O,B),re.return=j,j=re)}return w(j);case me:e:{for(ve=B.key;O!==null;){if(O.key===ve)if(O.tag===4&&O.stateNode.containerInfo===B.containerInfo&&O.stateNode.implementation===B.implementation){l(j,O.sibling),O=f(O,B.children||[]),O.return=j,j=O;break e}else{l(j,O);break}else s(j,O);O=O.sibling}O=pf(B,j.mode,re),O.return=j,j=O}return w(j);case qe:return ve=B._init,ct(j,O,ve(B._payload),re)}if(Pr(B))return ce(j,O,B,re);if(ge(B))return he(j,O,B,re);Fu(j,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,O!==null&&O.tag===6?(l(j,O.sibling),O=f(O,B),O.return=j,j=O):(l(j,O),O=ff(B,j.mode,re),O.return=j,j=O),w(j)):l(j,O)}return ct}var xo=dg(!0),fg=dg(!1),ju=di(null),Bu=null,bo=null,Td=null;function Id(){Td=bo=Bu=null}function Sd(i){var s=ju.current;Xe(ju),i._currentValue=s}function Rd(i,s,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),i===l)break;i=i.return}}function Oo(i,s){Bu=i,Td=bo=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(sn=!0),i.firstContext=null)}function Nn(i){var s=i._currentValue;if(Td!==i)if(i={context:i,memoizedValue:s,next:null},bo===null){if(Bu===null)throw Error(t(308));bo=i,Bu.dependencies={lanes:0,firstContext:i}}else bo=bo.next=i;return s}var gs=null;function Ad(i){gs===null?gs=[i]:gs.push(i)}function pg(i,s,l,h){var f=s.interleaved;return f===null?(l.next=l,Ad(s)):(l.next=f.next,f.next=l),s.interleaved=l,Br(i,h)}function Br(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var mi=!1;function Cd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mg(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function zr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function gi(i,s,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Me&2)!==0){var f=h.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),h.pending=s,Br(i,l)}return f=h.interleaved,f===null?(s.next=s,Ad(h)):(s.next=f.next,f.next=s),h.interleaved=s,Br(i,l)}function zu(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,si(i,l)}}function gg(i,s){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var f=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};g===null?f=g=w:g=g.next=w,l=l.next}while(l!==null);g===null?f=g=s:g=g.next=s}else f=g=s;l={baseState:h.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function $u(i,s,l,h){var f=i.updateQueue;mi=!1;var g=f.firstBaseUpdate,w=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var N=R,$=N.next;N.next=null,w===null?g=$:w.next=$,w=N;var Z=i.alternate;Z!==null&&(Z=Z.updateQueue,R=Z.lastBaseUpdate,R!==w&&(R===null?Z.firstBaseUpdate=$:R.next=$,Z.lastBaseUpdate=N))}if(g!==null){var ee=f.baseState;w=0,Z=$=N=null,R=g;do{var Q=R.lane,ae=R.eventTime;if((h&Q)===Q){Z!==null&&(Z=Z.next={eventTime:ae,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var ce=i,he=R;switch(Q=s,ae=l,he.tag){case 1:if(ce=he.payload,typeof ce=="function"){ee=ce.call(ae,ee,Q);break e}ee=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=he.payload,Q=typeof ce=="function"?ce.call(ae,ee,Q):ce,Q==null)break e;ee=oe({},ee,Q);break e;case 2:mi=!0}}R.callback!==null&&R.lane!==0&&(i.flags|=64,Q=f.effects,Q===null?f.effects=[R]:Q.push(R))}else ae={eventTime:ae,lane:Q,tag:R.tag,payload:R.payload,callback:R.callback,next:null},Z===null?($=Z=ae,N=ee):Z=Z.next=ae,w|=Q;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;Q=R,R=Q.next,Q.next=null,f.lastBaseUpdate=Q,f.shared.pending=null}}while(!0);if(Z===null&&(N=ee),f.baseState=N,f.firstBaseUpdate=$,f.lastBaseUpdate=Z,s=f.shared.interleaved,s!==null){f=s;do w|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);vs|=w,i.lanes=w,i.memoizedState=ee}}function yg(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var h=i[s],f=h.callback;if(f!==null){if(h.callback=null,h=l,typeof f!="function")throw Error(t(191,f));f.call(h)}}}var Ja={},dr=di(Ja),Xa=di(Ja),Ya=di(Ja);function ys(i){if(i===Ja)throw Error(t(174));return i}function Pd(i,s){switch(Qe(Ya,s),Qe(Xa,i),Qe(dr,Ja),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:vt(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=vt(s,i)}Xe(dr),Qe(dr,s)}function Do(){Xe(dr),Xe(Xa),Xe(Ya)}function _g(i){ys(Ya.current);var s=ys(dr.current),l=vt(s,i.type);s!==l&&(Qe(Xa,i),Qe(dr,l))}function kd(i){Xa.current===i&&(Xe(dr),Xe(Xa))}var rt=di(0);function Hu(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Nd=[];function xd(){for(var i=0;i<Nd.length;i++)Nd[i]._workInProgressVersionPrimary=null;Nd.length=0}var qu=te.ReactCurrentDispatcher,bd=te.ReactCurrentBatchConfig,_s=0,it=null,Et=null,Pt=null,Wu=!1,Za=!1,el=0,kI=0;function Bt(){throw Error(t(321))}function Od(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Gn(i[l],s[l]))return!1;return!0}function Dd(i,s,l,h,f,g){if(_s=g,it=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,qu.current=i===null||i.memoizedState===null?OI:DI,i=l(h,f),Za){g=0;do{if(Za=!1,el=0,25<=g)throw Error(t(301));g+=1,Pt=Et=null,s.updateQueue=null,qu.current=LI,i=l(h,f)}while(Za)}if(qu.current=Qu,s=Et!==null&&Et.next!==null,_s=0,Pt=Et=it=null,Wu=!1,s)throw Error(t(300));return i}function Ld(){var i=el!==0;return el=0,i}function fr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?it.memoizedState=Pt=i:Pt=Pt.next=i,Pt}function xn(){if(Et===null){var i=it.alternate;i=i!==null?i.memoizedState:null}else i=Et.next;var s=Pt===null?it.memoizedState:Pt.next;if(s!==null)Pt=s,Et=i;else{if(i===null)throw Error(t(310));Et=i,i={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Pt===null?it.memoizedState=Pt=i:Pt=Pt.next=i}return Pt}function tl(i,s){return typeof s=="function"?s(i):s}function Vd(i){var s=xn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=Et,f=h.baseQueue,g=l.pending;if(g!==null){if(f!==null){var w=f.next;f.next=g.next,g.next=w}h.baseQueue=f=g,l.pending=null}if(f!==null){g=f.next,h=h.baseState;var R=w=null,N=null,$=g;do{var Z=$.lane;if((_s&Z)===Z)N!==null&&(N=N.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),h=$.hasEagerState?$.eagerState:i(h,$.action);else{var ee={lane:Z,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};N===null?(R=N=ee,w=h):N=N.next=ee,it.lanes|=Z,vs|=Z}$=$.next}while($!==null&&$!==g);N===null?w=h:N.next=R,Gn(h,s.memoizedState)||(sn=!0),s.memoizedState=h,s.baseState=w,s.baseQueue=N,l.lastRenderedState=h}if(i=l.interleaved,i!==null){f=i;do g=f.lane,it.lanes|=g,vs|=g,f=f.next;while(f!==i)}else f===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Md(i){var s=xn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,f=l.pending,g=s.memoizedState;if(f!==null){l.pending=null;var w=f=f.next;do g=i(g,w.action),w=w.next;while(w!==f);Gn(g,s.memoizedState)||(sn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,h]}function vg(){}function wg(i,s){var l=it,h=xn(),f=s(),g=!Gn(h.memoizedState,f);if(g&&(h.memoizedState=f,sn=!0),h=h.queue,Ud(Ig.bind(null,l,h,i),[i]),h.getSnapshot!==s||g||Pt!==null&&Pt.memoizedState.tag&1){if(l.flags|=2048,nl(9,Tg.bind(null,l,h,f,s),void 0,null),kt===null)throw Error(t(349));(_s&30)!==0||Eg(l,s,f)}return f}function Eg(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=it.updateQueue,s===null?(s={lastEffect:null,stores:null},it.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function Tg(i,s,l,h){s.value=l,s.getSnapshot=h,Sg(s)&&Rg(i)}function Ig(i,s,l){return l(function(){Sg(s)&&Rg(i)})}function Sg(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Gn(i,l)}catch{return!0}}function Rg(i){var s=Br(i,1);s!==null&&Yn(s,i,1,-1)}function Ag(i){var s=fr();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tl,lastRenderedState:i},s.queue=i,i=i.dispatch=bI.bind(null,it,i),[s.memoizedState,i]}function nl(i,s,l,h){return i={tag:i,create:s,destroy:l,deps:h,next:null},s=it.updateQueue,s===null?(s={lastEffect:null,stores:null},it.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,s.lastEffect=i)),i}function Cg(){return xn().memoizedState}function Gu(i,s,l,h){var f=fr();it.flags|=i,f.memoizedState=nl(1|s,l,void 0,h===void 0?null:h)}function Ku(i,s,l,h){var f=xn();h=h===void 0?null:h;var g=void 0;if(Et!==null){var w=Et.memoizedState;if(g=w.destroy,h!==null&&Od(h,w.deps)){f.memoizedState=nl(s,l,g,h);return}}it.flags|=i,f.memoizedState=nl(1|s,l,g,h)}function Pg(i,s){return Gu(8390656,8,i,s)}function Ud(i,s){return Ku(2048,8,i,s)}function kg(i,s){return Ku(4,2,i,s)}function Ng(i,s){return Ku(4,4,i,s)}function xg(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function bg(i,s,l){return l=l!=null?l.concat([i]):null,Ku(4,4,xg.bind(null,s,i),l)}function Fd(){}function Og(i,s){var l=xn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&Od(s,h[1])?h[0]:(l.memoizedState=[i,s],i)}function Dg(i,s){var l=xn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&Od(s,h[1])?h[0]:(i=i(),l.memoizedState=[i,s],i)}function Lg(i,s,l){return(_s&21)===0?(i.baseState&&(i.baseState=!1,sn=!0),i.memoizedState=l):(Gn(l,s)||(l=as(),it.lanes|=l,vs|=l,i.baseState=!0),s)}function NI(i,s){var l=Oe;Oe=l!==0&&4>l?l:4,i(!0);var h=bd.transition;bd.transition={};try{i(!1),s()}finally{Oe=l,bd.transition=h}}function Vg(){return xn().memoizedState}function xI(i,s,l){var h=wi(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},Mg(i))Ug(s,l);else if(l=pg(i,s,l,h),l!==null){var f=Yt();Yn(l,i,h,f),Fg(l,s,h)}}function bI(i,s,l){var h=wi(i),f={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(Mg(i))Ug(s,f);else{var g=i.alternate;if(i.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var w=s.lastRenderedState,R=g(w,l);if(f.hasEagerState=!0,f.eagerState=R,Gn(R,w)){var N=s.interleaved;N===null?(f.next=f,Ad(s)):(f.next=N.next,N.next=f),s.interleaved=f;return}}catch{}finally{}l=pg(i,s,f,h),l!==null&&(f=Yt(),Yn(l,i,h,f),Fg(l,s,h))}}function Mg(i){var s=i.alternate;return i===it||s!==null&&s===it}function Ug(i,s){Za=Wu=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function Fg(i,s,l){if((l&4194240)!==0){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,si(i,l)}}var Qu={readContext:Nn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},OI={readContext:Nn,useCallback:function(i,s){return fr().memoizedState=[i,s===void 0?null:s],i},useContext:Nn,useEffect:Pg,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,Gu(4194308,4,xg.bind(null,s,i),l)},useLayoutEffect:function(i,s){return Gu(4194308,4,i,s)},useInsertionEffect:function(i,s){return Gu(4,2,i,s)},useMemo:function(i,s){var l=fr();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var h=fr();return s=l!==void 0?l(s):s,h.memoizedState=h.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},h.queue=i,i=i.dispatch=xI.bind(null,it,i),[h.memoizedState,i]},useRef:function(i){var s=fr();return i={current:i},s.memoizedState=i},useState:Ag,useDebugValue:Fd,useDeferredValue:function(i){return fr().memoizedState=i},useTransition:function(){var i=Ag(!1),s=i[0];return i=NI.bind(null,i[1]),fr().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var h=it,f=fr();if(nt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),kt===null)throw Error(t(349));(_s&30)!==0||Eg(h,s,l)}f.memoizedState=l;var g={value:l,getSnapshot:s};return f.queue=g,Pg(Ig.bind(null,h,g,i),[i]),h.flags|=2048,nl(9,Tg.bind(null,h,g,l,s),void 0,null),l},useId:function(){var i=fr(),s=kt.identifierPrefix;if(nt){var l=jr,h=Fr;l=(h&~(1<<32-Qt(h)-1)).toString(32)+l,s=":"+s+"R"+l,l=el++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=kI++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},DI={readContext:Nn,useCallback:Og,useContext:Nn,useEffect:Ud,useImperativeHandle:bg,useInsertionEffect:kg,useLayoutEffect:Ng,useMemo:Dg,useReducer:Vd,useRef:Cg,useState:function(){return Vd(tl)},useDebugValue:Fd,useDeferredValue:function(i){var s=xn();return Lg(s,Et.memoizedState,i)},useTransition:function(){var i=Vd(tl)[0],s=xn().memoizedState;return[i,s]},useMutableSource:vg,useSyncExternalStore:wg,useId:Vg,unstable_isNewReconciler:!1},LI={readContext:Nn,useCallback:Og,useContext:Nn,useEffect:Ud,useImperativeHandle:bg,useInsertionEffect:kg,useLayoutEffect:Ng,useMemo:Dg,useReducer:Md,useRef:Cg,useState:function(){return Md(tl)},useDebugValue:Fd,useDeferredValue:function(i){var s=xn();return Et===null?s.memoizedState=i:Lg(s,Et.memoizedState,i)},useTransition:function(){var i=Md(tl)[0],s=xn().memoizedState;return[i,s]},useMutableSource:vg,useSyncExternalStore:wg,useId:Vg,unstable_isNewReconciler:!1};function Qn(i,s){if(i&&i.defaultProps){s=oe({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function jd(i,s,l,h){s=i.memoizedState,l=l(h,s),l=l==null?s:oe({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Ju={isMounted:function(i){return(i=i._reactInternals)?jn(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var h=Yt(),f=wi(i),g=zr(h,f);g.payload=s,l!=null&&(g.callback=l),s=gi(i,g,f),s!==null&&(Yn(s,i,f,h),zu(s,i,f))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var h=Yt(),f=wi(i),g=zr(h,f);g.tag=1,g.payload=s,l!=null&&(g.callback=l),s=gi(i,g,f),s!==null&&(Yn(s,i,f,h),zu(s,i,f))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Yt(),h=wi(i),f=zr(l,h);f.tag=2,s!=null&&(f.callback=s),s=gi(i,f,h),s!==null&&(Yn(s,i,h,l),zu(s,i,h))}};function jg(i,s,l,h,f,g,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,g,w):s.prototype&&s.prototype.isPureReactComponent?!za(l,h)||!za(f,g):!0}function Bg(i,s,l){var h=!1,f=fi,g=s.contextType;return typeof g=="object"&&g!==null?g=Nn(g):(f=rn(s)?fs:jt.current,h=s.contextTypes,g=(h=h!=null)?Co(i,f):fi),s=new s(l,g),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ju,i.stateNode=s,s._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=f,i.__reactInternalMemoizedMaskedChildContext=g),s}function zg(i,s,l,h){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,h),s.state!==i&&Ju.enqueueReplaceState(s,s.state,null)}function Bd(i,s,l,h){var f=i.stateNode;f.props=l,f.state=i.memoizedState,f.refs={},Cd(i);var g=s.contextType;typeof g=="object"&&g!==null?f.context=Nn(g):(g=rn(s)?fs:jt.current,f.context=Co(i,g)),f.state=i.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(jd(i,s,g,l),f.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&Ju.enqueueReplaceState(f,f.state,null),$u(i,l,f,h),f.state=i.memoizedState),typeof f.componentDidMount=="function"&&(i.flags|=4194308)}function Lo(i,s){try{var l="",h=s;do l+=Pe(h),h=h.return;while(h);var f=l}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:i,source:s,stack:f,digest:null}}function zd(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function $d(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var VI=typeof WeakMap=="function"?WeakMap:Map;function $g(i,s,l){l=zr(-1,l),l.tag=3,l.payload={element:null};var h=s.value;return l.callback=function(){rc||(rc=!0,sf=h),$d(i,s)},l}function Hg(i,s,l){l=zr(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var f=s.value;l.payload=function(){return h(f)},l.callback=function(){$d(i,s)}}var g=i.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(l.callback=function(){$d(i,s),typeof h!="function"&&(_i===null?_i=new Set([this]):_i.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),l}function qg(i,s,l){var h=i.pingCache;if(h===null){h=i.pingCache=new VI;var f=new Set;h.set(s,f)}else f=h.get(s),f===void 0&&(f=new Set,h.set(s,f));f.has(l)||(f.add(l),i=JI.bind(null,i,s,l),s.then(i,i))}function Wg(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function Gg(i,s,l,h,f){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=zr(-1,1),s.tag=2,gi(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=f,i)}var MI=te.ReactCurrentOwner,sn=!1;function Xt(i,s,l,h){s.child=i===null?fg(s,null,l,h):xo(s,i.child,l,h)}function Kg(i,s,l,h,f){l=l.render;var g=s.ref;return Oo(s,f),h=Dd(i,s,l,h,g,f),l=Ld(),i!==null&&!sn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~f,$r(i,s,f)):(nt&&l&&yd(s),s.flags|=1,Xt(i,s,h,f),s.child)}function Qg(i,s,l,h,f){if(i===null){var g=l.type;return typeof g=="function"&&!df(g)&&g.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=g,Jg(i,s,g,h,f)):(i=uc(l.type,null,h,s,s.mode,f),i.ref=s.ref,i.return=s,s.child=i)}if(g=i.child,(i.lanes&f)===0){var w=g.memoizedProps;if(l=l.compare,l=l!==null?l:za,l(w,h)&&i.ref===s.ref)return $r(i,s,f)}return s.flags|=1,i=Ti(g,h),i.ref=s.ref,i.return=s,s.child=i}function Jg(i,s,l,h,f){if(i!==null){var g=i.memoizedProps;if(za(g,h)&&i.ref===s.ref)if(sn=!1,s.pendingProps=h=g,(i.lanes&f)!==0)(i.flags&131072)!==0&&(sn=!0);else return s.lanes=i.lanes,$r(i,s,f)}return Hd(i,s,l,h,f)}function Xg(i,s,l){var h=s.pendingProps,f=h.children,g=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(Mo,En),En|=l;else{if((l&1073741824)===0)return i=g!==null?g.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Qe(Mo,En),En|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:l,Qe(Mo,En),En|=h}else g!==null?(h=g.baseLanes|l,s.memoizedState=null):h=l,Qe(Mo,En),En|=h;return Xt(i,s,f,l),s.child}function Yg(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Hd(i,s,l,h,f){var g=rn(l)?fs:jt.current;return g=Co(s,g),Oo(s,f),l=Dd(i,s,l,h,g,f),h=Ld(),i!==null&&!sn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~f,$r(i,s,f)):(nt&&h&&yd(s),s.flags|=1,Xt(i,s,l,f),s.child)}function Zg(i,s,l,h,f){if(rn(l)){var g=!0;Du(s)}else g=!1;if(Oo(s,f),s.stateNode===null)Yu(i,s),Bg(s,l,h),Bd(s,l,h,f),h=!0;else if(i===null){var w=s.stateNode,R=s.memoizedProps;w.props=R;var N=w.context,$=l.contextType;typeof $=="object"&&$!==null?$=Nn($):($=rn(l)?fs:jt.current,$=Co(s,$));var Z=l.getDerivedStateFromProps,ee=typeof Z=="function"||typeof w.getSnapshotBeforeUpdate=="function";ee||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==h||N!==$)&&zg(s,w,h,$),mi=!1;var Q=s.memoizedState;w.state=Q,$u(s,h,w,f),N=s.memoizedState,R!==h||Q!==N||nn.current||mi?(typeof Z=="function"&&(jd(s,l,Z,h),N=s.memoizedState),(R=mi||jg(s,l,R,h,Q,N,$))?(ee||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=N),w.props=h,w.state=N,w.context=$,h=R):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{w=s.stateNode,mg(i,s),R=s.memoizedProps,$=s.type===s.elementType?R:Qn(s.type,R),w.props=$,ee=s.pendingProps,Q=w.context,N=l.contextType,typeof N=="object"&&N!==null?N=Nn(N):(N=rn(l)?fs:jt.current,N=Co(s,N));var ae=l.getDerivedStateFromProps;(Z=typeof ae=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==ee||Q!==N)&&zg(s,w,h,N),mi=!1,Q=s.memoizedState,w.state=Q,$u(s,h,w,f);var ce=s.memoizedState;R!==ee||Q!==ce||nn.current||mi?(typeof ae=="function"&&(jd(s,l,ae,h),ce=s.memoizedState),($=mi||jg(s,l,$,h,Q,ce,N)||!1)?(Z||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,ce,N),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,ce,N)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||R===i.memoizedProps&&Q===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===i.memoizedProps&&Q===i.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=ce),w.props=h,w.state=ce,w.context=N,h=$):(typeof w.componentDidUpdate!="function"||R===i.memoizedProps&&Q===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===i.memoizedProps&&Q===i.memoizedState||(s.flags|=1024),h=!1)}return qd(i,s,l,h,g,f)}function qd(i,s,l,h,f,g){Yg(i,s);var w=(s.flags&128)!==0;if(!h&&!w)return f&&ig(s,l,!1),$r(i,s,g);h=s.stateNode,MI.current=s;var R=w&&typeof l.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,i!==null&&w?(s.child=xo(s,i.child,null,g),s.child=xo(s,null,R,g)):Xt(i,s,R,g),s.memoizedState=h.state,f&&ig(s,l,!0),s.child}function ey(i){var s=i.stateNode;s.pendingContext?ng(i,s.pendingContext,s.pendingContext!==s.context):s.context&&ng(i,s.context,!1),Pd(i,s.containerInfo)}function ty(i,s,l,h,f){return No(),Ed(f),s.flags|=256,Xt(i,s,l,h),s.child}var Wd={dehydrated:null,treeContext:null,retryLane:0};function Gd(i){return{baseLanes:i,cachePool:null,transitions:null}}function ny(i,s,l){var h=s.pendingProps,f=rt.current,g=!1,w=(s.flags&128)!==0,R;if((R=w)||(R=i!==null&&i.memoizedState===null?!1:(f&2)!==0),R?(g=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(f|=1),Qe(rt,f&1),i===null)return wd(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=h.children,i=h.fallback,g?(h=s.mode,g=s.child,w={mode:"hidden",children:w},(h&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=cc(w,h,0,null),i=Is(i,h,l,null),g.return=s,i.return=s,g.sibling=i,s.child=g,s.child.memoizedState=Gd(l),s.memoizedState=Wd,i):Kd(s,w));if(f=i.memoizedState,f!==null&&(R=f.dehydrated,R!==null))return UI(i,s,w,h,R,f,l);if(g){g=h.fallback,w=s.mode,f=i.child,R=f.sibling;var N={mode:"hidden",children:h.children};return(w&1)===0&&s.child!==f?(h=s.child,h.childLanes=0,h.pendingProps=N,s.deletions=null):(h=Ti(f,N),h.subtreeFlags=f.subtreeFlags&14680064),R!==null?g=Ti(R,g):(g=Is(g,w,l,null),g.flags|=2),g.return=s,h.return=s,h.sibling=g,s.child=h,h=g,g=s.child,w=i.child.memoizedState,w=w===null?Gd(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=i.childLanes&~l,s.memoizedState=Wd,h}return g=i.child,i=g.sibling,h=Ti(g,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=l),h.return=s,h.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=h,s.memoizedState=null,h}function Kd(i,s){return s=cc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Xu(i,s,l,h){return h!==null&&Ed(h),xo(s,i.child,null,l),i=Kd(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function UI(i,s,l,h,f,g,w){if(l)return s.flags&256?(s.flags&=-257,h=zd(Error(t(422))),Xu(i,s,w,h)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(g=h.fallback,f=s.mode,h=cc({mode:"visible",children:h.children},f,0,null),g=Is(g,f,w,null),g.flags|=2,h.return=s,g.return=s,h.sibling=g,s.child=h,(s.mode&1)!==0&&xo(s,i.child,null,w),s.child.memoizedState=Gd(w),s.memoizedState=Wd,g);if((s.mode&1)===0)return Xu(i,s,w,null);if(f.data==="$!"){if(h=f.nextSibling&&f.nextSibling.dataset,h)var R=h.dgst;return h=R,g=Error(t(419)),h=zd(g,h,void 0),Xu(i,s,w,h)}if(R=(w&i.childLanes)!==0,sn||R){if(h=kt,h!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(h.suspendedLanes|w))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Br(i,f),Yn(h,i,f,-1))}return hf(),h=zd(Error(t(421))),Xu(i,s,w,h)}return f.data==="$?"?(s.flags|=128,s.child=i.child,s=XI.bind(null,i),f._reactRetry=s,null):(i=g.treeContext,wn=hi(f.nextSibling),vn=s,nt=!0,Kn=null,i!==null&&(Pn[kn++]=Fr,Pn[kn++]=jr,Pn[kn++]=ps,Fr=i.id,jr=i.overflow,ps=s),s=Kd(s,h.children),s.flags|=4096,s)}function ry(i,s,l){i.lanes|=s;var h=i.alternate;h!==null&&(h.lanes|=s),Rd(i.return,s,l)}function Qd(i,s,l,h,f){var g=i.memoizedState;g===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=l,g.tailMode=f)}function iy(i,s,l){var h=s.pendingProps,f=h.revealOrder,g=h.tail;if(Xt(i,s,h.children,l),h=rt.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&ry(i,l,s);else if(i.tag===19)ry(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(Qe(rt,h),(s.mode&1)===0)s.memoizedState=null;else switch(f){case"forwards":for(l=s.child,f=null;l!==null;)i=l.alternate,i!==null&&Hu(i)===null&&(f=l),l=l.sibling;l=f,l===null?(f=s.child,s.child=null):(f=l.sibling,l.sibling=null),Qd(s,!1,f,l,g);break;case"backwards":for(l=null,f=s.child,s.child=null;f!==null;){if(i=f.alternate,i!==null&&Hu(i)===null){s.child=f;break}i=f.sibling,f.sibling=l,l=f,f=i}Qd(s,!0,l,null,g);break;case"together":Qd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Yu(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function $r(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),vs|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Ti(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Ti(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function FI(i,s,l){switch(s.tag){case 3:ey(s),No();break;case 5:_g(s);break;case 1:rn(s.type)&&Du(s);break;case 4:Pd(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,f=s.memoizedProps.value;Qe(ju,h._currentValue),h._currentValue=f;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(Qe(rt,rt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?ny(i,s,l):(Qe(rt,rt.current&1),i=$r(i,s,l),i!==null?i.sibling:null);Qe(rt,rt.current&1);break;case 19:if(h=(l&s.childLanes)!==0,(i.flags&128)!==0){if(h)return iy(i,s,l);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Qe(rt,rt.current),h)break;return null;case 22:case 23:return s.lanes=0,Xg(i,s,l)}return $r(i,s,l)}var sy,Jd,oy,ay;sy=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Jd=function(){},oy=function(i,s,l,h){var f=i.memoizedProps;if(f!==h){i=s.stateNode,ys(dr.current);var g=null;switch(l){case"input":f=Ji(i,f),h=Ji(i,h),g=[];break;case"select":f=oe({},f,{value:void 0}),h=oe({},h,{value:void 0}),g=[];break;case"textarea":f=ya(i,f),h=ya(i,h),g=[];break;default:typeof f.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=xu)}Ia(l,h);var w;l=null;for($ in f)if(!h.hasOwnProperty($)&&f.hasOwnProperty($)&&f[$]!=null)if($==="style"){var R=f[$];for(w in R)R.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(o.hasOwnProperty($)?g||(g=[]):(g=g||[]).push($,null));for($ in h){var N=h[$];if(R=f?.[$],h.hasOwnProperty($)&&N!==R&&(N!=null||R!=null))if($==="style")if(R){for(w in R)!R.hasOwnProperty(w)||N&&N.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in N)N.hasOwnProperty(w)&&R[w]!==N[w]&&(l||(l={}),l[w]=N[w])}else l||(g||(g=[]),g.push($,l)),l=N;else $==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,R=R?R.__html:void 0,N!=null&&R!==N&&(g=g||[]).push($,N)):$==="children"?typeof N!="string"&&typeof N!="number"||(g=g||[]).push($,""+N):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(o.hasOwnProperty($)?(N!=null&&$==="onScroll"&&Je("scroll",i),g||R===N||(g=[])):(g=g||[]).push($,N))}l&&(g=g||[]).push("style",l);var $=g;(s.updateQueue=$)&&(s.flags|=4)}},ay=function(i,s,l,h){l!==h&&(s.flags|=4)};function rl(i,s){if(!nt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function zt(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(s)for(var f=i.child;f!==null;)l|=f.lanes|f.childLanes,h|=f.subtreeFlags&14680064,h|=f.flags&14680064,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)l|=f.lanes|f.childLanes,h|=f.subtreeFlags,h|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=h,i.childLanes=l,s}function jI(i,s,l){var h=s.pendingProps;switch(_d(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(s),null;case 1:return rn(s.type)&&Ou(),zt(s),null;case 3:return h=s.stateNode,Do(),Xe(nn),Xe(jt),xd(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(Uu(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Kn!==null&&(lf(Kn),Kn=null))),Jd(i,s),zt(s),null;case 5:kd(s);var f=ys(Ya.current);if(l=s.type,i!==null&&s.stateNode!=null)oy(i,s,l,h,f),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return zt(s),null}if(i=ys(dr.current),Uu(s)){h=s.stateNode,l=s.type;var g=s.memoizedProps;switch(h[hr]=s,h[Ga]=g,i=(s.mode&1)!==0,l){case"dialog":Je("cancel",h),Je("close",h);break;case"iframe":case"object":case"embed":Je("load",h);break;case"video":case"audio":for(f=0;f<Ha.length;f++)Je(Ha[f],h);break;case"source":Je("error",h);break;case"img":case"image":case"link":Je("error",h),Je("load",h);break;case"details":Je("toggle",h);break;case"input":Ks(h,g),Je("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},Je("invalid",h);break;case"textarea":Js(h,g),Je("invalid",h)}Ia(l,g),f=null;for(var w in g)if(g.hasOwnProperty(w)){var R=g[w];w==="children"?typeof R=="string"?h.textContent!==R&&(g.suppressHydrationWarning!==!0&&Nu(h.textContent,R,i),f=["children",R]):typeof R=="number"&&h.textContent!==""+R&&(g.suppressHydrationWarning!==!0&&Nu(h.textContent,R,i),f=["children",""+R]):o.hasOwnProperty(w)&&R!=null&&w==="onScroll"&&Je("scroll",h)}switch(l){case"input":Cr(h),nu(h,g,!0);break;case"textarea":Cr(h),_a(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=xu)}h=f,s.updateQueue=h,h!==null&&(s.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=_t(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=w.createElement(l,{is:h.is}):(i=w.createElement(l),l==="select"&&(w=i,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):i=w.createElementNS(i,l),i[hr]=s,i[Ga]=h,sy(i,s,!1,!1),s.stateNode=i;e:{switch(w=Sa(l,h),l){case"dialog":Je("cancel",i),Je("close",i),f=h;break;case"iframe":case"object":case"embed":Je("load",i),f=h;break;case"video":case"audio":for(f=0;f<Ha.length;f++)Je(Ha[f],i);f=h;break;case"source":Je("error",i),f=h;break;case"img":case"image":case"link":Je("error",i),Je("load",i),f=h;break;case"details":Je("toggle",i),f=h;break;case"input":Ks(i,h),f=Ji(i,h),Je("invalid",i);break;case"option":f=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},f=oe({},h,{value:void 0}),Je("invalid",i);break;case"textarea":Js(i,h),f=ya(i,h),Je("invalid",i);break;default:f=h}Ia(l,f),R=f;for(g in R)if(R.hasOwnProperty(g)){var N=R[g];g==="style"?Ea(i,N):g==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&va(i,N)):g==="children"?typeof N=="string"?(l!=="textarea"||N!=="")&&ei(i,N):typeof N=="number"&&ei(i,""+N):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?N!=null&&g==="onScroll"&&Je("scroll",i):N!=null&&K(i,g,N,w))}switch(l){case"input":Cr(i),nu(i,h,!1);break;case"textarea":Cr(i),_a(i);break;case"option":h.value!=null&&i.setAttribute("value",""+Be(h.value));break;case"select":i.multiple=!!h.multiple,g=h.value,g!=null?kr(i,!!h.multiple,g,!1):h.defaultValue!=null&&kr(i,!!h.multiple,h.defaultValue,!0);break;default:typeof f.onClick=="function"&&(i.onclick=xu)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return zt(s),null;case 6:if(i&&s.stateNode!=null)ay(i,s,i.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(l=ys(Ya.current),ys(dr.current),Uu(s)){if(h=s.stateNode,l=s.memoizedProps,h[hr]=s,(g=h.nodeValue!==l)&&(i=vn,i!==null))switch(i.tag){case 3:Nu(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Nu(h.nodeValue,l,(i.mode&1)!==0)}g&&(s.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[hr]=s,s.stateNode=h}return zt(s),null;case 13:if(Xe(rt),h=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(nt&&wn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)cg(),No(),s.flags|=98560,g=!1;else if(g=Uu(s),h!==null&&h.dehydrated!==null){if(i===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[hr]=s}else No(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;zt(s),g=!1}else Kn!==null&&(lf(Kn),Kn=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(rt.current&1)!==0?Tt===0&&(Tt=3):hf())),s.updateQueue!==null&&(s.flags|=4),zt(s),null);case 4:return Do(),Jd(i,s),i===null&&qa(s.stateNode.containerInfo),zt(s),null;case 10:return Sd(s.type._context),zt(s),null;case 17:return rn(s.type)&&Ou(),zt(s),null;case 19:if(Xe(rt),g=s.memoizedState,g===null)return zt(s),null;if(h=(s.flags&128)!==0,w=g.rendering,w===null)if(h)rl(g,!1);else{if(Tt!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(w=Hu(i),w!==null){for(s.flags|=128,rl(g,!1),h=w.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=l,l=s.child;l!==null;)g=l,i=h,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=i,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,i=w.dependencies,g.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Qe(rt,rt.current&1|2),s.child}i=i.sibling}g.tail!==null&&Ke()>Uo&&(s.flags|=128,h=!0,rl(g,!1),s.lanes=4194304)}else{if(!h)if(i=Hu(w),i!==null){if(s.flags|=128,h=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),rl(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!nt)return zt(s),null}else 2*Ke()-g.renderingStartTime>Uo&&l!==1073741824&&(s.flags|=128,h=!0,rl(g,!1),s.lanes=4194304);g.isBackwards?(w.sibling=s.child,s.child=w):(l=g.last,l!==null?l.sibling=w:s.child=w,g.last=w)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=Ke(),s.sibling=null,l=rt.current,Qe(rt,h?l&1|2:l&1),s):(zt(s),null);case 22:case 23:return cf(),h=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(En&1073741824)!==0&&(zt(s),s.subtreeFlags&6&&(s.flags|=8192)):zt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function BI(i,s){switch(_d(s),s.tag){case 1:return rn(s.type)&&Ou(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Do(),Xe(nn),Xe(jt),xd(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return kd(s),null;case 13:if(Xe(rt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));No()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Xe(rt),null;case 4:return Do(),null;case 10:return Sd(s.type._context),null;case 22:case 23:return cf(),null;case 24:return null;default:return null}}var Zu=!1,$t=!1,zI=typeof WeakSet=="function"?WeakSet:Set,ue=null;function Vo(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){at(i,s,h)}else l.current=null}function Xd(i,s,l){try{l()}catch(h){at(i,s,h)}}var ly=!1;function $I(i,s){if(ud=li,i=jm(),td(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var f=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var w=0,R=-1,N=-1,$=0,Z=0,ee=i,Q=null;t:for(;;){for(var ae;ee!==l||f!==0&&ee.nodeType!==3||(R=w+f),ee!==g||h!==0&&ee.nodeType!==3||(N=w+h),ee.nodeType===3&&(w+=ee.nodeValue.length),(ae=ee.firstChild)!==null;)Q=ee,ee=ae;for(;;){if(ee===i)break t;if(Q===l&&++$===f&&(R=w),Q===g&&++Z===h&&(N=w),(ae=ee.nextSibling)!==null)break;ee=Q,Q=ee.parentNode}ee=ae}l=R===-1||N===-1?null:{start:R,end:N}}else l=null}l=l||{start:0,end:0}}else l=null;for(cd={focusedElem:i,selectionRange:l},li=!1,ue=s;ue!==null;)if(s=ue,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,ue=i;else for(;ue!==null;){s=ue;try{var ce=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var he=ce.memoizedProps,ct=ce.memoizedState,j=s.stateNode,O=j.getSnapshotBeforeUpdate(s.elementType===s.type?he:Qn(s.type,he),ct);j.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var B=s.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(re){at(s,s.return,re)}if(i=s.sibling,i!==null){i.return=s.return,ue=i;break}ue=s.return}return ce=ly,ly=!1,ce}function il(i,s,l){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var f=h=h.next;do{if((f.tag&i)===i){var g=f.destroy;f.destroy=void 0,g!==void 0&&Xd(s,l,g)}f=f.next}while(f!==h)}}function ec(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==s)}}function Yd(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function uy(i){var s=i.alternate;s!==null&&(i.alternate=null,uy(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[hr],delete s[Ga],delete s[pd],delete s[RI],delete s[AI])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function cy(i){return i.tag===5||i.tag===3||i.tag===4}function hy(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||cy(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Zd(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=xu));else if(h!==4&&(i=i.child,i!==null))for(Zd(i,s,l),i=i.sibling;i!==null;)Zd(i,s,l),i=i.sibling}function ef(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(ef(i,s,l),i=i.sibling;i!==null;)ef(i,s,l),i=i.sibling}var Dt=null,Jn=!1;function yi(i,s,l){for(l=l.child;l!==null;)dy(i,s,l),l=l.sibling}function dy(i,s,l){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(ss,l)}catch{}switch(l.tag){case 5:$t||Vo(l,s);case 6:var h=Dt,f=Jn;Dt=null,yi(i,s,l),Dt=h,Jn=f,Dt!==null&&(Jn?(i=Dt,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Dt.removeChild(l.stateNode));break;case 18:Dt!==null&&(Jn?(i=Dt,l=l.stateNode,i.nodeType===8?fd(i.parentNode,l):i.nodeType===1&&fd(i,l),qn(i)):fd(Dt,l.stateNode));break;case 4:h=Dt,f=Jn,Dt=l.stateNode.containerInfo,Jn=!0,yi(i,s,l),Dt=h,Jn=f;break;case 0:case 11:case 14:case 15:if(!$t&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){f=h=h.next;do{var g=f,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&Xd(l,s,w),f=f.next}while(f!==h)}yi(i,s,l);break;case 1:if(!$t&&(Vo(l,s),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(R){at(l,s,R)}yi(i,s,l);break;case 21:yi(i,s,l);break;case 22:l.mode&1?($t=(h=$t)||l.memoizedState!==null,yi(i,s,l),$t=h):yi(i,s,l);break;default:yi(i,s,l)}}function fy(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new zI),s.forEach(function(h){var f=YI.bind(null,i,h);l.has(h)||(l.add(h),h.then(f,f))})}}function Xn(i,s){var l=s.deletions;if(l!==null)for(var h=0;h<l.length;h++){var f=l[h];try{var g=i,w=s,R=w;e:for(;R!==null;){switch(R.tag){case 5:Dt=R.stateNode,Jn=!1;break e;case 3:Dt=R.stateNode.containerInfo,Jn=!0;break e;case 4:Dt=R.stateNode.containerInfo,Jn=!0;break e}R=R.return}if(Dt===null)throw Error(t(160));dy(g,w,f),Dt=null,Jn=!1;var N=f.alternate;N!==null&&(N.return=null),f.return=null}catch($){at(f,s,$)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)py(s,i),s=s.sibling}function py(i,s){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Xn(s,i),pr(i),h&4){try{il(3,i,i.return),ec(3,i)}catch(he){at(i,i.return,he)}try{il(5,i,i.return)}catch(he){at(i,i.return,he)}}break;case 1:Xn(s,i),pr(i),h&512&&l!==null&&Vo(l,l.return);break;case 5:if(Xn(s,i),pr(i),h&512&&l!==null&&Vo(l,l.return),i.flags&32){var f=i.stateNode;try{ei(f,"")}catch(he){at(i,i.return,he)}}if(h&4&&(f=i.stateNode,f!=null)){var g=i.memoizedProps,w=l!==null?l.memoizedProps:g,R=i.type,N=i.updateQueue;if(i.updateQueue=null,N!==null)try{R==="input"&&g.type==="radio"&&g.name!=null&&ma(f,g),Sa(R,w);var $=Sa(R,g);for(w=0;w<N.length;w+=2){var Z=N[w],ee=N[w+1];Z==="style"?Ea(f,ee):Z==="dangerouslySetInnerHTML"?va(f,ee):Z==="children"?ei(f,ee):K(f,Z,ee,$)}switch(R){case"input":ga(f,g);break;case"textarea":Xs(f,g);break;case"select":var Q=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var ae=g.value;ae!=null?kr(f,!!g.multiple,ae,!1):Q!==!!g.multiple&&(g.defaultValue!=null?kr(f,!!g.multiple,g.defaultValue,!0):kr(f,!!g.multiple,g.multiple?[]:"",!1))}f[Ga]=g}catch(he){at(i,i.return,he)}}break;case 6:if(Xn(s,i),pr(i),h&4){if(i.stateNode===null)throw Error(t(162));f=i.stateNode,g=i.memoizedProps;try{f.nodeValue=g}catch(he){at(i,i.return,he)}}break;case 3:if(Xn(s,i),pr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{qn(s.containerInfo)}catch(he){at(i,i.return,he)}break;case 4:Xn(s,i),pr(i);break;case 13:Xn(s,i),pr(i),f=i.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(rf=Ke())),h&4&&fy(i);break;case 22:if(Z=l!==null&&l.memoizedState!==null,i.mode&1?($t=($=$t)||Z,Xn(s,i),$t=$):Xn(s,i),pr(i),h&8192){if($=i.memoizedState!==null,(i.stateNode.isHidden=$)&&!Z&&(i.mode&1)!==0)for(ue=i,Z=i.child;Z!==null;){for(ee=ue=Z;ue!==null;){switch(Q=ue,ae=Q.child,Q.tag){case 0:case 11:case 14:case 15:il(4,Q,Q.return);break;case 1:Vo(Q,Q.return);var ce=Q.stateNode;if(typeof ce.componentWillUnmount=="function"){h=Q,l=Q.return;try{s=h,ce.props=s.memoizedProps,ce.state=s.memoizedState,ce.componentWillUnmount()}catch(he){at(h,l,he)}}break;case 5:Vo(Q,Q.return);break;case 22:if(Q.memoizedState!==null){yy(ee);continue}}ae!==null?(ae.return=Q,ue=ae):yy(ee)}Z=Z.sibling}e:for(Z=null,ee=i;;){if(ee.tag===5){if(Z===null){Z=ee;try{f=ee.stateNode,$?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(R=ee.stateNode,N=ee.memoizedProps.style,w=N!=null&&N.hasOwnProperty("display")?N.display:null,R.style.display=wa("display",w))}catch(he){at(i,i.return,he)}}}else if(ee.tag===6){if(Z===null)try{ee.stateNode.nodeValue=$?"":ee.memoizedProps}catch(he){at(i,i.return,he)}}else if((ee.tag!==22&&ee.tag!==23||ee.memoizedState===null||ee===i)&&ee.child!==null){ee.child.return=ee,ee=ee.child;continue}if(ee===i)break e;for(;ee.sibling===null;){if(ee.return===null||ee.return===i)break e;Z===ee&&(Z=null),ee=ee.return}Z===ee&&(Z=null),ee.sibling.return=ee.return,ee=ee.sibling}}break;case 19:Xn(s,i),pr(i),h&4&&fy(i);break;case 21:break;default:Xn(s,i),pr(i)}}function pr(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(cy(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var f=h.stateNode;h.flags&32&&(ei(f,""),h.flags&=-33);var g=hy(i);ef(i,g,f);break;case 3:case 4:var w=h.stateNode.containerInfo,R=hy(i);Zd(i,R,w);break;default:throw Error(t(161))}}catch(N){at(i,i.return,N)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function HI(i,s,l){ue=i,my(i)}function my(i,s,l){for(var h=(i.mode&1)!==0;ue!==null;){var f=ue,g=f.child;if(f.tag===22&&h){var w=f.memoizedState!==null||Zu;if(!w){var R=f.alternate,N=R!==null&&R.memoizedState!==null||$t;R=Zu;var $=$t;if(Zu=w,($t=N)&&!$)for(ue=f;ue!==null;)w=ue,N=w.child,w.tag===22&&w.memoizedState!==null?_y(f):N!==null?(N.return=w,ue=N):_y(f);for(;g!==null;)ue=g,my(g),g=g.sibling;ue=f,Zu=R,$t=$}gy(i)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,ue=g):gy(i)}}function gy(i){for(;ue!==null;){var s=ue;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:$t||ec(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!$t)if(l===null)h.componentDidMount();else{var f=s.elementType===s.type?l.memoizedProps:Qn(s.type,l.memoizedProps);h.componentDidUpdate(f,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&yg(s,g,h);break;case 3:var w=s.updateQueue;if(w!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}yg(s,w,l)}break;case 5:var R=s.stateNode;if(l===null&&s.flags&4){l=R;var N=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&l.focus();break;case"img":N.src&&(l.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var $=s.alternate;if($!==null){var Z=$.memoizedState;if(Z!==null){var ee=Z.dehydrated;ee!==null&&qn(ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}$t||s.flags&512&&Yd(s)}catch(Q){at(s,s.return,Q)}}if(s===i){ue=null;break}if(l=s.sibling,l!==null){l.return=s.return,ue=l;break}ue=s.return}}function yy(i){for(;ue!==null;){var s=ue;if(s===i){ue=null;break}var l=s.sibling;if(l!==null){l.return=s.return,ue=l;break}ue=s.return}}function _y(i){for(;ue!==null;){var s=ue;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{ec(4,s)}catch(N){at(s,l,N)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var f=s.return;try{h.componentDidMount()}catch(N){at(s,f,N)}}var g=s.return;try{Yd(s)}catch(N){at(s,g,N)}break;case 5:var w=s.return;try{Yd(s)}catch(N){at(s,w,N)}}}catch(N){at(s,s.return,N)}if(s===i){ue=null;break}var R=s.sibling;if(R!==null){R.return=s.return,ue=R;break}ue=s.return}}var qI=Math.ceil,tc=te.ReactCurrentDispatcher,tf=te.ReactCurrentOwner,bn=te.ReactCurrentBatchConfig,Me=0,kt=null,pt=null,Lt=0,En=0,Mo=di(0),Tt=0,sl=null,vs=0,nc=0,nf=0,ol=null,on=null,rf=0,Uo=1/0,Hr=null,rc=!1,sf=null,_i=null,ic=!1,vi=null,sc=0,al=0,of=null,oc=-1,ac=0;function Yt(){return(Me&6)!==0?Ke():oc!==-1?oc:oc=Ke()}function wi(i){return(i.mode&1)===0?1:(Me&2)!==0&&Lt!==0?Lt&-Lt:PI.transition!==null?(ac===0&&(ac=as()),ac):(i=Oe,i!==0||(i=window.event,i=i===void 0?16:La(i.type)),i)}function Yn(i,s,l,h){if(50<al)throw al=0,of=null,Error(t(185));ii(i,l,h),((Me&2)===0||i!==kt)&&(i===kt&&((Me&2)===0&&(nc|=l),Tt===4&&Ei(i,Lt)),an(i,h),l===1&&Me===0&&(s.mode&1)===0&&(Uo=Ke()+500,Lu&&pi()))}function an(i,s){var l=i.callbackNode;br(i,s);var h=os(i,i===kt?Lt:0);if(h===0)l!==null&&Na(l),i.callbackNode=null,i.callbackPriority=0;else if(s=h&-h,i.callbackPriority!==s){if(l!=null&&Na(l),s===1)i.tag===0?CI(wy.bind(null,i)):sg(wy.bind(null,i)),II(function(){(Me&6)===0&&pi()}),l=null;else{switch(oi(h)){case 1:l=is;break;case 4:l=ti;break;case 16:l=Rn;break;case 536870912:l=au;break;default:l=Rn}l=Py(l,vy.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function vy(i,s){if(oc=-1,ac=0,(Me&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Fo()&&i.callbackNode!==l)return null;var h=os(i,i===kt?Lt:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||s)s=lc(i,h);else{s=h;var f=Me;Me|=2;var g=Ty();(kt!==i||Lt!==s)&&(Hr=null,Uo=Ke()+500,Es(i,s));do try{KI();break}catch(R){Ey(i,R)}while(!0);Id(),tc.current=g,Me=f,pt!==null?s=0:(kt=null,Lt=0,s=Tt)}if(s!==0){if(s===2&&(f=gn(i),f!==0&&(h=f,s=af(i,f))),s===1)throw l=sl,Es(i,0),Ei(i,h),an(i,Ke()),l;if(s===6)Ei(i,h);else{if(f=i.current.alternate,(h&30)===0&&!WI(f)&&(s=lc(i,h),s===2&&(g=gn(i),g!==0&&(h=g,s=af(i,g))),s===1))throw l=sl,Es(i,0),Ei(i,h),an(i,Ke()),l;switch(i.finishedWork=f,i.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:Ts(i,on,Hr);break;case 3:if(Ei(i,h),(h&130023424)===h&&(s=rf+500-Ke(),10<s)){if(os(i,0)!==0)break;if(f=i.suspendedLanes,(f&h)!==h){Yt(),i.pingedLanes|=i.suspendedLanes&f;break}i.timeoutHandle=dd(Ts.bind(null,i,on,Hr),s);break}Ts(i,on,Hr);break;case 4:if(Ei(i,h),(h&4194240)===h)break;for(s=i.eventTimes,f=-1;0<h;){var w=31-Qt(h);g=1<<w,w=s[w],w>f&&(f=w),h&=~g}if(h=f,h=Ke()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*qI(h/1960))-h,10<h){i.timeoutHandle=dd(Ts.bind(null,i,on,Hr),h);break}Ts(i,on,Hr);break;case 5:Ts(i,on,Hr);break;default:throw Error(t(329))}}}return an(i,Ke()),i.callbackNode===l?vy.bind(null,i):null}function af(i,s){var l=ol;return i.current.memoizedState.isDehydrated&&(Es(i,s).flags|=256),i=lc(i,s),i!==2&&(s=on,on=l,s!==null&&lf(s)),i}function lf(i){on===null?on=i:on.push.apply(on,i)}function WI(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var f=l[h],g=f.getSnapshot;f=f.value;try{if(!Gn(g(),f))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ei(i,s){for(s&=~nf,s&=~nc,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-Qt(s),h=1<<l;i[l]=-1,s&=~h}}function wy(i){if((Me&6)!==0)throw Error(t(327));Fo();var s=os(i,0);if((s&1)===0)return an(i,Ke()),null;var l=lc(i,s);if(i.tag!==0&&l===2){var h=gn(i);h!==0&&(s=h,l=af(i,h))}if(l===1)throw l=sl,Es(i,0),Ei(i,s),an(i,Ke()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Ts(i,on,Hr),an(i,Ke()),null}function uf(i,s){var l=Me;Me|=1;try{return i(s)}finally{Me=l,Me===0&&(Uo=Ke()+500,Lu&&pi())}}function ws(i){vi!==null&&vi.tag===0&&(Me&6)===0&&Fo();var s=Me;Me|=1;var l=bn.transition,h=Oe;try{if(bn.transition=null,Oe=1,i)return i()}finally{Oe=h,bn.transition=l,Me=s,(Me&6)===0&&pi()}}function cf(){En=Mo.current,Xe(Mo)}function Es(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,TI(l)),pt!==null)for(l=pt.return;l!==null;){var h=l;switch(_d(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Ou();break;case 3:Do(),Xe(nn),Xe(jt),xd();break;case 5:kd(h);break;case 4:Do();break;case 13:Xe(rt);break;case 19:Xe(rt);break;case 10:Sd(h.type._context);break;case 22:case 23:cf()}l=l.return}if(kt=i,pt=i=Ti(i.current,null),Lt=En=s,Tt=0,sl=null,nf=nc=vs=0,on=ol=null,gs!==null){for(s=0;s<gs.length;s++)if(l=gs[s],h=l.interleaved,h!==null){l.interleaved=null;var f=h.next,g=l.pending;if(g!==null){var w=g.next;g.next=f,h.next=w}l.pending=h}gs=null}return i}function Ey(i,s){do{var l=pt;try{if(Id(),qu.current=Qu,Wu){for(var h=it.memoizedState;h!==null;){var f=h.queue;f!==null&&(f.pending=null),h=h.next}Wu=!1}if(_s=0,Pt=Et=it=null,Za=!1,el=0,tf.current=null,l===null||l.return===null){Tt=1,sl=s,pt=null;break}e:{var g=i,w=l.return,R=l,N=s;if(s=Lt,R.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var $=N,Z=R,ee=Z.tag;if((Z.mode&1)===0&&(ee===0||ee===11||ee===15)){var Q=Z.alternate;Q?(Z.updateQueue=Q.updateQueue,Z.memoizedState=Q.memoizedState,Z.lanes=Q.lanes):(Z.updateQueue=null,Z.memoizedState=null)}var ae=Wg(w);if(ae!==null){ae.flags&=-257,Gg(ae,w,R,g,s),ae.mode&1&&qg(g,$,s),s=ae,N=$;var ce=s.updateQueue;if(ce===null){var he=new Set;he.add(N),s.updateQueue=he}else ce.add(N);break e}else{if((s&1)===0){qg(g,$,s),hf();break e}N=Error(t(426))}}else if(nt&&R.mode&1){var ct=Wg(w);if(ct!==null){(ct.flags&65536)===0&&(ct.flags|=256),Gg(ct,w,R,g,s),Ed(Lo(N,R));break e}}g=N=Lo(N,R),Tt!==4&&(Tt=2),ol===null?ol=[g]:ol.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var j=$g(g,N,s);gg(g,j);break e;case 1:R=N;var O=g.type,B=g.stateNode;if((g.flags&128)===0&&(typeof O.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(_i===null||!_i.has(B)))){g.flags|=65536,s&=-s,g.lanes|=s;var re=Hg(g,R,s);gg(g,re);break e}}g=g.return}while(g!==null)}Sy(l)}catch(fe){s=fe,pt===l&&l!==null&&(pt=l=l.return);continue}break}while(!0)}function Ty(){var i=tc.current;return tc.current=Qu,i===null?Qu:i}function hf(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),kt===null||(vs&268435455)===0&&(nc&268435455)===0||Ei(kt,Lt)}function lc(i,s){var l=Me;Me|=2;var h=Ty();(kt!==i||Lt!==s)&&(Hr=null,Es(i,s));do try{GI();break}catch(f){Ey(i,f)}while(!0);if(Id(),Me=l,tc.current=h,pt!==null)throw Error(t(261));return kt=null,Lt=0,Tt}function GI(){for(;pt!==null;)Iy(pt)}function KI(){for(;pt!==null&&!su();)Iy(pt)}function Iy(i){var s=Cy(i.alternate,i,En);i.memoizedProps=i.pendingProps,s===null?Sy(i):pt=s,tf.current=null}function Sy(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=jI(l,s,En),l!==null){pt=l;return}}else{if(l=BI(l,s),l!==null){l.flags&=32767,pt=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Tt=6,pt=null;return}}if(s=s.sibling,s!==null){pt=s;return}pt=s=i}while(s!==null);Tt===0&&(Tt=5)}function Ts(i,s,l){var h=Oe,f=bn.transition;try{bn.transition=null,Oe=1,QI(i,s,l,h)}finally{bn.transition=f,Oe=h}return null}function QI(i,s,l,h){do Fo();while(vi!==null);if((Me&6)!==0)throw Error(t(327));l=i.finishedWork;var f=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var g=l.lanes|l.childLanes;if(We(i,g),i===kt&&(pt=kt=null,Lt=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||ic||(ic=!0,Py(Rn,function(){return Fo(),null})),g=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||g){g=bn.transition,bn.transition=null;var w=Oe;Oe=1;var R=Me;Me|=4,tf.current=null,$I(i,l),py(l,i),mI(cd),li=!!ud,cd=ud=null,i.current=l,HI(l),Gh(),Me=R,Oe=w,bn.transition=g}else i.current=l;if(ic&&(ic=!1,vi=i,sc=f),g=i.pendingLanes,g===0&&(_i=null),lu(l.stateNode),an(i,Ke()),s!==null)for(h=i.onRecoverableError,l=0;l<s.length;l++)f=s[l],h(f.value,{componentStack:f.stack,digest:f.digest});if(rc)throw rc=!1,i=sf,sf=null,i;return(sc&1)!==0&&i.tag!==0&&Fo(),g=i.pendingLanes,(g&1)!==0?i===of?al++:(al=0,of=i):al=0,pi(),null}function Fo(){if(vi!==null){var i=oi(sc),s=bn.transition,l=Oe;try{if(bn.transition=null,Oe=16>i?16:i,vi===null)var h=!1;else{if(i=vi,vi=null,sc=0,(Me&6)!==0)throw Error(t(331));var f=Me;for(Me|=4,ue=i.current;ue!==null;){var g=ue,w=g.child;if((ue.flags&16)!==0){var R=g.deletions;if(R!==null){for(var N=0;N<R.length;N++){var $=R[N];for(ue=$;ue!==null;){var Z=ue;switch(Z.tag){case 0:case 11:case 15:il(8,Z,g)}var ee=Z.child;if(ee!==null)ee.return=Z,ue=ee;else for(;ue!==null;){Z=ue;var Q=Z.sibling,ae=Z.return;if(uy(Z),Z===$){ue=null;break}if(Q!==null){Q.return=ae,ue=Q;break}ue=ae}}}var ce=g.alternate;if(ce!==null){var he=ce.child;if(he!==null){ce.child=null;do{var ct=he.sibling;he.sibling=null,he=ct}while(he!==null)}}ue=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,ue=w;else e:for(;ue!==null;){if(g=ue,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:il(9,g,g.return)}var j=g.sibling;if(j!==null){j.return=g.return,ue=j;break e}ue=g.return}}var O=i.current;for(ue=O;ue!==null;){w=ue;var B=w.child;if((w.subtreeFlags&2064)!==0&&B!==null)B.return=w,ue=B;else e:for(w=O;ue!==null;){if(R=ue,(R.flags&2048)!==0)try{switch(R.tag){case 0:case 11:case 15:ec(9,R)}}catch(fe){at(R,R.return,fe)}if(R===w){ue=null;break e}var re=R.sibling;if(re!==null){re.return=R.return,ue=re;break e}ue=R.return}}if(Me=f,pi(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(ss,i)}catch{}h=!0}return h}finally{Oe=l,bn.transition=s}}return!1}function Ry(i,s,l){s=Lo(l,s),s=$g(i,s,1),i=gi(i,s,1),s=Yt(),i!==null&&(ii(i,1,s),an(i,s))}function at(i,s,l){if(i.tag===3)Ry(i,i,l);else for(;s!==null;){if(s.tag===3){Ry(s,i,l);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(_i===null||!_i.has(h))){i=Lo(l,i),i=Hg(s,i,1),s=gi(s,i,1),i=Yt(),s!==null&&(ii(s,1,i),an(s,i));break}}s=s.return}}function JI(i,s,l){var h=i.pingCache;h!==null&&h.delete(s),s=Yt(),i.pingedLanes|=i.suspendedLanes&l,kt===i&&(Lt&l)===l&&(Tt===4||Tt===3&&(Lt&130023424)===Lt&&500>Ke()-rf?Es(i,0):nf|=l),an(i,s)}function Ay(i,s){s===0&&((i.mode&1)===0?s=1:(s=ao,ao<<=1,(ao&130023424)===0&&(ao=4194304)));var l=Yt();i=Br(i,s),i!==null&&(ii(i,s,l),an(i,l))}function XI(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),Ay(i,l)}function YI(i,s){var l=0;switch(i.tag){case 13:var h=i.stateNode,f=i.memoizedState;f!==null&&(l=f.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),Ay(i,l)}var Cy;Cy=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||nn.current)sn=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return sn=!1,FI(i,s,l);sn=(i.flags&131072)!==0}else sn=!1,nt&&(s.flags&1048576)!==0&&og(s,Mu,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Yu(i,s),i=s.pendingProps;var f=Co(s,jt.current);Oo(s,l),f=Dd(null,s,h,i,f,l);var g=Ld();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,rn(h)?(g=!0,Du(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Cd(s),f.updater=Ju,s.stateNode=f,f._reactInternals=s,Bd(s,h,i,l),s=qd(null,s,h,!0,g,l)):(s.tag=0,nt&&g&&yd(s),Xt(null,s,f,l),s=s.child),s;case 16:h=s.elementType;e:{switch(Yu(i,s),i=s.pendingProps,f=h._init,h=f(h._payload),s.type=h,f=s.tag=eS(h),i=Qn(h,i),f){case 0:s=Hd(null,s,h,i,l);break e;case 1:s=Zg(null,s,h,i,l);break e;case 11:s=Kg(null,s,h,i,l);break e;case 14:s=Qg(null,s,h,Qn(h.type,i),l);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Qn(h,f),Hd(i,s,h,f,l);case 1:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Qn(h,f),Zg(i,s,h,f,l);case 3:e:{if(ey(s),i===null)throw Error(t(387));h=s.pendingProps,g=s.memoizedState,f=g.element,mg(i,s),$u(s,h,null,l);var w=s.memoizedState;if(h=w.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=Lo(Error(t(423)),s),s=ty(i,s,h,l,f);break e}else if(h!==f){f=Lo(Error(t(424)),s),s=ty(i,s,h,l,f);break e}else for(wn=hi(s.stateNode.containerInfo.firstChild),vn=s,nt=!0,Kn=null,l=fg(s,null,h,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(No(),h===f){s=$r(i,s,l);break e}Xt(i,s,h,l)}s=s.child}return s;case 5:return _g(s),i===null&&wd(s),h=s.type,f=s.pendingProps,g=i!==null?i.memoizedProps:null,w=f.children,hd(h,f)?w=null:g!==null&&hd(h,g)&&(s.flags|=32),Yg(i,s),Xt(i,s,w,l),s.child;case 6:return i===null&&wd(s),null;case 13:return ny(i,s,l);case 4:return Pd(s,s.stateNode.containerInfo),h=s.pendingProps,i===null?s.child=xo(s,null,h,l):Xt(i,s,h,l),s.child;case 11:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Qn(h,f),Kg(i,s,h,f,l);case 7:return Xt(i,s,s.pendingProps,l),s.child;case 8:return Xt(i,s,s.pendingProps.children,l),s.child;case 12:return Xt(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(h=s.type._context,f=s.pendingProps,g=s.memoizedProps,w=f.value,Qe(ju,h._currentValue),h._currentValue=w,g!==null)if(Gn(g.value,w)){if(g.children===f.children&&!nn.current){s=$r(i,s,l);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var R=g.dependencies;if(R!==null){w=g.child;for(var N=R.firstContext;N!==null;){if(N.context===h){if(g.tag===1){N=zr(-1,l&-l),N.tag=2;var $=g.updateQueue;if($!==null){$=$.shared;var Z=$.pending;Z===null?N.next=N:(N.next=Z.next,Z.next=N),$.pending=N}}g.lanes|=l,N=g.alternate,N!==null&&(N.lanes|=l),Rd(g.return,l,s),R.lanes|=l;break}N=N.next}}else if(g.tag===10)w=g.type===s.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=l,R=w.alternate,R!==null&&(R.lanes|=l),Rd(w,l,s),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===s){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Xt(i,s,f.children,l),s=s.child}return s;case 9:return f=s.type,h=s.pendingProps.children,Oo(s,l),f=Nn(f),h=h(f),s.flags|=1,Xt(i,s,h,l),s.child;case 14:return h=s.type,f=Qn(h,s.pendingProps),f=Qn(h.type,f),Qg(i,s,h,f,l);case 15:return Jg(i,s,s.type,s.pendingProps,l);case 17:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Qn(h,f),Yu(i,s),s.tag=1,rn(h)?(i=!0,Du(s)):i=!1,Oo(s,l),Bg(s,h,f),Bd(s,h,f,l),qd(null,s,h,!0,i,l);case 19:return iy(i,s,l);case 22:return Xg(i,s,l)}throw Error(t(156,s.tag))};function Py(i,s){return so(i,s)}function ZI(i,s,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(i,s,l,h){return new ZI(i,s,l,h)}function df(i){return i=i.prototype,!(!i||!i.isReactComponent)}function eS(i){if(typeof i=="function")return df(i)?1:0;if(i!=null){if(i=i.$$typeof,i===U)return 11;if(i===yt)return 14}return 2}function Ti(i,s){var l=i.alternate;return l===null?(l=On(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function uc(i,s,l,h,f,g){var w=2;if(h=i,typeof i=="function")df(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case x:return Is(l.children,f,g,s);case S:w=8,f|=8;break;case k:return i=On(12,l,s,f|2),i.elementType=k,i.lanes=g,i;case C:return i=On(13,l,s,f),i.elementType=C,i.lanes=g,i;case $e:return i=On(19,l,s,f),i.elementType=$e,i.lanes=g,i;case Fe:return cc(l,f,g,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case b:w=10;break e;case D:w=9;break e;case U:w=11;break e;case yt:w=14;break e;case qe:w=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=On(w,l,s,f),s.elementType=i,s.type=h,s.lanes=g,s}function Is(i,s,l,h){return i=On(7,i,h,s),i.lanes=l,i}function cc(i,s,l,h){return i=On(22,i,h,s),i.elementType=Fe,i.lanes=l,i.stateNode={isHidden:!1},i}function ff(i,s,l){return i=On(6,i,null,s),i.lanes=l,i}function pf(i,s,l){return s=On(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function tS(i,s,l,h,f){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ri(0),this.expirationTimes=ri(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ri(0),this.identifierPrefix=h,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function mf(i,s,l,h,f,g,w,R,N){return i=new tS(i,s,l,R,N),s===1?(s=1,g===!0&&(s|=8)):s=0,g=On(3,null,null,s),i.current=g,g.stateNode=i,g.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cd(g),i}function nS(i,s,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:me,key:h==null?null:""+h,children:i,containerInfo:s,implementation:l}}function ky(i){if(!i)return fi;i=i._reactInternals;e:{if(jn(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(rn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(rn(l))return rg(i,l,s)}return s}function Ny(i,s,l,h,f,g,w,R,N){return i=mf(l,h,!0,i,f,g,w,R,N),i.context=ky(null),l=i.current,h=Yt(),f=wi(l),g=zr(h,f),g.callback=s??null,gi(l,g,f),i.current.lanes=f,ii(i,f,h),an(i,h),i}function hc(i,s,l,h){var f=s.current,g=Yt(),w=wi(f);return l=ky(l),s.context===null?s.context=l:s.pendingContext=l,s=zr(g,w),s.payload={element:i},h=h===void 0?null:h,h!==null&&(s.callback=h),i=gi(f,s,w),i!==null&&(Yn(i,f,w,g),zu(i,f,w)),w}function dc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function xy(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function gf(i,s){xy(i,s),(i=i.alternate)&&xy(i,s)}function rS(){return null}var by=typeof reportError=="function"?reportError:function(i){console.error(i)};function yf(i){this._internalRoot=i}fc.prototype.render=yf.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));hc(i,s,null,null)},fc.prototype.unmount=yf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;ws(function(){hc(null,i,null,null)}),s[Mr]=null}};function fc(i){this._internalRoot=i}fc.prototype.unstable_scheduleHydration=function(i){if(i){var s=fu();i={blockedOn:null,target:i,priority:s};for(var l=0;l<ar.length&&s!==0&&s<ar[l].priority;l++);ar.splice(l,0,i),l===0&&gu(i)}};function _f(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function pc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Oy(){}function iS(i,s,l,h,f){if(f){if(typeof h=="function"){var g=h;h=function(){var $=dc(w);g.call($)}}var w=Ny(s,h,i,0,null,!1,!1,"",Oy);return i._reactRootContainer=w,i[Mr]=w.current,qa(i.nodeType===8?i.parentNode:i),ws(),w}for(;f=i.lastChild;)i.removeChild(f);if(typeof h=="function"){var R=h;h=function(){var $=dc(N);R.call($)}}var N=mf(i,0,!1,null,null,!1,!1,"",Oy);return i._reactRootContainer=N,i[Mr]=N.current,qa(i.nodeType===8?i.parentNode:i),ws(function(){hc(s,N,l,h)}),N}function mc(i,s,l,h,f){var g=l._reactRootContainer;if(g){var w=g;if(typeof f=="function"){var R=f;f=function(){var N=dc(w);R.call(N)}}hc(s,w,i,f)}else w=iS(l,s,i,f,h);return dc(w)}hu=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=ni(s.pendingLanes);l!==0&&(si(s,l|1),an(s,Ke()),(Me&6)===0&&(Uo=Ke()+500,pi()))}break;case 13:ws(function(){var h=Br(i,1);if(h!==null){var f=Yt();Yn(h,i,1,f)}}),gf(i,1)}},lo=function(i){if(i.tag===13){var s=Br(i,134217728);if(s!==null){var l=Yt();Yn(s,i,134217728,l)}gf(i,134217728)}},du=function(i){if(i.tag===13){var s=wi(i),l=Br(i,s);if(l!==null){var h=Yt();Yn(l,i,s,h)}gf(i,s)}},fu=function(){return Oe},pu=function(i,s){var l=Oe;try{return Oe=i,s()}finally{Oe=l}},Zs=function(i,s,l){switch(s){case"input":if(ga(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var h=l[s];if(h!==i&&h.form===i.form){var f=bu(h);if(!f)throw Error(t(90));Gs(h),ga(h,f)}}}break;case"textarea":Xs(i,l);break;case"select":s=l.value,s!=null&&kr(i,!!l.multiple,s,!1)}},es=uf,Aa=ws;var sS={usingClientEntryPoint:!1,Events:[Ka,Ro,bu,sr,Ra,uf]},ll={findFiberByHostInstance:ds,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oS={bundleType:ll.bundleType,version:ll.version,rendererPackageName:ll.rendererPackageName,rendererConfig:ll.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:te.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=ka(i),i===null?null:i.stateNode},findFiberByHostInstance:ll.findFiberByHostInstance||rS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{ss=gc.inject(oS),mn=gc}catch{}}return ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sS,ln.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_f(s))throw Error(t(200));return nS(i,s,null,l)},ln.createRoot=function(i,s){if(!_f(i))throw Error(t(299));var l=!1,h="",f=by;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=mf(i,1,!1,null,null,l,!1,h,f),i[Mr]=s.current,qa(i.nodeType===8?i.parentNode:i),new yf(s)},ln.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=ka(s),i=i===null?null:i.stateNode,i},ln.flushSync=function(i){return ws(i)},ln.hydrate=function(i,s,l){if(!pc(s))throw Error(t(200));return mc(null,i,s,!0,l)},ln.hydrateRoot=function(i,s,l){if(!_f(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,f=!1,g="",w=by;if(l!=null&&(l.unstable_strictMode===!0&&(f=!0),l.identifierPrefix!==void 0&&(g=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),s=Ny(s,null,i,1,l??null,f,!1,g,w),i[Mr]=s.current,qa(i),h)for(i=0;i<h.length;i++)l=h[i],f=l._getVersion,f=f(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,f]:s.mutableSourceEagerHydrationData.push(l,f);return new fc(s)},ln.render=function(i,s,l){if(!pc(s))throw Error(t(200));return mc(null,i,s,!1,l)},ln.unmountComponentAtNode=function(i){if(!pc(i))throw Error(t(40));return i._reactRootContainer?(ws(function(){mc(null,null,i,!1,function(){i._reactRootContainer=null,i[Mr]=null})}),!0):!1},ln.unstable_batchedUpdates=uf,ln.unstable_renderSubtreeIntoContainer=function(i,s,l,h){if(!pc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return mc(i,s,l,!1,h)},ln.version="18.3.1-next-f1338f8080-20240426",ln}var By;function nw(){if(By)return Ef.exports;By=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Ef.exports=gS(),Ef.exports}var zy;function yS(){if(zy)return yc;zy=1;var n=nw();return yc.createRoot=n.createRoot,yc.hydrateRoot=n.hydrateRoot,yc}var _S=yS();nw();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pl(){return Pl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Pl.apply(this,arguments)}var Ni;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Ni||(Ni={}));const $y="popstate";function vS(n){n===void 0&&(n={});function e(r,o){let{pathname:a,search:u,hash:d}=r.location;return qf("",{pathname:a,search:u,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(r,o){return typeof o=="string"?o:Bc(o)}return ES(e,t,null,n)}function lt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function rw(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function wS(){return Math.random().toString(36).substr(2,8)}function Hy(n,e){return{usr:n.state,key:n.key,idx:e}}function qf(n,e,t,r){return t===void 0&&(t=null),Pl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?oa(e):e,{state:t,key:e&&e.key||r||wS()})}function Bc(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function oa(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function ES(n,e,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:a=!1}=r,u=o.history,d=Ni.Pop,p=null,y=v();y==null&&(y=0,u.replaceState(Pl({},u.state,{idx:y}),""));function v(){return(u.state||{idx:null}).idx}function E(){d=Ni.Pop;let A=v(),X=A==null?null:A-y;y=A,p&&p({action:d,location:V.location,delta:X})}function I(A,X){d=Ni.Push;let Y=qf(V.location,A,X);y=v()+1;let K=Hy(Y,y),te=V.createHref(Y);try{u.pushState(K,"",te)}catch(_e){if(_e instanceof DOMException&&_e.name==="DataCloneError")throw _e;o.location.assign(te)}a&&p&&p({action:d,location:V.location,delta:1})}function L(A,X){d=Ni.Replace;let Y=qf(V.location,A,X);y=v();let K=Hy(Y,y),te=V.createHref(Y);u.replaceState(K,"",te),a&&p&&p({action:d,location:V.location,delta:0})}function P(A){let X=o.location.origin!=="null"?o.location.origin:o.location.href,Y=typeof A=="string"?A:Bc(A);return Y=Y.replace(/ $/,"%20"),lt(X,"No window.location.(origin|href) available to create URL for href: "+Y),new URL(Y,X)}let V={get action(){return d},get location(){return n(o,u)},listen(A){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener($y,E),p=A,()=>{o.removeEventListener($y,E),p=null}},createHref(A){return e(o,A)},createURL:P,encodeLocation(A){let X=P(A);return{pathname:X.pathname,search:X.search,hash:X.hash}},push:I,replace:L,go(A){return u.go(A)}};return V}var qy;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(qy||(qy={}));function TS(n,e,t){return t===void 0&&(t="/"),IS(n,e,t)}function IS(n,e,t,r){let o=typeof e=="string"?oa(e):e,a=Xo(o.pathname||"/",t);if(a==null)return null;let u=iw(n);SS(u);let d=null;for(let p=0;d==null&&p<u.length;++p){let y=LS(a);d=OS(u[p],y)}return d}function iw(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(a,u,d)=>{let p={relativePath:d===void 0?a.path||"":d,caseSensitive:a.caseSensitive===!0,childrenIndex:u,route:a};p.relativePath.startsWith("/")&&(lt(p.relativePath.startsWith(r),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(r.length));let y=Oi([r,p.relativePath]),v=t.concat(p);a.children&&a.children.length>0&&(lt(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),iw(a.children,e,v,y)),!(a.path==null&&!a.index)&&e.push({path:y,score:xS(y,a.index),routesMeta:v})};return n.forEach((a,u)=>{var d;if(a.path===""||!((d=a.path)!=null&&d.includes("?")))o(a,u);else for(let p of sw(a.path))o(a,u,p)}),e}function sw(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let u=sw(r.join("/")),d=[];return d.push(...u.map(p=>p===""?a:[a,p].join("/"))),o&&d.push(...u),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function SS(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:bS(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const RS=/^:[\w-]+$/,AS=3,CS=2,PS=1,kS=10,NS=-2,Wy=n=>n==="*";function xS(n,e){let t=n.split("/"),r=t.length;return t.some(Wy)&&(r+=NS),e&&(r+=CS),t.filter(o=>!Wy(o)).reduce((o,a)=>o+(RS.test(a)?AS:a===""?PS:kS),r)}function bS(n,e){return n.length===e.length&&n.slice(0,-1).every((r,o)=>r===e[o])?n[n.length-1]-e[e.length-1]:0}function OS(n,e,t){let{routesMeta:r}=n,o={},a="/",u=[];for(let d=0;d<r.length;++d){let p=r[d],y=d===r.length-1,v=a==="/"?e:e.slice(a.length)||"/",E=Wf({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},v),I=p.route;if(!E)return null;Object.assign(o,E.params),u.push({params:o,pathname:Oi([a,E.pathname]),pathnameBase:FS(Oi([a,E.pathnameBase])),route:I}),E.pathnameBase!=="/"&&(a=Oi([a,E.pathnameBase]))}return u}function Wf(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=DS(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let a=o[0],u=a.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:r.reduce((y,v,E)=>{let{paramName:I,isOptional:L}=v;if(I==="*"){let V=d[E]||"";u=a.slice(0,a.length-V.length).replace(/(.)\/+$/,"$1")}const P=d[E];return L&&!P?y[I]=void 0:y[I]=(P||"").replace(/%2F/g,"/"),y},{}),pathname:a,pathnameBase:u,pattern:n}}function DS(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),rw(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,p)=>(r.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function LS(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return rw(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Xo(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function VS(n,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:o=""}=typeof n=="string"?oa(n):n;return{pathname:t?t.startsWith("/")?t:MS(t,e):e,search:jS(r),hash:BS(o)}}function MS(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Sf(n,e,t,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function US(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function ow(n,e){let t=US(n);return e?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function aw(n,e,t,r){r===void 0&&(r=!1);let o;typeof n=="string"?o=oa(n):(o=Pl({},n),lt(!o.pathname||!o.pathname.includes("?"),Sf("?","pathname","search",o)),lt(!o.pathname||!o.pathname.includes("#"),Sf("#","pathname","hash",o)),lt(!o.search||!o.search.includes("#"),Sf("#","search","hash",o)));let a=n===""||o.pathname==="",u=a?"/":o.pathname,d;if(u==null)d=t;else{let E=e.length-1;if(!r&&u.startsWith("..")){let I=u.split("/");for(;I[0]==="..";)I.shift(),E-=1;o.pathname=I.join("/")}d=E>=0?e[E]:"/"}let p=VS(o,d),y=u&&u!=="/"&&u.endsWith("/"),v=(a||u===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||v)&&(p.pathname+="/"),p}const Oi=n=>n.join("/").replace(/\/\/+/g,"/"),FS=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),jS=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,BS=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function zS(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const lw=["post","put","patch","delete"];new Set(lw);const $S=["get",...lw];new Set($S);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kl(){return kl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},kl.apply(this,arguments)}const mh=ne.createContext(null),uw=ne.createContext(null),Gi=ne.createContext(null),gh=ne.createContext(null),js=ne.createContext({outlet:null,matches:[],isDataRoute:!1}),cw=ne.createContext(null);function HS(n,e){let{relative:t}=e===void 0?{}:e;Ul()||lt(!1);let{basename:r,navigator:o}=ne.useContext(Gi),{hash:a,pathname:u,search:d}=yh(n,{relative:t}),p=u;return r!=="/"&&(p=u==="/"?r:Oi([r,u])),o.createHref({pathname:p,search:d,hash:a})}function Ul(){return ne.useContext(gh)!=null}function Fl(){return Ul()||lt(!1),ne.useContext(gh).location}function hw(n){ne.useContext(Gi).static||ne.useLayoutEffect(n)}function qS(){let{isDataRoute:n}=ne.useContext(js);return n?iR():WS()}function WS(){Ul()||lt(!1);let n=ne.useContext(mh),{basename:e,future:t,navigator:r}=ne.useContext(Gi),{matches:o}=ne.useContext(js),{pathname:a}=Fl(),u=JSON.stringify(ow(o,t.v7_relativeSplatPath)),d=ne.useRef(!1);return hw(()=>{d.current=!0}),ne.useCallback(function(y,v){if(v===void 0&&(v={}),!d.current)return;if(typeof y=="number"){r.go(y);return}let E=aw(y,JSON.parse(u),a,v.relative==="path");n==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Oi([e,E.pathname])),(v.replace?r.replace:r.push)(E,v.state,v)},[e,r,u,a,n])}function yh(n,e){let{relative:t}=e===void 0?{}:e,{future:r}=ne.useContext(Gi),{matches:o}=ne.useContext(js),{pathname:a}=Fl(),u=JSON.stringify(ow(o,r.v7_relativeSplatPath));return ne.useMemo(()=>aw(n,JSON.parse(u),a,t==="path"),[n,u,a,t])}function GS(n,e){return KS(n,e)}function KS(n,e,t,r){Ul()||lt(!1);let{navigator:o}=ne.useContext(Gi),{matches:a}=ne.useContext(js),u=a[a.length-1],d=u?u.params:{};u&&u.pathname;let p=u?u.pathnameBase:"/";u&&u.route;let y=Fl(),v;if(e){var E;let A=typeof e=="string"?oa(e):e;p==="/"||(E=A.pathname)!=null&&E.startsWith(p)||lt(!1),v=A}else v=y;let I=v.pathname||"/",L=I;if(p!=="/"){let A=p.replace(/^\//,"").split("/");L="/"+I.replace(/^\//,"").split("/").slice(A.length).join("/")}let P=TS(n,{pathname:L}),V=ZS(P&&P.map(A=>Object.assign({},A,{params:Object.assign({},d,A.params),pathname:Oi([p,o.encodeLocation?o.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?p:Oi([p,o.encodeLocation?o.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),a,t,r);return e&&V?ne.createElement(gh.Provider,{value:{location:kl({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:Ni.Pop}},V):V}function QS(){let n=rR(),e=zS(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ne.createElement(ne.Fragment,null,ne.createElement("h2",null,"Unexpected Application Error!"),ne.createElement("h3",{style:{fontStyle:"italic"}},e),t?ne.createElement("pre",{style:o},t):null,null)}const JS=ne.createElement(QS,null);class XS extends ne.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?ne.createElement(js.Provider,{value:this.props.routeContext},ne.createElement(cw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function YS(n){let{routeContext:e,match:t,children:r}=n,o=ne.useContext(mh);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),ne.createElement(js.Provider,{value:e},r)}function ZS(n,e,t,r){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),n==null){var a;if(!t)return null;if(t.errors)n=t.matches;else if((a=r)!=null&&a.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let u=n,d=(o=t)==null?void 0:o.errors;if(d!=null){let v=u.findIndex(E=>E.route.id&&d?.[E.route.id]!==void 0);v>=0||lt(!1),u=u.slice(0,Math.min(u.length,v+1))}let p=!1,y=-1;if(t&&r&&r.v7_partialHydration)for(let v=0;v<u.length;v++){let E=u[v];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(y=v),E.route.id){let{loaderData:I,errors:L}=t,P=E.route.loader&&I[E.route.id]===void 0&&(!L||L[E.route.id]===void 0);if(E.route.lazy||P){p=!0,y>=0?u=u.slice(0,y+1):u=[u[0]];break}}}return u.reduceRight((v,E,I)=>{let L,P=!1,V=null,A=null;t&&(L=d&&E.route.id?d[E.route.id]:void 0,V=E.route.errorElement||JS,p&&(y<0&&I===0?(sR("route-fallback"),P=!0,A=null):y===I&&(P=!0,A=E.route.hydrateFallbackElement||null)));let X=e.concat(u.slice(0,I+1)),Y=()=>{let K;return L?K=V:P?K=A:E.route.Component?K=ne.createElement(E.route.Component,null):E.route.element?K=E.route.element:K=v,ne.createElement(YS,{match:E,routeContext:{outlet:v,matches:X,isDataRoute:t!=null},children:K})};return t&&(E.route.ErrorBoundary||E.route.errorElement||I===0)?ne.createElement(XS,{location:t.location,revalidation:t.revalidation,component:V,error:L,children:Y(),routeContext:{outlet:null,matches:X,isDataRoute:!0}}):Y()},null)}var dw=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(dw||{}),fw=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(fw||{});function eR(n){let e=ne.useContext(mh);return e||lt(!1),e}function tR(n){let e=ne.useContext(uw);return e||lt(!1),e}function nR(n){let e=ne.useContext(js);return e||lt(!1),e}function pw(n){let e=nR(),t=e.matches[e.matches.length-1];return t.route.id||lt(!1),t.route.id}function rR(){var n;let e=ne.useContext(cw),t=tR(),r=pw();return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function iR(){let{router:n}=eR(dw.UseNavigateStable),e=pw(fw.UseNavigateStable),t=ne.useRef(!1);return hw(()=>{t.current=!0}),ne.useCallback(function(o,a){a===void 0&&(a={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,kl({fromRouteId:e},a)))},[n,e])}const Gy={};function sR(n,e,t){Gy[n]||(Gy[n]=!0)}function oR(n,e){n?.v7_startTransition,n?.v7_relativeSplatPath}function Ss(n){lt(!1)}function aR(n){let{basename:e="/",children:t=null,location:r,navigationType:o=Ni.Pop,navigator:a,static:u=!1,future:d}=n;Ul()&&lt(!1);let p=e.replace(/^\/*/,"/"),y=ne.useMemo(()=>({basename:p,navigator:a,static:u,future:kl({v7_relativeSplatPath:!1},d)}),[p,d,a,u]);typeof r=="string"&&(r=oa(r));let{pathname:v="/",search:E="",hash:I="",state:L=null,key:P="default"}=r,V=ne.useMemo(()=>{let A=Xo(v,p);return A==null?null:{location:{pathname:A,search:E,hash:I,state:L,key:P},navigationType:o}},[p,v,E,I,L,P,o]);return V==null?null:ne.createElement(Gi.Provider,{value:y},ne.createElement(gh.Provider,{children:t,value:V}))}function lR(n){let{children:e,location:t}=n;return GS(Gf(e),t)}new Promise(()=>{});function Gf(n,e){e===void 0&&(e=[]);let t=[];return ne.Children.forEach(n,(r,o)=>{if(!ne.isValidElement(r))return;let a=[...e,o];if(r.type===ne.Fragment){t.push.apply(t,Gf(r.props.children,a));return}r.type!==Ss&&lt(!1),!r.props.index||!r.props.children||lt(!1);let u={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=Gf(r.props.children,a)),t.push(u)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zc(){return zc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},zc.apply(this,arguments)}function mw(n,e){if(n==null)return{};var t={},r=Object.keys(n),o,a;for(a=0;a<r.length;a++)o=r[a],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function uR(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function cR(n,e){return n.button===0&&(!e||e==="_self")&&!uR(n)}const hR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],dR=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],fR="6";try{window.__reactRouterVersion=fR}catch{}const pR=ne.createContext({isTransitioning:!1}),mR="startTransition",Ky=fS[mR];function gR(n){let{basename:e,children:t,future:r,window:o}=n,a=ne.useRef();a.current==null&&(a.current=vS({window:o,v5Compat:!0}));let u=a.current,[d,p]=ne.useState({action:u.action,location:u.location}),{v7_startTransition:y}=r||{},v=ne.useCallback(E=>{y&&Ky?Ky(()=>p(E)):p(E)},[p,y]);return ne.useLayoutEffect(()=>u.listen(v),[u,v]),ne.useEffect(()=>oR(r),[r]),ne.createElement(aR,{basename:e,children:t,location:d.location,navigationType:d.action,navigator:u,future:r})}const yR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_R=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fl=ne.forwardRef(function(e,t){let{onClick:r,relative:o,reloadDocument:a,replace:u,state:d,target:p,to:y,preventScrollReset:v,viewTransition:E}=e,I=mw(e,hR),{basename:L}=ne.useContext(Gi),P,V=!1;if(typeof y=="string"&&_R.test(y)&&(P=y,yR))try{let K=new URL(window.location.href),te=y.startsWith("//")?new URL(K.protocol+y):new URL(y),_e=Xo(te.pathname,L);te.origin===K.origin&&_e!=null?y=_e+te.search+te.hash:V=!0}catch{}let A=HS(y,{relative:o}),X=ER(y,{replace:u,state:d,target:p,preventScrollReset:v,relative:o,viewTransition:E});function Y(K){r&&r(K),K.defaultPrevented||X(K)}return ne.createElement("a",zc({},I,{href:P||A,onClick:V||a?r:Y,ref:t,target:p}))}),vR=ne.forwardRef(function(e,t){let{"aria-current":r="page",caseSensitive:o=!1,className:a="",end:u=!1,style:d,to:p,viewTransition:y,children:v}=e,E=mw(e,dR),I=yh(p,{relative:E.relative}),L=Fl(),P=ne.useContext(uw),{navigator:V,basename:A}=ne.useContext(Gi),X=P!=null&&TR(I)&&y===!0,Y=V.encodeLocation?V.encodeLocation(I).pathname:I.pathname,K=L.pathname,te=P&&P.navigation&&P.navigation.location?P.navigation.location.pathname:null;o||(K=K.toLowerCase(),te=te?te.toLowerCase():null,Y=Y.toLowerCase()),te&&A&&(te=Xo(te,A)||te);const _e=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let me=K===Y||!u&&K.startsWith(Y)&&K.charAt(_e)==="/",x=te!=null&&(te===Y||!u&&te.startsWith(Y)&&te.charAt(Y.length)==="/"),S={isActive:me,isPending:x,isTransitioning:X},k=me?r:void 0,b;typeof a=="function"?b=a(S):b=[a,me?"active":null,x?"pending":null,X?"transitioning":null].filter(Boolean).join(" ");let D=typeof d=="function"?d(S):d;return ne.createElement(fl,zc({},E,{"aria-current":k,className:b,ref:t,style:D,to:p,viewTransition:y}),typeof v=="function"?v(S):v)});var Kf;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Kf||(Kf={}));var Qy;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Qy||(Qy={}));function wR(n){let e=ne.useContext(mh);return e||lt(!1),e}function ER(n,e){let{target:t,replace:r,state:o,preventScrollReset:a,relative:u,viewTransition:d}=e===void 0?{}:e,p=qS(),y=Fl(),v=yh(n,{relative:u});return ne.useCallback(E=>{if(cR(E,t)){E.preventDefault();let I=r!==void 0?r:Bc(y)===Bc(v);p(n,{replace:I,state:o,preventScrollReset:a,relative:u,viewTransition:d})}},[y,p,v,r,o,t,n,a,u,d])}function TR(n,e){e===void 0&&(e={});let t=ne.useContext(pR);t==null&&lt(!1);let{basename:r}=wR(Kf.useViewTransitionState),o=yh(n,{relative:e.relative});if(!t.isTransitioning)return!1;let a=Xo(t.currentLocation.pathname,r)||t.currentLocation.pathname,u=Xo(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Wf(o.pathname,u)!=null||Wf(o.pathname,a)!=null}function IR(){return z.jsxs("div",{children:[z.jsxs("div",{className:"card",children:[z.jsx("h1",{style:{color:"var(--primary)"},children:"Привет! Это GoWell"}),z.jsx("p",{className:"small",children:"Цифровой помощник для школьников — следи за настроением, веди дневник, общайся с поддерживающим AI."})]}),z.jsxs("div",{className:"grid",children:[z.jsxs("div",{className:"card",children:[z.jsx("h3",{children:"Чат с ИИ"}),z.jsx("p",{className:"small",children:"Поговори с AI-помощником — поддержка и мягкие советы."}),z.jsx(fl,{to:"/chat",children:z.jsx("button",{className:"btn",children:"Открыть чат"})})]}),z.jsxs("div",{className:"card",children:[z.jsx("h3",{children:"Трекер настроения"}),z.jsx("p",{className:"small",children:"Отмечай настроение и наблюдай динамику."}),z.jsx(fl,{to:"/mood",children:z.jsx("button",{className:"btn",children:"Отметить настроение"})})]}),z.jsxs("div",{className:"card",children:[z.jsx("h3",{children:"Дневник"}),z.jsx("p",{className:"small",children:"Записывай мысли и чувства — полезно и спокойно."}),z.jsx(fl,{to:"/journal",children:z.jsx("button",{className:"btn",children:"Дневник"})})]}),z.jsxs("div",{className:"card",children:[z.jsx("h3",{children:"Wellness Hub"}),z.jsx("p",{className:"small",children:"Упражнения на дыхание, аффирмации и короткие практики."}),z.jsx(fl,{to:"/wellness",children:z.jsx("button",{className:"btn",children:"Перейти"})})]})]})]})}function gw(n,e){return function(){return n.apply(e,arguments)}}const{toString:SR}=Object.prototype,{getPrototypeOf:Cp}=Object,{iterator:_h,toStringTag:yw}=Symbol,vh=(n=>e=>{const t=SR.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),rr=n=>(n=n.toLowerCase(),e=>vh(e)===n),wh=n=>e=>typeof e===n,{isArray:aa}=Array,Yo=wh("undefined");function jl(n){return n!==null&&!Yo(n)&&n.constructor!==null&&!Yo(n.constructor)&&hn(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const _w=rr("ArrayBuffer");function RR(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&_w(n.buffer),e}const AR=wh("string"),hn=wh("function"),vw=wh("number"),Bl=n=>n!==null&&typeof n=="object",CR=n=>n===!0||n===!1,Cc=n=>{if(vh(n)!=="object")return!1;const e=Cp(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(yw in n)&&!(_h in n)},PR=n=>{if(!Bl(n)||jl(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},kR=rr("Date"),NR=rr("File"),xR=rr("Blob"),bR=rr("FileList"),OR=n=>Bl(n)&&hn(n.pipe),DR=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||hn(n.append)&&((e=vh(n))==="formdata"||e==="object"&&hn(n.toString)&&n.toString()==="[object FormData]"))},LR=rr("URLSearchParams"),[VR,MR,UR,FR]=["ReadableStream","Request","Response","Headers"].map(rr),jR=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function zl(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let r,o;if(typeof n!="object"&&(n=[n]),aa(n))for(r=0,o=n.length;r<o;r++)e.call(null,n[r],r,n);else{if(jl(n))return;const a=t?Object.getOwnPropertyNames(n):Object.keys(n),u=a.length;let d;for(r=0;r<u;r++)d=a[r],e.call(null,n[d],d,n)}}function ww(n,e){if(jl(n))return null;e=e.toLowerCase();const t=Object.keys(n);let r=t.length,o;for(;r-- >0;)if(o=t[r],e===o.toLowerCase())return o;return null}const As=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ew=n=>!Yo(n)&&n!==As;function Qf(){const{caseless:n,skipUndefined:e}=Ew(this)&&this||{},t={},r=(o,a)=>{const u=n&&ww(t,a)||a;Cc(t[u])&&Cc(o)?t[u]=Qf(t[u],o):Cc(o)?t[u]=Qf({},o):aa(o)?t[u]=o.slice():(!e||!Yo(o))&&(t[u]=o)};for(let o=0,a=arguments.length;o<a;o++)arguments[o]&&zl(arguments[o],r);return t}const BR=(n,e,t,{allOwnKeys:r}={})=>(zl(e,(o,a)=>{t&&hn(o)?n[a]=gw(o,t):n[a]=o},{allOwnKeys:r}),n),zR=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),$R=(n,e,t,r)=>{n.prototype=Object.create(e.prototype,r),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},HR=(n,e,t,r)=>{let o,a,u;const d={};if(e=e||{},n==null)return e;do{for(o=Object.getOwnPropertyNames(n),a=o.length;a-- >0;)u=o[a],(!r||r(u,n,e))&&!d[u]&&(e[u]=n[u],d[u]=!0);n=t!==!1&&Cp(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},qR=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const r=n.indexOf(e,t);return r!==-1&&r===t},WR=n=>{if(!n)return null;if(aa(n))return n;let e=n.length;if(!vw(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},GR=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&Cp(Uint8Array)),KR=(n,e)=>{const r=(n&&n[_h]).call(n);let o;for(;(o=r.next())&&!o.done;){const a=o.value;e.call(n,a[0],a[1])}},QR=(n,e)=>{let t;const r=[];for(;(t=n.exec(e))!==null;)r.push(t);return r},JR=rr("HTMLFormElement"),XR=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,o){return r.toUpperCase()+o}),Jy=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),YR=rr("RegExp"),Tw=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),r={};zl(t,(o,a)=>{let u;(u=e(o,a,n))!==!1&&(r[a]=u||o)}),Object.defineProperties(n,r)},ZR=n=>{Tw(n,(e,t)=>{if(hn(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const r=n[t];if(hn(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},e1=(n,e)=>{const t={},r=o=>{o.forEach(a=>{t[a]=!0})};return aa(n)?r(n):r(String(n).split(e)),t},t1=()=>{},n1=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e;function r1(n){return!!(n&&hn(n.append)&&n[yw]==="FormData"&&n[_h])}const i1=n=>{const e=new Array(10),t=(r,o)=>{if(Bl(r)){if(e.indexOf(r)>=0)return;if(jl(r))return r;if(!("toJSON"in r)){e[o]=r;const a=aa(r)?[]:{};return zl(r,(u,d)=>{const p=t(u,o+1);!Yo(p)&&(a[d]=p)}),e[o]=void 0,a}}return r};return t(n,0)},s1=rr("AsyncFunction"),o1=n=>n&&(Bl(n)||hn(n))&&hn(n.then)&&hn(n.catch),Iw=((n,e)=>n?setImmediate:e?((t,r)=>(As.addEventListener("message",({source:o,data:a})=>{o===As&&a===t&&r.length&&r.shift()()},!1),o=>{r.push(o),As.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",hn(As.postMessage)),a1=typeof queueMicrotask<"u"?queueMicrotask.bind(As):typeof process<"u"&&process.nextTick||Iw,l1=n=>n!=null&&hn(n[_h]),H={isArray:aa,isArrayBuffer:_w,isBuffer:jl,isFormData:DR,isArrayBufferView:RR,isString:AR,isNumber:vw,isBoolean:CR,isObject:Bl,isPlainObject:Cc,isEmptyObject:PR,isReadableStream:VR,isRequest:MR,isResponse:UR,isHeaders:FR,isUndefined:Yo,isDate:kR,isFile:NR,isBlob:xR,isRegExp:YR,isFunction:hn,isStream:OR,isURLSearchParams:LR,isTypedArray:GR,isFileList:bR,forEach:zl,merge:Qf,extend:BR,trim:jR,stripBOM:zR,inherits:$R,toFlatObject:HR,kindOf:vh,kindOfTest:rr,endsWith:qR,toArray:WR,forEachEntry:KR,matchAll:QR,isHTMLForm:JR,hasOwnProperty:Jy,hasOwnProp:Jy,reduceDescriptors:Tw,freezeMethods:ZR,toObjectSet:e1,toCamelCase:XR,noop:t1,toFiniteNumber:n1,findKey:ww,global:As,isContextDefined:Ew,isSpecCompliantForm:r1,toJSONObject:i1,isAsyncFn:s1,isThenable:o1,setImmediate:Iw,asap:a1,isIterable:l1};function Ce(n,e,t,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}H.inherits(Ce,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:H.toJSONObject(this.config),code:this.code,status:this.status}}});const Sw=Ce.prototype,Rw={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{Rw[n]={value:n}});Object.defineProperties(Ce,Rw);Object.defineProperty(Sw,"isAxiosError",{value:!0});Ce.from=(n,e,t,r,o,a)=>{const u=Object.create(Sw);H.toFlatObject(n,u,function(v){return v!==Error.prototype},y=>y!=="isAxiosError");const d=n&&n.message?n.message:"Error",p=e==null&&n?n.code:e;return Ce.call(u,d,p,t,r,o),n&&u.cause==null&&Object.defineProperty(u,"cause",{value:n,configurable:!0}),u.name=n&&n.name||"Error",a&&Object.assign(u,a),u};const u1=null;function Jf(n){return H.isPlainObject(n)||H.isArray(n)}function Aw(n){return H.endsWith(n,"[]")?n.slice(0,-2):n}function Xy(n,e,t){return n?n.concat(e).map(function(o,a){return o=Aw(o),!t&&a?"["+o+"]":o}).join(t?".":""):e}function c1(n){return H.isArray(n)&&!n.some(Jf)}const h1=H.toFlatObject(H,{},null,function(e){return/^is[A-Z]/.test(e)});function Eh(n,e,t){if(!H.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=H.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(V,A){return!H.isUndefined(A[V])});const r=t.metaTokens,o=t.visitor||v,a=t.dots,u=t.indexes,p=(t.Blob||typeof Blob<"u"&&Blob)&&H.isSpecCompliantForm(e);if(!H.isFunction(o))throw new TypeError("visitor must be a function");function y(P){if(P===null)return"";if(H.isDate(P))return P.toISOString();if(H.isBoolean(P))return P.toString();if(!p&&H.isBlob(P))throw new Ce("Blob is not supported. Use a Buffer instead.");return H.isArrayBuffer(P)||H.isTypedArray(P)?p&&typeof Blob=="function"?new Blob([P]):Buffer.from(P):P}function v(P,V,A){let X=P;if(P&&!A&&typeof P=="object"){if(H.endsWith(V,"{}"))V=r?V:V.slice(0,-2),P=JSON.stringify(P);else if(H.isArray(P)&&c1(P)||(H.isFileList(P)||H.endsWith(V,"[]"))&&(X=H.toArray(P)))return V=Aw(V),X.forEach(function(K,te){!(H.isUndefined(K)||K===null)&&e.append(u===!0?Xy([V],te,a):u===null?V:V+"[]",y(K))}),!1}return Jf(P)?!0:(e.append(Xy(A,V,a),y(P)),!1)}const E=[],I=Object.assign(h1,{defaultVisitor:v,convertValue:y,isVisitable:Jf});function L(P,V){if(!H.isUndefined(P)){if(E.indexOf(P)!==-1)throw Error("Circular reference detected in "+V.join("."));E.push(P),H.forEach(P,function(X,Y){(!(H.isUndefined(X)||X===null)&&o.call(e,X,H.isString(Y)?Y.trim():Y,V,I))===!0&&L(X,V?V.concat(Y):[Y])}),E.pop()}}if(!H.isObject(n))throw new TypeError("data must be an object");return L(n),e}function Yy(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Pp(n,e){this._pairs=[],n&&Eh(n,this,e)}const Cw=Pp.prototype;Cw.append=function(e,t){this._pairs.push([e,t])};Cw.toString=function(e){const t=e?function(r){return e.call(this,r,Yy)}:Yy;return this._pairs.map(function(o){return t(o[0])+"="+t(o[1])},"").join("&")};function d1(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Pw(n,e,t){if(!e)return n;const r=t&&t.encode||d1;H.isFunction(t)&&(t={serialize:t});const o=t&&t.serialize;let a;if(o?a=o(e,t):a=H.isURLSearchParams(e)?e.toString():new Pp(e,t).toString(r),a){const u=n.indexOf("#");u!==-1&&(n=n.slice(0,u)),n+=(n.indexOf("?")===-1?"?":"&")+a}return n}class Zy{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){H.forEach(this.handlers,function(r){r!==null&&e(r)})}}const kw={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},f1=typeof URLSearchParams<"u"?URLSearchParams:Pp,p1=typeof FormData<"u"?FormData:null,m1=typeof Blob<"u"?Blob:null,g1={isBrowser:!0,classes:{URLSearchParams:f1,FormData:p1,Blob:m1},protocols:["http","https","file","blob","url","data"]},kp=typeof window<"u"&&typeof document<"u",Xf=typeof navigator=="object"&&navigator||void 0,y1=kp&&(!Xf||["ReactNative","NativeScript","NS"].indexOf(Xf.product)<0),_1=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",v1=kp&&window.location.href||"http://localhost",w1=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:kp,hasStandardBrowserEnv:y1,hasStandardBrowserWebWorkerEnv:_1,navigator:Xf,origin:v1},Symbol.toStringTag,{value:"Module"})),Gt={...w1,...g1};function E1(n,e){return Eh(n,new Gt.classes.URLSearchParams,{visitor:function(t,r,o,a){return Gt.isNode&&H.isBuffer(t)?(this.append(r,t.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)},...e})}function T1(n){return H.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function I1(n){const e={},t=Object.keys(n);let r;const o=t.length;let a;for(r=0;r<o;r++)a=t[r],e[a]=n[a];return e}function Nw(n){function e(t,r,o,a){let u=t[a++];if(u==="__proto__")return!0;const d=Number.isFinite(+u),p=a>=t.length;return u=!u&&H.isArray(o)?o.length:u,p?(H.hasOwnProp(o,u)?o[u]=[o[u],r]:o[u]=r,!d):((!o[u]||!H.isObject(o[u]))&&(o[u]=[]),e(t,r,o[u],a)&&H.isArray(o[u])&&(o[u]=I1(o[u])),!d)}if(H.isFormData(n)&&H.isFunction(n.entries)){const t={};return H.forEachEntry(n,(r,o)=>{e(T1(r),o,t,0)}),t}return null}function S1(n,e,t){if(H.isString(n))try{return(e||JSON.parse)(n),H.trim(n)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(n)}const $l={transitional:kw,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",o=r.indexOf("application/json")>-1,a=H.isObject(e);if(a&&H.isHTMLForm(e)&&(e=new FormData(e)),H.isFormData(e))return o?JSON.stringify(Nw(e)):e;if(H.isArrayBuffer(e)||H.isBuffer(e)||H.isStream(e)||H.isFile(e)||H.isBlob(e)||H.isReadableStream(e))return e;if(H.isArrayBufferView(e))return e.buffer;if(H.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let d;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return E1(e,this.formSerializer).toString();if((d=H.isFileList(e))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return Eh(d?{"files[]":e}:e,p&&new p,this.formSerializer)}}return a||o?(t.setContentType("application/json",!1),S1(e)):e}],transformResponse:[function(e){const t=this.transitional||$l.transitional,r=t&&t.forcedJSONParsing,o=this.responseType==="json";if(H.isResponse(e)||H.isReadableStream(e))return e;if(e&&H.isString(e)&&(r&&!this.responseType||o)){const u=!(t&&t.silentJSONParsing)&&o;try{return JSON.parse(e,this.parseReviver)}catch(d){if(u)throw d.name==="SyntaxError"?Ce.from(d,Ce.ERR_BAD_RESPONSE,this,null,this.response):d}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Gt.classes.FormData,Blob:Gt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};H.forEach(["delete","get","head","post","put","patch"],n=>{$l.headers[n]={}});const R1=H.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),A1=n=>{const e={};let t,r,o;return n&&n.split(`
`).forEach(function(u){o=u.indexOf(":"),t=u.substring(0,o).trim().toLowerCase(),r=u.substring(o+1).trim(),!(!t||e[t]&&R1[t])&&(t==="set-cookie"?e[t]?e[t].push(r):e[t]=[r]:e[t]=e[t]?e[t]+", "+r:r)}),e},e_=Symbol("internals");function cl(n){return n&&String(n).trim().toLowerCase()}function Pc(n){return n===!1||n==null?n:H.isArray(n)?n.map(Pc):String(n)}function C1(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(n);)e[r[1]]=r[2];return e}const P1=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Rf(n,e,t,r,o){if(H.isFunction(r))return r.call(this,e,t);if(o&&(e=t),!!H.isString(e)){if(H.isString(r))return e.indexOf(r)!==-1;if(H.isRegExp(r))return r.test(e)}}function k1(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}function N1(n,e){const t=H.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(n,r+t,{value:function(o,a,u){return this[r].call(this,e,o,a,u)},configurable:!0})})}let dn=class{constructor(e){e&&this.set(e)}set(e,t,r){const o=this;function a(d,p,y){const v=cl(p);if(!v)throw new Error("header name must be a non-empty string");const E=H.findKey(o,v);(!E||o[E]===void 0||y===!0||y===void 0&&o[E]!==!1)&&(o[E||p]=Pc(d))}const u=(d,p)=>H.forEach(d,(y,v)=>a(y,v,p));if(H.isPlainObject(e)||e instanceof this.constructor)u(e,t);else if(H.isString(e)&&(e=e.trim())&&!P1(e))u(A1(e),t);else if(H.isObject(e)&&H.isIterable(e)){let d={},p,y;for(const v of e){if(!H.isArray(v))throw TypeError("Object iterator must return a key-value pair");d[y=v[0]]=(p=d[y])?H.isArray(p)?[...p,v[1]]:[p,v[1]]:v[1]}u(d,t)}else e!=null&&a(t,e,r);return this}get(e,t){if(e=cl(e),e){const r=H.findKey(this,e);if(r){const o=this[r];if(!t)return o;if(t===!0)return C1(o);if(H.isFunction(t))return t.call(this,o,r);if(H.isRegExp(t))return t.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=cl(e),e){const r=H.findKey(this,e);return!!(r&&this[r]!==void 0&&(!t||Rf(this,this[r],r,t)))}return!1}delete(e,t){const r=this;let o=!1;function a(u){if(u=cl(u),u){const d=H.findKey(r,u);d&&(!t||Rf(r,r[d],d,t))&&(delete r[d],o=!0)}}return H.isArray(e)?e.forEach(a):a(e),o}clear(e){const t=Object.keys(this);let r=t.length,o=!1;for(;r--;){const a=t[r];(!e||Rf(this,this[a],a,e,!0))&&(delete this[a],o=!0)}return o}normalize(e){const t=this,r={};return H.forEach(this,(o,a)=>{const u=H.findKey(r,a);if(u){t[u]=Pc(o),delete t[a];return}const d=e?k1(a):String(a).trim();d!==a&&delete t[a],t[d]=Pc(o),r[d]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return H.forEach(this,(r,o)=>{r!=null&&r!==!1&&(t[o]=e&&H.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(o=>r.set(o)),r}static accessor(e){const r=(this[e_]=this[e_]={accessors:{}}).accessors,o=this.prototype;function a(u){const d=cl(u);r[d]||(N1(o,u),r[d]=!0)}return H.isArray(e)?e.forEach(a):a(e),this}};dn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);H.reduceDescriptors(dn.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(r){this[t]=r}}});H.freezeMethods(dn);function Af(n,e){const t=this||$l,r=e||t,o=dn.from(r.headers);let a=r.data;return H.forEach(n,function(d){a=d.call(t,a,o.normalize(),e?e.status:void 0)}),o.normalize(),a}function xw(n){return!!(n&&n.__CANCEL__)}function la(n,e,t){Ce.call(this,n??"canceled",Ce.ERR_CANCELED,e,t),this.name="CanceledError"}H.inherits(la,Ce,{__CANCEL__:!0});function bw(n,e,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?n(t):e(new Ce("Request failed with status code "+t.status,[Ce.ERR_BAD_REQUEST,Ce.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function x1(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function b1(n,e){n=n||10;const t=new Array(n),r=new Array(n);let o=0,a=0,u;return e=e!==void 0?e:1e3,function(p){const y=Date.now(),v=r[a];u||(u=y),t[o]=p,r[o]=y;let E=a,I=0;for(;E!==o;)I+=t[E++],E=E%n;if(o=(o+1)%n,o===a&&(a=(a+1)%n),y-u<e)return;const L=v&&y-v;return L?Math.round(I*1e3/L):void 0}}function O1(n,e){let t=0,r=1e3/e,o,a;const u=(y,v=Date.now())=>{t=v,o=null,a&&(clearTimeout(a),a=null),n(...y)};return[(...y)=>{const v=Date.now(),E=v-t;E>=r?u(y,v):(o=y,a||(a=setTimeout(()=>{a=null,u(o)},r-E)))},()=>o&&u(o)]}const $c=(n,e,t=3)=>{let r=0;const o=b1(50,250);return O1(a=>{const u=a.loaded,d=a.lengthComputable?a.total:void 0,p=u-r,y=o(p),v=u<=d;r=u;const E={loaded:u,total:d,progress:d?u/d:void 0,bytes:p,rate:y||void 0,estimated:y&&d&&v?(d-u)/y:void 0,event:a,lengthComputable:d!=null,[e?"download":"upload"]:!0};n(E)},t)},t_=(n,e)=>{const t=n!=null;return[r=>e[0]({lengthComputable:t,total:n,loaded:r}),e[1]]},n_=n=>(...e)=>H.asap(()=>n(...e)),D1=Gt.hasStandardBrowserEnv?((n,e)=>t=>(t=new URL(t,Gt.origin),n.protocol===t.protocol&&n.host===t.host&&(e||n.port===t.port)))(new URL(Gt.origin),Gt.navigator&&/(msie|trident)/i.test(Gt.navigator.userAgent)):()=>!0,L1=Gt.hasStandardBrowserEnv?{write(n,e,t,r,o,a){const u=[n+"="+encodeURIComponent(e)];H.isNumber(t)&&u.push("expires="+new Date(t).toGMTString()),H.isString(r)&&u.push("path="+r),H.isString(o)&&u.push("domain="+o),a===!0&&u.push("secure"),document.cookie=u.join("; ")},read(n){const e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function V1(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function M1(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function Ow(n,e,t){let r=!V1(e);return n&&(r||t==!1)?M1(n,e):e}const r_=n=>n instanceof dn?{...n}:n;function Os(n,e){e=e||{};const t={};function r(y,v,E,I){return H.isPlainObject(y)&&H.isPlainObject(v)?H.merge.call({caseless:I},y,v):H.isPlainObject(v)?H.merge({},v):H.isArray(v)?v.slice():v}function o(y,v,E,I){if(H.isUndefined(v)){if(!H.isUndefined(y))return r(void 0,y,E,I)}else return r(y,v,E,I)}function a(y,v){if(!H.isUndefined(v))return r(void 0,v)}function u(y,v){if(H.isUndefined(v)){if(!H.isUndefined(y))return r(void 0,y)}else return r(void 0,v)}function d(y,v,E){if(E in e)return r(y,v);if(E in n)return r(void 0,y)}const p={url:a,method:a,data:a,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,withXSRFToken:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:d,headers:(y,v,E)=>o(r_(y),r_(v),E,!0)};return H.forEach(Object.keys({...n,...e}),function(v){const E=p[v]||o,I=E(n[v],e[v],v);H.isUndefined(I)&&E!==d||(t[v]=I)}),t}const Dw=n=>{const e=Os({},n);let{data:t,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:a,headers:u,auth:d}=e;if(e.headers=u=dn.from(u),e.url=Pw(Ow(e.baseURL,e.url,e.allowAbsoluteUrls),n.params,n.paramsSerializer),d&&u.set("Authorization","Basic "+btoa((d.username||"")+":"+(d.password?unescape(encodeURIComponent(d.password)):""))),H.isFormData(t)){if(Gt.hasStandardBrowserEnv||Gt.hasStandardBrowserWebWorkerEnv)u.setContentType(void 0);else if(H.isFunction(t.getHeaders)){const p=t.getHeaders(),y=["content-type","content-length"];Object.entries(p).forEach(([v,E])=>{y.includes(v.toLowerCase())&&u.set(v,E)})}}if(Gt.hasStandardBrowserEnv&&(r&&H.isFunction(r)&&(r=r(e)),r||r!==!1&&D1(e.url))){const p=o&&a&&L1.read(a);p&&u.set(o,p)}return e},U1=typeof XMLHttpRequest<"u",F1=U1&&function(n){return new Promise(function(t,r){const o=Dw(n);let a=o.data;const u=dn.from(o.headers).normalize();let{responseType:d,onUploadProgress:p,onDownloadProgress:y}=o,v,E,I,L,P;function V(){L&&L(),P&&P(),o.cancelToken&&o.cancelToken.unsubscribe(v),o.signal&&o.signal.removeEventListener("abort",v)}let A=new XMLHttpRequest;A.open(o.method.toUpperCase(),o.url,!0),A.timeout=o.timeout;function X(){if(!A)return;const K=dn.from("getAllResponseHeaders"in A&&A.getAllResponseHeaders()),_e={data:!d||d==="text"||d==="json"?A.responseText:A.response,status:A.status,statusText:A.statusText,headers:K,config:n,request:A};bw(function(x){t(x),V()},function(x){r(x),V()},_e),A=null}"onloadend"in A?A.onloadend=X:A.onreadystatechange=function(){!A||A.readyState!==4||A.status===0&&!(A.responseURL&&A.responseURL.indexOf("file:")===0)||setTimeout(X)},A.onabort=function(){A&&(r(new Ce("Request aborted",Ce.ECONNABORTED,n,A)),A=null)},A.onerror=function(te){const _e=te&&te.message?te.message:"Network Error",me=new Ce(_e,Ce.ERR_NETWORK,n,A);me.event=te||null,r(me),A=null},A.ontimeout=function(){let te=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const _e=o.transitional||kw;o.timeoutErrorMessage&&(te=o.timeoutErrorMessage),r(new Ce(te,_e.clarifyTimeoutError?Ce.ETIMEDOUT:Ce.ECONNABORTED,n,A)),A=null},a===void 0&&u.setContentType(null),"setRequestHeader"in A&&H.forEach(u.toJSON(),function(te,_e){A.setRequestHeader(_e,te)}),H.isUndefined(o.withCredentials)||(A.withCredentials=!!o.withCredentials),d&&d!=="json"&&(A.responseType=o.responseType),y&&([I,P]=$c(y,!0),A.addEventListener("progress",I)),p&&A.upload&&([E,L]=$c(p),A.upload.addEventListener("progress",E),A.upload.addEventListener("loadend",L)),(o.cancelToken||o.signal)&&(v=K=>{A&&(r(!K||K.type?new la(null,n,A):K),A.abort(),A=null)},o.cancelToken&&o.cancelToken.subscribe(v),o.signal&&(o.signal.aborted?v():o.signal.addEventListener("abort",v)));const Y=x1(o.url);if(Y&&Gt.protocols.indexOf(Y)===-1){r(new Ce("Unsupported protocol "+Y+":",Ce.ERR_BAD_REQUEST,n));return}A.send(a||null)})},j1=(n,e)=>{const{length:t}=n=n?n.filter(Boolean):[];if(e||t){let r=new AbortController,o;const a=function(y){if(!o){o=!0,d();const v=y instanceof Error?y:this.reason;r.abort(v instanceof Ce?v:new la(v instanceof Error?v.message:v))}};let u=e&&setTimeout(()=>{u=null,a(new Ce(`timeout ${e} of ms exceeded`,Ce.ETIMEDOUT))},e);const d=()=>{n&&(u&&clearTimeout(u),u=null,n.forEach(y=>{y.unsubscribe?y.unsubscribe(a):y.removeEventListener("abort",a)}),n=null)};n.forEach(y=>y.addEventListener("abort",a));const{signal:p}=r;return p.unsubscribe=()=>H.asap(d),p}},B1=function*(n,e){let t=n.byteLength;if(t<e){yield n;return}let r=0,o;for(;r<t;)o=r+e,yield n.slice(r,o),r=o},z1=async function*(n,e){for await(const t of $1(n))yield*B1(t,e)},$1=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:r}=await e.read();if(t)break;yield r}}finally{await e.cancel()}},i_=(n,e,t,r)=>{const o=z1(n,e);let a=0,u,d=p=>{u||(u=!0,r&&r(p))};return new ReadableStream({async pull(p){try{const{done:y,value:v}=await o.next();if(y){d(),p.close();return}let E=v.byteLength;if(t){let I=a+=E;t(I)}p.enqueue(new Uint8Array(v))}catch(y){throw d(y),y}},cancel(p){return d(p),o.return()}},{highWaterMark:2})},s_=64*1024,{isFunction:_c}=H,H1=(({Request:n,Response:e})=>({Request:n,Response:e}))(H.global),{ReadableStream:o_,TextEncoder:a_}=H.global,l_=(n,...e)=>{try{return!!n(...e)}catch{return!1}},q1=n=>{n=H.merge.call({skipUndefined:!0},H1,n);const{fetch:e,Request:t,Response:r}=n,o=e?_c(e):typeof fetch=="function",a=_c(t),u=_c(r);if(!o)return!1;const d=o&&_c(o_),p=o&&(typeof a_=="function"?(P=>V=>P.encode(V))(new a_):async P=>new Uint8Array(await new t(P).arrayBuffer())),y=a&&d&&l_(()=>{let P=!1;const V=new t(Gt.origin,{body:new o_,method:"POST",get duplex(){return P=!0,"half"}}).headers.has("Content-Type");return P&&!V}),v=u&&d&&l_(()=>H.isReadableStream(new r("").body)),E={stream:v&&(P=>P.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(P=>{!E[P]&&(E[P]=(V,A)=>{let X=V&&V[P];if(X)return X.call(V);throw new Ce(`Response type '${P}' is not supported`,Ce.ERR_NOT_SUPPORT,A)})});const I=async P=>{if(P==null)return 0;if(H.isBlob(P))return P.size;if(H.isSpecCompliantForm(P))return(await new t(Gt.origin,{method:"POST",body:P}).arrayBuffer()).byteLength;if(H.isArrayBufferView(P)||H.isArrayBuffer(P))return P.byteLength;if(H.isURLSearchParams(P)&&(P=P+""),H.isString(P))return(await p(P)).byteLength},L=async(P,V)=>{const A=H.toFiniteNumber(P.getContentLength());return A??I(V)};return async P=>{let{url:V,method:A,data:X,signal:Y,cancelToken:K,timeout:te,onDownloadProgress:_e,onUploadProgress:me,responseType:x,headers:S,withCredentials:k="same-origin",fetchOptions:b}=Dw(P),D=e||fetch;x=x?(x+"").toLowerCase():"text";let U=j1([Y,K&&K.toAbortSignal()],te),C=null;const $e=U&&U.unsubscribe&&(()=>{U.unsubscribe()});let yt;try{if(me&&y&&A!=="get"&&A!=="head"&&(yt=await L(S,X))!==0){let M=new t(V,{method:"POST",body:X,duplex:"half"}),W;if(H.isFormData(X)&&(W=M.headers.get("content-type"))&&S.setContentType(W),M.body){const[de,Re]=t_(yt,$c(n_(me)));X=i_(M.body,s_,de,Re)}}H.isString(k)||(k=k?"include":"omit");const qe=a&&"credentials"in t.prototype,Fe={...b,signal:U,method:A.toUpperCase(),headers:S.normalize().toJSON(),body:X,duplex:"half",credentials:qe?k:void 0};C=a&&new t(V,Fe);let ie=await(a?D(C,b):D(V,Fe));const ge=v&&(x==="stream"||x==="response");if(v&&(_e||ge&&$e)){const M={};["status","statusText","headers"].forEach(Pe=>{M[Pe]=ie[Pe]});const W=H.toFiniteNumber(ie.headers.get("content-length")),[de,Re]=_e&&t_(W,$c(n_(_e),!0))||[];ie=new r(i_(ie.body,s_,de,()=>{Re&&Re(),$e&&$e()}),M)}x=x||"text";let oe=await E[H.findKey(E,x)||"text"](ie,P);return!ge&&$e&&$e(),await new Promise((M,W)=>{bw(M,W,{data:oe,headers:dn.from(ie.headers),status:ie.status,statusText:ie.statusText,config:P,request:C})})}catch(qe){throw $e&&$e(),qe&&qe.name==="TypeError"&&/Load failed|fetch/i.test(qe.message)?Object.assign(new Ce("Network Error",Ce.ERR_NETWORK,P,C),{cause:qe.cause||qe}):Ce.from(qe,qe&&qe.code,P,C)}}},W1=new Map,Lw=n=>{let e=n?n.env:{};const{fetch:t,Request:r,Response:o}=e,a=[r,o,t];let u=a.length,d=u,p,y,v=W1;for(;d--;)p=a[d],y=v.get(p),y===void 0&&v.set(p,y=d?new Map:q1(e)),v=y;return y};Lw();const Yf={http:u1,xhr:F1,fetch:{get:Lw}};H.forEach(Yf,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const u_=n=>`- ${n}`,G1=n=>H.isFunction(n)||n===null||n===!1,Vw={getAdapter:(n,e)=>{n=H.isArray(n)?n:[n];const{length:t}=n;let r,o;const a={};for(let u=0;u<t;u++){r=n[u];let d;if(o=r,!G1(r)&&(o=Yf[(d=String(r)).toLowerCase()],o===void 0))throw new Ce(`Unknown adapter '${d}'`);if(o&&(H.isFunction(o)||(o=o.get(e))))break;a[d||"#"+u]=o}if(!o){const u=Object.entries(a).map(([p,y])=>`adapter ${p} `+(y===!1?"is not supported by the environment":"is not available in the build"));let d=t?u.length>1?`since :
`+u.map(u_).join(`
`):" "+u_(u[0]):"as no adapter specified";throw new Ce("There is no suitable adapter to dispatch the request "+d,"ERR_NOT_SUPPORT")}return o},adapters:Yf};function Cf(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new la(null,n)}function c_(n){return Cf(n),n.headers=dn.from(n.headers),n.data=Af.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Vw.getAdapter(n.adapter||$l.adapter,n)(n).then(function(r){return Cf(n),r.data=Af.call(n,n.transformResponse,r),r.headers=dn.from(r.headers),r},function(r){return xw(r)||(Cf(n),r&&r.response&&(r.response.data=Af.call(n,n.transformResponse,r.response),r.response.headers=dn.from(r.response.headers))),Promise.reject(r)})}const Mw="1.12.2",Th={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{Th[n]=function(r){return typeof r===n||"a"+(e<1?"n ":" ")+n}});const h_={};Th.transitional=function(e,t,r){function o(a,u){return"[Axios v"+Mw+"] Transitional option '"+a+"'"+u+(r?". "+r:"")}return(a,u,d)=>{if(e===!1)throw new Ce(o(u," has been removed"+(t?" in "+t:"")),Ce.ERR_DEPRECATED);return t&&!h_[u]&&(h_[u]=!0,console.warn(o(u," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(a,u,d):!0}};Th.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function K1(n,e,t){if(typeof n!="object")throw new Ce("options must be an object",Ce.ERR_BAD_OPTION_VALUE);const r=Object.keys(n);let o=r.length;for(;o-- >0;){const a=r[o],u=e[a];if(u){const d=n[a],p=d===void 0||u(d,a,n);if(p!==!0)throw new Ce("option "+a+" must be "+p,Ce.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Ce("Unknown option "+a,Ce.ERR_BAD_OPTION)}}const kc={assertOptions:K1,validators:Th},mr=kc.validators;let ks=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Zy,response:new Zy}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const a=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?a&&!String(r.stack).endsWith(a.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+a):r.stack=a}catch{}}throw r}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Os(this.defaults,t);const{transitional:r,paramsSerializer:o,headers:a}=t;r!==void 0&&kc.assertOptions(r,{silentJSONParsing:mr.transitional(mr.boolean),forcedJSONParsing:mr.transitional(mr.boolean),clarifyTimeoutError:mr.transitional(mr.boolean)},!1),o!=null&&(H.isFunction(o)?t.paramsSerializer={serialize:o}:kc.assertOptions(o,{encode:mr.function,serialize:mr.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),kc.assertOptions(t,{baseUrl:mr.spelling("baseURL"),withXsrfToken:mr.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let u=a&&H.merge(a.common,a[t.method]);a&&H.forEach(["delete","get","head","post","put","patch","common"],P=>{delete a[P]}),t.headers=dn.concat(u,a);const d=[];let p=!0;this.interceptors.request.forEach(function(V){typeof V.runWhen=="function"&&V.runWhen(t)===!1||(p=p&&V.synchronous,d.unshift(V.fulfilled,V.rejected))});const y=[];this.interceptors.response.forEach(function(V){y.push(V.fulfilled,V.rejected)});let v,E=0,I;if(!p){const P=[c_.bind(this),void 0];for(P.unshift(...d),P.push(...y),I=P.length,v=Promise.resolve(t);E<I;)v=v.then(P[E++],P[E++]);return v}I=d.length;let L=t;for(;E<I;){const P=d[E++],V=d[E++];try{L=P(L)}catch(A){V.call(this,A);break}}try{v=c_.call(this,L)}catch(P){return Promise.reject(P)}for(E=0,I=y.length;E<I;)v=v.then(y[E++],y[E++]);return v}getUri(e){e=Os(this.defaults,e);const t=Ow(e.baseURL,e.url,e.allowAbsoluteUrls);return Pw(t,e.params,e.paramsSerializer)}};H.forEach(["delete","get","head","options"],function(e){ks.prototype[e]=function(t,r){return this.request(Os(r||{},{method:e,url:t,data:(r||{}).data}))}});H.forEach(["post","put","patch"],function(e){function t(r){return function(a,u,d){return this.request(Os(d||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:u}))}}ks.prototype[e]=t(),ks.prototype[e+"Form"]=t(!0)});let Q1=class Uw{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(a){t=a});const r=this;this.promise.then(o=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](o);r._listeners=null}),this.promise.then=o=>{let a;const u=new Promise(d=>{r.subscribe(d),a=d}).then(o);return u.cancel=function(){r.unsubscribe(a)},u},e(function(a,u,d){r.reason||(r.reason=new la(a,u,d),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=r=>{e.abort(r)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Uw(function(o){e=o}),cancel:e}}};function J1(n){return function(t){return n.apply(null,t)}}function X1(n){return H.isObject(n)&&n.isAxiosError===!0}const Zf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Zf).forEach(([n,e])=>{Zf[e]=n});function Fw(n){const e=new ks(n),t=gw(ks.prototype.request,e);return H.extend(t,ks.prototype,e,{allOwnKeys:!0}),H.extend(t,e,null,{allOwnKeys:!0}),t.create=function(o){return Fw(Os(n,o))},t}const dt=Fw($l);dt.Axios=ks;dt.CanceledError=la;dt.CancelToken=Q1;dt.isCancel=xw;dt.VERSION=Mw;dt.toFormData=Eh;dt.AxiosError=Ce;dt.Cancel=dt.CanceledError;dt.all=function(e){return Promise.all(e)};dt.spread=J1;dt.isAxiosError=X1;dt.mergeConfig=Os;dt.AxiosHeaders=dn;dt.formToJSON=n=>Nw(H.isHTMLForm(n)?new FormData(n):n);dt.getAdapter=Vw.getAdapter;dt.HttpStatusCode=Zf;dt.default=dt;const{Axios:tL,AxiosError:nL,CanceledError:rL,isCancel:iL,CancelToken:sL,VERSION:oL,all:aL,Cancel:lL,isAxiosError:uL,spread:cL,toFormData:hL,AxiosHeaders:dL,HttpStatusCode:fL,formToJSON:pL,getAdapter:mL,mergeConfig:gL}=dt,d_=["Прости, я не могу заменить специалиста, но могу поддержать. Расскажи подробнее, что случилось?","Попробуй сделать 5 глубоких вдохов. Ощущаешь расслабление?","Сосредоточься на том, что под контролем сейчас. Маленький шаг — тоже шаг.","Если это серьёзно — обратись к взрослому или специалисту. Я рядом, чтобы поддержать."];function Y1(n){const e=n.toLowerCase();return e.includes("трев")||e.includes("паник")?"Понимаю, тревога тяжёлая. Давай попробуем 3 глубоких вдоха вместе.":e.includes("грусть")||e.includes("плохо")||e.includes("плач")?"Мне жаль, что так. Попробуй написать 3 вещи, за которые ты благодарна сегодня.":e.includes("учеб")||e.includes("экзам")||e.includes("задани")?"Разбей задачу на маленькие кусочки. Что можно сделать прямо сейчас за 10 минут?":d_[Math.floor(Math.random()*d_.length)]}function Z1(){const[n,e]=ne.useState(""),[t,r]=ne.useState(()=>{try{return JSON.parse(localStorage.getItem("gowell_chat")||"[]")}catch{return[]}}),[o,a]=ne.useState(!1),u=ne.useRef(null);ne.useEffect(()=>{localStorage.setItem("gowell_chat",JSON.stringify(t)),u.current?.scrollTo({top:u.current.scrollHeight,behavior:"smooth"})},[t]);async function d(){const p=n.trim();if(!p)return;const y={sender:"user",text:p,time:Date.now()};r(v=>[...v,y]),e(""),a(!0);try{const E=(await dt.post("https://us-central1-gowell-cc836.cloudfunctions.net/api/chat",{message:p})).data.reply;r(I=>[...I,{sender:"ai",text:E,time:Date.now()}])}catch(v){console.warn("AI offline, using local reply:",v.message);const E=Y1(p);r(I=>[...I,{sender:"ai",text:E,time:Date.now()}])}finally{a(!1)}}return z.jsx("div",{children:z.jsxs("div",{className:"card",children:[z.jsx("h2",{style:{marginTop:0},children:"Чат с GoWell"}),z.jsxs("div",{ref:u,className:"chat-window","aria-live":"polite",children:[t.map((p,y)=>z.jsx("div",{className:`msg ${p.sender}`,children:z.jsx("div",{className:"bubble",children:p.text})},y)),o&&z.jsx("div",{className:"msg ai",children:z.jsx("div",{className:"bubble",children:"Печатает..."})})]}),z.jsxs("div",{className:"row",children:[z.jsx("input",{className:"input",placeholder:"Напиши, как ты себя чувствуешь...",value:n,onChange:p=>e(p.target.value),onKeyDown:p=>p.key==="Enter"&&d()}),z.jsx("button",{className:"btn",onClick:d,children:"Отправить"})]}),z.jsx("div",{style:{marginTop:10},className:"small",children:"Поддержка. Это не замена врачу. В случае экстренной ситуации обращайся к специалистам."})]})})}const eA=()=>{};var f_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},tA=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const o=n[t++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[r++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],u=n[t++],d=n[t++],p=((o&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(p>>10)),e[r++]=String.fromCharCode(56320+(p&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((o&15)<<12|(a&63)<<6|u&63)}}return e.join("")},Bw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<n.length;o+=3){const a=n[o],u=o+1<n.length,d=u?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,v=a>>2,E=(a&3)<<4|d>>4;let I=(d&15)<<2|y>>6,L=y&63;p||(L=64,u||(I=64)),r.push(t[v],t[E],t[I],t[L])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(jw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):tA(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const E=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||d==null||y==null||E==null)throw new nA;const I=a<<2|d>>4;if(r.push(I),y!==64){const L=d<<4&240|y>>2;if(r.push(L),E!==64){const P=y<<6&192|E;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class nA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rA=function(n){const e=jw(n);return Bw.encodeByteArray(e,!0)},Hc=function(n){return rA(n).replace(/\./g,"")},zw=function(n){try{return Bw.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=()=>iA().__FIREBASE_DEFAULTS__,oA=()=>{if(typeof process>"u"||typeof f_>"u")return;const n=f_.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},aA=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&zw(n[1]);return e&&JSON.parse(e)},Ih=()=>{try{return eA()||sA()||oA()||aA()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$w=n=>{var e,t;return(t=(e=Ih())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Hw=n=>{const e=$w(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},qw=()=>{var n;return(n=Ih())===null||n===void 0?void 0:n.config},Ww=n=>{var e;return(e=Ih())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Np(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Hc(JSON.stringify(t)),Hc(JSON.stringify(u)),""].join(".")}const _l={};function uA(){const n={prod:[],emulator:[]};for(const e of Object.keys(_l))_l[e]?n.emulator.push(e):n.prod.push(e);return n}function cA(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let p_=!1;function xp(n,e){if(typeof window>"u"||typeof document>"u"||!Ki(window.location.host)||_l[n]===e||_l[n]||p_)return;_l[n]=e;function t(I){return`__firebase__banner__${I}`}const r="__firebase__banner",a=uA().prod.length>0;function u(){const I=document.getElementById(r);I&&I.remove()}function d(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function p(I,L){I.setAttribute("width","24"),I.setAttribute("id",L),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function y(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{p_=!0,u()},I}function v(I,L){I.setAttribute("id",L),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function E(){const I=cA(r),L=t("text"),P=document.getElementById(L)||document.createElement("span"),V=t("learnmore"),A=document.getElementById(V)||document.createElement("a"),X=t("preprendIcon"),Y=document.getElementById(X)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const K=I.element;d(K),v(A,V);const te=y();p(Y,X),K.append(Y,P,A,te),document.body.appendChild(K)}a?(P.innerText="Preview backend disconnected.",Y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Y.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",L)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Kt())}function dA(){var n;const e=(n=Ih())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Kw(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function pA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mA(){const n=Kt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function gA(){return!dA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Qw(){try{return typeof indexedDB=="object"}catch{return!1}}function Jw(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}function yA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A="FirebaseError";class Mn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=_A,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bs.prototype.create)}}class Bs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],u=a?vA(a,r):"Error",d=`${this.serviceName}: ${u} (${o}).`;return new Mn(o,d,r)}}function vA(n,e){return n.replace(wA,(t,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const wA=/\{\$([^}]+)}/g;function EA(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Fi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const o of t){if(!r.includes(o))return!1;const a=n[o],u=e[o];if(m_(a)&&m_(u)){if(!Fi(a,u))return!1}else if(a!==u)return!1}for(const o of r)if(!t.includes(o))return!1;return!0}function m_(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function TA(n,e){const t=new IA(n,e);return t.subscribe.bind(t)}class IA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let o;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");SA(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:r},o.next===void 0&&(o.next=Pf),o.error===void 0&&(o.error=Pf),o.complete===void 0&&(o.complete=Pf);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SA(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Pf(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=1e3,AA=2,CA=14400*1e3,PA=.5;function g_(n,e=RA,t=AA){const r=e*Math.pow(t,n),o=Math.round(PA*r*(Math.random()-.5)*2);return Math.min(CA,r+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(n){return n&&n._delegate?n._delegate:n}class Vn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new lA;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),o=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xA(e))try{this.getOrInitializeService({instanceIdentifier:Rs})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});r.resolve(a)}catch{}}}}clearInstance(e=Rs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rs){return this.instances.has(e)}getOptions(e=Rs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(o)}return o}onInit(e,t){var r;const o=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(o,a);const u=this.instances.get(o);return u&&e(u,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const o of r)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NA(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rs){return this.component?this.component.multipleInstances?e:Rs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NA(n){return n===Rs?void 0:n}function xA(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new kA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(xe||(xe={}));const OA={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},DA=xe.INFO,LA={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},VA=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),o=LA[e];if(o)console[o](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sh{constructor(e){this.name=e,this._logLevel=DA,this._logHandler=VA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const MA=(n,e)=>e.some(t=>n instanceof t);let y_,__;function UA(){return y_||(y_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FA(){return __||(__=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xw=new WeakMap,ep=new WeakMap,Yw=new WeakMap,kf=new WeakMap,bp=new WeakMap;function jA(n){const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Di(n.result)),o()},u=()=>{r(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&Xw.set(t,n)}).catch(()=>{}),bp.set(e,n),e}function BA(n){if(ep.has(n))return;const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),o()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});ep.set(n,e)}let tp={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ep.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Yw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Di(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function zA(n){tp=n(tp)}function $A(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Nf(this),e,...t);return Yw.set(r,e.sort?e.sort():[e]),Di(r)}:FA().includes(n)?function(...e){return n.apply(Nf(this),e),Di(Xw.get(this))}:function(...e){return Di(n.apply(Nf(this),e))}}function HA(n){return typeof n=="function"?$A(n):(n instanceof IDBTransaction&&BA(n),MA(n,UA())?new Proxy(n,tp):n)}function Di(n){if(n instanceof IDBRequest)return jA(n);if(kf.has(n))return kf.get(n);const e=HA(n);return e!==n&&(kf.set(n,e),bp.set(e,n)),e}const Nf=n=>bp.get(n);function Zw(n,e,{blocked:t,upgrade:r,blocking:o,terminated:a}={}){const u=indexedDB.open(n,e),d=Di(u);return r&&u.addEventListener("upgradeneeded",p=>{r(Di(u.result),p.oldVersion,p.newVersion,Di(u.transaction),p)}),t&&u.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{a&&p.addEventListener("close",()=>a()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const qA=["get","getKey","getAll","getAllKeys","count"],WA=["put","add","delete","clear"],xf=new Map;function v_(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(xf.get(e))return xf.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,o=WA.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(o||qA.includes(t)))return;const a=async function(u,...d){const p=this.transaction(u,o?"readwrite":"readonly");let y=p.store;return r&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&p.done]))[0]};return xf.set(e,a),a}zA(n=>({...n,get:(e,t,r)=>v_(e,t)||n.get(e,t,r),has:(e,t)=>!!v_(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(KA(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function KA(n){const e=n.getComponent();return e?.type==="VERSION"}const np="@firebase/app",w_="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new Sh("@firebase/app"),QA="@firebase/app-compat",JA="@firebase/analytics-compat",XA="@firebase/analytics",YA="@firebase/app-check-compat",ZA="@firebase/app-check",eC="@firebase/auth",tC="@firebase/auth-compat",nC="@firebase/database",rC="@firebase/data-connect",iC="@firebase/database-compat",sC="@firebase/functions",oC="@firebase/functions-compat",aC="@firebase/installations",lC="@firebase/installations-compat",uC="@firebase/messaging",cC="@firebase/messaging-compat",hC="@firebase/performance",dC="@firebase/performance-compat",fC="@firebase/remote-config",pC="@firebase/remote-config-compat",mC="@firebase/storage",gC="@firebase/storage-compat",yC="@firebase/firestore",_C="@firebase/ai",vC="@firebase/firestore-compat",wC="firebase",EC="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="[DEFAULT]",TC={[np]:"fire-core",[QA]:"fire-core-compat",[XA]:"fire-analytics",[JA]:"fire-analytics-compat",[ZA]:"fire-app-check",[YA]:"fire-app-check-compat",[eC]:"fire-auth",[tC]:"fire-auth-compat",[nC]:"fire-rtdb",[rC]:"fire-data-connect",[iC]:"fire-rtdb-compat",[sC]:"fire-fn",[oC]:"fire-fn-compat",[aC]:"fire-iid",[lC]:"fire-iid-compat",[uC]:"fire-fcm",[cC]:"fire-fcm-compat",[hC]:"fire-perf",[dC]:"fire-perf-compat",[fC]:"fire-rc",[pC]:"fire-rc-compat",[mC]:"fire-gcs",[gC]:"fire-gcs-compat",[yC]:"fire-fst",[vC]:"fire-fst-compat",[_C]:"fire-vertex","fire-js":"fire-js",[wC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=new Map,IC=new Map,ip=new Map;function E_(n,e){try{n.container.addComponent(e)}catch(t){Kr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function nr(n){const e=n.name;if(ip.has(e))return Kr.debug(`There were multiple attempts to register component ${e}.`),!1;ip.set(e,n);for(const t of qc.values())E_(t,n);for(const t of IC.values())E_(t,n);return!0}function Qi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Zn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Li=new Bs("app","Firebase",SC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Li.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=EC;function eE(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:rp,automaticDataCollectionEnabled:!0},e),o=r.name;if(typeof o!="string"||!o)throw Li.create("bad-app-name",{appName:String(o)});if(t||(t=qw()),!t)throw Li.create("no-options");const a=qc.get(o);if(a){if(Fi(t,a.options)&&Fi(r,a.config))return a;throw Li.create("duplicate-app",{appName:o})}const u=new bA(o);for(const p of ip.values())u.addComponent(p);const d=new RC(t,r,u);return qc.set(o,d),d}function Rh(n=rp){const e=qc.get(n);if(!e&&n===rp&&qw())return eE();if(!e)throw Li.create("no-app",{appName:n});return e}function fn(n,e,t){var r;let o=(r=TC[n])!==null&&r!==void 0?r:n;t&&(o+=`-${t}`);const a=o.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${o}" with version "${e}":`];a&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kr.warn(d.join(" "));return}nr(new Vn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC="firebase-heartbeat-database",CC=1,Nl="firebase-heartbeat-store";let bf=null;function tE(){return bf||(bf=Zw(AC,CC,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Nl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Li.create("idb-open",{originalErrorMessage:n.message})})),bf}async function PC(n){try{const t=(await tE()).transaction(Nl),r=await t.objectStore(Nl).get(nE(n));return await t.done,r}catch(e){if(e instanceof Mn)Kr.warn(e.message);else{const t=Li.create("idb-get",{originalErrorMessage:e?.message});Kr.warn(t.message)}}}async function T_(n,e){try{const r=(await tE()).transaction(Nl,"readwrite");await r.objectStore(Nl).put(e,nE(n)),await r.done}catch(t){if(t instanceof Mn)Kr.warn(t.message);else{const r=Li.create("idb-set",{originalErrorMessage:t?.message});Kr.warn(r.message)}}}function nE(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=1024,NC=30;class xC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new OC(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=I_();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats.length>NC){const u=DC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Kr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=I_(),{heartbeatsToSend:r,unsentEntries:o}=bC(this._heartbeatsCache.heartbeats),a=Hc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Kr.warn(t),""}}}function I_(){return new Date().toISOString().substring(0,10)}function bC(n,e=kC){const t=[];let r=n.slice();for(const o of n){const a=t.find(u=>u.agent===o.agent);if(a){if(a.dates.push(o.date),S_(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),S_(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class OC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qw()?Jw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await PC(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return T_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return T_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function S_(n){return Hc(JSON.stringify({version:2,heartbeats:n})).length}function DC(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(n){nr(new Vn("platform-logger",e=>new GA(e),"PRIVATE")),nr(new Vn("heartbeat",e=>new xC(e),"PRIVATE")),fn(np,w_,n),fn(np,w_,"esm2017"),fn("fire-js","")}LC("");var VC="firebase",MC="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn(VC,MC,"app");var R_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vi,rE;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,S){function k(){}k.prototype=S.prototype,x.D=S.prototype,x.prototype=new k,x.prototype.constructor=x,x.C=function(b,D,U){for(var C=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)C[$e-2]=arguments[$e];return S.prototype[D].apply(b,C)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,S,k){k||(k=0);var b=Array(16);if(typeof S=="string")for(var D=0;16>D;++D)b[D]=S.charCodeAt(k++)|S.charCodeAt(k++)<<8|S.charCodeAt(k++)<<16|S.charCodeAt(k++)<<24;else for(D=0;16>D;++D)b[D]=S[k++]|S[k++]<<8|S[k++]<<16|S[k++]<<24;S=x.g[0],k=x.g[1],D=x.g[2];var U=x.g[3],C=S+(U^k&(D^U))+b[0]+3614090360&4294967295;S=k+(C<<7&4294967295|C>>>25),C=U+(D^S&(k^D))+b[1]+3905402710&4294967295,U=S+(C<<12&4294967295|C>>>20),C=D+(k^U&(S^k))+b[2]+606105819&4294967295,D=U+(C<<17&4294967295|C>>>15),C=k+(S^D&(U^S))+b[3]+3250441966&4294967295,k=D+(C<<22&4294967295|C>>>10),C=S+(U^k&(D^U))+b[4]+4118548399&4294967295,S=k+(C<<7&4294967295|C>>>25),C=U+(D^S&(k^D))+b[5]+1200080426&4294967295,U=S+(C<<12&4294967295|C>>>20),C=D+(k^U&(S^k))+b[6]+2821735955&4294967295,D=U+(C<<17&4294967295|C>>>15),C=k+(S^D&(U^S))+b[7]+4249261313&4294967295,k=D+(C<<22&4294967295|C>>>10),C=S+(U^k&(D^U))+b[8]+1770035416&4294967295,S=k+(C<<7&4294967295|C>>>25),C=U+(D^S&(k^D))+b[9]+2336552879&4294967295,U=S+(C<<12&4294967295|C>>>20),C=D+(k^U&(S^k))+b[10]+4294925233&4294967295,D=U+(C<<17&4294967295|C>>>15),C=k+(S^D&(U^S))+b[11]+2304563134&4294967295,k=D+(C<<22&4294967295|C>>>10),C=S+(U^k&(D^U))+b[12]+1804603682&4294967295,S=k+(C<<7&4294967295|C>>>25),C=U+(D^S&(k^D))+b[13]+4254626195&4294967295,U=S+(C<<12&4294967295|C>>>20),C=D+(k^U&(S^k))+b[14]+2792965006&4294967295,D=U+(C<<17&4294967295|C>>>15),C=k+(S^D&(U^S))+b[15]+1236535329&4294967295,k=D+(C<<22&4294967295|C>>>10),C=S+(D^U&(k^D))+b[1]+4129170786&4294967295,S=k+(C<<5&4294967295|C>>>27),C=U+(k^D&(S^k))+b[6]+3225465664&4294967295,U=S+(C<<9&4294967295|C>>>23),C=D+(S^k&(U^S))+b[11]+643717713&4294967295,D=U+(C<<14&4294967295|C>>>18),C=k+(U^S&(D^U))+b[0]+3921069994&4294967295,k=D+(C<<20&4294967295|C>>>12),C=S+(D^U&(k^D))+b[5]+3593408605&4294967295,S=k+(C<<5&4294967295|C>>>27),C=U+(k^D&(S^k))+b[10]+38016083&4294967295,U=S+(C<<9&4294967295|C>>>23),C=D+(S^k&(U^S))+b[15]+3634488961&4294967295,D=U+(C<<14&4294967295|C>>>18),C=k+(U^S&(D^U))+b[4]+3889429448&4294967295,k=D+(C<<20&4294967295|C>>>12),C=S+(D^U&(k^D))+b[9]+568446438&4294967295,S=k+(C<<5&4294967295|C>>>27),C=U+(k^D&(S^k))+b[14]+3275163606&4294967295,U=S+(C<<9&4294967295|C>>>23),C=D+(S^k&(U^S))+b[3]+4107603335&4294967295,D=U+(C<<14&4294967295|C>>>18),C=k+(U^S&(D^U))+b[8]+1163531501&4294967295,k=D+(C<<20&4294967295|C>>>12),C=S+(D^U&(k^D))+b[13]+2850285829&4294967295,S=k+(C<<5&4294967295|C>>>27),C=U+(k^D&(S^k))+b[2]+4243563512&4294967295,U=S+(C<<9&4294967295|C>>>23),C=D+(S^k&(U^S))+b[7]+1735328473&4294967295,D=U+(C<<14&4294967295|C>>>18),C=k+(U^S&(D^U))+b[12]+2368359562&4294967295,k=D+(C<<20&4294967295|C>>>12),C=S+(k^D^U)+b[5]+4294588738&4294967295,S=k+(C<<4&4294967295|C>>>28),C=U+(S^k^D)+b[8]+2272392833&4294967295,U=S+(C<<11&4294967295|C>>>21),C=D+(U^S^k)+b[11]+1839030562&4294967295,D=U+(C<<16&4294967295|C>>>16),C=k+(D^U^S)+b[14]+4259657740&4294967295,k=D+(C<<23&4294967295|C>>>9),C=S+(k^D^U)+b[1]+2763975236&4294967295,S=k+(C<<4&4294967295|C>>>28),C=U+(S^k^D)+b[4]+1272893353&4294967295,U=S+(C<<11&4294967295|C>>>21),C=D+(U^S^k)+b[7]+4139469664&4294967295,D=U+(C<<16&4294967295|C>>>16),C=k+(D^U^S)+b[10]+3200236656&4294967295,k=D+(C<<23&4294967295|C>>>9),C=S+(k^D^U)+b[13]+681279174&4294967295,S=k+(C<<4&4294967295|C>>>28),C=U+(S^k^D)+b[0]+3936430074&4294967295,U=S+(C<<11&4294967295|C>>>21),C=D+(U^S^k)+b[3]+3572445317&4294967295,D=U+(C<<16&4294967295|C>>>16),C=k+(D^U^S)+b[6]+76029189&4294967295,k=D+(C<<23&4294967295|C>>>9),C=S+(k^D^U)+b[9]+3654602809&4294967295,S=k+(C<<4&4294967295|C>>>28),C=U+(S^k^D)+b[12]+3873151461&4294967295,U=S+(C<<11&4294967295|C>>>21),C=D+(U^S^k)+b[15]+530742520&4294967295,D=U+(C<<16&4294967295|C>>>16),C=k+(D^U^S)+b[2]+3299628645&4294967295,k=D+(C<<23&4294967295|C>>>9),C=S+(D^(k|~U))+b[0]+4096336452&4294967295,S=k+(C<<6&4294967295|C>>>26),C=U+(k^(S|~D))+b[7]+1126891415&4294967295,U=S+(C<<10&4294967295|C>>>22),C=D+(S^(U|~k))+b[14]+2878612391&4294967295,D=U+(C<<15&4294967295|C>>>17),C=k+(U^(D|~S))+b[5]+4237533241&4294967295,k=D+(C<<21&4294967295|C>>>11),C=S+(D^(k|~U))+b[12]+1700485571&4294967295,S=k+(C<<6&4294967295|C>>>26),C=U+(k^(S|~D))+b[3]+2399980690&4294967295,U=S+(C<<10&4294967295|C>>>22),C=D+(S^(U|~k))+b[10]+4293915773&4294967295,D=U+(C<<15&4294967295|C>>>17),C=k+(U^(D|~S))+b[1]+2240044497&4294967295,k=D+(C<<21&4294967295|C>>>11),C=S+(D^(k|~U))+b[8]+1873313359&4294967295,S=k+(C<<6&4294967295|C>>>26),C=U+(k^(S|~D))+b[15]+4264355552&4294967295,U=S+(C<<10&4294967295|C>>>22),C=D+(S^(U|~k))+b[6]+2734768916&4294967295,D=U+(C<<15&4294967295|C>>>17),C=k+(U^(D|~S))+b[13]+1309151649&4294967295,k=D+(C<<21&4294967295|C>>>11),C=S+(D^(k|~U))+b[4]+4149444226&4294967295,S=k+(C<<6&4294967295|C>>>26),C=U+(k^(S|~D))+b[11]+3174756917&4294967295,U=S+(C<<10&4294967295|C>>>22),C=D+(S^(U|~k))+b[2]+718787259&4294967295,D=U+(C<<15&4294967295|C>>>17),C=k+(U^(D|~S))+b[9]+3951481745&4294967295,x.g[0]=x.g[0]+S&4294967295,x.g[1]=x.g[1]+(D+(C<<21&4294967295|C>>>11))&4294967295,x.g[2]=x.g[2]+D&4294967295,x.g[3]=x.g[3]+U&4294967295}r.prototype.u=function(x,S){S===void 0&&(S=x.length);for(var k=S-this.blockSize,b=this.B,D=this.h,U=0;U<S;){if(D==0)for(;U<=k;)o(this,x,U),U+=this.blockSize;if(typeof x=="string"){for(;U<S;)if(b[D++]=x.charCodeAt(U++),D==this.blockSize){o(this,b),D=0;break}}else for(;U<S;)if(b[D++]=x[U++],D==this.blockSize){o(this,b),D=0;break}}this.h=D,this.o+=S},r.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var S=1;S<x.length-8;++S)x[S]=0;var k=8*this.o;for(S=x.length-8;S<x.length;++S)x[S]=k&255,k/=256;for(this.u(x),x=Array(16),S=k=0;4>S;++S)for(var b=0;32>b;b+=8)x[k++]=this.g[S]>>>b&255;return x};function a(x,S){var k=d;return Object.prototype.hasOwnProperty.call(k,x)?k[x]:k[x]=S(x)}function u(x,S){this.h=S;for(var k=[],b=!0,D=x.length-1;0<=D;D--){var U=x[D]|0;b&&U==S||(k[D]=U,b=!1)}this.g=k}var d={};function p(x){return-128<=x&&128>x?a(x,function(S){return new u([S|0],0>S?-1:0)}):new u([x|0],0>x?-1:0)}function y(x){if(isNaN(x)||!isFinite(x))return E;if(0>x)return A(y(-x));for(var S=[],k=1,b=0;x>=k;b++)S[b]=x/k|0,k*=4294967296;return new u(S,0)}function v(x,S){if(x.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x.charAt(0)=="-")return A(v(x.substring(1),S));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=y(Math.pow(S,8)),b=E,D=0;D<x.length;D+=8){var U=Math.min(8,x.length-D),C=parseInt(x.substring(D,D+U),S);8>U?(U=y(Math.pow(S,U)),b=b.j(U).add(y(C))):(b=b.j(k),b=b.add(y(C)))}return b}var E=p(0),I=p(1),L=p(16777216);n=u.prototype,n.m=function(){if(V(this))return-A(this).m();for(var x=0,S=1,k=0;k<this.g.length;k++){var b=this.i(k);x+=(0<=b?b:4294967296+b)*S,S*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(P(this))return"0";if(V(this))return"-"+A(this).toString(x);for(var S=y(Math.pow(x,6)),k=this,b="";;){var D=te(k,S).g;k=X(k,D.j(S));var U=((0<k.g.length?k.g[0]:k.h)>>>0).toString(x);if(k=D,P(k))return U+b;for(;6>U.length;)U="0"+U;b=U+b}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function P(x){if(x.h!=0)return!1;for(var S=0;S<x.g.length;S++)if(x.g[S]!=0)return!1;return!0}function V(x){return x.h==-1}n.l=function(x){return x=X(this,x),V(x)?-1:P(x)?0:1};function A(x){for(var S=x.g.length,k=[],b=0;b<S;b++)k[b]=~x.g[b];return new u(k,~x.h).add(I)}n.abs=function(){return V(this)?A(this):this},n.add=function(x){for(var S=Math.max(this.g.length,x.g.length),k=[],b=0,D=0;D<=S;D++){var U=b+(this.i(D)&65535)+(x.i(D)&65535),C=(U>>>16)+(this.i(D)>>>16)+(x.i(D)>>>16);b=C>>>16,U&=65535,C&=65535,k[D]=C<<16|U}return new u(k,k[k.length-1]&-2147483648?-1:0)};function X(x,S){return x.add(A(S))}n.j=function(x){if(P(this)||P(x))return E;if(V(this))return V(x)?A(this).j(A(x)):A(A(this).j(x));if(V(x))return A(this.j(A(x)));if(0>this.l(L)&&0>x.l(L))return y(this.m()*x.m());for(var S=this.g.length+x.g.length,k=[],b=0;b<2*S;b++)k[b]=0;for(b=0;b<this.g.length;b++)for(var D=0;D<x.g.length;D++){var U=this.i(b)>>>16,C=this.i(b)&65535,$e=x.i(D)>>>16,yt=x.i(D)&65535;k[2*b+2*D]+=C*yt,Y(k,2*b+2*D),k[2*b+2*D+1]+=U*yt,Y(k,2*b+2*D+1),k[2*b+2*D+1]+=C*$e,Y(k,2*b+2*D+1),k[2*b+2*D+2]+=U*$e,Y(k,2*b+2*D+2)}for(b=0;b<S;b++)k[b]=k[2*b+1]<<16|k[2*b];for(b=S;b<2*S;b++)k[b]=0;return new u(k,0)};function Y(x,S){for(;(x[S]&65535)!=x[S];)x[S+1]+=x[S]>>>16,x[S]&=65535,S++}function K(x,S){this.g=x,this.h=S}function te(x,S){if(P(S))throw Error("division by zero");if(P(x))return new K(E,E);if(V(x))return S=te(A(x),S),new K(A(S.g),A(S.h));if(V(S))return S=te(x,A(S)),new K(A(S.g),S.h);if(30<x.g.length){if(V(x)||V(S))throw Error("slowDivide_ only works with positive integers.");for(var k=I,b=S;0>=b.l(x);)k=_e(k),b=_e(b);var D=me(k,1),U=me(b,1);for(b=me(b,2),k=me(k,2);!P(b);){var C=U.add(b);0>=C.l(x)&&(D=D.add(k),U=C),b=me(b,1),k=me(k,1)}return S=X(x,D.j(S)),new K(D,S)}for(D=E;0<=x.l(S);){for(k=Math.max(1,Math.floor(x.m()/S.m())),b=Math.ceil(Math.log(k)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),U=y(k),C=U.j(S);V(C)||0<C.l(x);)k-=b,U=y(k),C=U.j(S);P(U)&&(U=I),D=D.add(U),x=X(x,C)}return new K(D,x)}n.A=function(x){return te(this,x).h},n.and=function(x){for(var S=Math.max(this.g.length,x.g.length),k=[],b=0;b<S;b++)k[b]=this.i(b)&x.i(b);return new u(k,this.h&x.h)},n.or=function(x){for(var S=Math.max(this.g.length,x.g.length),k=[],b=0;b<S;b++)k[b]=this.i(b)|x.i(b);return new u(k,this.h|x.h)},n.xor=function(x){for(var S=Math.max(this.g.length,x.g.length),k=[],b=0;b<S;b++)k[b]=this.i(b)^x.i(b);return new u(k,this.h^x.h)};function _e(x){for(var S=x.g.length+1,k=[],b=0;b<S;b++)k[b]=x.i(b)<<1|x.i(b-1)>>>31;return new u(k,x.h)}function me(x,S){var k=S>>5;S%=32;for(var b=x.g.length-k,D=[],U=0;U<b;U++)D[U]=0<S?x.i(U+k)>>>S|x.i(U+k+1)<<32-S:x.i(U+k);return new u(D,x.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,rE=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=y,u.fromString=v,Vi=u}).apply(typeof R_<"u"?R_:typeof self<"u"?self:typeof window<"u"?window:{});var vc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var iE,pl,sE,Nc,sp,oE,aE,lE;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,m,_){return c==Array.prototype||c==Object.prototype||(c[m]=_.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof vc=="object"&&vc];for(var m=0;m<c.length;++m){var _=c[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var r=t(this);function o(c,m){if(m)e:{var _=r;c=c.split(".");for(var T=0;T<c.length-1;T++){var F=c[T];if(!(F in _))break e;_=_[F]}c=c[c.length-1],T=_[c],m=m(T),m!=T&&m!=null&&e(_,c,{configurable:!0,writable:!0,value:m})}}function a(c,m){c instanceof String&&(c+="");var _=0,T=!1,F={next:function(){if(!T&&_<c.length){var q=_++;return{value:m(q,c[q]),done:!1}}return T=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}o("Array.prototype.values",function(c){return c||function(){return a(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function p(c){var m=typeof c;return m=m!="object"?m:c?Array.isArray(c)?"array":m:"null",m=="array"||m=="object"&&typeof c.length=="number"}function y(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function v(c,m,_){return c.call.apply(c.bind,arguments)}function E(c,m,_){if(!c)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,T),c.apply(m,F)}}return function(){return c.apply(m,arguments)}}function I(c,m,_){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:E,I.apply(null,arguments)}function L(c,m){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function P(c,m){function _(){}_.prototype=m.prototype,c.aa=m.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(T,F,q){for(var se=Array(arguments.length-2),He=2;He<arguments.length;He++)se[He-2]=arguments[He];return m.prototype[F].apply(T,se)}}function V(c){const m=c.length;if(0<m){const _=Array(m);for(let T=0;T<m;T++)_[T]=c[T];return _}return[]}function A(c,m){for(let _=1;_<arguments.length;_++){const T=arguments[_];if(p(T)){const F=c.length||0,q=T.length||0;c.length=F+q;for(let se=0;se<q;se++)c[F+se]=T[se]}else c.push(T)}}class X{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function Y(c){return/^[\s\xa0]*$/.test(c)}function K(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function te(c){return te[" "](c),c}te[" "]=function(){};var _e=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function me(c,m,_){for(const T in c)m.call(_,c[T],T,c)}function x(c,m){for(const _ in c)m.call(void 0,c[_],_,c)}function S(c){const m={};for(const _ in c)m[_]=c[_];return m}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(c,m){let _,T;for(let F=1;F<arguments.length;F++){T=arguments[F];for(_ in T)c[_]=T[_];for(let q=0;q<k.length;q++)_=k[q],Object.prototype.hasOwnProperty.call(T,_)&&(c[_]=T[_])}}function D(c){var m=1;c=c.split(":");const _=[];for(;0<m&&c.length;)_.push(c.shift()),m--;return c.length&&_.push(c.join(":")),_}function U(c){d.setTimeout(()=>{throw c},0)}function C(){var c=ge;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class $e{constructor(){this.h=this.g=null}add(m,_){const T=yt.get();T.set(m,_),this.h?this.h.next=T:this.g=T,this.h=T}}var yt=new X(()=>new qe,c=>c.reset());class qe{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Fe,ie=!1,ge=new $e,oe=()=>{const c=d.Promise.resolve(void 0);Fe=()=>{c.then(M)}};var M=()=>{for(var c;c=C();){try{c.h.call(c.g)}catch(_){U(_)}var m=yt;m.j(c),100>m.h&&(m.h++,c.next=m.g,m.g=c)}ie=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Re=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};d.addEventListener("test",_,m),d.removeEventListener("test",_,m)}catch{}return c})();function Pe(c,m){if(de.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget){if(_e){e:{try{te(m.nodeName);var F=!0;break e}catch{}F=!1}F||(m=null)}}else _=="mouseover"?m=c.fromElement:_=="mouseout"&&(m=c.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:De[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Pe.aa.h.call(this)}}P(Pe,de);var De={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var je="closure_listenable_"+(1e6*Math.random()|0),Be=0;function Ge(c,m,_,T,F){this.listener=c,this.proxy=null,this.src=m,this.type=_,this.capture=!!T,this.ha=F,this.key=++Be,this.da=this.fa=!1}function At(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Cr(c){this.src=c,this.g={},this.h=0}Cr.prototype.add=function(c,m,_,T,F){var q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);var se=Zr(c,m,T,F);return-1<se?(m=c[se],_||(m.fa=!1)):(m=new Ge(m,this.src,q,!!T,F),m.fa=_,c.push(m)),m};function Gs(c,m){var _=m.type;if(_ in c.g){var T=c.g[_],F=Array.prototype.indexOf.call(T,m,void 0),q;(q=0<=F)&&Array.prototype.splice.call(T,F,1),q&&(At(m),c.g[_].length==0&&(delete c.g[_],c.h--))}}function Zr(c,m,_,T){for(var F=0;F<c.length;++F){var q=c[F];if(!q.da&&q.listener==m&&q.capture==!!_&&q.ha==T)return F}return-1}var Ji="closure_lm_"+(1e6*Math.random()|0),Ks={};function ma(c,m,_,T,F){if(Array.isArray(m)){for(var q=0;q<m.length;q++)ma(c,m[q],_,T,F);return null}return _=_a(_),c&&c[je]?c.K(m,_,y(T)?!!T.capture:!1,F):ga(c,m,_,!1,T,F)}function ga(c,m,_,T,F,q){if(!m)throw Error("Invalid event type");var se=y(F)?!!F.capture:!!F,He=Js(c);if(He||(c[Ji]=He=new Cr(c)),_=He.add(m,_,T,se,q),_.proxy)return _;if(T=nu(),_.proxy=T,T.src=c,T.listener=_,c.addEventListener)Re||(F=se),F===void 0&&(F=!1),c.addEventListener(m.toString(),T,F);else if(c.attachEvent)c.attachEvent(kr(m.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function nu(){function c(_){return m.call(c.src,c.listener,_)}const m=ya;return c}function Qs(c,m,_,T,F){if(Array.isArray(m))for(var q=0;q<m.length;q++)Qs(c,m[q],_,T,F);else T=y(T)?!!T.capture:!!T,_=_a(_),c&&c[je]?(c=c.i,m=String(m).toString(),m in c.g&&(q=c.g[m],_=Zr(q,_,T,F),-1<_&&(At(q[_]),Array.prototype.splice.call(q,_,1),q.length==0&&(delete c.g[m],c.h--)))):c&&(c=Js(c))&&(m=c.g[m.toString()],c=-1,m&&(c=Zr(m,_,T,F)),(_=-1<c?m[c]:null)&&Pr(_))}function Pr(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[je])Gs(m.i,c);else{var _=c.type,T=c.proxy;m.removeEventListener?m.removeEventListener(_,T,c.capture):m.detachEvent?m.detachEvent(kr(_),T):m.addListener&&m.removeListener&&m.removeListener(T),(_=Js(m))?(Gs(_,c),_.h==0&&(_.src=null,m[Ji]=null)):At(c)}}}function kr(c){return c in Ks?Ks[c]:Ks[c]="on"+c}function ya(c,m){if(c.da)c=!0;else{m=new Pe(m,this);var _=c.listener,T=c.ha||c.src;c.fa&&Pr(c),c=_.call(T,m)}return c}function Js(c){return c=c[Ji],c instanceof Cr?c:null}var Xs="__closure_events_fn_"+(1e9*Math.random()>>>0);function _a(c){return typeof c=="function"?c:(c[Xs]||(c[Xs]=function(m){return c.handleEvent(m)}),c[Xs])}function _t(){W.call(this),this.i=new Cr(this),this.M=this,this.F=null}P(_t,W),_t.prototype[je]=!0,_t.prototype.removeEventListener=function(c,m,_,T){Qs(this,c,m,_,T)};function vt(c,m){var _,T=c.F;if(T)for(_=[];T;T=T.F)_.push(T);if(c=c.M,T=m.type||m,typeof m=="string")m=new de(m,c);else if(m instanceof de)m.target=m.target||c;else{var F=m;m=new de(T,c),b(m,F)}if(F=!0,_)for(var q=_.length-1;0<=q;q--){var se=m.g=_[q];F=Nr(se,T,!0,m)&&F}if(se=m.g=c,F=Nr(se,T,!0,m)&&F,F=Nr(se,T,!1,m)&&F,_)for(q=0;q<_.length;q++)se=m.g=_[q],F=Nr(se,T,!1,m)&&F}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var c=this.i,m;for(m in c.g){for(var _=c.g[m],T=0;T<_.length;T++)At(_[T]);delete c.g[m],c.h--}}this.F=null},_t.prototype.K=function(c,m,_,T){return this.i.add(String(c),m,!1,_,T)},_t.prototype.L=function(c,m,_,T){return this.i.add(String(c),m,!0,_,T)};function Nr(c,m,_,T){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();for(var F=!0,q=0;q<m.length;++q){var se=m[q];if(se&&!se.da&&se.capture==_){var He=se.listener,wt=se.ha||se.src;se.fa&&Gs(c.i,se),F=He.call(wt,T)!==!1&&F}}return F&&!T.defaultPrevented}function va(c,m,_){if(typeof c=="function")_&&(c=I(c,_));else if(c&&typeof c.handleEvent=="function")c=I(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(c,m||0)}function ei(c){c.g=va(()=>{c.g=null,c.i&&(c.i=!1,ei(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class Xi extends W{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:ei(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yi(c){W.call(this),this.h=c,this.g={}}P(Yi,W);var wa=[];function Ea(c){me(c.g,function(m,_){this.g.hasOwnProperty(_)&&Pr(m)},c),c.g={}}Yi.prototype.N=function(){Yi.aa.N.call(this),Ea(this)},Yi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ta=d.JSON.stringify,Ia=d.JSON.parse,Sa=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function Zi(){}Zi.prototype.h=null;function Ys(c){return c.h||(c.h=c.i())}function Zs(){}var Sn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ir(){de.call(this,"d")}P(ir,de);function eo(){de.call(this,"c")}P(eo,de);var sr={},Ra=null;function es(){return Ra=Ra||new _t}sr.La="serverreachability";function Aa(c){de.call(this,sr.La,c)}P(Aa,de);function xr(c){const m=es();vt(m,new Aa(m))}sr.STAT_EVENT="statevent";function Ca(c,m){de.call(this,sr.STAT_EVENT,c),this.stat=m}P(Ca,de);function ut(c){const m=es();vt(m,new Ca(m,c))}sr.Ma="timingevent";function to(c,m){de.call(this,sr.Ma,c),this.size=m}P(to,de);function Un(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},m)}function ts(){this.g=!0}ts.prototype.xa=function(){this.g=!1};function ns(c,m,_,T,F,q){c.info(function(){if(c.g)if(q)for(var se="",He=q.split("&"),wt=0;wt<He.length;wt++){var Le=He[wt].split("=");if(1<Le.length){var Ct=Le[0];Le=Le[1];var ft=Ct.split("_");se=2<=ft.length&&ft[1]=="type"?se+(Ct+"="+Le+"&"):se+(Ct+"=redacted&")}}else se=null;else se=q;return"XMLHTTP REQ ("+T+") [attempt "+F+"]: "+m+`
`+_+`
`+se})}function no(c,m,_,T,F,q,se){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+F+"]: "+m+`
`+_+`
`+q+" "+se})}function Fn(c,m,_,T){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+Wh(c,_)+(T?" "+T:"")})}function Pa(c,m){c.info(function(){return"TIMEOUT: "+m})}ts.prototype.info=function(){};function Wh(c,m){if(!c.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var T=_[c];if(!(2>T.length)){var F=T[1];if(Array.isArray(F)&&!(1>F.length)){var q=F[0];if(q!="noop"&&q!="stop"&&q!="close")for(var se=1;se<F.length;se++)F[se]=""}}}}return Ta(_)}catch{return m}}var ro={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ru={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},jn;function rs(){}P(rs,Zi),rs.prototype.g=function(){return new XMLHttpRequest},rs.prototype.i=function(){return{}},jn=new rs;function Bn(c,m,_,T){this.j=c,this.i=m,this.l=_,this.R=T||1,this.U=new Yi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new iu}function iu(){this.i=null,this.g="",this.h=!1}var ka={},io={};function so(c,m,_){c.L=1,c.v=si(gn(m)),c.m=_,c.P=!0,Na(c,null)}function Na(c,m){c.F=Date.now(),Ke(c),c.A=gn(c.v);var _=c.A,T=c.R;Array.isArray(T)||(T=[String(T)]),ai(_.i,"t",T),c.C=0,_=c.j.J,c.h=new iu,c.g=Tu(c.j,_?m:null,!c.m),0<c.O&&(c.M=new Xi(I(c.Y,c,c.g),c.O)),m=c.U,_=c.g,T=c.ca;var F="readystatechange";Array.isArray(F)||(F&&(wa[0]=F.toString()),F=wa);for(var q=0;q<F.length;q++){var se=ma(_,F[q],T||m.handleEvent,!1,m.h||m);if(!se)break;m.g[se.key]=se}m=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,m)):(c.u="GET",c.g.ea(c.A,c.u,null,m)),xr(),ns(c.i,c.u,c.A,c.l,c.R,c.m)}Bn.prototype.ca=function(c){c=c.target;const m=this.M;m&&tn(c)==3?m.j():this.Y(c)},Bn.prototype.Y=function(c){try{if(c==this.g)e:{const ft=tn(this.g);var m=this.g.Ba();const Cn=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Va(this.g)))){this.J||ft!=4||m==7||(m==8||0>=Cn?xr(3):xr(2)),is(this);var _=this.g.Z();this.X=_;t:if(su(this)){var T=Va(this.g);c="";var F=T.length,q=tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rn(this),ti(this);var se="";break t}this.h.i=new d.TextDecoder}for(m=0;m<F;m++)this.h.h=!0,c+=this.h.i.decode(T[m],{stream:!(q&&m==F-1)});T.length=0,this.h.g+=c,this.C=0,se=this.h.g}else se=this.g.oa();if(this.o=_==200,no(this.i,this.u,this.A,this.l,this.R,ft,_),this.o){if(this.T&&!this.K){t:{if(this.g){var He,wt=this.g;if((He=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(He)){var Le=He;break t}}Le=null}if(_=Le)Fn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xa(this,_);else{this.o=!1,this.s=3,ut(12),Rn(this),ti(this);break e}}if(this.P){_=!0;let _n;for(;!this.J&&this.C<se.length;)if(_n=Gh(this,se),_n==io){ft==4&&(this.s=4,ut(14),_=!1),Fn(this.i,this.l,null,"[Incomplete Response]");break}else if(_n==ka){this.s=4,ut(15),Fn(this.i,this.l,se,"[Invalid Chunk]"),_=!1;break}else Fn(this.i,this.l,_n,null),xa(this,_n);if(su(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||se.length!=0||this.h.h||(this.s=1,ut(16),_=!1),this.o=this.o&&_,!_)Fn(this.i,this.l,se,"[Invalid Chunked Response]"),Rn(this),ti(this);else if(0<se.length&&!this.W){this.W=!0;var Ct=this.j;Ct.g==this&&Ct.ba&&!Ct.M&&(Ct.j.info("Great, no buffering proxy detected. Bytes received: "+se.length),Ua(Ct),Ct.M=!0,ut(11))}}else Fn(this.i,this.l,se,null),xa(this,se);ft==4&&Rn(this),this.o&&!this.J&&(ft==4?yo(this.j,this):(this.o=!1,Ke(this)))}else ho(this.g),_==400&&0<se.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),Rn(this),ti(this)}}}catch{}finally{}};function su(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Gh(c,m){var _=c.C,T=m.indexOf(`
`,_);return T==-1?io:(_=Number(m.substring(_,T)),isNaN(_)?ka:(T+=1,T+_>m.length?io:(m=m.slice(T,T+_),c.C=T+_,m)))}Bn.prototype.cancel=function(){this.J=!0,Rn(this)};function Ke(c){c.S=Date.now()+c.I,ou(c,c.I)}function ou(c,m){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Un(I(c.ba,c),m)}function is(c){c.B&&(d.clearTimeout(c.B),c.B=null)}Bn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Pa(this.i,this.A),this.L!=2&&(xr(),ut(17)),Rn(this),this.s=2,ti(this)):ou(this,this.S-c)};function ti(c){c.j.G==0||c.J||yo(c.j,c)}function Rn(c){is(c);var m=c.M;m&&typeof m.ma=="function"&&m.ma(),c.M=null,Ea(c.U),c.g&&(m=c.g,c.g=null,m.abort(),m.ma())}function xa(c,m){try{var _=c.j;if(_.G!=0&&(_.g==c||Qt(_.h,c))){if(!c.K&&Qt(_.h,c)&&_.G==3){try{var T=_.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var F=T;if(F[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)go(_),Wn(_);else break e;mo(_),ut(18)}}else _.za=F[1],0<_.za-_.T&&37500>F[2]&&_.F&&_.v==0&&!_.C&&(_.C=Un(I(_.Za,_),6e3));if(1>=lu(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Vr(_,11)}else if((c.K||_.g==c)&&go(_),!Y(m))for(F=_.Da.g.parse(m),m=0;m<F.length;m++){let Le=F[m];if(_.T=Le[0],Le=Le[1],_.G==2)if(Le[0]=="c"){_.K=Le[1],_.ia=Le[2];const Ct=Le[3];Ct!=null&&(_.la=Ct,_.j.info("VER="+_.la));const ft=Le[4];ft!=null&&(_.Aa=ft,_.j.info("SVER="+_.Aa));const Cn=Le[5];Cn!=null&&typeof Cn=="number"&&0<Cn&&(T=1.5*Cn,_.L=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const _n=c.g;if(_n){const hs=_n.g?_n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hs){var q=T.h;q.g||hs.indexOf("spdy")==-1&&hs.indexOf("quic")==-1&&hs.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(ba(q,q.h),q.h=null))}if(T.D){const vo=_n.g?_n.g.getResponseHeader("X-HTTP-Session-Id"):null;vo&&(T.ya=vo,We(T.I,T.D,vo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),T=_;var se=c;if(T.qa=Eu(T,T.J?T.ia:null,T.W),se.K){uu(T.h,se);var He=se,wt=T.L;wt&&(He.I=wt),He.B&&(is(He),Ke(He)),T.g=se}else cs(T);0<_.i.length&&ur(_)}else Le[0]!="stop"&&Le[0]!="close"||Vr(_,7);else _.G==3&&(Le[0]=="stop"||Le[0]=="close"?Le[0]=="stop"?Vr(_,7):Ot(_):Le[0]!="noop"&&_.l&&_.l.ta(Le),_.v=0)}}xr(4)}catch{}}var au=class{constructor(c,m){this.g=c,this.map=m}};function ss(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function mn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function lu(c){return c.h?1:c.g?c.g.size:0}function Qt(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function ba(c,m){c.g?c.g.add(m):c.h=m}function uu(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}ss.prototype.cancel=function(){if(this.i=cu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function cu(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const _ of c.g.values())m=m.concat(_.D);return m}return V(c.i)}function oo(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(p(c)){for(var m=[],_=c.length,T=0;T<_;T++)m.push(c[T]);return m}m=[],_=0;for(T in c)m[_++]=c[T];return m}function ao(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(p(c)||typeof c=="string"){var m=[];c=c.length;for(var _=0;_<c;_++)m.push(_);return m}m=[],_=0;for(const T in c)m[_++]=T;return m}}}function ni(c,m){if(c.forEach&&typeof c.forEach=="function")c.forEach(m,void 0);else if(p(c)||typeof c=="string")Array.prototype.forEach.call(c,m,void 0);else for(var _=ao(c),T=oo(c),F=T.length,q=0;q<F;q++)m.call(void 0,T[q],_&&_[q],c)}var os=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kh(c,m){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var T=c[_].indexOf("="),F=null;if(0<=T){var q=c[_].substring(0,T);F=c[_].substring(T+1)}else q=c[_];m(q,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function br(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof br){this.h=c.h,as(this,c.j),this.o=c.o,this.g=c.g,ri(this,c.s),this.l=c.l;var m=c.i,_=new or;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),ii(this,_),this.m=c.m}else c&&(m=String(c).match(os))?(this.h=!1,as(this,m[1]||"",!0),this.o=Oe(m[2]||""),this.g=Oe(m[3]||"",!0),ri(this,m[4]),this.l=Oe(m[5]||"",!0),ii(this,m[6]||"",!0),this.m=Oe(m[7]||"")):(this.h=!1,this.i=new or(null,this.h))}br.prototype.toString=function(){var c=[],m=this.j;m&&c.push(oi(m,lo,!0),":");var _=this.g;return(_||m=="file")&&(c.push("//"),(m=this.o)&&c.push(oi(m,lo,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(oi(_,_.charAt(0)=="/"?fu:du,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",oi(_,Oa)),c.join("")};function gn(c){return new br(c)}function as(c,m,_){c.j=_?Oe(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function ri(c,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);c.s=m}else c.s=null}function ii(c,m,_){m instanceof or?(c.i=m,ar(c.i,c.h)):(_||(m=oi(m,pu)),c.i=new or(m,c.h))}function We(c,m,_){c.i.set(m,_)}function si(c){return We(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Oe(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function oi(c,m,_){return typeof c=="string"?(c=encodeURI(c).replace(m,hu),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function hu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var lo=/[#\/\?@]/g,du=/[#\?:]/g,fu=/[#\?]/g,pu=/[#\?@]/g,Oa=/#/g;function or(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function bt(c){c.g||(c.g=new Map,c.h=0,c.i&&Kh(c.i,function(m,_){c.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=or.prototype,n.add=function(c,m){bt(this),this.i=null,c=An(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(m),this.h+=1,this};function zn(c,m){bt(c),m=An(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function $n(c,m){return bt(c),m=An(c,m),c.g.has(m)}n.forEach=function(c,m){bt(this),this.g.forEach(function(_,T){_.forEach(function(F){c.call(m,F,T,this)},this)},this)},n.na=function(){bt(this);const c=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let T=0;T<m.length;T++){const F=c[T];for(let q=0;q<F.length;q++)_.push(m[T])}return _},n.V=function(c){bt(this);let m=[];if(typeof c=="string")$n(this,c)&&(m=m.concat(this.g.get(An(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)m=m.concat(c[_])}return m},n.set=function(c,m){return bt(this),this.i=null,c=An(this,c),$n(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},n.get=function(c,m){return c?(c=this.V(c),0<c.length?String(c[0]):m):m};function ai(c,m,_){zn(c,m),0<_.length&&(c.i=null,c.g.set(An(c,m),V(_)),c.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var T=m[_];const q=encodeURIComponent(String(T)),se=this.V(T);for(T=0;T<se.length;T++){var F=q;se[T]!==""&&(F+="="+encodeURIComponent(String(se[T]))),c.push(F)}}return this.i=c.join("&")};function An(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function ar(c,m){m&&!c.j&&(bt(c),c.i=null,c.g.forEach(function(_,T){var F=T.toLowerCase();T!=F&&(zn(this,T),ai(this,F,_))},c)),c.j=m}function Qh(c,m){const _=new ts;if(d.Image){const T=new Image;T.onload=L(en,_,"TestLoadImage: loaded",!0,m,T),T.onerror=L(en,_,"TestLoadImage: error",!1,m,T),T.onabort=L(en,_,"TestLoadImage: abort",!1,m,T),T.ontimeout=L(en,_,"TestLoadImage: timeout",!1,m,T),d.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else m(!1)}function mu(c,m){const _=new ts,T=new AbortController,F=setTimeout(()=>{T.abort(),en(_,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:T.signal}).then(q=>{clearTimeout(F),q.ok?en(_,"TestPingServer: ok",!0,m):en(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(F),en(_,"TestPingServer: error",!1,m)})}function en(c,m,_,T,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),T(_)}catch{}}function Jh(){this.g=new Sa}function gu(c,m,_){const T=_||"";try{ni(c,function(F,q){let se=F;y(F)&&(se=Ta(F)),m.push(T+q+"="+encodeURIComponent(se))})}catch(F){throw m.push(T+"type="+encodeURIComponent("_badmap")),F}}function Or(c){this.l=c.Ub||null,this.j=c.eb||!1}P(Or,Zi),Or.prototype.g=function(){return new ls(this.l,this.j)},Or.prototype.i=(function(c){return function(){return c}})({});function ls(c,m){_t.call(this),this.D=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ls,_t),n=ls.prototype,n.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=m,this.readyState=1,qn(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(m.body=c),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hn(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,qn(this)),this.g&&(this.readyState=3,qn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;yu(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function yu(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?Hn(this):qn(this),this.readyState==3&&yu(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,Hn(this))},n.Qa=function(c){this.g&&(this.response=c,Hn(this))},n.ga=function(){this.g&&Hn(this)};function Hn(c){c.readyState=4,c.l=null,c.j=null,c.v=null,qn(c)}n.setRequestHeader=function(c,m){this.u.append(c,m)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=m.next();return c.join(`\r
`)};function qn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(ls.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Dr(c){let m="";return me(c,function(_,T){m+=T,m+=":",m+=_,m+=`\r
`}),m}function li(c,m,_){e:{for(T in _){var T=!1;break e}T=!0}T||(_=Dr(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):We(c,m,_))}function tt(c){_t.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(tt,_t);var Xh=/^https?$/i,Da=["POST","PUT"];n=tt.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,m,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():jn.g(),this.v=this.o?Ys(this.o):Ys(jn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(q){us(this,q);return}if(c=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var F in T)_.set(F,T[F]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const q of T.keys())_.set(q,T.get(q));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(q=>q.toLowerCase()=="content-type"),F=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Da,m,void 0))||T||F||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,se]of _)this.g.setRequestHeader(q,se);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{co(this),this.u=!0,this.g.send(c),this.u=!1}catch(q){us(this,q)}};function us(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.m=5,uo(c),yn(c)}function uo(c){c.A||(c.A=!0,vt(c,"complete"),vt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,vt(this,"complete"),vt(this,"abort"),yn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yn(this,!0)),tt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?La(this):this.bb())},n.bb=function(){La(this)};function La(c){if(c.h&&typeof u<"u"&&(!c.v[1]||tn(c)!=4||c.Z()!=2)){if(c.u&&tn(c)==4)va(c.Ea,0,c);else if(vt(c,"readystatechange"),tn(c)==4){c.h=!1;try{const se=c.Z();e:switch(se){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var T;if(T=se===0){var F=String(c.D).match(os)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),T=!Xh.test(F?F.toLowerCase():"")}_=T}if(_)vt(c,"complete"),vt(c,"success");else{c.m=6;try{var q=2<tn(c)?c.g.statusText:""}catch{q=""}c.l=q+" ["+c.Z()+"]",uo(c)}}finally{yn(c)}}}}function yn(c,m){if(c.g){co(c);const _=c.g,T=c.v[0]?()=>{}:null;c.g=null,c.v=null,m||vt(c,"ready");try{_.onreadystatechange=T}catch{}}}function co(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function tn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<tn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),Ia(m)}};function Va(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function ho(c){const m={};c=(c.g&&2<=tn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(Y(c[T]))continue;var _=D(c[T]);const F=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const q=m[F]||[];m[F]=q,q.push(_)}x(m,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function lr(c,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||m}function Ma(c){this.Aa=0,this.i=[],this.j=new ts,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=lr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=lr("baseRetryDelayMs",5e3,c),this.cb=lr("retryDelaySeedMs",1e4,c),this.Wa=lr("forwardChannelMaxRetries",2,c),this.wa=lr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new ss(c&&c.concurrentRequestLimit),this.Da=new Jh,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ma.prototype,n.la=8,n.G=1,n.connect=function(c,m,_,T){ut(0),this.W=c,this.H=m||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.I=Eu(this,null,this.W),ur(this)};function Ot(c){if(fo(c),c.G==3){var m=c.U++,_=gn(c.I);if(We(_,"SID",c.K),We(_,"RID",m),We(_,"TYPE","terminate"),Lr(c,_),m=new Bn(c,c.j,m),m.L=2,m.v=si(gn(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=m.v,_=!0),_||(m.g=Tu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Ke(m)}wu(c)}function Wn(c){c.g&&(Ua(c),c.g.cancel(),c.g=null)}function fo(c){Wn(c),c.u&&(d.clearTimeout(c.u),c.u=null),go(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function ur(c){if(!mn(c.h)&&!c.s){c.s=!0;var m=c.Ga;Fe||oe(),ie||(Fe(),ie=!0),ge.add(m,c),c.B=0}}function Yh(c,m){return lu(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=m.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Un(I(c.Ga,c,m),vu(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const F=new Bn(this,this.j,c);let q=this.o;if(this.S&&(q?(q=S(q),b(q,this.S)):q=this.S),this.m!==null||this.O||(F.H=q,q=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=ui(this,F,m),_=gn(this.I),We(_,"RID",c),We(_,"CVER",22),this.D&&We(_,"X-HTTP-Session-Id",this.D),Lr(this,_),q&&(this.O?m="headers="+encodeURIComponent(String(Dr(q)))+"&"+m:this.m&&li(_,this.m,q)),ba(this.h,F),this.Ua&&We(_,"TYPE","init"),this.P?(We(_,"$req",m),We(_,"SID","null"),F.T=!0,so(F,_,null)):so(F,_,m),this.G=2}}else this.G==3&&(c?po(this,c):this.i.length==0||mn(this.h)||po(this))};function po(c,m){var _;m?_=m.l:_=c.U++;const T=gn(c.I);We(T,"SID",c.K),We(T,"RID",_),We(T,"AID",c.T),Lr(c,T),c.m&&c.o&&li(T,c.m,c.o),_=new Bn(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),m&&(c.i=m.D.concat(c.i)),m=ui(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ba(c.h,_),so(_,T,m)}function Lr(c,m){c.H&&me(c.H,function(_,T){We(m,T,_)}),c.l&&ni({},function(_,T){We(m,T,_)})}function ui(c,m,_){_=Math.min(c.i.length,_);var T=c.l?I(c.l.Na,c.l,c):null;e:{var F=c.i;let q=-1;for(;;){const se=["count="+_];q==-1?0<_?(q=F[0].g,se.push("ofs="+q)):q=0:se.push("ofs="+q);let He=!0;for(let wt=0;wt<_;wt++){let Le=F[wt].g;const Ct=F[wt].map;if(Le-=q,0>Le)q=Math.max(0,F[wt].g-100),He=!1;else try{gu(Ct,se,"req"+Le+"_")}catch{T&&T(Ct)}}if(He){T=se.join("&");break e}}}return c=c.i.splice(0,_),m.D=c,T}function cs(c){if(!c.g&&!c.u){c.Y=1;var m=c.Fa;Fe||oe(),ie||(Fe(),ie=!0),ge.add(m,c),c.v=0}}function mo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Un(I(c.Fa,c),vu(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,_u(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Un(I(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),Wn(this),_u(this))};function Ua(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function _u(c){c.g=new Bn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var m=gn(c.qa);We(m,"RID","rpc"),We(m,"SID",c.K),We(m,"AID",c.T),We(m,"CI",c.F?"0":"1"),!c.F&&c.ja&&We(m,"TO",c.ja),We(m,"TYPE","xmlhttp"),Lr(c,m),c.m&&c.o&&li(m,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=si(gn(m)),_.m=null,_.P=!0,Na(_,c)}n.Za=function(){this.C!=null&&(this.C=null,Wn(this),mo(this),ut(19))};function go(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function yo(c,m){var _=null;if(c.g==m){go(c),Ua(c),c.g=null;var T=2}else if(Qt(c.h,m))_=m.D,uu(c.h,m),T=1;else return;if(c.G!=0){if(m.o)if(T==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var F=c.B;T=es(),vt(T,new to(T,_)),ur(c)}else cs(c);else if(F=m.s,F==3||F==0&&0<m.X||!(T==1&&Yh(c,m)||T==2&&mo(c)))switch(_&&0<_.length&&(m=c.h,m.i=m.i.concat(_)),F){case 1:Vr(c,5);break;case 4:Vr(c,10);break;case 3:Vr(c,6);break;default:Vr(c,2)}}}function vu(c,m){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*m}function Vr(c,m){if(c.j.info("Error code "+m),m==2){var _=I(c.fb,c),T=c.Xa;const F=!T;T=new br(T||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||as(T,"https"),si(T),F?Qh(T.toString(),_):mu(T.toString(),_)}else ut(2);c.G=0,c.l&&c.l.sa(m),wu(c),fo(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function wu(c){if(c.G=0,c.ka=[],c.l){const m=cu(c.h);(m.length!=0||c.i.length!=0)&&(A(c.ka,m),A(c.ka,c.i),c.h.i.length=0,V(c.i),c.i.length=0),c.l.ra()}}function Eu(c,m,_){var T=_ instanceof br?gn(_):new br(_);if(T.g!="")m&&(T.g=m+"."+T.g),ri(T,T.s);else{var F=d.location;T=F.protocol,m=m?m+"."+F.hostname:F.hostname,F=+F.port;var q=new br(null);T&&as(q,T),m&&(q.g=m),F&&ri(q,F),_&&(q.l=_),T=q}return _=c.D,m=c.ya,_&&m&&We(T,_,m),We(T,"VER",c.la),Lr(c,T),T}function Tu(c,m,_){if(m&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Ca&&!c.pa?new tt(new Or({eb:_})):new tt(c.pa),m.Ha(c.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fa(){}n=Fa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function _o(){}_o.prototype.g=function(c,m){return new Jt(c,m)};function Jt(c,m){_t.call(this),this.g=new Ma(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(c?c["X-WebChannel-Client-Profile"]=m.va:c={"X-WebChannel-Client-Profile":m.va}),this.g.S=c,(c=m&&m.Sb)&&!Y(c)&&(this.g.m=c),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!Y(m)&&(this.g.D=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new cr(this)}P(Jt,_t),Jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Jt.prototype.close=function(){Ot(this.g)},Jt.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=Ta(c),c=_);m.i.push(new au(m.Ya++,c)),m.G==3&&ur(m)},Jt.prototype.N=function(){this.g.l=null,delete this.j,Ot(this.g),delete this.g,Jt.aa.N.call(this)};function Iu(c){ir.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){e:{for(const _ in m){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}P(Iu,ir);function Su(){eo.call(this),this.status=1}P(Su,eo);function cr(c){this.g=c}P(cr,Fa),cr.prototype.ua=function(){vt(this.g,"a")},cr.prototype.ta=function(c){vt(this.g,new Iu(c))},cr.prototype.sa=function(c){vt(this.g,new Su)},cr.prototype.ra=function(){vt(this.g,"b")},_o.prototype.createWebChannel=_o.prototype.g,Jt.prototype.send=Jt.prototype.o,Jt.prototype.open=Jt.prototype.m,Jt.prototype.close=Jt.prototype.close,lE=function(){return new _o},aE=function(){return es()},oE=sr,sp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ro.NO_ERROR=0,ro.TIMEOUT=8,ro.HTTP_ERROR=6,Nc=ro,ru.COMPLETE="complete",sE=ru,Zs.EventType=Sn,Sn.OPEN="a",Sn.CLOSE="b",Sn.ERROR="c",Sn.MESSAGE="d",_t.prototype.listen=_t.prototype.K,pl=Zs,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,iE=tt}).apply(typeof vc<"u"?vc:typeof self<"u"?self:typeof window<"u"?window:{});const A_="@firebase/firestore",C_="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qt.UNAUTHENTICATED=new qt(null),qt.GOOGLE_CREDENTIALS=new qt("google-credentials-uid"),qt.FIRST_PARTY=new qt("first-party-uid"),qt.MOCK_USER=new qt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ua="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new Sh("@firebase/firestore");function Bo(){return Ds.logLevel}function le(n,...e){if(Ds.logLevel<=xe.DEBUG){const t=e.map(Op);Ds.debug(`Firestore (${ua}): ${n}`,...t)}}function Qr(n,...e){if(Ds.logLevel<=xe.ERROR){const t=e.map(Op);Ds.error(`Firestore (${ua}): ${n}`,...t)}}function ji(n,...e){if(Ds.logLevel<=xe.WARN){const t=e.map(Op);Ds.warn(`Firestore (${ua}): ${n}`,...t)}}function Op(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,uE(n,r,t)}function uE(n,e,t){let r=`FIRESTORE (${ua}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Qr(r),new Error(r)}function ze(n,e,t,r){let o="Unexpected state";typeof t=="string"?o=t:r=t,n||uE(e,o,r)}function Ae(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class pe extends Mn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(qt.UNAUTHENTICATED)))}shutdown(){}}class FC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class jC{constructor(e){this.t=e,this.currentUser=qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ze(this.o===void 0,42304);let r=this.i;const o=p=>this.i!==r?(r=this.i,t(p)):Promise.resolve();let a=new Mi;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Mi,e.enqueueRetryable((()=>o(this.currentUser)))};const u=()=>{const p=a;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},d=p=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((p=>d(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Mi)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ze(typeof r.accessToken=="string",31837,{l:r}),new cE(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new qt(e)}}class BC{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=qt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class zC{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new BC(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(qt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class P_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $C{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Zn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ze(this.o===void 0,3512);const r=a=>{a.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,le("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const o=a=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>o(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?o(a):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new P_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new P_(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=HC(40);for(let a=0;a<o.length;++a)r.length<20&&o[a]<t&&(r+=e.charAt(o[a]%62))}return r}}function ke(n,e){return n<e?-1:n>e?1:0}function op(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),o=e.codePointAt(t);if(r!==o){if(r<128&&o<128)return ke(r,o);{const a=hE(),u=qC(a.encode(k_(n,t)),a.encode(k_(e,t)));return u!==0?u:ke(r,o)}}t+=r>65535?2:1}return ke(n.length,e.length)}function k_(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function qC(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ke(n[t],e[t]);return ke(n.length,e.length)}function Zo(n,e,t){return n.length===e.length&&n.every(((r,o)=>t(r,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_="__name__";class gr{constructor(e,t,r){t===void 0?t=0:t>e.length&&Ee(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Ee(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return gr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof gr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let o=0;o<r;o++){const a=gr.compareSegments(e.get(o),t.get(o));if(a!==0)return a}return ke(e.length,t.length)}static compareSegments(e,t){const r=gr.isNumericId(e),o=gr.isNumericId(t);return r&&!o?-1:!r&&o?1:r&&o?gr.extractNumericId(e).compare(gr.extractNumericId(t)):op(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Vi.fromString(e.substring(4,e.length-2))}}class Ye extends gr{construct(e,t,r){return new Ye(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new pe(J.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((o=>o.length>0)))}return new Ye(t)}static emptyPath(){return new Ye([])}}const WC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Mt extends gr{construct(e,t,r){return new Mt(e,t,r)}static isValidIdentifier(e){return WC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===N_}static keyField(){return new Mt([N_])}static fromServerFormat(e){const t=[];let r="",o=0;const a=()=>{if(r.length===0)throw new pe(J.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new pe(J.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new pe(J.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=p,o+=2}else d==="`"?(u=!u,o++):d!=="."||u?(r+=d,o++):(a(),o++)}if(a(),u)throw new pe(J.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Mt(t)}static emptyPath(){return new Mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(Ye.fromString(e))}static fromName(e){return new ye(Ye.fromString(e).popFirst(5))}static empty(){return new ye(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new Ye(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(n,e,t){if(!t)throw new pe(J.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function GC(n,e,t,r){if(e===!0&&r===!0)throw new pe(J.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function x_(n){if(!ye.isDocumentKey(n))throw new pe(J.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function b_(n){if(ye.isDocumentKey(n))throw new pe(J.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function fE(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Lp(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ee(12329,{type:typeof n})}function ea(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new pe(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Lp(n);throw new pe(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(n,e){const t={typeString:n};return e&&(t.value=e),t}function ql(n,e){if(!fE(n))throw new pe(J.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const o=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(o&&typeof u!==o){t=`JSON field '${r}' must be a ${o}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new pe(J.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=-62135596800,D_=1e6;class Ze{static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*D_);return new Ze(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new pe(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new pe(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<O_)throw new pe(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new pe(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/D_}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ze._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ql(e,Ze._jsonSchema))return new Ze(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-O_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ze._jsonSchemaVersion="firestore/timestamp/1.0",Ze._jsonSchema={type:gt("string",Ze._jsonSchemaVersion),seconds:gt("number"),nanoseconds:gt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{static fromTimestamp(e){return new Se(e)}static min(){return new Se(new Ze(0,0))}static max(){return new Se(new Ze(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=-1;function KC(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,o=Se.fromTimestamp(r===1e9?new Ze(t+1,0):new Ze(t,r));return new Bi(o,ye.empty(),e)}function QC(n){return new Bi(n.readTime,n.key,xl)}class Bi{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Bi(Se.min(),ye.empty(),xl)}static max(){return new Bi(Se.max(),ye.empty(),xl)}}function JC(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(n.documentKey,e.documentKey),t!==0?t:ke(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ca(n){if(n.code!==J.FAILED_PRECONDITION||n.message!==XC)throw n;le("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G(((r,o)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,o)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):G.reject(t)}static resolve(e){return new G(((t,r)=>{t(e)}))}static reject(e){return new G(((t,r)=>{r(e)}))}static waitFor(e){return new G(((t,r)=>{let o=0,a=0,u=!1;e.forEach((d=>{++o,d.next((()=>{++a,u&&a===o&&t()}),(p=>r(p)))})),u=!0,a===o&&t()}))}static or(e){let t=G.resolve(!1);for(const r of e)t=t.next((o=>o?G.resolve(o):r()));return t}static forEach(e,t){const r=[];return e.forEach(((o,a)=>{r.push(t.call(this,o,a))})),this.waitFor(r)}static mapArray(e,t){return new G(((r,o)=>{const a=e.length,u=new Array(a);let d=0;for(let p=0;p<a;p++){const y=p;t(e[y]).next((v=>{u[y]=v,++d,d===a&&r(u)}),(v=>o(v)))}}))}static doWhile(e,t){return new G(((r,o)=>{const a=()=>{e()===!0?t().next((()=>{a()}),o):r()};a()}))}}function ZC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ha(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Ah.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=-1;function Ch(n){return n==null}function Wc(n){return n===0&&1/n==-1/0}function eP(n){return typeof n=="number"&&Number.isInteger(n)&&!Wc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE="";function tP(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=L_(e)),e=nP(n.get(t),e);return L_(e)}function nP(n,e){let t=e;const r=n.length;for(let o=0;o<r;o++){const a=n.charAt(o);switch(a){case"\0":t+="";break;case pE:t+="";break;default:t+=a}}return t}function L_(n){return n+pE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function $s(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function mE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t){this.comparator=e,this.root=t||Vt.EMPTY}insert(e,t){return new st(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Vt.BLACK,null,null))}remove(e){return new st(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Vt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return t+r.left.size;o<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wc(this.root,e,this.comparator,!1)}getReverseIterator(){return new wc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wc(this.root,e,this.comparator,!0)}}class wc{constructor(e,t,r,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Vt{constructor(e,t,r,o,a){this.key=e,this.value=t,this.color=r??Vt.RED,this.left=o??Vt.EMPTY,this.right=a??Vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,o,a){return new Vt(e??this.key,t??this.value,r??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let o=this;const a=r(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,t,r),null):a===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Vt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Vt.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ee(27949);return e+(this.isRed()?0:1)}}Vt.EMPTY=null,Vt.RED=!0,Vt.BLACK=!1;Vt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee(57766)}get value(){throw Ee(16141)}get color(){throw Ee(16727)}get left(){throw Ee(29726)}get right(){throw Ee(36894)}copy(e,t,r,o,a){return this}insert(e,t,r){return new Vt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new M_(this.data.getIterator())}getIteratorFrom(e){return new M_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=r.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Rt(this.comparator);return t.data=e,t}}class M_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.fields=e,e.sort(Mt.comparator)}static empty(){return new er([])}unionWith(e){let t=new Rt(Mt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new er(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zo(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new gE("Invalid base64 string: "+a):a}})(e);return new Ft(t)}static fromUint8Array(e){const t=(function(o){let a="";for(let u=0;u<o.length;++u)a+=String.fromCharCode(o[u]);return a})(e);return new Ft(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ft.EMPTY_BYTE_STRING=new Ft("");const rP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zi(n){if(ze(!!n,39018),typeof n=="string"){let e=0;const t=rP.exec(n);if(ze(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ht(n.seconds),nanos:ht(n.nanos)}}function ht(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function $i(n){return typeof n=="string"?Ft.fromBase64String(n):Ft.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE="server_timestamp",_E="__type__",vE="__previous_value__",wE="__local_write_time__";function Mp(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[_E])===null||t===void 0?void 0:t.stringValue)===yE}function Ph(n){const e=n.mapValue.fields[vE];return Mp(e)?Ph(e):e}function bl(n){const e=zi(n.mapValue.fields[wE].timestampValue);return new Ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,t,r,o,a,u,d,p,y,v){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=o,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=v}}const Gc="(default)";class Ol{constructor(e,t){this.projectId=e,this.database=t||Gc}static empty(){return new Ol("","")}get isDefaultDatabase(){return this.database===Gc}isEqual(e){return e instanceof Ol&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE="__type__",sP="__max__",Ec={mapValue:{}},TE="__vector__",Kc="value";function Hi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Mp(n)?4:aP(n)?9007199254740991:oP(n)?10:11:Ee(28295,{value:n})}function Rr(n,e){if(n===e)return!0;const t=Hi(n);if(t!==Hi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return bl(n).isEqual(bl(e));case 3:return(function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const u=zi(o.timestampValue),d=zi(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,a){return $i(o.bytesValue).isEqual($i(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,a){return ht(o.geoPointValue.latitude)===ht(a.geoPointValue.latitude)&&ht(o.geoPointValue.longitude)===ht(a.geoPointValue.longitude)})(n,e);case 2:return(function(o,a){if("integerValue"in o&&"integerValue"in a)return ht(o.integerValue)===ht(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const u=ht(o.doubleValue),d=ht(a.doubleValue);return u===d?Wc(u)===Wc(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return Zo(n.arrayValue.values||[],e.arrayValue.values||[],Rr);case 10:case 11:return(function(o,a){const u=o.mapValue.fields||{},d=a.mapValue.fields||{};if(V_(u)!==V_(d))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(d[p]===void 0||!Rr(u[p],d[p])))return!1;return!0})(n,e);default:return Ee(52216,{left:n})}}function Dl(n,e){return(n.values||[]).find((t=>Rr(t,e)))!==void 0}function ta(n,e){if(n===e)return 0;const t=Hi(n),r=Hi(e);if(t!==r)return ke(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ke(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const d=ht(a.integerValue||a.doubleValue),p=ht(u.integerValue||u.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1})(n,e);case 3:return U_(n.timestampValue,e.timestampValue);case 4:return U_(bl(n),bl(e));case 5:return op(n.stringValue,e.stringValue);case 6:return(function(a,u){const d=$i(a),p=$i(u);return d.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const d=a.split("/"),p=u.split("/");for(let y=0;y<d.length&&y<p.length;y++){const v=ke(d[y],p[y]);if(v!==0)return v}return ke(d.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const d=ke(ht(a.latitude),ht(u.latitude));return d!==0?d:ke(ht(a.longitude),ht(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return F_(n.arrayValue,e.arrayValue);case 10:return(function(a,u){var d,p,y,v;const E=a.fields||{},I=u.fields||{},L=(d=E[Kc])===null||d===void 0?void 0:d.arrayValue,P=(p=I[Kc])===null||p===void 0?void 0:p.arrayValue,V=ke(((y=L?.values)===null||y===void 0?void 0:y.length)||0,((v=P?.values)===null||v===void 0?void 0:v.length)||0);return V!==0?V:F_(L,P)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===Ec.mapValue&&u===Ec.mapValue)return 0;if(a===Ec.mapValue)return 1;if(u===Ec.mapValue)return-1;const d=a.fields||{},p=Object.keys(d),y=u.fields||{},v=Object.keys(y);p.sort(),v.sort();for(let E=0;E<p.length&&E<v.length;++E){const I=op(p[E],v[E]);if(I!==0)return I;const L=ta(d[p[E]],y[v[E]]);if(L!==0)return L}return ke(p.length,v.length)})(n.mapValue,e.mapValue);default:throw Ee(23264,{le:t})}}function U_(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ke(n,e);const t=zi(n),r=zi(e),o=ke(t.seconds,r.seconds);return o!==0?o:ke(t.nanos,r.nanos)}function F_(n,e){const t=n.values||[],r=e.values||[];for(let o=0;o<t.length&&o<r.length;++o){const a=ta(t[o],r[o]);if(a)return a}return ke(t.length,r.length)}function na(n){return ap(n)}function ap(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=zi(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return $i(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ye.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",o=!0;for(const a of t.values||[])o?o=!1:r+=",",r+=ap(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let o="{",a=!0;for(const u of r)a?a=!1:o+=",",o+=`${u}:${ap(t.fields[u])}`;return o+"}"})(n.mapValue):Ee(61005,{value:n})}function xc(n){switch(Hi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ph(n);return e?16+xc(e):16;case 5:return 2*n.stringValue.length;case 6:return $i(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((o,a)=>o+xc(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let o=0;return $s(r.fields,((a,u)=>{o+=a.length+xc(u)})),o})(n.mapValue);default:throw Ee(13486,{value:n})}}function lp(n){return!!n&&"integerValue"in n}function Up(n){return!!n&&"arrayValue"in n}function j_(n){return!!n&&"nullValue"in n}function B_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function bc(n){return!!n&&"mapValue"in n}function oP(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[EE])===null||t===void 0?void 0:t.stringValue)===TE}function vl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return $s(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=vl(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=vl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function aP(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===sP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.value=e}static empty(){return new Dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!bc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=vl(t)}setAll(e){let t=Mt.emptyPath(),r={},o=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,r,o),r={},o=[],t=d.popLast()}u?r[d.lastSegment()]=vl(u):o.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,o)}delete(e){const t=this.field(e.popLast());bc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Rr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let o=t.mapValue.fields[e.get(r)];bc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,r){$s(t,((o,a)=>e[o]=a));for(const o of r)delete e[o]}clone(){return new Dn(vl(this.value))}}function IE(n){const e=[];return $s(n.fields,((t,r)=>{const o=new Mt([t]);if(bc(r)){const a=IE(r.mapValue).fields;if(a.length===0)e.push(o);else for(const u of a)e.push(o.child(u))}else e.push(o)})),new er(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,r,o,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=o,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new Wt(e,0,Se.min(),Se.min(),Se.min(),Dn.empty(),0)}static newFoundDocument(e,t,r,o){return new Wt(e,1,t,Se.min(),r,o,0)}static newNoDocument(e,t){return new Wt(e,2,t,Se.min(),Se.min(),Dn.empty(),0)}static newUnknownDocument(e,t){return new Wt(e,3,t,Se.min(),Se.min(),Dn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,t){this.position=e,this.inclusive=t}}function z_(n,e,t){let r=0;for(let o=0;o<n.position.length;o++){const a=e[o],u=n.position[o];if(a.field.isKeyField()?r=ye.comparator(ye.fromName(u.referenceValue),t.key):r=ta(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function $_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Rr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,t="asc"){this.field=e,this.dir=t}}function lP(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{}class It extends SE{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new cP(e,t,r):t==="array-contains"?new fP(e,r):t==="in"?new pP(e,r):t==="not-in"?new mP(e,r):t==="array-contains-any"?new gP(e,r):new It(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new hP(e,r):new dP(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ta(t,this.value)):t!==null&&Hi(this.value)===Hi(t)&&this.matchesComparison(ta(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ar extends SE{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Ar(e,t)}matches(e){return RE(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function RE(n){return n.op==="and"}function AE(n){return uP(n)&&RE(n)}function uP(n){for(const e of n.filters)if(e instanceof Ar)return!1;return!0}function up(n){if(n instanceof It)return n.field.canonicalString()+n.op.toString()+na(n.value);if(AE(n))return n.filters.map((e=>up(e))).join(",");{const e=n.filters.map((t=>up(t))).join(",");return`${n.op}(${e})`}}function CE(n,e){return n instanceof It?(function(r,o){return o instanceof It&&r.op===o.op&&r.field.isEqual(o.field)&&Rr(r.value,o.value)})(n,e):n instanceof Ar?(function(r,o){return o instanceof Ar&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce(((a,u,d)=>a&&CE(u,o.filters[d])),!0):!1})(n,e):void Ee(19439)}function PE(n){return n instanceof It?(function(t){return`${t.field.canonicalString()} ${t.op} ${na(t.value)}`})(n):n instanceof Ar?(function(t){return t.op.toString()+" {"+t.getFilters().map(PE).join(" ,")+"}"})(n):"Filter"}class cP extends It{constructor(e,t,r){super(e,t,r),this.key=ye.fromName(r.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class hP extends It{constructor(e,t){super(e,"in",t),this.keys=kE("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class dP extends It{constructor(e,t){super(e,"not-in",t),this.keys=kE("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function kE(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>ye.fromName(r.referenceValue)))}class fP extends It{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Up(t)&&Dl(t.arrayValue,this.value)}}class pP extends It{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Dl(this.value.arrayValue,t)}}class mP extends It{constructor(e,t){super(e,"not-in",t)}matches(e){if(Dl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Dl(this.value.arrayValue,t)}}class gP extends It{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Up(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Dl(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e,t=null,r=[],o=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=o,this.limit=a,this.startAt=u,this.endAt=d,this.Pe=null}}function H_(n,e=null,t=[],r=[],o=null,a=null,u=null){return new yP(n,e,t,r,o,a,u)}function Fp(n){const e=Ae(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>up(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),Ch(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>na(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>na(r))).join(",")),e.Pe=t}return e.Pe}function jp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!lP(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!CE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!$_(n.startAt,e.startAt)&&$_(n.endAt,e.endAt)}function cp(n){return ye.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,t=null,r=[],o=[],a=null,u="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=o,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=p,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function _P(n,e,t,r,o,a,u,d){return new kh(n,e,t,r,o,a,u,d)}function Bp(n){return new kh(n)}function q_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function vP(n){return n.collectionGroup!==null}function wl(n){const e=Ae(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new Rt(Mt.comparator);return u.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(d=d.add(y.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new Jc(a,r))})),t.has(Mt.keyField().canonicalString())||e.Te.push(new Jc(Mt.keyField(),r))}return e.Te}function _r(n){const e=Ae(n);return e.Ie||(e.Ie=wP(e,wl(n))),e.Ie}function wP(n,e){if(n.limitType==="F")return H_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const a=o.dir==="desc"?"asc":"desc";return new Jc(o.field,a)}));const t=n.endAt?new Qc(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Qc(n.startAt.position,n.startAt.inclusive):null;return H_(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function hp(n,e,t){return new kh(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Nh(n,e){return jp(_r(n),_r(e))&&n.limitType===e.limitType}function NE(n){return`${Fp(_r(n))}|lt:${n.limitType}`}function zo(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((o=>PE(o))).join(", ")}]`),Ch(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((o=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(o))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((o=>na(o))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((o=>na(o))).join(",")),`Target(${r})`})(_r(n))}; limitType=${n.limitType})`}function xh(n,e){return e.isFoundDocument()&&(function(r,o){const a=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):ye.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,o){for(const a of wl(r))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,o){for(const a of r.filters)if(!a.matches(o))return!1;return!0})(n,e)&&(function(r,o){return!(r.startAt&&!(function(u,d,p){const y=z_(u,d,p);return u.inclusive?y<=0:y<0})(r.startAt,wl(r),o)||r.endAt&&!(function(u,d,p){const y=z_(u,d,p);return u.inclusive?y>=0:y>0})(r.endAt,wl(r),o))})(n,e)}function EP(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function xE(n){return(e,t)=>{let r=!1;for(const o of wl(n)){const a=TP(o,e,t);if(a!==0)return a;r=r||o.field.isKeyField()}return 0}}function TP(n,e,t){const r=n.field.isKeyField()?ye.comparator(e.key,t.key):(function(a,u,d){const p=u.data.field(a),y=d.data.field(a);return p!==null&&y!==null?ta(p,y):Ee(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Ee(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[o,a]of r)if(this.equalsFn(o,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),o=this.inner[r];if(o===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return void(o[a]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return r.length===1?delete this.inner[t]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(e){$s(this.inner,((t,r)=>{for(const[o,a]of r)e(o,a)}))}isEmpty(){return mE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP=new st(ye.comparator);function Jr(){return IP}const bE=new st(ye.comparator);function ml(...n){let e=bE;for(const t of n)e=e.insert(t.key,t);return e}function OE(n){let e=bE;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Cs(){return El()}function DE(){return El()}function El(){return new Hs((n=>n.toString()),((n,e)=>n.isEqual(e)))}const SP=new st(ye.comparator),RP=new Rt(ye.comparator);function be(...n){let e=RP;for(const t of n)e=e.add(t);return e}const AP=new Rt(ke);function CP(){return AP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wc(e)?"-0":e}}function LE(n){return{integerValue:""+n}}function PP(n,e){return eP(e)?LE(e):zp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(){this._=void 0}}function kP(n,e,t){return n instanceof Xc?(function(o,a){const u={fields:{[_E]:{stringValue:yE},[wE]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&Mp(a)&&(a=Ph(a)),a&&(u.fields[vE]=a),{mapValue:u}})(t,e):n instanceof Ll?ME(n,e):n instanceof Vl?UE(n,e):(function(o,a){const u=VE(o,a),d=W_(u)+W_(o.Ee);return lp(u)&&lp(o.Ee)?LE(d):zp(o.serializer,d)})(n,e)}function NP(n,e,t){return n instanceof Ll?ME(n,e):n instanceof Vl?UE(n,e):t}function VE(n,e){return n instanceof Yc?(function(r){return lp(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class Xc extends bh{}class Ll extends bh{constructor(e){super(),this.elements=e}}function ME(n,e){const t=FE(e);for(const r of n.elements)t.some((o=>Rr(o,r)))||t.push(r);return{arrayValue:{values:t}}}class Vl extends bh{constructor(e){super(),this.elements=e}}function UE(n,e){let t=FE(e);for(const r of n.elements)t=t.filter((o=>!Rr(o,r)));return{arrayValue:{values:t}}}class Yc extends bh{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function W_(n){return ht(n.integerValue||n.doubleValue)}function FE(n){return Up(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function xP(n,e){return n.field.isEqual(e.field)&&(function(r,o){return r instanceof Ll&&o instanceof Ll||r instanceof Vl&&o instanceof Vl?Zo(r.elements,o.elements,Rr):r instanceof Yc&&o instanceof Yc?Rr(r.Ee,o.Ee):r instanceof Xc&&o instanceof Xc})(n.transform,e.transform)}class bP{constructor(e,t){this.version=e,this.transformResults=t}}class vr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new vr}static exists(e){return new vr(void 0,e)}static updateTime(e){return new vr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Oc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Oh{}function jE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new zE(n.key,vr.none()):new Wl(n.key,n.data,vr.none());{const t=n.data,r=Dn.empty();let o=new Rt(Mt.comparator);for(let a of e.fields)if(!o.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),o=o.add(a)}return new qs(n.key,r,new er(o.toArray()),vr.none())}}function OP(n,e,t){n instanceof Wl?(function(o,a,u){const d=o.value.clone(),p=K_(o.fieldTransforms,a,u.transformResults);d.setAll(p),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof qs?(function(o,a,u){if(!Oc(o.precondition,a))return void a.convertToUnknownDocument(u.version);const d=K_(o.fieldTransforms,a,u.transformResults),p=a.data;p.setAll(BE(o)),p.setAll(d),a.convertToFoundDocument(u.version,p).setHasCommittedMutations()})(n,e,t):(function(o,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function Tl(n,e,t,r){return n instanceof Wl?(function(a,u,d,p){if(!Oc(a.precondition,u))return d;const y=a.value.clone(),v=Q_(a.fieldTransforms,p,u);return y.setAll(v),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),null})(n,e,t,r):n instanceof qs?(function(a,u,d,p){if(!Oc(a.precondition,u))return d;const y=Q_(a.fieldTransforms,p,u),v=u.data;return v.setAll(BE(a)),v.setAll(y),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((E=>E.field)))})(n,e,t,r):(function(a,u,d){return Oc(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function DP(n,e){let t=null;for(const r of n.fieldTransforms){const o=e.data.field(r.field),a=VE(r.transform,o||null);a!=null&&(t===null&&(t=Dn.empty()),t.set(r.field,a))}return t||null}function G_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&Zo(r,o,((a,u)=>xP(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Wl extends Oh{constructor(e,t,r,o=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class qs extends Oh{constructor(e,t,r,o,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function BE(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function K_(n,e,t){const r=new Map;ze(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let o=0;o<t.length;o++){const a=n[o],u=a.transform,d=e.data.field(a.field);r.set(a.field,NP(u,d,t[o]))}return r}function Q_(n,e,t){const r=new Map;for(const o of n){const a=o.transform,u=t.data.field(o.field);r.set(o.field,kP(a,u,e))}return r}class zE extends Oh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class LP extends Oh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e,t,r,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(e.key)&&OP(a,e,r[o])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Tl(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Tl(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=DE();return this.mutations.forEach((o=>{const a=e.get(o.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(o.key)?null:d;const p=jE(u,d);p!==null&&r.set(o.key,p),u.isValidDocument()||u.convertToNoDocument(Se.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),be())}isEqual(e){return this.batchId===e.batchId&&Zo(this.mutations,e.mutations,((t,r)=>G_(t,r)))&&Zo(this.baseMutations,e.baseMutations,((t,r)=>G_(t,r)))}}class $p{constructor(e,t,r,o){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=o}static from(e,t,r){ze(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let o=(function(){return SP})();const a=e.mutations;for(let u=0;u<a.length;u++)o=o.insert(a[u].key,r[u].version);return new $p(e,t,r,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt,Ve;function FP(n){switch(n){case J.OK:return Ee(64938);case J.CANCELLED:case J.UNKNOWN:case J.DEADLINE_EXCEEDED:case J.RESOURCE_EXHAUSTED:case J.INTERNAL:case J.UNAVAILABLE:case J.UNAUTHENTICATED:return!1;case J.INVALID_ARGUMENT:case J.NOT_FOUND:case J.ALREADY_EXISTS:case J.PERMISSION_DENIED:case J.FAILED_PRECONDITION:case J.ABORTED:case J.OUT_OF_RANGE:case J.UNIMPLEMENTED:case J.DATA_LOSS:return!0;default:return Ee(15467,{code:n})}}function $E(n){if(n===void 0)return Qr("GRPC error has no .code"),J.UNKNOWN;switch(n){case mt.OK:return J.OK;case mt.CANCELLED:return J.CANCELLED;case mt.UNKNOWN:return J.UNKNOWN;case mt.DEADLINE_EXCEEDED:return J.DEADLINE_EXCEEDED;case mt.RESOURCE_EXHAUSTED:return J.RESOURCE_EXHAUSTED;case mt.INTERNAL:return J.INTERNAL;case mt.UNAVAILABLE:return J.UNAVAILABLE;case mt.UNAUTHENTICATED:return J.UNAUTHENTICATED;case mt.INVALID_ARGUMENT:return J.INVALID_ARGUMENT;case mt.NOT_FOUND:return J.NOT_FOUND;case mt.ALREADY_EXISTS:return J.ALREADY_EXISTS;case mt.PERMISSION_DENIED:return J.PERMISSION_DENIED;case mt.FAILED_PRECONDITION:return J.FAILED_PRECONDITION;case mt.ABORTED:return J.ABORTED;case mt.OUT_OF_RANGE:return J.OUT_OF_RANGE;case mt.UNIMPLEMENTED:return J.UNIMPLEMENTED;case mt.DATA_LOSS:return J.DATA_LOSS;default:return Ee(39323,{code:n})}}(Ve=mt||(mt={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP=new Vi([4294967295,4294967295],0);function J_(n){const e=hE().encode(n),t=new rE;return t.update(e),new Uint8Array(t.digest())}function X_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),o=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Vi([t,r],0),new Vi([o,a],0)]}class Hp{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new gl(`Invalid padding: ${t}`);if(r<0)throw new gl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new gl(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new gl(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Vi.fromNumber(this.fe)}pe(e,t,r){let o=e.add(t.multiply(Vi.fromNumber(r)));return o.compare(jP)===1&&(o=new Vi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=J_(e),[r,o]=X_(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,o,a);if(!this.ye(u))return!1}return!0}static create(e,t,r){const o=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new Hp(a,o,t);return r.forEach((d=>u.insert(d))),u}insert(e){if(this.fe===0)return;const t=J_(e),[r,o]=X_(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,o,a);this.we(u)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class gl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,t,r,o,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const o=new Map;return o.set(e,Gl.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Dh(Se.min(),o,new st(ke),Jr(),be())}}class Gl{constructor(e,t,r,o,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Gl(r,t,be(),be(),be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,t,r,o){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=o}}class HE{constructor(e,t){this.targetId=e,this.De=t}}class qE{constructor(e,t,r=Ft.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=o}}class Y_{constructor(){this.ve=0,this.Ce=Z_(),this.Fe=Ft.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=be(),t=be(),r=be();return this.Ce.forEach(((o,a)=>{switch(a){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:r=r.add(o);break;default:Ee(38017,{changeType:a})}})),new Gl(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Z_()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class BP{constructor(e){this.We=e,this.Ge=new Map,this.ze=Jr(),this.je=Tc(),this.Je=Tc(),this.He=new st(ke)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:Ee(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,r=e.De.count,o=this.st(t);if(o){const a=o.target;if(cp(a))if(r===0){const u=new ye(a.path);this.Xe(t,u,Wt.newNoDocument(u,Se.min()))}else ze(r===1,20013,{expectedCount:r});else{const u=this.ot(t);if(u!==r){const d=this._t(e),p=d?this.ut(d,e,u):1;if(p!==0){this.rt(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,y)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=t;let u,d;try{u=$i(r).toUint8Array()}catch(p){if(p instanceof gE)return ji("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Hp(u,o,a)}catch(p){return ji(p instanceof gl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.fe===0?null:d}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let o=0;return r.forEach((a=>{const u=this.We.lt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,a,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((a,u)=>{const d=this.st(u);if(d){if(a.current&&cp(d.target)){const p=new ye(d.target.path);this.Tt(p).has(u)||this.It(u,p)||this.Xe(u,p,Wt.newNoDocument(p,e))}a.Ne&&(t.set(u,a.Le()),a.ke())}}));let r=be();this.Je.forEach(((a,u)=>{let d=!0;u.forEachWhile((p=>{const y=this.st(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(r=r.add(a))})),this.ze.forEach(((a,u)=>u.setReadTime(e)));const o=new Dh(e,t,this.He,this.ze,r);return this.ze=Jr(),this.je=Tc(),this.Je=Tc(),this.He=new st(ke),o}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Y_,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Rt(ke),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Rt(ke),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||le("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Y_),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Tc(){return new st(ye.comparator)}function Z_(){return new st(ye.comparator)}const zP={asc:"ASCENDING",desc:"DESCENDING"},$P={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},HP={and:"AND",or:"OR"};class qP{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function dp(n,e){return n.useProto3Json||Ch(e)?e:{value:e}}function Zc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function WE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function WP(n,e){return Zc(n,e.toTimestamp())}function wr(n){return ze(!!n,49232),Se.fromTimestamp((function(t){const r=zi(t);return new Ze(r.seconds,r.nanos)})(n))}function qp(n,e){return fp(n,e).canonicalString()}function fp(n,e){const t=(function(o){return new Ye(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function GE(n){const e=Ye.fromString(n);return ze(YE(e),10190,{key:e.toString()}),e}function pp(n,e){return qp(n.databaseId,e.path)}function Of(n,e){const t=GE(e);if(t.get(1)!==n.databaseId.projectId)throw new pe(J.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new pe(J.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ye(QE(t))}function KE(n,e){return qp(n.databaseId,e)}function GP(n){const e=GE(n);return e.length===4?Ye.emptyPath():QE(e)}function mp(n){return new Ye(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function QE(n){return ze(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ev(n,e,t){return{name:pp(n,e),fields:t.value.mapValue.fields}}function KP(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ee(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],a=(function(y,v){return y.useProto3Json?(ze(v===void 0||typeof v=="string",58123),Ft.fromBase64String(v||"")):(ze(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Ft.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(y){const v=y.code===void 0?J.UNKNOWN:$E(y.code);return new pe(v,y.message||"")})(u);t=new qE(r,o,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const o=Of(n,r.document.name),a=wr(r.document.updateTime),u=r.document.createTime?wr(r.document.createTime):Se.min(),d=new Dn({mapValue:{fields:r.document.fields}}),p=Wt.newFoundDocument(o,a,u,d),y=r.targetIds||[],v=r.removedTargetIds||[];t=new Dc(y,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const o=Of(n,r.document),a=r.readTime?wr(r.readTime):Se.min(),u=Wt.newNoDocument(o,a),d=r.removedTargetIds||[];t=new Dc([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const o=Of(n,r.document),a=r.removedTargetIds||[];t=new Dc([],a,o,null)}else{if(!("filter"in e))return Ee(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:o=0,unchangedNames:a}=r,u=new UP(o,a),d=r.targetId;t=new HE(d,u)}}return t}function QP(n,e){let t;if(e instanceof Wl)t={update:ev(n,e.key,e.value)};else if(e instanceof zE)t={delete:pp(n,e.key)};else if(e instanceof qs)t={update:ev(n,e.key,e.data),updateMask:ik(e.fieldMask)};else{if(!(e instanceof LP))return Ee(16599,{Rt:e.type});t={verify:pp(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const d=u.transform;if(d instanceof Xc)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Ll)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Vl)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Yc)return{fieldPath:u.field.canonicalString(),increment:d.Ee};throw Ee(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(o,a){return a.updateTime!==void 0?{updateTime:WP(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Ee(27497)})(n,e.precondition)),t}function JP(n,e){return n&&n.length>0?(ze(e!==void 0,14353),n.map((t=>(function(o,a){let u=o.updateTime?wr(o.updateTime):wr(a);return u.isEqual(Se.min())&&(u=wr(a)),new bP(u,o.transformResults||[])})(t,e)))):[]}function XP(n,e){return{documents:[KE(n,e.path)]}}function YP(n,e){const t={structuredQuery:{}},r=e.path;let o;e.collectionGroup!==null?(o=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=KE(n,o);const a=(function(y){if(y.length!==0)return XE(Ar.create(y,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(y){if(y.length!==0)return y.map((v=>(function(I){return{field:$o(I.field),direction:tk(I.dir)}})(v)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=dp(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{Vt:t,parent:o}}function ZP(n){let e=GP(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let o=null;if(r>0){ze(r===1,65062);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=(function(E){const I=JE(E);return I instanceof Ar&&AE(I)?I.getFilters():[I]})(t.where));let u=[];t.orderBy&&(u=(function(E){return E.map((I=>(function(P){return new Jc(Ho(P.field),(function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(P.direction))})(I)))})(t.orderBy));let d=null;t.limit&&(d=(function(E){let I;return I=typeof E=="object"?E.value:E,Ch(I)?null:I})(t.limit));let p=null;t.startAt&&(p=(function(E){const I=!!E.before,L=E.values||[];return new Qc(L,I)})(t.startAt));let y=null;return t.endAt&&(y=(function(E){const I=!E.before,L=E.values||[];return new Qc(L,I)})(t.endAt)),_P(e,o,u,a,d,"F",p,y)}function ek(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function JE(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ho(t.unaryFilter.field);return It.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=Ho(t.unaryFilter.field);return It.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Ho(t.unaryFilter.field);return It.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Ho(t.unaryFilter.field);return It.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ee(61313);default:return Ee(60726)}})(n):n.fieldFilter!==void 0?(function(t){return It.create(Ho(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ee(58110);default:return Ee(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Ar.create(t.compositeFilter.filters.map((r=>JE(r))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ee(1026)}})(t.compositeFilter.op))})(n):Ee(30097,{filter:n})}function tk(n){return zP[n]}function nk(n){return $P[n]}function rk(n){return HP[n]}function $o(n){return{fieldPath:n.canonicalString()}}function Ho(n){return Mt.fromServerFormat(n.fieldPath)}function XE(n){return n instanceof It?(function(t){if(t.op==="=="){if(B_(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NAN"}};if(j_(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(B_(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NOT_NAN"}};if(j_(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$o(t.field),op:nk(t.op),value:t.value}}})(n):n instanceof Ar?(function(t){const r=t.getFilters().map((o=>XE(o)));return r.length===1?r[0]:{compositeFilter:{op:rk(t.op),filters:r}}})(n):Ee(54877,{filter:n})}function ik(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function YE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,t,r,o,a=Se.min(),u=Se.min(),d=Ft.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new xi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new xi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e){this.gt=e}}function ok(n){const e=ZP({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?hp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(){this.Dn=new lk}addToCollectionParentIndex(e,t){return this.Dn.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(Bi.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(Bi.min())}updateCollectionGroup(e,t,r){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class lk{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t]||new Rt(Ye.comparator),a=!o.has(r);return this.index[t]=o.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t];return o&&o.has(r)}getEntries(e){return(this.index[e]||new Rt(Ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ZE=41943040;class un{static withCacheSize(e){return new un(e,un.DEFAULT_COLLECTION_PERCENTILE,un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */un.DEFAULT_COLLECTION_PERCENTILE=10,un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,un.DEFAULT=new un(ZE,un.DEFAULT_COLLECTION_PERCENTILE,un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),un.DISABLED=new un(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new ra(0)}static ur(){return new ra(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv="LruGarbageCollector",uk=1048576;function rv([n,e],[t,r]){const o=ke(n,t);return o===0?ke(e,r):o}class ck{constructor(e){this.Tr=e,this.buffer=new Rt(rv),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();rv(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class hk{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){le(nv,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ha(t)?le(nv,"Ignoring IndexedDB error during garbage collection: ",t):await ca(t)}await this.Rr(3e5)}))}}class dk{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return G.resolve(Ah.ue);const r=new ck(t);return this.Vr.forEachTarget(e,(o=>r.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>r.Er(o))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(tv)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),tv):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,o,a,u,d,p,y;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),o=this.params.maximumSequenceNumbersToCollect):o=E,u=Date.now(),this.nthSequenceNumber(e,o)))).next((E=>(r=E,d=Date.now(),this.removeTargets(e,r,t)))).next((E=>(a=E,p=Date.now(),this.removeOrphanedDocuments(e,r)))).next((E=>(y=Date.now(),Bo()<=xe.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-v}ms
	Determined least recently used ${o} in `+(d-u)+`ms
	Removed ${a} targets in `+(p-d)+`ms
	Removed ${E} documents in `+(y-p)+`ms
Total Duration: ${y-v}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:a,documentsRemoved:E}))))}}function fk(n,e){return new dk(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(){this.changes=new Hs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Wt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?G.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,t,r,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=o}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(r=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(r!==null&&Tl(r.mutation,o,er.empty(),Ze.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,be()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=be()){const o=Cs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,r).next((a=>{let u=ml();return a.forEach(((d,p)=>{u=u.insert(d,p.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=Cs();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,be())))}populateOverlays(e,t,r){const o=[];return r.forEach((a=>{t.has(a)||o.push(a)})),this.documentOverlayCache.getOverlays(e,o).next((a=>{a.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,r,o){let a=Jr();const u=El(),d=(function(){return El()})();return t.forEach(((p,y)=>{const v=r.get(y.key);o.has(y.key)&&(v===void 0||v.mutation instanceof qs)?a=a.insert(y.key,y):v!==void 0?(u.set(y.key,v.mutation.getFieldMask()),Tl(v.mutation,y,v.mutation.getFieldMask(),Ze.now())):u.set(y.key,er.empty())})),this.recalculateAndSaveOverlays(e,a).next((p=>(p.forEach(((y,v)=>u.set(y,v))),t.forEach(((y,v)=>{var E;return d.set(y,new mk(v,(E=u.get(y))!==null&&E!==void 0?E:null))})),d)))}recalculateAndSaveOverlays(e,t){const r=El();let o=new st(((u,d)=>u-d)),a=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((p=>{const y=t.get(p);if(y===null)return;let v=r.get(p)||er.empty();v=d.applyToLocalView(y,v),r.set(p,v);const E=(o.get(d.batchId)||be()).add(p);o=o.insert(d.batchId,E)}))})).next((()=>{const u=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),y=p.key,v=p.value,E=DE();v.forEach((I=>{if(!a.has(I)){const L=jE(t.get(I),r.get(I));L!==null&&E.set(I,L),a=a.add(I)}})),u.push(this.documentOverlayCache.saveOverlays(e,y,E))}return G.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,o){return(function(u){return ye.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):vP(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,o):this.getDocumentsMatchingCollectionQuery(e,t,r,o)}getNextDocuments(e,t,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,o).next((a=>{const u=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,o-a.size):G.resolve(Cs());let d=xl,p=a;return u.next((y=>G.forEach(y,((v,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),a.get(v)?G.resolve():this.remoteDocumentCache.getEntry(e,v).next((I=>{p=p.insert(v,I)}))))).next((()=>this.populateOverlays(e,y,a))).next((()=>this.computeViews(e,p,y,be()))).next((v=>({batchId:d,changes:OE(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next((r=>{let o=ml();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,o){const a=t.collectionGroup;let u=ml();return this.indexManager.getCollectionParents(e,a).next((d=>G.forEach(d,(p=>{const y=(function(E,I){return new kh(I,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(t,p.child(a));return this.getDocumentsMatchingCollectionQuery(e,y,r,o).next((v=>{v.forEach(((E,I)=>{u=u.insert(E,I)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,o){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,o)))).next((u=>{a.forEach(((p,y)=>{const v=y.getKey();u.get(v)===null&&(u=u.insert(v,Wt.newInvalidDocument(v)))}));let d=ml();return u.forEach(((p,y)=>{const v=a.get(p);v!==void 0&&Tl(v.mutation,y,er.empty(),Ze.now()),xh(t,y)&&(d=d.insert(p,y))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return G.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:wr(o.createTime)}})(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:ok(o.bundledQuery),readTime:wr(o.readTime)}})(t)),G.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(){this.overlays=new st(ye.comparator),this.kr=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Cs();return G.forEach(t,(o=>this.getOverlay(e,o).next((a=>{a!==null&&r.set(o,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((o,a)=>{this.wt(e,t,a)})),G.resolve()}removeOverlaysForBatchId(e,t,r){const o=this.kr.get(r);return o!==void 0&&(o.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(r)),G.resolve()}getOverlaysForCollection(e,t,r){const o=Cs(),a=t.length+1,u=new ye(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const p=d.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===a&&p.largestBatchId>r&&o.set(p.getKey(),p)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,r,o){let a=new st(((y,v)=>y-v));const u=this.overlays.getIterator();for(;u.hasNext();){const y=u.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>r){let v=a.get(y.largestBatchId);v===null&&(v=Cs(),a=a.insert(y.largestBatchId,v)),v.set(y.getKey(),y)}}const d=Cs(),p=a.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,v)=>d.set(y,v))),!(d.size()>=o)););return G.resolve(d)}wt(e,t,r){const o=this.overlays.get(r.key);if(o!==null){const u=this.kr.get(o.largestBatchId).delete(r.key);this.kr.set(o.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new MP(t,r));let a=this.kr.get(t);a===void 0&&(a=be(),this.kr.set(t,a)),this.kr.set(t,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(){this.sessionToken=Ft.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(){this.qr=new Rt(xt.Qr),this.$r=new Rt(xt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new xt(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new xt(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new ye(new Ye([])),r=new xt(t,e),o=new xt(t,e+1),a=[];return this.$r.forEachInRange([r,o],(u=>{this.Wr(u),a.push(u.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ye(new Ye([])),r=new xt(t,e),o=new xt(t,e+1);let a=be();return this.$r.forEachInRange([r,o],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new xt(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class xt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ye.comparator(e.key,t.key)||ke(e.Hr,t.Hr)}static Ur(e,t){return ke(e.Hr,t.Hr)||ye.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Rt(xt.Qr)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,o){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new VP(a,t,r,o);this.mutationQueue.push(u);for(const d of o)this.Yr=this.Yr.add(new xt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return G.resolve(u)}lookupMutationBatch(e,t){return G.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,o=this.Xr(r),a=o<0?0:o;return G.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?Vp:this.er-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new xt(t,0),o=new xt(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,o],(u=>{const d=this.Zr(u.Hr);a.push(d)})),G.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Rt(ke);return t.forEach((o=>{const a=new xt(o,0),u=new xt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,u],(d=>{r=r.add(d.Hr)}))})),G.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,o=r.length+1;let a=r;ye.isDocumentKey(a)||(a=a.child(""));const u=new xt(new ye(a),0);let d=new Rt(ke);return this.Yr.forEachWhile((p=>{const y=p.key.path;return!!r.isPrefixOf(y)&&(y.length===o&&(d=d.add(p.Hr)),!0)}),u),G.resolve(this.ei(d))}ei(e){const t=[];return e.forEach((r=>{const o=this.Zr(r);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){ze(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return G.forEach(t.mutations,(o=>{const a=new xt(o.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new xt(t,0),o=this.Yr.firstAfterOrEqual(r);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e){this.ni=e,this.docs=(function(){return new st(ye.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,o=this.docs.get(r),a=o?o.size:0,u=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return G.resolve(r?r.document.mutableCopy():Wt.newInvalidDocument(t))}getEntries(e,t){let r=Jr();return t.forEach((o=>{const a=this.docs.get(o);r=r.insert(o,a?a.document.mutableCopy():Wt.newInvalidDocument(o))})),G.resolve(r)}getDocumentsMatchingQuery(e,t,r,o){let a=Jr();const u=t.path,d=new ye(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:y,value:{document:v}}=p.getNext();if(!u.isPrefixOf(y.path))break;y.path.length>u.length+1||JC(QC(v),r)<=0||(o.has(v.key)||xh(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return G.resolve(a)}getAllFromCollectionGroup(e,t,r,o){Ee(9500)}ri(e,t){return G.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Tk(this)}getSize(e){return G.resolve(this.size)}}class Tk extends pk{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(r)})),G.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e){this.persistence=e,this.ii=new Hs((t=>Fp(t)),jp),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.si=0,this.oi=new Wp,this.targetCount=0,this._i=ra.ar()}forEachTarget(e,t){return this.ii.forEach(((r,o)=>t(o))),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),G.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new ra(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.hr(t),G.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,r){let o=0;const a=[];return this.ii.forEach(((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.ii.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)})),G.waitFor(a).next((()=>o))}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return G.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),G.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const o=this.persistence.referenceDelegate,a=[];return o&&t.forEach((u=>{a.push(o.markPotentiallyOrphaned(e,u))})),G.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return G.resolve(r)}containsKey(e,t){return G.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,t){this.ai={},this.overlays={},this.ui=new Ah(0),this.ci=!1,this.ci=!0,this.li=new vk,this.referenceDelegate=e(this),this.hi=new Ik(this),this.indexManager=new ak,this.remoteDocumentCache=(function(o){return new Ek(o)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new sk(t),this.Ti=new yk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new _k,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new wk(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){le("MemoryPersistence","Starting transaction:",e);const o=new Sk(this.ui.next());return this.referenceDelegate.Ii(),r(o).next((a=>this.referenceDelegate.di(o).next((()=>a)))).toPromise().then((a=>(o.raiseOnCommittedEvent(),a)))}Ei(e,t){return G.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class Sk extends YC{constructor(e){super(),this.currentSequenceNumber=e}}class Gp{constructor(e){this.persistence=e,this.Ai=new Wp,this.Ri=null}static Vi(e){return new Gp(e)}get mi(){if(this.Ri)return this.Ri;throw Ee(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),G.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),G.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((a=>this.mi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.mi,(r=>{const o=ye.fromPath(r);return this.fi(e,o).next((a=>{a||t.removeEntry(o,Se.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return G.or([()=>G.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class eh{constructor(e,t){this.persistence=e,this.gi=new Hs((r=>tP(r.path)),((r,o)=>r.isEqual(o))),this.garbageCollector=fk(this,t)}static Vi(e,t){return new eh(e,t)}Ii(){}di(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((o=>r+o))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return G.forEach(this.gi,((r,o)=>this.Sr(e,r,o).next((a=>a?G.resolve():t(o)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const o=this.persistence.getRemoteDocumentCache(),a=o.newChangeBuffer();return o.ri(e,(u=>this.Sr(e,u,t).next((d=>{d||(r++,a.removeEntry(u,Se.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),G.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),G.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=xc(e.data.value)),t}Sr(e,t,r){return G.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return G.resolve(o!==void 0&&o>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,t,r,o){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=o}static Es(e,t){let r=be(),o=be();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new Kp(e,t.fromCache,r,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return gA()?8:ZC(Kt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,o){const a={result:null};return this.ps(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ys(e,t,o,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new Rk;return this.ws(e,t,u).next((d=>{if(a.result=d,this.Rs)return this.Ss(e,t,u,d.size)}))})).next((()=>a.result))}Ss(e,t,r,o){return r.documentReadCount<this.Vs?(Bo()<=xe.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",zo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),G.resolve()):(Bo()<=xe.DEBUG&&le("QueryEngine","Query:",zo(t),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.fs*o?(Bo()<=xe.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",zo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_r(t))):G.resolve())}ps(e,t){if(q_(t))return G.resolve(null);let r=_r(t);return this.indexManager.getIndexType(e,r).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=hp(t,null,"F"),r=_r(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=be(...a);return this.gs.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,r).next((p=>{const y=this.bs(t,d);return this.Ds(t,y,u,p.readTime)?this.ps(e,hp(t,null,"F")):this.vs(e,y,t,p)}))))})))))}ys(e,t,r,o){return q_(t)||o.isEqual(Se.min())?G.resolve(null):this.gs.getDocuments(e,r).next((a=>{const u=this.bs(t,a);return this.Ds(t,u,r,o)?G.resolve(null):(Bo()<=xe.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),zo(t)),this.vs(e,u,t,KC(o,xl)).next((d=>d)))}))}bs(e,t){let r=new Rt(xE(e));return t.forEach(((o,a)=>{xh(e,a)&&(r=r.add(a))})),r}Ds(e,t,r,o){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}ws(e,t,r){return Bo()<=xe.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",zo(t)),this.gs.getDocumentsMatchingQuery(e,t,Bi.min(),r)}vs(e,t,r,o){return this.gs.getDocumentsMatchingQuery(e,r,o).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp="LocalStore",Ck=3e8;class Pk{constructor(e,t,r,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new st(ke),this.Ms=new Hs((a=>Fp(a)),jp),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gk(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function kk(n,e,t,r){return new Pk(n,e,t,r)}async function t0(n,e){const t=Ae(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let o;return t.mutationQueue.getAllMutationBatches(r).next((a=>(o=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],d=[];let p=be();for(const y of o){u.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}for(const y of a){d.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(r,p).next((y=>({Bs:y,removedBatchIds:u,addedBatchIds:d})))}))}))}function Nk(n,e){const t=Ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const o=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(d,p,y,v){const E=y.batch,I=E.keys();let L=G.resolve();return I.forEach((P=>{L=L.next((()=>v.getEntry(p,P))).next((V=>{const A=y.docVersions.get(P);ze(A!==null,48541),V.version.compareTo(A)<0&&(E.applyToRemoteDocument(V,y),V.isValidDocument()&&(V.setReadTime(y.commitVersion),v.addEntry(V)))}))})),L.next((()=>d.mutationQueue.removeMutationBatch(p,E)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(d){let p=be();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(p=p.add(d.batch.mutations[y].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(r,o)))}))}function n0(n){const e=Ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function xk(n,e){const t=Ae(n),r=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const d=[];e.targetChanges.forEach(((v,E)=>{const I=o.get(E);if(!I)return;d.push(t.hi.removeMatchingKeys(a,v.removedDocuments,E).next((()=>t.hi.addMatchingKeys(a,v.addedDocuments,E))));let L=I.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(E)!==null?L=L.withResumeToken(Ft.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):v.resumeToken.approximateByteSize()>0&&(L=L.withResumeToken(v.resumeToken,r)),o=o.insert(E,L),(function(V,A,X){return V.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=Ck?!0:X.addedDocuments.size+X.modifiedDocuments.size+X.removedDocuments.size>0})(I,L,v)&&d.push(t.hi.updateTargetData(a,L))}));let p=Jr(),y=be();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))})),d.push(bk(a,u,e.documentUpdates).next((v=>{p=v.Ls,y=v.ks}))),!r.isEqual(Se.min())){const v=t.hi.getLastRemoteSnapshotVersion(a).next((E=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,r)));d.push(v)}return G.waitFor(d).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,p,y))).next((()=>p))})).then((a=>(t.Fs=o,a)))}function bk(n,e,t){let r=be(),o=be();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=Jr();return t.forEach(((d,p)=>{const y=a.get(d);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(Se.min())?(e.removeEntry(d,p.readTime),u=u.insert(d,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),u=u.insert(d,p)):le(Qp,"Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",p.version)})),{Ls:u,ks:o}}))}function Ok(n,e){const t=Ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Vp),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Dk(n,e){const t=Ae(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let o;return t.hi.getTargetData(r,e).next((a=>a?(o=a,G.resolve(o)):t.hi.allocateTargetId(r).next((u=>(o=new xi(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,o).next((()=>o)))))))})).then((r=>{const o=t.Fs.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function gp(n,e,t){const r=Ae(n),o=r.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,o)))}catch(u){if(!ha(u))throw u;le(Qp,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(o.target)}function iv(n,e,t){const r=Ae(n);let o=Se.min(),a=be();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(p,y,v){const E=Ae(p),I=E.Ms.get(v);return I!==void 0?G.resolve(E.Fs.get(I)):E.hi.getTargetData(y,v)})(r,u,_r(e)).next((d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,d.targetId).next((p=>{a=p}))})).next((()=>r.Cs.getDocumentsMatchingQuery(u,e,t?o:Se.min(),t?a:be()))).next((d=>(Lk(r,EP(e),d),{documents:d,qs:a})))))}function Lk(n,e,t){let r=n.xs.get(e)||Se.min();t.forEach(((o,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.xs.set(e,r)}class sv{constructor(){this.activeTargetIds=CP()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Vk{constructor(){this.Fo=new sv,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new sv,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov="ConnectivityMonitor";class av{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){le(ov,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){le(ov,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ic=null;function yp(){return Ic===null?Ic=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ic++,"0x"+Ic.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="RestConnection",Uk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Fk{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${o}`,this.Ko=this.databaseId.database===Gc?`project_id=${r}`:`project_id=${r}&database_id=${o}`}Wo(e,t,r,o,a){const u=yp(),d=this.Go(e,t.toUriEncodedString());le(Df,`Sending RPC '${e}' ${u}:`,d,r);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(p,o,a);const{host:y}=new URL(d),v=Ki(y);return this.jo(e,d,p,r,v).then((E=>(le(Df,`Received RPC '${e}' ${u}: `,E),E)),(E=>{throw ji(Df,`RPC '${e}' ${u} failed with error: `,E,"url: ",d,"request:",r),E}))}Jo(e,t,r,o,a,u){return this.Wo(e,t,r,o,a)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ua})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,a)=>e[a]=o)),r&&r.headers.forEach(((o,a)=>e[a]=o))}Go(e,t){const r=Uk[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="WebChannelConnection";class Bk extends Fk{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,o,a){const u=yp();return new Promise(((d,p)=>{const y=new iE;y.setWithCredentials(!0),y.listenOnce(sE.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case Nc.NO_ERROR:const E=y.getResponseJson();le(Ht,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),d(E);break;case Nc.TIMEOUT:le(Ht,`RPC '${e}' ${u} timed out`),p(new pe(J.DEADLINE_EXCEEDED,"Request time out"));break;case Nc.HTTP_ERROR:const I=y.getStatus();if(le(Ht,`RPC '${e}' ${u} failed with status:`,I,"response text:",y.getResponseText()),I>0){let L=y.getResponseJson();Array.isArray(L)&&(L=L[0]);const P=L?.error;if(P&&P.status&&P.message){const V=(function(X){const Y=X.toLowerCase().replace(/_/g,"-");return Object.values(J).indexOf(Y)>=0?Y:J.UNKNOWN})(P.status);p(new pe(V,P.message))}else p(new pe(J.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new pe(J.UNAVAILABLE,"Connection failed."));break;default:Ee(9055,{c_:e,streamId:u,l_:y.getLastErrorCode(),h_:y.getLastError()})}}finally{le(Ht,`RPC '${e}' ${u} completed.`)}}));const v=JSON.stringify(o);le(Ht,`RPC '${e}' ${u} sending request:`,o),y.send(t,"POST",v,r,15)}))}P_(e,t,r){const o=yp(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=lE(),d=aE(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.zo(p.initMessageHeaders,t,r),p.encodeInitMessageHeaders=!0;const v=a.join("");le(Ht,`Creating RPC '${e}' stream ${o}: ${v}`,p);const E=u.createWebChannel(v,p);this.T_(E);let I=!1,L=!1;const P=new jk({Ho:A=>{L?le(Ht,`Not sending because RPC '${e}' stream ${o} is closed:`,A):(I||(le(Ht,`Opening RPC '${e}' stream ${o} transport.`),E.open(),I=!0),le(Ht,`RPC '${e}' stream ${o} sending:`,A),E.send(A))},Yo:()=>E.close()}),V=(A,X,Y)=>{A.listen(X,(K=>{try{Y(K)}catch(te){setTimeout((()=>{throw te}),0)}}))};return V(E,pl.EventType.OPEN,(()=>{L||(le(Ht,`RPC '${e}' stream ${o} transport opened.`),P.s_())})),V(E,pl.EventType.CLOSE,(()=>{L||(L=!0,le(Ht,`RPC '${e}' stream ${o} transport closed`),P.__(),this.I_(E))})),V(E,pl.EventType.ERROR,(A=>{L||(L=!0,ji(Ht,`RPC '${e}' stream ${o} transport errored. Name:`,A.name,"Message:",A.message),P.__(new pe(J.UNAVAILABLE,"The operation could not be completed")))})),V(E,pl.EventType.MESSAGE,(A=>{var X;if(!L){const Y=A.data[0];ze(!!Y,16349);const K=Y,te=K?.error||((X=K[0])===null||X===void 0?void 0:X.error);if(te){le(Ht,`RPC '${e}' stream ${o} received error:`,te);const _e=te.status;let me=(function(k){const b=mt[k];if(b!==void 0)return $E(b)})(_e),x=te.message;me===void 0&&(me=J.INTERNAL,x="Unknown error status: "+_e+" with message "+te.message),L=!0,P.__(new pe(me,x)),E.close()}else le(Ht,`RPC '${e}' stream ${o} received:`,Y),P.a_(Y)}})),V(d,oE.STAT_EVENT,(A=>{A.stat===sp.PROXY?le(Ht,`RPC '${e}' stream ${o} detected buffering proxy`):A.stat===sp.NOPROXY&&le(Ht,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{P.o_()}),0),P}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Lf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(n){return new qP(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,t,r=1e3,o=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=o,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-r);o>0&&le("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv="PersistentStream";class i0{constructor(e,t,r,o,a,u,d,p){this.Fi=e,this.w_=r,this.S_=o,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new r0(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===J.RESOURCE_EXHAUSTED?(Qr(t.toString()),Qr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===J.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,o])=>{this.b_===t&&this.W_(r,o)}),(r=>{e((()=>{const o=new pe(J.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(o)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{r((()=>this.G_(o)))})),this.stream.onMessage((o=>{r((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return le(lv,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(le(lv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class zk extends i0{constructor(e,t,r,o,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,o,u),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=KP(this.serializer,e),r=(function(a){if(!("targetChange"in a))return Se.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Se.min():u.readTime?wr(u.readTime):Se.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=mp(this.serializer),t.addTarget=(function(a,u){let d;const p=u.target;if(d=cp(p)?{documents:XP(a,p)}:{query:YP(a,p).Vt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=WE(a,u.resumeToken);const y=dp(a,u.expectedCount);y!==null&&(d.expectedCount=y)}else if(u.snapshotVersion.compareTo(Se.min())>0){d.readTime=Zc(a,u.snapshotVersion.toTimestamp());const y=dp(a,u.expectedCount);y!==null&&(d.expectedCount=y)}return d})(this.serializer,e);const r=ek(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=mp(this.serializer),t.removeTarget=e,this.k_(t)}}class $k extends i0{constructor(e,t,r,o,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,o,u),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=JP(e.writeResults,e.commitTime),r=wr(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=mp(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>QP(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{}class qk extends Hk{constructor(e,t,r,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new pe(J.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Wo(e,fp(t,r),o,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new pe(J.UNKNOWN,a.toString())}))}Jo(e,t,r,o,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Jo(e,fp(t,r),o,u,d,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new pe(J.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Wk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Qr(t),this._a=!1):le("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="RemoteStore";class Gk{constructor(e,t,r,o,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((u=>{r.enqueueAndForget((async()=>{Ws(this)&&(le(Ls,"Restarting streams for network reachability change."),await(async function(p){const y=Ae(p);y.Ia.add(4),await Kl(y),y.Aa.set("Unknown"),y.Ia.delete(4),await Vh(y)})(this))}))})),this.Aa=new Wk(r,o)}}async function Vh(n){if(Ws(n))for(const e of n.da)await e(!0)}async function Kl(n){for(const e of n.da)await e(!1)}function s0(n,e){const t=Ae(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Zp(t)?Yp(t):da(t).x_()&&Xp(t,e))}function Jp(n,e){const t=Ae(n),r=da(t);t.Ta.delete(e),r.x_()&&o0(t,e),t.Ta.size===0&&(r.x_()?r.B_():Ws(t)&&t.Aa.set("Unknown"))}function Xp(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}da(n).H_(e)}function o0(n,e){n.Ra.$e(e),da(n).Y_(e)}function Yp(n){n.Ra=new BP({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),da(n).start(),n.Aa.aa()}function Zp(n){return Ws(n)&&!da(n).M_()&&n.Ta.size>0}function Ws(n){return Ae(n).Ia.size===0}function a0(n){n.Ra=void 0}async function Kk(n){n.Aa.set("Online")}async function Qk(n){n.Ta.forEach(((e,t)=>{Xp(n,e)}))}async function Jk(n,e){a0(n),Zp(n)?(n.Aa.la(e),Yp(n)):n.Aa.set("Unknown")}async function Xk(n,e,t){if(n.Aa.set("Online"),e instanceof qE&&e.state===2&&e.cause)try{await(async function(o,a){const u=a.cause;for(const d of a.targetIds)o.Ta.has(d)&&(await o.remoteSyncer.rejectListen(d,u),o.Ta.delete(d),o.Ra.removeTarget(d))})(n,e)}catch(r){le(Ls,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await th(n,r)}else if(e instanceof Dc?n.Ra.Ye(e):e instanceof HE?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Se.min()))try{const r=await n0(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const d=a.Ra.Pt(u);return d.targetChanges.forEach(((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const v=a.Ta.get(y);v&&a.Ta.set(y,v.withResumeToken(p.resumeToken,u))}})),d.targetMismatches.forEach(((p,y)=>{const v=a.Ta.get(p);if(!v)return;a.Ta.set(p,v.withResumeToken(Ft.EMPTY_BYTE_STRING,v.snapshotVersion)),o0(a,p);const E=new xi(v.target,p,y,v.sequenceNumber);Xp(a,E)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(r){le(Ls,"Failed to raise snapshot:",r),await th(n,r)}}async function th(n,e,t){if(!ha(e))throw e;n.Ia.add(1),await Kl(n),n.Aa.set("Offline"),t||(t=()=>n0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{le(Ls,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Vh(n)}))}function l0(n,e){return e().catch((t=>th(n,t,e)))}async function Mh(n){const e=Ae(n),t=qi(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Vp;for(;Yk(e);)try{const o=await Ok(e.localStore,r);if(o===null){e.Pa.length===0&&t.B_();break}r=o.batchId,Zk(e,o)}catch(o){await th(e,o)}u0(e)&&c0(e)}function Yk(n){return Ws(n)&&n.Pa.length<10}function Zk(n,e){n.Pa.push(e);const t=qi(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function u0(n){return Ws(n)&&!qi(n).M_()&&n.Pa.length>0}function c0(n){qi(n).start()}async function eN(n){qi(n).na()}async function tN(n){const e=qi(n);for(const t of n.Pa)e.X_(t.mutations)}async function nN(n,e,t){const r=n.Pa.shift(),o=$p.from(r,e,t);await l0(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await Mh(n)}async function rN(n,e){e&&qi(n).Z_&&await(async function(r,o){if((function(u){return FP(u)&&u!==J.ABORTED})(o.code)){const a=r.Pa.shift();qi(r).N_(),await l0(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,o))),await Mh(r)}})(n,e),u0(n)&&c0(n)}async function uv(n,e){const t=Ae(n);t.asyncQueue.verifyOperationInProgress(),le(Ls,"RemoteStore received new credentials");const r=Ws(t);t.Ia.add(3),await Kl(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Vh(t)}async function iN(n,e){const t=Ae(n);e?(t.Ia.delete(2),await Vh(t)):e||(t.Ia.add(2),await Kl(t),t.Aa.set("Unknown"))}function da(n){return n.Va||(n.Va=(function(t,r,o){const a=Ae(t);return a.ia(),new zk(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)})(n.datastore,n.asyncQueue,{Zo:Kk.bind(null,n),e_:Qk.bind(null,n),n_:Jk.bind(null,n),J_:Xk.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Zp(n)?Yp(n):n.Aa.set("Unknown")):(await n.Va.stop(),a0(n))}))),n.Va}function qi(n){return n.ma||(n.ma=(function(t,r,o){const a=Ae(t);return a.ia(),new $k(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:eN.bind(null,n),n_:rN.bind(null,n),ea:tN.bind(null,n),ta:nN.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Mh(n)):(await n.ma.stop(),n.Pa.length>0&&(le(Ls,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,t,r,o,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=o,this.removalCallback=a,this.deferred=new Mi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,o,a){const u=Date.now()+r,d=new em(e,t,u,o,a);return d.start(r),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new pe(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tm(n,e){if(Qr("AsyncQueue",`${e}: ${n}`),ha(n))return new pe(J.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{static emptySet(e){return new Go(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ye.comparator(t.key,r.key):(t,r)=>ye.comparator(t.key,r.key),this.keyedMap=ml(),this.sortedSet=new st(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Go)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=r.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Go;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(){this.fa=new st(ye.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Ee(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class ia{constructor(e,t,r,o,a,u,d,p,y){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,r,o,a){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new ia(e,t,Go.emptySet(t),u,r,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==r[o].type||!t[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class oN{constructor(){this.queries=hv(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const o=Ae(t),a=o.queries;o.queries=hv(),a.forEach(((u,d)=>{for(const p of d.wa)p.onError(r)}))})(this,new pe(J.ABORTED,"Firestore shutting down"))}}function hv(){return new Hs((n=>NE(n)),Nh)}async function aN(n,e){const t=Ae(n);let r=3;const o=e.query;let a=t.queries.get(o);a?!a.Sa()&&e.ba()&&(r=2):(a=new sN,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await t.onListen(o,!0);break;case 1:a.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(u){const d=tm(u,`Initialization of query '${zo(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&nm(t)}async function lN(n,e){const t=Ae(n),r=e.query;let o=3;const a=t.queries.get(r);if(a){const u=a.wa.indexOf(e);u>=0&&(a.wa.splice(u,1),a.wa.length===0?o=e.ba()?0:1:!a.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function uN(n,e){const t=Ae(n);let r=!1;for(const o of e){const a=o.query,u=t.queries.get(a);if(u){for(const d of u.wa)d.Ca(o)&&(r=!0);u.ya=o}}r&&nm(t)}function cN(n,e,t){const r=Ae(n),o=r.queries.get(e);if(o)for(const a of o.wa)a.onError(t);r.queries.delete(e)}function nm(n){n.Da.forEach((e=>{e.next()}))}var _p,dv;(dv=_p||(_p={})).Fa="default",dv.Cache="cache";class hN{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const o of e.docChanges)o.type!==3&&r.push(o);e=new ia(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=ia.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==_p.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e){this.key=e}}class d0{constructor(e){this.key=e}}class dN{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=be(),this.mutatedKeys=be(),this.Xa=xE(e),this.eu=new Go(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new cv,o=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,u=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((v,E)=>{const I=o.get(v),L=xh(this.query,E)?E:null,P=!!I&&this.mutatedKeys.has(I.key),V=!!L&&(L.hasLocalMutations||this.mutatedKeys.has(L.key)&&L.hasCommittedMutations);let A=!1;I&&L?I.data.isEqual(L.data)?P!==V&&(r.track({type:3,doc:L}),A=!0):this.iu(I,L)||(r.track({type:2,doc:L}),A=!0,(p&&this.Xa(L,p)>0||y&&this.Xa(L,y)<0)&&(d=!0)):!I&&L?(r.track({type:0,doc:L}),A=!0):I&&!L&&(r.track({type:1,doc:I}),A=!0,(p||y)&&(d=!0)),A&&(L?(u=u.add(L),a=V?a.add(v):a.delete(v)):(u=u.delete(v),a=a.delete(v)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const v=this.query.limitType==="F"?u.last():u.first();u=u.delete(v.key),a=a.delete(v.key),r.track({type:1,doc:v})}return{eu:u,ru:r,Ds:d,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,o){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const u=e.ru.pa();u.sort(((v,E)=>(function(L,P){const V=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee(20277,{At:A})}};return V(L)-V(P)})(v.type,E.type)||this.Xa(v.doc,E.doc))),this.su(r),o=o!=null&&o;const d=t&&!o?this.ou():[],p=this.Za.size===0&&this.current&&!o?1:0,y=p!==this.Ya;return this.Ya=p,u.length!==0||y?{snapshot:new ia(this.query,e.eu,a,u,e.mutatedKeys,p===0,y,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new cv,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=be(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new d0(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new h0(r))})),t}uu(e){this.Ha=e.qs,this.Za=be();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return ia.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const rm="SyncEngine";class fN{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class pN{constructor(e){this.key=e,this.lu=!1}}class mN{constructor(e,t,r,o,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new Hs((d=>NE(d)),Nh),this.Tu=new Map,this.Iu=new Set,this.du=new st(ye.comparator),this.Eu=new Map,this.Au=new Wp,this.Ru={},this.Vu=new Map,this.mu=ra.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function gN(n,e,t=!0){const r=_0(n);let o;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.cu()):o=await f0(r,e,t,!0),o}async function yN(n,e){const t=_0(n);await f0(t,e,!0,!1)}async function f0(n,e,t,r){const o=await Dk(n.localStore,_r(e)),a=o.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await _N(n,e,a,u==="current",o.resumeToken)),n.isPrimaryClient&&t&&s0(n.remoteStore,o),d}async function _N(n,e,t,r,o){n.gu=(E,I,L)=>(async function(V,A,X,Y){let K=A.view.nu(X);K.Ds&&(K=await iv(V.localStore,A.query,!1).then((({documents:x})=>A.view.nu(x,K))));const te=Y&&Y.targetChanges.get(A.targetId),_e=Y&&Y.targetMismatches.get(A.targetId)!=null,me=A.view.applyChanges(K,V.isPrimaryClient,te,_e);return pv(V,A.targetId,me._u),me.snapshot})(n,E,I,L);const a=await iv(n.localStore,e,!0),u=new dN(e,a.qs),d=u.nu(a.documents),p=Gl.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",o),y=u.applyChanges(d,n.isPrimaryClient,p);pv(n,t,y._u);const v=new fN(e,t,u);return n.Pu.set(e,v),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),y.snapshot}async function vN(n,e,t){const r=Ae(n),o=r.Pu.get(e),a=r.Tu.get(o.targetId);if(a.length>1)return r.Tu.set(o.targetId,a.filter((u=>!Nh(u,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await gp(r.localStore,o.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(o.targetId),t&&Jp(r.remoteStore,o.targetId),vp(r,o.targetId)})).catch(ca)):(vp(r,o.targetId),await gp(r.localStore,o.targetId,!0))}async function wN(n,e){const t=Ae(n),r=t.Pu.get(e),o=t.Tu.get(r.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Jp(t.remoteStore,r.targetId))}async function EN(n,e,t){const r=PN(n);try{const o=await(function(u,d){const p=Ae(u),y=Ze.now(),v=d.reduce(((L,P)=>L.add(P.key)),be());let E,I;return p.persistence.runTransaction("Locally write mutations","readwrite",(L=>{let P=Jr(),V=be();return p.Os.getEntries(L,v).next((A=>{P=A,P.forEach(((X,Y)=>{Y.isValidDocument()||(V=V.add(X))}))})).next((()=>p.localDocuments.getOverlayedDocuments(L,P))).next((A=>{E=A;const X=[];for(const Y of d){const K=DP(Y,E.get(Y.key).overlayedDocument);K!=null&&X.push(new qs(Y.key,K,IE(K.value.mapValue),vr.exists(!0)))}return p.mutationQueue.addMutationBatch(L,y,X,d)})).next((A=>{I=A;const X=A.applyToLocalDocumentSet(E,V);return p.documentOverlayCache.saveOverlays(L,A.batchId,X)}))})).then((()=>({batchId:I.batchId,changes:OE(E)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(o.batchId),(function(u,d,p){let y=u.Ru[u.currentUser.toKey()];y||(y=new st(ke)),y=y.insert(d,p),u.Ru[u.currentUser.toKey()]=y})(r,o.batchId,t),await Ql(r,o.changes),await Mh(r.remoteStore)}catch(o){const a=tm(o,"Failed to persist write");t.reject(a)}}async function p0(n,e){const t=Ae(n);try{const r=await xk(t.localStore,e);e.targetChanges.forEach(((o,a)=>{const u=t.Eu.get(a);u&&(ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?u.lu=!0:o.modifiedDocuments.size>0?ze(u.lu,14607):o.removedDocuments.size>0&&(ze(u.lu,42227),u.lu=!1))})),await Ql(t,r,e)}catch(r){await ca(r)}}function fv(n,e,t){const r=Ae(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const o=[];r.Pu.forEach(((a,u)=>{const d=u.view.va(e);d.snapshot&&o.push(d.snapshot)})),(function(u,d){const p=Ae(u);p.onlineState=d;let y=!1;p.queries.forEach(((v,E)=>{for(const I of E.wa)I.va(d)&&(y=!0)})),y&&nm(p)})(r.eventManager,e),o.length&&r.hu.J_(o),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function TN(n,e,t){const r=Ae(n);r.sharedClientState.updateQueryState(e,"rejected",t);const o=r.Eu.get(e),a=o&&o.key;if(a){let u=new st(ye.comparator);u=u.insert(a,Wt.newNoDocument(a,Se.min()));const d=be().add(a),p=new Dh(Se.min(),new Map,new st(ke),u,d);await p0(r,p),r.du=r.du.remove(a),r.Eu.delete(e),im(r)}else await gp(r.localStore,e,!1).then((()=>vp(r,e,t))).catch(ca)}async function IN(n,e){const t=Ae(n),r=e.batch.batchId;try{const o=await Nk(t.localStore,e);g0(t,r,null),m0(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ql(t,o)}catch(o){await ca(o)}}async function SN(n,e,t){const r=Ae(n);try{const o=await(function(u,d){const p=Ae(u);return p.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let v;return p.mutationQueue.lookupMutationBatch(y,d).next((E=>(ze(E!==null,37113),v=E.keys(),p.mutationQueue.removeMutationBatch(y,E)))).next((()=>p.mutationQueue.performConsistencyCheck(y))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(y,v,d))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,v))).next((()=>p.localDocuments.getDocuments(y,v)))}))})(r.localStore,e);g0(r,e,t),m0(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ql(r,o)}catch(o){await ca(o)}}function m0(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function g0(n,e,t){const r=Ae(n);let o=r.Ru[r.currentUser.toKey()];if(o){const a=o.get(e);a&&(t?a.reject(t):a.resolve(),o=o.remove(e)),r.Ru[r.currentUser.toKey()]=o}}function vp(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||y0(n,r)}))}function y0(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Jp(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),im(n))}function pv(n,e,t){for(const r of t)r instanceof h0?(n.Au.addReference(r.key,e),RN(n,r)):r instanceof d0?(le(rm,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||y0(n,r.key)):Ee(19791,{yu:r})}function RN(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(le(rm,"New document in limbo: "+t),n.Iu.add(r),im(n))}function im(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new ye(Ye.fromString(e)),r=n.mu.next();n.Eu.set(r,new pN(t)),n.du=n.du.insert(t,r),s0(n.remoteStore,new xi(_r(Bp(t.path)),r,"TargetPurposeLimboResolution",Ah.ue))}}async function Ql(n,e,t){const r=Ae(n),o=[],a=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach(((d,p)=>{u.push(r.gu(p,e,t).then((y=>{var v;if((y||t)&&r.isPrimaryClient){const E=y?!y.fromCache:(v=t?.targetChanges.get(p.targetId))===null||v===void 0?void 0:v.current;r.sharedClientState.updateQueryState(p.targetId,E?"current":"not-current")}if(y){o.push(y);const E=Kp.Es(p.targetId,y);a.push(E)}})))})),await Promise.all(u),r.hu.J_(o),await(async function(p,y){const v=Ae(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>G.forEach(y,(I=>G.forEach(I.Is,(L=>v.persistence.referenceDelegate.addReference(E,I.targetId,L))).next((()=>G.forEach(I.ds,(L=>v.persistence.referenceDelegate.removeReference(E,I.targetId,L)))))))))}catch(E){if(!ha(E))throw E;le(Qp,"Failed to update sequence numbers: "+E)}for(const E of y){const I=E.targetId;if(!E.fromCache){const L=v.Fs.get(I),P=L.snapshotVersion,V=L.withLastLimboFreeSnapshotVersion(P);v.Fs=v.Fs.insert(I,V)}}})(r.localStore,a))}async function AN(n,e){const t=Ae(n);if(!t.currentUser.isEqual(e)){le(rm,"User change. New user:",e.toKey());const r=await t0(t.localStore,e);t.currentUser=e,(function(a,u){a.Vu.forEach((d=>{d.forEach((p=>{p.reject(new pe(J.CANCELLED,u))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ql(t,r.Bs)}}function CN(n,e){const t=Ae(n),r=t.Eu.get(e);if(r&&r.lu)return be().add(r.key);{let o=be();const a=t.Tu.get(e);if(!a)return o;for(const u of a){const d=t.Pu.get(u);o=o.unionWith(d.view.tu)}return o}}function _0(n){const e=Ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=p0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=CN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TN.bind(null,e),e.hu.J_=uN.bind(null,e.eventManager),e.hu.pu=cN.bind(null,e.eventManager),e}function PN(n){const e=Ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SN.bind(null,e),e}class nh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Lh(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return kk(this.persistence,new Ak,e.initialUser,this.serializer)}Du(e){return new e0(Gp.Vi,this.serializer)}bu(e){return new Vk}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nh.provider={build:()=>new nh};class kN extends nh{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){ze(this.persistence.referenceDelegate instanceof eh,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new hk(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?un.withCacheSize(this.cacheSizeBytes):un.DEFAULT;return new e0((r=>eh.Vi(r,t)),this.serializer)}}class wp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=AN.bind(null,this.syncEngine),await iN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new oN})()}createDatastore(e){const t=Lh(e.databaseInfo.databaseId),r=(function(a){return new Bk(a)})(e.databaseInfo);return(function(a,u,d,p){return new qk(a,u,d,p)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,o,a,u,d){return new Gk(r,o,a,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>fv(this.syncEngine,t,0)),(function(){return av.C()?new av:new Mk})())}createSyncEngine(e,t){return(function(o,a,u,d,p,y,v){const E=new mN(o,a,u,d,p,y);return v&&(E.fu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const a=Ae(o);le(Ls,"RemoteStore shutting down."),a.Ia.add(5),await Kl(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}wp.provider={build:()=>new wp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Qr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="FirestoreClient";class xN{constructor(e,t,r,o,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=o,this.user=qt.UNAUTHENTICATED,this.clientId=Dp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{le(Wi,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(le(Wi,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=tm(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Vf(n,e){n.asyncQueue.verifyOperationInProgress(),le(Wi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async o=>{r.isEqual(o)||(await t0(e.localStore,o),r=o)})),e.persistence.setDatabaseDeletedListener((()=>{ji("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{le("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{ji("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),n._offlineComponents=e}async function mv(n,e){n.asyncQueue.verifyOperationInProgress();const t=await bN(n);le(Wi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>uv(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,o)=>uv(e.remoteStore,o))),n._onlineComponents=e}async function bN(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){le(Wi,"Using user provided OfflineComponentProvider");try{await Vf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===J.FAILED_PRECONDITION||o.code===J.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;ji("Error using user provided cache. Falling back to memory cache: "+t),await Vf(n,new nh)}}else le(Wi,"Using default OfflineComponentProvider"),await Vf(n,new kN(void 0));return n._offlineComponents}async function v0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(le(Wi,"Using user provided OnlineComponentProvider"),await mv(n,n._uninitializedComponentsProvider._online)):(le(Wi,"Using default OnlineComponentProvider"),await mv(n,new wp))),n._onlineComponents}function ON(n){return v0(n).then((e=>e.syncEngine))}async function DN(n){const e=await v0(n),t=e.eventManager;return t.onListen=gN.bind(null,e.syncEngine),t.onUnlisten=vN.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=yN.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=wN.bind(null,e.syncEngine),t}function LN(n,e,t={}){const r=new Mi;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,p,y){const v=new NN({next:I=>{v.Ou(),u.enqueueAndForget((()=>lN(a,E)));const L=I.docs.has(d);!L&&I.fromCache?y.reject(new pe(J.UNAVAILABLE,"Failed to get document because the client is offline.")):L&&I.fromCache&&p&&p.source==="server"?y.reject(new pe(J.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(I)},error:I=>y.reject(I)}),E=new hN(Bp(d.path),v,{includeMetadataChanges:!0,ka:!0});return aN(a,E)})(await DN(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="firestore.googleapis.com",yv=!0;class _v{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new pe(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=E0,this.ssl=yv}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:yv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ZE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<uk)throw new pe(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}GC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=w0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new pe(J.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new pe(J.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new pe(J.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,o){return r.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Uh{constructor(e,t,r,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _v({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new pe(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new pe(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _v(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new UC;switch(r.type){case"firstParty":return new zC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new pe(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=gv.get(t);r&&(le("ComponentProvider","Removing Datastore"),gv.delete(t),r.terminate())})(this),Promise.resolve()}}function VN(n,e,t,r={}){var o;n=ea(n,Uh);const a=Ki(e),u=n._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),p=`${e}:${t}`;a&&(Np(`https://${p}`),xp("Firestore",!0)),u.host!==E0&&u.host!==p&&ji("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},u),{host:p,ssl:a,emulatorOptions:r});if(!Fi(y,d)&&(n._setSettings(y),r.mockUserToken)){let v,E;if(typeof r.mockUserToken=="string")v=r.mockUserToken,E=qt.MOCK_USER;else{v=Gw(r.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new pe(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new qt(I)}n._authCredentials=new FC(new cE(v,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new sm(this.firestore,e,this._query)}}class St{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}toJSON(){return{type:St._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ql(t,St._jsonSchema))return new St(e,r||null,new ye(Ye.fromString(t.referencePath)))}}St._jsonSchemaVersion="firestore/documentReference/1.0",St._jsonSchema={type:gt("string",St._jsonSchemaVersion),referencePath:gt("string")};class Ui extends sm{constructor(e,t,r){super(e,t,Bp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new ye(e))}withConverter(e){return new Ui(this.firestore,e,this._path)}}function T0(n,e,...t){if(n=Ut(n),dE("collection","path",e),n instanceof Uh){const r=Ye.fromString(e,...t);return b_(r),new Ui(n,null,r)}{if(!(n instanceof St||n instanceof Ui))throw new pe(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ye.fromString(e,...t));return b_(r),new Ui(n.firestore,null,r)}}function Lc(n,e,...t){if(n=Ut(n),arguments.length===1&&(e=Dp.newId()),dE("doc","path",e),n instanceof Uh){const r=Ye.fromString(e,...t);return x_(r),new St(n,null,new ye(r))}{if(!(n instanceof St||n instanceof Ui))throw new pe(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ye.fromString(e,...t));return x_(r),new St(n.firestore,n instanceof Ui?n.converter:null,new ye(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv="AsyncQueue";class wv{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new r0(this,"async_queue_retry"),this.oc=()=>{const r=Lf();r&&le(vv,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Lf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Lf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Mi;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ha(e))throw e;le(vv,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Qr("INTERNAL UNHANDLED ERROR: ",Ev(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=em.createAndSchedule(this,e,t,r,(a=>this.lc(a)));return this.ec.push(o),o}ac(){this.tc&&Ee(47125,{hc:Ev(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Ev(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Fh extends Uh{constructor(e,t,r,o){super(e,t,r,o),this.type="firestore",this._queue=new wv,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wv(e),this._firestoreClient=void 0,await e}}}function MN(n,e){const t=typeof n=="object"?n:Rh(),r=typeof n=="string"?n:Gc,o=Qi(t,"firestore").getImmediate({identifier:r});if(!o._initialized){const a=Hw("firestore");a&&VN(o,...a)}return o}function I0(n){if(n._terminated)throw new pe(J.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||UN(n),n._firestoreClient}function UN(n){var e,t,r;const o=n._freezeSettings(),a=(function(d,p,y,v){return new iP(d,p,y,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,w0(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=o.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new xN(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(d){const p=d?._online.build();return{_offline:d?._offline.build(p),_online:p}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ln(Ft.fromBase64String(e))}catch(t){throw new pe(J.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ln(Ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ln._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ql(e,Ln._jsonSchema))return Ln.fromBase64String(e.bytes)}}Ln._jsonSchemaVersion="firestore/bytes/1.0",Ln._jsonSchema={type:gt("string",Ln._jsonSchemaVersion),bytes:gt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new pe(J.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new pe(J.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new pe(J.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Er._jsonSchemaVersion}}static fromJSON(e){if(ql(e,Er._jsonSchema))return new Er(e.latitude,e.longitude)}}Er._jsonSchemaVersion="firestore/geoPoint/1.0",Er._jsonSchema={type:gt("string",Er._jsonSchemaVersion),latitude:gt("number"),longitude:gt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,o){if(r.length!==o.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==o[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Tr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ql(e,Tr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Tr(e.vectorValues);throw new pe(J.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Tr._jsonSchemaVersion="firestore/vectorValue/1.0",Tr._jsonSchema={type:gt("string",Tr._jsonSchemaVersion),vectorValues:gt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=/^__.*__$/;class jN{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new qs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wl(e,this.data,t,this.fieldTransforms)}}function R0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee(40011,{Ec:n})}}class am{constructor(e,t,r,o,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=o,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new am(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:r,mc:!1});return o.fc(e),o}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:r,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return rh(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(R0(this.Ec)&&FN.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class BN{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Lh(e)}Dc(e,t,r,o=!1){return new am({Ec:e,methodName:t,bc:r,path:Mt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function A0(n){const e=n._freezeSettings(),t=Lh(n._databaseId);return new BN(n._databaseId,!!e.ignoreUndefinedProperties,t)}function C0(n,e,t,r,o,a={}){const u=n.Dc(a.merge||a.mergeFields?2:0,e,t,o);x0("Data must be an object, but it was:",u,r);const d=k0(r,u);let p,y;if(a.merge)p=new er(u.fieldMask),y=u.fieldTransforms;else if(a.mergeFields){const v=[];for(const E of a.mergeFields){const I=zN(e,E,t);if(!u.contains(I))throw new pe(J.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);HN(v,I)||v.push(I)}p=new er(v),y=u.fieldTransforms.filter((E=>p.covers(E.field)))}else p=null,y=u.fieldTransforms;return new jN(new Dn(d),p,y)}function P0(n,e){if(N0(n=Ut(n)))return x0("Unsupported field value:",e,n),k0(n,e);if(n instanceof S0)return(function(r,o){if(!R0(o.Ec))throw o.wc(`${r._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(o);a&&o.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,o){const a=[];let u=0;for(const d of r){let p=P0(d,o.yc(u));p==null&&(p={nullValue:"NULL_VALUE"}),a.push(p),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,o){if((r=Ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return PP(o.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=Ze.fromDate(r);return{timestampValue:Zc(o.serializer,a)}}if(r instanceof Ze){const a=new Ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zc(o.serializer,a)}}if(r instanceof Er)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ln)return{bytesValue:WE(o.serializer,r._byteString)};if(r instanceof St){const a=o.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw o.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:qp(r.firestore._databaseId||o.databaseId,r._key.path)}}if(r instanceof Tr)return(function(u,d){return{mapValue:{fields:{[EE]:{stringValue:TE},[Kc]:{arrayValue:{values:u.toArray().map((y=>{if(typeof y!="number")throw d.wc("VectorValues must only contain numeric values.");return zp(d.serializer,y)}))}}}}}})(r,o);throw o.wc(`Unsupported field value: ${Lp(r)}`)})(n,e)}function k0(n,e){const t={};return mE(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$s(n,((r,o)=>{const a=P0(o,e.Vc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function N0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ze||n instanceof Er||n instanceof Ln||n instanceof St||n instanceof S0||n instanceof Tr)}function x0(n,e,t){if(!N0(t)||!fE(t)){const r=Lp(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function zN(n,e,t){if((e=Ut(e))instanceof om)return e._internalPath;if(typeof e=="string")return b0(n,e);throw rh("Field path arguments must be of type string or ",n,!1,void 0,t)}const $N=new RegExp("[~\\*/\\[\\]]");function b0(n,e,t){if(e.search($N)>=0)throw rh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new om(...e.split("."))._internalPath}catch{throw rh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function rh(n,e,t,r,o){const a=r&&!r.isEmpty(),u=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(a||u)&&(p+=" (found",a&&(p+=` in field ${r}`),u&&(p+=` in document ${o}`),p+=")"),new pe(J.INVALID_ARGUMENT,d+n+p)}function HN(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,t,r,o,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(D0("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qN extends O0{data(){return super.data()}}function D0(n,e){return typeof e=="string"?b0(n,e):e instanceof om?e._internalPath:e._delegate._internalPath}class WN{convertValue(e,t="none"){switch(Hi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ht(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes($i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return $s(e,((o,a)=>{r[o]=this.convertValue(a,t)})),r}convertVectorValue(e){var t,r,o;const a=(o=(r=(t=e.fields)===null||t===void 0?void 0:t[Kc].arrayValue)===null||r===void 0?void 0:r.values)===null||o===void 0?void 0:o.map((u=>ht(u.doubleValue)));return new Tr(a)}convertGeoPoint(e){return new Er(ht(e.latitude),ht(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ph(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(bl(e));default:return null}}convertTimestamp(e){const t=zi(e);return new Ze(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ye.fromString(e);ze(YE(r),9688,{name:e});const o=new Ol(r.get(1),r.get(3)),a=new ye(r.popFirst(5));return o.isEqual(t)||Qr(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class yl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ns extends O0{constructor(e,t,r,o,a,u){super(e,t,r,o,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(D0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new pe(J.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ns._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ns._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ns._jsonSchema={type:gt("string",Ns._jsonSchemaVersion),bundleSource:gt("string","DocumentSnapshot"),bundleName:gt("string"),bundle:gt("string")};class Vc extends Ns{data(e={}){return super.data(e)}}class Il{constructor(e,t,r,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new yl(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Vc(this._firestore,this._userDataWriter,r.key,r,new yl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new pe(J.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,a){if(o._snapshot.oldDocs.isEmpty()){let u=0;return o._snapshot.docChanges.map((d=>{const p=new Vc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new yl(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:u++}}))}{let u=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const p=new Vc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new yl(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,v=-1;return d.type!==0&&(y=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),v=u.indexOf(d.doc.key)),{type:GN(d.type),doc:p,oldIndex:y,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new pe(J.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Il._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Dp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],o=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),o.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function GN(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(n){n=ea(n,St);const e=ea(n.firestore,Fh);return LN(I0(e),n._key).then((t=>JN(e,n,t)))}Il._jsonSchemaVersion="firestore/querySnapshot/1.0",Il._jsonSchema={type:gt("string",Il._jsonSchemaVersion),bundleSource:gt("string","QuerySnapshot"),bundleName:gt("string"),bundle:gt("string")};class QN extends WN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ln(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,t)}}function Tv(n,e,t){n=ea(n,St);const r=ea(n.firestore,Fh),o=L0(n.converter,e,t);return M0(r,[C0(A0(r),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,vr.none())])}function V0(n,e){const t=ea(n.firestore,Fh),r=Lc(n),o=L0(n.converter,e);return M0(t,[C0(A0(n.firestore),"addDoc",r._key,o,n.converter!==null,{}).toMutation(r._key,vr.exists(!1))]).then((()=>r))}function M0(n,e){return(function(r,o){const a=new Mi;return r.asyncQueue.enqueueAndForget((async()=>EN(await ON(r),o,a))),a.promise})(I0(n),e)}function JN(n,e,t){const r=t.docs.get(e._key),o=new QN(n);return new Ns(n,o,e._key,r,new yl(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){ua=o})(zs),nr(new Vn("firestore",((r,{instanceIdentifier:o,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new Fh(new jC(r.getProvider("auth-internal")),new $C(u,r.getProvider("app-check-internal")),(function(y,v){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new pe(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ol(y.options.projectId,v)})(u,o),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),fn(A_,C_,e),fn(A_,C_,"esm2017")})();function lm(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]]);return t}function U0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XN=U0,F0=new Bs("auth","Firebase",U0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih=new Sh("@firebase/auth");function YN(n,...e){ih.logLevel<=xe.WARN&&ih.warn(`Auth (${zs}): ${n}`,...e)}function Mc(n,...e){ih.logLevel<=xe.ERROR&&ih.error(`Auth (${zs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(n,...e){throw um(n,...e)}function Ir(n,...e){return um(n,...e)}function j0(n,e,t){const r=Object.assign(Object.assign({},XN()),{[e]:t});return new Bs("auth","Firebase",r).create(e,{appName:n.name})}function xs(n){return j0(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function um(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return F0.create(n,...e)}function Ie(n,e,...t){if(!n)throw um(e,...t)}function qr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Mc(e),new Error(e)}function Yr(n,e){n||qr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ZN(){return Iv()==="http:"||Iv()==="https:"}function Iv(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZN()||Kw()||"connection"in navigator)?navigator.onLine:!0}function tx(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Yr(t>e,"Short delay should be less than long delay!"),this.isMobile=hA()||pA()}get(){return ex()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(n,e){Yr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ix=new Jl(3e4,6e4);function hm(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function fa(n,e,t,r,o={}){return z0(n,o,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=Hl(Object.assign({key:n.config.apiKey},u)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},a);return fA()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&Ki(n.emulatorConfig.host)&&(y.credentials="include"),B0.fetch()(await $0(n,n.config.apiHost,t,d),y)})}async function z0(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},nx),e);try{const o=new ox(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Sc(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[p,y]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sc(n,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw Sc(n,"email-already-in-use",u);if(p==="USER_DISABLED")throw Sc(n,"user-disabled",u);const v=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw j0(n,v,y);Xr(n,v)}}catch(o){if(o instanceof Mn)throw o;Xr(n,"network-request-failed",{message:String(o)})}}async function sx(n,e,t,r,o={}){const a=await fa(n,e,t,r,o);return"mfaPendingCredential"in a&&Xr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function $0(n,e,t,r){const o=`${e}${t}?${r}`,a=n,u=a.config.emulator?cm(n.config,o):`${n.config.apiScheme}://${o}`;return rx.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}class ox{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ir(this.auth,"network-request-failed")),ix.get())})}}function Sc(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const o=Ir(n,e,r);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ax(n,e){return fa(n,"POST","/v1/accounts:delete",e)}async function sh(n,e){return fa(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lx(n,e=!1){const t=Ut(n),r=await t.getIdToken(e),o=dm(r);Ie(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,u=a?.sign_in_provider;return{claims:o,token:r,authTime:Sl(Mf(o.auth_time)),issuedAtTime:Sl(Mf(o.iat)),expirationTime:Sl(Mf(o.exp)),signInProvider:u||null,signInSecondFactor:a?.sign_in_second_factor||null}}function Mf(n){return Number(n)*1e3}function dm(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Mc("JWT malformed, contained fewer than 3 sections"),null;try{const o=zw(t);return o?JSON.parse(o):(Mc("Failed to decode base64 JWT payload"),null)}catch(o){return Mc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Sv(n){const e=dm(n);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ml(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Mn&&ux(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ux({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sl(this.lastLoginAt),this.creationTime=Sl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oh(n){var e;const t=n.auth,r=await n.getIdToken(),o=await Ml(n,sh(t,{idToken:r}));Ie(o?.users.length,t,"internal-error");const a=o.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?H0(a.providerUserInfo):[],d=dx(n.providerData,u),p=n.isAnonymous,y=!(n.email&&a.passwordHash)&&!d?.length,v=p?y:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Tp(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,E)}async function hx(n){const e=Ut(n);await oh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dx(n,e){return[...n.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function H0(n){return n.map(e=>{var{providerId:t}=e,r=lm(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fx(n,e){const t=await z0(n,{},async()=>{const r=Hl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,u=await $0(n,o,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:r};return n.emulatorConfig&&Ki(n.emulatorConfig.host)&&(p.credentials="include"),B0.fetch()(u,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function px(n,e){return fa(n,"POST","/v2/accounts:revokeToken",hm(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const t=Sv(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:o,expiresIn:a}=await fx(e,t);this.updateTokensAndExpiration(r,o,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:o,expirationTime:a}=t,u=new Ko;return r&&(Ie(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),o&&(Ie(typeof o=="string","internal-error",{appName:e}),u.accessToken=o),a&&(Ie(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ko,this.toJSON())}_performRefresh(){return qr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(n,e){Ie(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class tr{constructor(e){var{uid:t,auth:r,stsTokenManager:o}=e,a=lm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Tp(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Ml(this,this.stsTokenManager.getToken(this.auth,e));return Ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return lx(this,e)}reload(){return hx(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await oh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zn(this.auth.app))return Promise.reject(xs(this.auth));const e=await this.getIdToken();return await Ml(this,ax(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,o,a,u,d,p,y,v;const E=(r=t.displayName)!==null&&r!==void 0?r:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,L=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,P=(u=t.photoURL)!==null&&u!==void 0?u:void 0,V=(d=t.tenantId)!==null&&d!==void 0?d:void 0,A=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,X=(y=t.createdAt)!==null&&y!==void 0?y:void 0,Y=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:K,emailVerified:te,isAnonymous:_e,providerData:me,stsTokenManager:x}=t;Ie(K&&x,e,"internal-error");const S=Ko.fromJSON(this.name,x);Ie(typeof K=="string",e,"internal-error"),Si(E,e.name),Si(I,e.name),Ie(typeof te=="boolean",e,"internal-error"),Ie(typeof _e=="boolean",e,"internal-error"),Si(L,e.name),Si(P,e.name),Si(V,e.name),Si(A,e.name),Si(X,e.name),Si(Y,e.name);const k=new tr({uid:K,auth:e,email:I,emailVerified:te,displayName:E,isAnonymous:_e,photoURL:P,phoneNumber:L,tenantId:V,stsTokenManager:S,createdAt:X,lastLoginAt:Y});return me&&Array.isArray(me)&&(k.providerData=me.map(b=>Object.assign({},b))),A&&(k._redirectEventId=A),k}static async _fromIdTokenResponse(e,t,r=!1){const o=new Ko;o.updateFromServerResponse(t);const a=new tr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await oh(a),a}static async _fromGetAccountInfoResponse(e,t,r){const o=t.users[0];Ie(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?H0(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!a?.length,d=new Ko;d.updateFromIdToken(r);const p=new tr({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:u}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Tp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!a?.length};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=new Map;function Wr(n){Yr(n instanceof Function,"Expected a class definition");let e=Rv.get(n);return e?(Yr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Rv.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}q0.type="NONE";const Av=q0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(n,e,t){return`firebase:${n}:${e}:${t}`}class Qo{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:o,name:a}=this.auth;this.fullUserKey=Uc(this.userKey,o.apiKey,a),this.fullPersistenceKey=Uc("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await sh(this.auth,{idToken:e}).catch(()=>{});return t?tr._fromGetAccountInfoResponse(this.auth,t,e):null}return tr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Qo(Wr(Av),e,r);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let a=o[0]||Wr(Av);const u=Uc(r,e.config.apiKey,e.name);let d=null;for(const y of t)try{const v=await y._get(u);if(v){let E;if(typeof v=="string"){const I=await sh(e,{idToken:v}).catch(()=>{});if(!I)break;E=await tr._fromGetAccountInfoResponse(e,I,v)}else E=tr._fromJSON(e,v);y!==a&&(d=E),a=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new Qo(a,e,r):(a=p[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==a)try{await y._remove(u)}catch{}})),new Qo(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Q0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(W0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(X0(e))return"Blackberry";if(Y0(e))return"Webos";if(G0(e))return"Safari";if((e.includes("chrome/")||K0(e))&&!e.includes("edge/"))return"Chrome";if(J0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function W0(n=Kt()){return/firefox\//i.test(n)}function G0(n=Kt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function K0(n=Kt()){return/crios\//i.test(n)}function Q0(n=Kt()){return/iemobile/i.test(n)}function J0(n=Kt()){return/android/i.test(n)}function X0(n=Kt()){return/blackberry/i.test(n)}function Y0(n=Kt()){return/webos/i.test(n)}function fm(n=Kt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function mx(n=Kt()){var e;return fm(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gx(){return mA()&&document.documentMode===10}function Z0(n=Kt()){return fm(n)||J0(n)||Y0(n)||X0(n)||/windows phone/i.test(n)||Q0(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(n,e=[]){let t;switch(n){case"Browser":t=Cv(Kt());break;case"Worker":t=`${Cv(Kt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${zs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const p=e(a);u(p)}catch(p){d(p)}});r.onAbort=t,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _x(n,e={}){return fa(n,"GET","/v2/passwordPolicy",hm(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx=6;class wx{constructor(e){var t,r,o,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:vx,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,o,a,u,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(r=p.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(a=p.containsUppercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(u=p.containsNumericCharacter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e,t,r,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pv(this),this.idTokenSubscription=new Pv(this),this.beforeStateQueue=new yx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=F0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Wr(t)),this._initializationPromise=this.queue(async()=>{var r,o,a;if(!this._deleted&&(this.persistenceManager=await Qo.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await sh(this,{idToken:e}),r=await tr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Zn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o?._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===d)&&p?.user&&(o=p.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(u){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await oh(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zn(this.app))return Promise.reject(xs(this));const t=e?Ut(e):null;return t&&Ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zn(this.app)?Promise.reject(xs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zn(this.app)?Promise.reject(xs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _x(this),t=new wx(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Bs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await px(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Wr(e)||this._popupRedirectResolver;Ie(t,this,"argument-error"),this.redirectPersistenceManager=await Qo.create(this,[Wr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,r,o);return()=>{u=!0,p()}}else{const p=e.addObserver(t);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Zn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&YN(`Error while retrieving App Check token: ${t.error}`),t?.token}}function pm(n){return Ut(n)}class Pv{constructor(e){this.auth=e,this.observer=null,this.addObserver=TA(t=>this.observer=t)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Tx(n){mm=n}function Ix(n){return mm.loadJS(n)}function Sx(){return mm.gapiScript}function Rx(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(n,e){const t=Qi(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(Fi(a,e??{}))return o;Xr(o,"already-initialized")}return t.initialize({options:e})}function Cx(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Wr);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Px(n,e,t){const r=pm(n);Ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,a=tT(e),{host:u,port:d}=kx(e),p=d===null?"":`:${d}`,y={url:`${a}//${u}${p}/`},v=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){Ie(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Ie(Fi(y,r.config.emulator)&&Fi(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=y,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,Ki(u)?(Np(`${a}//${u}${p}`),xp("Auth",!0)):Nx()}function tT(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function kx(n){const e=tT(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const a=o[1];return{host:a,port:kv(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:kv(u)}}}function kv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Nx(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return qr("not implemented")}_getIdTokenResponse(e){return qr("not implemented")}_linkToIdToken(e,t){return qr("not implemented")}_getReauthenticationResolver(e){return qr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jo(n,e){return sx(n,"POST","/v1/accounts:signInWithIdp",hm(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx="http://localhost";class Vs extends nT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Vs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=t,a=lm(t,["providerId","signInMethod"]);if(!r||!o)return null;const u=new Vs(r,o);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Jo(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Jo(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Jo(e,t)}buildRequest(){const e={requestUri:xx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Hl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends rT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends Xl{constructor(){super("facebook.com")}static credential(e){return Vs._fromParams({providerId:Ri.PROVIDER_ID,signInMethod:Ri.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ri.credentialFromTaggedObject(e)}static credentialFromError(e){return Ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ri.credential(e.oauthAccessToken)}catch{return null}}}Ri.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ri.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends Xl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Vs._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ai.credentialFromTaggedObject(e)}static credentialFromError(e){return Ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ai.credential(t,r)}catch{return null}}}Ai.GOOGLE_SIGN_IN_METHOD="google.com";Ai.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends Xl{constructor(){super("github.com")}static credential(e){return Vs._fromParams({providerId:Ci.PROVIDER_ID,signInMethod:Ci.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ci.credentialFromTaggedObject(e)}static credentialFromError(e){return Ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ci.credential(e.oauthAccessToken)}catch{return null}}}Ci.GITHUB_SIGN_IN_METHOD="github.com";Ci.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Xl{constructor(){super("twitter.com")}static credential(e,t){return Vs._fromParams({providerId:Pi.PROVIDER_ID,signInMethod:Pi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pi.credentialFromTaggedObject(e)}static credentialFromError(e){return Pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Pi.credential(t,r)}catch{return null}}}Pi.TWITTER_SIGN_IN_METHOD="twitter.com";Pi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,o=!1){const a=await tr._fromIdTokenResponse(e,r,o),u=Nv(r);return new sa({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const o=Nv(r);return new sa({user:e,providerId:o,_tokenResponse:r,operationType:t})}}function Nv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah extends Mn{constructor(e,t,r,o){var a;super(t.code,t.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,ah.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,o){return new ah(e,t,r,o)}}function iT(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?ah._fromErrorAndOperation(n,a,e,r):a})}async function bx(n,e,t=!1){const r=await Ml(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return sa._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ox(n,e,t=!1){const{auth:r}=n;if(Zn(r.app))return Promise.reject(xs(r));const o="reauthenticate";try{const a=await Ml(n,iT(r,o,e,n),t);Ie(a.idToken,r,"internal-error");const u=dm(a.idToken);Ie(u,r,"internal-error");const{sub:d}=u;return Ie(n.uid===d,r,"user-mismatch"),sa._forOperation(n,o,a)}catch(a){throw a?.code==="auth/user-not-found"&&Xr(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dx(n,e,t=!1){if(Zn(n.app))return Promise.reject(xs(n));const r="signIn",o=await iT(n,r,e),a=await sa._fromIdTokenResponse(n,r,o);return t||await n._updateCurrentUser(a.user),a}function Lx(n,e,t,r){return Ut(n).onIdTokenChanged(e,t,r)}function Vx(n,e,t){return Ut(n).beforeAuthStateChanged(e,t)}const lh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(lh,"1"),this.storage.removeItem(lh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx=1e3,Ux=10;class oT extends sT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Z0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),o=this.localCache[t];r!==o&&e(t,o,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,p)=>{this.notifyListeners(u,p)});return}const r=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);gx()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Ux):o()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Mx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}oT.type="LOCAL";const Fx=oT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT extends sT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}aT.type="SESSION";const lT=aT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const r=new jh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:o,data:a}=t.data,u=this.handlersMap[o];if(!u?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const d=Array.from(u).map(async y=>y(t.origin,a)),p=await jx(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,u;return new Promise((d,p)=>{const y=gm("",20);o.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},r);u={messageChannel:o,onMessage(E){const I=E;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(I.data.response);break;default:clearTimeout(v),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(){return window}function zx(n){Sr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(){return typeof Sr().WorkerGlobalScope<"u"&&typeof Sr().importScripts=="function"}async function $x(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hx(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function qx(){return uT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT="firebaseLocalStorageDb",Wx=1,uh="firebaseLocalStorage",hT="fbase_key";class Yl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Bh(n,e){return n.transaction([uh],e?"readwrite":"readonly").objectStore(uh)}function Gx(){const n=indexedDB.deleteDatabase(cT);return new Yl(n).toPromise()}function Ip(){const n=indexedDB.open(cT,Wx);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(uh,{keyPath:hT})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(uh)?e(r):(r.close(),await Gx(),e(await Ip()))})})}async function xv(n,e,t){const r=Bh(n,!0).put({[hT]:e,value:t});return new Yl(r).toPromise()}async function Kx(n,e){const t=Bh(n,!1).get(e),r=await new Yl(t).toPromise();return r===void 0?null:r.value}function bv(n,e){const t=Bh(n,!0).delete(e);return new Yl(t).toPromise()}const Qx=800,Jx=3;class dT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ip(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Jx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jh._getInstance(qx()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await $x(),!this.activeServiceWorker)return;this.sender=new Bx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ip();return await xv(e,lh,"1"),await bv(e,lh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>xv(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Kx(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>bv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=Bh(o,!1).getAll();return new Yl(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Qx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dT.type="LOCAL";const Xx=dT;new Jl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yx(n,e){return e?Wr(e):(Ie(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym extends nT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Jo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Jo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Zx(n){return Dx(n.auth,new ym(n),n.bypassAuthState)}function eb(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),Ox(t,new ym(n),n.bypassAuthState)}async function tb(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),bx(t,new ym(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,t,r,o,a=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:o,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zx;case"linkViaPopup":case"linkViaRedirect":return tb;case"reauthViaPopup":case"reauthViaRedirect":return eb;default:Xr(this.auth,"internal-error")}}resolve(e){Yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=new Jl(2e3,1e4);class Wo extends fT{constructor(e,t,r,o,a){super(e,t,o,a),this.provider=r,this.authWindow=null,this.pollId=null,Wo.currentPopupAction&&Wo.currentPopupAction.cancel(),Wo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ie(e,this.auth,"internal-error"),e}async onExecution(){Yr(this.filter.length===1,"Popup operations only handle one event");const e=gm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ir(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ir(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ir(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nb.get())};e()}}Wo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb="pendingRedirect",Fc=new Map;class ib extends fT{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Fc.get(this.auth._key());if(!e){try{const r=await sb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Fc.set(this.auth._key(),e)}return this.bypassAuthState||Fc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sb(n,e){const t=lb(e),r=ab(n);if(!await r._isAvailable())return!1;const o=await r._get(t)==="true";return await r._remove(t),o}function ob(n,e){Fc.set(n._key(),e)}function ab(n){return Wr(n._redirectPersistence)}function lb(n){return Uc(rb,n.config.apiKey,n.name)}async function ub(n,e,t=!1){if(Zn(n.app))return Promise.reject(xs(n));const r=pm(n),o=Yx(r,e),u=await new ib(r,o,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb=600*1e3;class hb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!db(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!pT(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ir(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ov(e))}saveEventToCache(e){this.cachedEventUids.add(Ov(e)),this.lastProcessedEventTime=Date.now()}}function Ov(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function pT({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function db(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pT(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fb(n,e={}){return fa(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mb=/^https?/;async function gb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await fb(n);for(const t of e)try{if(yb(t))return}catch{}Xr(n,"unauthorized-domain")}function yb(n){const e=Ep(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!mb.test(t))return!1;if(pb.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=new Jl(3e4,6e4);function Dv(){const n=Sr().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function vb(n){return new Promise((e,t)=>{var r,o,a;function u(){Dv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dv(),t(Ir(n,"network-request-failed"))},timeout:_b.get()})}if(!((o=(r=Sr().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=Sr().gapi)===null||a===void 0)&&a.load)u();else{const d=Rx("iframefcb");return Sr()[d]=()=>{gapi.load?u():t(Ir(n,"network-request-failed"))},Ix(`${Sx()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw jc=null,e})}let jc=null;function wb(n){return jc=jc||vb(n),jc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb=new Jl(5e3,15e3),Tb="__/auth/iframe",Ib="emulator/auth/iframe",Sb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ab(n){const e=n.config;Ie(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?cm(e,Ib):`https://${n.config.authDomain}/${Tb}`,r={apiKey:e.apiKey,appName:n.name,v:zs},o=Rb.get(n.config.apiHost);o&&(r.eid=o);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${Hl(r).slice(1)}`}async function Cb(n){const e=await wb(n),t=Sr().gapi;return Ie(t,n,"internal-error"),e.open({where:document.body,url:Ab(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sb,dontclear:!0},r=>new Promise(async(o,a)=>{await r.restyle({setHideOnLeave:!1});const u=Ir(n,"network-request-failed"),d=Sr().setTimeout(()=>{a(u)},Eb.get());function p(){Sr().clearTimeout(d),o(r)}r.ping(p).then(p,()=>{a(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kb=500,Nb=600,xb="_blank",bb="http://localhost";class Lv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ob(n,e,t,r=kb,o=Nb){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const p=Object.assign(Object.assign({},Pb),{width:r.toString(),height:o.toString(),top:a,left:u}),y=Kt().toLowerCase();t&&(d=K0(y)?xb:t),W0(y)&&(e=e||bb,p.scrollbars="yes");const v=Object.entries(p).reduce((I,[L,P])=>`${I}${L}=${P},`,"");if(mx(y)&&d!=="_self")return Db(e||"",d),new Lv(null);const E=window.open(e||"",d,v);Ie(E,n,"popup-blocked");try{E.focus()}catch{}return new Lv(E)}function Db(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb="__/auth/handler",Vb="emulator/auth/handler",Mb=encodeURIComponent("fac");async function Vv(n,e,t,r,o,a){Ie(n.config.authDomain,n,"auth-domain-config-required"),Ie(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:zs,eventId:o};if(e instanceof rT){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",EA(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,E]of Object.entries({}))u[v]=E}if(e instanceof Xl){const v=e.getScopes().filter(E=>E!=="");v.length>0&&(u.scopes=v.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await n._getAppCheckToken(),y=p?`#${Mb}=${encodeURIComponent(p)}`:"";return`${Ub(n)}?${Hl(d).slice(1)}${y}`}function Ub({config:n}){return n.emulator?cm(n,Vb):`https://${n.authDomain}/${Lb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="webStorageSupport";class Fb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lT,this._completeRedirectFn=ub,this._overrideRedirectResult=ob}async _openPopup(e,t,r,o){var a;Yr((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await Vv(e,t,r,Ep(),o);return Ob(e,u,gm())}async _openRedirect(e,t,r,o){await this._originValidation(e);const a=await Vv(e,t,r,Ep(),o);return zx(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(Yr(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Cb(e),r=new hb(e);return t.register("authEvent",o=>(Ie(o?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Uf,{type:Uf},o=>{var a;const u=(a=o?.[0])===null||a===void 0?void 0:a[Uf];u!==void 0&&t(!!u),Xr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Z0()||G0()||fm()}}const jb=Fb;var Mv="@firebase/auth",Uv="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $b(n){nr(new Vn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;Ie(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eT(n)},y=new Ex(r,o,a,p);return Cx(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),nr(new Vn("auth-internal",e=>{const t=pm(e.getProvider("auth").getImmediate());return(r=>new Bb(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(Mv,Uv,zb(n)),fn(Mv,Uv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=300,qb=Ww("authIdTokenMaxAge")||Hb;let Fv=null;const Wb=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>qb)return;const o=t?.token;Fv!==o&&(Fv=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Gb(n=Rh()){const e=Qi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ax(n,{popupRedirectResolver:jb,persistence:[Xx,Fx,lT]}),r=Ww("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=Wb(a.toString());Vx(t,u,()=>u(t.currentUser)),Lx(t,d=>u(d))}}const o=$w("auth");return o&&Px(t,`http://${o}`),t}function Kb(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Tx({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=o=>{const a=Ir("internal-error");a.customData=o,t(a)},r.type="text/javascript",r.charset="UTF-8",Kb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$b("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT="firebasestorage.googleapis.com",gT="storageBucket",Qb=120*1e3,Jb=600*1e3,Xb=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Mn{constructor(e,t,r=0){super(Ff(e),`Firebase Storage: ${t} (${Ff(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ot.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ff(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var et;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(et||(et={}));function Ff(n){return"storage/"+n}function _m(){const n="An unknown error occurred, please check the error payload for server response.";return new ot(et.UNKNOWN,n)}function Yb(n){return new ot(et.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Zb(n){return new ot(et.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function eO(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ot(et.UNAUTHENTICATED,n)}function tO(){return new ot(et.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function nO(n){return new ot(et.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function yT(){return new ot(et.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _T(){return new ot(et.CANCELED,"User canceled the upload/download.")}function rO(n){return new ot(et.INVALID_URL,"Invalid URL '"+n+"'.")}function iO(n){return new ot(et.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function sO(){return new ot(et.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+gT+"' property when initializing the app?")}function vT(){return new ot(et.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function oO(){return new ot(et.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function aO(){return new ot(et.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function lO(n){return new ot(et.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Sp(n){return new ot(et.INVALID_ARGUMENT,n)}function wT(){return new ot(et.APP_DELETED,"The Firebase app was deleted.")}function uO(n){return new ot(et.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Rl(n,e){return new ot(et.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function hl(n){throw new ot(et.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Tn.makeFromUrl(e,t)}catch{return new Tn(e,"")}if(r.path==="")return r;throw iO(e)}static makeFromUrl(e,t){let r=null;const o="([A-Za-z0-9.\\-_]+)";function a(te){te.path.charAt(te.path.length-1)==="/"&&(te.path_=te.path_.slice(0,-1))}const u="(/(.*))?$",d=new RegExp("^gs://"+o+u,"i"),p={bucket:1,path:3};function y(te){te.path_=decodeURIComponent(te.path)}const v="v[A-Za-z0-9_]+",E=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",L=new RegExp(`^https?://${E}/${v}/b/${o}/o${I}`,"i"),P={bucket:1,path:3},V=t===mT?"(?:storage.googleapis.com|storage.cloud.google.com)":t,A="([^?#]*)",X=new RegExp(`^https?://${V}/${o}/${A}`,"i"),K=[{regex:d,indices:p,postModify:a},{regex:L,indices:P,postModify:y},{regex:X,indices:{bucket:1,path:2},postModify:y}];for(let te=0;te<K.length;te++){const _e=K[te],me=_e.regex.exec(e);if(me){const x=me[_e.indices.bucket];let S=me[_e.indices.path];S||(S=""),r=new Tn(x,S),_e.postModify(r);break}}if(r==null)throw rO(e);return r}}class cO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(n,e,t){let r=1,o=null,a=null,u=!1,d=0;function p(){return d===2}let y=!1;function v(...A){y||(y=!0,e.apply(null,A))}function E(A){o=setTimeout(()=>{o=null,n(L,p())},A)}function I(){a&&clearTimeout(a)}function L(A,...X){if(y){I();return}if(A){I(),v.call(null,A,...X);return}if(p()||u){I(),v.call(null,A,...X);return}r<64&&(r*=2);let K;d===1?(d=2,K=0):K=(r+Math.random())*1e3,E(K)}let P=!1;function V(A){P||(P=!0,I(),!y&&(o!==null?(A||(d=2),clearTimeout(o),E(0)):A||(d=1)))}return E(0),a=setTimeout(()=>{u=!0,V(!0)},t),V}function dO(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fO(n){return n!==void 0}function pO(n){return typeof n=="function"}function mO(n){return typeof n=="object"&&!Array.isArray(n)}function zh(n){return typeof n=="string"||n instanceof String}function jv(n){return vm()&&n instanceof Blob}function vm(){return typeof Blob<"u"}function Bv(n,e,t,r){if(r<e)throw Sp(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Sp(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function ET(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const o=e(r)+"="+e(n[r]);t=t+o+"&"}return t=t.slice(0,-1),t}var bs;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(bs||(bs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||o||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e,t,r,o,a,u,d,p,y,v,E,I=!0,L=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=o,this.successCodes_=a,this.additionalRetryCodes_=u,this.callback_=d,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=v,this.connectionFactory_=E,this.retry=I,this.isUsingEmulator=L,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,V)=>{this.resolve_=P,this.reject_=V,this.start_()})}start_(){const e=(r,o)=>{if(o){r(!1,new Rc(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const u=d=>{const p=d.loaded,y=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&a.addUploadProgressListener(u),a.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(u),this.pendingConnection_=null;const d=a.getErrorCode()===bs.NO_ERROR,p=a.getStatus();if(!d||TT(p,this.additionalRetryCodes_)&&this.retry){const v=a.getErrorCode()===bs.ABORT;r(!1,new Rc(!1,null,v));return}const y=this.successCodes_.indexOf(p)!==-1;r(!0,new Rc(y,a))})},t=(r,o)=>{const a=this.resolve_,u=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());fO(p)?a(p):a()}catch(p){u(p)}else if(d!==null){const p=_m();p.serverResponse=d.getErrorText(),this.errorCallback_?u(this.errorCallback_(d,p)):u(p)}else if(o.canceled){const p=this.appDelete_?wT():_T();u(p)}else{const p=yT();u(p)}};this.canceled_?t(!1,new Rc(!1,null,!0)):this.backoffId_=hO(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&dO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Rc{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function yO(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function _O(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function vO(n,e){e&&(n["X-Firebase-GMPID"]=e)}function wO(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function EO(n,e,t,r,o,a,u=!0,d=!1){const p=ET(n.urlParams),y=n.url+p,v=Object.assign({},n.headers);return vO(v,e),yO(v,t),_O(v,a),wO(v,r),new gO(y,n.method,v,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,u,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function IO(...n){const e=TO();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(vm())return new Blob(n);throw new ot(et.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function SO(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO(n){if(typeof atob>"u")throw lO("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class jf{constructor(e,t){this.data=e,this.contentType=t||null}}function AO(n,e){switch(n){case yr.RAW:return new jf(IT(e));case yr.BASE64:case yr.BASE64URL:return new jf(ST(n,e));case yr.DATA_URL:return new jf(PO(e),kO(e))}throw _m()}function IT(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const a=r,u=n.charCodeAt(++t);r=65536|(a&1023)<<10|u&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function CO(n){let e;try{e=decodeURIComponent(n)}catch{throw Rl(yr.DATA_URL,"Malformed data URL.")}return IT(e)}function ST(n,e){switch(n){case yr.BASE64:{const o=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(o||a)throw Rl(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case yr.BASE64URL:{const o=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(o||a)throw Rl(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=RO(e)}catch(o){throw o.message.includes("polyfill")?o:Rl(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r}class RT{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Rl(yr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=NO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function PO(n){const e=new RT(n);return e.base64?ST(yr.BASE64,e.rest):CO(e.rest)}function kO(n){return new RT(n).contentType}function NO(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t){let r=0,o="";jv(e)?(this.data_=e,r=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(jv(this.data_)){const r=this.data_,o=SO(r,e,t);return o===null?null:new ki(o)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new ki(r,!0)}}static getBlob(...e){if(vm()){const t=e.map(r=>r instanceof ki?r.data_:r);return new ki(IO.apply(null,t))}else{const t=e.map(u=>zh(u)?AO(yr.RAW,u).data:u.data_);let r=0;t.forEach(u=>{r+=u.byteLength});const o=new Uint8Array(r);let a=0;return t.forEach(u=>{for(let d=0;d<u.length;d++)o[a++]=u[d]}),new ki(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(n){let e;try{e=JSON.parse(n)}catch{return null}return mO(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xO(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function bO(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function CT(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OO(n,e){return e}class Zt{constructor(e,t,r,o){this.server=e,this.local=t||e,this.writable=!!r,this.xform=o||OO}}let Ac=null;function DO(n){return!zh(n)||n.length<2?n:CT(n)}function PT(){if(Ac)return Ac;const n=[];n.push(new Zt("bucket")),n.push(new Zt("generation")),n.push(new Zt("metageneration")),n.push(new Zt("name","fullPath",!0));function e(a,u){return DO(u)}const t=new Zt("name");t.xform=e,n.push(t);function r(a,u){return u!==void 0?Number(u):u}const o=new Zt("size");return o.xform=r,n.push(o),n.push(new Zt("timeCreated")),n.push(new Zt("updated")),n.push(new Zt("md5Hash",null,!0)),n.push(new Zt("cacheControl",null,!0)),n.push(new Zt("contentDisposition",null,!0)),n.push(new Zt("contentEncoding",null,!0)),n.push(new Zt("contentLanguage",null,!0)),n.push(new Zt("contentType",null,!0)),n.push(new Zt("metadata","customMetadata",!0)),Ac=n,Ac}function LO(n,e){function t(){const r=n.bucket,o=n.fullPath,a=new Tn(r,o);return e._makeStorageReference(a)}Object.defineProperty(n,"ref",{get:t})}function VO(n,e,t){const r={};r.type="file";const o=t.length;for(let a=0;a<o;a++){const u=t[a];r[u.local]=u.xform(r,e[u.server])}return LO(r,n),r}function kT(n,e,t){const r=AT(e);return r===null?null:VO(n,r,t)}function MO(n,e,t,r){const o=AT(e);if(o===null||!zh(o.downloadTokens))return null;const a=o.downloadTokens;if(a.length===0)return null;const u=encodeURIComponent;return a.split(",").map(y=>{const v=n.bucket,E=n.fullPath,I="/b/"+u(v)+"/o/"+u(E),L=Zl(I,t,r),P=ET({alt:"media",token:y});return L+P})[0]}function NT(n,e){const t={},r=e.length;for(let o=0;o<r;o++){const a=e[o];a.writable&&(t[a.server]=n[a.local])}return JSON.stringify(t)}class pa{constructor(e,t,r,o){this.url=e,this.method=t,this.handler=r,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(n){if(!n)throw _m()}function wm(n,e){function t(r,o){const a=kT(n,o,e);return Gr(a!==null),a}return t}function UO(n,e){function t(r,o){const a=kT(n,o,e);return Gr(a!==null),MO(a,o,n.host,n._protocol)}return t}function eu(n){function e(t,r){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=tO():o=eO():t.getStatus()===402?o=Zb(n.bucket):t.getStatus()===403?o=nO(n.path):o=r,o.status=t.getStatus(),o.serverResponse=r.serverResponse,o}return e}function xT(n){const e=eu(n);function t(r,o){let a=e(r,o);return r.getStatus()===404&&(a=Yb(n.path)),a.serverResponse=o.serverResponse,a}return t}function FO(n,e,t){const r=e.fullServerUrl(),o=Zl(r,n.host,n._protocol),a="GET",u=n.maxOperationRetryTime,d=new pa(o,a,wm(n,t),u);return d.errorHandler=xT(e),d}function jO(n,e,t){const r=e.fullServerUrl(),o=Zl(r,n.host,n._protocol),a="GET",u=n.maxOperationRetryTime,d=new pa(o,a,UO(n,t),u);return d.errorHandler=xT(e),d}function BO(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function bT(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=BO(null,e)),r}function zO(n,e,t,r,o){const a=e.bucketOnlyServerUrl(),u={"X-Goog-Upload-Protocol":"multipart"};function d(){let K="";for(let te=0;te<2;te++)K=K+Math.random().toString().slice(2);return K}const p=d();u["Content-Type"]="multipart/related; boundary="+p;const y=bT(e,r,o),v=NT(y,t),E="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+p+`\r
Content-Type: `+y.contentType+`\r
\r
`,I=`\r
--`+p+"--",L=ki.getBlob(E,r,I);if(L===null)throw vT();const P={name:y.fullPath},V=Zl(a,n.host,n._protocol),A="POST",X=n.maxUploadRetryTime,Y=new pa(V,A,wm(n,t),X);return Y.urlParams=P,Y.headers=u,Y.body=L.uploadData(),Y.errorHandler=eu(e),Y}class ch{constructor(e,t,r,o){this.current=e,this.total=t,this.finalized=!!r,this.metadata=o||null}}function Em(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{Gr(!1)}return Gr(!!t&&(e||["active"]).indexOf(t)!==-1),t}function $O(n,e,t,r,o){const a=e.bucketOnlyServerUrl(),u=bT(e,r,o),d={name:u.fullPath},p=Zl(a,n.host,n._protocol),y="POST",v={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":u.contentType,"Content-Type":"application/json; charset=utf-8"},E=NT(u,t),I=n.maxUploadRetryTime;function L(V){Em(V);let A;try{A=V.getResponseHeader("X-Goog-Upload-URL")}catch{Gr(!1)}return Gr(zh(A)),A}const P=new pa(p,y,L,I);return P.urlParams=d,P.headers=v,P.body=E,P.errorHandler=eu(e),P}function HO(n,e,t,r){const o={"X-Goog-Upload-Command":"query"};function a(y){const v=Em(y,["active","final"]);let E=null;try{E=y.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Gr(!1)}E||Gr(!1);const I=Number(E);return Gr(!isNaN(I)),new ch(I,r.size(),v==="final")}const u="POST",d=n.maxUploadRetryTime,p=new pa(t,u,a,d);return p.headers=o,p.errorHandler=eu(e),p}const zv=256*1024;function qO(n,e,t,r,o,a,u,d){const p=new ch(0,0);if(u?(p.current=u.current,p.total=u.total):(p.current=0,p.total=r.size()),r.size()!==p.total)throw oO();const y=p.total-p.current;let v=y;o>0&&(v=Math.min(v,o));const E=p.current,I=E+v;let L="";v===0?L="finalize":y===v?L="upload, finalize":L="upload";const P={"X-Goog-Upload-Command":L,"X-Goog-Upload-Offset":`${p.current}`},V=r.slice(E,I);if(V===null)throw vT();function A(te,_e){const me=Em(te,["active","final"]),x=p.current+v,S=r.size();let k;return me==="final"?k=wm(e,a)(te,_e):k=null,new ch(x,S,me==="final",k)}const X="POST",Y=e.maxUploadRetryTime,K=new pa(t,X,A,Y);return K.headers=P,K.body=V.uploadData(),K.progressCallback=d||null,K.errorHandler=eu(n),K}const cn={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Bf(n){switch(n){case"running":case"pausing":case"canceling":return cn.RUNNING;case"paused":return cn.PAUSED;case"success":return cn.SUCCESS;case"canceled":return cn.CANCELED;case"error":return cn.ERROR;default:return cn.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e,t,r){if(pO(e)||t!=null||r!=null)this.next=e,this.error=t??void 0,this.complete=r??void 0;else{const a=e;this.next=a.next,this.error=a.error,this.complete=a.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class GO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=bs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=bs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=bs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,o,a){if(this.sent_)throw hl("cannot .send() more than once");if(Ki(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),a!==void 0)for(const u in a)a.hasOwnProperty(u)&&this.xhr_.setRequestHeader(u,a[u].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw hl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw hl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw hl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw hl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class KO extends GO{initXhr(){this.xhr_.responseType="text"}}function qo(){return new KO}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=PT(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=o=>{if(this._request=void 0,this._chunkMultiplier=1,o._codeEquals(et.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const a=this.isExponentialBackoffExpired();if(TT(o.status,[]))if(a)o=yT();else{this.sleepTime=Math.max(this.sleepTime*2,Xb),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=o,this._transition("error")}},this._metadataErrorHandler=o=>{this._request=void 0,o._codeEquals(et.CANCELED)?this.completeTransitions_():(this._error=o,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((o,a)=>{this._resolve=o,this._reject=a,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=$O(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),o=this._ref.storage._makeRequest(r,qo,e,t);this._request=o,o.getPromise().then(a=>{this._request=void 0,this._uploadUrl=a,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const o=HO(this._ref.storage,this._ref._location,e,this._blob),a=this._ref.storage._makeRequest(o,qo,t,r);this._request=a,a.getPromise().then(u=>{u=u,this._request=void 0,this._updateProgress(u.current),this._needToFetchStatus=!1,u.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=zv*this._chunkMultiplier,t=new ch(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((o,a)=>{let u;try{u=qO(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(p){this._error=p,this._transition("error");return}const d=this._ref.storage._makeRequest(u,qo,o,a,!1);this._request=d,d.getPromise().then(p=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(p.current),p.finalized?(this._metadata=p.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){zv*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=FO(this._ref.storage,this._ref._location,this._mappings),o=this._ref.storage._makeRequest(r,qo,e,t);this._request=o,o.getPromise().then(a=>{this._request=void 0,this._metadata=a,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=zO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),o=this._ref.storage._makeRequest(r,qo,e,t);this._request=o,o.getPromise().then(a=>{this._request=void 0,this._metadata=a,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=_T(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Bf(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,o){const a=new WO(t||void 0,r||void 0,o||void 0);return this._addObserver(a),()=>{this._removeObserver(a)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Bf(this._state)){case cn.SUCCESS:jo(this._resolve.bind(null,this.snapshot))();break;case cn.CANCELED:case cn.ERROR:const t=this._reject;jo(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Bf(this._state)){case cn.RUNNING:case cn.PAUSED:e.next&&jo(e.next.bind(e,this.snapshot))();break;case cn.SUCCESS:e.complete&&jo(e.complete.bind(e))();break;case cn.CANCELED:case cn.ERROR:e.error&&jo(e.error.bind(e,this._error))();break;default:e.error&&jo(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,t){this._service=e,t instanceof Tn?this._location=t:this._location=Tn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ms(e,t)}get root(){const e=new Tn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return CT(this._location.path)}get storage(){return this._service}get parent(){const e=xO(this._location.path);if(e===null)return null;const t=new Tn(this._location.bucket,e);return new Ms(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw uO(e)}}function JO(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new QO(n,new ki(e),t)}function XO(n){n._throwIfRoot("getDownloadURL");const e=jO(n.storage,n._location,PT());return n.storage.makeRequestWithTokens(e,qo).then(t=>{if(t===null)throw aO();return t})}function YO(n,e){const t=bO(n._location.path,e),r=new Tn(n._location.bucket,t);return new Ms(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZO(n){return/^[A-Za-z]+:\/\//.test(n)}function e2(n,e){return new Ms(n,e)}function OT(n,e){if(n instanceof Tm){const t=n;if(t._bucket==null)throw sO();const r=new Ms(t,t._bucket);return e!=null?OT(r,e):r}else return e!==void 0?YO(n,e):n}function t2(n,e){if(e&&ZO(e)){if(n instanceof Tm)return e2(n,e);throw Sp("To use ref(service, url), the first argument must be a Storage instance.")}else return OT(n,e)}function $v(n,e){const t=e?.[gT];return t==null?null:Tn.makeFromBucketSpec(t,n)}function n2(n,e,t,r={}){n.host=`${e}:${t}`;const o=Ki(e);o&&(Np(`https://${n.host}/b`),xp("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:a}=r;a&&(n._overrideAuthToken=typeof a=="string"?a:Gw(a,n.app.options.projectId))}class Tm{constructor(e,t,r,o,a,u=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=o,this._firebaseVersion=a,this._isUsingEmulator=u,this._bucket=null,this._host=mT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Qb,this._maxUploadRetryTime=Jb,this._requests=new Set,o!=null?this._bucket=Tn.makeFromBucketSpec(o,this._host):this._bucket=$v(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Tn.makeFromBucketSpec(this._url,e):this._bucket=$v(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Bv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Bv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Zn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ms(this,e)}_makeRequest(e,t,r,o,a=!0){if(this._deleted)return new cO(wT());{const u=EO(e,this._appId,r,o,t,this._firebaseVersion,a,this._isUsingEmulator);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,o).getPromise()}}const Hv="@firebase/storage",qv="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT="storage";function r2(n,e,t){return n=Ut(n),JO(n,e,t)}function i2(n){return n=Ut(n),XO(n)}function s2(n,e){return n=Ut(n),t2(n,e)}function o2(n=Rh(),e){n=Ut(n);const r=Qi(n,DT).getImmediate({identifier:e}),o=Hw("storage");return o&&a2(r,...o),r}function a2(n,e,t,r={}){n2(n,e,t,r)}function l2(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Tm(t,r,o,e,zs)}function u2(){nr(new Vn(DT,l2,"PUBLIC").setMultipleInstances(!0)),fn(Hv,qv,""),fn(Hv,qv,"esm2017")}u2();const LT="@firebase/installations",Im="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT=1e4,MT=`w:${Im}`,UT="FIS_v2",c2="https://firebaseinstallations.googleapis.com/v1",h2=3600*1e3,d2="installations",f2="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Us=new Bs(d2,f2,p2);function FT(n){return n instanceof Mn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT({projectId:n}){return`${c2}/projects/${n}/installations`}function BT(n){return{token:n.token,requestStatus:2,expiresIn:g2(n.expiresIn),creationTime:Date.now()}}async function zT(n,e){const r=(await e.json()).error;return Us.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function $T({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function m2(n,{refreshToken:e}){const t=$T(n);return t.append("Authorization",y2(e)),t}async function HT(n){const e=await n();return e.status>=500&&e.status<600?n():e}function g2(n){return Number(n.replace("s","000"))}function y2(n){return`${UT} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _2({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=jT(n),o=$T(n),a=e.getImmediate({optional:!0});if(a){const y=await a.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const u={fid:t,authVersion:UT,appId:n.appId,sdkVersion:MT},d={method:"POST",headers:o,body:JSON.stringify(u)},p=await HT(()=>fetch(r,d));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:BT(y.authToken)}}else throw await zT("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v2(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2=/^[cdef][\w-]{21}$/,Rp="";function E2(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=T2(n);return w2.test(t)?t:Rp}catch{return Rp}}function T2(n){return v2(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=new Map;function GT(n,e){const t=$h(n);KT(t,e),I2(t,e)}function KT(n,e){const t=WT.get(n);if(t)for(const r of t)r(e)}function I2(n,e){const t=S2();t&&t.postMessage({key:n,fid:e}),R2()}let Ps=null;function S2(){return!Ps&&"BroadcastChannel"in self&&(Ps=new BroadcastChannel("[Firebase] FID Change"),Ps.onmessage=n=>{KT(n.data.key,n.data.fid)}),Ps}function R2(){WT.size===0&&Ps&&(Ps.close(),Ps=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2="firebase-installations-database",C2=1,Fs="firebase-installations-store";let zf=null;function Sm(){return zf||(zf=Zw(A2,C2,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Fs)}}})),zf}async function hh(n,e){const t=$h(n),o=(await Sm()).transaction(Fs,"readwrite"),a=o.objectStore(Fs),u=await a.get(t);return await a.put(e,t),await o.done,(!u||u.fid!==e.fid)&&GT(n,e.fid),e}async function QT(n){const e=$h(n),r=(await Sm()).transaction(Fs,"readwrite");await r.objectStore(Fs).delete(e),await r.done}async function Hh(n,e){const t=$h(n),o=(await Sm()).transaction(Fs,"readwrite"),a=o.objectStore(Fs),u=await a.get(t),d=e(u);return d===void 0?await a.delete(t):await a.put(d,t),await o.done,d&&(!u||u.fid!==d.fid)&&GT(n,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rm(n){let e;const t=await Hh(n.appConfig,r=>{const o=P2(r),a=k2(n,o);return e=a.registrationPromise,a.installationEntry});return t.fid===Rp?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function P2(n){const e=n||{fid:E2(),registrationStatus:0};return JT(e)}function k2(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Us.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=N2(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:x2(n)}:{installationEntry:e}}async function N2(n,e){try{const t=await _2(n,e);return hh(n.appConfig,t)}catch(t){throw FT(t)&&t.customData.serverCode===409?await QT(n.appConfig):await hh(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function x2(n){let e=await Wv(n.appConfig);for(;e.registrationStatus===1;)await qT(100),e=await Wv(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Rm(n);return r||t}return e}function Wv(n){return Hh(n,e=>{if(!e)throw Us.create("installation-not-found");return JT(e)})}function JT(n){return b2(n)?{fid:n.fid,registrationStatus:0}:n}function b2(n){return n.registrationStatus===1&&n.registrationTime+VT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O2({appConfig:n,heartbeatServiceProvider:e},t){const r=D2(n,t),o=m2(n,t),a=e.getImmediate({optional:!0});if(a){const y=await a.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const u={installation:{sdkVersion:MT,appId:n.appId}},d={method:"POST",headers:o,body:JSON.stringify(u)},p=await HT(()=>fetch(r,d));if(p.ok){const y=await p.json();return BT(y)}else throw await zT("Generate Auth Token",p)}function D2(n,{fid:e}){return`${jT(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Am(n,e=!1){let t;const r=await Hh(n.appConfig,a=>{if(!XT(a))throw Us.create("not-registered");const u=a.authToken;if(!e&&M2(u))return a;if(u.requestStatus===1)return t=L2(n,e),a;{if(!navigator.onLine)throw Us.create("app-offline");const d=F2(a);return t=V2(n,d),d}});return t?await t:r.authToken}async function L2(n,e){let t=await Gv(n.appConfig);for(;t.authToken.requestStatus===1;)await qT(100),t=await Gv(n.appConfig);const r=t.authToken;return r.requestStatus===0?Am(n,e):r}function Gv(n){return Hh(n,e=>{if(!XT(e))throw Us.create("not-registered");const t=e.authToken;return j2(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function V2(n,e){try{const t=await O2(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await hh(n.appConfig,r),t}catch(t){if(FT(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await QT(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await hh(n.appConfig,r)}throw t}}function XT(n){return n!==void 0&&n.registrationStatus===2}function M2(n){return n.requestStatus===2&&!U2(n)}function U2(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+h2}function F2(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function j2(n){return n.requestStatus===1&&n.requestTime+VT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B2(n){const e=n,{installationEntry:t,registrationPromise:r}=await Rm(e);return r?r.catch(console.error):Am(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z2(n,e=!1){const t=n;return await $2(t),(await Am(t,e)).token}async function $2(n){const{registrationPromise:e}=await Rm(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H2(n){if(!n||!n.options)throw $f("App Configuration");if(!n.name)throw $f("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw $f(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function $f(n){return Us.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT="installations",q2="installations-internal",W2=n=>{const e=n.getProvider("app").getImmediate(),t=H2(e),r=Qi(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},G2=n=>{const e=n.getProvider("app").getImmediate(),t=Qi(e,YT).getImmediate();return{getId:()=>B2(t),getToken:o=>z2(t,o)}};function K2(){nr(new Vn(YT,W2,"PUBLIC")),nr(new Vn(q2,G2,"PRIVATE"))}K2();fn(LT,Im);fn(LT,Im,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="analytics",Q2="firebase_id",J2="origin",X2=60*1e3,Y2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Cm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new Sh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},In=new Bs("analytics","Analytics",Z2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eD(n){if(!n.startsWith(Cm)){const e=In.create("invalid-gtag-resource",{gtagURL:n});return pn.warn(e.message),""}return n}function ZT(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function tD(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function nD(n,e){const t=tD("firebase-js-sdk-policy",{createScriptURL:eD}),r=document.createElement("script"),o=`${Cm}?l=${n}&id=${e}`;r.src=t?t?.createScriptURL(o):o,r.async=!0,document.head.appendChild(r)}function rD(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function iD(n,e,t,r,o,a){const u=r[o];try{if(u)await e[u];else{const p=(await ZT(t)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(d){pn.error(d)}n("config",o,a)}async function sD(n,e,t,r,o){try{let a=[];if(o&&o.send_to){let u=o.send_to;Array.isArray(u)||(u=[u]);const d=await ZT(t);for(const p of u){const y=d.find(E=>E.measurementId===p),v=y&&e[y.appId];if(v)a.push(v);else{a=[];break}}}a.length===0&&(a=Object.values(e)),await Promise.all(a),n("event",r,o||{})}catch(a){pn.error(a)}}function oD(n,e,t,r){async function o(a,...u){try{if(a==="event"){const[d,p]=u;await sD(n,e,t,d,p)}else if(a==="config"){const[d,p]=u;await iD(n,e,t,r,d,p)}else if(a==="consent"){const[d,p]=u;n("consent",d,p)}else if(a==="get"){const[d,p,y]=u;n("get",d,p,y)}else if(a==="set"){const[d]=u;n("set",d)}else n(a,...u)}catch(d){pn.error(d)}}return o}function aD(n,e,t,r,o){let a=function(...u){window[r].push(arguments)};return window[o]&&typeof window[o]=="function"&&(a=window[o]),window[o]=oD(a,n,e,t),{gtagCore:a,wrappedGtag:window[o]}}function lD(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Cm)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD=30,cD=1e3;class hD{constructor(e={},t=cD){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const eI=new hD;function dD(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function fD(n){var e;const{appId:t,apiKey:r}=n,o={method:"GET",headers:dD(r)},a=Y2.replace("{app-id}",t),u=await fetch(a,o);if(u.status!==200&&u.status!==304){let d="";try{const p=await u.json();!((e=p.error)===null||e===void 0)&&e.message&&(d=p.error.message)}catch{}throw In.create("config-fetch-failed",{httpStatus:u.status,responseMessage:d})}return u.json()}async function pD(n,e=eI,t){const{appId:r,apiKey:o,measurementId:a}=n.options;if(!r)throw In.create("no-app-id");if(!o){if(a)return{measurementId:a,appId:r};throw In.create("no-api-key")}const u=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new yD;return setTimeout(async()=>{d.abort()},X2),tI({appId:r,apiKey:o,measurementId:a},u,d,e)}async function tI(n,{throttleEndTimeMillis:e,backoffCount:t},r,o=eI){var a;const{appId:u,measurementId:d}=n;try{await mD(r,e)}catch(p){if(d)return pn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:u,measurementId:d};throw p}try{const p=await fD(n);return o.deleteThrottleMetadata(u),p}catch(p){const y=p;if(!gD(y)){if(o.deleteThrottleMetadata(u),d)return pn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${y?.message}]`),{appId:u,measurementId:d};throw p}const v=Number((a=y?.customData)===null||a===void 0?void 0:a.httpStatus)===503?g_(t,o.intervalMillis,uD):g_(t,o.intervalMillis),E={throttleEndTimeMillis:Date.now()+v,backoffCount:t+1};return o.setThrottleMetadata(u,E),pn.debug(`Calling attemptFetch again in ${v} millis`),tI(n,E,r,o)}}function mD(n,e){return new Promise((t,r)=>{const o=Math.max(e-Date.now(),0),a=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(a),r(In.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function gD(n){if(!(n instanceof Mn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class yD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function _D(n,e,t,r,o){if(o&&o.global){n("event",t,r);return}else{const a=await e,u=Object.assign(Object.assign({},r),{send_to:a});n("event",t,u)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vD(){if(Qw())try{await Jw()}catch(n){return pn.warn(In.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return pn.warn(In.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function wD(n,e,t,r,o,a,u){var d;const p=pD(n);p.then(L=>{t[L.measurementId]=L.appId,n.options.measurementId&&L.measurementId!==n.options.measurementId&&pn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${L.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(L=>pn.error(L)),e.push(p);const y=vD().then(L=>{if(L)return r.getId()}),[v,E]=await Promise.all([p,y]);lD(a)||nD(a,v.measurementId),o("js",new Date);const I=(d=u?.config)!==null&&d!==void 0?d:{};return I[J2]="firebase",I.update=!0,E!=null&&(I[Q2]=E),o("config",v.measurementId,I),v.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e){this.app=e}_delete(){return delete Al[this.app.options.appId],Promise.resolve()}}let Al={},Kv=[];const Qv={};let Hf="dataLayer",TD="gtag",Jv,nI,Xv=!1;function ID(){const n=[];if(Kw()&&n.push("This is a browser extension environment."),yA()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,o)=>`(${o+1}) ${r}`).join(" "),t=In.create("invalid-analytics-context",{errorInfo:e});pn.warn(t.message)}}function SD(n,e,t){ID();const r=n.options.appId;if(!r)throw In.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)pn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw In.create("no-api-key");if(Al[r]!=null)throw In.create("already-exists",{id:r});if(!Xv){rD(Hf);const{wrappedGtag:a,gtagCore:u}=aD(Al,Kv,Qv,Hf,TD);nI=a,Jv=u,Xv=!0}return Al[r]=wD(n,Kv,Qv,e,Jv,Hf,t),new ED(n)}function RD(n=Rh()){n=Ut(n);const e=Qi(n,dh);return e.isInitialized()?e.getImmediate():AD(n)}function AD(n,e={}){const t=Qi(n,dh);if(t.isInitialized()){const o=t.getImmediate();if(Fi(e,t.getOptions()))return o;throw In.create("already-initialized")}return t.initialize({options:e})}function CD(n,e,t,r){n=Ut(n),_D(nI,Al[n.app.options.appId],e,t,r).catch(o=>pn.error(o))}const Yv="@firebase/analytics",Zv="0.10.17";function PD(){nr(new Vn(dh,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return SD(r,o,t)},"PUBLIC")),nr(new Vn("analytics-internal",n,"PRIVATE")),fn(Yv,Zv),fn(Yv,Zv,"esm2017");function n(e){try{const t=e.getProvider(dh).getImmediate();return{logEvent:(r,o,a)=>CD(t,r,o,a)}}catch(t){throw In.create("interop-component-reg-failed",{reason:t})}}}PD();const kD={apiKey:"AIzaSyAWeH0iD8tTRMNuW6TfCTvcI9KODh_TL2g",authDomain:"gowell-cc836.firebaseapp.com",projectId:"gowell-cc836",storageBucket:"gowell-cc836.appspot.com",messagingSenderId:"644764225369",appId:"1:644764225369:web:f762b68790325fbc55c648",measurementId:"G-FXKVH4QD54"},qh=eE(kD),Cl=MN(qh);Gb(qh);const ND=o2(qh);typeof window<"u"&&RD(qh);const xD=[{id:"joy",label:"Радость",color:"#FFD6E8"},{id:"sad",label:"Грусть",color:"#DDE8FF"},{id:"anx",label:"Тревога",color:"#FFE9D6"},{id:"calm",label:"Спокойствие",color:"#E8FFF4"}];function bD(){const[n,e]=ne.useState(()=>JSON.parse(localStorage.getItem("gowell_moods")||"[]")),[t,r]=ne.useState("");ne.useEffect(()=>localStorage.setItem("gowell_moods",JSON.stringify(n)),[n]);async function o(a){const u={mood:a,note:t,date:new Date().toISOString()};e(d=>[u,...d]),r("");try{await V0(T0(Cl,"moods"),u)}catch{}}return z.jsx("div",{children:z.jsxs("div",{className:"card",children:[z.jsx("h2",{children:"Трекер настроения"}),z.jsx("p",{className:"small",children:"Нажми эмоцию и добавь заметку — полезно для осознанности."}),z.jsx("div",{style:{display:"flex",gap:10,flexWrap:"wrap",marginTop:8},children:xD.map(a=>z.jsxs("div",{className:"card",style:{minWidth:160,flex:"1 1 160px",background:a.color},children:[z.jsx("h4",{style:{margin:0},children:a.label}),z.jsx("p",{className:"small",children:"Добавь заметку"}),z.jsx("textarea",{className:"input",placeholder:"Короткая заметка...",value:t,onChange:u=>r(u.target.value)}),z.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:8},children:z.jsx("button",{className:"btn",onClick:()=>o(a.label),children:"Сохранить"})})]},a.id))}),z.jsx("h3",{style:{marginTop:16},children:"История"}),z.jsxs("div",{style:{display:"grid",gap:10},children:[n.map((a,u)=>z.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:8},children:[z.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[z.jsx("div",{style:{fontWeight:600},children:a.mood}),z.jsx("div",{className:"small",children:new Date(a.date).toLocaleString()})]}),a.note&&z.jsx("div",{style:{color:"var(--muted)"},children:a.note})]},u)),n.length===0&&z.jsx("div",{className:"small",children:"Нет записей"})]})]})})}function OD(n){try{return new Date(n).toLocaleString()}catch{return n}}function DD(){const[n,e]=ne.useState(()=>JSON.parse(localStorage.getItem("gowell_journal")||"[]")),[t,r]=ne.useState(""),[o,a]=ne.useState(-1);ne.useEffect(()=>localStorage.setItem("gowell_journal",JSON.stringify(n)),[n]);const u=async()=>{if(!t.trim())return;const y={text:t.trim(),date:new Date().toISOString()};e(v=>[y,...v]),r("");try{await V0(T0(Cl,"journal"),y)}catch{}},d=y=>{e(v=>v.map((E,I)=>I===y?{...E,text:t}:E)),a(-1),r("")},p=y=>e(v=>v.filter((E,I)=>I!==y));return z.jsx("div",{children:z.jsxs("div",{className:"card",children:[z.jsx("h2",{children:"Дневник"}),z.jsx("textarea",{value:t,onChange:y=>r(y.target.value),placeholder:"Запиши свою мысль...",className:"input",style:{minHeight:120}}),z.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:8},children:z.jsx("button",{className:"btn",onClick:u,children:"Сохранить запись"})}),z.jsx("h3",{style:{marginTop:16},children:"Записи"}),z.jsxs("div",{style:{display:"grid",gap:12},children:[n.map((y,v)=>z.jsxs("div",{className:"card",children:[z.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[z.jsx("div",{style:{fontWeight:600},children:OD(y.date)}),z.jsxs("div",{style:{display:"flex",gap:8},children:[z.jsx("button",{className:"btn ghost",onClick:()=>{a(v),r(y.text)},children:"Редактировать"}),z.jsx("button",{className:"btn ghost",onClick:()=>p(v),children:"Удалить"})]})]}),z.jsx("div",{style:{marginTop:8},children:y.text}),o===v&&z.jsxs("div",{style:{marginTop:8,display:"flex",gap:8},children:[z.jsx("button",{className:"btn",onClick:()=>d(v),children:"Сохранить"}),z.jsx("button",{className:"btn ghost",onClick:()=>{a(-1),r("")},children:"Отмена"})]})]},v)),n.length===0&&z.jsx("div",{className:"small",children:"Записей пока нет"})]})]})})}function LD({theme:n,setTheme:e}){const[t,r]=ne.useState({name:"Пользователь",age:"",about:"",avatar:""}),[o,a]=ne.useState(!1),[u,d]=ne.useState(null),[p,y]=ne.useState(!1),v="local_user";ne.useEffect(()=>{async function P(){try{const V=Lc(Cl,"profiles",v),A=await KN(V);if(A.exists())r(A.data());else{const X=JSON.parse(localStorage.getItem("gowell_profile")||null);X&&r(X)}}catch{const A=JSON.parse(localStorage.getItem("gowell_profile")||null);A&&r(A)}}P()},[]),ne.useEffect(()=>{localStorage.setItem("gowell_profile",JSON.stringify(t))},[t]);async function E(){a(!1);try{await Tv(Lc(Cl,"profiles",v),t,{merge:!0})}catch(P){console.warn("Save to Firestore failed",P)}}function I(P){const V=P.target.files[0];if(!V)return;d(V);const A=URL.createObjectURL(V);r(X=>({...X,avatar:A}))}async function L(){if(!u)return;y(!0);const P=s2(ND,`avatars/${v}/${u.name}`),V=r2(P,u);V.on("state_changed",null,A=>{console.error(A),y(!1)},async()=>{const A=await i2(V.snapshot.ref);r(X=>({...X,avatar:A})),await Tv(Lc(Cl,"profiles",v),{...t,avatar:A},{merge:!0}),y(!1)})}return z.jsx("div",{children:z.jsxs("div",{className:"card",children:[z.jsx("h2",{children:"Профиль"}),z.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[z.jsx("div",{style:{width:96,height:96,borderRadius:16,overflow:"hidden",background:"#fff",display:"flex",alignItems:"center",justifyContent:"center"},children:t.avatar?z.jsx("img",{src:t.avatar,alt:"avatar",style:{width:"100%",height:"100%",objectFit:"cover"}}):z.jsx("div",{style:{fontWeight:700,color:"var(--primary)"},children:"GW"})}),z.jsxs("div",{style:{flex:1},children:[z.jsxs("div",{style:{display:"flex",gap:8},children:[z.jsx("input",{className:"input",value:t.name,onChange:P=>r({...t,name:P.target.value}),disabled:!o}),z.jsx("input",{className:"input",value:t.age,onChange:P=>r({...t,age:P.target.value}),disabled:!o,style:{width:96},placeholder:"Возраст"})]}),z.jsx("textarea",{className:"input",style:{marginTop:8},value:t.about,onChange:P=>r({...t,about:P.target.value}),disabled:!o,placeholder:"О себе"}),z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:8},children:[z.jsxs("label",{className:"btn ghost",style:{cursor:"pointer"},children:["Загрузить аватар",z.jsx("input",{type:"file",accept:"image/*",onChange:I,style:{display:"none"}})]}),z.jsx("button",{className:"btn",onClick:L,disabled:!u||p,children:p?"Загрузка...":"Загрузить"}),o?z.jsx("button",{className:"btn ghost",onClick:()=>a(!1),children:"Отмена"}):z.jsx("button",{className:"btn ghost",onClick:()=>a(!0),children:"Редактировать"}),o&&z.jsx("button",{className:"btn",onClick:E,children:"Сохранить"})]}),z.jsx("div",{className:"small",style:{marginTop:10},children:"Данные сохраняются в Firebase и локально."}),z.jsxs("div",{style:{marginTop:12},children:[z.jsx("label",{className:"small",children:"Тема"}),z.jsxs("div",{style:{display:"flex",gap:8,marginTop:6},children:[z.jsx("button",{className:"btn ghost",onClick:()=>e("light"),children:"Светлая"}),z.jsx("button",{className:"btn",onClick:()=>e("dark"),children:"Тёмная"})]})]})]})]})]})})}const VD=[{title:"5-минутная дыхательная практика",text:"Сядь удобно. Вдыхай на 4, задержи на 4, выдыхай на 6. Повтори 5 раз."},{title:"Аффирмация дня",text:"Я достаточно. Я делаю всё, что могу."},{title:"Короткая прогулка",text:"Выйди на 10 минут. Дыши глубоко."},{title:'Техника "5-4-3-2-1"',text:"Назови 5 вещей, которые видишь, 4 которые слышишь, 3 которые чувствуешь, 2 которые ощущаешь запахом, 1 вкус."},{title:"Упражнение на благодарность",text:"Запиши 3 вещи, за которые благодарен сегодня."}];function MD(){return z.jsx("div",{children:z.jsxs("div",{className:"card",children:[z.jsx("h2",{children:"Wellness Hub"}),z.jsx("p",{className:"small",children:"Практики и короткие упражнения для восстановления и спокойствия."}),z.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:12,marginTop:12},children:VD.map((n,e)=>z.jsxs("article",{className:"card",style:{padding:12},children:[z.jsx("h4",{style:{margin:"0 0 6px"},children:n.title}),z.jsx("p",{className:"small",style:{margin:0},children:n.text}),z.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:10},children:z.jsx("button",{className:"btn ghost",children:"Открыть"})})]},e))})]})})}var rI={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ew=bi.createContext&&bi.createContext(rI),UD=["attr","size","title"];function FD(n,e){if(n==null)return{};var t=jD(n,e),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)r=a[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function jD(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function fh(){return fh=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},fh.apply(this,arguments)}function tw(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function ph(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?tw(Object(t),!0).forEach(function(r){BD(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):tw(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function BD(n,e,t){return e=zD(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function zD(n){var e=$D(n,"string");return typeof e=="symbol"?e:e+""}function $D(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function iI(n){return n&&n.map((e,t)=>bi.createElement(e.tag,ph({key:t},e.attr),iI(e.child)))}function tu(n){return e=>bi.createElement(HD,fh({attr:ph({},n.attr)},e),iI(n.child))}function HD(n){var e=t=>{var{attr:r,size:o,title:a}=n,u=FD(n,UD),d=o||t.size||"1em",p;return t.className&&(p=t.className),n.className&&(p=(p?p+" ":"")+n.className),bi.createElement("svg",fh({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,u,{className:p,style:ph(ph({color:n.color||t.color},t.style),n.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),a&&bi.createElement("title",null,a),n.children)};return ew!==void 0?bi.createElement(ew.Consumer,null,t=>e(t)):e(rI)}function qD(n){return tu({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(n)}function WD(n){return tu({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(n)}function GD(n){return tu({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(n)}function KD(n){return tu({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"},child:[]}]})(n)}function QD(n){return tu({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(n)}const JD=()=>{const n=(e,t,r)=>z.jsxs(vR,{to:e,className:({isActive:o})=>"nav-link"+(o?" active":""),children:[z.jsx(t,{size:22}),z.jsx("span",{children:r})]});return z.jsxs("nav",{className:"bottom-navbar",role:"navigation","aria-label":"bottom navigation",children:[n("/",GD,"Главная"),n("/chat",KD,"Чат"),n("/mood",WD,"Настроение"),n("/journal",qD,"Дневник"),n("/hub",QD,"Hub")]})};function XD({onFinish:n,seconds:e=1500}){return ne.useEffect(()=>{const t=setTimeout(()=>n&&n(),e);return()=>clearTimeout(t)},[n,e]),z.jsx("div",{style:dl.container,children:z.jsxs("div",{style:dl.card,children:[z.jsx("img",{src:"/icons/icon-192x192.png",alt:"GoWell",style:dl.logo}),z.jsx("h1",{style:dl.title,children:"GoWell"}),z.jsx("p",{style:dl.subtitle,children:"Цифровой помощник по ментальному здоровью"})]})})}const dl={container:{position:"fixed",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(180deg, rgba(225,2,126,0.04), rgba(255,255,255,0.0))",zIndex:9999},card:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,padding:20,borderRadius:14,background:"rgba(255,255,255,0.95)",boxShadow:"0 8px 30px rgba(0,0,0,0.08)"},logo:{width:96,height:96,borderRadius:14},title:{margin:0,color:"#E1027E"},subtitle:{margin:0,fontSize:13,color:"#666"}};function YD(){const[n,e]=ne.useState(localStorage.getItem("gowell_theme")||"light"),[t,r]=ne.useState(!0);return ne.useEffect(()=>{document.body.classList.toggle("dark",n==="dark"),localStorage.setItem("gowell_theme",n)},[n]),ne.useEffect(()=>{const o=setTimeout(()=>r(!1),1200);return()=>clearTimeout(o)},[]),t?z.jsx(XD,{onFinish:()=>r(!1)}):z.jsxs(gR,{children:[z.jsxs("header",{className:"app-header",children:[z.jsx("a",{className:"brand",href:"/",children:"GoWell"}),z.jsxs("nav",{className:"desktop-nav",children:[z.jsx("a",{href:"/",children:"Главная"}),z.jsx("a",{href:"/chat",children:"Чат"}),z.jsx("a",{href:"/mood",children:"Настроение"}),z.jsx("a",{href:"/journal",children:"Дневник"}),z.jsx("a",{href:"/hub",children:"Hub"}),z.jsx("a",{href:"/profile",children:"Профиль"})]}),z.jsx("div",{style:{display:"flex",alignItems:"center",gap:12},children:z.jsx("div",{style:{opacity:0,pointerEvents:"none"},children:"theme"})})]}),z.jsx("main",{className:"app-content",children:z.jsxs(lR,{children:[z.jsx(Ss,{path:"/",element:z.jsx(IR,{})}),z.jsx(Ss,{path:"/chat",element:z.jsx(Z1,{})}),z.jsx(Ss,{path:"/mood",element:z.jsx(bD,{})}),z.jsx(Ss,{path:"/journal",element:z.jsx(DD,{})}),z.jsx(Ss,{path:"/profile",element:z.jsx(LD,{theme:n,setTheme:e})}),z.jsx(Ss,{path:"/hub",element:z.jsx(MD,{})})]})}),z.jsx(JD,{})]})}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker?.register("/sw.js").catch(()=>{})});_S.createRoot(document.getElementById("root")).render(z.jsx(YD,{}));
