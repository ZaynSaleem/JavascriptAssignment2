// Date Method
// Chapter 31-34

// Task #1
// Solution
// var date = new Date
// document.write(date)

// Task #2
// Solution
// var monthArr = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];
// var month = new Date
// month = month.getMonth()
// document.write("Current Month : " + monthArr[month])

// Task #3
// Solution
// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// var getDay = new Date;
// getDay = getDay.getDay()
// document.write("Today Is  : " + days[getDay].substr(0, 3))

// Task #4
// Solution
// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// var getDay = new Date;
// getDay = getDay.getDay()
// if (getDay == 6 || getDay == 7) {
//     document.write("It's Fun day")
// }

// Task #5
// Solution
// var date = new Date;
// if (date.getDate() <= 15) {
//     document.write("First Fifteen Days OF The Month")
// }
// else {
//     document.write("Last Fifteen Days OF The Month")
// }

// Task #6
// Solution
// var d = new Date(1970, 1, 1)
// var n = d.getTime()
// var a = new Date()
// document.write("Current date :  " + a + "<br/>")
// document.write("Elaspedd Milliseconds Since January 1 1970 : " + (a.getTime() - n) + "<br/>")
// document.write("Elaspedd Minutes Since January 1 1970 : " + (a.getTime() - n) / 60000 + "<br/>")

//  Task #7
// Solution
// var new1 = new Date()
// new1 = new1.getHours().toLocaleString()
// new1 > 12 ? alert(new1 + "PM") : alert(new1 + "AM")

//  Task #8
// Solution
// var my_date = new Date("2020, Jul");
// var laterDate = new Date(my_date.getFullYear(), my_date.getMonth() + 1, 0);
// document.write("Later Date : " + laterDate)

//  Task #9
// Solution
// var ramzanDate = new Date("Jun 18,2015 22:50:16");
// var currentDate = new Date()
// var ramzanDays = ramzanDate.getTime()
// var todaysDate = currentDate.getTime()
// var daysCounted = (todaysDate - ramzanDate) / (1000 * 3600 * 24)
// document.write(daysCounted.toFixed(0) + " days Have Been Passed Since 1st Ramadan,2015")




// Task #10
// Solution
// var d = new Date(2015, 12, 5, 22, 50, 16);
// var n = d.getTime()
// document.write((n / 1000) + " seconds had Passed since beginning of 2015<br/>")

// Task #11
// Solution
// var date = new Date;
// document.write("Current Date : " + date + "<br/>")
// date.setHours(date.getHours() - 1);
// document.write("1 hour ago ,it was " + date)

// Task #12
// Solution
// var date = new Date;
// document.write("Current Date : " + date + "<br/>")
// date.setFullYear(date.getFullYear() - 100);
// document.write("100 Years  Back,it was " + date)

// Task #13
// Solution
// var userAge = prompt("Enter Your Age")
// var dob = new Date
// dob = dob.getFullYear() - userAge
// document.write("Your Birth Year is " + dob)

// Task #14
// Solution
// var customerName = prompt("Enter Your Name", "Sheraz")
// var unitNumber = prompt("Enter Your Number Of Unti", "410")
// var chargesPerUnit = prompt("Enter Your Charges Per Unit", "16")
// var lateCharges = 350
// var netAmount = unitNumber * chargesPerUnit;
// var grossAmount = netAmount + lateCharges;
// var date = new Date
// date.setDate(10);
// var currentMonth = date.getMonth()
// var lastDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)


// netAmount = unitNumber * chargesPerUnit;
// grossAmount = netAmount + lateCharges;
// document.write("<h1>K-Electric Bill </h1> <br/>")
// document.write("Customer Name :" + "<b>" + customerName + "</b> <br/>")
// document.write("Month :" + "<b>" + currentMonth + "</b> <br/>")
// document.write("Number Of Units :" + "<b>" + unitNumber + "</b> <br/>")
// document.write("Charges Per Unit :" + "<b>" + chargesPerUnit + "</b> <br/>")
// document.write("<br/>")
// document.write("Net Amount Payable :" + date + " : " + "<b>" + netAmount + "</b> <br/>")
// document.write("Late Payment:" + "<b>" + lateCharges + "</b> <br/>")
// document.write("Gross Amount Payable :" + lastDate + " : " + "<b>" + grossAmount + "</b> <br/>")