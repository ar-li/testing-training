var PhonePage = require('./phone.page.js');

var MainPage = function(){
	this.searchBox = $('input.ng-valid');
	this.allPhones = element.all(by.repeater('phone in phones | filter:query | orderBy:orderProp'));
	this.getPage = function(){
		browser.get('http://angular.github.io/angular-phonecat/step-12/app/#/phones');
	};
	this.selectedPhone = function(number){ 
		return browser.findElement(By.xpath('//ul[@class=\'phones\']/li['+number+']/a[2]'));              
	};
	this.getPhoneByName = function(name) {
		var selectedPhone = browser.findElement(By.xpath('//ul[@class=\'phones\']/li/a[text()=\''+name+'\']'));
		selectedPhone.click();
		return new PhonePage;
	};
	this.getPhoneByNumber = function(number){
		this.selectedPhone(number).click();
		return new PhonePage;
	};
	this.getPhoneName = function(number){
		return this.selectedPhone(number).getText();
	};
	this.searchAdd = function(keys){
		this.searchBox.sendKeys(keys);
	};
	this.searchDel = function(number){
		if (Number.isInteger(number)){
			for(var i = 0; i<number; i++){
				this.searchBox.sendKeys("\u0008");
			};
		}else{
			console.log('Incorrect function input');
		};
	};
	this.searchGet = function(){
		//$('input.ng-valid').getAttribute("value").then(function(text){console.log(text)});
		return this.searchBox.getAttribute("value");
	};
	this.sortPhones = function(text){
		//valid inputs: 'name' and 'age'
		browser.findElement(By.css('select>option[value=\''+text+'\']')).click();
	};
	
};


/*
var MainPage = function () {
  browser.get('http://www.angularjs.org');
};

var PhonePage = require('phone.page.js');

MainPage.prototype  = Object.create({}, {
  
  getPhoneByNumber	{ value: function (number)	{ 
	this.selectedPhone(number).click();
	return new PhonePage;
	}},
  getPhoneByName:	{ value: function (text)  	{ 
	browser.findElement(By.xpath('//ul[@class=\'phones\']/li/a[text()=\''+name+'\']')).click();
	return new PhonePage;
	}},
  getPhoneName:		{ value: function (number)	{ return this.selectedPhone(number).getText(); }},
  searchAdd:		{ value: function (text)	{ this.searchBox.sendKeys(text); }},
  searchDel:		{ value: function (number)	{
	if (Number.isInteger(number)){
		for(var i = 0; i<number; i++){
			$('input.ng-valid').sendKeys("\u0008");
		};
		}else{
			console.log('Incorrect function input');
		};	
	}},
  searchGet:		{	get: function ()		{return this.searchBox..getAttribute("value"); }}
});
//*/

module.exports = MainPage;