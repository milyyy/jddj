const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack(config) {
    // 配置全局sass
    globalSass(config)
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('utils', resolve('src/utils'))
      .set('store', resolve('src/store'))
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 9000,
    https: false,
    proxy: {
      '/api': {
        target: 'https://www.fastmock.site/mock/a8d6e6e531d0a37f4b8d962892c08cda/api', // 服务器请求接口地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
})

/**
 * 全局变量的Sass引方法
 * @param config  chainWebpack(config) 中来的一个配置
 * 注意Dependencies需要引入
 * "sass": "^1.32.7",
 *"sass-loader": "^12.0.0",
 *"sass-resources-loader": "^2.2.5"
 */
const globalSass = (config) => {
  const oneOfsMap = config.module.rule('scss').oneOfs.store
  oneOfsMap.forEach((item) => {
    item
      .use('sass-resources-loader')
      .loader('sass-resources-loader')
      .options({
        resources: './src/style/index.scss', // 相对路径
      })
      .end()
  })
}
