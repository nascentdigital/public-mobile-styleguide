var path = require('path');
var webpack = require('webpack');

module.exports = {
    port: process.env.PORT,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'main.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
