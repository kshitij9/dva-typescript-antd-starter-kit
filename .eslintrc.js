module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "./build/webpack.base.js",
      },
    },
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    // 'project': './tsconfig.json',
  },
  plugins: ["react-hooks", "@typescript-eslint", "react", "prettier"],
  extends: [
    "airbnb", // https://www.npmjs.com/package/eslint-config-airbnb#eslint-configairbnbhooks
    "airbnb/hooks", // https://www.npmjs.com/package/eslint-config-airbnb#eslint-configairbnbhooks
    "eslint:recommended", // https://github.com/yannickcr/eslint-plugin-react#recommended
    "plugin:react/recommended", // https://github.com/yannickcr/eslint-plugin-react#recommended
    "plugin:@typescript-eslint/eslint-recommended", // https://www.npmjs.com/package/@typescript-eslint/eslint-plugin#usage
    "plugin:@typescript-eslint/recommended", // https://www.npmjs.com/package/@typescript-eslint/eslint-plugin#usage
    "prettier", // https://github.com/prettier/eslint-config-prettier#installation
    "prettier/@typescript-eslint", // https://github.com/prettier/eslint-config-prettier#installation
    "prettier/react", // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    "plugin:prettier/recommended", // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
  ],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "max-classes-per-file": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "react/jsx-props-no-spreading": 0,
    "no-useless-escape": 0,
    "import/prefer-default-export": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-curly-newline": 0,
    "react/jsx-wrap-multilines": 0,
  },
};
