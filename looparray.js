//==============for loop in array=============
// let fruits = ['apple', 'mango', 'banana', 'orange'];
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i].toUpperCase());
    
// }
// ==============================================================================

//=======================while loop in array=====================

const fruits = ['apple', 'mango', 'banana', 'orange'];
let i = 0;

while(i<fruits.length){
    console.log(fruits[i].toUpperCase())
    i++
}


//=======================for of loop of array=====================
console.log("==============for of loop in array=================")
let name = ["abul","babul","kabul"];


for(let names of name){
    console.log(names.toUpperCase())
}


//=======================for in loop in array=====================
console.log("==============for in loop in array=================")

let num = [1,2,3,4,5,6,7,8,9,10];
for(let nums in num){
    console.log(num[nums])
}


//=====================Array destructuring==============================
console.log("==============Array destructuring=====================")

// let myArray = ["value1", "value2", "value3"];
// let myvar1 = [myArray[0]];
// let myvar2 = [myArray[1]];               ///first waay array destructuring
// let myvar3 = [myArray[2]];
// console.log("value of my var1 ",myvar1);
// console.log("value of my var2 ",myvar2);
// console.log("value of my var3 ",myvar3);


// let myArray = ["value1", "value2", "value3", "value4", "value5"];
// let[myvar1, , myvar3, , myvar5] = myArray;   ///second way array destructuring
// console.log("value of my var1 ",myvar1);
// // console.log("value of my var2 ",myvar2);
// console.log("value of my var3 ",myvar3);
// // console.log("value of my var4 ",myvar4);
// console.log("value of my var5 ",myvar5);



// let user = ["Name Bilal", "Job Programmer", "Country Pakistan", "Adress Pezu", 200000, 10, 9090909909090];
// old way array destructuring
// console.log(user[0])
// console.log(user[1])
// console.log(user[2])
// console.log(user[3])
// console.log(user[4])
// console.log(user[5])
// console.log(user[6])



let user = ["Name Bilal", "Job Programmer", "Country Pakistan", "Adress Pezu", 200000, 10, 9090909909090,["Lakki Marwat", "Darra Pezu"]];

let= [name, job, country, address, salary, age, phone,[city, home]] = user;

console.log(home)