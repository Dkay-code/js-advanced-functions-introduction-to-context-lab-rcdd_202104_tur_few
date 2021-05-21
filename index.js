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


// function createEmployeeRecords([[employee],[employee]]) {
//     const obj = {
//         employee1: [0]
//     }
//     return obj;
// }
function createEmployeeRecords (arrays) {
  arrays.map(element => element = [createEmployeeRecord(element)])
}


// function createEmployeeRecords (Arrays) {
//  const outputArray = [];
//      Arrays.forEach(element => {
//          outputArray.push(createEmployeeRecord(element))
//      });
//  return outputArray
//  }
