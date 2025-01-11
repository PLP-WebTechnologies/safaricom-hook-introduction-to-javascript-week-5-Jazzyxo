// Part 1: JavaScript Basics

// Variables and Data Types
const name = "John Doe"; // String
const age = 25; // Number
const isStudent = true; // Boolean
const hobbies = ["Reading", "Gaming", "Traveling"]; // Array
const person = { name: "Jane Doe", age: 30, isEmployed: true }; // Object

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Operators: Simple Calculator
function calculator() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
        default:
            alert("Invalid operation. Please choose +, -, *, or /.");
            return;
    }

    document.getElementById("calculator-result").textContent = `Result: ${result}`;
}
calculator();

// Functions: Greet User
function greetUser(name) {
    return `Hello, ${name}! Welcome to the JavaScript assignment.`;
}
const greetingMessage = greetUser("Alice");
document.getElementById("dynamic-content").innerHTML += `<p>${greetingMessage}</p>`;

// Part 2: JavaScript Control Structures

// If Statements: Voting Eligibility
const userAge = parseInt(prompt("Enter your age:"));
if (!isNaN(userAge)) {
    const eligibilityMessage =
        userAge >= 18
            ? "You are eligible to vote!"
            : "You are not eligible to vote yet.";
    document.getElementById("eligibility-message").textContent = eligibilityMessage;
} else {
    alert("Please enter a valid age.");
}

// Loops: Display Numbers 1 to 10
const numbersList = document.getElementById("numbers-list");
for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    numbersList.appendChild(listItem);
}

// Part 3: Introduction to the DOM

// Changing the text of the <h1> element
document.querySelector("h1").textContent = "JavaScript in Action!";

// Adding a new <p> dynamically
const dynamicContentDiv = document.getElementById("dynamic-content");
const newParagraph = document.createElement("p");
newParagraph.textContent =
    "This content was added dynamically using JavaScript.";
dynamicContentDiv.appendChild(newParagraph);
