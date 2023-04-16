// Code your solution here
// /You'll be writing three functions:

// findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

// fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

// matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument/

drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
    return drivers.filter(function (driverName) {
        return driverName.toLowerCase() === name.toLowerCase();
    });
}


function fuzzyMatch(drivers, letters) {
    let lengthOfLetters = letters.length;
    return drivers.filter(function (driverName) {
        return driverName.slice(0, lengthOfLetters) === letters;
    });
}

 function matchName(drivers, name){
    return drivers.filter(drive => drive['name'] == name)
}