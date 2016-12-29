var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    devtool: 'cheap-module-source-map',

    entry: {
        app: 'index.tsx',
        vendor: ["mobx", "mobx-react", "react", "react-dom"]
    },

    output: {
        filename: 'app.js',
        path: path.resolve('dist')
    },

    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
        modulesDirectories: ['src', 'node_modules']
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            template: path.join(__dirname, 'assets/index.html'),
            favicon: path.join(__dirname, 'assets/favicon.ico')
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],

    module: {

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {test: /\.js$/, loader: "source-map-loader"}
        ],

        loaders: [
            {test: /\.tsx?$/, loaders: ['babel', 'awesome-typescript-loader']}
        ]
    }
};