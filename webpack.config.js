const path = require('path');

module.exports = {
  entry: './sources/index.js',
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};