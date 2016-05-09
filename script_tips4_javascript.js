//is the script ie trains.js in the same folder as the index.html 
//file "Yes, that use <script src="trains.js" </script> Do they share the same root 
//folder but its within a folder within that is separate like scripts. 
// use <script src="scripts/trains.js"></script> 
//Even deeper, far apart? 
//two folders down? root, pages, scripts <script src="../scripts/trains.js"><script>



var userAge = prompt("What's your age, user?");
var ageIsCorrect = false;


 var userAge = prompt("What's your age, user?");
var ageIsCorrect = false;

while (ageIsCorrect == false) {
  if (confirm("You entered " + userAge + ". Is this correct?")) {
    ageIsCorrect = true;
    alert("Great! Your age is logged as " + userAge + ".");
  }
}