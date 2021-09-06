const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = () => ({
  devtool: false,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    open: true,
    static: path.resolve(__dirname, "../dist"),
    port: 3000,
    compress: true,
  },
  plugins: [new HotModuleReplacementPlugin()],
});
