#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"; // Chalo isay thoda colorful bhi kar dete hain

let myBalance = 10000; // Dollar
let myPin = 7428;

console.log(chalk.blueBright.bold("\n\t'Welcome to Hiba's ATM Machine'\n"));
console.log(chalk.yellow(`Hint: Pin code is: ${myPin}`));

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin:",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log(chalk.green("\nCorrect pin code!!!\n"));

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select an option:",
      type: "list",
      choices: ["withdraw", "check balance"], // ✅ Spelling Fixed
    },
  ]);

  if (operationAns.operation === "withdraw") { // ✅ Spelling Fixed
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter the amount to withdraw: ",
        type: "number",
      },
    ]);

    // ✅ CHECK: Kya account mein itne paise hain?
    if (amountAns.amount > myBalance) {
      console.log(chalk.red.bold("\nInsufficient Balance! You don't have enough funds.\n"));
    } else {
      myBalance -= amountAns.amount;
      console.log(chalk.green(`\nSuccess! Your remaining balance is: $${myBalance}\n`));
    }

  } else if (operationAns.operation === "check balance") {
    console.log(chalk.cyan(`\nYour current balance is: $${myBalance}\n`));
  }
} else {
  console.log(chalk.red.bold("\nIncorrect pin code! Access Denied.\n"));
}
