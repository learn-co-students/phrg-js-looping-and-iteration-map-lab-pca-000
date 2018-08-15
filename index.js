// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  const emptyArray = []
  for (const driver of drivers) {
    emptyArray.push(driver.toLowerCase())
  }
  return emptyArray
}

function nameToAttributes(drivers) {
  const driverNames = drivers.map(function (name) {
    let firstName1 = name.split(" ")[0]
    let lastName1 = name.split(" ")[1]
    return {firstName: firstName1, lastName: lastName1}
  })
  return driverNames
}

function attributesToPhrase(drivers) {
  const driverInfo = drivers.map(function (driver){
    name = driver["name"]
    hometown = driver["hometown"]
    return `${name} is from ${hometown}`
  })
  return driverInfo
}
