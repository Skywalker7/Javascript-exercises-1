//Defining a method in an object
var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
       console.log("Hi, I work as a" + " " + this.job);
       // complete this method
        
    }
};

// james' first job
james.sayJob();

james.job = "super programmer";
// change james' job to "super programmer" here


// james' second job
james.sayJob();

