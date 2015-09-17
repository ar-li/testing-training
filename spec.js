// spec.js
describe('Protractor Demo App', function() {
	function PhonePage (name) {
		this.phoneName = name;
		this.getPic = function() {
			console.log('Nothing here');
		};
	};

	
  it('should have a title', function() {
    browser.get('http://angular.github.io/angular-phonecat/step-12/app/#/phones');

    expect(browser.getTitle()).toEqual('Google Phone Gallery');
  });
  
  it('should find phones', function(){
	  var phones = $$('li, .thumbnail phone-listing ng-scope');
	  expect(phones.count()).toEqual(20);
  })
});