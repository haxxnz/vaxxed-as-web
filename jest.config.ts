const { join } = require("path");
const pkg = require("./package.json");

export default {
  rootDir: __dirname,
  displayName: pkg.name,
  testMatch: [join(__dirname, "src/**/*.test.{js,ts,tsx}")],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/src/__mocks__/styleMock.js",
    "^@shared(.*)$": "<rootDir>/shared$1",
    "^@renderlesskit/react$": "<rootDir>/src"
  },
  coveragePathIgnorePatterns: ["node_modules", "__mocks__", "stories"],
  clearMocks: true
};
