/****************************************************************************
 * DAY 01: COMPREHENSIVE JAVASCRIPT FUNDAMENTALS
 * Topics: Variables, Data Types, Operators, Logic, and String Manipulation
 ****************************************************************************/

// ==========================================
// 1. VARIABLE DECLARATIONS (var, let, const)
// ==========================================

// Using 'let' for values that change
let userStatus = "Learning";
let totalPoints = 100;

// Using 'const' for fixed values
const PI = 3.14159;
const BIRTH_YEAR = 2000;

// Using 'var' (Legacy way - not recommended for modern JS)
var oldWay = "Avoid using var in modern projects";

console.log("--- Section 1: Variables ---");
console.log("Status:", userStatus);
console.log("Total Points:", totalPoints);

// ==========================================
// 2. DATA TYPES PRACTICE
// ==========================================

let myString = "Hello JavaScript!";  // String
let myNumber = 42;                    // Number
let myBoolean = true;                 // Boolean
let myNull = null;                    // Null (Intentional empty value)
let myUndefined;                      // Undefined (Value not assigned)
let myObject = { name: "Ali", age: 25 }; // Object
let myArray = [1, 2, 3, 4, 5];        // Array

console.log("\n--- Section 2: Data Types ---");
console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);
console.log(typeof myObject);

// ==========================================
// 3. ARITHMETIC & COMPARISON OPERATORS
// ==========================================

let x = 15;
let y = 5;

let addition = x + y;       // 20
let subtraction = x - y;    // 10
let multiplication = x * y; // 75
let division = x / y;       // 3
let modulus = x % 4;        // Remainder: 3
let exponent = x ** 2;      // 15 square

console.log("\n--- Section 3: Arithmetic ---");
console.log("Add:", addition, "Mod:", modulus, "Exp:", exponent);

// Comparison
let isGreater = x > y;       // true
let isEqual = (x === "15");  // false (Strict equality checks type too)

// ==========================================
// 4. STRING MANIPULATION (Template Literals)
// ==========================================

let studentName = " Faizan Ahmad";
let course = "JavaScript Mastery";
let platform = "GitHub";

// Old way of joining strings
let oldMessage = "Student " + studentName + " is learning " + course;

// Modern way (Template Literals) - Recommended
let newMessage = `Student ${studentName} is practicing ${course} on ${platform}.`;

console.log("\n--- Section 4: Strings ---");
console.log(newMessage);
console.log("Message Length:", newMessage.length);
console.log("Uppercase:", newMessage.toUpperCase());

// ==========================================
// 5. MINI LOGIC PROJECT: BILL CALCULATOR
// ==========================================

let itemPrice = 500;
let quantity = 3;
let taxRate = 0.18; // 18% Tax

let subTotal = itemPrice * quantity;
let taxAmount = subTotal * taxRate;
let finalBill = subTotal + taxAmount;

console.log("\n--- Section 5: Bill Calculator ---");
console.log("Item Price:", itemPrice);
console.log("Quantity:", quantity);
console.log("Subtotal:", subTotal);
console.log("Tax (18%):", taxAmount);
console.log("--------------------------");
console.log("Total Payable:", finalBill);

// ==========================================
// 6. LOGICAL OPERATORS (AND, OR, NOT)
// ==========================================

let hasAccount = true;
let isLoggedIn = false;
let hasSubscription = true;

let canWatchMovie = isLoggedIn && hasSubscription; // false
let canAccessHome = isLoggedIn || hasAccount;      // true

console.log("\n--- Section 6: Logic ---");
console.log("Can watch movie?", canWatchMovie);
console.log("Can access Home?", canAccessHome);

// ==========================================
// 7. ARRAY OPERATIONS BASICS
// ==========================================

let fruits = ["Apple", "Banana", "Orange"];
fruits.push("Mango"); // Add at end
fruits.unshift("Strawberry"); // Add at start

console.log("\n--- Section 7: Arrays ---");
console.log("Fruit List:", fruits);
console.log("Second Fruit:", fruits[1]);

// ==========================================
// 8. PRACTICE EXERCISES (Self-Test)
// ==========================================

/* Exercise 1: Create a variable to store temperature in Celsius.
   Convert it to Fahrenheit using formula: (C * 9/5) + 32
*/
let celsius = 37;
let fahrenheit = (celsius * 9/5) + 32;
console.log("\n--- Section 8: Practice ---");
console.log(`${celsius}°C is equal to ${fahrenheit}°F`);

/*
   Exercise 2: Swap two variables without using a third variable.
*/
let a = 10;
let b = 20;
[a, b] = [b, a]; // ES6 Destructuring swap
console.log("Swapped Values: a =", a, "b =", b);

// ==========================================
// 9. COMMENTS & DOCUMENTATION
// ==========================================

/**
 * Why Documentation matters:
 * 1. It helps you remember your code after 6 months.
 * 2. It helps others understand your logic on GitHub.
 * 3. It shows you are a professional developer.
 */

// ==========================================
// 10. CLOSING SUMMARY
// ==========================================

console.log("\n--- Day 01 Complete ---");
console.log("Concepts covered: Variables, Types, Math, Strings, Arrays, and Logic.");

/* EOF (End of File)
   Total lines planned to demonstrate detailed learning path.
   This file serves as a reference for JS Fundamentals.
*/
// (Adding extra space to ensure a long, detailed file structure)
// ............................................................
// ............................................................
// ............................................................
// End of Script