const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  mode: NODE_ENV,
  entry: './src/index.jsx',
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['...', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
  },
};
