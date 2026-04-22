/****************************************************************************
 * DAY 03: LOOPS, ARRAYS, AND ITERATION
 * Topics: For Loops, While Loops, Array Methods, and Reference Types
 ****************************************************************************/

// ==========================================
// 1. ARRAYS: THE DATA CONTAINERS
// ==========================================
let techStack = ["HTML", "CSS", "JavaScript", "Git"];

console.log("--- Section 1: Array Basics ---");
console.log("Full Stack:", techStack);
console.log("First Element:", techStack[0]); // HTML
console.log("Total Items:", techStack.length);

// Updating an element
techStack[3] = "GitHub"; 
console.log("Updated Stack:", techStack);

// ==========================================
// 2. THE CLASSIC 'FOR' LOOP
// ==========================================
console.log("\n--- Section 2: For Loop (Counting) ---");
for (let i = 1; i <= 5; i++) {
    console.log(`Iteration number: ${i}`);
}

// ==========================================
// 3. ITERATING OVER ARRAYS
// ========================================== 
console.log("\n--- Section 3: Looping through Tech Stack ---");
for (let i = 0; i < techStack.length; i++) {
    console.log(`Skill ${i + 1}: ${techStack[i]}`);
}

// ==========================================
// 4. WHILE LOOPS (Condition-based)
// ==========================================
console.log("\n--- Section 4: While Loop ---");
let battery = 30;
while (battery > 0) {
    console.log(`Phone is ON. Battery: ${battery}%`);
    battery -= 10; // Decrementing to avoid infinite loop
}
console.log("Phone shut down.");

// ==========================================
// 5. ARRAY METHODS (Push, Pop, Shift, Unshift)
// ==========================================
console.log("\n--- Section 5: Array Methods ---");
let projects = ["Portfolio", "ATM Machine"];

projects.push("E-commerce"); // Adds to end
projects.unshift("Landing Page"); // Adds to beginning
console.log("Current Projects:", projects);

projects.pop(); // Removes last element
console.log("After Pop:", projects);

// ==========================================
// 6. MINI PROJECT: SEARCHING IN AN ARRAY
// ==========================================
console.log("\n--- Section 6: Search Logic ---");
let students = ["Ali", "Faizan", "Sara", "Ahmed"];
let searchName = "Faizan";
let found = false;

for (let i = 0; i < students.length; i++) {
    if (students[i] === searchName) {
        found = true;
        break; // Stop searching once found
    }
}

console.log(found ? `${searchName} was found in the database!` : "User not found.");

// ==========================================
// 7. MULTI-DIMENSIONAL ARRAYS (Matrix)
// ==========================================
console.log("\n--- Section 7: Nested Arrays ---");
let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Center Element:", grid[1][1]); // Accesses 5

// End of Day 03 Script