// Chapter 21 to 25

// Task #1
// Solution
// var fName = prompt("Enter Your First Name")
// var lName = prompt("Enter Your Last Name")
// alert(fName+" "+lName)

// Task #2
// Solution
// var favouriteMobile = prompt('Enter Your Favourite Mobile Model.')
// document.write("length of String : " + favouriteMobile.length)

// Task #3
// Solution
// var str = "Pakistani"
// document.write("String : " + str + "<br/>")
// document.write("Index of  ' n ' : " + str.indexOf("n") + "<br/>")

//Task #4
// Solution
// var str = "Hello World"
// document.write("String : " + str + "<br/>")
// document.write("Index of ' l' : " + str.lastIndexOf("l") + "<br/>")

// Task #5
// Solution
// var str = "Pakistani"
// document.write("String : " + str + "<br/>")
// document.write("Character at index   : " + str.charAt(3) + "<br/>")

// Task #6
// Solution
// var fName = prompt("Enter Your First Name")
// var lName = prompt("Enter Your Last Name")
// alert(fName.concat(" " + lName)


// Task #7
// Solution
// var city = "Hyderabad"
// var afterReplacement = city.replace("Hyder", "Islam")
// document.write("City : " + city + "<br/>")
// document.write("AfterRepalcement : " + afterReplacement + "<br/>")

// Task #8
// Solution
// var mesasage = "Ali and Sami are best friends. They play cricket and football together"
// var afterReplacement = mesasage.replace(/and/g, "&")
// alert(afterReplacement)

// Task #9
// Solution
// var value = "472"
// document.write("value : " + value + "<br/>")
// document.write("Type : " + typeof (value) + "<br/>")
// value = parseInt(value)
// document.write("value : " + value + "<br/>")
// document.write("Type : " + typeof (value) + "<br/>")

// Task #10
// Solution
// var userInput = prompt("Enter String")
// var capitalStr = userInput.toUpperCase()
// document.write("UserInput : " + userInput + "<br/>")
// document.write("UpperCase : " + capitalStr + "<br/>")

// Task #11
// Solution
// var userInput = prompt("Enter String")
// userInput = userInput.charAt(0).toUpperCase() + userInput.substr(1)
// console.log(userInput)

// Task #13
// Solution
// var userInput = prompt("Enter Your Name")
// for (var i = 0; i < userInput.length; i++) {
//     var char = userInput.charCodeAt(i)
//     if (char === 33 || char === 44) {
//         document.write("please enter a valid username")
//         var matchFound = 1
//         break
//     }
// }
// if (matchFound != 1) {
//     document.write("your username is valid")
// }

// Task #14
// Solution
// var a = ['cake', 'apple pie', 'cookIe', 'cHips', 'patties'].map(x => x.toLowerCase())
// console.log(a)
// var userSearch = prompt("Serach Here..", "chips").toLowerCase()

// if (a.includes(userSearch)) {
//     document.write(userSearch + " is Avaiable At Index " + a.indexOf(userSearch) + " In Our Bakery")
// }
// else {
//     document.write("We are Sorry " + userSearch + " is Not Available In Our Bakery")
// }

// Task #15
// Solution
// var password = prompt("Enter Password Here..")
// var re = /^[A-Za-z]+$/;
// if (!isNaN(password.charAt(0))) {
//     console.log("Password Cannot be begin With  Number")
// }
// else if (!password.match(re)) {
//     console.log("Please Enter A Valid Password")
// }
// else if (password.length <= 6) {
//     console.log("InVALID")
// }
// else {
//     console.log("Valid")
// }

// Task #16
// Solution
// var str = "University Of Karachi"
// str = str.split("")
// var b = str.map(x => { document.write(x + "<br/>") })

// Task #17
// Solotion

// var str = "Pakistan";
// document.write(str.charAt(str.length - 1))

// Task #18
// Solotion

// var str = "The quick  brown fox jumps  over The lazy dog"
// str = str.split(" ")
// var temp = []
// var counter = 0;

// str.map(x => {
//     if (temp.includes(x)) {
//         counter++
//     }
//     else {
//         temp.push(x)
//     }


// })

// console.log(counter)
// console.log(temp)