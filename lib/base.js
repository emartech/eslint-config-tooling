module.exports = {
  env: {
    es2020: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },
  extends: ["emarsys", "prettier"],
  rules: {
    camelcase: 0
  }
};
