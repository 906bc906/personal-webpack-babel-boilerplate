const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './sources/index.js',
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: 'index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './sources/index.html'
    })
  ]
};