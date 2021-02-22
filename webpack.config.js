const path = require("path");

module.exports = {
  entry: "./src/respec-highlight.js",
  output: {
    filename: "respec-highlight.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    globalObject: "this"
  },
  optimization: {
    usedExports: true,
  },
  mode: "production",
};
