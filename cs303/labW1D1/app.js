"use strict"



/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
*/
function maxOfThree(a, b, c) {
    let max;
    if (a > b && b > c) { return a; }
    if (a > c && c > b) { return a; }
    if (b > a && a > c) { return b; }
    if (b > c && a > c) { return b; }
    if (c > a && a > b) { return c; }
    if (c > b && b > a) { return c; }

}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    let sum =0;
for(let num of arr){
    sum +=num;
}
return sum;
}
console.log(sum([2,5,3,4]))
/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} returns the multiplies of all elements in the array
 */
 function multiply(arr){
    let mul =1;
for(let num of arr){
    mul *=num;
}
return mul;
}
console.log(multiply([2,5,3,4]))
/**
 * 
 * @param {Array} arr of numbers
 * @returns {str} the longest word
 */

function findLongestWord(arr) {
    let longWord = '';
    for (let word of arr) {
        if (word.length > longWord.length) {
            longWord = word;
        }
    }
    return longWord;
}
console.log(findLongestWord(['simon', 'abrish', 'kiflay the great', 'sam']))
/*
4.	Reverse an Array 
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method. 
*/
function reverseArray(arr) {
    return arr.reverse();
}

/**
 * 
 * @param {Array} arr 
 * @returns {array} returns reversed array
 */
function reverseArrayInPlace(arr) {
    return arr.reverse();
}
/* 5.  Write a function, scoreExams, that takes an array of arrays of student answers and an array of the correct answers.  
It should compare each student’s answers against the correct answers and return an array holding the scores of each student.  The score 
for each student is a count of the number of correct answers (i.e., matches with the key of correct answers).  For example

const studentAnswers = [[1, 1, 2], [2, 1, 2], [3, 1, 3]];
const correctAnswers = [3, 1, 2];
scoreExams(studentAnswers, correctAnswers)); --> [2, 2, 2]
*/
function scoreExams(stdScore, rightAns) {
    let score = []
    for (let eachAnswer of stdScore) {
        let answer = 0
        for (let i = 0; i < eachAnswer.length; i++) {
            if (eachAnswer[i] === rightAns[i])
                answer++;
        }
        score.push(answer)
    }
    return score;
}

console.log(scoreExams([[1, 1, 2], [2, 1, 2], [3, 1, 3]], [3, 1, 2]))
