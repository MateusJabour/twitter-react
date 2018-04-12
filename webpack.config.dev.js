var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/twitter.tsx'
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
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".sass", ".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // js
      {
        test: /\.tsx?$/,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      // CSS
      {
        test: /\.sass$/,
        include: path.join(__dirname, 'src'),
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
};
