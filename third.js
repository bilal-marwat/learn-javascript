//for looop example

// JavaScript mein, for loop ek control flow statement hai jo ek block of code ko kuch muddat tak execute karta hai. for loop ka basic syntax is tarah hota hai:
// Yeh loop teen expressions ka use karta hai
//  1  initialization
//  2  condition
//  3   update
// for(i = 0; i <= 20; i++){
//     console.log(i)
// }


// sum of example in for loop
// let x = 10;
// let total = 0;
// for(let i = 0; i <= x; i++){
//     total = total + i
//     console.log(total);
// }


// for(let m = 0; m <=100; m++){
//     if(m === 32){                    // break is used to stop the loop when condition is true
//         break
//     }
//     console.log(m)
// }



// ==================== Do while loop  ========================


//  for(let c = 0; c <= 20; c++){        for loop mai hum pehly condition check krty hain,                                    es k baad condition true hai to loop chalta hai
//     console.log(c);
// }




let z = 22;

do{
    console.log(z);
    z++
}while(z <= 20)

console.log("value of is i " + z)




//===================== for loop example with array =============================//
let myArray = ['bilal', 'shafiq', 'Essa', 'shafiq', 'talha', 'inam', 'zaid'];


let arr = 0;

while(arr < myArray.length){
    console.log(`value of my array length is ${myArray[arr]}`)
    arr = arr + 1
}