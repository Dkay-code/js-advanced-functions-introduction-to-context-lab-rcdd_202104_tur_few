function createEmployeeRecord ([firstName, familyName, title, payPerHour]) {
    const obj = {
        firstName: `${firstName}`,
        familyName: `${familyName}`,
        title: `${title}`,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: [],
    }
    return obj;
}


function createEmployeeRecords (arrays) {
return arrays.map(element => element = createEmployeeRecord(element))
}


function createTimeInEvent (employeeObject, date ="YYYY-MM-DD HHMM"){
  const obj = {
    type : "TimeIn",
    hour : parseInt(date.slice(10)),
    date : date.slice(0,11),
  }
  employeeObject.createTimeInEvents.push(obj);
console.log(employeeObject)
}

function createEmployeeRecord ([firstName, familyName, title, payPerHour]) {
    const obj = {
        firstName: `${firstName}`,
        familyName: `${familyName}`,
        title: `${title}`,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: [],
    }
    return obj;
}
