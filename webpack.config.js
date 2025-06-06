const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
    quiz: './src/quiz/quiz.js',
    cats: './src/cats/cats.js',
    catalog: './src/catalog/catalog.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'cats.html',
      template: './src/cats/cats.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'dogs.html',
      template: './src/dogs/dogs.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'quiz.html',
      template: './src/quiz/quiz.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'catalog.html',
      template: './src/catalog/catalog.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
}
