import{r as a,R as oe}from"./react-Dk2Bg5U_.js";import"./react-dom-jO352gp3.js";import{i as g,r as D,g as V,A as X,p as q,s as N,j as T,m as le,a as ie,c as se,b as z,d as K}from"./@remix-run-CpOLBhuy.js";/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}const k=a.createContext(null),Q=a.createContext(null),b=a.createContext(null),_=a.createContext(null),R=a.createContext({outlet:null,matches:[],isDataRoute:!1}),Y=a.createContext(null);function ue(e,t){let{relative:n}=t===void 0?{}:t;w()||g(!1);let{basename:r,navigator:l}=a.useContext(b),{hash:i,pathname:o,search:d}=F(e,{relative:n}),f=o;return r!=="/"&&(f=o==="/"?r:T([r,o])),l.createHref({pathname:f,search:d,hash:i})}function w(){return a.useContext(_)!=null}function L(){return w()||g(!1),a.useContext(_).location}function Z(e){a.useContext(b).static||a.useLayoutEffect(e)}function H(){let{isDataRoute:e}=a.useContext(R);return e?Pe():ce()}function ce(){w()||g(!1);let e=a.useContext(k),{basename:t,future:n,navigator:r}=a.useContext(b),{matches:l}=a.useContext(R),{pathname:i}=L(),o=JSON.stringify(V(l,n.v7_relativeSplatPath)),d=a.useRef(!1);return Z(()=>{d.current=!0}),a.useCallback(function(c,u){if(u===void 0&&(u={}),!d.current)return;if(typeof c=="number"){r.go(c);return}let s=D(c,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(s.pathname=s.pathname==="/"?t:T([t,s.pathname])),(u.replace?r.replace:r.push)(s,u.state,u)},[t,r,o,i,e])}const fe=a.createContext(null);function de(e){let t=a.useContext(R).outlet;return t&&a.createElement(fe.Provider,{value:e},t)}function We(){let{matches:e}=a.useContext(R),t=e[e.length-1];return t?t.params:{}}function F(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=a.useContext(b),{matches:l}=a.useContext(R),{pathname:i}=L(),o=JSON.stringify(V(l,r.v7_relativeSplatPath));return a.useMemo(()=>D(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function he(e,t){return pe(e,t)}function pe(e,t,n,r){w()||g(!1);let{navigator:l}=a.useContext(b),{matches:i}=a.useContext(R),o=i[i.length-1],d=o?o.params:{};o&&o.pathname;let f=o?o.pathnameBase:"/";o&&o.route;let c=L(),u;if(t){var s;let h=typeof t=="string"?q(t):t;f==="/"||(s=h.pathname)!=null&&s.startsWith(f)||g(!1),u=h}else u=c;let p=u.pathname||"/",C=p;if(f!=="/"){let h=f.replace(/^\//,"").split("/");C="/"+p.replace(/^\//,"").split("/").slice(h.length).join("/")}let v=le(e,{pathname:C}),x=xe(v&&v.map(h=>Object.assign({},h,{params:Object.assign({},d,h.params),pathname:T([f,l.encodeLocation?l.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?f:T([f,l.encodeLocation?l.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),i,n,r);return t&&x?a.createElement(_.Provider,{value:{location:U({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:X.Pop}},x):x}function ve(){let e=be(),t=ie(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},t),n?a.createElement("pre",{style:l},n):null,null)}const me=a.createElement(ve,null);class ge extends a.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?a.createElement(R.Provider,{value:this.props.routeContext},a.createElement(Y.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ce(e){let{routeContext:t,match:n,children:r}=e,l=a.useContext(k);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),a.createElement(R.Provider,{value:t},r)}function xe(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,d=(l=n)==null?void 0:l.errors;if(d!=null){let u=o.findIndex(s=>s.route.id&&(d==null?void 0:d[s.route.id])!==void 0);u>=0||g(!1),o=o.slice(0,Math.min(o.length,u+1))}let f=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<o.length;u++){let s=o[u];if((s.route.HydrateFallback||s.route.hydrateFallbackElement)&&(c=u),s.route.id){let{loaderData:p,errors:C}=n,v=s.route.loader&&p[s.route.id]===void 0&&(!C||C[s.route.id]===void 0);if(s.route.lazy||v){f=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,s,p)=>{let C,v=!1,x=null,h=null;n&&(C=d&&s.route.id?d[s.route.id]:void 0,x=s.route.errorElement||me,f&&(c<0&&p===0?(v=!0,h=null):c===p&&(v=!0,h=s.route.hydrateFallbackElement||null)));let P=t.concat(o.slice(0,p+1)),y=()=>{let m;return C?m=x:v?m=h:s.route.Component?m=a.createElement(s.route.Component,null):s.route.element?m=s.route.element:m=u,a.createElement(Ce,{match:s,routeContext:{outlet:u,matches:P,isDataRoute:n!=null},children:m})};return n&&(s.route.ErrorBoundary||s.route.errorElement||p===0)?a.createElement(ge,{location:n.location,revalidation:n.revalidation,component:x,error:C,children:y(),routeContext:{outlet:null,matches:P,isDataRoute:!0}}):y()},null)}var ee=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ee||{}),O=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(O||{});function ye(e){let t=a.useContext(k);return t||g(!1),t}function Ee(e){let t=a.useContext(Q);return t||g(!1),t}function Re(e){let t=a.useContext(R);return t||g(!1),t}function te(e){let t=Re(),n=t.matches[t.matches.length-1];return n.route.id||g(!1),n.route.id}function be(){var e;let t=a.useContext(Y),n=Ee(O.UseRouteError),r=te(O.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Pe(){let{router:e}=ye(ee.UseNavigateStable),t=te(O.UseNavigateStable),n=a.useRef(!1);return Z(()=>{n.current=!0}),a.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,U({fromRouteId:t},i)))},[e,t])}function ze(e){let{to:t,replace:n,state:r,relative:l}=e;w()||g(!1);let{future:i,static:o}=a.useContext(b),{matches:d}=a.useContext(R),{pathname:f}=L(),c=H(),u=D(t,V(d,i.v7_relativeSplatPath),f,l==="path"),s=JSON.stringify(u);return a.useEffect(()=>c(JSON.parse(s),{replace:n,state:r,relative:l}),[c,s,l,n,r]),null}function Ke(e){return de(e.context)}function we(e){g(!1)}function Le(e){let{basename:t="/",children:n=null,location:r,navigationType:l=X.Pop,navigator:i,static:o=!1,future:d}=e;w()&&g(!1);let f=t.replace(/^\/*/,"/"),c=a.useMemo(()=>({basename:f,navigator:i,static:o,future:U({v7_relativeSplatPath:!1},d)}),[f,d,i,o]);typeof r=="string"&&(r=q(r));let{pathname:u="/",search:s="",hash:p="",state:C=null,key:v="default"}=r,x=a.useMemo(()=>{let h=N(u,f);return h==null?null:{location:{pathname:h,search:s,hash:p,state:C,key:v},navigationType:l}},[f,u,s,p,C,v,l]);return x==null?null:a.createElement(b.Provider,{value:c},a.createElement(_.Provider,{children:n,value:x}))}function $e(e){let{children:t,location:n}=e;return he(J(t),n)}new Promise(()=>{});function J(e,t){t===void 0&&(t=[]);let n=[];return a.Children.forEach(e,(r,l)=>{if(!a.isValidElement(r))return;let i=[...t,l];if(r.type===a.Fragment){n.push.apply(n,J(r.props.children,i));return}r.type!==we&&g(!1),!r.props.index||!r.props.children||g(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=J(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}function ne(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function Ne(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ue(e,t){return e.button===0&&(!t||t==="_self")&&!Ne(e)}const Se=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Te=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Oe="6";try{window.__reactRouterVersion=Oe}catch{}const Be=a.createContext({isTransitioning:!1}),ke="startTransition",$=oe[ke];function Ge(e){let{basename:t,children:n,future:r,window:l}=e,i=a.useRef();i.current==null&&(i.current=se({window:l,v5Compat:!0}));let o=i.current,[d,f]=a.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},u=a.useCallback(s=>{c&&$?$(()=>f(s)):f(s)},[f,c]);return a.useLayoutEffect(()=>o.listen(u),[o,u]),a.createElement(Le,{basename:t,children:n,location:d.location,navigationType:d.action,navigator:o,future:r})}const _e=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ie=a.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:i,replace:o,state:d,target:f,to:c,preventScrollReset:u,unstable_viewTransition:s}=t,p=ne(t,Se),{basename:C}=a.useContext(b),v,x=!1;if(typeof c=="string"&&Fe.test(c)&&(v=c,_e))try{let m=new URL(window.location.href),E=c.startsWith("//")?new URL(m.protocol+c):new URL(c),S=N(E.pathname,C);E.origin===m.origin&&S!=null?c=S+E.search+E.hash:x=!0}catch{}let h=ue(c,{relative:l}),P=Me(c,{replace:o,state:d,target:f,preventScrollReset:u,relative:l,unstable_viewTransition:s});function y(m){r&&r(m),m.defaultPrevented||P(m)}return a.createElement("a",B({},p,{href:v||h,onClick:x||i?r:y,ref:n,target:f}))}),Xe=a.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:l=!1,className:i="",end:o=!1,style:d,to:f,unstable_viewTransition:c,children:u}=t,s=ne(t,Te),p=F(f,{relative:s.relative}),C=L(),v=a.useContext(Q),{navigator:x,basename:h}=a.useContext(b),P=v!=null&&Je(p)&&c===!0,y=x.encodeLocation?x.encodeLocation(p).pathname:p.pathname,m=C.pathname,E=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;l||(m=m.toLowerCase(),E=E?E.toLowerCase():null,y=y.toLowerCase()),E&&h&&(E=N(E,h)||E);const S=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let I=m===y||!o&&m.startsWith(y)&&m.charAt(S)==="/",W=E!=null&&(E===y||!o&&E.startsWith(y)&&E.charAt(y.length)==="/"),j={isActive:I,isPending:W,isTransitioning:P},re=I?r:void 0,M;typeof i=="function"?M=i(j):M=[i,I?"active":null,W?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let ae=typeof d=="function"?d(j):d;return a.createElement(Ie,B({},s,{"aria-current":re,className:M,ref:n,style:ae,to:f,unstable_viewTransition:c}),typeof u=="function"?u(j):u)});var A;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(A||(A={}));var G;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(G||(G={}));function je(e){let t=a.useContext(k);return t||g(!1),t}function Me(e,t){let{target:n,replace:r,state:l,preventScrollReset:i,relative:o,unstable_viewTransition:d}=t===void 0?{}:t,f=H(),c=L(),u=F(e,{relative:o});return a.useCallback(s=>{if(Ue(s,n)){s.preventDefault();let p=r!==void 0?r:z(c)===z(u);f(e,{replace:p,state:l,preventScrollReset:i,relative:o,unstable_viewTransition:d})}},[c,f,u,r,l,n,e,i,o,d])}function Je(e,t){t===void 0&&(t={});let n=a.useContext(Be);n==null&&g(!1);let{basename:r}=je(A.useViewTransitionState),l=F(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=N(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=N(n.nextLocation.pathname,r)||n.nextLocation.pathname;return K(l.pathname,o)!=null||K(l.pathname,i)!=null}export{Ge as B,Ie as L,Xe as N,Ke as O,$e as R,H as a,we as b,ze as c,We as u};