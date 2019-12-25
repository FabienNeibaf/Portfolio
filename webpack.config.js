const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-react-jsx', 'react-hot-loader/babel'],
          },
        },
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|png)$/i,
        use: 'file-loader',
      },
      {
        test: /\.svg$/,
        use: '@svgr/webpack',
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
