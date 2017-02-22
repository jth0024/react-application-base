const autoprefixer = require('autoprefixer');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const _ = require('lodash');
// eslint-disable-next-line import/no-unresolved
// const dependencies = require('../../../../package.json').dependencies;
const helpers = require('../../helpers');
const babelConfig = require('../babel');

module.exports = {
  context: helpers.getRootDir(),
  entry: {
    app: './src/index.js',
    vendor: './src/vendor.js',
  },
  module: {
    rules: [
      // Files
      {
        test: /\.svg$/,
        use: 'url-loader?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[hash].[ext]',
      },
      {
        test: /\.woff$/,
        use: 'url-loader?limit=65000&mimetype=application/font-woff&name=fonts/[name].[hash].[ext]',
      },
      {
        test: /\.woff2$/,
        use: 'url-loader?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[hash].[ext]',
      },
      {
        test: /\.[ot]tf$/,
        use: 'url-loader?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[hash].[ext]',
      },
      {
        test: /\.eot$/,
        use: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[hash].[ext]',
      },
      // Import pre-built CSS files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Import src SASS files
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: { plugins: () => [autoprefixer] },
          },
          'resolve-url-loader',
          'sass-loader?sourceMap',
        ],
      },
      // Import src JS files
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: babelConfig,
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['app', 'vendor'],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
