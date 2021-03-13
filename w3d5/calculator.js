function calculator(){
    let c = parseInt(document.getElementById("first").value);
    let d = parseInt(document.getElementById("second").value);
    let result = c * d/100;
    document.getElementById('result').value = result
   }