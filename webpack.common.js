const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['./assets/javascripts/site.js', './assets/stylesheets/site.scss'],
  output: {
    path: path.resolve(__dirname, '.tmp/dist/assets'),
    filename: 'javascripts/site.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: { url: false }
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'stylesheets/site.css',
      allChunks: true
    }),
    new CopyWebpackPlugin([{
      from: './assets/images',
      to: 'images',
      ignore: '.*'
    }])
  ],
};
