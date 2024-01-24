// hositing hum function ko declare karty hai agar hum nai es function ko functon k uper is ko call kya tu ye pir b call huga agar function k baad call karengy tu b call huga

// NOTED  ye sirf function declaration case mai hu ga jo nichy function declaration hai es case mai

// hositing k reation js memory k sath hai
//function expression mai nahii hu ga yee pur arrow function mai ye nahii huga 

//Memory ke sath iska direct relation hai kyunki hoisting ke doran, JavaScript engine variables aur functions ko memory mein allocate karta hai. Jab aap kisi variable ya function ko declare karte hain, to uska memory space allocate hota hai, lekin jab code run hota hai, hoisting ke wajah se iska effect ho sakta hai


// Hoisting ek programming concept hai, jo ki mainly JavaScript mein dekha jata hai. Iska mtlb hai ki code ke kuch parts ko automatically move kar diya jata hai, typically function aur variable declarations ko, code execute hone se pehle.

const hello = () => {
    console.log("Hello Mien Aik simple function hun")
}

hello()




// function expresion mai nai hu ga yee

// const bilal = function {
//     console.log("Hello Mien Aik simple function hun")
// }
// console.log(bilal())


// function init(){
//     let name = "bilal"
//     function displayName(){
//         console.log(name)
//     }
//     displayName()
//     }
//     init()




// lexical scope

function outerFunction() {
    let name = "Bilal Marwat"
    let secondName = "Ahmed"
    function innerFunction() {
        // let secret = "12345634434335454646"
        console.log("Inner function 1", name)
    }
    function innerTwoFunction(){
        console.log("Inner function 2",name)
    }
    function innerThreeFunction(){
        console.log("Inner function 3",secondName)
    }
    innerFunction()
    innerTwoFunction()
    innerThreeFunction()
}

outerFunction()



//============BLOCK SCOOPE VS FUNCTION SCOPE==============================
console.log("==============BLOCK SCOOPE VS FUNCTION SCOPE==============================")
// let and const are block scope
// ye donoo variables ko block scope mai declare karty hai aur esy block mai hee access kar skty hai block k bahir nahiii

// {
//     let name = "Khan Marwat"   // es variable ko hum nai block k andar declare kya our es ko es  block mai access kar skty ec block sy bahir nahii kar skty
//     console.log(name) 
//     const secondName = "Ahmed"
//     console.log(secondName);
// }

// {
//     const name = "Haseeb Marwta"
//     console.log(name)
//     const secondName = "Essa Hangu"
//     console.log(secondName);
// }

// const name = "Global scope varaible"
// console.log(name);
  

{
    let name = "Bilal Marwat"
    console.log(name);
}
{
    // var name = "Haseeb Marwat"
    console.log(name);
}

let z;
z = 10
console.log(z);
