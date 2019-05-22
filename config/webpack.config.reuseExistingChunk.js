const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.config.common')

module.exports = merge(common, {
    entry: {
        b: [path.resolve(__dirname, '../src/assets/echarts')],
        c: path.resolve(__dirname, '../src/vue1')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
})
