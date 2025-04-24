import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  verbose: true,
  watchPathIgnorePatterns: ["<rootDir>/dist/"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg|pdf)$": "<rootDir>/__mocks__/fileMock.js",
  },
};

export default config;
