const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const dev = process.env.NODE_ENV !== 'production';

const CleanWebpackPluginConfig = new CleanWebpackPlugin(
  ['dist'], { root: path.resolve(__dirname, '../') }
);

const HotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.resolve(__dirname, '../public/index.html'),
  filename: 'index.html',
  inject: 'body',
});

const IgnorePluginConfig = new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/);

const contentBase = path.resolve(__dirname, '../dist');

module.exports = {
  devServer: {
    contentBase,
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
    host: 'localhost',
    hot: true,
    open: true,
    overlay: true,
    port: '8484',
    progress: true,
    stats: {
      children: false,
      // entrypoints: false,
      hash: false,
      modules: false,
      moduleTrace: false,
    }
  },
  entry: [
    'react-hot-loader/patch',
    path.resolve(__dirname, '../src/index.jsx')
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['react-hot-loader/babel'],
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    // filename: 'index.js',
    chunkFilename: '[name].bundle.js',
    filename: '[name].bundle.js',
    path: contentBase,
  },
  mode: 'production',
  plugins: dev ?
    [
      HTMLWebpackPluginConfig,
      HotModuleReplacementPlugin,
    ] :
    [
      CleanWebpackPluginConfig,
      HTMLWebpackPluginConfig,
      IgnorePluginConfig,
    ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](lodash)[\\/]/,
          name: 'lodash',
          chunks: 'all',
        }
      }
    }
  }
};
