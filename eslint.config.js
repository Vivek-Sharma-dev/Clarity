import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,

  {
    files: ["**/*.{js,jsx}"],
    plugins: { react },
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // JSX runtime (React import not required)
      "react/react-in-jsx-scope": "off",

      // Props validation not needed
      "react/prop-types": "off",

      // JSX variable usage detection
      "react/jsx-uses-vars": "error",

      // Ignore JSX namespace imports
      "no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^(React|Swiper|SwiperSlide|motion)$",
        },
      ],
    },
  },
]);
