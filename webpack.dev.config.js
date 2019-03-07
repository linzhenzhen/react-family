// 开发期间 webpack 的配置文件
const path = require('path');

module.exports = {
  /* 入口 */
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src/index.js')
  ],

  /* 输出到 dist 文件夹，输出文件名为 bundle.js  */
  /* 增加 chunkFilename 按需加载分别打包，名称在 router bundle-loader 内有配置 */
  output: {
    path: path.join(__dirname, './dist'),
    // filename: 'bundle.js',
    // chunkFilename: '[name].js',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js',
  },

  // 目录别名
  resolve: {
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      components: path.join(__dirname, 'src/components'),
      router: path.join(__dirname, 'src/router'),
      actions: path.join(__dirname, 'src/redux/actions'),
      reducers: path.join(__dirname, 'src/redux/reducers'),
    }
  },

  /* src 文件夹下面的以 .js 结尾的文件，要使用 babel 解析 */
  /* cacheDirectory 是用来缓存编译结果，下次编译加速  */
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
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

  /* 创建小型静态文件服务器，可以为 webpack 打包生成的资源文件提供 web 服务 */
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
    /* 后端服务代理 */
    // proxy: {
    //   "/api": "http://localhost:3000"
    // }
  },

  // 详细的控制台错误信息配置
  devtool: 'inline-source-map'

}