// Greet User
function greetUser(){

    let name = prompt("Enter your name:");

    alert("Hello " + name + "!");
}

// Even or Odd
function checkNumber(){

    let number = prompt("Enter a number:");

    if(number % 2 == 0){
        alert(number + " is Even");
    }
    else{
        alert(number + " is Odd");
    }
}

// Calculator
function calculator(){

    let num1 = Number(prompt("Enter first number:"));

    let operator = prompt("Enter operator (+, -, *, /)");

    let num2 = Number(prompt("Enter second number:"));

    let result;

    if(operator == "+"){
        result = num1 + num2;
    }

    else if(operator == "-"){
        result = num1 - num2;
    }

    else if(operator == "*"){
        result = num1 * num2;
    }

    else if(operator == "/"){
        result = num1 / num2;
    }

    else{
        result = "Invalid Operator";
    }

    alert("Result: " + result);
}