var username = "aghorler";
var resource = "https://api.github.com/users/" + username + "/repos";

/* Language count. */
var count = 0;

function printGitHubVerify(count){
    console.log("We found " + count + " repositories that match your listed skill requirements for this job.");
    console.log("View all: " + "http://github.com/" + username + "?tab=repositories&type=source");
}

$.getJSON(resource, function(data){
    var i;
    for(i = 0; i < data.length; i++){
        /* Ignore repositories with no recognised language, and ignore forks. */
        if(data[i].language !== null && data[i].fork == false){
            //console.log(data[i].language);

            /* This is an ultra-simple solution. Obviously, this needs to only check required skills (probably by comparing to an array).*/
            if(data[i].language == "Java" || data[i].language == "Python"){
                count++;
            }
        }
    }

    if(count > 0){
        printGitHubVerify(count);
    }
})
