resolve: {
  extensions: ['', '.js', '.jsx', '.json']
},
module: {
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"]
    }
  ]
}
