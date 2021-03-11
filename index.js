// "use strict";


function sum (){
    let c = parseInt(document.getElementById("first").value);
    let d = parseInt(document.getElementById("second").value)
    let result = c + d;
document.getElementById('result').value = result
}

function sub (){
    let c = parseInt(document.getElementById("first").value);
    let d = parseInt(document.getElementById("second").value)
    let result = c - d;
    document.getElementById('result').value = result
}

function mult (){
    let c = parseInt(document.getElementById("first").value);
    let d = parseInt(document.getElementById("second").value);
    let result = c * d;
    document.getElementById('result').value = result
}

function calculator(operator){
    if (operator === '+'){
        sum()
    }
    else if (operator === '-'){
        sub()
    }
    else if (operator === '*'){
        mult()
    }
}

 
 
