/**
 * 项目部署环境配置文件
 */

var path = require('path');
var webpack = require('webpack')
// 抽取css的第三方插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// 自动生成index.html页面插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 删除文件夹
var CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/app.js'),
        vendors: ['vue','vue-router','babel-polyfill']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.[chunkhash:8].js',
        // 为了做代码的异步加载
        publicPath:'/',
        chunkFilename: '[name].chunk.[chunkhash:8].js'
    },
    module: {
        loaders: [
            // 处理ES6语法
            {
                test: /\.js?$/,
                loader: 'babel',
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            },
            {
                test: /.*\.(gif|png|jpe?g|svg|pdf|docx)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex' +
                    '&name=content/images/[hash:8].[name].[ext]',
                    'image-webpack'
                ]
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=&minetype=application/font-woff' +
                '&name=content/fonts/[hash:8].[name].[ext]'
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=&name=content/fonts/[hash:8].[name].[ext]'
            }, {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    vue: {
        loaders: {
            js: 'babel'
        }
    },
    resolve: {
        extensions: ['', '.js', '.json', '.scss','.vue']
    },
    externals: {
        '$':"jQuery"
    
    },
    plugins: [
        new CleanPlugin(['dist']),
        new webpack.optimize.CommonsChunkPlugin('vender.[hash:8].js'),
        // 用webpack压缩代码，可以忽略代码中的警告
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('[name].[contenthash:8].css', {
            allChunks: true,
            disable: false
        }),
        new HtmlWebpackPlugin({
            title: 'vue-webpack基础框架',
            template: './src/index.html',
            filename: 'index.html',
            hash: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
}