// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {

	browser.get('http://localhost:9001');

    expect(element(by.className('jumbotron')).getText()).
        toContain('Allo'); 
  });
});