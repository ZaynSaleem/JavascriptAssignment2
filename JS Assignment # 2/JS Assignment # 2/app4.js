// Function
// Chapter 35-38

// Task #1
// Solution
// function showDate() {
//     var date = new Date()
//     return document.write(date)
// }
// showDate()

// Task1 #2
// Solution
// function greet(fName, lName) {
//     alert("Welcome " + fName + " " + lName)
// }
// greet("Muhammad", "Sheraz")

// Task1 #3
// Solution
// var numb1 = parseInt(prompt("Enter no 1"))
// var numb2 = parseInt(prompt("Enter no 2"))
// function add(a, b) {
//     return alert(a + b)
// }
// add(numb1, numb2)

// Task1 #4
// Solution
// var numb1 = parseInt(prompt("Enter no 1"))
// var operator = prompt('Enter Operator')
// var numb2 = parseInt(prompt("Enter no 2"))
// function calculate(no1, opr, no2) {
//     if (opr == "+") {
//         alert(no1 + no2)
//     }
//     else if (opr == "-") {
//         alert(no1 - no2)
//     }
//     else if (opr == "*") {
//         alert(no1 * no2)
//     }
//     else if (opr == "/") {
//         alert(no1 / no2)
//     }
// }
// calculate(numb1, operator, numb2)

// Task1 #5
// Solution
// function square(a) {
//     alert(Math.pow(a, 2))
// }
// square(3)

// Task1 #6
// Solution
// function factor(num) {
//     for (var i = num - 1; i >= 1; i--) {
//         num *= i
//     }
//     console.log(num)
// }
// factor(4)

// Task1 #7
// Solution

// function count(a, b) {
//     for (var i = a; i <= b; i++) {
//         console.log(i)
//     }
// }
// count(1,50)

// Task1 #8
// Solution
// function rightAngle(b, p) {
//     function square() {
//         return ((p * p) + (b * b))
//     }
//     alert("hypotenuse : " + square())
// }
// rightAngle(260, 10)

// Task1 #9
// Solution
// var width = 45;
// var height = 20;
// function areaOfTraiangle(widthVal, heightVal) {
//     return (console.log(widthVal * heightVal))
// }
// areaOfTraiangle(10, 45)
// areaOfTraiangle(width, height)

// Task1 #10
// Solution
// function palindrome(a) {
//     var b = a.split("")
//     b = b.reverse().join("")
//     if (a == b) {
//         alert("Its Is Palindrome")
//     } else {
//         alert("Its Is Not  Palindrome")

//     }
// }
// palindrome("madam")

// Task1 #11
// Solution
// function capital(a) {
//     let b = a.split(" ")
//     let temp = []
//     for (var i = 0; i < b.length; i++) {
//         temp.push(b[i].charAt(0).toUpperCase() + b[i].substr(1))
//     }
//     return console.log(temp.join(" "))
// }
// capital('hello world is my key')

// Task1 #12
// Solution
// function longest(a) {
//     let arr = a.split(" ")
//     var longestWord;
//     arr.reduce(function (checker, currentWord) {
//         if (currentWord.length > checker) {
//             longestWord = currentWord
//         }
//     }, "")
//     console.log(longestWord)

// }
// longest('hell11o world is my key')

// Task1 #13
// Solution

// function occurrence(a, b) {
//     let splitter = a.split("")
//     let checker = splitter.filter(x => {
//         if (x.toLowerCase().includes(b.toLowerCase())) {
//             document.write(x + "<br/>")
//         }
//     })
//     return checker
// }
// occurrence('JSResourceS.com', "o")

// Task1 #13
// Solution

// function circleCircumference(r) {
//     return console.log("Circumference of Circle = " + 2 * 3.142 * r)
// }

// function circleArea(r) {
//     return console.log("Area of Circle = " + (3.42 * (Math.pow(r, 2))))
// }
// circleArea(5)
// circleCircumference(9)
