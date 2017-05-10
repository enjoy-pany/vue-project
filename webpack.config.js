const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname + '/prd/',
    filename: "build.js"
  },
  module: {
    loaders: [
      { 
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      { 
        test: /\.vue$/,
        loader: "vue-loader" 
      },
      { 
        test: /\.css$/,
        loader: "vue-style-loader" 
      },
      { 
        test: /\.s(a|c)ss$/,
        loader: "sass-loader"
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {'vue': 'vue/dist/vue.js'}
  },
  plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
        // new webpack.optimize.UglifyJsPlugin({//压缩js插件
        //   compress: {
        //     warnings: false
        //   }
        // })
  ],
  devtool:'eval-source-map',
  devServer: {
    contentBase:  "./prd",//本地服务器所加载的页面所在的目录
    // colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    //hot: true,
    inline: true//实时刷新
  } 
};
