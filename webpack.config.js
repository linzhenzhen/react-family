/**
 * Production webpack 的配置文件
 */
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); // 这个插件每次会把 JS 插入到你的模版 index.html 中
var webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // 文件压缩

module.exports = {
  /* 入口 */
  entry: {
    app: [
      path.join(__dirname, 'src/index.js')
    ],
    // 把react中不会改变的核心库文件打包成一个 vendor.hash.js 并缓存起来
    vendor: [
      'react',
      'react-router-dom',
      'redux',
      'react-dom',
      'react-redux'
    ]
  },

  /* 输出到 dist 文件夹，输出文件名为 bundle.js  */
  /* 增加 chunkFilename 按需加载分别打包，名称在 router bundle-loader 内有配置 */
  output: {
    path: path.join(__dirname, './dist'),
    // filename: 'bundle.js',
    // chunkFilename: '[name].js',
    filename: '[name].[chunkhash].js', // 这里应该用 chunkhash 替换成 hash
    chunkFilename: '[name].[chunkhash].js',
  },

  /* src 文件夹下面的以 .js 结尾的文件，要使用 babel 解析 */
  /* cacheDirectory 是用来缓存编译结果，下次编译加速  */
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif)/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192 // <=8k 的图片会被转成 base64 编码，直接插入 HTML 中，减少 HTTP 请求
          }
        }]
      }
    ]
  },

  /* 插件 */
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        drop_console: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './src/index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ],

  /* 目录别名 */
  resolve: {
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      components: path.join(__dirname, 'src/components'),
      router: path.join(__dirname, 'src/router'),
      actions: path.join(__dirname, 'src/redux/actions'),
      reducers: path.join(__dirname, 'src/redux/reducers'),
    }
  },

  /* 详细的控制台错误信息配置 */
  devtool: 'cheap-module-source-map'
}