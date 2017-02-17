const merge = require('webpack-merge');
const core = require('./core.js');

module.exports = merge(core, {
  devtool: 'source-map',

  output: {
    path: 'dist',
    publicPath: 'http://localhost:8080',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
  },

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
  },
});
