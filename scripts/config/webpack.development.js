const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { SERVER_HOST, SERVER_PORT } = require('../constants');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: SERVER_HOST,
    port: SERVER_PORT,
    open: true,
    hot: true,
    stats: 'errors-only',
    compress: true,
    clientLogLevel: 'silent',
  },
});
