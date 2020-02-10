const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//单入口文件
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, './dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html')
        })
    ]
}

//多入口文件
module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/main.js'),
        rank: path.resolve(__dirname, './src/rank.js')
    },
    output: {
        filename: '[name].[hash:8],js',
        path: path.resolve(__dirname, './dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/rank.html'),
            filename: 'rank.html',
            chunks: ['rank']
        })
    ]
}