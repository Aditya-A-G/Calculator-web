

 const zero = document.querySelector(".zero");
 const one = document.querySelector(".one");
 const two = document.querySelector(".two");
 const three = document.querySelector(".three");
 const four = document.querySelector(".four");
 const five = document.querySelector(".five");
 const six = document.querySelector(".six");
 const seven = document.querySelector(".seven");
 const eight = document.querySelector(".eight");
 const nine = document.querySelector(".nine");

 const add = document.querySelector(".add");
 const subtract = document.querySelector(".subtract");
 const multiply = document.querySelector(".multiply");
 const divide = document.querySelector(".divide");
 const equalTo = document.querySelector(".equalTo");

 const output = document.querySelector(".output");

    

 function addVal(num1, num2){

    return parseInt(num1) + parseInt(num2);

 }

  function subtractVal(num1, num2) {

    return num1 - num2;

  };

  function multiplyVal(num1, num2) {

    return num1 * num2;
  
  };

  function divideVal(num1, num2){

    if(num2 == 0){

    }

    return num1 / num2;

  }

  function displayOutput(value){

    output.textContent = value;

  }