"use strict";

let budget = 500;
let spent = 400;

const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");

const currentMonth = document.getElementById("currentMonth");
const dayLeft = document.getElementById("dayLeft");

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

function init() {
  // For each transactions, add it as a list item and to the DOM

  setDate();
}

// Initialize the app
init();

/* Event Listeners */
form.addEventListener("submit", setDate);
