var path = require('path');
var webpack = require('webpack');

var onlyServer = 'webpack/hot/only-dev-server';
var mwClient = 'webpack-hot-middleware/client';
var entryFile = path.join(__dirname, '/src/index.tsx');

module.exports = {
    devtool: "source-map",
    // entry: [
    //     'webpack-dev-server/client?http://localhost:3000',
    //     './src/index'
    // ],
    // entry: [
    //     'webpack-dev-server/client?http://localhost:3000',
    //     'webpack/hot/only-dev-server',
    //     './src/index'
    // ],
    entry: [entryFile, mwClient, entryFile],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/'
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx']
    },
    module: {
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ],

        loaders: [{
            test: /\.tsx?$/,
            loaders: ['react-hot', 'awesome-typescript-loader'],
            include: path.join(__dirname, 'src')
        }]
    }
};