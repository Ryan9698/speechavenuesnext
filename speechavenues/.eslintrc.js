module.exports = {
  extends: ["next/core-web-vitals", "next/babel"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "off", // Disable the rule for unescaped entities
    "react-hooks/exhaustive-deps": "warn", // Change to warn instead of error
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["next/babel"],
    },
  },
};
