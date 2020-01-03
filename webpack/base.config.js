const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: "[name].[hash:4].js",
        chunkFilename: "[name].[hash:4].chunk.js",
        publicPath: "/"

    },
    module: {
        rules: [
            {
                use: ['babel-loader'],
                test: /\.js$/
            },
            {
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 40000 }
                    },
                    'image-webpack-loader'
                ],
                test: /\.(jpe?g|png|gif|svg)$/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]


}