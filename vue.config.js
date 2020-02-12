// const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const IS_PROD = process.env.NODE_ENV === 'production'

// const resolve = dir => path.join(__dirname, dir)

module.exports = {
  publicPath: '/',
  outputDir: 'dist', // 输出路径
  lintOnSave: true,
  runtimeCompiler: true, // 是否可以使用template模板
  parallel: require('os').cpus().length > 1, // 多余1核cpu时 启动并行压缩
  productionSourceMap: !IS_PROD, // 生产环境下 不使用soruceMap
  // eslint-disable-next-line no-dupe-keys
  parallel: require('os').cpus().length > 1,

  configureWebpack: config => {
    const plugins = []
    plugins.push(
      new StyleLintPlugin({
        context: 'src',
        files: ['**/*.css', '**/*.scss', '**/*.vue', '**/*.sass', '**/*.less'],
        fix: true
      })
    )
    config.plugins = [...config.plugins, ...plugins]
  }
}
