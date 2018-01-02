var path = require('path');
const marked = require("marked");

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // Add the JSHint loader
  module: {
    rules: [
      {
        test: /\.js$/, // Run the loader on all .js files
        exclude: /node_modules/, // ignore all files in the node_modules folder
        use: 'jshint-loader'
      },
      {
        test: /\.md$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader"
          }
        ]
      }
    ]
  }
};