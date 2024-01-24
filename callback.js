// Callback function ek function hai jo dusre function mein argument ke roop mein pass kiya jata hai aur jab woh function complete hota hai, toh callback function execute hoti hai. Callback functions JavaScript mein asynchronous programming aur event handling mein commonly istemal hoti hain.

// Callback function ka istemal asynchrony (asynchronous programming) mein hota hai. Suppose karein aap ek task ko complete kar rahe hain jo samay lagata hai, jaise ki data fetch karna server se. Jab aap data fetch kar rahe hain, aapko wait karna padta hai, kyunki yeh operation thoda time leta hai. Is samay aap doosre kaam bhi karna chahte hain taki aapki application responsive rahe.  

// Yehan aata hai callback function. Aap ek function ko dusre function mein parameter ke roop mein pass karte hain. Jab pehla function apna kaam complete karta hai, toh wo dusre function ko "callback" ke roop mein bulata hai
// Ek function jo data fetch karega



// "I will call back later!"

// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished





// function fetchData(callback) {

//     // Assume asynchronous operation (e.g., fetching data from a server)

//     setTimeout(function() {
//       const data = "Fetched data!";

//       // Callback function ko invoke karte hain jab operation complete ho gaya hai
//       callback(data);
      
//     }, 2000); // Assume 2 seconds delay
//   }
  
//   // Callback function
//   function processData(data) {
//     console.log("Processing data:", data);
//   }
  
//   // fetchData function ko call karte waqt processData callback function pass karna
//   fetchData(processData);
//   // Output (after 2 seconds): Processing data: Fetched data!



function myFunc2(name){
    console.log("tum mere doosra function hu app function k baad run hugy ")
    console.log("vajbvjkfjkab cajsbd jkvbjkvbakbfkjab");
    console.log(`my name is ${name}`);
}
function myFunc1(callback){
    console.log("ye mere pehla function hai ye pehly run hu ga");
    console.log("93205909502395095095");
    callback("Bilal Marwat")
}

myFunc1(myFunc2)








const myfun3 = (anyfunction) => {
    console.log("Hello Mien Aagyaaa");
    anyfunction()
}

const myfun4 = () => {
    console.log("Hello Good Bye See You Late Next Time");
}
myfun3(myfun4)


const sayHello = () => {
    alert("Hello World")
}
