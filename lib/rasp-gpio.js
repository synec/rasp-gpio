/*
 * 
 * https://github.com/synec/rasp-gpio
 *
 * Copyright (c) 2014 Daniel Grabert
 * Licensed under the MIT license.
 */

'use strict';

var gpio = require("pi-gpio");

exports.pins = {
	LED: 12
};

exports.awesome = function() {
  return 'awesome';
};

exports._turnOn = function() {
	gpio.open(exports.pins.LED, "output", function(err) {     // Open pin exports.pins.LED for output
		if (err) {
			console.err(err);
			return;
		}
	    gpio.write(exports.pins.LED, 1, function() {          // Set pin exports.pins.LED high (1)
	        gpio.close(exports.pins.LED);                     // Close pin 16
	    });
	});
};

exports._turnOff = function() {
	gpio.open(exports.pins.LED, "output", function(err) {     // Open pin exports.pins.LED for output
		if (err) {
			console.err(err);
			return;
		}
	    gpio.write(exports.pins.LED, 0, function() {          // Set pin exports.pins.LED high (1)
	        gpio.close(exports.pins.LED);                     // Close pin 16
	    });
	});
};

exports.run = function() {
	exports._turnOn();

	setTimeout(function() {
		exports._turnOff();
	}, 1000);

};


