var path = require('path');
var webpack = require('webpack');

module.exports = {
    // components: 'src/components/**/[A-Z]*.js',
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
