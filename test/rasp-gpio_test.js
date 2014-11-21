/*global describe,it*/
'use strict';
var assert = require('assert'),
  raspGpio = require('../lib/rasp-gpio.js');

describe('rasp-gpio node module.', function() {
  it('must be awesome', function() {
    assert( raspGpio.awesome(), 'awesome');
  });
});
