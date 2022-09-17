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
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      }
    ]
  }
};