const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: './src/javascripts/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './javascripts/my.js',
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './stylesheets/main.css',
    }),
    new HtmlWebPackPlugin({
      template: './src/templates/index.html'
    }),
    new CleanWebpackPlugin(),
  ]
}
