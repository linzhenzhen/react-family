# React-Family
从零初步搭建学习 React. start at 2019-03-04 Mon.

根据第一篇参考地址作为从零搭建 React 框架的实践练习，但因每个人电脑环境、开发工具、开发时间不同，在练习过程中遇到很多报错的现象，所以来这里做个记录，已备日后查看。

React 的本质是将图形界面（GUI）函数化，是基于 JSX 的语法来写的。

### 参考学习地址
1. [从零搭建 React 全家桶框架教程](https://github.com/brickspert/blog/issues/1#hot-module-replacement) 感谢@brickspert
2. [React 技术栈-整体预览 Ruan YiFeng](https://github.com/ruanyf/jstraining/blob/master/docs/react.md) 感谢@ruanyf
3. [入门教程：认识React](https://zh-hans.reactjs.org/tutorial/tutorial.html)

### React 最重要的几个全家桶成员是

react、 // react 核心库
react-dom、 // react 的 DOM 适配库
react-router-dom、
redux、// 状态管理
react-redux // 搭配 redux

### 启动项目

按照以下命令依次执行后，访问 `http://localhost:8080`

```js
git clone git@github.com:linzhenzhen/react-family.git
cd react-family/
npm install
npm start
```

### 其他启动命令说明

```js
npm start          // 启动项目
npm build          // 生产环境打包项目，生成打包后的文件都在 ./dist 内
npm run dev-build  // 开发环境打包
npm run mock       // json-server 拦截并监听 api，模拟数据的命令，配合 ‘mockdev’ 使用
npm run mockdev    // json-server 模拟接口请求，同时执行 'npm mock' 和 ‘npm start’
npm run serve      // http-server 本地服务，在没有使用 webpack-dev-server 搭建前，可暂时使用 http-server 来快速搭建
```

### 以下是练习中遇到的问题

1. Uncaught Invariant Violation: Target container is not a DOM element.

![error01.jpg](./imgs/01.jpeg)

`已解决` 在 src/index.html 内容处插入一个 js 引入，然后刷新或者从新编译刷新页面就可以了，很神奇的修复了这个问题。[详见参考链接 @Mandy94](https://github.com/storybooks/storybook/issues/2615#issuecomment-405088812)

2. TypeError: Cannot read property 'compilation' of undefined.

![error03.jpg](./imgs/03.jpg)

`已解决` 这个是在练习文件压缩使用 webpack 的 uglifyjs-webpack-plugin 时 build 报错的。因为 `webpack@3 requires uglifyjs-webpack-plugin@1`, 所以解决办法是重新安装 `uglifyjs-webpack-plugin@1`。[详见参考链接 @evilebottnawi](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/360#issuecomment-423567387)

3. 对比使用 `uglifyjs-webpack-plugin` 压缩前后的文件大小图，其中有些文件还是有明显的缩减的。

压缩前文件大小截图

![压缩前 02.jpg](./imgs/02.jpg)

压缩后文件大小截图

![压缩后 04.jpg](./imgs/04.jpg)

4. 增加指定 `process.env.NODE_ENV === 'production'` 环境时，vendor 文件变小了，我练习时还没能领会怎么变小的，先贴图记录。

![压缩后 05.jpg](./imgs/05.jpg)

5. Error: clean-webpack-plugin only accepts an options object.

![error06.jpg](./imgs/06.jpg)

`已解决` 这个问题是因为加了 "new CleanWebpackPlugin(['dist'])" 后报错的，看报错的意思是括号里面应该是个 Object，所以传的是错的 Options。如果没什么要求，解决方式就是不传任何内容，即直接注入 "new CleanWebpackPlugin()"就行了。[详见 CleanWebpackPlugin 的参数](https://github.com/johnagan/clean-webpack-plugin#options-and-defaults-optional)

经过删除 dist 的文件，之前的 api/user.json 也不在了，以下配置可以保留 dist/api 的文件内容。

```
new CleanWebpackPlugin({
  cleanOnceBeforeBuildPatterns: ['*.*', '!api/*.*']
})
```

6. Module build failed: TypeError: Path must be a string. Received undefined

![error07.jpg](./imgs/07.jpg)

`未解决`，这里是在练习“使用 CSS Modules” 时候报的错误。是因为加了以下配置。我先屏蔽了这里代码。

```js
use: ["style-loader", "css-loader?modules&localIdentName=[local]-[hash:base64:5]", 'postcss-loader']
```

7. 使用 Mock.js 模拟请求

7.1需开启以下配置

```js
// webpack.dev.config.js
new webpack.DefinePlugin({
  MOCK: true
})
```

7.2并引入 mock.js 在src/index.js

```js
// src/index.js
if (MOCK) {
   require('mock/mock');
}
```
7.3打开注释掉的 mock.js

```js
// mock/mockjs
import Mock from 'mockjs';

let Random = Mock.Random;

Mock.mock('/api/user', {
  'name': '@cname',
  'intro': '@word(20)'
});
```

8. 使用 json-server 代替 Mock.js 时注意，windows 不支持命令并行执行 ‘&’，你可以分开执行，或者使用 npm-run-all. 但我是 mac。另外 json-server 与 mock.js 两者区别就是 json-server 功能更强大，支持分页，排序，筛选等等。

9. 实践中有几个没 follow, 因为代码不全，影响实践进度就先略过了, 如下

9.1 优化目录结构并增加404页面
9.2 Css Modules

---

2019-04-01. `learn-redux` 学习理解 redux. [练习参考地址](https://github.com/brickspert/blog/issues/22), 然后回到项目中在读一遍 Redux 就明白了些 [快速直达](https://github.com/brickspert/blog/issues/1#redux)

2019-04-03 实践 React 内高阶组件. [练习参考地址](https://github.com/brickspert/blog/issues/2)。react-redux 的 connect 就用到了高阶函数，把 redux 的 state 和 action 创建函数，通过 props 注入给 Component ，可以在目标组件中用 this.props 去调用。

另，connect 四个参数是, 最常用的是前两个

```
const enhance = connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(Component);
```