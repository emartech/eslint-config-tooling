module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser,
  parserOptions: {
    sourceType: "module" // Allows for the use of imports
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "./lib/base",
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint" // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/no-unused-vars": [2, { vars: "all", args: "after-used", ignoreRestSiblings: true }],
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/explicit-module-boundary-types": [
      "warn",
      {
        allowArgumentsExplicitlyTypedAsAny: true
      }
    ]
  }
};
