//train schedule
var totalGen = 19;
var totalMW = 0;

for (var currentGen = 1; currentGen <= totalGen; currentGen++) {
  if (currentGen % 2 == 0 && currentGen <= 4) {
    totalMW += 62;
    console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
  } else if (currentGen % 2 == 0 && currentGen >= 5) {
    totalMW += 124;
    console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
  } else {
    console.log("Generator #" + currentGen + " is off.");
  }
}

//passenger list & adding passengers to passengerList

var passengerList [];



function addPassenger ( name, list) {
   if (list.length == 0) {
     list.push(name);
   } else {
        for (var i = 0; i < list.length; i++) {
          if (list[i] == undefined) {
            list[1] = name;
            return list;
          } else if (i == list.length - 1) {
             list.push(name);
             return list;
          }
        }
   }
}

passengerList = addPassenger("Greg Pollack", passengerList);
passengerList = addPassenger("Ashley Smith", passengerList);

//deletePassenger
function deletePassenger (name, list) {
  if (list.length == 0) {
    console.log("List is empty!");
  } else {
    for (var i = 0; i < list.length; i++) {
      if (list[i] == name) {
        list[i] = undefined;
        return list;
      } else if (i == list.length - 1) {
        console.log("Passenger not found");
      }
    }
    return list;
  }

}


