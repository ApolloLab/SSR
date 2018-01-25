const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:{
        vendor:[ "./node_modules/bootstrap/dist/css/bootstrap.css"],
        index: ["./public/src/index.js","./public/style/index.css"]
    },
    output: {
        path: path.resolve(__dirname,"./public/dist"),
        publicPath: '/',
        filename: '[name].js',
    },
    devServer: {
        publicPath: "/",
        contentBase: path.resolve(__dirname, "./public/dist/[name]"),
        port:3000,
        inline: true, //添加
        hot: true
    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/, //配置要处理的文件格式，一般使用正则表达式匹配
                exclude: /node_modules/,
                loader: 'babel-loader', //使用的加载器名称
                query: { //babel的配置参数，可以写在.babelrc文件里也可以写在这里
                    presets: ['env', 'react','es2015','stage-2']
                },
            },
            {
                test: /\.css/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                }),
            },
            {
                test: [/\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: 'url-loader',
                // options: {
                //     limit: 10000, //1w字节以下大小的图片会自动转成base64
                // }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', //指定模板路径
            filename: 'index.html', //指定文件名
        }),
        new ExtractTextWebpackPlugin("[name].css"),
        new webpack.optimize.CommonsChunkPlugin({name:"vendor", filename:"vendor.bundle.js"}),
        new webpack.HotModuleReplacementPlugin(), //添加
        new webpack.NamedModulesPlugin(), //添加，官方推荐的帮助分析依赖的插件
    ]
}