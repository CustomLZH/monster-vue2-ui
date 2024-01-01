const { defineConfig } = require('@vue/cli-service')

const targetUrl = 'http://localhost:9802'

module.exports = defineConfig({
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
    proxy: {
      '/monster-security': {
        // 实际地址
        target: targetUrl,
        changeOrigin: true,
        pathRewrite: {
          '^/monster-security': '/monster-security'   //重写接口
        },
      },
      '/api': {
        // 实际地址
        target: targetUrl,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''   //重写接口
        },
      }
    }
  }
})
