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


function createTimeInEvent (employeeObject, date = "YYYY-MM-DD HHMM"){
  let obj = {
    type : "TimeIn",
    hour : parseInt(date.slice(10)),
    date : date.slice(0,11),
  };
  employeeObject.timeInEvents.push(obj);
  return employeeObject;
}

// const createTimeInEvent = (employee, dateStamp) => {
//                  employee.timeInEvents.push({
//                                  type: 'TimeIn',
//                                  hour: parseInt(dateStamp.split(' ')[1]),
//                                  date: dateStamp.split(' ')[0],
//                  });
//                  return employee;
//  };
