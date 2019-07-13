const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

const common = require("./webpack.common.js");

module.exports = merge.smart(common, {
  devtool: "inline-source-map",
  entry: {
    webpack: "webpack/hot/poll?1000",
    main: path.join(__dirname, "services/main/index.ts"),
    auth: path.join(__dirname, "services/auth/index.ts"),
    secd: path.join(__dirname, "services/secondary/index.ts"),
    gate: path.join(__dirname, "gateway/index.ts")
  },
  externals: [
    nodeExternals({
      whitelist: ["webpack/hot/poll?1000"]
    })
  ],
  mode: "development",
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  watch: true
});
