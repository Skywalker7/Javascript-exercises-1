crackle, pop

for (var i = 1; i < 101; i++) {
//print CracklePop for divisible by 3 & 5
  if (i % 3 === 0 && i % 5 === 0) {
        console.log("CracklePop");
   }
// print Crackle for divisble by 3
  else if (i % 3 === 0) {
        console.log("Crackle");
        } 
// print Pop for divisible by 5
  else if (i % 5 === 0){
        console.log("Pop");
        }
// print number if number is not divisible by 3 or 5
  else {
        console.log(i);
        }
    } 