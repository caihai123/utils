const path = require("path");

module.exports = {
  mode: "none",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "caihai-utils.js",
    library: "utils",
    libraryTarget: "umd",
  },
};
