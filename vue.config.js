const path = require('path')
const targetUrl = 'http://localhost:9802'

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    proxy: {
      '/monster-security': {
        // 实际地址
        target: targetUrl,
        changeOrigin: true,
        pathRewrite: {
          '^/monster-security': '/monster-security' //重写接口
        }
      },
      '/api': {
        // 实际地址
        target: targetUrl,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' //重写接口
        }
      }
    }
  },
  productionSourceMap: true,
  configureWebpack: {
    devtool: 'eval-source-map',
    mode: 'development',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src') // 确保 @ 指向 src 目录
      }
    },
    performance: {
      hints: process.env.NODE_ENV === 'production' ? 'error' : 'warning',
      maxAssetSize: process.env.NODE_ENV === 'production' ? 1000000 : 50000000,
      maxEntrypointSize: process.env.NODE_ENV === 'production' ? 1500000 : 50000000,
      assetFilter: assetFilename => assetFilename.endsWith('.js') || assetFilename.endsWith('.css')
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        maxSize: 250000,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          }
        }
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@use "@/styles/_variables" as *;`
      }
    }
  }
}
