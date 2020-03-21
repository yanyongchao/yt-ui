const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)
const baseConf = require(resolve('build/webpack.base.conf.js'))
const devConf = require(resolve('build/webpack.dev.conf.js'))
const prodConf = require(resolve('build/webpack.prod.conf.js'))
const IS_PROD = process.env.NODE_ENV === 'production'

let vueConf = {
  ...baseConf
}

if (IS_PROD && process.env.BUILD_ENV === 'lib') {
  vueConf = { ...vueConf, ...prodConf }
} else {
  vueConf = { ...vueConf, ...devConf }
}

module.exports = vueConf
