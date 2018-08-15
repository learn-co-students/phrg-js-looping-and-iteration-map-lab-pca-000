// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lower_case = drivers.map(function (driver) { return driver.toLowerCase()})
  return lower_case
}

function nameToAttributes(drivers) {
  const driver_names = drivers.map(function (driver) {
  let first_name = driver.split(" ")[0]
  let last_name = driver.split(" ")[1]
  return {firstName: first_name, lastName: last_name}
})
  return driver_names
}

function attributesToPhrase(drivers) {
  const from_strings = drivers.map(function (driver) {
    return `${driver["name"]} is from ${driver["hometown"]}`
  })
  return from_strings
}
