"use strict";
let goalamount = 1000;
let expense = 0;
let shoppingExpenses = 0;
let entertainmentExpenses = 0;
let foodExpenses = 0;
let etcExpenses = 0;

const balance = document.getElementById("balance");
const money_minus = document.getElementById("money-minus");
const amount = document.getElementById("amount");
const text = document.getElementById("text");
const goalnumber = document.getElementById("goalnumber");
const category = document.getElementById("category-select");
const ctx = document.getElementById("myChart");
let transactions = [];

const myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Entertainment", "Shopping", "Food", "ETC"],
    datasets: [
      {
        label: "What I bought things in these category",
        data: [0, 0, 0, 0],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(182, 240, 187)"
        ],
        hoverOffset: 4,
      },
    ],
  },
});

var canvas = document.getElementById("myChart");
var parent = document.getElementById("canvas");
canvas.width = canvas.offsetWidth;
canvas.height = parent.offsetHeight;


function generateID() {
  return new Date().getTime();
}

function changeGoal() {
  goalamount = goalnumber.value;
  let balanceAmount = goalamount - expense;
  balance.innerHTML = `$${balanceAmount}`;
}

function resetExpense() {
  transactions = [];
  shoppingExpenses = 0;
  entertainmentExpenses = 0;
  foodExpenses = 0;
  etcExpenses = 0;
  updateValues();
}
function addExpense(e) {
  e.preventDefault();

  const transaction = {
    id: generateID(),
    text: text.value,
    amount: +amount.value,
    category: category.value,
  };
  transactions.push(transaction);
  text.value = "";
  amount.value = "";
  category.value = "";
  
  //check category, if entertainment is in category then add to entertainmentExpense
  if (transaction.category === "Entertainment") {
    entertainmentExpenses += transaction.amount;
  }
  else if (transaction.category === "Shopping") {
    shoppingExpenses +=  transaction.amount;
  }
  else if (transaction.category === "Food") {
    foodExpenses +=  transaction.amount;
  }
  else {
    etcExpenses += transaction.amount;
  }

  updateValues();
}

function updateValues() {
  const amounts = transactions.map((transaction) => transaction.amount);
  expense = amounts.reduce((acc, val) => (acc += val), 0).toFixed(2);
  let balanceAmount = goalamount - expense;

  balance.innerHTML = `$${balanceAmount}`;
  money_minus.innerHTML = `$${expense}`;
  //put each category expense into each of the category one by one!!!
  
  console.log(myChart.data.datasets);
  myChart.data.datasets[0].data[0] = entertainmentExpenses;
  myChart.data.datasets[0].data[1] = shoppingExpenses;
  myChart.data.datasets[0].data[2] = foodExpenses;
  myChart.data.datasets[0].data[3] = etcExpenses;
  myChart.update();
  
  if (expense != 0) {
    parent.style.display = "block";
  } else {
    parent.style.display = "none";
  }
}

updateValues();
form.addEventListener("submit", addExpense);
