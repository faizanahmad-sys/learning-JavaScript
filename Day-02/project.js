const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

// ==========================================
// 1. DATA TYPES REVISITED (Deep Dive)
let blc = 100000;
let pincorrect = true;
let name = "Faizan Ahmed";

async function main() {
  let userchoice = await ask("Do you want to withdraw money? (yes/no) ");
  if (userchoice.toLowerCase() === "yes") {
    let amount = await ask("Enter the amount you want to withdraw: ");
    amount = parseFloat(amount);
    if (amount > blc) {
      console.log("Insufficient balance. Your current balance is: " + blc);
    } else if (amount <= 0) {
      console.log("Invalid amount. Please enter a positive number.");
    } else if (pincorrect) {
      blc -= amount;
      console.log("Withdrawal successful! Your new balance is: " + blc);
    } else {
      console.log("Incorrect PIN. Transaction failed.");
    }
  }
  rl.close();
}

main();