# React-Family
从零初步搭建及学习 React. start at 2019-03-04 Mon.

### 参考地址
1. [从零搭建 React 全家桶框架教程](https://github.com/brickspert/blog/issues/1#hot-module-replacement)
2. [入门教程：认识React](https://zh-hans.reactjs.org/tutorial/tutorial.html)

### 启动项目

按照以下命令依次执行后，访问 `http://localhost:8080`

```
git clone git@github.com:linzhenzhen/react-family.git
cd react-family/
npm install
npm start
```

### 以下是练习中遇到的问题

1. Uncaught Invariant Violation: Target container is not a DOM element.

![error01.jpg](./imgs/01.jpeg)

`已解决` 在 src/index.html 内容处插入一个 js 引入，然后刷新或者从新编译刷新页面就可以了，很神奇的修复了这个问题。[详见参考链接 @Mandy94](https://github.com/storybooks/storybook/issues/2615#issuecomment-405088812)

2. TypeError: Cannot read property 'compilation' of undefined.

![error03.jpg](./imgs/03.jpg)

`已解决` 这个是在练习文件压缩使用 webpack 的 uglifyjs-webpack-plugin 时 build 报错的。解决办法是重新安装 `uglifyjs-webpack-plugin@1`。[详见参考链接 @evilebottnawi](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/360#issuecomment-423567387)

3. 对比使用 `uglifyjs-webpack-plugin` 压缩前后的文件大小图

![压缩前 02.jpg](./imgs/02.jpg)

![压缩后 04.jpg](./imgs/04.jpg)


