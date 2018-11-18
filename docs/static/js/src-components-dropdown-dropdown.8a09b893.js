(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/components/Dropdown/Dropdown.css":function(e,n,t){},"./src/components/Dropdown/Dropdown.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),r=t.n(o),a=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/docz/dist/index.m.js"),d=t("./node_modules/classnames/index.js"),p=t.n(d),s=(t("./src/components/Dropdown/Dropdown.css"),function(e){var n=e.className,t=e.button,o=e.children;return r.a.createElement("div",{className:p()("dropdown",n)},r.a.createElement("div",{className:"dropbtn"},t),r.a.createElement("div",{className:"dropdown-content"},o))}),c=s;function m(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}s.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{className:{type:{name:"string"},required:!1,description:""},button:{type:{name:"node"},required:!0,description:""},children:{type:{name:"node"},required:!0,description:""}}};var l=function(e){var n=e.children,t=e.icon,o=e.rightIcon,a=e.disabled,i=e.onClick,d=e.href,p=e.target,s=m(e,["children","icon","rightIcon","disabled","onClick","href","target"]);return r.a.createElement("a",Object.assign({tabIndex:a?null:0,onMouseDown:function(e){if(!a)return i?i():d?window.open(d,"_blank"===p?p:"_self"):void 0},disabled:a},s),r.a.createElement("span",{className:"left"},t&&("string"===typeof t?r.a.createElement("i",{className:"material-icons"},t):r.a.createElement("i",null,t)),n),r.a.createElement("span",{className:"right"},o&&("string"===typeof o?r.a.createElement("i",{className:"material-icons"},o):o)))},u=l;l.__docgenInfo={description:"",methods:[],displayName:"DropdownItem",props:{children:{type:{name:"node"},required:!0,description:""},icon:{type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1,description:""},rightIcon:{type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1,description:""},disabled:{type:{name:"bool"},required:!1,description:""},onClick:{type:{name:"func"},required:!1,description:""},href:{type:{name:"string"},required:!1,description:""},target:{type:{name:"string"},required:!1,description:""}}};var g=function(){return r.a.createElement("div",{style:{borderTop:"1.1px solid LightGrey",width:"100%",margin:"7px 0"}})},w=g;g.__docgenInfo={description:"",methods:[],displayName:"DropdownDivider"};var D=t("./src/components/Button/index.js");function h(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}n.default=function(e){var n=e.components,t=h(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:n},r.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"dropdown"}},"Dropdown"),r.a.createElement(a.MDXTag,{name:"pre",components:n},r.a.createElement(a.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metastring:""}},"import { Dropdown, DropdownItem, DropdownDivider } from 'components'\n")),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"basic-usage"}},"Basic usage"),r.a.createElement(i.Playground,{__position:0,__code:'<div style={{ height: \'300px\', textAlign: \'right\' }}>\n  <Dropdown button={<Button primary>Hover here</Button>}>\n    <DropdownItem>Example item</DropdownItem>\n    <DropdownDivider />\n    <DropdownItem icon="local_airport">Icon left</DropdownItem>\n    <DropdownItem rightIcon="directions_boat">Icon right</DropdownItem>\n    <DropdownDivider />\n    <DropdownItem disabled>Disabled</DropdownItem>\n    <DropdownItem href="https://github.com/Zenika/FAQ" target="_blank">\n      As a link\n    </DropdownItem>\n  </Dropdown>\n</div>',__scope:{props:t,Dropdown:c,DropdownItem:u,DropdownDivider:w,Button:D.a}},r.a.createElement("div",{style:{height:"300px",textAlign:"right"}},r.a.createElement(c,{button:r.a.createElement(D.a,{primary:!0},"Hover here")},r.a.createElement(u,null,"Example item"),r.a.createElement(w,null),r.a.createElement(u,{icon:"local_airport"},"Icon left"),r.a.createElement(u,{rightIcon:"directions_boat"},"Icon right"),r.a.createElement(w,null),r.a.createElement(u,{disabled:!0},"Disabled"),r.a.createElement(u,{href:"https://github.com/Zenika/FAQ",target:"_blank"},"As a link")))),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"properties"}},"Properties"),r.a.createElement(a.MDXTag,{name:"h3",components:n,props:{id:"dropdown-1"}},"Dropdown"),r.a.createElement(i.PropsTable,{of:c}),r.a.createElement(a.MDXTag,{name:"h3",components:n,props:{id:"dropdownitem"}},"DropdownItem"),r.a.createElement(i.PropsTable,{of:u}),r.a.createElement(a.MDXTag,{name:"h3",components:n,props:{id:"dropdowndivider"}},"DropdownDivider"),r.a.createElement(a.MDXTag,{name:"p",components:n},r.a.createElement(a.MDXTag,{name:"em",components:n,parentName:"p"},"DropdownDivider doesn't take any props")))}}}]);