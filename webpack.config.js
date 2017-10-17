const webpack = require('webpack');
const merge = require('webpack-merge');

const BASE_CONFIG = require('./webpack/webpack.base');
const DEV_CONFIG = require('./webpack/webpack.dev');
const PROD_CONFIG = require('./webpack/webpack.prod');

const isProd = process.env.NODE_ENV === 'production';
const CONFIG_TO_MERGE = isProd ? PROD_CONFIG : DEV_CONFIG;

module.exports = merge.smart({
  entry: ['./app/index.js'],
}, BASE_CONFIG, CONFIG_TO_MERGE);
