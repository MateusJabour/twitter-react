var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/twitter'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      include: path.join(__dirname, 'src'),
      loaders: ['babel-loader']
    },
    // CSS
    {
      test: /\.sass$/,
      include: path.join(__dirname, 'src'),
      loader: 'style-loader!css-loader!sass-loader'
    }
    ]
  }
};
