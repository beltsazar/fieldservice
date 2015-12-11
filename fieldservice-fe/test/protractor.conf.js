// conf.js
exports.config = {
  framework: 'jasmine',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.48.2.jar',
  specs: ['protractor/spec/*.js'],
  onPrepare: function() {
      var SpecReporter = require('jasmine-spec-reporter');
      // add jasmine spec reporter
      jasmine.getEnv().addReporter(new SpecReporter({
    	  displayStacktrace: 'all',
    	  colors: false
    	  }));
   },
   jasmineNodeOpts: {
	   print: function() {}
   }
}