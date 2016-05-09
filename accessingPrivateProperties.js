//accessing private properties
// An object's private variables can only be accessed by other methods that are part of that same object. 

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500; //this is a private property
  
   this.getBalance = function() {
     return bankBalance; // your code should return the bankBalance
      
   };
}

var john = new Person('John','Smith',30);
console.log(john.bankBalance);

var myBalance = john.getBalance(); // creating a new variable myBalance that calls getBalance()
console.log(myBalance);

//accessing a private property that has a private method

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   var returnBalance = function() {
      return bankBalance;
   };
    
   // public function to help access the private property bankBalance
   this.askTeller = function() {
       return returnBalance;
       };
   
}

var john = new Person('John','Smith',30);
console.log(john.returnBalance);
var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
console.log(myBalance);