function addition(){
    let x = 5;
    const y=10;
    var z= x+y;
    document.getElementById("demo").innerHTML = z;
}
function calc1(num1,num2){
    return Number (num1)+(Number(num2));
}
function Addition(){
    var num1 = 0;
    var num2 = 0;
   num1 = document.getElementById("add1").value;
   num2 = document.getElementById("add2").value;
   ans=Number(num1)+Number(num2);
   document.getElementById("add3").value = ans; 
if (Number(num1)==false){
    alert("Num1 cannot be empty.");
}
else{
    alert("Num2 cannot be empty.");
}
}
function Subtraction(){
    var num1 = 0;
    var num2 = 0;
   num1 = document.getElementById("sub1").value;
   num2 = document.getElementById("sub2").value;
   ans=Number(num1)-Number(num2);
   document.getElementById("sub3").value = ans; 
}
function calc1(num1,num2){
    return Number (num1)-(Number(num2));
}
function Multiplication(){
    var num1 = 0;
    var num2 = 0;
   num1 = document.getElementById("prod1").value;
   num2 = document.getElementById("prod2").value;
   ans=Number(num1)*Number(num2);
   document.getElementById("prod3").value = ans; 
}
function calc1(num1,num2){
    return Number (num1)*(Number(num2));
}
function Division(){
    var num1 = 0;
    var num2 = 0;
   num1 = document.getElementById("div1").value;
   num2 = document.getElementById("div2").value;
   ans=Number(num1)/Number(num2);
   document.getElementById("div3").value = ans; 
}
function calc1(num1,num2){
    return Number (num1)+(Number(num2));
}


