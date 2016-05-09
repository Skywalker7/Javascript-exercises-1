//fizzBuzz
            
/*           
            >>>>
           >  >
          > >
         >
  ****||**||***
******||**||*****>__
******||**||*****>
  ****||**||***




*/

for (var i = 1; i < 21; i++) {
//print FizzBuzz for divisible by 3 & 5
  if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
   }
// print fizz for  divisble by 3
  else if (i % 3 === 0) {
        console.log("Fizz");
        } 
// print buzz for divisible by 5
  else if (i % 5 === 0){
        console.log("Buzz");
        }
// print number if number is not divisible by 3 or 5
  else {
        console.log(i);
        }
    } 