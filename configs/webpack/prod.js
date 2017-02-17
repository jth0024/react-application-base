const webpack = require('webpack');
const merge = require('webpack-merge');
const coreConfig = require('./core.js');

module.exports = merge(coreConfig, {
  devtool: 'source-map',

  output: {
    path: 'dist',
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
});
