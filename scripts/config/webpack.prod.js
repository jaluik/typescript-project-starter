const { merge } = require('webpack-merge');
const glob = require('glob');
const path = require('path');
const PurgeCssPlugin = require('purgecss-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');
const { PROJECT_PATH } = require('../constants');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'none',
  plugins: [
    new PurgeCssPlugin({
      paths: glob.sync(`${path.resolve(PROJECT_PATH, './src')}/**/*.{tsx,scss,less,css}`, { nodir: true }),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
      ignoreOrder: false,
    }),
  ],
});
