module.exports = {
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testEnvironment: "node",
  testRegex: "./src/.*\\.(test|spec)?\\.(js|ts)$",
  moduleFileExtensions: ["ts", "js", "json"],
  roots: ["<rootDir>/src"],
  verbose: false,
  moduleNameMapper: {
    "^@app(.*)$": "<rootDir>/src$1",
  },
};
