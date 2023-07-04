const calculation = document.getElementById("calculation");
const result = document.getElementById("result");
const zero = document.querySelector(".zero");
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
const ans = document.querySelector(".ans");
const equals = document.querySelector(".equals");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const e = document.querySelector(".e");
const pi = document.querySelector(".pi");
const dot = document.querySelector(".dot");

let currentNumStr = "";
let activeOperatorCount = 0;
let ansAmount = 0;
let currentAns = "";

zero.addEventListener("click", function() {
    calculation.textContent += "0";
    currentNumStr+="0";
})
one.addEventListener("click", function() {
    calculation.textContent += "1";
    currentNumStr+="1";
})
two.addEventListener("click", function() {
    calculation.textContent += "2";
    currentNumStr+="2";
})
three.addEventListener("click", function() {
    calculation.textContent += "3";
    currentNumStr+="3";
})
four.addEventListener("click", function() {
    calculation.textContent += "4";
    currentNumStr+="4";
})
five.addEventListener("click", function() {
    calculation.textContent += "5";
    currentNumStr+="5";
})
six.addEventListener("click", function() {
    calculation.textContent += "6";
    currentNumStr+="6";
})
seven.addEventListener("click", function() {
    calculation.textContent += "7";
    currentNumStr+="7";
})
eight.addEventListener("click", function() {
    calculation.textContent += "8";
    currentNumStr+="8";
})
nine.addEventListener("click", function() {
    calculation.textContent += "9";
    currentNumStr+="9";
})
dot.addEventListener("click", function() {
    calculation.textContent += ".";
    currentNumStr+=".";
})

pi.addEventListener("click", function() {
    calculation.textContent = "3.14159265";
    currentNumStr = "";
    currentNumStr+="3.14159265";
})
e.addEventListener("click", function() {
    calculation.textContent = "2.71828182";
    currentNumStr = "";
    currentNumStr+="2.71828182";
})

function clearNum()
{
    calculation.textContent = "";
    result.textContent = "";
    currentNumStr = "";
    activeOperatorCount = 0;
}
clear.addEventListener("click", clearNum);

function addNums()
{ // Use symbol to create string
    calculation.textContent += "+";
    activeOperatorCount++;
}
add.addEventListener("click", addNums);
function subNums()
{ // Use symbol to create string
    calculation.textContent += "-";
    activeOperatorCount++;
}
subtract.addEventListener("click", subNums);
function divNums()
{ // Use symbol to create string
    calculation.textContent += "/";
    activeOperatorCount++;
}
divide.addEventListener("click", divNums);
function multNums()
{ // Use symbol to create string
    calculation.textContent += "*";
    activeOperatorCount++;
}
multiply.addEventListener("click", multNums);

function answer()
{
    if (ansAmount == 1)
    {
        calculation.textContent += String(currentAns);
    }
    else
    {
        calculation.textContent = "Ans Error! Ans can only be used once after an operation.";
    }
    ansAmount = 0;
    currentAns = "";
}
ans.addEventListener("click", answer);

function equalResult()
{ // split textContent on operator, use switch statement to determine which function to exec
    let a = 0
    let b = 0;
    if (activeOperatorCount == 1)
    {
        activeOperatorCount = 0;
        if (calculation.textContent.includes("+")) 
        {
            let split_str = calculation.textContent.split("+");
            a = Number(split_str[0]);
            b = Number(split_str[1]);
            currentAns = result.textContent = Math.round((a + b) * 100) / 100;
            ansAmount++;
        }
        else if (calculation.textContent.includes("-")) 
        {
            let split_str = calculation.textContent.split("-");
            a = Number(split_str[0]);
            b = Number(split_str[1]);
            currentAns = result.textContent = Math.round((a - b) * 100) / 100;
            ansAmount++;
        }
        else if (calculation.textContent.includes("/")) 
        {
            let split_str = calculation.textContent.split("/");
            a = Number(split_str[0]);
            b = Number(split_str[1]);
            currentAns = result.textContent = Math.round((a / b) * 100) / 100;
            ansAmount++;
        }
        else if (calculation.textContent.includes("*")) 
        {
            let split_str = calculation.textContent.split("*");
            a = Number(split_str[0]);
            b = Number(split_str[1]);
            currentAns = result.textContent = Math.round((a * b) * 100) / 100;
            ansAmount++;
        }
    }
    else
    {
        calculation.textContent = "Please use a single operator per operation";
        activeOperatorCount = 0;
        ansAmount = 0;
    }
    activeOperatorCount == 0;
}
equals.addEventListener("click", equalResult);