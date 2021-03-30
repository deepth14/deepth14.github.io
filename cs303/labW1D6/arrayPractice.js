"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge}; //add all of your function names here that you need for the node mocha tests


function doubleNums(arr) {
    return arr.map(num => num * 2);
}

function doubleAges(arr) {

    let newArray = arr.map(user => ({ name: user.name, age: user.age * 2 }));

    return newArray;


}

function filterEven(arr) {

    const result = arr.filter(num => num % 2 === 0);
    return result;
}

function filterOver10(arr) {
    let result = arr.filter(user => ({ name: user.name, age: user.age > 10 }));
    return result;
}

function findEvenNum(arr) {
    let result = arr.find(num => (num % 2 === 0));
    return result;
}


function findEvenAge(arr) {
    let result = arr.find(num => (num.age % 2 === 0));
    return result;
}

function includesEvenNum(arr) {
    let even = arr.map(num => num % 2 === 0 ? true : false);

    return even.includes(true);
}

function includesEvenAge(arr) {
    let even = arr.map(user => user.age % 2 === 0 ? true : false);
    
    return even.includes(true);
    }