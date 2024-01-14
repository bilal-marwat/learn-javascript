// User se do numbers input lein
var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));

// Numbers ka comparison karein
if (num1 > num2) {
    console.log(num1 + " is greater than " + num2);
} else if (num1 < num2) {
    console.log(num2 + " is greater than " + num1);
} else {
    console.log("Both numbers are equal");
}
