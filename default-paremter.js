// Default parameter JavaScript mein ek feature hai jo aapko function parameters mein default values set karne ki anumati deta hai. Jab aap ek function define karte hain aur uske parameters ko specify karte hain, to aap kisi parameter ke liye ek default value bhi set kar sakte hain. Agar function call karte waqt specific value provide nahi ki gayi hai, to default value istemal hoti hai.


// const myfunc2 = (a, b) => {   // ye olde tariqa hai ES6 sy pehly ka 
//     if(typeof b === "undefined"){
//         b = 5
//     }
//     return a + b
// }
// console.log(myfunc2(2))





const myfunc = (name = "Bilal") => {
console.log(`Hello : ${name}`)
}

myfunc("Hamid")



const myfunc3 = (a, b = 3) => {
    return a * b
}

console.log(myfunc3(2))



//==============================================REST PAREMTER============
console.log("==============================================REST PAREMTER============");


// es example mai hum nai tu 3 paremeter pass ke our 3 argument pass ke hai agar kal ko hum nai zayda arugment pass karan hu tu kya karengy es example mai tu 3 paremter hai a b c jo 3 argument hold karta hai 1 2 3 
const myfunc4 = (a,b,c,...rest) => {   // this is paremter
        console.log(`a is ${a}`)
        console.log(`b is ${b}`)
        console.log(`c is ${c}`)
        console.log(`rest is`, rest)
}



(myfunc4(1,2,3,4,5,6,7,8,9,10));  // this is arugment



const mfun5 = (...numbers) => {
    let total = 0
    for(number of numbers){
        total = total + number
    }
    return total;
}
const ans = mfun5(10, 45)
console.log(ans)


//==================Paremter distruchring====================
console.log("==================Paremter distruchring====================");
// "Parameter destructuring" ek JavaScript feature hai jise aap function parameters ko destructure karke unke individual values ko alag-2 variables mein assign kar sakte hain. Yeh ek concise aur expressive tareeka hai variables ko extract karna aur use karna ka.

// Destructuring ka use karte hue, aap ek object ya array ke specific values ko ek function ke parameters mein directly access kar sakte hain.


// object paremter destructuring

const obje = {
    name: "Bilal",
    age: 19,
    job: "programmer"
}
const myfunc5 = ({name, age, job}) => {
    console.log(`my name is ${name} and my age is ${age} and job is ${job}`);
}

(myfunc5(obje));


// array paremter destructuring
const arr = {
    color1: "Red",
    color2: "Green",
}

const myArray = (color1, color2) => {
    console.log(`color1 is ${color1} and color2 is ${color2}`);
}

(myArray(arr));