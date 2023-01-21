let out = document.getElementById("out").innerHTML;
let num1 = Number(document.getElementById("n1").value);
let num2 = Number(document.getElementById("n2").value);

function plus() {
    let num1 = Number(document.getElementById("n1").value);
    let num2 = Number(document.getElementById("n2").value);
    let out = num1 + num2;
    document.getElementById("out").innerHTML = out;
    
}
function minus() {
    let num1 = Number(document.getElementById("n1").value);
    let num2 = Number(document.getElementById("n2").value);
    let out = num1 - num2;
    document.getElementById("out").innerHTML = out;
}
function multiplication() {
    let num1 = Number(document.getElementById("n1").value);
    let num2 = Number(document.getElementById("n2").value);
    let out = num1 * num2;
    document.getElementById("out").innerHTML = out;
}
function division() {
    let num1 = Number(document.getElementById("n1").value);
    let num2 = Number(document.getElementById("n2").value);
    let out = num1 / num2;
    document.getElementById("out").innerHTML = out;
}
function sqrt(){
    let num1 = Number(document.getElementById("n1").value);
    
    let out = Math.sqrt(num1)
    

    document.getElementById("out").innerHTML = out;
}
function pow(){
    let num1 = Number(document.getElementById("n1").value);
    
    let out = Math.pow(num1 , 2)
    document.getElementById("out").innerHTML = out;
}