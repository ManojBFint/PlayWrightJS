exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.salesforce.com/in/?ir=1',
      show: true,  // Set to false if you don't want to see the browser
      browser: 'chromium',
      waitForNavigation: "domcontentloaded",
      waitForAction: 500,
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'salesforce-automation'
};
