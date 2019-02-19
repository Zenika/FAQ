(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./docs/src/advanced/integrations.mdx":function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return u});var t=n("./node_modules/react/index.js"),o=n.n(t),r=n("./node_modules/@mdx-js/tag/dist/index.js");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function c(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function l(e,a){return!a||"object"!==m(a)&&"function"!==typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,a){return(s=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}var u=function(e){function a(e){var n;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),(n=l(this,i(a).call(this,e))).layout=null,n}var n,t,m;return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&s(e,a)}(a,o.a.Component),n=a,(t=[{key:"render",value:function(){var e=this.props,a=e.components;p(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:a},o.a.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"integrations"}},"Integrations"),o.a.createElement(r.MDXTag,{name:"p",components:a},"This project has the following integrations:"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/advanced/integrations/#slack"}},"Slack")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/advanced/integrations/#workplace"}},"Workplace")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/advanced/integrations/#public-api"}},"Public API"))),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"slack"}},"Slack"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Slack is a collaboration chat tool often used in and out of organizations to help team communicate and coordinate in a more effective manner."),o.a.createElement(r.MDXTag,{name:"p",components:a},"FAQ has the following integration with slack:"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Sends new questions into a dedicated slack channel")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"create-slack-application"}},"Create Slack application"),o.a.createElement(r.MDXTag,{name:"p",components:a},"In order to integrate with Slack, you will need to create an application. It can be done using the ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://api.slack.com/"}},'Slack "Build" dashboard'),". Follow the instructions from Slack to create your app. See below for your configuration variables."),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"configuration-variables"}},"Configuration variables"),o.a.createElement(r.MDXTag,{name:"table",components:a},o.a.createElement(r.MDXTag,{name:"thead",components:a,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Name"),o.a.createElement(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Notes"))),o.a.createElement(r.MDXTag,{name:"tbody",components:a,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"slackChannelHook")),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"This variable is a hook URI which is called by the backend in order to send the message to the channel. You can configure a hook on the ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://api.slack.com/"}},'Slack "Build" dashboard'),'. Choose your app, then go to "Features > Incoming Webhooks". Active the feature and create a hook for the dedicated channel you wish to send questions to. The generated url is what you need for this variable.')))),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"workplace"}},"Workplace"),o.a.createElement(r.MDXTag,{name:"p",components:a},'Workplace is a collaborative platform run by Facebook and can be labeled as "Facebook for companies".'),o.a.createElement(r.MDXTag,{name:"p",components:a},"FAQ has the following integration with Workplace:"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Button to share a question on Workplace")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"configuration"}},"Configuration"),o.a.createElement(r.MDXTag,{name:"p",components:a},"There is no configuration needed for the workplace integration to work. Indeed, to share something with the Worplace API, we only need to open a popup with this url: ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"https://work.facebook.com/sharer.php?display=popup&u=[the_url_to_share]")),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"public-api"}},"Public API"),o.a.createElement(r.MDXTag,{name:"p",components:a},"FAQ has a public API in order to query its data."),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"configuration-1"}},"Configuration"),o.a.createElement(r.MDXTag,{name:"ol",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"Manually create a user with a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"key")," (You can use any string as a key, but we advise you to use a random 30 chars long string). You can create it using the Prisma Playground (probably ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://localhost:4466"}},"https://localhost:4466")," if you followed the installation process)."),o.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-graphql"}},'mutation {\n  createUser(data: { key: "awesome-key", name: "API", email: "awesome-api@zenika.com" }) {\n    id\n    key\n    name\n    email\n  }\n}\n'))),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"Create a JWT with the following payload, sign with the previously created key. (You can find more information about how to create a JWT and librairies ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://jwt.io/"}},"here"),")"),o.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},'{\n  "userId": "[user_id]",\n  "prismaService": "[name]/[stage]",\n  "iat": [timestamp_generated],\n  "exp": [timestamp_expiration]\n}\n')),o.a.createElement(r.MDXTag,{name:"blockquote",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"blockquote"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"userId")," is the id of the user created in step 1"),o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"blockquote"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"prismaService")," is the service you want to access (See ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/advanced/multi-tenancy"}},"Multi-tenancy")," for more information)"),o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"blockquote"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"iat")," is the current timestamp"),o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"blockquote"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"exp")," is the current timestamp + the number of seconds you want the token to be valid")),o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"Example:"),o.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},'{\n  "userId": "cjmymlydx01780b30irsmi203",\n  "prismaService": "demo/prod",\n  "iat": 1538908112,\n  "exp": 1538910112\n}\n')),o.a.createElement(r.MDXTag,{name:"blockquote",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"blockquote"},"Here, ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"exp")," = ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"iat")," + 2000s. This token would be available for around half an hour."))),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"Query the backend with an HTTP POST request with your GraphQL as the body. Add the following headers:"),o.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"Authorization: API [your_jwt_token]\nprisma-service: [name]/[state]\n")))))}}])&&c(n.prototype,t),m&&c(n,m),a}();u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=docs-src-advanced-integrations.cc2635498b0b69abcc30.js.map