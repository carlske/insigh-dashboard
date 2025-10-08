/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  coverageProvider: "v8",
  rootDir: "./",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",

  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@insigh-shared/utils/cn$":
      "<rootDir>/__mocks__/@insigh-shared/utils/cn.js",
  },

  testMatch: [
    "<rootDir>/__tests__/**/*.(test|spec).(js|jsx|ts|tsx)",
    "<rootDir>/src/**/*.(test|spec).(js|jsx|ts|tsx)",
  ],

  transformIgnorePatterns: ["node_modules/(?!@insigh-shared)"],
};

import "@testing-library/jest-dom";

module.exports = config;
