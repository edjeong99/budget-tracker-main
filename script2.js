"use strict";
console.log("start");
let goalamount = 100;
let expense = 0;

const balance = document.getElementById("balance");
const goal = document.getElementById("goal");
const money_minus = document.getElementById("money-minus");
const amount = document.getElementById("amount");
const text = document.getElementById("text");
const goalnumber = document.getElementById("goalnumber");

const currentMonth = document.getElementById("currentMonth");
const dayLeft = document.getElementById("dayLeft");

const transactions = [];
const setDate = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let dayInMonth = new Date(year, month, 0).getDate();
  let monthName = date.toLocaleString("en-US", { month: "long" });
  console.log(day, dayInMonth);

  currentMonth.innerHTML = `${year}  ${monthName}`;
  dayLeft.innerHTML = `${dayInMonth - day} days left`;
};
function generateID() {
  return new Date().getTime();
  
function addTransaction(e) {
  e.preventDefault();
  const transaction = {
    id: generateID(),
    text: text.value,
    amount: +amount.value,
  };
  console.log(transaction);

  transactions.push(transaction);

  updateValues();
}

function updateValues() {
  // Loop through the transactions array and create a new array with only amounts
  const amounts = transactions.map((transaction) => transaction.amount);
  expense = expense + amount.value;
  let balanceAmount = goalamount - expense;

  balance.innerHTML = `$${balanceAmount}`;
  goal.innerHTML = `$${goalamount}`;
  money_minus.innerHTML = `$${expense}`;
}
function init() {
  // For each transactions, add it as a list item and to the DOM
  list.innerHTML = "";

  //setDate();

  //transactions.forEach(addTransactionDOM);
  //updateValues();
}

form.addEventListener("submit", addTransaction);
form.addEventListener("submit", addGoals);
