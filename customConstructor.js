//custom constructor 

function Person(name,age) {
  this.name = name;
  this.age = age;
}


// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person ("George Washington", 275);

//custom dog constructor
function Dog(age, name, breed) {
    this.age = age;
    this.name = name;
    this.breed = breed;
    }
//custom dinosaur constructor 
function Dino (age, name, type) {
	this.age = age;
	this.name = name;
	this.breed = breed;
}

// you can also set properties within a constructor
function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

//In addition to setting properties, constructors can also define methods.

function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };

//constructor with methods & properties

function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits
var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");

//now we can call the method describeMyself
rabbit1.describeMyself();
rabbit2.describeMyself();
rabbit3.describeMyself();

//looping with constructors

// Our Person constructor
function Person(name,age) {
    this.name = name;
    this.age = age;
    }

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);

// loop through our new array

for (i = 0; i < family.length; i++){
   console.log(family[i].name); 
    }
