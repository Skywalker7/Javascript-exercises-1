//closure practice



 
1
function warningMaker(obstacle) {
2
  return function(number, location) {
3
    alert("Beware! There have been " + obstacle +
4
          " sightings in the Cove today!\n" +
5
          number + " have been spotted at the " +
6
          location + "!");
7
  };
8
}
9
 
10
var killerPenguinAlert = warningMaker("killer penguin");
11
var polarBearAlert     = warningMaker("polar bear");
12
var icebergAlert       = warningMaker("iceberg");
13
var flashBlizzardAlert = warningMaker("flash blizzard");
14
var snowYetiAlert      = warningMaker("snow yeti");
15
 
16
// call the two functions here
17
 
18
killerPenguinAlert(6, "Ice Caves");
19
snowYetiAlert(1, "Blizzard Beach");
