var	names = require('./names.js'),
	findSuperman = require('./findsuperman');

if (findSuperman(names())) {
	document.write('We found Superman');
} else {
	document.write('No Superman ...');
}

alert("hello");