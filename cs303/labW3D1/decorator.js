
"use strict"
// module.exports = {spy };

/* Spy decorator
*
*  Create a decorator spy(func) that should return a wrapper that 
*  saves all calls to function in its calls property.
*
*  Every call is saved as an array of arguments.
*
*  That decorator is sometimes useful for unit-testing. Its advanced 
*  form is sinon.spy in Sinon.JS library.
*/

function work(a, b) {
    log( a + b ); // work is an arbitrary function or method
  }
  
  function spy(functn) {
  
    let retrn = function () {
  
      let arg = [].slice.apply(arguments);
      retrn.calls.push(arg);
  
      return functn.call(this,...arg);
  
    };
  
    retrn.calls = [];
    return retrn;
  }
  
  function callworkSpy() {
  
    
    work = spy(work);
  
    work(1, 2); // 3
    work(4, 5); // 9
  
    for (let args of work.calls) {
      log( "call:" + args.join() ); // "call:1,2", "call:4,5"
    }
  
  }
  /*  Delaying decorator
*
*   Create a decorator delay(f, ms) that delays each call of f by ms 
*   milliseconds.
*   In other words, delay(f, ms) returns a "delayed by ms" variant of f.
*   In the code above, f is a function of a single argument, but your solution 
*   should pass all arguments and the context this.
*/
function f(x, y, z) {
    log(x+ y+ z);
  }
  
  function delay(call, msDelay) {
   
    return function (...arg) {
      setTimeout(call.bind(this, ...arg), msDelay);
    };
  
  }