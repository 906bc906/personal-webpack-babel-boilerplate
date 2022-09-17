const path = require('path');

module.exports = {
  entry: './sources/index.js',
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: 'index.js'
  }
};