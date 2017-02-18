const autoprefixer = require('autoprefixer');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const _ = require('lodash');
const path = require('path');
// eslint-disable-next-line import/no-unresolved
const dependencies = require('../../../../package.json');
const babelConfig = require('../babel');
const webpack = require('webpack');

const vendor = _(dependencies).keys().value();

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: () => [autoprefixer],
  },
};

module.exports = {
  context: path.resolve(__dirname, '../../../../'),
  entry: {
    app: 'src/index.js',
    vendor,
  },
  resolve: {
    extensions: ['', '.js'],
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
      {
        test: /\.json$/,
        use: ['json-loader'],
        exclude: /node_modules/,
      },
      // Import pre-built CSS files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Import src SASS files
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', postcssLoader, 'resolve-url-loader', 'sass-loader?sourceMap'],
      },
      // Import src JS files
      {
        test: /\.js$/,
        use: 'babel',
        exclude: /node_modules/,
        options: babelConfig,
      },
    ],
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
    // new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};
