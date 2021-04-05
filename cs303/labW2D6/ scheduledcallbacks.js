"use strict";


//Scheduling: setTimeout and setInterval
/*  Output every second
*
*   Write a function printNumbers(from, to) that outputs a number 
*   every second, starting from from and ending with to.
*
*   Make two variants of the solution.
*
*   Using setInterval.
*   Using nested setTimeout.
*/
function printNumbersWithSetInterval (from, to) {

    if (arguments.length !==2 || to < from) return;

    let timerId = setInterval(function () {
      
      log(from);  
      from += 1;
      if (from > to) clearInterval(timerId);
      
    },1000);
    
}

function printNumbersWithSetTimeout (from, to) {

  if (to < from) return;

  setTimeout(function printNos() {
    
    console.log(from);
    from += 1;
    if (from <= to) setTimeout(printNos, 1000);
    
  },1000);
  
}
/*  What will setTimeout show?
*
*   In the code below there’s a setTimeout call 
*   scheduled, then a heavy calculation is run, that takes more than 
*   100ms to finish.
*
*   When will the scheduled function run?
*
*   After the loop. <==
*   Before the loop.
*   In the beginning of the loop.
*   What is alert going to show? 100000000
*/
function setTimeoutShowwhen () {

    let i = 0;
  
    setTimeout(() => alert(i), 100); // ?
  
    // assume that the time to execute this function is >100ms
    for(let j = 0; j < 100000000; j++) {
      i++;
    }
  }


function makeBank(){
    const bank = {};
    bank.transactionsDB = [
        { customerId: 1, customerTransactions: [10, 50, -40] },
        { customerId: 2, customerTransactions: [10, 10, -10] },
        { customerId: 3, customerTransactions: [5, -5, 55] }];
        console.log(bank.transactionsDB)
     

       return bank.getBalance = function(){
            let totalBal = 0
            for(let trans of bank.transactionsDB){
                for(let bal of trans.customerTransactions){
                    totalBal += bal
                }
            }
            return totalBal;
        }
     
}
const checkBal= makeBank();
console.log("expect 85", checkBal())


// function makeBank(){
//   let transactionsDB = [
//     { customerId: 1, customerTransactions: [10, 50, -40] },
//     { customerId: 2, customerTransactions: [10, 10, -10] },
//     { customerId: 3, customerTransactions: [5, -5, 55] }];

//     return function(){
//       let balance  = 0
//       for (const trans of transactionsDB) {
//           for (let bal of trans.customerTransactions){
//             balance += bal
//           }
//      }
//      return balance
     
//     }
// }

// const checkBal= makeBank();
// console.log("expect 85", checkBal())



//console.log(checkBal())