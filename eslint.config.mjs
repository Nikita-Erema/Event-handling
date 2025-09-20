import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  
  {
    ignores: [
      "**/coverage/**",
      "**/webpack/**",
      "**/*.config.js",
      "**/dist/**",
    ]
  },

  {
    rules: {
      "no-console": "warn",
      "no-unused-vars": ["error", {
        "varsIgnorePattern": "^__webpack|^__unused",
        "argsIgnorePattern": "^_"
      }]
    }
  },

  {
    files: ["**/*.config.js"],
    languageOptions: {
      globals: {
        module: "readonly",
        require: "readonly",
        __dirname: "readonly", 
        process: "readonly"
      },
      parserOptions: {
        sourceType: "script"
      }
    }
  },

  {
    files: ["src/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },

  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
        test: "readonly",
        expect: "readonly",
        describe: "readonly",
        it: "readonly",
        beforeAll: "readonly",
        beforeEach: "readonly",
        afterAll: "readonly", 
        afterEach: "readonly"
      }
    }
  }
];