import{_ as W,a as A}from"./@babel-JV_V2uDp.js";import{r as s}from"./react-Dk2Bg5U_.js";import{u as I}from"./use-latest-Bl-cOoxe.js";import{u as k}from"./use-composed-ref-BtW8ChFA.js";var H={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},B=function(t){Object.keys(H).forEach(function(r){t.style.setProperty(r,H[r],"important")})},L=B,n=null,R=function(t,r){var e=t.scrollHeight;return r.sizingStyle.boxSizing==="border-box"?e+r.borderSize:e-r.paddingSize};function M(i,t,r,e){r===void 0&&(r=1),e===void 0&&(e=1/0),n||(n=document.createElement("textarea"),n.setAttribute("tabindex","-1"),n.setAttribute("aria-hidden","true"),L(n)),n.parentNode===null&&document.body.appendChild(n);var o=i.paddingSize,u=i.borderSize,a=i.sizingStyle,c=a.boxSizing;Object.keys(a).forEach(function(v){var p=v;n.style[p]=a[p]}),L(n),n.value=t;var d=R(n,i);n.value=t,d=R(n,i),n.value="x";var l=n.scrollHeight-o,h=l*r;c==="border-box"&&(h=h+o+u),d=Math.max(h,d);var f=l*e;return c==="border-box"&&(f=f+o+u),d=Math.min(f,d),[d,l]}var w=function(){},N=function(t,r){return t.reduce(function(e,o){return e[o]=r[o],e},{})},_=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],$=!!document.documentElement.currentStyle,j=function(t){var r=window.getComputedStyle(t);if(r===null)return null;var e=N(_,r),o=e.boxSizing;if(o==="")return null;$&&o==="border-box"&&(e.width=parseFloat(e.width)+parseFloat(e.borderRightWidth)+parseFloat(e.borderLeftWidth)+parseFloat(e.paddingRight)+parseFloat(e.paddingLeft)+"px");var u=parseFloat(e.paddingBottom)+parseFloat(e.paddingTop),a=parseFloat(e.borderBottomWidth)+parseFloat(e.borderTopWidth);return{sizingStyle:e,paddingSize:u,borderSize:a}},P=j;function C(i,t,r){var e=I(r);s.useLayoutEffect(function(){var o=function(a){return e.current(a)};if(i)return i.addEventListener(t,o),function(){return i.removeEventListener(t,o)}},[])}var O=function(t){C(window,"resize",t)},Y=function(t){C(document.fonts,"loadingdone",t)},G=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],X=function(t,r){var e=t.cacheMeasurements,o=t.maxRows,u=t.minRows,a=t.onChange,c=a===void 0?w:a,d=t.onHeightChange,l=d===void 0?w:d,h=W(t,G),f=h.value!==void 0,v=s.useRef(null),p=k(v,r),z=s.useRef(0),S=s.useRef(),m=function(){var g=v.current,x=e&&S.current?S.current:P(g);if(x){S.current=x;var y=M(x,g.value||g.placeholder||"x",u,o),b=y[0],F=y[1];z.current!==b&&(z.current=b,g.style.setProperty("height",b+"px","important"),l(b,{rowHeight:F}))}},E=function(g){f||m(),c(g)};return s.useLayoutEffect(m),O(m),Y(m),s.createElement("textarea",A({},h,{onChange:E,ref:p}))},K=s.forwardRef(X);export{K as i};