// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    const firstName = driver.split(" ")[0];
    const lastName = driver.split(" ")[1];
    return Object.assign({}, {firstName: firstName}, {lastName: lastName});
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
