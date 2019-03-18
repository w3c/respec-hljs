const path = require("path");

module.exports = {
  entry: "./src/respec-highlight.js",
  output: {
    filename: "respec-highlight.js",
    path: path.resolve(__dirname, "dist"),
    library: "",
    libraryTarget: "umd",
  },
  optimization: {
    usedExports: true,
  },
  mode: "development",
};
