module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + '/prd/',
    filename: "build.js"
  },
  module: {
    loaders: [
      { test: /\.js$/,loader: "babel-loader" },
      { test: /\.vue$/,loader: "vue-loader" },
      { test: /\.css$/,loader: "vue-style-loader" },
      { test: /\.s(a|c)ss$/,loader: "sass-loader" }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [],
  devtool:'eval-source-map',
  devServer: {
    contentBase:  "./prd",//本地服务器所加载的页面所在的目录
    // colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    //hot: true,
    inline: true//实时刷新
  } 
};
