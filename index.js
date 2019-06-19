// Code your solution in this file.
function lowerCaseDrivers (lowercase){
  return lowercase.map(function (driver){
    return driver.toLowerCase();
  })
}

function nameToAttributes(list){
  return list.map(function(driver){
    let firstInitial = driver.split(' ')[0];
    let lastInitial = driver.split(' ')[1];
    return { firstName: firstInitial, lastName: lastInitial}
  })
}

function attributesToPhrase(phrase){
  return phrase.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  })
}
