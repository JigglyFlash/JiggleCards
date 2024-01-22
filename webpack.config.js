const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    src: './client/index.jsx',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './client/index.html',
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    hot: true,
    static: {
      publicPath: '/build',
      directory: path.resolve(__dirname, 'build'),
    },
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      '/**': { target: 'http://localhost:3000/', secure: false },
    },
  },
};
