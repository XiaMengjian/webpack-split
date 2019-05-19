const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, '../src/vue1.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '', // 资源引用路径
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
    },
    resolve: {
        // 对于部分文件没有添加类型后缀，默认以js,vue,json扩展补充
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
                use: 'babel-loader'
            },
            {

                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'less-loader',
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'async', // 一般可以指定三种形式 all（全部的 chunk，包含所有类型的 chunk）、async（按需加载的 chunk） 和 initial（初始的 chunk）
            minSize: 30000, // 一个新的 chunk 的最小体积，默认是 30000，即 30K
            minChunks: 1, // 在分割之前，这个代码块最小应该被引用的次数，默认是 1
            maxAsyncRequests: 10, // 按需加载时，并行请求的最大数量，默认是 5
            maxInitialRequests: 10, // 一个入口最大的并行请求数，默认是 3
            automaticNameDelimiter: '--', // 指定生成名字中的分隔符，Webpack 将使用 chunk 的名字和 chunk 的来源，如 vendors~main.js
            name: true, // 分割块的名称，提供 true 会自动生成基于 chunk 和缓存组键的名称
            cacheGroups: {
                vendors: {
                    // test: /[\\/]node_modules[\\/]/, // 匹配规则，一般使用正则表达式来匹配
                    priority: -10, // 抽取公共代码的优先级，数字越大，优先级越高
                    // enforce: true // 强制抽离 不关心miniChunks miniSize等限制条件
                },
                default: { // 默认缓存组的配置
                    // name: 'common', // 抽取公共代码的 chunk 名字
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: false // 是否重用 chunk，如果当前块包含已经从主bundle中分离出来的模块，那么它将被重用，而不是生成一个新的模块，一般设置为 true
                }
            }
        },
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                cache: true
            }),
        ],
        // runtimeChunk: {
        //     name: "manifest"
        // },
        /**
         * Removes modules from chunks when these modules are already included in all parents
         */
        removeAvailableModules: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: process.cwd()
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'Split Demo2',
            template: path.resolve(__dirname, '../public/index.html'),
            inject: 'body'
        }),
        /*
        *
        * filename 和 chunkfilename 的区别
        * Async Chunk => chunkFilename
        * Sync Chunk (e.g an Entrypoint) => filename
        * */
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new BundleAnalyzerPlugin(),
    ]
}
