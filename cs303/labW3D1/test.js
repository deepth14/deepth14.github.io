"use strict"
// const abc = {
//     salute: "",
//     greet: function() {
//         const self = this;
//     this.salute = "Hello";
//     console.log(this.salute); //Hello
//     const setFrench = function(newSalute) { //inner function
//     self.salute = newSalute;
//     };
//     setFrench("Bonjour");
//     console.log(this.salute); //Bonjour??
//     }
//     };
//     abc.greet();
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList() {
//     this.students.forEach(function(student) {
//     console.log(this.title + ': ' + student)
//     });
//     }
//     };
//     group.showList();
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList() {
//     this.students.forEach(function(student) {
//     console.log(this.title + ': ' + student)
//     }.bind(this));
//     }
//     };
//     group.showList();
let str = 'hi this is abraham';
console.log([...str])