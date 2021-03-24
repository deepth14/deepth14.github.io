"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * Write a constructor function Accumulator(initialValue, increment). The object it creates should:
• Store the current accumulated value in a property currentValue. The constructor should set this
to be initialValue.
• The accumulate method should increase the currentValue by the increment.
• The report method should return the currentValue.
 * @returns {Accumulator} constructor function
 */
function Accumulator(initialValue, increment) {
    //implement this
    this.currentValue = initialValue,
        this.increment = increment,
        this.accumulate = function () {
            this.currentValue += increment
            return this.currentValue
        },
        this.report = function () {
            return this.currentValue
        }

}
let sample = new Accumulator(5, 10)
console.log(sample)

/**
 * @returns {Calculator} this is a constructor function
 */
function Calculator(a, b) {
    //implement this
    this.a = a,
        this.b = b,
        this.sum = function () {
            return this.a + this.b
        },
        this.mul = function () {
            return this.a * this.b;
        }
}