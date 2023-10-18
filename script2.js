"use strict";
let goalamount = 100;
let expense = 0;
let shoppingExpenses = 0;
let entertainmentExpenses = 0;
let theaterExpenses = 0;

const balance = document.getElementById("balance");
const goal = document.getElementById("goal");
const money_minus = document.getElementById("money-minus");
const amount = document.getElementById("amount");
const text = document.getElementById("text");
const goalnumber = document.getElementById("goalnumber");
const category = document.getElementById("category-select");
const currentMonth = document.getElementById("currentMonth");
const dayLeft = document.getElementById("dayLeft");
const entertainment = document.getElementById("entertainment");
const shopping = document.getElementById("shopping");
const theater = document.getElementById("theater");
const ctx = document.getElementById("myChart");

let transactions = [];

const myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Entertainment", "Shopping", "Theater"],
    datasets: [
      {
        label: "What I bought things in these category",
        data: [0, 0, 0],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
});

// const setDate = () => {
// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth();
// let day = date.getDate();
// let dayInMonth = new Date(year, month + 1, 0).getDate();
// let monthName = date.toLocaleString("en-US", { month: "long" });
// console.log(day, month, dayInMonth);

// currentMonth.innerHTML = `${year}  ${monthName}`;
//dayLeft.innerHTML = `${dayInMonth - day} days left`;
// };
function generateID() {
  return new Date().getTime();
}
function changeGoal() {
  goalamount = goalnumber.value;
  goal.innerHTML = `$${goalamount}`;

  let balanceAmount = goalamount - expense;
  balance.innerHTML = `$${balanceAmount}`;
}
function resetExpense() {
  console.log("resetExpenseFunction");
  transactions = [];
  shoppingExpenses = 0;
  entertainmentExpenses = 0;
  theaterExpenses = 0;
  updateValues();
}
function addTransaction(e) {
  e.preventDefault();
  console.log(e);
  console.log(e.target.value);
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
  category.value = "";
  

  function reset {
    
  }

  //check category, if entertainment is in category then add to entertainmentExpense
  if (transaction.category === "Entertainment") {
    entertainmentExpenses = entertainmentExpenses + transaction.amount;
  }
  if (transaction.category === "Shopping") {
    shoppingExpenses = shoppingExpenses + transaction.amount;
  }
  if (transaction.category === "Theater") {
    theaterExpenses = theaterExpenses + transaction.amount;
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
  //put each category expense into each of the category one by one!!!
  entertainment.innerHTML = `entertainment : $${entertainmentExpenses}`;
  shopping.innerHTML = `shopping : $${shoppingExpenses}`;
  theater.innerHTML = `Theater : $${theaterExpenses}`;
  console.log(myChart.data.datasets);
  myChart.data.datasets[0].data[0] = entertainmentExpenses;
  myChart.data.datasets[0].data[1] = shoppingExpenses;
  myChart.data.datasets[0].data[2] = theaterExpenses;
  myChart.update();
}

function init() {
  // For each transactions, add it as a list item and to the DOM
  //list.innerHTML = "";
  // setDate();
  //transactions.forEach(addTransactionDOM);
  updateValues();
}
//init();

form.addEventListener("submit", addTransaction);
