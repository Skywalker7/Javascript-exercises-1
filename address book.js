//address book

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

//print function

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

//list function

function list () {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        printPerson(contacts[i]);
        }
    };
//calling list to list all of the contacts    

list();

// search function

function search (lastName) {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        if (contacts[i].lastName === lastName) {
            printPerson(contacts[i]);
            }
        
        }
} /*Create a search function
then call it passing "Jones"*/

search("Jones");

//add function

/* to add a new object to a array that's an object I had to use the format
array[position] = object as exampified by contacts[contacts.length] = contacts
this would make it so that I could add the object to the end of the array 
and not overwrite one of its contents
*/

function add (firstName, lastName, email, phoneNumber) {
    var contact = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
        }
contacts[contacts.length] = contact;
    }

add("James", "Thompson", "jThompson@example.com", "742.315.4178");

list();