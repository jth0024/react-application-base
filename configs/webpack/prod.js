const webpack = require('webpack');
const merge = require('webpack-merge');
const helpers = require('../../helpers');
const baseConfig = require('./base.js');

module.exports = merge(baseConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.fromRootDir('dist'),
    // used for file loader
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js',
    sourceMapFilename: '[name].map',
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: { screw_ie8: true },
      mangle: { screw_ie8: true, keep_fnames: true },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
});
