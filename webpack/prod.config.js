const merge = require("webpack-merge");
const base = require("./base.config.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = merge(base, {
    mode: "production",
    module: {
        rules: [
            {
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                test: /\.css/
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[hash:4].css"
        })

    ]
});