/****************************************************************************
 * DAY 02: CONTROL FLOW, CONDITIONALS, AND ADVANCED DATA TYPES
 * Topics: If-Else, Switch-Case, Truthy/Falsy, and Ternary Operators
 ****************************************************************************/

// ==========================================
// 1. DATA TYPES REVISITED (Deep Dive)
// ==========================================

let score = 85;               // Number
let playerName = "Faizan Ahmed";      // String
let isGameOver = false;        // Boolean
let trophy = null;             // Null
let rank;                      // Undefined

console.log("--- Section 1: Type Checking ---");
console.log(`Type of score: ${typeof score}`);
console.log(`Type of trophy: ${typeof trophy}`); // Interesting: returns 'object'

// ==========================================
// 2. BASIC IF-ELSE (Decision Making)
// ==========================================

console.log("\n--- Section 2: Voting Eligibility ---");
let userAge = 19;

if (userAge >= 18) {
    console.log("Result: You are eligible to vote.");
} else {
    console.log("Result: You are too young to vote.");
}

// ==========================================
// 3. ELSE-IF LADDER (Grading System)
// ==========================================

console.log("\n--- Section 3: Grading System ---");
let examMarks = 78;

if (examMarks >= 90) {
    console.log("Grade: A+ (Excellent)");
} else if (examMarks >= 80) {
    console.log("Grade: A (Very Good)");
} else if (examMarks >= 70) {
    console.log("Grade: B (Good)");
} else if (examMarks >= 60) {
    console.log("Grade: C (Average)");
} else {
    console.log("Grade: F (Needs Improvement)");
}

// ==========================================
// 4. SWITCH-CASE (Day of the Week)
// ==========================================

console.log("\n--- Section 4: Switch Case Practice ---");
let dayNumber = 2; // Suppose 1 is Monday, 2 is Tuesday...
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid Day";
}

console.log(`Day ${dayNumber} is ${dayName}.`);

// ==========================================
// 5. TERNARY OPERATOR (Short-hand If-Else)
// ==========================================

console.log("\n--- Section 5: Ternary Operator ---");
let authenticated = true;

// Syntax: condition ? trueValue : falseValue
let accessStatus = authenticated ? "Access Granted ✅" : "Access Denied ❌";
console.log("Login Status:", accessStatus);

// ==========================================
// 6. TRUTHY AND FALSY VALUES
// ==========================================
/* Falsy values in JS: false, 0, "", null, undefined, NaN
   Everything else is Truthy!
*/

console.log("\n--- Section 6: Truthy/Falsy Check ---");
let userInput = ""; // Empty string

if (userInput) {
    console.log("Input is valid.");
} else {
    console.log("Warning: Input is empty (Falsy).");
}

// ==========================================
// 7. MINI PROJECT: ATM WITHDRAWAL LOGIC
// ==========================================

console.log("\n--- Section 7: Mini ATM Logic ---");
let accountBalance = 5000;
let withdrawAmount = 2000;
let pinCorrect = true;

if (pinCorrect) {
    if (withdrawAmount <= accountBalance) {
        accountBalance -= withdrawAmount;
        console.log(`Transaction Successful! Remaining Balance: ${accountBalance}`);
    } else {
        console.log("Error: Insufficient Funds.");
    }
} else {
    console.log("Error: Invalid PIN.");
}

// ==========================================
// 8. LOGICAL OPERATORS RE-PRACTICE
// ==========================================

let isWeekend = true;
let hasHomework = false;

if (isWeekend && !hasHomework) {
    console.log("\nStatus: You can go out to play!");
} else {
    console.log("\nStatus: Stay home and study.");
}

// ==========================================
// 9. EXTRA SPACE FOR REPETITION & COMMENTS
// ==========================================
/*
   Summary of Day 02:
   - Conditionals help the computer 'think' based on data.
   - Switch is better for multiple fixed choices.
   - Ternary is great for simple true/false checks.
   - Understanding Falsy values prevents bugs.
*/

// (Adding filler comments to maintain detail level)
// ............................................................
// ............................................................
// End of Day 02 Script