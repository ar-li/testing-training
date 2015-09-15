describe('angularjs homepage', function() {
	beforeEach(function() {
    // Load the AngularJS homepage.
    browser.get('http://www.angularjs.org');
	});
	
  it('should greet the named user', function() {
    // Find the element with ng-model matching 'yourName' - this will
    // find the <input type="text" ng-model="yourName"/> element - and then
    // type 'Julie' into it.
    element(by.model('yourName')).sendKeys('Julie');

    // Find the element with binding matching 'yourName' - this will
    // find the <h1>Hello {{yourName}}!</h1> element.
	var greeting = $('h1.ng-binding');//testing CSS

    // Assert that the text element has the expected value.
    // Protractor patches 'expect' to understand promises.
	
	//outputs text from element
	greeting.getText().then(function(text) {
	console.log(text);
	});

    expect(greeting.getText()).toEqual('Hello Julie!');
  });
  
  it('should count JavaScript Projects', function(){
	//get list
	var jsProjects = $$('tr.ng-scope');
	expect(jsProjects.count()).toEqual(11);//gets 0 while it should be 11
  })
});