/*global describe,it*/
'use strict';

var assert = require('chai').assert,
	expectRequire = require('a').expectRequire,
	sinon = require('sinon');

// Mocked pi-gpio module
var fakePiGpio = {
	open: sinon.stub().callsArgWith(2),
	close: sinon.stub(),
	write: sinon.stub().callsArgWith(2)
};

expectRequire('pi-gpio').return(fakePiGpio);

var raspGpio = require('../lib/rasp-gpio.js');

describe('rasp-gpio node module.', function() {

	describe('PINs', function () {
		it('should provide an object pins', function () {
			assert.ok(raspGpio.pins);
		});
		it('should have pins defined', function () {
			assert.deepEqual(raspGpio.pins, { LED: 12 });
		});
	});


	describe('methods', function () {
		it('should provide a method _turnOn', function () {
			assert.ok(raspGpio._turnOn);
		});

		it('should provide a method _turnOff', function () {
			assert.ok(raspGpio._turnOff);
		});
	});


  it('should do something', function() {
    	raspGpio.run();
    	sinon.assert.called(fakePiGpio.open);
    	sinon.assert.called(fakePiGpio.close);
    	sinon.assert.called(fakePiGpio.write);
  });
});
