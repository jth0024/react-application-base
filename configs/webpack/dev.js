const merge = require('webpack-merge');
const baseConfig = require('./base.js');

module.exports = merge.smart({}, baseConfig, {
  devtool: 'source-map',

  output: {
    // used for file loader
    publicPath: 'http://localhost:8080',
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js',
    sourceMapFilename: '[name].map',
  },

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
  },
});
