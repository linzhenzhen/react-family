/** 1. 普通第一次测试 */
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
import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';

import getRouter from 'router/router';

// 只在开发环境在采用 mock
// if (MOCK) {
//    require('mock/mock');
// }

/* 初始化 */
renderWithHotReload(getRouter());

/* 热更新 */
if (module.hot) {
  module.hot.accept('./router/router', () => {
    const getRouter = require('./router/router').default;
    renderWithHotReload(getRouter());
  });
}

function renderWithHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        {RootElement}
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
}