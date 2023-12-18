const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: "xuni",
    filename: "bundle.js",
  },
  devServer: {
    port: 8080,
    contentBase: "www",
    open: true, // 启动服务器时自动打开页面
  },
};
