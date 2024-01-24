// ===================== Array In javascript   ====================



//JavaScript mein, "array" ek data structure hai jo ek collection ya list ko represent karta hai jiska har element ek unique index ke saath associated hota hai. Arrays JavaScript mein versatile hote hain aur aap unmein alag-alag data types ke elements store kar sakte hain, jaise ki numbers, strings, objects, functions, aur even other arrays.

// Yeh ek basic array example hai:

// Array is collection of item


//JavaScript mein, arrays mutable hote hain, yani inki values badli ja sakti hain. Jab aap ek array banate hain, aap usmein naye elements add kar sakte hain, existing elements ko modify kar sakte hain, ya phir elements ko remove bhi kar sakte hain. Ye flexibility array ko mutable banati hai.

// mutable ka matlab k aao change kar skty hu baad mai


let fruit = ['apple', 'orange','mango', 'banana', 'pineapple', 'grapes', 'watermelon'];
console.log(fruit);
fruit[6] = "kiwi"
console.log(fruit);
fruit[0] = "strawberry"
console.log(typeof fruit);
console.log(Array.isArray(fruit));


// let arr = 0;
// while(arr < fruit.length){    //  yahabpar mien nai array par loop lagay hai
//     console.log(fruit[arr]);
//     arr++
// }



////====================== PUCH EXAMPLE ===========================
console.log('puch example mean last mai kuch add karna array mai');


let friends = ['bilal', 'khan', 'talha', 'inam'];
console.log(friends);
friends.push('usama');
console.log(friends);



////====================== POP EXAMPLE ===========================

console.log("POP EXAMPLE mean array mai last mai kuch remove karna hai");

let car = ['audi', 'bmw', 'mercedes', 'honda'];
console.log(car);
car.pop('honda');
console.log(car); 


//====================== UNSHIFT EXAMPLE ===========================
console.log("UNSHIFT EXAMPLE mean array mai first mai kuch add karna hai");

let routin = ['sunday', 'monday', 'tuesday', 'wednesday'];
console.log(routin);
routin.unshift('thursday');
console.log(routin);


//====================== SHIFT EXAMPLE ===========================
console.log("SHIFT EXAMPLE mean array mai first mai kuch remove karna hai");

let days = ['sunday', 'monday', 'tuesday', 'wednesday'];
console.log(days);
days.shift();
console.log(days); 
let removeday = days.shift();
console.log('ye mien nai nikal diya array sy ', removeday);



//different between primitive and reference data types
console.log("different between primitive and reference data types")
let x = 10;
let b = 0;
console.log("ye value x ka hai ",x);
console.log("ye value b ka hai ",b);


b = 20;

console.log("hum nau value change ke b liken x par koi asae nahii para ",b)


// how to clone array



// console.log("clone Array")

// let arr = ['item1', 'item2', 'item3', 'item4'];
// let arr2 = arr;
// console.log(arr)
// console.log(arr2)
// arr.push('item5');
// console.log("after push in arr", arr)
// console.log(arr2)



// clone array real example

let arr1 = ['item1', 'item2', 'item3', 'item4'];
let arr2 = ['item1', 'item2', 'item3', 'item4'];
console.log(arr1);
console.log(arr2);
arr1.push('item5');
console.log("after push in arr1 item5", arr1);
console.log(arr1);
console.log(arr2);


// clone array real example use slice mthod

console.log("==============using slice method for clone array============")
let originalArr = ['Apple', 'Mango', 'Orange'];
let cloneArr = originalArr.slice();

cloneArr.push('Watermelon');
console.log("ye original array hai",originalArr)
console.log("ye clone array hai",cloneArr)


//=============
//===================== use concat method

console.log("=========using concat method for clone array======")
// let myArr = [10, 20, 30, 40, 50];
// let myArr2 = [];                        /// second way concat method use
// myArr2 = myArr.concat();
// myArr2.push(60);
// console.log(myArr)
// console.log(myArr2)



let myArr = [10, 20, 30, 40, 50];
let cloneArray = [].concat(myArr);
cloneArray.push(60, 70, 80, 90, 100);
console.log(myArr)
console.log(cloneArray)



//==============use spread operator===========================
console.log("================using spread operator==========")
let oldArray = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
let oneMore = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let newArray = [...oldArray, ...oneMore]
// newArray.push(10);
console.log(oldArray)
console.log(newArray)
