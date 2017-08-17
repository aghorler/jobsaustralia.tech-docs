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