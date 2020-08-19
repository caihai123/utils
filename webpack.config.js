const path = require("path");

function generateConfig(name) {
  var uglify = name.indexOf('min') > -1;
  return {
    mode: uglify ? "production" : "development",
    entry: "./index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: name + ".js",
      sourceMapFilename: name + '.map',
      library: "utils",
      libraryTarget: "umd",
    },
    devtool: 'source-map'
  }
}

module.exports = ['caihai.utils', 'caihai-utils.min'].map((key) => generateConfig(key));