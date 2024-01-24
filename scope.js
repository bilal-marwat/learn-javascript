// JavaScript (JS) mein "scope" ek programming concept hai jo variable aur function accessibility ko define karta hai. Scope determine karta hai ki ek variable ya function ka code ke kis hisse tak access ho sakta hai.


// Scope ek programming concept hai jo yeh batata hai ki ek variable ya function ka code ke kis hisse (portion) se access ho sakta hai. Scope ka use code structure aur organization ko manage karne mein hota hai.


// Scope determines the accessibility (visibility) of variables.

// JavaScript variables have 3 types of scope:

// Block scope
// Function scope
// Global scope

                      
                                         // GLOBAL SCOPE


 //  Global Scope ek programming concept hai jo ye batata hai ki ek variable ya function program ke sabhi hisson se accessible hai. Jab aap kisi variable ya function ko program ke bahut bade hisse mein define karte hain, to us variable ya function ka scope global hota hai.


//  Global Scope mein define kiye gaye variables ya functions ko aap program ke kisi bhi hisse se access kar sakte hain. Iska matlab hai ki aap unhe kisi bhi function ke andar ya kisi block ke andar define kiye bina seedhe program ke kisi bhi sthan se use kar sakte hain.

// : Global scope mein define kiye gaye variables ya functions ko program ke kisi bhi hisse se access kiya ja sakta hai. Ye program ke sabhi parts mein visible hota hai.

// Jab kisi variable ya function ko program ke bahut bade hisse mein define kiya jata hai, tab uska scope global hota hai. Global scope mein define kiye gaye variables ya functions ko program ke kisi bhi hisse se access kiya ja sakta hai.

var x = 10;
let y = 20;
const myfun1 = () => {
    console.log("ye value declare bahir hai liken ed ko hum fynctio k andar access kar rhy hai",y)
}
const myfun2 = () => {
    console.log("ye value declare bahir hai liken ed ko hum fynctio k andar access kar rhy hai",x)
}
console.log("this value is global x variable",x);
console.log("this is value is global y variable",y);
myfun1()    
myfun2()     



                                //FUNCTION SCOPE

 // Function scope ka matlab hai ki ek variable, jise aap ek function mein declare karte hain, woh sirf us function ke andar hi accessible hota hai. Iska scope function ke boundaries tak hi limited hota ha      

//  Variables ya functions jo kisi function ke andar define kiye gaye hote hain, unka scope sirf us function tak hi limited hota hai              


const myfun3 = () => {
    const k = "hello i am iiner varaible"
    console.log(k);
}
myfun3()

                             //BLOCK SCOPE 

  //  Block Scope (ES6 ke baad): JavaScript mein ES6 (ECMAScript 2015) ke introduction ke baad, let aur const keywords ka istemal karke block scope ka concept aaya. Variables jo let ya const ke sath define kiye gaye hote hain, unka scope us block tak hi hota hai jisme wo define kiye gaye hote hain.

// Block scope ka concept ES6 ke saath aaya hai, jisme let aur const keywords ka istemal hota hai.
// Block scope ka matlab hai ki ek variable jise aap block (curly braces ke beech) mein declare karte hain, woh sirf us block ke andar hi accessible hota hai.



//   let aur const block scope provide karte hain, jabki var function scope provide karta hai.


// Is tarah, function scope aur block scope, JavaScript mein variables ke access aur visibility ko define karne mein madad karte hain. Block scope ka aana, modern JavaScript mein code likhne ko aur flexible bana deta hai.



const myfun4 = () => {
    if(true){
        var k = "hello i am block scope variable";
        console.log(k);
    }
}
myfun4()
