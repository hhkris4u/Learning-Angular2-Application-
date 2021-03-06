// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  var host = process.env.HOST_IP;
  var webdriverConfig = {
    hostname: host,
    port: 8910
  };

  config.set({
    basePath: '',
    frameworks: ['jasmine', 'angular-cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-webdriver-launcher'),
      require('karma-remap-istanbul'),
      require('angular-cli/plugins/karma')
    ],
    customLaunchers: {
      phantomjs_webdriver: {
        browserName: 'PhantomJS',
        base: 'WebDriver',
        config: webdriverConfig
      }
    },
    files: [
      { pattern: './src/test.ts', watched: false }
    ],
    preprocessors: {
      './src/test.ts': ['angular-cli']
    },
    remapIstanbulReporter: {
      reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov'
      }
    },
    angularCli: {
      config: './angular-cli.json',
      environment: 'dev'
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
        ? ['progress', 'karma-remap-istanbul']
        : ['progress'],
    hostname: host,
    port: process.env.KARMA_PORT,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['phantomjs_webdriver'],
    singleRun: false
  });
};
