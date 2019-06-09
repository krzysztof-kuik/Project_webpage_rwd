var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: ["./src/js/app.js", './src/scss/main.scss'],
  mode: "development",
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, 'dist'),
   
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    watchContentBase: true,
    port: 9000,
    host: '0.0.0.0',
    
    
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output

              hmr: process.env.NODE_ENV === 'development',
            },
          },
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              includePaths: ["absolute/path/a", "absolute/path/b"],
              sourceMap: true,
              sourceMapContents: false
            }
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      },
      {
        test: /\.(png|jpg|gif|svg|)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '/images/',
            publicPath: './images',
          }
        }]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src', 'img:src', 'link:href']
          }
        }
      },
      
    ]
  }
};