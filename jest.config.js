const CI = process.env.CI;

module.exports = {

  testEnvironment: "node",
  cacheDirectory: ".cache/jest",

  collectCoverage: true,
  collectCoverageFrom: [
    "dist/**"
  ],
  coverageDirectory: "coverage",
  coverageReporters: [
    CI ? "json" : "lcov",
    "text",
    "text-summary"
  ],
  coverageThreshold: null,

  verbose: true,

};
