webpackJsonp([4],{0:function(e,t,r){e.exports=r("lVK7")},"2cW/":function(e,t,r){e.exports=function(e){r.e(3).then(function(t){e(r("0zPt"))}.bind(null,r)).catch(r.oe)}},"3IRH":function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},"6I0C":function(e,t,r){e.exports=function(e){r.e(1).then(function(t){e(r("PfT1"))}.bind(null,r)).catch(r.oe)}},BTlh:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&"object"==typeof e&&"default"in e?e.default:e}(r("GiK3")),u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},l=function(e){function t(){return u(this,t),o(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return n.Children.only(this.props.children)},t}(n.Component);t.AppContainer=l,t.hot=function(){return function(e){return e}},t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){},t.cold=function(e){return e},t.configureComponent=function(){}},BVBi:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.getUserInfo=i,function(){var t=r("rGbO").enterModule;t&&t(e)}();var n=t.GET_USER_INFO_REQUEST="userInfo/GET_USER_INFO_REQUEST",u=t.GET_USER_INFO_SUCCESS="userInfo/GET_USER_INFO_SUCCESS",o=t.GET_USER_INFO_FAIL="userInfo/GET_USER_INFO_FAIL";function l(){return{type:n}}function a(e){return{type:u,userInfo:e}}function c(){return{type:o}}function i(){return function(e){return e(l()),fetch("http://localhost:8080/api/user.json").then(function(e){return e.json()}).then(function(t){e(a(t))}).catch(function(){e(c())})}}!function(){var t=r("rGbO").default,s=r("rGbO").leaveModule;t&&(t.register(n,"GET_USER_INFO_REQUEST","/Users/linzhenzhen/learn/react-family/src/redux/actions/userInfo.js"),t.register(u,"GET_USER_INFO_SUCCESS","/Users/linzhenzhen/learn/react-family/src/redux/actions/userInfo.js"),t.register(o,"GET_USER_INFO_FAIL","/Users/linzhenzhen/learn/react-family/src/redux/actions/userInfo.js"),t.register(l,"getUserInfoRequest","/Users/linzhenzhen/learn/react-family/src/redux/actions/userInfo.js"),t.register(a,"getUserInfoSuccess","/Users/linzhenzhen/learn/react-family/src/redux/actions/userInfo.js"),t.register(c,"getUserInfoFail","/Users/linzhenzhen/learn/react-family/src/redux/actions/userInfo.js"),t.register(i,"getUserInfo","/Users/linzhenzhen/learn/react-family/src/redux/actions/userInfo.js"),s(e))}()}).call(t,r("3IRH")(e))},"C+gl":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var n=r("oTjF");!function(){var t=r("rGbO").enterModule;t&&t(e)}();var u={count:0};function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;switch(arguments[1].type){case n.INCREMENT:return{count:e.count+1};case n.DECREMENT:return{count:e.count-1};case n.RESET:return{count:0};default:return e}}!function(){var t=r("rGbO").default,n=r("rGbO").leaveModule;t&&(t.register(u,"initState","/Users/linzhenzhen/learn/react-family/src/redux/reducers/counter.js"),t.register(o,"reducer","/Users/linzhenzhen/learn/react-family/src/redux/reducers/counter.js"),n(e))}()}).call(t,r("3IRH")(e))},JU1R:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=s(r("GiK3")),u=r("F8kA"),o=s(r("gf5I")),l=s(r("gYwO")),a=s(r("PGiq")),c=s(r("2cW/")),i=s(r("6I0C"));function s(e){return e&&e.__esModule?e:{default:e}}!function(){var t=r("rGbO").enterModule;t&&t(e)}();var f=function(){return n.default.createElement("div",null,"Loading...")},d=function(e){return function(t){return n.default.createElement(o.default,{load:e},function(e){return e?n.default.createElement(e,t):n.default.createElement(f,null)})}},_=function(){return n.default.createElement(u.BrowserRouter,null,n.default.createElement("div",null,n.default.createElement("ul",null,n.default.createElement("li",null,n.default.createElement(u.Link,{to:"/"},"首页")),n.default.createElement("li",null,n.default.createElement(u.Link,{to:"/page1"},"Page1")),n.default.createElement("li",null,n.default.createElement(u.Link,{to:"/counter"},"Counter")),n.default.createElement("li",null,n.default.createElement(u.Link,{to:"/userinfo"},"UserInfo"))),n.default.createElement(u.Switch,null,n.default.createElement(u.Route,{exact:!0,path:"/",component:d(l.default)}),n.default.createElement(u.Route,{path:"/page1",component:d(a.default)}),n.default.createElement(u.Route,{path:"/counter",component:d(c.default)}),n.default.createElement(u.Route,{path:"/userinfo",component:d(i.default)}))))},p=_;t.default=p,function(){var t=r("rGbO").default,n=r("rGbO").leaveModule;t&&(t.register(f,"Loading","/Users/linzhenzhen/learn/react-family/src/router/router.js"),t.register(d,"createComponent","/Users/linzhenzhen/learn/react-family/src/router/router.js"),t.register(_,"getRouter","/Users/linzhenzhen/learn/react-family/src/router/router.js"),t.register(p,"default","/Users/linzhenzhen/learn/react-family/src/router/router.js"),n(e))}()}).call(t,r("3IRH")(e))},PDYz:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=l;var u=r("BVBi");!function(){var t=r("rGbO").enterModule;t&&t(e)}();var o={isLoading:!1,userInfo:{},errorMsg:""};function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case u.GET_USER_INFO_REQUEST:return n({},e,{isLoading:!0,userInfo:{},errorMsg:""});case u.GET_USER_INFO_SUCCESS:return n({},e,{isLoading:!1,userInfo:t.userInfo,errorMsg:""});case u.GET_USER_INFO_FAIL:return n({},e,{isLoading:!1,userInfo:{},errorMsg:"请求错误"});default:return e}}!function(){var t=r("rGbO").default,n=r("rGbO").leaveModule;t&&(t.register(o,"initState","/Users/linzhenzhen/learn/react-family/src/redux/reducers/userInfo.js"),t.register(l,"reducer","/Users/linzhenzhen/learn/react-family/src/redux/reducers/userInfo.js"),n(e))}()}).call(t,r("3IRH")(e))},PGiq:function(e,t,r){e.exports=function(e){r.e(0).then(function(t){e(r("gabG"))}.bind(null,r)).catch(r.oe)}},WqZW:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=r("Ol7m"),u=l(r("bEzl")),o=l(r("qCuJ"));function l(e){return e&&e.__esModule?e:{default:e}}!function(){var t=r("rGbO").enterModule;t&&t(e)}();var a=(0,n.createStore)(o.default,(0,n.applyMiddleware)(u.default)),c=a;t.default=c,function(){var t=r("rGbO").default,n=r("rGbO").leaveModule;t&&(t.register(a,"store","/Users/linzhenzhen/learn/react-family/src/redux/store.js"),t.register(c,"default","/Users/linzhenzhen/learn/react-family/src/redux/store.js"),n(e))}()}).call(t,r("3IRH")(e))},bEzl:function(e,t,r){"use strict";function n(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(u){return"function"==typeof u?u(r,n,e):t(u)}}}}Object.defineProperty(t,"__esModule",{value:!0});var u=n();u.withExtraArgument=n,t.default=u},gYwO:function(e,t,r){e.exports=function(e){r.e(2).then(function(t){e(r("LXg6"))}.bind(null,r)).catch(r.oe)}},gf5I:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=__webpack_require__("GiK3"),_react2=_interopRequireDefault(_react);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}!function(){var e=__webpack_require__("rGbO").enterModule;e&&e(module)}();var Bundle=function(_Component){function Bundle(){var e,t,r;_classCallCheck(this,Bundle);for(var n=arguments.length,u=Array(n),o=0;o<n;o++)u[o]=arguments[o];return t=r=_possibleConstructorReturn(this,(e=Bundle.__proto__||Object.getPrototypeOf(Bundle)).call.apply(e,[this].concat(u))),r.state={mod:null},_possibleConstructorReturn(r,t)}return _inherits(Bundle,_Component),_createClass(Bundle,[{key:"componentWillMount",value:function(){this.load(this.props)}},{key:"componentWillReceiveProps",value:function(e){e.load!==this.props.load&&this.load(e)}},{key:"load",value:function(e){var t=this;this.setState({mod:null}),e.load(function(e){t.setState({mod:e.default?e.default:e})})}},{key:"render",value:function(){return this.props.children(this.state.mod)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Bundle}(_react.Component),_default=Bundle;exports.default=_default,function(){var e=__webpack_require__("rGbO").default,t=__webpack_require__("rGbO").leaveModule;e&&(e.register(Bundle,"Bundle","/Users/linzhenzhen/learn/react-family/src/router/Bundle.js"),e.register(_default,"default","/Users/linzhenzhen/learn/react-family/src/router/Bundle.js"),t(module))}()}).call(exports,__webpack_require__("3IRH")(module))},lVK7:function(e,t,r){"use strict";(function(e){var t=c(r("GiK3")),n=c(r("O27J")),u=r("rGbO"),o=r("RH2O"),l=c(r("WqZW")),a=c(r("JU1R"));function c(e){return e&&e.__esModule?e:{default:e}}function i(e){n.default.render(t.default.createElement(u.AppContainer,null,t.default.createElement(o.Provider,{store:l.default},e)),document.getElementById("app"))}!function(){var t=r("rGbO").enterModule;t&&t(e)}(),i((0,a.default)()),function(){var t=r("rGbO").default,n=r("rGbO").leaveModule;t&&(t.register(i,"renderWithHotReload","/Users/linzhenzhen/learn/react-family/src/index.js"),n(e))}()}).call(t,r("3IRH")(e))},oTjF:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.increment=l,t.decrement=a,t.reset=c,function(){var t=r("rGbO").enterModule;t&&t(e)}();var n=t.INCREMENT="counter/INCREMENT",u=t.DECREMENT="counter/DECREMENT",o=t.RESET="counter/RESET";function l(){return{type:n}}function a(){return{type:u}}function c(){return{type:o}}!function(){var t=r("rGbO").default,i=r("rGbO").leaveModule;t&&(t.register(n,"INCREMENT","/Users/linzhenzhen/learn/react-family/src/redux/actions/counter.js"),t.register(u,"DECREMENT","/Users/linzhenzhen/learn/react-family/src/redux/actions/counter.js"),t.register(o,"RESET","/Users/linzhenzhen/learn/react-family/src/redux/actions/counter.js"),t.register(l,"increment","/Users/linzhenzhen/learn/react-family/src/redux/actions/counter.js"),t.register(a,"decrement","/Users/linzhenzhen/learn/react-family/src/redux/actions/counter.js"),t.register(c,"reset","/Users/linzhenzhen/learn/react-family/src/redux/actions/counter.js"),i(e))}()}).call(t,r("3IRH")(e))},qCuJ:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=r("Ol7m"),u=l(r("C+gl")),o=l(r("PDYz"));function l(e){return e&&e.__esModule?e:{default:e}}!function(){var t=r("rGbO").enterModule;t&&t(e)}();var a=(0,n.combineReducers)({counter:u.default,userInfo:o.default});t.default=a,function(){var t=r("rGbO").default,n=r("rGbO").leaveModule;t&&(t.register(a,"default","/Users/linzhenzhen/learn/react-family/src/redux/reducers.js"),n(e))}()}).call(t,r("3IRH")(e))},rGbO:function(module,exports,__webpack_require__){"use strict";var evalAllowed=!1;try{eval("evalAllowed = true")}catch(e){}var platformSupported=!!Object.setPrototypeOf&&evalAllowed;module.exports=__webpack_require__("BTlh")}},[0]);