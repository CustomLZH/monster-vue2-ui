const { defineConfig } = require('@vue/cli-service')

const targetUrl = 'http://localhost:9802'

module.exports = defineConfig({
  devServer: {
    host: 'localhost',
    port: 8080,
    open: false,
    proxy: {
      '/api': {
        // 实际地址
        target: targetUrl,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})