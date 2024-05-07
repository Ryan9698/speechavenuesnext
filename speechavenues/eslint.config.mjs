import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default {
  languageOptions: {
    globals: globals.browser,
  },
  extends: [pluginJs.configs.recommended, pluginReactConfig],
  files: ["**/*.js", "**/*.jsx"],
  ignorePatterns: ["node_modules/", ".next/"],
};
