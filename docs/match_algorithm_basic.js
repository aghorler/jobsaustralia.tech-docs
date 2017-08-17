var inputval = [0,0,1,0,1,1,0,0];	// input value (i.e. search)
var tomatch = [0,0,1,0,0,1,0,0];	// value to compare
var bitcheck = [];					// array of positions of interest
var count = 0;						// match count
var percentage = 0;

// determine which bits are non-zero and stores into bitcheck array
for(var i = 0; i < inputval.length; i++)
{
	if(inputval[i] == 1)
  {
  	bitcheck.push(i);
  }
}

alert (bitcheck);

// checks only the values in the positions stored in bitcheck
// increases count if non-zero (i.e. there is a match)
for(var j = 0; j < bitcheck.length; j++)
{
	var position = bitcheck[j];
  
  if(tomatch[position] == 1)
  {
  	count++;
  }
}

alert (count);

// calculate percentage match
percentage = (count / bitcheck.length) * 100;

alert (percentage);