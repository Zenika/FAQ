(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./src/components/Input/Input.css":function(e,t,n){},"./src/components/Input/Input.mdx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),o=n.n(r),i=n("./node_modules/@mdx-js/tag/dist/index.js"),a=n("./node_modules/docz/dist/index.m.js"),c=n("./node_modules/classnames/index.js"),u=n.n(c);n("./src/components/Input/Input.css");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=f(this,m(t).call(this,e))).input=o.a.createRef(),n}var n,i,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.value,i=t.limit,a=t.icon,c=t.style,s=t.onClear,p=l(t,["className","value","limit","icon","style","onClear"]);return o.a.createElement("div",{className:u()("input",n),style:c,onClick:function(){return e.input.current&&e.input.current.focus()}},a&&o.a.createElement("span",{className:"input-icon"},"string"===typeof a?o.a.createElement("i",{className:"material-icons"},a):o.a.createElement("i",null,a)),o.a.createElement("input",Object.assign({type:"text",value:r,maxLength:i,ref:this.input},p)),i&&o.a.createElement("i",{className:"limit"},r?r.length:0,"/",i),s&&r.length>0&&o.a.createElement("i",{className:"close material-icons",onClick:s},"close"))}}])&&p(n.prototype,i),a&&p(n,a),t}(),d=b;function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}b.__docgenInfo={description:"",methods:[],displayName:"Input",props:{className:{type:{name:"string"},required:!1,description:""},value:{type:{name:"string"},required:!0,description:""},limit:{type:{name:"number"},required:!1,description:""},icon:{type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1,description:""},style:{type:{name:"object"},required:!1,description:""},autoFocus:{type:{name:"bool"},required:!1,description:""},onClear:{type:{name:"func"},required:!1,description:""}}},n.d(t,"default",function(){return w});var w=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=v(this,j(t).call(this,e))).layout=null,n}var n,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components,n=g(e,["components"]);return o.a.createElement(i.MDXTag,{name:"wrapper",components:t},o.a.createElement(i.MDXTag,{name:"h1",components:t,props:{id:"input"}},"Input"),o.a.createElement(i.MDXTag,{name:"pre",components:t},o.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import { Input } from 'components'\n")),o.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"basic-usage"}},"Basic usage"),o.a.createElement(a.e,{__position:0,__code:'<Input placeholder="Type something here..." />\n<br />\n<Input limit={100} value="Input with limit must be controlled by parents" />\n<br />\n<Input icon="search" />',__scope:{props:this?this.props:n,Input:d}},o.a.createElement(d,{placeholder:"Type something here..."}),o.a.createElement("br",null),o.a.createElement(d,{limit:100,value:"Input with limit must be controlled by parents"}),o.a.createElement("br",null),o.a.createElement(d,{icon:"search"})),o.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"properties"}},"Properties"),o.a.createElement(a.f,{of:d}))}}])&&O(n.prototype,r),c&&O(n,c),t}();w.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-components-input-input.d2043957e006bf5b81a2.js.map