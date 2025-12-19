


function start() {

    var city = prompt("Enter your city name")

    if (city === "karachi") {
        alert("Correct")
    } else {
        alert("Not this coorect city")
    }
}



function second() {

    var gender = prompt("Enter your gender")

    if (gender === "male") {
        alert("Good Morning Sir !")
    }

    if (gender === "female") {
        alert("Good Morning Ma'am !")
    }
}



function third() {

    var signals = prompt("Enter traffic signal color")

    if (signals === "red") {
        alert("Must Stop")
    }
    if (signals === "yellow") {
        alert("Ready to move")
    }
    if (signals === "green") {
        alert("Move now")
    }
}



function fourth() {

    var fule = prompt("Enter remaining fuel in car?")

    if (fule <= 0.25) {
        alert("Please refil the fuel tank of you car ")
    } if (fule > 0.25) {
        alert("Fuel level was great !")
    }
}



function fifth() {


    var a = 4

    if (++a === 5) {
        alert("given condition for variable a is true");
    }

    var b = 82;

    if (b++ === 83) {
        alert("given condition for variable b is true");
    }

    var c = 12;

    if (c++ === 13) {
        alert("condition 1 is true");
    } if (c === 13) {
        alert("condition 2 is true");
    }
    if (++c < 14) {
        alert("condition 3 is true");
    }
    if (c === 14) {
        alert("condition 4 is true");
    }

    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;

    if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
    }

    if (true) {
        alert("True");
    }
    if (false) {
        alert("False");
    }

    if ("car" < "cat") {
        alert("car is smaller than cat");
    }
}



function six() {


    var totalmarks = 300
    var subject1 = +prompt("Enter your 1 subject numbers")
    var subject2 = +prompt("Enter your 2 subject numbers")
    var subject3 = +prompt("Enter your 3 subject numbers")
    var Sum = subject1 + subject2 + subject3
    var percentage = (Sum / totalmarks) * 100
    var grade, remarks;
    if (percentage >= 80) {
        grade = "A+"
        remarks = "Excellent"
    } else if (percentage >= 70) {
        grade = "A"
        remarks = "Good"
    } else if (percentage >= 60) {
        grade = "B"
        remarks = "You need to improve"
    } else if (percentage <= 60) {
        grade = "Fail"
        remarks = "Sorry"
    } else {
        // document.write("Invalid Input")
    }

    document.write("<h1>Marks Sheet</h1>")
    document.write("<br>")
    document.write("<br>")
    document.write("<br>")

    document.write("<h3>Total Marks: " + totalmarks + "<h3>")
    document.write("<h3>Marks Obtain: " + Sum + "</h3>")
    document.write("<h3>Percentage: " + percentage + "</h3>")
    document.write("<h3>Grade: " + grade + "</h3>")
    document.write("<h3>Remarks: " + remarks + "</h3>")
}



function seven() {


    var secretNumber = 1;

    var userGuess = Number(prompt("Guess the secret number (1 to 10):"));

    if (userGuess === secretNumber) {
        alert("Bingo! Correct answer");
    } else if (userGuess + 1 === secretNumber) {
        alert("Close enough to the correct answer");
    } else {
        alert("Try again!");
    }
}



function eight() {


    var number = Number(prompt("Enter a number:"));

    if (number % 3 === 0) {
        alert("The number is divisible by 3.");
    } else {
        alert("The number is not divisible by 3.");
    }
}



function nine() {


    var number = Number(prompt("Enter a number:"));

    if (number % 2 === 0) {
        alert("The number is even.");
    } else {
        alert("The number is odd.");
    }
}



function ten() {


    var temperature = Number(prompt("Enter the temperature:"));

    if (temperature > 40) {
        alert("It is too hot outside.");
    } else if (temperature > 30) {
        alert("The Weather today is Normal.");
    } else if (temperature > 20) {
        alert("Today’s Weather is cool.");
    } else if (temperature > 10) {
        alert("OMG! Today’s weather is so Cool.");
    } else {
        alert("It is very cold outside.");
    }
}



function eleven() {


    var num1 = Number(prompt("Enter first number:"));
    var num2 = Number(prompt("Enter second number:"));
    var operation = prompt("Enter operation (+, -, *, /, %):");

    var result;

    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else if (operation === "/") {
        result = num1 / num2;
    } else if (operation === "%") {
        result = num1 % num2;
    } else {
        alert("Invalid operation!");
    }

    if (result !== undefined) {
        alert("Result: " + result);
    }
}