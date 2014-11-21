/*
 * 
 * https://github.com/synec/rasp-gpio
 *
 * Copyright (c) 2014 Daniel Grabert
 * Licensed under the MIT license.
 */

'use strict';

var gpio = require("pi-gpio");

var PIN_LED = 12;

exports.awesome = function() {
  return 'awesome';
};

exports._turnOn = function() {
	gpio.open(PIN_LED, "output", function(err) {     // Open pin PIN_LED for output
		if (err) {
			console.err(err);
			return;
		}
	    gpio.write(PIN_LED, 1, function() {          // Set pin PIN_LED high (1)
	        gpio.close(PIN_LED);                     // Close pin 16
	    });
	});
};

exports._turnOff = function() {
	gpio.open(PIN_LED, "output", function(err) {     // Open pin PIN_LED for output
		if (err) {
			console.err(err);
			return;
		}
	    gpio.write(PIN_LED, 0, function() {          // Set pin PIN_LED high (1)
	        gpio.close(PIN_LED);                     // Close pin 16
	    });
	});
};

exports.run = function() {
	exports._turnOn();

	setTimeout(function() {
		exports._turnOff();
	}, 1000);

};


