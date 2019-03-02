module.exports = {
  env: {
    node: true
  },
  plugins: ["prettier"],
  extends: ["eslint:recommended"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 6
  },
  rules: {
    "prettier/prettier": "error"
  }
};
