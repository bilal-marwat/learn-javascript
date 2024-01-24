// object
// object sy value acces karny k liye key value pair ko use kar sakti hai
// object ko declare karny k liye object keyword ka istemal
// agar apko object sy name access karna hai tu es tarha karo console.log(bilal.name);
// doosra tariqa ye hai k console.log(bilal['name']); square bracket laga ke string ka andar key ka naam leeki
//   ===NOTED==== javascript mai key string huta hai hameesha yaad rako
 const bilal = {
    name: "bilal",
    class: "2nd year",
    age: 19,
    phone: 3499005561,
    address: "pezu",
    sallery: 3000000,
    hobbies: ["cricket", "cooding", "reding", "trip"]
}
// console.log(bilal.hobbies)
 // upadate value in object 
bilal.gender = "male"          // add new value in obejct
bilal["mood"] = "happy"   // using square bracket and add new value in obejct
console.log(bilal['class'])   // access value using key and using barket
// Object.freeze(bilal.name)  // freeze object
bilal.name = "M Bilal Marwat"
console.log(bilal)




// LOOOOOOOOOOOOOOOOOOOOOOOOOP object
//for in loop

console.log("==================LOOP IN OBJECT=============")

let user = {
    name: "bilal",
    class: "2nd year",
    age: 19,
    phone: 3499005561,
    address: "pezu",
    sallery: 3000000,
    hobbies: ["cricket", "cooding", "reding", "trip"]
}


// for(let key in user){
//     console.log(user[key])   // es mai sirf key print hua ga
//     // console.log(user[key])
// }


// agar apko obeject mai key value dono chaiyee tu ye mathod use hu ga 


for(let key in user){
    // console.log(`${key} : ${user[key]}`) //first way access key and value
    console.log(key,user[key])
    // let value = user[key];
    // console.log(key + ": " + value); // second way access key and value
}



// cumputed property

let propertyName = "age";
let adress= "City";

let myObject = {
    name: "John",
    [propertyName]: 25,
    [adress]: "Lakki Marwat"
};

console.log(myObject)

console.log("================================================================================")
const dynamic = "Email" // dynamic variable add key value in obect
let talha = {
    name: "ibrahim shah",
    age: 24,                            // objec ko hum 2 tariqoo sy access kar skty hai .dot notation and square bracket[]
    title: "student",
    hobbies: ["football", "reading", "enjoy life", "traveling"],
    phone: 34131818189,
    [dynamic]: "talha@gmail.com",
    sallery: 78000,
    adress: "Lakki Marwat Darra",
    "father name": "Abdul Gani Shah Sahib"
}
console.log(talha)
// console/log(talha.father name)   // ye hum es tarha access nahii kar skty .DOT l zariye square bracket k zariyee access kar skty hai
console.log(talha["father name"])
talha.gender = "male"  // ye hum na object mai new key value add kya .dot notaion k zariyee sy
talha["mood"] = "happy" // ye hum na object mai new key value add kya .square bracket k zariyee sy




// different b/w .dot and .square bracket



//  let khan = {                 //object mai hamry pass key single word  huta hai liken for example aap nai koi aasia word karna hu jo 2 word hu matlab ===person name=== tu app space nahii de skty hai q k js mai space allwoed nahii hai tu yaha par aap SQUARE BRACKET k zariyee sy access kar skty hai es tarha hum leak skty hai 2 word hain "person name" and "person age" es tarha 
//     name: "bilal",
//     age: 30
//  }








//==============================OBJECT ITERATE===========================
console.log("==============================OBJECT ITERATE============================================================================")

let newUser = {
    name: "Hamid",
    fatherName: "Sana Ullah Khan",
    phone: 344546665,
    adress: "Lakki Marwat",
    age: 22
}

for(let bilal in newUser){   // es equation apply karny sy sirf object k key show hungy liek humy poora  key and value donoo ko show karna hai
    // console.log(newUser[bilal])   // ye value show hua hai object k
    // console.log(bilal)   // ye key show hua hai object k
    console.log(`${bilal} : ${newUser[bilal]}`)
}



//=====================computed value=========================
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";


const taskObj = {
    [key1]: value1,
    [key2]: value2

}
console.log(taskObj)












//========================SPREAD OPERTOR IN OBJECT=====================================
console.log("========================SPREAD OPERTOR IN OBJECT=====================================")

const haseebObj ={
    key10: "Haseeb Khan",
    key11: 24,
    address: "Lakki Marwat",
}
const bilalObject ={
    key12: "Bilal",
    key13: 19,
    job: "programmer"
}
const newObject = {...haseebObj, ...bilalObject};
// const newObject = {...haseeObj, ...bilalObject};
console.log(newObject)


//===============================OBJECT DISTRUCTRING========================================
console.log("===============================OBJECT DISTRUCTRING========================================")

const mohaiman = {
    name: "Mohaiman",
    degree: "BS.English",
    language: "Urdu and English",
    "father name": "Ikram Ullah Khan Marwat",
    mood: "happy"
}



// console.log(mohaiman)
// const userName = mohaiman.name
// const useedegree = mohaiman.degree   // long way of distructring 
// console.log(userName)
// console.log(useedegree)


////////============\Short way of distructring
// const {name: var1, degree: var2, language: 3} = mohaiman
const {name, degree, language, ...rest} = mohaiman
console.log(name);
console.log(degree);
console.log(language);
console.log(rest)



//===================================OBJECT INSIDE ARRAY ===================================
console.log("===================================OBJECT INSIDE ARRAY ====================================")

// es ka matlab hai k aik a array mai multiple object hain

// const czn = [
//     {name:"Bilal", id: 1, gender: "Male"},
//     {name:"Hamid", id: 2, gender: "Male"},
//     {name:"Mohaiman", id: 3, gender: "Male"},
//     {name:"Sadaqat", id: 4, gender: "Male"},
// ]
// console.log(czn)



// Haan, aapne sahi samjha hai. Arrays ke sath kaam karne ke liye for...of loop aksar better option hai. Yeh kuch reasons hainz




// for (let index in czn) {
//     console.log(czn[index].name);  // for in loop in array
// }
// for (let person of czn) {
//     console.log(person.gender);
// }
// for (let i = 0; i < czn.length; i++) {
//     console.log(czn[i].name); 
//   }


//==========distructring in object inside array
const czn = [
    {name:"Bilal", id: 100, gender: "ppppp"},
    {name:"Hamid", id: 2, gender: "Male"},
    {name:"Mohaiman", id: 3, gender: "sgender"},
    {name:"Sadaqat", id: 4, gender: "Male"},
]
// console.log(czn)
// const [czn1, czn2, czn3, czn4] = czn // nahii bhai muhji tu array  andar jo object hai uska name chaiyee tu kya karo gay 

// tu es tarha karnegy nichy example hai
const [{name: fName, gender: user1Gender, id: user1ID}, , {id, gender: sgender}] = czn





console.log(fName)
console.log(user1ID) 
console.log(user1Gender) 
// console.log(gender)
// console.log(id)
// console.log(sgender)

// const [{name: czn1}, {name: czn2}, {name: czn3}, {name: czn4}] = czn
// console.log(czn1)





//==================NESTED OBJECT=========================
console.log("==================NESTED OBJECT=====================================================================")

let myObj = {
    firstName: {
        name:{
            first: "Bilal",
        }
    }
}                                           // access nested object
console.log(myObj.firstName.name)
