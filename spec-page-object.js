// spec.js
//'use strict';

var PhonePage = require('./pages/phone.page.js');
var MainPage = require('./pages/main.page.js');

describe('Protractor Demo App', function() {
	var page;
	var phonePage;

	beforeEach(function () {
		page = new MainPage();
		page.getPage();
	});

	it('should have a title', function() {
		expect(browser.getTitle()).toEqual('Google Phone Gallery');
	});
	
	it('should find phones', function(){
		expect(page.allPhones.count()).toEqual(20);
	});
	
	it('should order', function(){
		page.sortPhones('name');
		expect(page.getPhoneName(1)).toEqual('Dell Streak 7');
		page.sortPhones('age');
		expect(page.getPhoneName(1)).toEqual('Motorola XOOM™ with Wi-Fi');
	})
	
	it('should search', function(){
		page.searchAdd('moto');
		page.searchAdd('rola');
		expect(page.getPhoneName(1)).toContain('Motorola');
		page.searchDel(8);
		expect(page.searchGet()).toEqual('');
	});
	
	//*
	it('should click on phone', function(){
		var testPhoneName = 'Dell Streak 7'
		phonePage = page.getPhoneByNumber(4);
		phonePage.getPic(2);
		phonePage.getPic(3);
		expect(phonePage.getName().getText()).toEqual(testPhoneName);		
	})
	//*/
});