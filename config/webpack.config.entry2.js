const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.config.common')

module.exports = merge(common, {
    entry: {
        entry1: path.resolve(__dirname, '../src/vue1.js'),
        entry2: path.resolve(__dirname, '../src/vue2.js')
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    }
})
