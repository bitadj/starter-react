const webpack = require("webpack");
const WebpackDevServer = require('webpack-dev-server');
const config = require('../config/webpack.config.js');

const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
};

WebpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, config.devServer);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});
