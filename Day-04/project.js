6. //MINI PROJECT: SEARCHING IN AN ARRAY
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
