/**
 * 项目开发环境配置文件
 */
var path = require('path');
var webpack = require('webpack');
// 自动打开浏览器插件
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// 配置文件
var siteConfig = require('./config');
var _url = 'http://' + siteConfig.host + ':' + siteConfig.port + '/';

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?' + _url,
        path.resolve(__dirname,'src/app.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: '#source-map',
    module: {
        preLoaders: [
            { test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/ }
        ],
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
                loader: 'style!css'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass!scss'
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
        extensions: ['', '.js', '.json', '.scss', '.vue']
    },
    devServer: { // 代理 处理跨域
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: siteConfig.port, //设置端口号
        proxy: {
            '/h5/*': {
                target: siteConfig.target,
                secure: false,
                changeOrigin: true
            }
        }

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({url: _url}) // 指定浏览器编译后默认自动打开
    ]
}



