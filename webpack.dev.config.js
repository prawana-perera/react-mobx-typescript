var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    devtool: 'source-map',

    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'index.tsx'
    ],

    output: {
        filename: 'app.js',
        publicPath: 'http://localhost:3000/',
        path: path.resolve('dist')
    },

    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
        modulesDirectories: ['src', 'node_modules']
    },

    plugins: [
        // Add the Webpack HMR plugin so it will notify the browser when the app code changes
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: path.join(__dirname, 'assets/index.html'),
            favicon: path.join(__dirname, 'assets/favicon.ico')
        }),
        new WebpackNotifierPlugin({alwaysNotify: false})
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