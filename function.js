function comeIn(){
    console.log("Oyeee Idr Aawo jaldi karo aap mera noookae hu")
}   // yaha par hum nai aik basic function banaya our use karty time hum nai funtion ko call kya jo hum nai comeIn k naam sy banaya hai 
comeIn()

function tenPlusOne(){
    console.log(10+1)
}
tenPlusOne()

function sumNum(num1, num2, num3){ // ye paremeter function hai
    return num1 + num2 + num3
}
const returnValue = sumNum(10 , 30, 12) // arguments matlab kuch pass karna function ko 
console.log(returnValue) 


const isEven = (number) => {
    return number % 2 === 0
}

console.log(isEven(9))

// yaha par aik function create karengy jis mai koi b string dengy toh return karengy string ka forst character 

function firstChar(str){
    return str[0]
}
console.log(firstChar("Marwat"))


// yaha par aik our function create karengy jis mai aik array huga our input mai jo ham dey tu wo array mai es ka index bateya ga hamy

const  findeTarget = (array , target) =>{
    for(let i = 0; 1<array.length; i++){
        if(array[i] === target){
            return i
        }
    } 
    return -1
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const answer = findeTarget(myArray, 2)
console.log(answer)

//==================FUnction Expresion=========================
const funtionExpresion  = function(){
    console.log("Hello Mien Aik Function Expresion")
}
funtionExpresion()

//==============Arrow Function=========================
const arrowFunction = () => {   
    console.log("Hello Mien Aik Arrow Function")
}
arrowFunction()




function calculaterCartPrice(var1, var2, ...number1){
    return number1
}
console.log(calculaterCartPrice(200, 500, 700))


const users = {
    name: "Marwat",
    prices: 200  
}
function handleObject(anyObject){
    console.log(`uaser name is ${anyObject.name} and uaser price is ${anyObject.price}`)
}
handleObject(users)

// NESTED FUNCTIO
console.log("==================NESTED FUNCTION=====================================================================")

const function1 = () => {
    const function2 = () => {
        console.log("HELLO I AM INNER FUNCTION IN FUNTION 1 AND MY NAME IS FUNC 2")
    }
    const function3 = () => {
        console.log("HELLO I AM INNER FUNCTION IN FUNTION 1 AND MY NAME IS FUNC 3")
    }
    
    
    console.log("Function 1")
    function2()
    function3()
}

function1()