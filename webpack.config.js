const path = require("path");
const PerspectivePlugin = require("@jpmorganchase/perspective/webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: "./src/lib/index.js",
    resolveLoader: {
        alias: {
            "file-worker-loader": "@jpmorganchase/perspective/src/loader/file_worker_loader.js"
        }
    },
    externals: /\@jupyter|\@phosphor|react|react-dom|plotly.js/,
    plugins: [new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /(en|es|fr)$/), new PerspectivePlugin()],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{loader: "css-loader"}]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {test: /\.ts?$/, loader: "ts-loader"}
        ]
    },
    output: {
        filename: "index.js",
        libraryTarget: "umd",
        path: path.resolve(__dirname, "../../build")
    }
};
