module.exports = {
  env: {
    es2020: true
  },
  parserOptions: {
    ecmaVersion: 2020 // Allows for the parsing of modern ECMAScript features
  },
  extends: ["emarsys", "prettier"],
  rules: {
    camelcase: 0
  }
};
