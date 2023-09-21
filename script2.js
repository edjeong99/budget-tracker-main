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
const category = document.getElementById("category-select");
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
}
function changeGoal() {

  goalamount =  goalnumber.value;
  goal.innerHTML = `$${goalamount}`;
  let balanceAmount = goalamount - expense;
  balance.innerHTML = `$${balanceAmount}`;
}
function addTransaction(e) {
  e.preventDefault();
  console.log(e)
  console.log(e.target.value)
  const transaction = {
    id: generateID(),
    text: text.value,
    amount: +amount.value,
    category: category.value,
  };
  console.log(transaction);

  transactions.push(transaction);

  text.value = "";
  amount.value = "";



if(  transaction.category === 'Entertainment'){
  entertainExpense = entertainExpense + transaction.amount
}




  updateValues();
}

function updateValues() {
  // Loop through the transactions array and create a new array with only amounts

// if category is "entertain"
// add the amount to entertainExpense

// else if cate is "theater", add amount to theraterExp
// else if cate is "shopping" add amount to shoppingExp

  
  const amounts = transactions.map((transaction) => transaction.amount);
  expense = amounts.reduce((acc, val) => (acc += val), 0).toFixed(2);
  let balanceAmount = goalamount - expense;

  balance.innerHTML = `$${balanceAmount}`;
  goal.innerHTML = `$${goalamount}`;
  money_minus.innerHTML = `$${expense}`;
}

function init() {
  // For each transactions, add it as a list item and to the DOM
 // list.innerHTML = "";

  //setDate();
  //transactions.forEach(addTransactionDOM);
  updateValues();
}
init();

form.addEventListener("submit", addTransaction);
