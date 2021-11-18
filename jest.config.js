module.exports = {
  bail: 10,
  clearMocks: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageProvider: "v8",
  coverageReporters: ["json", "text", "lcov", "clover"],
  testEnvironment: "node",
  testTimeout: 30000
};
