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


function createTimeInEvent (employeeObject, dateHour = "YYYY-MM-DD HHMM"){
  let obj = {
    type : "TimeIn",
    hour : parseInt(dateHour.slice(10)),
    date : dateHour.slice(0,10),
  };
  employeeObject.timeInEvents.push(obj);
  return employeeObject;
}

function createTimeOutEvent (employeeObject, dateHour = "YYYY-MM-DD HHMM"){
  let obj = {
    type : "TimeOut",
    hour : parseInt(dateHour.slice(10)),
    date : dateHour.slice(0,10),
  };
  employeeObject.timeInEvents.push(obj);
  return employeeObject;
}

