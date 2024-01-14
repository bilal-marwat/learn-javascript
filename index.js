// comments some times in javascript file to see if it works or not 
console.log("JS is working");
console.log(`Hello My JavaScript File`);


// variables


//  ek programming concept hai, jo ek memory location ko represent karta hai jahan information ko store kiya ja sakta hai. Yeh information, jise hum "value" kehte hain, program ke execution ke dauran badal sakti hai.

// Variables programming languages mein data ko store karne ke liye istemal hoti hain. Har variable ko ek specific name diya jata hai, jise hum use kar ke uss variable ki value ko access kar sakte hain. 
var x = 10;
console.log(x);

x = 20;
console.log(x);


// variables declaration rule
// 1. variable name should not start with number
// 2. variable name should not start with special symbol
// 3. variable name should not contain space
// 4. variable name should not contain special symbol
// 5. variable name should not contain number
// 6. variable name should not contain special symbol
// 7 start with samll later and use camel case
// JavaScript mein var, let, aur const keywords ka istemal variable declare karne ke liye hota hai.



// var     function-level scope ka istemal karta hai, jabke let aur const block-level scope ka istemal karte hain. Block-level scope ka matlab hai ke variable sirf us block mein hi accessible hoga, function mein nahi.



var first_name = "bilal"  // snake case writing underscore _ two words

var firstName = "Bilal"   // camel case writing



// indexing start from 0 zero space is included
let z = "Pakistan is my favrt country"
console.log(z.length)


let n = "i am muhammad bilal frontend developer"
console.log(n[n.length - 5])



// trim method is used for removed spaces

let name = "  muhammad     "
console.log(name.length)

// let name2 = name.trim()     //first way of removing spaces
// console.log(name2.length) 

let name2 = name.trim().length   //second way of removing spaces
console.log(name2)



let khan = "abdullah marwat"   // lower case to upper case
console.log(khan.toUpperCase())



let khan2 = "ABDULLAH MARWAT"   // upper case to lower case
console.log(khan2.toLowerCase())



let khan3 = "Muhammad Bilal Marwat"
console.log(khan3)

let newS = khan3.slice(0, 15)  // start index and end index
console.log(newS)   


let myN = "Hello World I am junior programmer"   // includes method is used for search in string
console.log(myN.includes("World"))


let myH = "Hello World I am junior programmer"
console.log(typeof myH)


let nuB = 12234555665544
console.log(typeof nuB)



let str = 909090909
str = String(str)
console.log(typeof str)


let string1 = "Muhammad"   // concatenation in javascript is used to add two or more strings
let string2 = "Bilal"

console.log(string1 + " " + string2)


let age = 19
let nameb = "Muhammad Bilal"   // template literals Or template string hard code

let aboutMe ="My Name Is " + nameb + " and my is " + age
console.log(aboutMe)


let secAge = 20   // template literals Or template string backtick easy code 
let secName = "Abdullah Marwat" 

let aboutAbdllah = `My Name is ${secName} and my age is ${secAge}`
console.log(aboutAbdllah)


let udeF;  // undefined value in javascript mean that variable is not defined yet 
console.log(typeof udeF)


// bigint


let big = BigInt (900909090909090907)
// console.log(Number.MAX_SAFE_INTEGER)
console.log(big)


// bolean and operators


let num1 = "22" // (==) means equal to just value not type  BUT (===) means value and type both
let num2 = 22
console.log(num1 !== num2)



let user1 = 20

if(user1 < 21){
    console.log("Your are eligible for programming Welcome")
}else{
    console.log("Your are not eligible for programming")
}



let num = 20
if(num % 2 === 0){
    console.log("Even")   
}else{
    console.log("Odd")
}



//JavaScript mein "reminder" usually "remainder" ko refer karta hai.  Remainder woh bacha hua hissa hai jab ek number ko doosre se divide kiya jata hai. Isko calculate karne ke liye % (modulo) operator ka istemal hota hai



// Is example mein, num1 ko num2 se divide karne par remaining (bacha hua) value ko remainder variable mein store kiya gaya hai. Iska result 1 hoga, kyun ki 3 se 10 ko divide karne par 3 * 3 = 9, aur bacha hua 1 hai.

//Isi tarah se aap kisi bhi do numbers ke beech mein remainder calculate kar sakte hain.
var num3 = 38;
var num4 = 5;

var remainder = num3 % num4;

console.log("The remainder when " + num3 + " is divided by " + num4 + " is: " + remainder);


// ternary example

// let a = 10
// let b = 20
// let c = a > b ? a : b
// console.log(c)

let myAge = 18
let result = myAge >= 20 ? "eligible" : "not eligible"
console.log(result)


var khanAge = 20;  // && is used for multiple conditions and check if all conditions are true
if(khanAge >= 18 && khanAge <= 25){
    console.log("eligible for driving license")
}else{
    console.log("not eligible for driving license")
}


// nested if


let winningNum = 20;
let userNum = +prompt("Guess a number");

if(winningNum === userNum){
    console.log("You Got it right Exllent")
}else{
    if(userNum < winningNum){
        console.log("too low")
    }else{
        console.log("too high")
    }
}

// console.log(userNum)