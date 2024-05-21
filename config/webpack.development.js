
const HtmlWepackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin')
const { join, resolve } = require('path')
const notifier = require('node-notifier');
const port = 8080;
module.exports = {
  devServer: {
    historyApiFallback: true,
    static: {
      directory: join(__dirname, '../dist')
    },
    hot: true,
    port,
  },
  stats: 'errors-only',
  output: {
    publicPath: '/',
    filename: 'scripts/[name].bundle.js',
    assetModuleFilename: 'images/[name].[ext]',
  },
  plugins: [
    new HtmlWepackPlugin({
      title: 'test111',
      filename: 'index.html',
      favicon: '',
      template: resolve(__dirname, '../src/index-dev.html')
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:' + port],
        notes: ['🏠构建信息请及时关注窗口右上角']
      },
      onErrors: function (severity, errors) {
        console.log(severity, errors)
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        console.log(error);
        notifier.notify({
          title: '💣 webpack Build Error',
          message: serverity + ': ' + error.name,
          subtitle: error.file || '',
          icon: join(__dirname, 'icon.png'),
        })
      },
      clearConsole: false,
    }),
  ]
};

