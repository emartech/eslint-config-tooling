const typescriptBackend = require("./lib/typescript/backend");
const javascriptBackend = require("./lib/javascript/backend");
const testing = require("./lib/testing");

module.exports = {
  configs: {
    testing,
    "typescript-backend": typescriptBackend,
    "javascript-backend": javascriptBackend
  }
};
