'use strict';

module.exports = {
  context: __dirname + '/frontend',

  entry: {
    index: "./js/index"
  },

  output: {
    path: __dirname + '/public',
    publicPath: "/",
    filename: 'bundle.js'
  },

  watch: true,

  watchOptions: {
    aggregateTimeout: 100
  },

  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "sass-loader" // compiles Sass to CSS
      }]
    }]
  },

  devServer: {
        port: 8000,
        inline: false,
        contentBase: __dirname + '/public',
        hot: false
    }
};
