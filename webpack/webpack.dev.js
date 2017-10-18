const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const plugins = [
  new ExtractTextPlugin({
    filename: 'style.css',
    allChunks: true,
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  })
];

module.exports = {
  plugins,
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?sourse-map=true',
        }),
      },
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /public/],
      }
    ],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    port: 3003,
    historyApiFallback: true,
  },
};
