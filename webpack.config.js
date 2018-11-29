const path = require("path");
const PerspectivePlugin = require("@jpmorganchase/perspective/webpack-plugin");
const webpack = require("webpack");

const packagejson = require('./package.json');
const dashLibraryName = packagejson.name.replace(/-/g, '_');
const modeSuffix = 'min';
const filename = `${dashLibraryName}.${modeSuffix}.js`;


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
        path: path.resolve(__dirname, dashLibraryName),
        filename,
        library: dashLibraryName,
        libraryTarget: 'window',
    }
};
