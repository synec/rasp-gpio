/*global describe,it*/
'use strict';

// var assert = require('assert');
var expectRequire = require('a').expectRequire,
	sinon = require('sinon');

var fakePiGpio = {
	open: sinon.stub().callsArgWith(2),
	close: sinon.stub(),
	write: sinon.stub().callsArgWith(2)
};

expectRequire('pi-gpio').return(fakePiGpio);

var raspGpio = require('../lib/rasp-gpio.js');

describe('rasp-gpio node module.', function() {
  it('should do something', function() {
    	raspGpio.run();
    	sinon.assert.called(fakePiGpio.open);
    	sinon.assert.called(fakePiGpio.close);
    	sinon.assert.called(fakePiGpio.write);
  });
});
