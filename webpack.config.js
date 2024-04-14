const path = require("path");
var JSEntryWebpackPlugin = require("js-entry-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin-next');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                ["@babel/preset-react", {"runtime": "automatic"}],
                '@babel/preset-typescript',
              ],
            },
          },
        },
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'images/'
              },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
      }),
    ],
  };
  