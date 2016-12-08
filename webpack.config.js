var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    'main': './src/main',
    'main-react': './src/main-react'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};