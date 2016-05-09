var james = {
    job: "programmer",
    married: false
};

// set to the first property name of "james"
var aProperty = "job";


// print the value of the first property of "james" 
// using the variable "aProperty"

console.log(james[aProperty]);

//since the value of aProperty is equal to the value of job in the object James,
//james[aProperty] is the same as using james["job"]