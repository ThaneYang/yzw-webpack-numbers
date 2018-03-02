var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'yzw-webpack-numbers.js',
    path: path.resolve(__dirname, './dist'),
    library: 'yzwWebpackNumbers',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  externals: {
    'lodash': {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
