//objects continued

//nyc object

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

//this prints the property names: fullName, mayor, population, boroughs

for (var property in nyc) {
    console.log(property);
    }


// This for-in loop to prints the values of nyc's properties
for(var x in nyc) {
    console.log(nyc[x]);
    }