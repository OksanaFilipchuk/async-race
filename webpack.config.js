const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    filename: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: './',
    assetModuleFilename: 'images/[name][ext]',
  },
  devServer: {
    port: 3000,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png)$/,
        type: 'asset/resource',
      },
    ],
  },
};
