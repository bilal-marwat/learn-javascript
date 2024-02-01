// // Array methods JavaScript mein istemal is liye hote hain taake aap arrays ke sath aam operations ko asaan taur par perform kar saken. In methods ki madad se aap data ko manipulate kar sakte hain, filter kar sakte hain, iterate kar sakte hain, naye arrays bana sakte hain, aur bahut kuch. Yeh methods aapko code likhne mein asaanai aur efficiency provide karte hain.

// // Yahan kuch mukhtasar wajahen hain jin ke liye array methods istemal hote hain:

// // Code Readability: Array methods ka istemal code ko concise aur readable banane mein madad karta hai. Har method ek specific task ko handle karta hai, jisse aapko alag-alag task ke liye alag-alag loops likhne ki zarurat nahi hoti.

// // Code Reusability: Array methods aapko common operations ke liye ek baar likhe gaye functions ka istemal karne ki suvidha dete hain. Aap in methods ko alag-alag jagahon par asani se reuse kar sakte hain.

// // Functional Programming: Array methods functional programming principles ko support karte hain. Yeh higher-order functions hote hain, jinhe aap as arguments pass kar sakte hain, ya phir unka istemal karke naye functions create kar sakte hain.

// // Performance: Inbuilt array methods optimized hote hain, jisse unka istemal karna generally efficient hota hai. Yeh JavaScript engine ke taraf se optimized hote hain, jo aapke code ko jaldi aur efficient taur par execute karta hai.

// // Yeh kuch wajahen hain jo array methods ka istemal justify karte hain. In methods ki madad se aap apne code ko organize kar sakte hain aur complex tasks ko asaan taur par handle kar sakte hain.

// //   FOR EACH

// // Beshak, mein forEach ko Urdu mein samjhane ki koshish karunga.
// // forEach ek array method hai jo har array element ke liye diye gaye function ko ek baar chalata hai. Yani ke aap uss function ko har array element ke sath ek baar execute kar sakte hain.

// console.log(
//   "===============================Using For looooooooooooooooooooooooooop================================"
// );
// let phool = ["Gulab", "Chameli", "Lily", "Tulip"];

// for (let i = 0; i < phool.length; i++) {
//   console.log(phool[i]);
// }

// console.log(
//   "===============================Using For  OFFFF  looooooooooooooooooooooooooop================================"
// );
// let name = ["bilal", "khan", "marwat"];

// for (let user of name) {
//   console.log(user);
// }

// console.log(
//   "===============================Using For  INN looooooooooooooooooooooooooop================================"
// );

// let schol = [
//   "class 5th",
//   "class 6th",
//   "class 7th",
//   "class 8th",
//   "class 9th",
//   "class 10th",
// ];

// // console.log(schol);
// for (let user in schol) {
//   console.log(schol[user]);
// }

// console.log(
//   "===============================Using For  EACH looooooooooooooooooooooooooop================================"
// );

// const fruits = ["Apple", "Banana", "Orange"];

// fruits.forEach(function (fruit, index) {
//   // console.log("Index: " + index + ", Fruit: " + fruit);
//   console.log(`Index: ${index}, Fruit: ${fruit}`);
// });

// console.log("==================================================================");

// const college = ["AIET", "AIIMS", "AIU"];
// college.forEach(function(a){
//     console.log(`Index: ${b}, College: ${a}`);
// })




let employees = [
  { id: 1, name: "John" },
  { id: 2, name: "Sarah" },
  { id: 3, name: "Mike" },
  { id: 4, name: "David" },
  { id: 5, name: "Jane" },
  { id: 6, name: "Emily" },
  { id: 7, name: "Michael" },
  { id: 8, name: "Olivia" },
  { id: 9, name: "Emma" },
  { id: 10, name: "Ava" },
];


employees.forEach(function(employName){
  console.log(employName.name);
})

// // const zarab = [2, 4, 6, 8,];
// // zarab.forEach(function(number){
// //     console.log(numb * 4);
// // });