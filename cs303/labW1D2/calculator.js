"use strict";
let  calculator = {
    // value1:0,
    // value2:0,
getValue:function(operand1,operand2){
    this.value1 = operand1;
    this.value2 = operand2;
},
sum:function(){
    const tot = this.value1 +this.value2;
    return tot;
},
mul:function(){
    const total = this.value1 *this.value2;
    return total;
},
};  
calculator.getValue(5,10);
console.log("expect 15 : ",calculator.sum());
console.log("expect 50 : ",calculator.mul());
////
"use strict"

function Calculator(){

}

Calculator.prototype.setValue= function(a,b){
    this.a =b;
    this.b=b;
}

Calculator.prototype.sum= function(a,b){
    return this.a+this.b;
}

Calculator.prototype.sub= function(a,b){
    return this.a-this.b;
}

Calculator.prototype.div= function (a,b){
    return this.b/this.b;
}

Calculator.prototype.mul= function(a,b){
   return this.a*this.b;
}
