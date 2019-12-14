const merge = require("webpack-merge");
const base = require("./base.config.js");
const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HOST = "localhost";
const PORT = 3008;

module.exports = merge(base, {
    mode: "development",
    devServer: {
        contentBase: path.join(process.cwd(), 'dist'),
        hot: true,
        host: HOST,
        port: PORT,
        compress: true,
        historyApiFallback: true,
        clientLogLevel: 'debug',
        watchOptions: {
            poll: true,
            ignored: /node_modules/
        },
    },
    module: {
        rules: [
            {
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                test: /\.css/
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "main/css/[name].[hash:4].css"
        })

    ]
});