var inputval = [0,0,1,0,1,1,0,0];	// input value (i.e. search)

var id = [1,2,3,4,5];				// id number

var tomatch = [	[0,0,1,0,0,1,0,0], 	// 2 match
				[1,0,1,1,0,0,1,0],	// 1 match
				[0,0,1,0,0,0,1,0],	// 1 match
				[1,0,1,0,1,1,1,0],	// 3 match
				[0,1,0,0,0,0,0,0]	// 0 match
			  ];					// values to compare

var bitcheck = [];					// array of positions of interest

var dict = {};						// dictionary

// populate values into dictionary
for(var k = 0; k < id.length; k++)
{
	dict[id[k]] = tomatch[k];
}

// determine which bits are non-zero and stores into bitcheck array
for(var i = 0; i < inputval.length; i++)
{
	if(inputval[i] == 1)
  {
  	bitcheck.push(i);
  }
}

for(var l = 0; l < id.length; l++)
{
	var count = 0;					// match count
	var percentage = 0;				// percentage match
	
	// checks only the values in the positions stored in bitcheck
	// increases count if non-zero (i.e. there is a match)
	for(var m = 0; m < bitcheck.length; m++)
	{
		var position = bitcheck[m];
		
		if(dict[id[l]][position] == 1)
		{
			count++;
		}
	}
	
	// calculate percentage match
	percentage = (count / bitcheck.length) * 100;
	
	dict[id[l]] = percentage;
}

/* check key-value pairs
for(var key in dict)
{
	var value = dict[key];
	document.write(key + " " + value + " ");
}
*/

var keyorder = [];					// relative key position; shifts concurrent to value shift
var valueorder = [];				// relative value position; used to sort
var pcount = 0;						// counter for array population

for(var key in dict)
{
	var value = dict[key];
	
	// populating keyorder and valueorder arrays
	// the index keeps the two sets of data linked
	keyorder[pcount] = key;
	valueorder[pcount] = value;
	
	pcount++;
}

var swapped;

// bubble sort algorithm
// slow but preserves relative order between two arrays

do
{
	swapped = false;
	
	for(var n = 0; n < valueorder.length-1; n++)
	{
		if(valueorder[n] < valueorder[n+1])
		{
			var tempval = valueorder[n];
			valueorder[n] = valueorder[n+1];
			valueorder[n+1] = tempval;
			
			var tempkey = keyorder[n];
			keyorder[n] = keyorder[n+1];
			keyorder[n+1] = tempkey;
			
			swapped = true;
		}
	}
} while(swapped);

// check key-value is preserved
for(var o = 0; o < valueorder.length; o++)
{
	document.write("ID: " + keyorder[o] + "&emsp;" + " Match: " + valueorder[o] + "%" + "<br>");
}