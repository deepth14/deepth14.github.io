"use strict"
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = { inArray, inBetween, byField, makeArmy }; //add all of your function names here that you need for the node mocha tests

///////Part 1 Section: Closure




// /*  Does a function pickup latest changes?
// *
// *   The function sayHi uses an external variable name. 
// *   When the function runs, which value is it going to use?
// */

// function latestChange () {

//     let name = "John";
  
//     function sayHi() {
//       return ("Hi, " + name);
//     }
  
//     name = "Pete";
  
//     return sayHi(); //--> "Pete"?
  
//   }
//   /*  Which variables are available?
// *
// *   The function makeWorker below makes another function 
// *   and returns it. That new function can be called from somewhere else.
// *
// *   Will it have access to the outer variables from its creation place, 
// *   or the invocation place, or both?
// */
// //which Variable isAvailable
// function whichVariableAvailable () {

//     function makeWorker() {
//       let name = "Pete";
  
//       return function() {
//         return (name);
//       };
//     }
  
//     let name = "John"; 
  
//     // create a function
//     let work = makeWorker();
  
//     return work(); //--> Pete
  
//   }
//   //ACI
// /*  Are counters independent?
// *
// *   Here we make two counters: counter and counter2 
// *   using the same makeCounter function.
// *
// *   Are they independent? What is the second counter going to show? 
// *   0,1 or 2,3 or something else?
// */
// //ACI
// function areCountersIndependent() {// eslint-disable-line no-unused-vars

//     function makeCounter() {
//       let count = 0;
  
//       return function() {
//         return count++;
//       };
//     }
  
//     let counter = makeCounter();
//     let counter2 = makeCounter();
  
//     return "Counter: " + counter() + ", " + counter() + //--> 0, 1
//          "\nCounter2: " + counter2() + ", " + counter2(); //--> 0, 1
  
//   }
  
//   //CO
//   /*   Counter object
//   *
//   *    Here a counter object is made with the help of the constructor function.
//   *
//   *    Will it work? What will it show?
//   */
//   //Counter Object
//   function counterObject() {
  
//     function Counter() {
  
//       let count = 0;
  
//       this.up = function() {
//         return ++count;
//       };
//       this.down = function() {
//         return --count;
//       };
//     }
  
//     let counter = new Counter();
  
//     return counter.up() + ", " + counter.up() + ", " + counter.down(); //--> 1, 2, 1
  
//   }
//   //
// /*   Function in if
// *    Look at the code. What will be the result of the call at the last line?
// */
// //FII
// function functionInIf() {

//     let phrase = "Hello";
  
//     if (true) {
  
//       let user = "John";
  
//       function sayHi() {
//         return (`${phrase}, ${user}`);
//       }
      
//     }
      
//     try {
//       return sayHi(); 
//     } 
//     catch (err){
//       return err.toString();
//     }
    
//   }
//   //SWC
// /*  Sum with closures
// *
// *   Write function sum that works like this: sum(a)(b) = a+b.
// *
// *   Yes, exactly this way, using double parentheses (not a mistype).
// */
// //SWC
// function sumWithClosure(num1, num2) {

//     let sum = function (num1) {
//       return  function (anyNum) {
//                 return anyNum + num1;
//               };
//     };
  
//     return sum(num1)(num2);
  
//   }
//   //SWC
//   //VV
//   /*  Is variable visible?
//   *
//   *   What will be the result of this code?
//   */
//   //VV
//   function isVariableVisible() {
  
//     let x = 1; 
  
//     function func() {
//       return x;
//       const x = 2;
//     }
  
//     try {
//       return func(); 
//     } 
//     catch (err){
//       return err.toString();
//     }
//   }
//   //////Function Object: Named Function Expression
//   /*  Set and decrease for counter
// *
// *   Modify the code of makeCounter() so that the counter 
// *   can also decrease and set the number:
// *
// *   counter() should return the next number (as before).
// *   counter.set(value) should set the counter to value.
// *   counter.decrease() should decrease the counter by 1.
// *   See the sandbox code for the complete usage example.
// *
// *   P.S. You can use either a closure or the function property 
// *   to keep the current count. Or write both variants.
// */
// function makeCounter() {

//   function counter() {
//     return counter.count++;
//   }

//   counter.count = 0;
//   counter.set = (value) => counter.count = value;
//   counter.decrease = () => counter.count -= 1;

//   return counter;
// }


//////////need mocha test

/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */
function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert(arr.filter(inArray([1, 2, 10]))); // 1,2


/**
 * 
 * @param {number} num 
 * @param {number} num2 
 * @return {number}
 */
function inBetween(num, num2) {
    return function between(target) {
        if (target >= num && target <=num2) {
            return true;
        } else {
            return false;
        }
    }
}
function myFilter(arr,a,b,cbf) {
    let filterred= arr.filter(cbf(a,b)); 
    return filterred
}
//let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(myFilter(arr3,3,8,inBetween));


let arrForInArr = [1, 2, 3, 4, 5, 6, 7]
function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    };
}

function myFilterArra(arr,arr2,cbf) {
      let final = arr.filter(cbf(arr2))
    return final
}
// let result = inArray;
// let final = arrForInArr.filter(result([3, 5, 8]))
//console.log(myFilterArra(arrForInArr,[3, 5, 8],inArray));

function byField(fieldName){
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
  }
  /**
   *
   * @returns{Object} return array of function
   */
  function makeArmy() {
    let shooters = [];
    for(let i = 0; i < 10; i++) {
      let shooter = function() {
        return i ;
      };
      shooters.push(shooter);
    }
    return shooters;
  }
