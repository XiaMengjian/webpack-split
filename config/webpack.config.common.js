const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, '../src/vue1.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[chunkhash:8].js',
        chunkFilename: '[name].[chunkhash:8].chunk.js',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, 'src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {

                test: /\.less$/,

                loader: "style-loader!css-loader!less-loader",

            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'initial',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '---',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: process.cwd()
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        }),
        new BundleAnalyzerPlugin(),
    ]
}
