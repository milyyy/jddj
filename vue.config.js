const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack (config) { // 配置全局sass
    globalSass(config)
  }
})

/**
 * 全局变量的Sass引方法
 * @param config  chainWebpack(config) 中来的一个配置
 * 注意Dependencies需要引入
 * "sass": "^1.32.7",
 *"sass-loader": "^12.0.0",
 *"sass-resources-loader": "^2.2.5"
 */
const globalSass = config => {
  const oneOfsMap = config.module.rule('scss').oneOfs.store
  oneOfsMap.forEach((item) => {
    item
      .use('sass-resources-loader')
      .loader('sass-resources-loader')
      .options({
        resources: './src/style/index.scss' // 相对路径
      })
      .end()
  })
}
