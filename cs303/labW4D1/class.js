// "use strict"

// function area() { return this.side * this.side }
// const squareProto ={area:area};
// const square1 =  {
//     side:5,
//    __proto__:squareProto
// }

    
//     function Square(side){
//         this.side=side;
//     }
//     square.prototype.area= area

// class Square2 {
//     constractor(side){
//         this.side=side;
//     }
//     area(){return this.side*this.side}
//     console.log("expect 25: ", square1.area());
// console.log("expect 1: ", Object.getOwnPropertyNames(square1).length);
// const constSquare1 = new Square(7);
// console.log("expect 49: ", constSquare1.area());
// console.log("expect 1: ", Object.getOwnPropertyNames(constSquare1).length);
// const classSquare = new Square2(10);
// console.log("expect 100: ", classSquare.area());
// console.log("expect 1: ", Object.getOwnPropertyNames(classSquare).length);
function User(firstname, lastname, birthDate) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthDate = birthDate;
    this.getFullName=function(){ return this.firstname + ' ' + this.lastname;}
    this.getAge=function(){return new Date().getFullYear() - this.birthDate.getFullYear()}
    }
    let user1 = new User('John', 'Smith', new Date('2000-10-01'));
    let user2 = new User('Edward', 'Hopkins', new Date('1991-11-14'));
    function getFullName() { return this.firstname + ' ' + this.lastname;}
function getAge() {return new Date().getFullYear() - this.birthDate.getFullYear()}