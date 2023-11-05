import{r as d}from"./index-830432d5.js";var p={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=d,c=Symbol.for("react.element"),f=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,y=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function _(t,e,l){var r,o={},s=null,i=null;l!==void 0&&(s=""+l),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)m.call(e,r)&&!x.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:c,type:t,key:s,ref:i,props:o,_owner:y.current}}n.Fragment=f;n.jsx=_;n.jsxs=_;p.exports=n;var S=p.exports;const a=({src:t,label:e})=>S.jsx("img",{src:t,"aria-label":e});try{a.displayName="Slide",a.__docgenInfo={description:"",displayName:"Slide",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}export{a as S,S as j};
//# sourceMappingURL=Slide-fbc68499.js.map
