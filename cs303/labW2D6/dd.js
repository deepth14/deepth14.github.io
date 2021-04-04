// 
// function inBetween(min, max) {
//     return function (n) {
//         return n >= min && n <= max;
//     };
// }

// function inArray(ary) {
//     return n => ary.includes(n);
// }

/**
 * 
 * @param {String} fieldName is a property on object to be sorted
 * @returns {Function} sorting function
 */
function byField(fieldName) {

    let users = [
        { name: "John", age: 20, surname: "Johnson" },
        { name: "Pete", age: 18, surname: "Peterson" },
        { name: "Ann", age: 19, surname: "Hathaway" },
        { name: "Joe", age: 8, surname: "Hathaway" },
    ];

    let sortByField = function (a, b) {
        return a[fieldName] > b[fieldName] ? 1 : -1;
    };

    return users.sort(sortByField);

}

/////need to change let shooter = ..../////////


/**
 * @returns {Function} closure that returns it's number
 */
function makeArmy(bind) { // 'Yes to Bind a' or Anything Else to Use i
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let a = i;  // <-- Added Variable a Bound to Each Loop Iteration
        //change the inner function 
        //let shooter = function() {
        //console.log("I am shooter ", idx);
        //return idx;
        //};
        let shooter = function () {
            return (bind === "Yes" ? a : i);
        };
        shooters.push(shooter);
        i++;
    }

    // Execute and Display Array
    return (shooters.map(n => n()));

}
/////Function Object: Named Function Expression

/*  Set and decrease for counter
*
*   Modify the code of makeCounter() so that the counter 
*   can also decrease and set the number:
*
*   counter() should return the next number (as before).
*   counter.set(value) should set the counter to value.
*   counter.decrease() should decrease the counter by 1.
*   See the sandbox code for the complete usage example.
*
*   P.S. You can use either a closure or the function property 
*   to keep the current count. Or write both variants.
*/
function makeCounter(){

    function counter() {
      return counter.count++;
    }
  
    counter.count = 0;
    counter.set = (value) => counter.count = value;
    counter.decrease = () => counter.count -= 1;
  
    return counter;
  }



let army = makeArmy();

  //army[0](); // the shooter number 0 shows 10
  //army[5](); // and number 5 also outputs 10...
