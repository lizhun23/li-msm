/* const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path') */


module.exports = {
  // 基本路径  3.6之前的版本时 baseUrl
  //publicPath: "./",
  //baseUrl:'./',
  // 输出文件目录
  // outputDir: "dist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false, //关闭格式检查
  productionSourceMap: false,//打包时不会生成.map 文件 加快打包速度
  // webpack-dev-server 相关配置
  devServer: {
    //open: process.platform === "darwin",
    host: "localhost",
    port: 8888,
    https: false,
    //hotOnly: false,
    open: true,// 启动服务时 自动打开浏览器访问
    proxy: { //开发环境代理配置
      //'/dev-api': {
      [process.env.VUE_APP_BASE_API]: {
        //目标服务器地址 http://localhost:8001
        target: process.env.VUE_APP_SERVICE_URL,
        changeOrigin: true, //开启代理服务器
        pathRewrite: {
          // 当前缀 /dev-api 替换为 空的
          //'/dev-api': ''
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }

    }
  },

  /* configureWebpack: {
    output: {
      sourcePrefix: ' '
    },
    amd: {
      toUrlUndefined: true
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('src'),
      }
    }
  } */
};