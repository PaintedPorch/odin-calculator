const calculation = document.getElementById("calculation");
const result = document.getElementById("result");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const clear = document.querySelector(".clear");
const random = document.querySelector(".random");
const equals = document.querySelector(".equals");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const e = document.querySelector(".e");
const pi = document.querySelector(".pi");
const dot = document.querySelector(".dot");

let currentNumStr = "";

one.addEventListener("click", function() {
    calculation.textContent += "1";
    currentNumStr+="1";
    console.log(currentNumStr);
})
two.addEventListener("click", function() {
    calculation.textContent += "2";
    currentNumStr+="2";
    console.log(currentNumStr);
})
three.addEventListener("click", function() {
    calculation.textContent += "3";
    currentNumStr+="3";
    console.log(currentNumStr);
})
four.addEventListener("click", function() {
    calculation.textContent += "4";
    currentNumStr+="4";
    console.log(currentNumStr);
})
five.addEventListener("click", function() {
    calculation.textContent += "5";
    currentNumStr+="5";
    console.log(currentNumStr);
})
six.addEventListener("click", function() {
    calculation.textContent += "6";
    currentNumStr+="6";
    console.log(currentNumStr);
})
seven.addEventListener("click", function() {
    calculation.textContent += "7";
    currentNumStr+="7";
    console.log(currentNumStr);
})
eight.addEventListener("click", function() {
    calculation.textContent += "8";
    currentNumStr+="8";
    console.log(currentNumStr);
})
nine.addEventListener("click", function() {
    calculation.textContent += "9";
    currentNumStr+="9";
    console.log(currentNumStr);
})
dot.addEventListener("click", function() {
    calculation.textContent += ".";
    currentNumStr+=".";
    console.log(currentNumStr);
})

pi.addEventListener("click", function() {
    calculation.textContent = "3.14159265";
    currentNumStr = "";
    currentNumStr+="3.14159265";
    console.log(currentNumStr);
})
e.addEventListener("click", function() {
    calculation.textContent = "2.71828182";
    currentNumStr = "";
    currentNumStr+="2.71828182";
    console.log(currentNumStr);
})

function clearNum()
{
    calculation.textContent = "";
    result.textContent = "";
    currentNumStr = "";
}
clear.addEventListener("click", clearNum);

function addNums(a, b)
{ // Use symbol to create string
    calculation.textContent += "+";
    return a+b;
}
add.addEventListener("click", addNums);
function subNums(a, b)
{ // Use symbol to create string
    calculation.textContent += "-";
    return a-b;
}
subtract.addEventListener("click", subNums);
function divNums(a, b)
{ // Use symbol to create string
    calculation.textContent += "/";
    return a/b;
}
divide.addEventListener("click", divNums);
function multNums(a, b)
{ // Use symbol to create string
    calculation.textContent += "*";
    return a*b;
}
multiply.addEventListener("click", multNums);

function equalResult()
{ // split textContent on operator, use switch statement to determine which function to exec

}