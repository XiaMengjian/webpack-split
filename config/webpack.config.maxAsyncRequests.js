const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.config.common')

module.exports = merge(common, {
    entry: {
        entry0: path.resolve(__dirname, '../src/vue0.js'),
        entry2: path.resolve(__dirname, '../src/vue2.js'),
        entry3: path.resolve(__dirname, '../src/vue3.js')
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            maxAsyncRequests: 3,
        },
    },
})
