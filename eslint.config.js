module.exports = [
  {
    files: ["*.js"],
    ignores: ["babel.config.js"],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
    },
    plugins: {
      jest: require("eslint-plugin-jest"),
    },
    rules: {
      "no-console": "off",
      "no-shadow": "off",
      "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    },
  },
  {
    files: ["*.js"],
    languageOptions: {
      globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
      },
    },
    settings: {
      jest: {
        version: 26,
      },
    },
  },
  {
    files: ["*.js"],
    linterOptions: {
      extends: ["airbnb-base", "plugin:jest/all"],
    },
    environment: {
      browser: false,
      es6: true,
      jest: true,
    },
  },
];
