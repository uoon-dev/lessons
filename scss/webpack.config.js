const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const srcDir = path.resolve(__dirname, 'frontend');
// const distDir = path.resolve(__dirname, 'static');

module.exports = {
  entry: {
    style: path.resolve('dist', 'styles.scss'),
  },
  output: {
    path: distDir,
    // libraryTarget: 'umd',
    // filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              url: false,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
};
