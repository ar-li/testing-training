// spec.js
describe('Protractor Demo App', function() {
	function MainPage () {
		this.getPhoneByName = function(name) {
			var selectedPhone = browser.findElement(By.xpath('//ul[@class=\'phones\']/li/a[text()=\''+name+'\']'));
			selectedPhone.click();
			return new PhonePage;
		};
	};
	
	function PhonePage () {
		this.getName = function(){
			return $('h1.ng-binding');
		};
		this.getPic = function() {
			console.log('Nothing here');
		};
	};

	
	it('should have a title', function() {
		browser.get('http://angular.github.io/angular-phonecat/step-12/app/#/phones');

		expect(browser.getTitle()).toEqual('Google Phone Gallery');
	});
  
	it('should find phones', function(){
		//var phones = $$('li, .thumbnail phone-listing ng-scope');
		var phones = element.all(by.repeater('phone in phones | filter:query | orderBy:orderProp'));
		expect(phones.count()).toEqual(20);
	})
	it('should click on phone', function(){
		var testPhoneName = 'Dell Streak 7'
		var tmpPage = new MainPage;
		
		var tmp = tmpPage.getPhoneByName(testPhoneName);
		//tmp.getName().getText().then(function(text){console.log(text)});
		expect(tmp.getName().getText()).toEqual(testPhoneName);
	})
});