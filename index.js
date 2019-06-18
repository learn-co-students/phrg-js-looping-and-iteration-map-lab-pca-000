// Code your solution in this file.
function lowerCaseDrivers(drivers, name) {
  return drivers.map(function(driverName){
    return driverName.toLowerCase()
  })
}

function nameToAttributes(drivers, name) {
  return drivers.map(function (driverName) {
    const firstName = driverName.split(" ")[0];
    const lastName = driverName.split(" ")[1];
    return { firstName: firstName, lastName: lastName };
  })
}

function attributesToPhrase(drivers, name, hometown) {
  return drivers.map(function(phrase){
    return `${phrase.name} is from ${phrase.hometown}`
  })
}
