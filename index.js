function map (array, callback) {
  const newArr = [];

  for (const element of array) {
    newArr.push(callback(element));
  }

  return newArr;
}

function lowerCaseDrivers(drivers) {
  const lowCase = map(drivers, function (name) { return name.toLowerCase()})

  return lowCase
}

function nameToAttributes(drivers) {
  const attrs = map(drivers, function (name) {
    const firstName = name.split(" ")[0];
    const lastName = name.split(" ")[1];
    return { firstName: firstName, lastName: lastName };
  })

  return attrs
}

function attributesToPhrase(drivers, name, hometown) {
  const attributes = map(drivers, function(phrase){
    return `${phrase.name} is from ${phrase.hometown}`
  })

  return attributes
}
