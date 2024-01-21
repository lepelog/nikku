var We=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var l=(t,e,s)=>(We(t,e,"read from private field"),s?s.call(t):e.get(t)),$=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},d=(t,e,s,i)=>(We(t,e,"write to private field"),i?i.call(t,s):e.set(t,s),s);var be=(t,e,s)=>(We(t,e,"access private method"),s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xe=globalThis,dt=xe.ShadowRoot&&(xe.ShadyCSS===void 0||xe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ct=Symbol(),$t=new WeakMap;let Wt=class{constructor(e,s,i){if(this._$cssResult$=!0,i!==ct)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(dt&&e===void 0){const i=s!==void 0&&s.length===1;i&&(e=$t.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&$t.set(s,e))}return e}toString(){return this.cssText}};const ws=t=>new Wt(typeof t=="string"?t:t+"",void 0,ct),U=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((i,r,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1],t[0]);return new Wt(s,t,ct)},bs=(t,e)=>{if(dt)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const i=document.createElement("style"),r=xe.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}},wt=dt?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const i of e.cssRules)s+=i.cssText;return ws(s)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Cs,defineProperty:xs,getOwnPropertyDescriptor:Es,getOwnPropertyNames:As,getOwnPropertySymbols:Ps,getPrototypeOf:Ss}=Object,R=globalThis,bt=R.trustedTypes,ks=bt?bt.emptyScript:"",Ie=R.reactiveElementPolyfillSupport,le=(t,e)=>t,Ae={toAttribute(t,e){switch(e){case Boolean:t=t?ks:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},ut=(t,e)=>!Cs(t,e),Ct={attribute:!0,type:String,converter:Ae,reflect:!1,hasChanged:ut};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),R.litPropertyMetadata??(R.litPropertyMetadata=new WeakMap);class K extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=Ct){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(e,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,s);r!==void 0&&xs(this.prototype,e,r)}}static getPropertyDescriptor(e,s,i){const{get:r,set:n}=Es(this.prototype,e)??{get(){return this[s]},set(o){this[s]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const h=r==null?void 0:r.call(this);n.call(this,o),this.requestUpdate(e,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ct}static _$Ei(){if(this.hasOwnProperty(le("elementProperties")))return;const e=Ss(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(le("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(le("properties"))){const s=this.properties,i=[...As(s),...Ps(s)];for(const r of i)this.createProperty(r,s[r])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[i,r]of s)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const r=this._$Eu(s,i);r!==void 0&&this._$Eh.set(r,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)s.unshift(wt(r))}else e!==void 0&&s.push(wt(e));return s}static _$Eu(e,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(s=>s(this))}addController(e){var s;(this._$ES??(this._$ES=[])).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var s;(s=this._$ES)==null||s.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return bs(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)==null||e.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach(s=>{var i;return(i=s.hostDisconnected)==null?void 0:i.call(s)})}attributeChangedCallback(e,s,i){this._$AK(e,i)}_$EO(e,s){var n;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Ae).toAttribute(s,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,s){var n;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const o=i.getPropertyOptions(r),h=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:Ae;this._$Em=r,this[r]=h.fromAttribute(s,o.type),this._$Em=null}}requestUpdate(e,s,i,r=!1,n){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??ut)(r?n:this[e],s))return;this.C(e,s,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,s,i){this._$AL.has(e)||this._$AL.set(e,s),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,o]of r)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.C(n,this[n],o)}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(i=this._$ES)==null||i.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(s)):this._$ET()}catch(r){throw e=!1,this._$ET(),r}e&&this._$AE(s)}willUpdate(e){}_$AE(e){var s;(s=this._$ES)==null||s.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(s=>this._$EO(s,this[s]))),this._$ET()}updated(e){}firstUpdated(e){}}K.elementStyles=[],K.shadowRootOptions={mode:"open"},K[le("elementProperties")]=new Map,K[le("finalized")]=new Map,Ie==null||Ie({ReactiveElement:K}),(R.reactiveElementVersions??(R.reactiveElementVersions=[])).push("2.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he=globalThis,Pe=he.trustedTypes,xt=Pe?Pe.createPolicy("lit-html",{createHTML:t=>t}):void 0,It="$lit$",T=`lit$${(Math.random()+"").slice(9)}$`,Ht="?"+T,Ms=`<${Ht}>`,Z=document,ce=()=>Z.createComment(""),ue=t=>t===null||typeof t!="object"&&typeof t!="function",zt=Array.isArray,Ls=t=>zt(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",He=`[ 	
\f\r]`,ae=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Et=/-->/g,At=/>/g,I=RegExp(`>|${He}(?:([^\\s"'>=/]+)(${He}*=${He}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pt=/'/g,St=/"/g,Ft=/^(?:script|style|textarea|title)$/i,Ts=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),M=Ts(1),V=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),kt=new WeakMap,F=Z.createTreeWalker(Z,129);function jt(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return xt!==void 0?xt.createHTML(e):e}const Os=(t,e)=>{const s=t.length-1,i=[];let r,n=e===2?"<svg>":"",o=ae;for(let h=0;h<s;h++){const a=t[h];let c,p,u=-1,f=0;for(;f<a.length&&(o.lastIndex=f,p=o.exec(a),p!==null);)f=o.lastIndex,o===ae?p[1]==="!--"?o=Et:p[1]!==void 0?o=At:p[2]!==void 0?(Ft.test(p[2])&&(r=RegExp("</"+p[2],"g")),o=I):p[3]!==void 0&&(o=I):o===I?p[0]===">"?(o=r??ae,u=-1):p[1]===void 0?u=-2:(u=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?I:p[3]==='"'?St:Pt):o===St||o===Pt?o=I:o===Et||o===At?o=ae:(o=I,r=void 0);const x=o===I&&t[h+1].startsWith("/>")?" ":"";n+=o===ae?a+Ms:u>=0?(i.push(c),a.slice(0,u)+It+a.slice(u)+T+x):a+T+(u===-2?h:x)}return[jt(t,n+(t[s]||"<?>")+(e===2?"</svg>":"")),i]};class pe{constructor({strings:e,_$litType$:s},i){let r;this.parts=[];let n=0,o=0;const h=e.length-1,a=this.parts,[c,p]=Os(e,s);if(this.el=pe.createElement(c,i),F.currentNode=this.el.content,s===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=F.nextNode())!==null&&a.length<h;){if(r.nodeType===1){if(r.hasAttributes())for(const u of r.getAttributeNames())if(u.endsWith(It)){const f=p[o++],x=r.getAttribute(u).split(T),we=/([.?@])?(.*)/.exec(f);a.push({type:1,index:n,name:we[2],strings:x,ctor:we[1]==="."?Bs:we[1]==="?"?Ns:we[1]==="@"?Rs:De}),r.removeAttribute(u)}else u.startsWith(T)&&(a.push({type:6,index:n}),r.removeAttribute(u));if(Ft.test(r.tagName)){const u=r.textContent.split(T),f=u.length-1;if(f>0){r.textContent=Pe?Pe.emptyScript:"";for(let x=0;x<f;x++)r.append(u[x],ce()),F.nextNode(),a.push({type:2,index:++n});r.append(u[f],ce())}}}else if(r.nodeType===8)if(r.data===Ht)a.push({type:2,index:n});else{let u=-1;for(;(u=r.data.indexOf(T,u+1))!==-1;)a.push({type:7,index:n}),u+=T.length-1}n++}}static createElement(e,s){const i=Z.createElement("template");return i.innerHTML=e,i}}function se(t,e,s=t,i){var o,h;if(e===V)return e;let r=i!==void 0?(o=s._$Co)==null?void 0:o[i]:s._$Cl;const n=ue(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((h=r==null?void 0:r._$AO)==null||h.call(r,!1),n===void 0?r=void 0:(r=new n(t),r._$AT(t,s,i)),i!==void 0?(s._$Co??(s._$Co=[]))[i]=r:s._$Cl=r),r!==void 0&&(e=se(t,r._$AS(t,e.values),r,i)),e}class Ds{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??Z).importNode(s,!0);F.currentNode=r;let n=F.nextNode(),o=0,h=0,a=i[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new $e(n,n.nextSibling,this,e):a.type===1?c=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(c=new Vs(n,this,e)),this._$AV.push(c),a=i[++h]}o!==(a==null?void 0:a.index)&&(n=F.nextNode(),o++)}return F.currentNode=Z,r}p(e){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,s),s+=i.strings.length-2):i._$AI(e[s])),s++}}class $e{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,s,i,r){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=se(this,e,s),ue(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==V&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ls(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==g&&ue(this._$AH)?this._$AA.nextSibling.data=e:this.$(Z.createTextNode(e)),this._$AH=e}g(e){var n;const{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=pe.createElement(jt(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(s);else{const o=new Ds(r,this),h=o.u(this.options);o.p(s),this.$(h),this._$AH=o}}_$AC(e){let s=kt.get(e.strings);return s===void 0&&kt.set(e.strings,s=new pe(e)),s}T(e){zt(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,r=0;for(const n of e)r===s.length?s.push(i=new $e(this.k(ce()),this.k(ce()),this,this.options)):i=s[r],i._$AI(n),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,s){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,s);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var s;this._$AM===void 0&&(this._$Cv=e,(s=this._$AP)==null||s.call(this,e))}}class De{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,i,r,n){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=s,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}_$AI(e,s=this,i,r){const n=this.strings;let o=!1;if(n===void 0)e=se(this,e,s,0),o=!ue(e)||e!==this._$AH&&e!==V,o&&(this._$AH=e);else{const h=e;let a,c;for(e=n[0],a=0;a<n.length-1;a++)c=se(this,h[i+a],s,a),c===V&&(c=this._$AH[a]),o||(o=!ue(c)||c!==this._$AH[a]),c===g?e=g:e!==g&&(e+=(c??"")+n[a+1]),this._$AH[a]=c}o&&!r&&this.O(e)}O(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Bs extends De{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===g?void 0:e}}class Ns extends De{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class Rs extends De{constructor(e,s,i,r,n){super(e,s,i,r,n),this.type=5}_$AI(e,s=this){if((e=se(this,e,s,0)??g)===V)return;const i=this._$AH,r=e===g&&i!==g||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==g&&(i===g||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,e):this._$AH.handleEvent(e)}}class Vs{constructor(e,s,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){se(this,e)}}const ze=he.litHtmlPolyfillSupport;ze==null||ze(pe,$e),(he.litHtmlVersions??(he.litHtmlVersions=[])).push("3.0.2");const Us=(t,e,s)=>{const i=(s==null?void 0:s.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const n=(s==null?void 0:s.renderBefore)??null;i._$litPart$=r=new $e(e.insertBefore(ce(),n),n,void 0,s??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let E=class extends K{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const e=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=e.firstChild),e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Us(s,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return V}};var Ut;E._$litElement$=!0,E.finalized=!0,(Ut=globalThis.litElementHydrateSupport)==null||Ut.call(globalThis,{LitElement:E});const Fe=globalThis.litElementPolyfillSupport;Fe==null||Fe({LitElement:E});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=t=>(e,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ws={attribute:!0,type:String,converter:Ae,reflect:!1,hasChanged:ut},Is=(t=Ws,e,s)=>{const{kind:i,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(s.name,t),i==="accessor"){const{name:o}=s;return{set(h){const a=e.get.call(this);e.set.call(this,h),this.requestUpdate(o,a,t)},init(h){return h!==void 0&&this.C(o,void 0,t),h}}}if(i==="setter"){const{name:o}=s;return function(h){const a=this[o];e.call(this,h),this.requestUpdate(o,a,t)}}throw Error("Unsupported decorator location: "+i)};function _(t){return(e,s)=>typeof s=="object"?Is(t,e,s):((i,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(r,n):void 0})(t,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function b(t){return _({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hs=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ft=t=>(...e)=>({_$litDirective$:t,values:e});class gt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,i){this._$Ct=e,this._$AM=s,this._$Ci=i}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=(t,e)=>{var i;const s=t._$AN;if(s===void 0)return!1;for(const r of s)(i=r._$AO)==null||i.call(r,e,!1),de(r,e);return!0},Se=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while((s==null?void 0:s.size)===0)},Gt=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),js(e)}};function zs(t){this._$AN!==void 0?(Se(this),this._$AM=t,Gt(this)):this._$AM=t}function Fs(t,e=!1,s=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(i))for(let n=s;n<i.length;n++)de(i[n],!1),Se(i[n]);else i!=null&&(de(i,!1),Se(i));else de(this,t)}const js=t=>{t.type==pt.CHILD&&(t._$AP??(t._$AP=Fs),t._$AQ??(t._$AQ=zs))};class Gs extends gt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,i){super._$AT(e,s,i),Gt(this),this.isConnected=e._$AU}_$AO(e,s=!0){var i,r;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(r=this.disconnected)==null||r.call(this)),s&&(de(this,e),Se(this))}setValue(e){if(Hs(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=()=>new Xs;class Xs{}const je=new WeakMap,X=ft(class extends Gs{render(t){return g}update(t,[e]){var i;const s=e!==this.G;return s&&this.G!==void 0&&this.ot(void 0),(s||this.rt!==this.lt)&&(this.G=e,this.ct=(i=t.options)==null?void 0:i.host,this.ot(this.lt=t.element)),g}ot(t){if(typeof this.G=="function"){const e=this.ct??globalThis;let s=je.get(e);s===void 0&&(s=new WeakMap,je.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ct,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){var t,e;return typeof this.G=="function"?(t=je.get(this.ct??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var Zs=Object.defineProperty,qs=Object.getOwnPropertyDescriptor,Xt=(t,e,s,i)=>{for(var r=i>1?void 0:i?qs(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Zs(e,s,r),r},Ks=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)},Mt=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},Lt=(t,e,s)=>(Ks(t,e,"access private method"),s),Ze,Zt,qe,qt;let ke=class extends E{constructor(){super(...arguments),Mt(this,Ze),Mt(this,qe),this.dialogOpen=!1,this.dialog=G(),this.isDialogSupported=!!self.HTMLDialogElement,this.explanations=["BRSTM is a file format that contains audio data that's being used for some Nintendo consoles. One of the differences with the usual audio format (MP3, etc) is that this format can contain a loop point, making it suitable for usage in games.","BRSTM file is not included in the repository."]}render(){return this.isDialogSupported?M`
      <span
        id="help"
        @click=${Lt(this,Ze,Zt)}
        title="Click to open explanation"
        ><slot></slot
      ></span>
      <dialog
        id="brstm-explanation"
        ?open=${this.dialogOpen}
        ${X(this.dialog)}
      >
        ${this.explanations.map(t=>M`<p>${t}</p>`)}

        <button @click=${Lt(this,qe,qt)}>OK</button>
      </dialog>
    `:M`<span id="help" title=${this.explanations.join(`
`)}
        ><slot></slot>
      </span>`}};Ze=new WeakSet;Zt=function(){var t;(t=this.dialog.value)==null||t.showModal()};qe=new WeakSet;qt=function(){var t;(t=this.dialog.value)==null||t.close()};ke.styles=U`
    #brstm-explanation {
      max-width: var(--max-width);
      background-color: var(--main-bg-color);
      color: var(--main-text-color);

      border: none;
      border-radius: 5px;
    }
    #brstm-explanation::backdrop {
      background-color: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(5px);
    }
    #help {
      text-decoration: underline;
    }
    #help:hover {
      cursor: help;
    }
    button {
      box-sizing: border-box;
      border-radius: 5px;
      color: var(--primary);
      background-color: var(--primary-lightest-2);
      outline-color: currentColor;

      min-width: 4rem;
      min-height: 1.6rem;
      border: none;
      border-radius: 5px;
      outline-style: solid;
    }
    button:hover {
      background-color: var(--primary-lightest-1);
    }

    @media (prefers-color-scheme: dark) {
      #brstm-explanation::backdrop {
        background-color: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(5px);
      }
      button {
        color: var(--main-text-color);
      }
    }
  `;Xt([b()],ke.prototype,"dialogOpen",2);ke=Xt([W("nikku-help")],ke);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Kt=Symbol("Comlink.proxy"),Ys=Symbol("Comlink.endpoint"),Js=Symbol("Comlink.releaseProxy"),Ge=Symbol("Comlink.finalizer"),Ee=Symbol("Comlink.thrown"),Yt=t=>typeof t=="object"&&t!==null||typeof t=="function",Qs={canHandle:t=>Yt(t)&&t[Kt],serialize(t){const{port1:e,port2:s}=new MessageChannel;return Qt(t,e),[s,[s]]},deserialize(t){return t.start(),ts(t)}},ei={canHandle:t=>Yt(t)&&Ee in t,serialize({value:t}){let e;return t instanceof Error?e={isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:e={isError:!1,value:t},[e,[]]},deserialize(t){throw t.isError?Object.assign(new Error(t.value.message),t.value):t.value}},Jt=new Map([["proxy",Qs],["throw",ei]]);function ti(t,e){for(const s of t)if(e===s||s==="*"||s instanceof RegExp&&s.test(e))return!0;return!1}function Qt(t,e=globalThis,s=["*"]){e.addEventListener("message",function i(r){if(!r||!r.data)return;if(!ti(s,r.origin)){console.warn(`Invalid origin '${r.origin}' for comlink proxy`);return}const{id:n,type:o,path:h}=Object.assign({path:[]},r.data),a=(r.data.argumentList||[]).map(z);let c;try{const p=h.slice(0,-1).reduce((f,x)=>f[x],t),u=h.reduce((f,x)=>f[x],t);switch(o){case"GET":c=u;break;case"SET":p[h.slice(-1)[0]]=z(r.data.value),c=!0;break;case"APPLY":c=u.apply(p,a);break;case"CONSTRUCT":{const f=new u(...a);c=oi(f)}break;case"ENDPOINT":{const{port1:f,port2:x}=new MessageChannel;Qt(t,x),c=rs(f,[f])}break;case"RELEASE":c=void 0;break;default:return}}catch(p){c={value:p,[Ee]:0}}Promise.resolve(c).catch(p=>({value:p,[Ee]:0})).then(p=>{const[u,f]=Te(p);e.postMessage(Object.assign(Object.assign({},u),{id:n}),f),o==="RELEASE"&&(e.removeEventListener("message",i),es(e),Ge in t&&typeof t[Ge]=="function"&&t[Ge]())}).catch(p=>{const[u,f]=Te({value:new TypeError("Unserializable return value"),[Ee]:0});e.postMessage(Object.assign(Object.assign({},u),{id:n}),f)})}),e.start&&e.start()}function si(t){return t.constructor.name==="MessagePort"}function es(t){si(t)&&t.close()}function ts(t,e){return Ke(t,[],e)}function Ce(t){if(t)throw new Error("Proxy has been released and is not useable")}function ss(t){return Y(t,{type:"RELEASE"}).then(()=>{es(t)})}const Me=new WeakMap,Le="FinalizationRegistry"in globalThis&&new FinalizationRegistry(t=>{const e=(Me.get(t)||0)-1;Me.set(t,e),e===0&&ss(t)});function ii(t,e){const s=(Me.get(e)||0)+1;Me.set(e,s),Le&&Le.register(t,e,t)}function ri(t){Le&&Le.unregister(t)}function Ke(t,e=[],s=function(){}){let i=!1;const r=new Proxy(s,{get(n,o){if(Ce(i),o===Js)return()=>{ri(r),ss(t),i=!0};if(o==="then"){if(e.length===0)return{then:()=>r};const h=Y(t,{type:"GET",path:e.map(a=>a.toString())}).then(z);return h.then.bind(h)}return Ke(t,[...e,o])},set(n,o,h){Ce(i);const[a,c]=Te(h);return Y(t,{type:"SET",path:[...e,o].map(p=>p.toString()),value:a},c).then(z)},apply(n,o,h){Ce(i);const a=e[e.length-1];if(a===Ys)return Y(t,{type:"ENDPOINT"}).then(z);if(a==="bind")return Ke(t,e.slice(0,-1));const[c,p]=Tt(h);return Y(t,{type:"APPLY",path:e.map(u=>u.toString()),argumentList:c},p).then(z)},construct(n,o){Ce(i);const[h,a]=Tt(o);return Y(t,{type:"CONSTRUCT",path:e.map(c=>c.toString()),argumentList:h},a).then(z)}});return ii(r,t),r}function ni(t){return Array.prototype.concat.apply([],t)}function Tt(t){const e=t.map(Te);return[e.map(s=>s[0]),ni(e.map(s=>s[1]))]}const is=new WeakMap;function rs(t,e){return is.set(t,e),t}function oi(t){return Object.assign(t,{[Kt]:!0})}function Te(t){for(const[e,s]of Jt)if(s.canHandle(t)){const[i,r]=s.serialize(t);return[{type:"HANDLER",name:e,value:i},r]}return[{type:"RAW",value:t},is.get(t)||[]]}function z(t){switch(t.type){case"HANDLER":return Jt.get(t.name).deserialize(t.value);case"RAW":return t.value}}function Y(t,e,s){return new Promise(i=>{const r=ai();t.addEventListener("message",function n(o){!o.data||!o.data.id||o.data.id!==r||(t.removeEventListener("message",n),i(o.data))}),t.start&&t.start(),t.postMessage(Object.assign({id:r},e),s)})}function ai(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=ft(class extends gt{constructor(t){var e;if(super(t),t.type!==pt.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,r;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.st)!=null&&i.has(n))&&this.it.add(n);return this.render(e)}const s=t.element.classList;for(const n of this.it)n in e||(s.remove(n),this.it.delete(n));for(const n in e){const o=!!e[n];o===this.it.has(n)||(r=this.st)!=null&&r.has(n)||(o?(s.add(n),this.it.add(n)):(s.remove(n),this.it.delete(n)))}return V}});var ee,O,te;class ns{constructor({renderCallback:e}){$(this,ee,!1);$(this,O,null);$(this,te,void 0);d(this,O,null),d(this,te,e),this.render=this.render.bind(this)}start(){d(this,ee,!0),d(this,O,requestAnimationFrame(this.render))}stop(){l(this,O)&&cancelAnimationFrame(l(this,O)),d(this,ee,!1)}render(){l(this,te)&&l(this,te).call(this),l(this,ee)&&d(this,O,requestAnimationFrame(this.render))}}ee=new WeakMap,O=new WeakMap,te=new WeakMap;const li="/nikku/assets/audio-source-68bef94d.js";var v,P,m,S,j,D,B,k,N,L,_e,Ye,Oe,os;class hi{constructor(e){$(this,_e);$(this,Oe);$(this,v,void 0);$(this,P,void 0);$(this,m,void 0);$(this,S,void 0);$(this,j,void 0);$(this,D,void 0);$(this,B,void 0);$(this,k,void 0);$(this,N,void 0);$(this,L,void 0);this.metadata=null,d(this,v,null),d(this,P,[]),d(this,m,null),d(this,S,null),d(this,j,0),d(this,D,!1),d(this,B,!0),d(this,k,!1),d(this,N,0),d(this,L,null),this.options=e,this.init()}async init(e){if(e?(this.metadata=e,d(this,v,new AudioContext({sampleRate:e.sampleRate})),l(this,v).audioWorklet&&await l(this,v).audioWorklet.addModule(li),d(this,L,new ns({renderCallback:be(this,Oe,os).bind(this)}))):(this.metadata=null,d(this,v,null),d(this,L,null)),d(this,P,[!0]),this.metadata&&this.metadata.numberTracks>1){d(this,P,[]);for(let s=0;s<this.metadata.numberTracks;s++)s===0?l(this,P).push(!0):l(this,P).push(!1)}d(this,m,null),d(this,S,null),d(this,j,0),d(this,D,!0),d(this,B,!1),d(this,k,!1),d(this,N,1)}async destroy(){await this.pause(),this.init()}async start(){if(!this.metadata||!l(this,v))return;const{totalSamples:e,sampleRate:s}=this.metadata,i=e/s,r=Math.min(i,3),n=r*s;console.time("getSamples");const o=await this.options.decodeSamples(0,n);console.timeEnd("getSamples"),be(this,_e,Ye).call(this,o,0);const h=[];for(let a=r;a<i;a+=10)a+10<i?h.push({offset:a,size:10}):h.push({offset:a,size:i-a});(async()=>{for(const a of h){console.time("getSamples");const c=await this.options.decodeSamples(a.offset*s,a.size*s);console.timeEnd("getSamples"),be(this,_e,Ye).call(this,c,a.offset*s)}})()}initPlayback(e){if(!this.metadata||!l(this,v)||l(this,N)==null)return;const{loopStartSample:s,totalSamples:i,sampleRate:r,trackDescriptions:n}=this.metadata;d(this,m,new AudioWorkletNode(l(this,v),"audio-source-processor",{numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[2],processorOptions:{initialSamples:e,loopStartSample:s,totalSamples:i,sampleRate:r,shouldLoop:l(this,D),trackDescriptions:n,trackStates:l(this,P)}})),l(this,m).port&&(l(this,m).port.addEventListener("message",o=>{switch(o.data.type){case"BUFFER_LOOPED":{console.log("[AudioPlayer]",o.data.type);break}case"BUFFER_ENDED":{console.log("[AudioPlayer]",o.data.type),this.pause(),d(this,B,!0);break}case"TIMESTAMP_REPLY":{d(this,j,o.data.payload.timestamp);break}}}),l(this,m).port.start()),d(this,S,l(this,v).createGain()),l(this,S).gain.value=l(this,N),l(this,m).connect(l(this,S)),l(this,S).connect(l(this,v).destination),d(this,B,!1)}async seek(e){l(this,v)&&(l(this,m)&&l(this,m).port.postMessage({type:"SEEK",payload:{playbackTimeInS:e}}),l(this,k)||await this.play())}async play(){var e;l(this,k)||!l(this,v)||(d(this,k,!0),(e=l(this,L))==null||e.start(),this.options.onPlay(),await l(this,v).resume(),l(this,B)&&this.seek(0))}async pause(){var e;!l(this,k)||!l(this,v)||(d(this,k,!1),(e=l(this,L))==null||e.stop(),this.options.onPause(),await l(this,v).suspend())}async setTrackStates(e){d(this,P,e),l(this,m)&&l(this,m).port.postMessage({type:"UPDATE_TRACK_STATES",payload:{trackStates:l(this,P)}})}async setVolume(e){d(this,N,e),l(this,S)&&(l(this,S).gain.value=e)}setLoop(e){d(this,D,e),l(this,m)&&l(this,m).port.postMessage({type:"UPDATE_SHOULD_LOOP",payload:{shouldLoop:l(this,D)}})}getCurrrentPlaybackTime(){return l(this,m)?l(this,j):0}}v=new WeakMap,P=new WeakMap,m=new WeakMap,S=new WeakMap,j=new WeakMap,D=new WeakMap,B=new WeakMap,k=new WeakMap,N=new WeakMap,L=new WeakMap,_e=new WeakSet,Ye=function(e,s=0){var i;!this.metadata||!l(this,v)||(s===0?(this.initPlayback(e),(i=l(this,L))==null||i.start(),d(this,k,!0),this.options.onPlay()):l(this,m)&&l(this,m).port.postMessage({type:"ADD_SAMPLES",payload:{samples:e,offset:s}},e.map(r=>r.buffer)))},Oe=new WeakSet,os=function(){l(this,m)&&l(this,m).port.postMessage({type:"TIMESTAMP_QUERY"})};var di=Object.defineProperty,ci=Object.getOwnPropertyDescriptor,C=(t,e,s,i)=>{for(var r=i>1?void 0:i?ci(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&di(e,s,r),r},ui=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)},A=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},w=(t,e,s)=>(ui(t,e,"access private method"),s),Q,fe,mt,as,Je,ls,Qe,hs,ge,Be,et,ds,tt,cs,st,us,it,ps,rt,fs,nt,gs;let y=class extends E{constructor(){super(...arguments),A(this,Q),A(this,mt),A(this,Je),A(this,Qe),A(this,ge),A(this,et),A(this,tt),A(this,st),A(this,it),A(this,rt),A(this,nt),this.playPauseIcon="play",this.loop="on",this.volume=1,this.muted=!1,this.progressMax=0,this.progressValue=0,this.timeDisplayMax=0,this.timeDisplayValue=0,this.tracksCount=1,this.tracksActive=[!0],this.disabled=!0,this.fileDraggingOver=!1,this.trackTitle="",this.errorMessage="",this.audioPlayer=null,this.workerInstance=ts(new Worker(new URL("/nikku/assets/worker-bf898afb.js",self.location))),this.timer=new ns({renderCallback:()=>{if(!this.audioPlayer)return;const t=this.audioPlayer.getCurrrentPlaybackTime();this.progressValue=t,this.timeDisplayValue=t}})}render(){return M`
      <div
        id="error"
        class=${q({hidden:!this.errorMessage})}
      >
        ${this.errorMessage}
      </div>
      <main id="main">
        <div id="track-title">${this.trackTitle}</div>
        <div id="controls-tracks">
          <controls-tracks
            ?disabled=${this.disabled}
            count=${this.tracksCount}
            .active=${this.tracksActive}
            @tracksActiveChange=${w(this,et,ds)}
          ></controls-tracks>
        </div>
        <div id="controls-time-display">
          <controls-time-display
            ?disabled=${this.disabled}
            value=${this.timeDisplayValue}
            max=${this.timeDisplayMax}
          ></controls-time-display>
        </div>
        <div id="controls-progress">
          <controls-progress
            ?disabled=${this.disabled}
            value=${this.progressValue}
            max=${this.progressMax}
            @progressValueChange=${w(this,st,us)}
          ></controls-progress>
        </div>
        <label id="controls-select-file-container">
          <input
            type="file"
            id="controls-select-file"
            accept=".brstm"
            @change=${w(this,Je,ls)}
          />
          <span id="controls-select-file-custom"></span>
        </label>

        <div id="controls-play-pause">
          <controls-play-pause
            ?disabled=${this.disabled}
            mode=${this.playPauseIcon}
            @playPauseClick=${w(this,tt,cs)}
          ></controls-play-pause>
        </div>
        <div id="controls-others">
          <controls-loop
            ?disabled=${this.disabled}
            mode=${this.loop}
            @loopClick=${w(this,it,ps)}
          ></controls-loop>
          <controls-volume
            ?disabled=${this.disabled}
            ?muted=${this.muted}
            volume=${this.volume}
            @mutedChange=${w(this,rt,fs)}
            @volumeChange=${w(this,nt,gs)}
          ></controls-volume>
        </div>
      </main>
      <div
        id="drag-and-drop-overlay"
        class=${q({hidden:!this.fileDraggingOver})}
      >
        Drop BRSTM file to start playback
      </div>
    `}firstUpdated(){window.addEventListener("dragover",s=>{s.preventDefault(),this.fileDraggingOver=!0}),window.addEventListener("dragend",s=>{this.fileDraggingOver=!1}),window.addEventListener("dragleave",s=>{this.fileDraggingOver=!1}),window.addEventListener("drop",s=>{if(s.preventDefault(),this.fileDraggingOver=!1,!s.dataTransfer||!s.dataTransfer.items||!s.dataTransfer.items[0]||s.dataTransfer.items[0].kind!=="file"){w(this,Q,fe).call(this,new Error("No file read"));return}const i=s.dataTransfer.items[0].getAsFile();if(!i){w(this,Q,fe).call(this,new Error("No file read"));return}ms(i).then(w(this,ge,Be).bind(this))});const e=new URL(window.location.href).searchParams.get("input");e&&w(this,Qe,hs).call(this,e)}};Q=new WeakSet;fe=function(t){this.errorMessage=t.message+t.stack};mt=new WeakSet;as=function(){this.errorMessage=""};Je=new WeakSet;ls=function(t){const e=t.target.files;if(!e||!e.length){w(this,Q,fe).call(this,new Error("No file read"));return}const s=e[0];ms(s).then(w(this,ge,Be).bind(this))};Qe=new WeakSet;hs=async function(t){const e=await fetch(t),s=t.split("/"),i=s[s.length-1],r=await e.arrayBuffer();w(this,ge,Be).call(this,{buffer:r,fileName:i})};ge=new WeakSet;Be=async function({buffer:t,fileName:e}){var s;if(w(this,mt,as).call(this),!(!t||!(t instanceof ArrayBuffer))){e&&(this.trackTitle=e);try{await this.workerInstance.init(rs(t,[t]));const i=await this.workerInstance.getMetadata();if(this.audioPlayer?await this.audioPlayer.destroy():this.audioPlayer=new hi({onPlay:()=>{this.playPauseIcon="pause",this.timer.start()},onPause:()=>{this.playPauseIcon="play",this.timer.stop()},decodeSamples:async(o,h)=>await this.workerInstance.getSamples(o,h)||[]}),!i)throw new Error("metadata is undefined");await this.audioPlayer.init(i),await this.audioPlayer.start();const r=i.totalSamples/i.sampleRate,n=i.numberTracks;this.muted?this.audioPlayer.setVolume(0):this.audioPlayer.setVolume(this.volume),this.playPauseIcon="pause",this.progressMax=r,this.timeDisplayMax=r,this.tracksCount=n,this.tracksActive=new Array(n).fill(!0).map((o,h)=>h===0),this.disabled=!1,(s=this.audioPlayer)==null||s.play()}catch(i){w(this,Q,fe).call(this,i)}}};et=new WeakSet;ds=function(t){var s;const e=t.detail.active;this.tracksActive=e,(s=this.audioPlayer)==null||s.setTrackStates(e)};tt=new WeakSet;cs=function(t){var s,i;const e=t.detail.mode;this.playPauseIcon=e,e==="play"?(s=this.audioPlayer)==null||s.pause():e==="pause"&&((i=this.audioPlayer)==null||i.play())};st=new WeakSet;us=function(t){var s;const e=t.detail.value;this.progressValue=e,this.timeDisplayValue=e,(s=this.audioPlayer)==null||s.seek(e)};it=new WeakSet;ps=function(t){var s,i;const e=t.detail.mode;this.loop=e,e==="on"?(s=this.audioPlayer)==null||s.setLoop(!0):e==="off"&&((i=this.audioPlayer)==null||i.setLoop(!1))};rt=new WeakSet;fs=function(t){var s,i;const e=t.detail.muted;this.muted=e,e?(s=this.audioPlayer)==null||s.setVolume(0):(i=this.audioPlayer)==null||i.setVolume(this.volume)};nt=new WeakSet;gs=function(t){var s;const e=t.detail.volume;this.volume=e,this.muted=!1,(s=this.audioPlayer)==null||s.setVolume(e)};y.styles=U`
    #error {
      padding: 0.6rem;
      margin-top: 0.6rem;
      margin-bottom: 0.6rem;
      color: #ff4136;
      border: 1px solid currentColor;
      padding: 0.6rem;
    }
    #error.hidden {
      display: none;
    }
    #drag-and-drop-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--primary);
      font-size: 2rem;
      background: var(--white-lighter);
      z-index: 100;
      user-select: none;
    }
    #drag-and-drop-overlay:before {
      content: ' ';
      position: absolute;
      left: 1rem;
      right: 1rem;
      top: 1rem;
      bottom: 1rem;
      border: 1rem dashed currentColor;
    }
    #drag-and-drop-overlay.hidden {
      display: none;
    }

    #main {
      margin-top: 100px;
      display: grid;
      grid-template-columns: 1fr 80px 1fr;
      grid-template-rows: 20px 15px 24px 80px auto;
      row-gap: 10px;
      column-gap: 2rem;
      margin-bottom: 10px;
    }
    #track-title {
      grid-column: 1 / span 2;
      grid-row: 1;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    #controls-time-display {
      grid-column: 3;
      grid-row: 1;
    }
    #controls-progress {
      grid-column: 1 / span 3;
      grid-row: 2;
    }
    #controls-select-file-container {
      grid-column: 1 / span 3;
      grid-row: 3;
    }
    #controls-tracks {
      grid-column: 1;
      grid-row: 4 / span 2;
    }
    #controls-play-pause {
      grid-column: 2;
      grid-row: 4;
    }
    #controls-others {
      grid-column: 3;
      grid-row: 4;

      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }
    controls-loop {
      height: 40px;
    }
    controls-volume {
      margin-inline-start: 10px;
      height: 40px;
    }

    @media (max-width: 640px) {
      #main {
        margin-top: 50px;
        grid-template-rows: 20px 20px 15px 24px 80px auto;
      }
      #track-title {
        grid-column: 1 / span 3;
        grid-row: 1;
      }
      #controls-time-display {
        grid-column: 1 / span 3;
        grid-row: 2;
      }
      #controls-progress {
        grid-column: 1 / span 3;
        grid-row: 3;
      }
      #controls-select-file-container {
        grid-column: 1 / span 3;
        grid-row: 4;
      }
      #controls-play-pause {
        grid-column: 2;
        grid-row: 5;
      }
      #controls-others {
        grid-column: 1 / span 3;
        grid-row: 6;
        justify-content: center;
      }
      #controls-tracks {
        grid-column: 1 / span 3;
        grid-row: 7;
      }
    }

    /* Modified from "file" from https://github.com/mdo/wtf-forms/blob/master/wtf-forms.css */
    #controls-select-file-container {
      position: relative;
      display: inline-block;
      cursor: pointer;
      width: 80px;
    }
    #controls-select-file-container > input {
      margin: 0;
      opacity: 0;
      height: 24px;
      width: 100%;
    }
    #controls-select-file-custom {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;

      z-index: 5;

      box-sizing: border-box;
      border-radius: 5px;
      color: var(--primary);
      background-color: var(--primary-lightest-2);
      user-select: none;
      font-size: 12px;
      line-height: 16px;
      height: 24px;
      display: inline-flex;
      align-items: center;
      padding: 2px 4px;
      text-align: center;
    }
    #controls-select-file-custom:after {
      content: 'Select file...';
    }
    #controls-select-file-custom:hover {
      background-color: var(--primary-lightest-1);
    }

    #controls-select-fileinput:focus ~ #controls-select-file-custom {
      box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.2rem var(--primary-dark);
    }

    @media (prefers-color-scheme: dark) {
      #controls-select-file-custom {
        color: var(--main-text-color);
      }
    }
  `;C([b()],y.prototype,"playPauseIcon",2);C([b()],y.prototype,"loop",2);C([b()],y.prototype,"volume",2);C([b()],y.prototype,"muted",2);C([b()],y.prototype,"progressMax",2);C([b()],y.prototype,"progressValue",2);C([b()],y.prototype,"timeDisplayMax",2);C([b()],y.prototype,"timeDisplayValue",2);C([b()],y.prototype,"tracksCount",2);C([b()],y.prototype,"tracksActive",2);C([b()],y.prototype,"disabled",2);C([b()],y.prototype,"fileDraggingOver",2);C([b()],y.prototype,"trackTitle",2);C([b()],y.prototype,"errorMessage",2);y=C([W("nikku-main")],y);function ms(t){return new Promise(e=>{const s=new FileReader;s.addEventListener("loadend",i=>{const r=s.result;e({buffer:r,fileName:t.name})}),s.readAsArrayBuffer(t)})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ot extends gt{constructor(e){if(super(e),this.et=g,e.type!==pt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===g||e==null)return this.vt=void 0,this.et=e;if(e===V)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;const s=[e];return s.raw=s,this.vt={_$litType$:this.constructor.resultType,strings:s,values:[]}}}ot.directiveName="unsafeHTML",ot.resultType=1;const me=ft(ot),pi=`<svg width="100" height="100" viewBox="0 0 100 100" fill="#198813" xmlns="http://www.w3.org/2000/svg">\r
<path d="M77.9375 48.2609C79.2874 49.0274 79.2874 50.9726 77.9375 51.7391L38.2376 74.2841C36.9043 75.0413 35.25 74.0783 35.25 72.545L35.25 27.455C35.25 25.9217 36.9044 24.9587 38.2376 25.7159L77.9375 48.2609Z" />\r
</svg>\r
`,fi=`<svg width="100" height="100" viewBox="0 0 100 100" fill="#198813" xmlns="http://www.w3.org/2000/svg">\r
<rect x="27" y="28" width="16" height="45" rx="2" />\r
<rect x="58" y="28" width="15" height="45" rx="2" />\r
</svg>\r
`;var gi=Object.defineProperty,mi=Object.getOwnPropertyDescriptor,vt=(t,e,s,i)=>{for(var r=i>1?void 0:i?mi(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&gi(e,s,r),r},vi=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)},yi=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},_i=(t,e,s)=>(vi(t,e,"access private method"),s),at,vs;let ve=class extends E{constructor(){super(...arguments),yi(this,at),this.disabled=!1,this.mode="play"}render(){return M`<button
      class=${q({button:!0,disabled:this.disabled})}
      ?disabled=${this.disabled}
      @click=${_i(this,at,vs)}
    >
      ${this.mode==="play"?me(pi):me(fi)}
    </button>`}};at=new WeakSet;vs=function(){if(this.disabled)return;const t=this.mode==="play"?"pause":"play";this.dispatchEvent(new CustomEvent("playPauseClick",{detail:{mode:t}})),this.mode=t};ve.styles=U`
    .button {
      all: initial;
      width: 80px;
      height: 80px;
      border-radius: 40px;
    }
    svg {
      width: 100%;
      height: 100%;
    }
    .button:not(.disabled):hover {
      background: var(--primary-lightest-1);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.24);
      cursor: pointer;
    }
    .button.disabled {
      cursor: not-allowed;
    }
  `;vt([_({type:Boolean})],ve.prototype,"disabled",2);vt([_({type:String})],ve.prototype,"mode",2);ve=vt([W("controls-play-pause")],ve);var $i=Object.defineProperty,wi=Object.getOwnPropertyDescriptor,Ne=(t,e,s,i)=>{for(var r=i>1?void 0:i?wi(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&$i(e,s,r),r};let ie=class extends E{constructor(){super(...arguments),this.active=[],this.count=0,this.disabled=!1}render(){return M`
      <div
        id="container"
        class=${q({hidden:this.count===1||this.disabled})}
      >
        Active tracks:
        <ol id="list">
          ${Array(this.count).fill(0).map((t,e)=>M`<li>
                <label>
                  <input
                    type="checkbox"
                    ?checked="${this.active[e]}"
                    @input=${s=>{const i=s.target.checked,r=[...this.active];r[e]=i,this.active=r,this.dispatchEvent(new CustomEvent("tracksActiveChange",{detail:{active:r}}))}}
                  />
                  Track ${e+1}
                </label>
              </li>`)}
        </ol>
      </div>
    `}};ie.styles=U`
    .hidden {
      display: none;
    }
    #list {
      list-style: none;
      padding-left: 0;
      margin-top: 6px;
      user-select: none;
    }
    input[type='checkbox'] {
      appearance: none;
      position: relative;
      background: var(--primary-lightest-2);
      border-radius: 2px;
      padding: 2px;
      margin: 0;

      width: 15px;
      height: 15px;
      display: inline-block;
      vertical-align: middle;
      top: -1px;
    }
    input[type='checkbox']:checked:after {
      content: '\u2714';
      position: absolute;
      left: 2px;
      top: 0;

      font-size: 12px;
      line-height: 13px;
      color: var(--primary-darker);
    }
  `;Ne([_({type:Array})],ie.prototype,"active",2);Ne([_({type:Number})],ie.prototype,"count",2);Ne([_({type:Boolean})],ie.prototype,"disabled",2);ie=Ne([W("controls-tracks")],ie);var bi=Object.defineProperty,Ci=Object.getOwnPropertyDescriptor,Re=(t,e,s,i)=>{for(var r=i>1?void 0:i?Ci(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&bi(e,s,r),r};let re=class extends E{constructor(){super(...arguments),this.disabled=!1,this.value=0,this.max=0}render(){return M` <div class="progress-time-display">
      <div class="time" id="current">${Ot(this.value)}</div>
      <div class="separator">/</div>
      <div class="time" id="total">${Ot(this.max)}</div>
    </div>`}};re.styles=U`
    .progress-time-display {
      display: flex;
      justify-content: flex-end;
    }
    .separator {
      margin-inline-start: 4px;
      margin-inline-end: 4px;
    }
    .time {
      width: 3em;
      text-align: center;
    }
    @media (max-width: 640px) {
      .progress-time-display {
        justify-content: flex-start;
      }
      .time {
        text-align: left;
      }
    }
  `;Re([_({type:Boolean})],re.prototype,"disabled",2);Re([_({type:Number})],re.prototype,"value",2);Re([_({type:Number})],re.prototype,"max",2);re=Re([W("controls-time-display")],re);function Ot(t){const e=Dt(Math.floor(t/60)),s=Dt(Math.floor(t%60));return`${e}:${s}`}function Dt(t){return t<10?`0${t}`:t}var xi=Object.defineProperty,Ei=Object.getOwnPropertyDescriptor,Ve=(t,e,s,i)=>{for(var r=i>1?void 0:i?Ei(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&xi(e,s,r),r},ys=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)},Bt=(t,e,s)=>(ys(t,e,"read from private field"),s?s.call(t):e.get(t)),Ai=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},Nt=(t,e,s,i)=>(ys(t,e,"write to private field"),i?i.call(t,s):e.set(t,s),s),J;let ne=class extends E{constructor(){super(...arguments),this.disabled=!1,this.value=0,this.max=0,Ai(this,J,!1),this._cachedProgressBarOffsetLeft=null,this._cachedProgressBarClientWidth=null,this.progressBar=G(),this.progressActive=G(),this.progressIndicator=G(),this.updateProgressFromEvent=t=>{this.refreshCachedValues();let e=0;t instanceof MouseEvent?e=t.clientX:t instanceof TouchEvent&&(e=t.touches[0].clientX);const s=Math.min(1,Math.max(0,(e-(this._cachedProgressBarOffsetLeft??0))/(this._cachedProgressBarClientWidth??1)))*this.max;this.dispatchEvent(new CustomEvent("progressValueChange",{detail:{value:s}})),this.value=s},this.handleDraggingStart=t=>{this.disabled||Bt(this,J)||(Nt(this,J,!0),this.updateProgressFromEvent(t))},this.handleDraggingMove=t=>{this.disabled||!Bt(this,J)||this.updateProgressFromEvent(t)},this.handleDraggingEnd=t=>{this.disabled||Nt(this,J,!1)},this.handleWindowResize=()=>{this._cachedProgressBarOffsetLeft=null,this._cachedProgressBarClientWidth=null,this.refreshCachedValues()}}get percentage(){return this.max<=0?0:this.value/this.max}render(){return M`
      <div class="progress-bar-container">
        <div
          class=${q({"progress-bar":!0,disabled:this.disabled})}
          ${X(this.progressBar)}
        >
          <div class="progress-background"></div>
          <div class="progress-active" ${X(this.progressActive)}></div>
          <div class="progress-indicator" ${X(this.progressIndicator)}></div>
        </div>
      </div>
    `}updated(t){t.has("value")&&this.updateStyles()}updateStyles(){this.progressIndicator.value&&(this.progressIndicator.value.style.transform=`translateX(calc(${this.percentage*(this._cachedProgressBarClientWidth??0)}px - 50%))`),this.progressActive.value&&(this.progressActive.value.style.transform=`scaleX(${this.percentage})`)}refreshCachedValues(){var t,e;this._cachedProgressBarOffsetLeft||(this._cachedProgressBarOffsetLeft=((t=this.progressBar.value)==null?void 0:t.offsetLeft)??0),(!this._cachedProgressBarClientWidth||this._cachedProgressBarClientWidth===1)&&(this._cachedProgressBarClientWidth=((e=this.progressBar.value)==null?void 0:e.clientWidth)??1),this.updateStyles()}firstUpdated(){var t,e;(t=this.progressBar.value)==null||t.addEventListener("mousedown",this.handleDraggingStart,{passive:!0}),document==null||document.addEventListener("mousemove",this.handleDraggingMove,{passive:!0}),document==null||document.addEventListener("mouseup",this.handleDraggingEnd,{passive:!0}),(e=this.progressBar.value)==null||e.addEventListener("touchstart",this.handleDraggingStart,{passive:!0}),document==null||document.addEventListener("touchmove",this.handleDraggingMove,{passive:!0}),document==null||document.addEventListener("touchend",this.handleDraggingEnd,{passive:!0}),window.addEventListener("resize",this.handleWindowResize),this.refreshCachedValues()}disconnectedCallback(){var t,e;(t=this.progressBar.value)==null||t.removeEventListener("mousedown",this.handleDraggingStart),document==null||document.removeEventListener("mousemove",this.handleDraggingMove),document==null||document.removeEventListener("mouseup",this.handleDraggingEnd),(e=this.progressBar.value)==null||e.removeEventListener("touchstart",this.handleDraggingStart),document==null||document.removeEventListener("touchmove",this.handleDraggingMove),document==null||document.removeEventListener("touchend",this.handleDraggingEnd),window.removeEventListener("resize",this.handleWindowResize)}};J=new WeakMap;ne.styles=U`
    .progress-bar-container {
      height: 15px;
    }
    .progress-bar {
      position: relative;
      height: 15px;
      user-select: none;
    }
    .progress-background {
      position: absolute;
      top: 5px;
      width: 100%;
      height: 4px;
      border-radius: 2px;
      background-color: #e0e4e8;
    }
    .progress-active {
      position: absolute;
      top: 5px;
      width: 100%;
      transform-origin: left;
      height: 4px;
      /* NOTE: Because of scaleX transform, this border-radius is also "scaled", need to find a way to have a fixed border-radius*/
      /* border-radius: 2px; */
      background-color: var(--primary);
    }
    .progress-indicator {
      position: absolute;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: var(--primary);
    }
    .disabled {
      cursor: not-allowed;
    }
  `;Ve([_({type:Boolean})],ne.prototype,"disabled",2);Ve([_({type:Number})],ne.prototype,"value",2);Ve([_({type:Number})],ne.prototype,"max",2);ne=Ve([W("controls-progress")],ne);const Pi=`<svg width="100" height="100" viewBox="0 0 100 100" fill="#198813" xmlns="http://www.w3.org/2000/svg">\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.5858 38C37.851 38 38.1054 37.8946 38.2929 37.7071L48.2929 27.7071C48.9229 27.0771 50 27.5233 50 28.4142V71.5858C50 72.4767 48.9229 72.9228 48.2929 72.2929L38.2929 62.2929C38.1054 62.1054 37.851 62 37.5858 62H21C20.4477 62 20 61.5523 20 61V39C20 38.4477 20.4477 38 21 38H37.5858Z"/>\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M71.9382 50.0662C71.7795 42.8723 68.0938 35.4875 61.0359 30.0266C60.5991 29.6887 60.4988 29.0641 60.8236 28.6175L63.1763 25.3825C63.5012 24.9359 64.1276 24.8362 64.5659 25.1722C72.9864 31.628 77.7327 40.6844 77.9368 49.9338C78.1425 59.2585 73.72 68.4296 64.4895 74.9305C64.038 75.2486 63.4157 75.1236 63.1094 74.6641L60.8906 71.3359C60.5842 70.8764 60.71 70.2565 61.16 69.9364C68.7821 64.5159 72.0959 57.2151 71.9382 50.0662Z"/>\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M89.375 50C89.375 35.887 83.3874 22.0191 71.7151 14.0769C71.2585 13.7662 71.1219 13.1482 71.4201 12.6834L73.5799 9.31661C73.8781 8.85175 74.4987 8.71651 74.9565 9.0254C88.6709 18.2782 95.375 34.2625 95.375 50C95.375 65.7375 88.6709 81.7218 74.9565 90.9746C74.4987 91.2835 73.8781 91.1482 73.5799 90.6834L71.4201 87.3166C71.1219 86.8518 71.2585 86.2338 71.7151 85.9231C83.3874 77.9809 89.375 64.113 89.375 50Z"/>\r
</svg>\r
`,Si=`<svg width="100" height="100" viewBox="0 0 100 100" fill="#198813" xmlns="http://www.w3.org/2000/svg">\r
<rect x="81.5937" y="36.1014" width="5.02197" height="34.2892" rx="1" transform="rotate(45 81.5937 36.1014)"/>\r
<rect x="85.1447" y="60.3475" width="5.02197" height="34.2892" rx="1" transform="rotate(135 85.1447 60.3475)"/>\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.5858 38C37.851 38 38.1054 37.8946 38.2929 37.7071L48.2929 27.7071C48.9229 27.0771 50 27.5233 50 28.4142V71.5858C50 72.4767 48.9229 72.9228 48.2929 72.2929L38.2929 62.2929C38.1054 62.1053 37.851 62 37.5858 62H21C20.4477 62 20 61.5523 20 61V39C20 38.4477 20.4477 38 21 38L37.5858 38Z"/>\r
</svg>\r
`;var ki=Object.defineProperty,Mi=Object.getOwnPropertyDescriptor,Ue=(t,e,s,i)=>{for(var r=i>1?void 0:i?Mi(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&ki(e,s,r),r},yt=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)},Rt=(t,e,s)=>(yt(t,e,"read from private field"),s?s.call(t):e.get(t)),Vt=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},Xe=(t,e,s,i)=>(yt(t,e,"write to private field"),i?i.call(t,s):e.set(t,s),s),Li=(t,e,s)=>(yt(t,e,"access private method"),s),H,lt,_s;let oe=class extends E{constructor(){super(...arguments),Vt(this,lt),this.disabled=!1,this.muted=!1,this.volume=1,Vt(this,H,!1),this._cachedVolumeBarOffsetLeft=null,this._cachedVolumeBarClientWidth=null,this.volumeBarContainer=G(),this.volumeFill=G(),this.volumeIndicator=G(),this.updateVolumeFromEvent=t=>{this.refreshCachedValues();let e=0;t instanceof MouseEvent?e=t.clientX:t instanceof TouchEvent&&(e=t.touches[0].clientX);const s=Math.min(1,Math.max(0,(e-(this._cachedVolumeBarOffsetLeft??0))/(this._cachedVolumeBarClientWidth??1)));this.volume=s,this.dispatchEvent(new CustomEvent("volumeChange",{detail:{volume:s}}))},this.handleDraggingStart=t=>{this.disabled||Rt(this,H)||(Xe(this,H,!0),this.updateVolumeFromEvent(t))},this.handleDraggingMove=t=>{this.disabled||!Rt(this,H)||this.updateVolumeFromEvent(t)},this.handleDraggingEnd=t=>{this.disabled||Xe(this,H,!1)},this.handleWindowResize=()=>{this._cachedVolumeBarOffsetLeft=null,this._cachedVolumeBarClientWidth=null,this.refreshCachedValues()}}render(){return M`<div class="volume-container">
      <div class="volume-icon-container" @click=${Li(this,lt,_s)}>
        ${this.muted?me(Si):me(Pi)}
      </div>
      <div
        class=${q({"volume-bar-container":!0,disabled:this.disabled})}
        ${X(this.volumeBarContainer)}
      >
        <div class="volume-bar">
          <div class="volume-background"></div>
          <div class="volume-fill" ${X(this.volumeFill)}></div>
          <div class="volume-indicator" ${X(this.volumeIndicator)}></div>
        </div>
      </div>
    </div>`}updateStyles(){this.volumeIndicator.value&&(this.volumeIndicator.value.style.transform=this.muted?"":`translateX(calc(${this.volume*(this._cachedVolumeBarClientWidth??0)}px - 50%))`),this.volumeFill.value&&(this.volumeFill.value.style.transform=this.muted?"scaleX(0)":`scaleX(${this.volume})`)}refreshCachedValues(){var t,e;this._cachedVolumeBarOffsetLeft||(this._cachedVolumeBarOffsetLeft=((t=this.volumeBarContainer.value)==null?void 0:t.offsetLeft)??0),(!this._cachedVolumeBarClientWidth||this._cachedVolumeBarClientWidth===1)&&(this._cachedVolumeBarClientWidth=((e=this.volumeBarContainer.value)==null?void 0:e.clientWidth)??1),this.updateStyles()}updated(t){(t.has("muted")||t.has("volume"))&&this.updateStyles()}firstUpdated(){var t,e;Xe(this,H,!1),(t=this.volumeBarContainer.value)==null||t.addEventListener("mousedown",this.handleDraggingStart,{passive:!0}),document==null||document.addEventListener("mousemove",this.handleDraggingMove,{passive:!0}),document==null||document.addEventListener("mouseup",this.handleDraggingEnd,{passive:!0}),(e=this.volumeBarContainer.value)==null||e.addEventListener("touchstart",this.handleDraggingStart,{passive:!0}),document==null||document.addEventListener("touchmove",this.handleDraggingMove,{passive:!0}),document==null||document.addEventListener("touchend",this.handleDraggingEnd,{passive:!0}),window.addEventListener("resize",this.handleWindowResize),this.refreshCachedValues()}disconnectedCallback(){var t,e;(t=this.volumeBarContainer.value)==null||t.removeEventListener("mousedown",this.handleDraggingStart),document==null||document.removeEventListener("mousemove",this.handleDraggingMove),document==null||document.removeEventListener("mouseup",this.handleDraggingEnd),(e=this.volumeBarContainer.value)==null||e.removeEventListener("touchstart",this.handleDraggingStart),document==null||document.removeEventListener("touchmove",this.handleDraggingMove),document==null||document.removeEventListener("touchend",this.handleDraggingEnd),window.removeEventListener("resize",this.handleWindowResize)}};H=new WeakMap;lt=new WeakSet;_s=function(){const t=!this.muted;this.muted=t,this.dispatchEvent(new CustomEvent("mutedChange",{detail:{muted:t}}))};oe.styles=U`
    :root {
      margin: 0;
      padding: 0;
    }
    svg {
      width: 100%;
      height: 100%;
    }
    .volume-icon-container {
      width: 40px;
    }
    .volume-container {
      display: flex;
      align-items: center;
    }
    .volume-bar-container {
      height: 40px;
      margin-left: 8px;
      display: flex;
      align-items: center;
      user-select: none;
    }
    .volume-bar {
      position: relative;
      width: 100px;
      height: 10px;
    }
    .volume-background {
      position: absolute;
      top: 4px;
      width: 100%;
      height: 2px;
      border-radius: 1px;
      background-color: #e0e4e8;
    }
    .volume-fill {
      position: absolute;
      top: 4px;
      width: 100%;
      transform-origin: left;
      height: 2px;
      /* NOTE: Because of scaleX transform, this border-radius is also "scaled", need to find a way to have a fixed border-radius*/
      /* border-radius: 1px; */
      background-color: var(--primary);
    }
    .volume-indicator {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--primary);
    }
    .disabled {
      cursor: not-allowed;
    }
  `;Ue([_({type:Boolean})],oe.prototype,"disabled",2);Ue([_({type:Boolean})],oe.prototype,"muted",2);Ue([_({type:Number})],oe.prototype,"volume",2);oe=Ue([W("controls-volume")],oe);const Ti=`<svg width="100" height="100" viewBox="0 0 100 100" fill="#198813" xmlns="http://www.w3.org/2000/svg">\r
<path d="M20 38C20 29.5 26.5 20 38 20L62 20C72 20 80 28 80 38L80 39L70 39C70 39 70 42.5 70 38C70 33.5 66.5 30 62 30C57.5 30 42.5 30 38 30C33.5 30 30 33.5 30 38C30 42.5 30 41 30 41L20 41L20 38Z"/>\r
<path d="M74.5 54L60.2106 39L88.7894 39L74.5 54Z"/>\r
<path d="M79 61C79 69.5 72.5 79 61 79L37 79C27 79 19 71 19 61L19 60L29 60C29 60 29 56.5 29 61C29 65.5 32.5 69 37 69C41.5 69 56.5 69 61 69C65.5 69 69 65.5 69 61C69 56.5 69 58 69 58L79 58L79 61Z"/>\r
<path d="M24.5 45L38.7894 60H10.2106L24.5 45Z"/>\r
</svg>\r
`;var Oi=Object.defineProperty,Di=Object.getOwnPropertyDescriptor,_t=(t,e,s,i)=>{for(var r=i>1?void 0:i?Di(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Oi(e,s,r),r},Bi=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)},Ni=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},Ri=(t,e,s)=>(Bi(t,e,"access private method"),s),ht,$s;let ye=class extends E{constructor(){super(...arguments),Ni(this,ht),this.disabled=!1,this.mode="on"}render(){return M`<button
      class=${q({on:this.mode==="on",off:this.mode==="off",disabled:this.disabled,button:!0})}
      @click="${Ri(this,ht,$s)}"
    >
      ${me(Ti)}
    </button>`}};ht=new WeakSet;$s=function(){if(this.disabled)return;const t=this.mode==="on"?"off":"on";this.dispatchEvent(new CustomEvent("loopClick",{detail:{mode:t}})),this.mode=t};ye.styles=U`
    :root {
      margin: 0;
      padding: 0;
    }
    .button {
      all: initial;
      width: 40px;
      height: 40px;
      border-radius: 20px;
    }
    svg {
      width: 100%;
      height: 100%;
    }
    .button:not(.disabled):hover {
      background: var(--primary-lightest-1);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.24);
      cursor: pointer;
    }
    .button.off > svg {
      fill: var(--primary-lighter);
    }
    .button.disabled:hover {
      cursor: not-allowed;
    }
  `;_t([_({type:Boolean})],ye.prototype,"disabled",2);_t([_({type:String})],ye.prototype,"mode",2);ye=_t([W("controls-loop")],ye);
