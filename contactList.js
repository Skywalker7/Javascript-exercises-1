
//creating my phone # list

var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "(206) 555-5555",
        address: ['One Microsoft Way','Redmond','WA','98052']
        },
    steve: {
        firstName:  "Steve",
        lastName:  "Jobs",
        number: "(742) 555-5555",
        address: ['1 Infinite Loop', 'Cupertino', 'CA', '71482']
        }, 
     james: {
        firstName:  "James",
        lastName:  "Franco",
        number:  "501 789-2030",
        address: ['28', 'Fantastic', 'Los Angeles', 'CA', '12053']
        }
    };

//setting up list function

var list = function (friends) {
    for (var firstName in friends) {
        console.log(firstName);
        }
    };
    
var search = function (name) {
    for (var key in friends) {
        if (friends[key].firstName === name) {
            console.log(friends[key]);
            return(friends[key]);
        } 
    
    }
    
};
//calling search
search("James");

//How the same contact list code looked. 
//It used  the object constructor notation for entering data to to the friends object
var friends = {};
friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(408) 555-5555",
  address: ['1 Infinite Loop','Cupertino','CA','95014']
};

//used prop as key word. prop triggers list of first name of friends.
//obj here is equal to full object list of friends

var list = function(obj) {
  for(var prop in obj) {
    console.log(prop);
  }
};

//checking to see if first name of friends is equal to name in contact list 
//if so, the name & contact info of the one  who is called will be returned
var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};

list(friends);
search("Bill");