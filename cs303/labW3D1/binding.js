"use strict";
/*  Bound function as a method
*
* What will be the output?
*/
function bindFunctionasMethod() {

    function f() {
        return (this); // ? === null
    }

    let user = {
        g: f.bind(null)
    };

    return user.g();
}
/*  Second Bind
*
*   Can we change this by additional binding?
*
*   What will be the output?
*/
function bindAgain() {

    function f() {
        return (this.name);
    }


    f = f.bind({ name: "John" }).bind({ name: "Ann" });

    return f();
}
//john
/* Function property after bind
*
*  There’s a value in the property of a function. Will it change 
*  after bind? Why, or why not?
*/
function propertyAfterBind() {

    function sayHi() {
        return (this.name);
    }
    sayHi.test = 5;

    let bound = sayHi.bind({
        name: "John",
    });

    return (bound.test);

}
//The answer: undefined.The result of bind is another object. It does not have the test property
/*
Fix a function that loses "this"
importance: 5
The call to askPassword() in the code below should check the password and then call user.loginOk/loginFail depending on the answer.

But it leads to an error. Why?

Fix the highlighted line for everything to start working right (other lines are not to be changed).
*/

function pass() {

    let pwd;

    function askPassword(ok, fail) {
        let password = pwd || prompt("Password?", "");
        pwd = password;
        if (password == "rockstar") return ok();
        else return fail();
    }

    let user = {
        name: "John",

        loginOk() {
            return (`${this.name} logged in`);
        },

        loginFail() {
            return (`${this.name} failed to log in`);
        },

    };

    return [askPassword(user.loginOk.bind(user), user.loginFail.bind(user)),
    askPassword(function () { return user.loginOk(); }, function () { return user.loginFail(); }),
    askPassword(function () { return user.loginOk.call(user); }, function () { return user.loginFail.call(user); }),
    askPassword(function () { return user.loginOk.apply(user); }, function () { return user.loginFail.apply(user); })
    ];
}
///
/* Partial application for login
*
*  The task is a little more complex variant of Fix a function 
*  that loses "this".
*
*  The user object was modified. Now instead of two functions 
*  loginOk/loginFail, it has a single function user.login(true/false).
*
*  What should we pass askPassword in the code below, so that it calls user.login(true) as ok and user.login(false) as fail?
*/
function passAgain() {

    function askPassword(ok, fail) {
        let password = prompt("Password?", "");
        if (password == "rockstar") return ok();
        else return fail();
    }

    let user = {
        name: "John",

        login(result) {
            return (this.name + (result ? " logged in" : " failed to log in"));
        }
    };

    return askPassword(user.login.bind(user, true), user.login.bind(user, false));

}
/* Arrow functions and lexical ‘this’ exercise  
* Fix the code below using an arrow function and then using bind
*/
function correctBinding() {

    let group = {
        title: "Our Group",
        students: ["John", "Pete", "Alice"],
        showList() {
            // Original Line -> this.students.forEach(function(student) {
            this.students.forEach((student) => { // <- Changed to Arrow Function
                // Original Error: Cannot read property 'title' of undefined
                log(this.title + ": " + student);
            });
        }
    };
    group.showList();


    group = {
        title: "Our Group",
        students: ["John", "Pete", "Alice"],
        showList() {
            this.students.forEach(function (student) {
                // Original Error: Cannot read property 'title' of undefined
                log(this.title + ": " + student);
                // Original Line ->   });
            }.bind(group)); // <-- Added Bind
        }
    };
    group.showList();

}