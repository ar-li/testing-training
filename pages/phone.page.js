//'use strict';

function PhonePage () {
	this.getName = function(){
		return $('h1.ng-binding');
	};
	this.getPic = function(number) {
		var phonePics = browser.findElement(By.xpath('//li[@class=\'ng-scope\']['+number+']'));
		phonePics.click();
	};
};

/*
var PhonePage = function () {
  console.log('PhonePage created');
};

PhonePage.prototype  = Object.create({}, {
  getName:   {   get: function ()     { return $('h1.ng-binding'); }},
  getPic:    { value: function (number) { browser.findElement(By.xpath('//li[@class=\'ng-scope\']['+number+']')).click(); }}
});
//*/

module.exports = PhonePage;