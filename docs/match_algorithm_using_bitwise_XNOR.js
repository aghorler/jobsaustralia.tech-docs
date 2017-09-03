/* For testing purposes, this implementation uses a sequence of length 10. */

var bitcount = 10;

/* This algorithm compares two binary sequences by performing a bitwise XNOR operation. */

/* 0010101010								// input
   1001001011								// compare
   ---XNOR---
   0100011110								// result
*/

/* In the result, a match is signified by a one. */

var input = parseInt("0010101010", 2);		// convert (job seeker) binary sequence to integer

document.write(input);
document.write("<br>");

var compare = parseInt("1001001011", 2);	// convert (job) binary sequence to integer

document.write(compare);
document.write("<br>");

var result = ~(input ^ compare);			// bitwise XNOR

var toBin = (result).toString(2);			// convert result to binary

if(toBin < 0)								// handle negative binary values
{
	toBin = (result >>> 0).toString(2);		// unsigned right shift
    toBin = toBin.slice(-bitcount);			// trim to last (10) digits of sequence
}

document.write(toBin);
document.write("<br>");

/* Count number of ones (i.e. matches). This is done by removing all zeroes, then grabbing the length of the remaining string. */

var count = toBin.replace(/[^1]/g, "").length;

document.write(count);
document.write("<br>");

var percentage = (count / bitcount) * 100;		// calculate percentage

document.write(percentage + "%");