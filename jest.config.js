const jestConfig = {
    verbose: true,
    testURL: "http://localhost/",
    'transform': {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testMatch: [
      "<rootDir>/**/*.(test).{js,jsx,ts,tsx}",
      "<rootDir>/**/?(*.)(spec|test).{js,jsx,ts,tsx}"
    ],
  }
  
  module.exports = jestConfig