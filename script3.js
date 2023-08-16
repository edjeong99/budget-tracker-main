"use strict";

let budget = 500;
let spent = 400;

const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');

const currentMonth = document.getElementById('currentMonth');
const dayLeft = document.getElementById('dayLeft');

const setDate = () => {

   let date = new Date();
   let year = date.getFullYear();
   let month = date.getMonth() ;
   let day = date.getDate();
   let dayInMonth = new Date(year, month,0).getDate();
   let monthName = date.toLocaleString('en-US', { month: 'long' });
console.log(day, dayInMonth);



currentMonth.innerHTML = `${year}  ${monthName}`;
dayLeft.innerHTML = `${dayInMonth - day} days left`;

const ctx = document.getElementById('myChart');

 let spentPer = 100 * spent/budget;


new Chart(ctx, {
    type: 'pie',
  data:  {labels: [
    'Enter',
    'Beauty',
    'etc'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
}
});




// new Chart(ctx, {
//     type: 'bar',
//     data:{
//         labels: '.',
//         datasets: [
//           {
//             label: '% spent',
//             data: [spentPer],
//             backgroundColor: 'blue',
//             barPercentage: 0.5,
//           }]
//         },
//     options: {
//       indexAxis: 'y',
//       scales: {
//         y :{
//             min: 100
//          }
//         },
//       // Elements options apply to all of the options unless overridden in a dataset
//       // In this case, we are setting the border of each horizontal bar to be 2px wide
//       elements: {
//         bar: {
//           borderWidth: 2,
//         }
//       },
//       responsive: true,
//       plugins: {
//         legend: {
//             display: false,
//           position: 'bottom',
//         },
//         title: {
//           display: true,
//           text: 'Spent %'
//         }
//       }
//     }
// });






//   new Chart(ctx, {
    
//     type: 'bar',
//     data: {
//         labels: 'hhhhh',
//         datasets:
//          [
//             {
//             label: 'Budget',
//             data: [500],
//             backgroundColor: 'red'
//             },
//             {
//             label: 'Spent',
//             data: [300],
//             backgroundColor: 'blue'
//             }
//           ]
//         },
//     options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             position: 'bottom',
//           },
//           title: {
//             display: false
//         }
//       }
//     }
//   })  

}





function init(){

  
    // For each transactions, add it as a list item and to the DOM

    setDate();
  }
  
  // Initialize the app
  init();
  
  /* Event Listeners */
  form.addEventListener('submit', setDate );