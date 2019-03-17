/**
 * Webpack for Development 的配置
 */
const merge = require('webpack-merge');
const path  = require('path');
const webpack = require('webpack');
const commonConfig = require('./webpack.common.config');

const devConfig = {
  /* 详细的控制台错误信息配置 */
  devtool: 'inline-source-map',

  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js')
    ]
  },

  output: {
    /* 这里本来因该是[chunkhash] ，由于[chunkhash]和 react-hot-loader 不兼容 */
    filename: '[name].[hash].js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", 'postcss-loader']
        // // 使用 modules 这里有个错误未解决 readme@No.6
        // use: ["style-loader", "css-loader?modules&localIdentName=[local]-[hash:base64:5]", 'postcss-loader']
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      MOCK: false
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
    proxy: {
      '/api/*': 'http://localhost:8090/$1'
    }
  }
}

module.exports = merge({
  customizeArray(a, b, key) {
    /* entry.app 不合并，全替换 */
    if (key === 'entry.app') {
      return b;
    }
    return undefined;
  }
})(commonConfig, devConfig);