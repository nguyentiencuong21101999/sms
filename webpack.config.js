const path = require("path");
const fs = require('fs');
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'development',
  resolve: {
    extensions: [".ts", ".js"],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {}
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }]
  },
  entry: ['babel-polyfill', path.join(__dirname, 'app.js')],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: `server.min.js`
  },
  node: {
    __dirname: false
  },
  externals: [nodeExternals()]
};
