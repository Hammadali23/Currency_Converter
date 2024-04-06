#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
  USD: 1, // Base Currency
  EUR: 0.92,
  GBP: 0.79,
  INR: 83.3,
  PKR: 277.64,
  SAR: 3.75,
  AUD: 1.52,
  BDT: 109.75,
  AED: 3.67,
  QAR: 3.64,
  LKR: 298.67,
  ZAR: 18.69,

};

let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter From Currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "IND", "PKR", "SAR", "AUD", "BDT","AED","QAR","LKR","ZAR"],
  },
  {
    name: "to",
    message: "Enter to Currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "IND", "PKR", "SAR", "AUD", "BDT","AED","QAR","LKR","ZAR"],
  },
  {
    name: "amount",
    message: "Enter youe amount",
    type: "number",
  },
]);

let fromAmount = currency[user_answer.from]; // exchange rate
let toAmount = currency[user_answer.to]; // exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;  //USD base currency 
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
