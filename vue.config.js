const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: 8888 // 指定端口号
  },
  transpileDependencies: true
})
