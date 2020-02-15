const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)

const devConf = {
  pages: {
    index: {
      entry: resolve('../examples/main.js'),
      template: resolve('../public/index.html'),
      filename: 'index.html'
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('../src')
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  },
  devServer: {
    port: 8091,
    hot: true,
    open: 'Google Chrome'
  }
}

module.exports = devConf
