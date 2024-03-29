"use strict";
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require("path");
var os = require("os");
var IPv4 = "localhost";
var readFile = require("fs");
let network = os.networkInterfaces();

//动态的获取本机IP地址
for (let key in network) {
  let env = network[key];
  for (var i = 0; i < env.length; i++) {
    if (env[i].family == "IPv4" && env[i].address != "127.0.0.1") {
      IPv4 = env[i].address;
    }
  }
}
//获取内置服务器的配置
let bultinService = {
  path: "./service/app/config.json"
};
bultinService.config = JSON.parse(
  readFile.readFileSync(bultinService.path, "utf-8")
);

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    proxyTable: {
      ["/" + bultinService.config.prefix]: {
        target: `http://${IPv4}:${bultinService.config.port}/`
      }
    },

    // Various Dev Server settings
    //

    host: IPv4, // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    // devtool: 'cheap-module-eval-source-map',
    devtool: "#source-map",

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, "../dist/index.html"),

    // Paths
    assetsRoot: path.resolve(__dirname, "../dist"),
    assetsSubDirectory: "static",
    assetsPublicPath: "./",

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: "source-map",

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ["js", "css"],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
};
