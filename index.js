// function createEmployeeRecord (employee) {
//     //[firstName, familyName, title, payPerHour] = employee
//     return {
//         firstName: employee[0],       //bc firstName is a value that is the same as the key, you can jsut put a ','
//         familyName: employee[1],
//         title: employee[2],
//         payPerHour: employee[3],
//         timeInEvents: [],
//         timeOutEvents: []
//     }

// }
let createEmployeeRecord = function(row){
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
let createEmployeeRecords = function(employeeRowData) {
    return employeeRowData.map(function(row){
        return createEmployeeRecord(row)
    })
}

let createTimeInEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}
// function createEmployeeRecords (employees) {
//     return employees.map(employee => createEmployeeRecord(employee))

// }

// function createTimeInEvent(event) {
//     let [date, hour] = event.split(' ');
//     this.timeInEvents.push({
//         type: 'TimeIn',
//         hour:parseInt(hour),
//         date,
//     })
//    return this
// }

function createTimeOutEvent(event){
    let [date,hour] = event.split(' ')
    
    this.timeOutEvents.push({
         type: 'TimeOut',
         hour:parseInt(hour),
         date:date,
    })
    return this
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date ===date)
    const timeOut = this.timeOutEvents.find(event => event.date ===date)
    
    return (timeOut.hour-timeIn.hour)/100
}

function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate(this,date)
   // console.log('look here', employee.payPerHour)
    return parseInt(this.payPerHour*hours)
}

const allWagesFor = function (){
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    const payable = eligibleDates.reduce(function (memo,d){
        return memo + wagesEarnedOnDate.call(this,d)}
        .bind(this,0))
        return payable
}

// function allWagesFor () {
//     const eligibleDates = employee.timeInEvents.map(function(e) {
//         return e.date
//     })
//     const payable = eligibleDates.reduce(function (memo,d){
//         return memo + wagesEarnedOnDate(employee,d)}
//         .bind(employee),0) 
//         return payable
// }

function calculatePayroll(employeeRecords) {
    return employeeRecords.map(employee => allWagesFor(this)).reduce((currentValue, total) => currentValue + total)
}


    
