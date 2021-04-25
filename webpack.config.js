const path = require("path");

module.exports = {
  mode: "development",
  entry: "index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  target: "node",
  devServer: {
    port: "9444",
    contentBase: ["./public"],
    open: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
};