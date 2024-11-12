const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'images/[name][ext]' // ذخیره تصاویر در پوشه images داخل dist
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource' // پردازش تصاویر
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource', // پردازش فونت‌ها
        generator: {
          filename: 'fonts/[name][ext]', // ذخیره فونت‌ها در پوشه fonts داخل dist
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/content.json", to: "content.json" }]
    })
  ],
  devServer: {
    static: './dist',
    open: true,
    hot: true
  },
  resolve: {
    extensions: ['.js', '.scss', '.css'],
  },
  mode: 'development'
};
