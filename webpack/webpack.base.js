const webpack = require('webpack');
const path = require('path');

module.exports = {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/assets'),
    publicPath: 'assets/'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      app: path.resolve(__dirname, '../app'),
      library: path.resolve(__dirname, '../app/components-library'),
      components: path.resolve(__dirname, '../app/app-components'),
      api: path.resolve(__dirname, '../app/api'),
      store: path.resolve(__dirname, '../app/store'),
    },
  },
};
