exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  
  //causes 'No specs found' error in protractor
  //framework: 'jasmine2',

  // Capabilities to be passed to the webdriver instance.
  /*
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }],
  //*/
  
  Capabilities: {
	browserName: 'chrome'
	},

  specs: ['example-spec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};