import{r as l}from"./index-830432d5.js";var c={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=l,u=Symbol.for("react.element"),f=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,x=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function m(t,r,a){var e,n={},o=null,p=null;a!==void 0&&(o=""+a),r.key!==void 0&&(o=""+r.key),r.ref!==void 0&&(p=r.ref);for(e in r)y.call(r,e)&&!g.hasOwnProperty(e)&&(n[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)n[e]===void 0&&(n[e]=r[e]);return{$$typeof:u,type:t,key:o,ref:p,props:n,_owner:x.current}}i.Fragment=f;i.jsx=m;i.jsxs=m;c.exports=i;var s=c.exports;const d=({src:t,label:r})=>{const[a,e]=l.useState(0),n=l.useCallback(o=>{(o==null?void 0:o.key)==="Enter"?(e((a+1)%3),o.stopPropagation()):(o==null?void 0:o.key)==="Escape"&&a>0&&(e(0),o.stopPropagation())},[a]);return s.jsxs(s.Fragment,{children:[s.jsx("img",{onClick:()=>e(1),onKeyDown:n,src:t,"aria-label":r,tabIndex:0}),a>0&&s.jsx("div",{onClick:()=>e(0),className:"modal-overlay",children:s.jsx("div",{className:"modal-content",children:a==1?s.jsx("img",{src:t,"aria-label":r,onClick:o=>{e(2),o.stopPropagation()},onKeyDown:n,tabIndex:0}):s.jsx("img",{src:t,"aria-label":r,className:"zoom100",onKeyDown:n,tabIndex:0})})})]})};try{d.displayName="Slide",d.__docgenInfo={description:"",displayName:"Slide",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}export{d as S,s as j};
//# sourceMappingURL=Slide-0b937f4e.js.map
