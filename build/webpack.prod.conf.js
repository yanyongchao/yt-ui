const path = require('path')
const glob = require('glob')

const resolve = (dir) => path.resolve(__dirname, dir)

let entryFiles = glob.sync(resolve('../src/components/**/*.js'))

entryFiles = entryFiles.reduce((prev, next) => {
  let moduleName = next.match(/src\/components\/(\w+)\/index\.js/)
  if (moduleName) {
    moduleName = moduleName[1]
  }
  prev[moduleName] = resolve(next)
  return prev
}, {})

entryFiles.index = resolve('../src/index.js')

const buildConf = {
  outputDir: 'lib',
  productionSourceMap: false,
  css: {
    sourceMap: true,
    extract: {
      filename: 'style/[name].css'
    },
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/index.scss";'
      }
    }
  },
  configureWebpack: {
    entry: {
      ...entryFiles
    },
    output: {
      filename: '[name]/index.js',
      libraryTarget: 'commonjs2'
    },
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
