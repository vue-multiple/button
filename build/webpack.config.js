var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '..', './lib'),
    filename: 'button.js',
    library: 'button',
    libraryTarget: 'umd'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            }),
            less: ExtractTextPlugin.extract({
              fallback: 'vue-style-loader',
              use: ['css-loader', 'less-loader']
            })
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: "css-loader",
          fallback: "style-loader"
        })
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', 'fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin({
      filename: '../lib/button.css',
      allChunks: true
    })
  ]
}