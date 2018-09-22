const config = require('../config/webpack.config.js');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

config.plugins.push(
  new BundleAnalyzerPlugin({
    analyzerHost: 'localhost',
    analyzerPort: 8585,
  })
);

webpack(config).run();
