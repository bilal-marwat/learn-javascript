// first example
// let winNum = 20;
// let userNum = prompt("Guess a number");



// if(winNum < userNum){
//     console.log("You Selected High Number");
// }else{
//     console.log("You Selected Low Number");
// }
// console.log(userNum);





// ---------------------------------- SECOND EXAMPLE ===================///


// yaha par mien user se number input lein toh userNum me value store karein jab user nai value store ke 30 fr b error aa raha ta q k mien nai winNum 30 mai raka hai our user ka string aa raha ta fr mien nai propmt karein k sath + lagaya fr teak hua Bilal Marwat


// let winNum = 30;
// let userNum = +prompt("Guess a number");

// if(winNum === userNum){
//     console.log("Yes Good Your Guess is Correct Exlicitly"); 
// }else{
//     console.log("Soory Your Select Number Is Wrong Plz Try Again");
// }

// console.log(userNum);




// ----------------------------- THIRD EXAMPLE ------------------------------
// es example mao nesteed if else use hua hai

// let bilalNum = 30;

// let essaNum = +prompt("Guess a number");


// if(bilalNum === essaNum){
//     console.log("Teak hai mien apko piasay dunga aap nai saiii kaha bilkul")
// }else{
//     if(bilalNum < essaNum){
//         console.log("Yarrr tum nai buhut zayda manga aap k itny piasay nahii plzzz doobara check karo")
//     }else{
//         console.log("aap nai kaam mangy aap k itny nahii hai yarrrr try karo dobara")
//     }
// }





// ----------------------------- FOURTH EXAMPLE ------------------------------

// let passMarks = 90;

// if(passMarks >= 90){
//     console.log("Good Exlenet Full Grade");
// } else if(passMarks >= 80){
//  console.log("your Grade is B")
// }else if(passMarks >= 70){
//     console.log("your Grade is C")
// }else if(passMarks >= 60){
//     console.log("your Grade is D")
// }else if(passMarks >= 50){
//     console.log("your Grade is E")
// }else{
//     console.log("your Grade is F")
// }





// Ismein, agar temperature 30 se zyada hai to "It's hot outside" print hoga, agar 20 se zyada hai to "It's a pleasant day" print hoga, agar 10 se zyada hai to "It's cool" print hoga, aur agar koi bhi condition true nahi hoti hai to "It's cold" print hoga.

// Har "else if" statement ke pehle wale conditions skip ho jaate hain, jisse sirf sabse pehli true condition ka code execute hota hai.

// var temperature = 15;

// if (temperature > 30) {
//     console.log("It's hot outside");
// } else if (temperature > 20) {
//     console.log("It's a pleasant day");
// } else if (temperature > 10) {
//     console.log("It's cool");
// } else {
//     console.log("It's cold");
// }




// ----------------------------- FIFTH EXAMPLE ------------------------------
// Switch Example
//  switch case use karein toh value ko compare karne ke liye hota hai es mai break ka matlab hai agar apka input saii hua tu wo print hu ga our agay nahii jayee ga 

//The switch statement is used to perform different actions based on different conditions.


let month = 2;

// document.getElementById("name").innerHTML = month;
switch(month){
    case 1:
        console.log("january");
        break;
        case 2:
            console.log("february");
            break;
            case 3:
                console.log("march");
                break;
                case 4:
                    console.log("april");
                    break;
                    case 5:
                        console.log("may");
                        break;
                        case 6:
                            console.log("june");
                            break;
                            case 7:
                                console.log("july");
                                break;
                                case 8:
                                    console.log("august");
                                    break;
                                    case 9:
                                        console.log("september");
                                        case 10:
                                            console.log("october");
                                            break;
                                            case 11:
                                                console.log("november");
                                                break;
                                                case 12:
                                                    console.log("december");
                                                    break;
                                                    default:
                                                        console.log("invalid month");
}


// ----------------------------- SIXTH EXAMPLE ------------------------------

//While loop JavaScript mein ek control flow structure hai, jo ek condition ko check karta hai, aur jab tak yeh condition true hai, tab tak loop chalta rahta hai. While loop ka basic syntax is tarah hota hai:


//While loop ka istemal jab aapko ek condition ko continuously check karke code execute karna ho, tab hota hai.

// While Loop
// let x = 0;
// console.log(x);
// x++;
// console.log(x)
// x++;
// console.log(x)
// x++;
// console.log(x)
// x++;
// console.log(x)
// x++;
// console.log(x)
// x++;
// console.log(x)
// x++;
// console.log(x)
// x++;
// console.log(x)
// x++;
// console.log(x)
// x++;
// console.log(x)


let x = 0;

while(x <= 9){
    console.log(x);
    x++;
}
console.log(`current value of x is ${x}`)


// var sum = 0;
// var i = 1;

// while (i <= 10) {
//     sum += i;
//     i++;
// }

// console.log("Sum: " + sum);


let num = 120;
let total = 0;
let i = 0;

while(i <=120){
    total = total + i;
    i++
}
console.log(total)


let num2 = 98;
let totalSum = 0;
let z = 0;


while(z <= 98){
    totalSum = totalSum + z;
    z++
}
console.log(totalSum)



//   b ko 76 ka value di gaya hai.
//bTotal ko calculate karne ke liye formula istemal ho raha hai: 

// nechy exmple mai ye formula use huta hai

//  b.(b+1)/
//  -------
//     2


let b = 33;
let bTotal = (b*(b+1))/2;
console.log(bTotal)

