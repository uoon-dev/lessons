const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const srcDir = path.resolve(__dirname, 'frontend');
const distDir = path.resolve(__dirname, 'static');
const vendorDir = path.resolve(__dirname, 'node_modules');
const CopyPlugin = require('copy-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

module.exports = {
  entry: {
    polyfill: path.resolve(srcDir, 'entry/polyfill.js'),
    index: path.resolve(srcDir, 'entry/index.js'),
    signup: path.resolve(srcDir, 'entry/accounts/signup.js'),
    login: path.resolve(srcDir, 'entry/accounts/login.js'),
    password_reset: path.resolve(srcDir, 'entry/accounts/password_reset.js'),
    password_reset_done: path.resolve(
      srcDir,
      'entry/accounts/password_reset_done.js'
    ),
    password_reset_from_key: path.resolve(
      srcDir,
      'entry/accounts/password_reset_from_key.js'
    ),
    password_change: path.resolve(srcDir, 'entry/accounts/password_change.js'),
    user_info_change: path.resolve(
      srcDir,
      'entry/accounts/user_info_change.js'
    ),
    tag: path.resolve(srcDir, 'entry/tag.js'),
    course: path.resolve(srcDir, 'entry/course.js'),
    vodklass_watch: path.resolve(srcDir, 'entry/vodklass_watch.js'),
    vodklass_watch_style: path.resolve(srcDir, 'styles/vodklass_watch.scss'),
    faq: path.resolve(srcDir, 'entry/faq.js'),
    agreement: path.resolve(srcDir, 'entry/agreement.js'),
    bill_request: path.resolve(srcDir, 'entry/bill_request.js'),
    bill_return: path.resolve(srcDir, 'entry/bill_return.js'),
    unified: path.resolve(srcDir, 'styles/unified.scss'),
    course_style: path.resolve(srcDir, 'styles/course.scss'),
    account: path.resolve(srcDir, 'styles/account.scss'),
    checkout: path.resolve(srcDir, 'styles/checkout.scss'),
    bill: path.resolve(srcDir, 'styles/bill.scss'),
    checkout_list: path.resolve(srcDir, 'entry/checkout_list.js'),
    checkout_detail: path.resolve(srcDir, 'entry/checkout_detail.js'),
    // vod_watch: path.resolve(srcDir, 'entry/vod_watch.js'),
    // enter_auth: path.resolve(srcDir, 'entry/enter_auth.js'),
    // studycoach_guide: path.resolve(srcDir, 'entry/studycoach_guide.js'),
    // edit_user_info: path.resolve(srcDir, 'entry/edit_user_info.js'),
    // apply_single_product: path.resolve(srcDir, 'entry/apply_single_product.js'),
    // apply_completed: path.resolve(srcDir, 'entry/apply_completed.js'),
    // inicis_pc_close_overlay: path.resolve(srcDir, 'entry/inicis_pc_close_overlay.js'),
    // inicis_pc_return: path.resolve(srcDir, 'entry/inicis_pc_return.js'),
    // checkout_list: path.resolve(srcDir, 'entry/checkout_list.js'),
    // checkout_detail: path.resolve(srcDir, 'entry/checkout_detail.js'),
  },
  output: {
    path: distDir,
    libraryTarget: 'umd',
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      { parser: { system: false } },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['@babel/preset-env'],
              plugins: [
                '@babel/plugin-transform-async-to-generator',
                '@babel/plugin-transform-arrow-functions',
                '@babel/plugin-transform-modules-commonjs',
              ],
            },
          },
          {
            loader: 'eslint-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
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
      {
        test: /\.html$/,
        include: [path.resolve(srcDir, 'template')],
        loader: 'vue-template-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              url: false,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  externals: {
    global: 'window',
  },
  resolve: {
    modules: [vendorDir, srcDir],
    alias: {
      '@': srcDir,
      vue$: 'vue/dist/vue.runtime.esm.js',
      swiper: path.resolve(__dirname, 'node_modules/swiper/js/swiper.min.js'),
    },
    extensions: ['.js', '.json', '.css'],
  },
  devtool: false,
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin([
      { from: path.resolve(srcDir, 'img'), to: path.resolve(distDir, 'img') },
      {
        from: path.resolve(srcDir, 'styles/img'),
        to: path.resolve(distDir, 'css/img'),
      },
      {
        from: path.resolve(srcDir, 'fonts'),
        to: path.resolve(distDir, 'fonts'),
      },
    ]),
    new FixStyleOnlyEntriesPlugin(),
  ],
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'async',
      minSize: 0,
      cacheGroups: {
        vendors: false,
        default: false,
        common: {
          chunks(chunk) {
            return chunk.name !== 'polyfill' && chunk.name !== 'unified';
          },
          test: (m, c, entry) => m.constructor.name !== 'CssModule',
          name: 'common',
          minChunks: 3,
          priority: 20,
          enforce: true,
        },
      },
    },
  },
};
