var expMatch = 0;				// experience percentage match
var eduMatch = 0;				// education percentage match
var skillMatch = 0;				// skill percentage match 

/*	Experience and education percentage match can only be 0% or 100% 
	if job seeker exp/edu >= job exp/edu, 100%
	else 0%	
*/

var expApp;						// experience value of applicant
var eduApp;						// education value of applicant
var expJob;						// experience value of job
var eduJob;						// education value of job

var ranking = [];				// array of ranking values

var weightOne = 0.4;			// weighting for rank one
var weightTwo = 0.35;			// weighting for rank two
var weightThree = 0.25;			// weighting for rank three

/* Populate ranking array. */
ranking[0] = job.rankone;
ranking[1] = job.ranktwo;
ranking[2] = job.rankthree;

/* Determine expMatch. */
if(expApp >= expJob)
{
	expMatch = 100;
}

/* Determine eduMatch. */
if(eduApp >= eduJob)
{
	eduMatch = 100;
}

/* Assume skillMatch value already obtained from previous matchmaking algorithm. */

/* Calculate total percentage match.*/
var j;

for(j = 0; j < ranking.length; j++)
{
	if(ranking[j] == 'experience')
	{
		ranking[j] = expMatch;
	}
	else if(ranking[j] == 'education')
	{
		ranking[j] = eduMatch;
	}
	else if(ranking[j] == 'skills')
	{
		ranking[j] = skillMatch;
	}
}

var perTotal = ((ranking[0] * weightOne) + (ranking[1] * weightTwo) + (ranking[2] * weightThree));