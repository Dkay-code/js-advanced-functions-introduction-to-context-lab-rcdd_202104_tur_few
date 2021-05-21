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
