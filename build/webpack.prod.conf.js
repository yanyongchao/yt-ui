const path = require('path')
const glob = require('glob')

const resolve = (dir) => path.resolve(__dirname, dir)

let entryFiles = glob.sync(resolve('../packages/**/*.js'))

entryFiles = entryFiles.reduce((prev, next) => {
  let moduleName = next.match(/packages\/(\w+)\/index\.js/)
  if (moduleName) {
    moduleName = moduleName[1]
  } else {
    moduleName = 'index'
  }
  prev[moduleName] = resolve(next)
  return prev
}, {})

const buildConf = {
  outputDir: 'lib',
  productionSourceMap: false,
  css: {
    sourceMap: true,
    extract: {
      filename: 'style/[name].css'
    }
  },
  configureWebpack: {
    entry: {
      ...entryFiles
    },
    output: {
      filename: '[name]/index.js',
      libraryTarget: 'commonjs2'
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
    config.optimization.delete('splitChunks')
    config.plugins.delete('copy')
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugins.delete('hmr')
    config.entryPoints.delete('app')
  }
}

module.exports = buildConf
