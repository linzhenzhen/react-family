webpackJsonp([4],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var evalAllowed = false;
try {
  eval('evalAllowed = true');
} catch (e) {
  // eval not allowed due to CSP
}

// RHL needs setPrototypeOf to operate Component inheritance, and eval to patch methods
var platformSupported = !!Object.setPrototypeOf && evalAllowed;

if (true) {
  if (false) {
    // we are not in prod mode, but RHL could not be activated
    console.warn('React-Hot-Loaded is not supported in this environment');
  }
  module.exports = __webpack_require__(52);
} else {
  module.exports = require('./dist/react-hot-loader.development.js');
}


/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 按需加载
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * react-router 2.0 关键的函数是 require.ensure()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * react-router 4.0 放弃 require.ensure()，选择了 bundle-loader 简便的方式
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Bundle = function (_Component) {
  _inherits(Bundle, _Component);

  function Bundle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Bundle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Bundle.__proto__ || Object.getPrototypeOf(Bundle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      // short for "module" but that's a keyword in js, so "mod"
      mod: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Bundle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.load(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.load !== this.props.load) {
        this.load(nextProps);
      }
    }
  }, {
    key: 'load',
    value: function load(props) {
      var _this2 = this;

      this.setState({
        mod: null
      });

      props.load(function (mod) {
        _this2.setState({
          // handle both as es imports and cjs
          mod: mod.default ? mod.default : mod
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children(this.state.mod);
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Bundle;
}(_react.Component);

var _default = Bundle;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Bundle, 'Bundle', '/Users/linzhenzhen/learn/react-family/src/router/Bundle.js');
  reactHotLoader.register(_default, 'default', '/Users/linzhenzhen/learn/react-family/src/router/Bundle.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(2).then((function(require) {
		cb(__webpack_require__(107));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(0).then((function(require) {
		cb(__webpack_require__(108));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(3).then((function(require) {
		cb(__webpack_require__(109));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(1).then((function(require) {
		cb(__webpack_require__(110));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.increment = increment;
exports.decrement = decrement;
exports.reset = reset;

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

/* 通过 action 创建函数 counter */
var INCREMENT = exports.INCREMENT = "counter/INCREMENT";
var DECREMENT = exports.DECREMENT = "counter/DECREMENT";
var RESET = exports.RESET = "counter/RESET";

function increment() {
  return { type: INCREMENT };
}

function decrement() {
  return { type: DECREMENT };
}

function reset() {
  return { type: RESET };
}
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(INCREMENT, "INCREMENT", "/Users/linzhenzhen/learn/react-family/src/redux/actions/counter.js");
  reactHotLoader.register(DECREMENT, "DECREMENT", "/Users/linzhenzhen/learn/react-family/src/redux/actions/counter.js");
  reactHotLoader.register(RESET, "RESET", "/Users/linzhenzhen/learn/react-family/src/redux/actions/counter.js");
  reactHotLoader.register(increment, "increment", "/Users/linzhenzhen/learn/react-family/src/redux/actions/counter.js");
  reactHotLoader.register(decrement, "decrement", "/Users/linzhenzhen/learn/react-family/src/redux/actions/counter.js");
  reactHotLoader.register(reset, "reset", "/Users/linzhenzhen/learn/react-family/src/redux/actions/counter.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserInfo = getUserInfo;

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

/* 通过 action 创建函数 userInfo */
var GET_USER_INFO_REQUEST = exports.GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST";
var GET_USER_INFO_SUCCESS = exports.GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS";
var GET_USER_INFO_FAIL = exports.GET_USER_INFO_FAIL = "userInfo/GET_USER_INFO_FAIL";

function getUserInfoRequest() {
  return {
    type: GET_USER_INFO_REQUEST
  };
}

function getUserInfoSuccess(userInfo) {
  return {
    type: GET_USER_INFO_SUCCESS,
    userInfo: userInfo
  };
}

function getUserInfoFail() {
  return {
    type: GET_USER_INFO_FAIL
  };
}

// 运用 redux-thunk 作为中间件来处理 action 函数
function getUserInfo() {
  return function (dispatch) {
    dispatch(getUserInfoRequest());

    return fetch('http://localhost:8080/api/user.json').then(function (response) {
      return response.json();
    }).then(function (json) {
      dispatch(getUserInfoSuccess(json));
    }).catch(function () {
      dispatch(getUserInfoFail());
    });
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GET_USER_INFO_REQUEST, "GET_USER_INFO_REQUEST", "/Users/linzhenzhen/learn/react-family/src/redux/actions/userInfo.js");
  reactHotLoader.register(GET_USER_INFO_SUCCESS, "GET_USER_INFO_SUCCESS", "/Users/linzhenzhen/learn/react-family/src/redux/actions/userInfo.js");
  reactHotLoader.register(GET_USER_INFO_FAIL, "GET_USER_INFO_FAIL", "/Users/linzhenzhen/learn/react-family/src/redux/actions/userInfo.js");
  reactHotLoader.register(getUserInfoRequest, "getUserInfoRequest", "/Users/linzhenzhen/learn/react-family/src/redux/actions/userInfo.js");
  reactHotLoader.register(getUserInfoSuccess, "getUserInfoSuccess", "/Users/linzhenzhen/learn/react-family/src/redux/actions/userInfo.js");
  reactHotLoader.register(getUserInfoFail, "getUserInfoFail", "/Users/linzhenzhen/learn/react-family/src/redux/actions/userInfo.js");
  reactHotLoader.register(getUserInfo, "getUserInfo", "/Users/linzhenzhen/learn/react-family/src/redux/actions/userInfo.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(42);


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(25);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(0);

var _reactRedux = __webpack_require__(24);

var _store = __webpack_require__(71);

var _store2 = _interopRequireDefault(_store);

var _router = __webpack_require__(76);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})(); /** 1. 普通第一次测试 */
// document.getElementById('app').innerHTML = "Webpack works";

/** 2. 使用 es6 的箭头函数, 看看 Babel 的变异转码效果 */
// var func = str => {
//   document.getElementById('app').innerHTML = str;
// }

// func('use Babel ...');

/** 3. 使用 React  */
// import React from 'react';
// import ReactDom from 'react-dom';

// ReactDom.render(
//   <div>Hello React!</div>,
//   document.getElementById('app')
// );

/** 4. 使用 React Component */
// import React from 'react';
// import ReactDom from 'react-dom';
// import Hello from './components/Hello/Hello';

// ReactDom.render(
//   <Hello></Hello>,
//   document.getElementById('app')
// )

/** 5. 使用 React Router */
// import React from 'react';
// import ReactDom from 'react-dom';
// import getRouter from './router/router';

// ReactDom.render(
//   getRouter(),
//   document.getElementById('app')
// );

/** 6. 增加热更新 */
// import React from 'react';
// import ReactDom from 'react-dom';
// import {AppContainer} from 'react-hot-loader';
// import getRouter from 'router/router';

// /* 初始化 */
// renderWithHotReload(getRouter());

// /* 热更新 */
// if (module.hot) {
//   module.hot.accept('./router/router', () => {
//     const getRouter = require('./router/router').default;
//     renderWithHotReload(getRouter());
//   });
// }

// function renderWithHotReload(RootElement) {
//   ReactDom.render(
//     <AppContainer>
//       {RootElement}
//     </AppContainer>,
//     document.getElementById('app')
//   );
// }

/** 7. 增加 Store 全局访问 */


/* 初始化 */
renderWithHotReload((0, _router2.default)());

/* 热更新 */
if (false) {
  module.hot.accept('./router/router', function () {
    var getRouter = require('./router/router').default;
    renderWithHotReload(getRouter());
  });
}

function renderWithHotReload(RootElement) {
  _reactDom2.default.render(_react2.default.createElement(
    _reactHotLoader.AppContainer,
    null,
    _react2.default.createElement(
      _reactRedux.Provider,
      { store: _store2.default },
      RootElement
    )
  ), document.getElementById('app'));
}
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(renderWithHotReload, 'renderWithHotReload', '/Users/linzhenzhen/learn/react-family/src/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(__webpack_require__(1)),classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},AppContainer=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,e.apply(this,arguments))}return inherits(t,e),t.prototype.render=function(){return React.Children.only(this.props.children)},t}(React.Component),hot_prod=function(){return function(e){return e}},areComponentsEqual=function(e,t){return e===t},setConfig=function(){},cold=function(e){return e},configureComponent=function(){};exports.AppContainer=AppContainer,exports.hot=hot_prod,exports.areComponentsEqual=areComponentsEqual,exports.setConfig=setConfig,exports.cold=cold,exports.configureComponent=configureComponent;


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(11);

var _reduxThunk = __webpack_require__(72);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(73);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

var _default = store;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(store, 'store', '/Users/linzhenzhen/learn/react-family/src/redux/store.js');
  reactHotLoader.register(_default, 'default', '/Users/linzhenzhen/learn/react-family/src/redux/store.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(11);

var _counter = __webpack_require__(74);

var _counter2 = _interopRequireDefault(_counter);

var _userInfo = __webpack_require__(75);

var _userInfo2 = _interopRequireDefault(_userInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})(); /**
       * 产生一个整体的 Reducer 函数
       */
// import counter from 'reducers/counter';
// import userInfo from 'reducers/userInfo';

// export default function combineReducers(state = {}, action) {
//   return {
//     counter: counter(state.counter, action),
//     userInfo: userInfo(state.userInfo, action)
//   }
// }

// 优化combineReducers - 使用 redux 提供的一个 combineReducers 函数合并 reducer


var _default = (0, _redux.combineReducers)({
  counter: _counter2.default,
  userInfo: _userInfo2.default
});

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/linzhenzhen/learn/react-family/src/redux/reducers.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _counter = __webpack_require__(39);

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})(); /* reducer 是一个纯函数，接收 action 和旧的 state， 生成新的 state */


/**
 * 初始化 state
 */
var initState = {
  count: 0

  /**
   * reducer
   */
};function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  switch (action.type) {
    case _counter.INCREMENT:
      return {
        count: state.count + 1
      };
    case _counter.DECREMENT:
      return {
        count: state.count - 1
      };
    case _counter.RESET:
      return {
        count: 0
      };
    default:
      return state;

  }
}
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initState, 'initState', '/Users/linzhenzhen/learn/react-family/src/redux/reducers/counter.js');
  reactHotLoader.register(reducer, 'reducer', '/Users/linzhenzhen/learn/react-family/src/redux/reducers/counter.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _userInfo = __webpack_require__(40);

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var initState = {
  isLoading: false,
  userInfo: {},
  errorMsg: ''
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  switch (action.type) {
    case _userInfo.GET_USER_INFO_REQUEST:
      return _extends({}, state, {
        isLoading: true,
        userInfo: {},
        errorMsg: ''
      });
    case _userInfo.GET_USER_INFO_SUCCESS:
      return _extends({}, state, {
        isLoading: false,
        userInfo: action.userInfo,
        errorMsg: ''
      });
    case _userInfo.GET_USER_INFO_FAIL:
      return _extends({}, state, {
        isLoading: false,
        userInfo: {},
        errorMsg: '请求错误'
      });
    default:
      return state;
  }
}
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initState, 'initState', '/Users/linzhenzhen/learn/react-family/src/redux/reducers/userInfo.js');
  reactHotLoader.register(reducer, 'reducer', '/Users/linzhenzhen/learn/react-family/src/redux/reducers/userInfo.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(32);

var _Bundle = __webpack_require__(101);

var _Bundle2 = _interopRequireDefault(_Bundle);

var _Home = __webpack_require__(102);

var _Home2 = _interopRequireDefault(_Home);

var _Page = __webpack_require__(103);

var _Page2 = _interopRequireDefault(_Page);

var _Counter = __webpack_require__(104);

var _Counter2 = _interopRequireDefault(_Counter);

var _UserInfo = __webpack_require__(105);

var _UserInfo2 = _interopRequireDefault(_UserInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var Loading = function Loading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};

var createComponent = function createComponent(component) {
  return function (props) {
    return _react2.default.createElement(
      _Bundle2.default,
      { load: component },
      function (Component) {
        return Component ? _react2.default.createElement(Component, props) : _react2.default.createElement(Loading, null);
      }
    );
  };
};

var getRouter = function getRouter() {
  return _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            '\u9996\u9875'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/page1' },
            'Page1'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/counter' },
            'Counter'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/userinfo' },
            'UserInfo'
          )
        )
      ),
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: createComponent(_Home2.default) }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/page1', component: createComponent(_Page2.default) }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/counter', component: createComponent(_Counter2.default) }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/userinfo', component: createComponent(_UserInfo2.default) })
      )
    )
  );
};

var _default = getRouter;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loading, 'Loading', '/Users/linzhenzhen/learn/react-family/src/router/router.js');
  reactHotLoader.register(createComponent, 'createComponent', '/Users/linzhenzhen/learn/react-family/src/router/router.js');
  reactHotLoader.register(getRouter, 'getRouter', '/Users/linzhenzhen/learn/react-family/src/router/router.js');
  reactHotLoader.register(_default, 'default', '/Users/linzhenzhen/learn/react-family/src/router/router.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ })

},[41]);
//# sourceMappingURL=app.beb130bd440280e669ba.js.map