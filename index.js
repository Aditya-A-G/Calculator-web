
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

 let expression = output.textContent;

    zero.addEventListener("click", ()=>{
        if(expression != "0"){
            expression = expression.concat("0");
            output.textContent = expression;
        }
    });

    one.addEventListener("click", ()=>{

        if(expression == "0"){
            expression = "1";
            output.textContent = expression;
        }else{
            if(expression[expression.length - 1] == "+" || expression[expression.length - 1] == "-" ||         expression[expression.length - 1] == "*" || expression[expression.length - 1] == "/" ||
            expression[expression.length - 1] == "=")
            {
                if(expression[expression.length - 1] == "="){
                    expression = "";
                }
                output.textContent = "1";
                expression = expression.concat("1");
            }else
            {
                output.textContent = output.textContent.concat("1");
                expression = expression.concat("1");
            }
        }

    });

    two.addEventListener("click", ()=>{

        if(expression == "0"){
            expression = "2";
            output.textContent = expression;
        }else{
            if(expression[expression.length - 1] == "+" || expression[expression.length - 1] == "-" || expression[expression.length - 1] == "*" || expression[expression.length - 1] == "/" ||
            expression[expression.length - 1] == "=")
            {
                if(expression[expression.length - 1] == "="){
                    expression = "";
                }
                output.textContent = "2";
                expression = expression.concat("2");
            }else
            {
                output.textContent = output.textContent.concat("2");
                expression = expression.concat("2");
            }
        }

    });

    three.addEventListener("click", ()=>{

        if(expression == "0"){
            expression = "3";
            output.textContent = expression;
        }else{
            if(expression[expression.length - 1] == "+" || expression[expression.length - 1] == "-" || expression[expression.length - 1] == "*" || expression[expression.length - 1] == "/" ||
            expression[expression.length - 1] == "=")
            {
                if(expression[expression.length - 1] == "="){
                    expression = "";
                }
                output.textContent = "3";
                expression = expression.concat("3");
            }else
            {
                console.log("now i'm in else-> else condition")
                output.textContent = output.textContent.concat("3");
                expression = expression.concat("3");
            }
        }

    });

    four.addEventListener("click", ()=>{

        if(expression == "0"){
            expression = "4";
            output.textContent = expression;
        }else{
            if(expression[expression.length - 1] == "+" || expression[expression.length - 1] == "-" || expression[expression.length - 1] == "*" || expression[expression.length - 1] == "/" ||
            expression[expression.length - 1] == "=")
            {
                if(expression[expression.length - 1] == "="){
                    expression = "";
                }
                output.textContent = "4";
                expression = expression.concat("4");
            }else
            {
                output.textContent = output.textContent.concat("4");
                expression = expression.concat("4");
            }
        }

    });

    five.addEventListener("click", ()=>{

       if(expression == "0"){
            expression = "5";
            output.textContent = expression;
        }else{
            if(expression[expression.length - 1] == "+" || expression[expression.length - 1] == "-" || expression[expression.length - 1] == "*" || expression[expression.length - 1] == "/" ||
            expression[expression.length - 1] == "=")
            {
                if(expression[expression.length - 1] == "="){
                    expression = "";
                }
                output.textContent = "5";
                expression = expression.concat("5");
            }else
            {
                output.textContent = output.textContent.concat("5");
                expression = expression.concat("5");
            }
        }

    });

    six.addEventListener("click", ()=>{

        if(expression == "0"){
            expression = "6";
            output.textContent = expression;
        }else{
            if(expression[expression.length - 1] == "+" || expression[expression.length - 1] == "-" || expression[expression.length - 1] == "*" || expression[expression.length - 1] == "/" ||
            expression[expression.length - 1] == "=")
            {
                if(expression[expression.length - 1] == "="){
                    expression = "";
                }
                output.textContent = "6";
                expression = expression.concat("6");
            }else
            {
                output.textContent = output.textContent.concat("6");
                expression = expression.concat("6");
            }
        }

    });

    seven.addEventListener("click", ()=>{
        if(expression == "0"){
            expression = "7";
            output.textContent = expression;
        }else{
            if(expression[expression.length - 1] == "+" || expression[expression.length - 1] == "-" || expression[expression.length - 1] == "*" || expression[expression.length - 1] == "/" ||
            expression[expression.length - 1] == "=")
            {
                if(expression[expression.length - 1] == "="){
                    expression = "";
                }
                output.textContent = "7";
                expression = expression.concat("7");
            }else
            {
                output.textContent = output.textContent.concat("7");
                expression = expression.concat("7");
            }
        }

    });

    eight.addEventListener("click", ()=>{

       if(expression == "0"){
            expression = "8";
            output.textContent = expression;
        }else{
            if(expression[expression.length - 1] == "+" || expression[expression.length - 1] == "-" || expression[expression.length - 1] == "*" || expression[expression.length - 1] == "/" ||
            expression[expression.length - 1] == "=")
            {
                if(expression[expression.length - 1] == "="){
                    expression = "";
                }
                output.textContent = "8";
                expression = expression.concat("8");
            }else
            {
                output.textContent = output.textContent.concat("8");
                expression = expression.concat("8");
            }
        }

    });

    nine.addEventListener("click", ()=>{

     if(expression == "0"){
            expression = "9";
            output.textContent = expression;
        }else{
            if(expression[expression.length - 1] == "+" || expression[expression.length - 1] == "-" || expression[expression.length - 1] == "*" || expression[expression.length - 1] == "/" || 
            expression[expression.length - 1] == "=")
            {
                console.log(expression);

                if(expression[expression.length - 1] == "="){
                    expression = "";
                }

                console.log(expression);

                output.textContent = "9";
                expression = expression.concat("9");
            }else
            {
                output.textContent = output.textContent.concat("9");
                expression = expression.concat("9");
            }
        }

    });


    add.addEventListener("click", ()=>{

        for(let i = expression.length - 1; i >= 0; i--){
            if(expression[i] == "+" || expression[i] == "-" || expression[i] == "*" || expression[i] == "/"){
                expression = evaluateExpression(expression);
                output.textContent = expression;
                expression = expression.concat("+");
                return;
            }
        }
        console.log(typeof(expression))
        expression = expression.concat("+");
    });

    equalTo.addEventListener("click", ()=>{
        expression = evaluateExpression(expression);
        output.textContent = expression;
        expression = expression.concat("=");
    })

 function evaluateExpression(exp){
    let arr = exp.split("");
    let operator = null;
    let firstValue = "";
    let secondValue = "";
    let ans = "";

    for(let i = 0; i<arr.length; i++){
        if(arr[i] == "+" || arr[i] == "-" || arr[i] == "*" || arr[i] == "/"){
            operator = arr[i];
        }else{
            if(operator == null){
                firstValue = firstValue.concat(arr[i]);
            }else{
                secondValue = secondValue.concat(arr[i]);
            }

        }

    }   


    switch(operator){
        case "+":
            ans = addVal(firstValue, secondValue);
        break;

        case "-":
            ans = subtractVal(firstValue, secondValue);
        break;

        case "*":
            ans = multiplyVal(firstValue, secondValue);
        break;

        case "/":
            ans = divideVal(firstValue, secondValue);
        break;
    }

    return ans.toString()
 }

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