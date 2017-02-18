/* global module */
module.exports = function(config) {
  config.set({
    browsers:  ["PhantomJS"],
    frameworks: ["jasmine"],
    files: [
      "di4js.js",
      "./spec/**/*.spec.js"
    ]
  });
};