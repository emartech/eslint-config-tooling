const typescriptBackend = require("./lib/typescript/backend");
const javascriptBackend = require("./lib/javascript/backend");

module.exports = {
  configs: {
    "typescript-backend": typescriptBackend,
    "javascript-backend": javascriptBackend
  }
};
