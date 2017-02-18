const merge = require('webpack-merge');
const coreConfig = require('./core.js');

module.exports = merge.smart({}, coreConfig, {
  devtool: 'source-map',

  output: {
    // used for file loader
    publicPath: 'http://localhost:8080',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
  },

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
  },
});
