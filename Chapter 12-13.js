


function start() {

    var input = prompt("Enter a character:");
    
    var asciiCode = input.charCodeAt(0);
    
    if (asciiCode >= 48 && asciiCode <= 57) {
        alert("The given input is a Number.");
    } 
    else if (asciiCode >= 65 && asciiCode <= 90) {
        alert("The given input is an Uppercase letter.");
    } 
    else if (asciiCode >= 97 && asciiCode <= 122) {
        alert("The given input is a Lowercase letter.");
    } 
    else {
        alert("The given input is not a number or a letter.");
    }
}



function second() {

    var num1 = Number(prompt("Enter the first integer:"));
    var num2 = Number(prompt("Enter the second integer:"));
    
    if (num1 > num2) {
        alert("The larger number is : " + num1);
    } else if (num2 > num1) {
        alert("The larger number is : " + num2);
    } else {
        alert("Both numbers are equal.");
    }
}



function third() {

    var number = Number(prompt("Enter a number:"));
    
    if (number > 0) {
        alert("The number is positive.");
    } else if (number < 0) {
        alert("The number is negative.");
    } else {
        alert("The number is zero.");
    }
}



function fourth() {

    var char = prompt("Enter a single character:").toLowerCase();
    
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        alert(true);
    } else {
        alert(false);
    }
}



function fifth() {

    var correctPassword = "123456789";
    
    var userPassword = prompt("Enter your password:");
    
    if (userPassword === "" || userPassword === null) {
        alert("Please enter your password");
    } 
    else if (userPassword === correctPassword) {
        alert("Correct! The password you entered matches the original password");
    } 
    else {
        alert("Incorrect password");
    }
}



function six() {

    var greeting;
    var hour = 13;
    
    if (hour < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    
    alert(greeting)
}



function seven() {

    var time = Number(prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):"));
    
    if (time >= 0 && time < 1200) {
        alert("Good morning!");
    } else if (time >= 1200 && time < 1700) {
        alert("Good afternoon!");
    } else if (time >= 1700 && time < 2100) {
        alert("Good evening!");
    } else if (time >= 2100 && time <= 2359) {
        alert("Good night!");
    } else {
        alert("Invalid time entered. Please enter a time between 0000 and 2359.");
    }
}   