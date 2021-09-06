const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");

module.exports = () => {
  return {
    output: {
      path: path.resolve(__dirname, "../dist"),
      publicPath: "./",
      filename: "[name].[contenthash].bundle.js",
    },
    devtool: false,
    module: {
      rules: [
        {
          test: /\.(css)$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
          //   options: {
          //     sourceMap: false,
          //   },
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "styles/[name].[contenthash].css",
        chunkFilename: "[id].css",
      }),
    ],
    optimization: {
      minimize: true,
      minimizer: [new CssMinimizerPlugin(), "..."],
      runtimeChunk: {
        name: "runtime",
      },
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };
};
