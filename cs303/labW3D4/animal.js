"use strict"

// let animal = {
//      eats: true 
//     };
// // function Rabbit(name) { this.name = name; }
// // Rabbit.prototype = animal;
// // let rabbit = new Rabbit("White Rabbit");
// const  rabbit={name:"white rabbit",
// __proto__:animal};
// console.log(rabbit.eats); // true
function User(firstname, lastname, birthDate) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthDate = birthDate;
}
let user1 = new User('John', 'Smith', new Date('2000-10-01'));
let user2 = new User('Edward', 'Hopkins', new Date('1991-11-14'));
function getFullName() { return this.firstname + ' ' + this.lastname; }
function getAge() { return new Date().getFullYear() - this.birthDate.getFullYear(); }
User.prototype.getAge = getAge;
User.prototype.getFullName = getFullName;
console.log(user1);