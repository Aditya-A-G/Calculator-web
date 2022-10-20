const output = document.querySelector(".output");


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
 const modulo = document.querySelector(".modulo")
 
 const dot = document.querySelector(".dot");
 
 let expression = output.value;
 let isDecimalAvailable = true;

window.addEventListener("keydown", (e)=>{

    console.log(e)
    
    switch(e.key){
        case "Backspace": 
            e.preventDefault()
        break;
        case 0:
        break;
        case 1:
        break;
        case 1:
        break;
        case 1:
        break;
        case 1:
        break;
        case 1:
        break;
        case 1:
        break;
        case 1:
        break;
        case 1:
        break;
        case 1:
        break;
        default:
            e.preventDefault()
            
    }
})

 zero.addEventListener("click", ()=>{
        if(expression != "0"){
            if(expression[expression.length - 1] == "+" || expression[expression.length - 1] == "-" ||         expression[expression.length - 1] == "*" || expression[expression.length - 1] == "/" ||
            expression[expression.length - 1] == "%" || expression[expression.length - 1] == "=")
            {
                if(expression[expression.length - 1] == "="){
                    expression = "";
                }
                output.value = "0";
                expression = expression.concat("0");
            }else
            {
                output.value = output.value.concat("0");
                expression = expression.concat("0");
            }
        }

        console.log(expression)
    });

    one.addEventListener("click", ()=>{

        if(expression == "0"){
            expression = "1";
            output.value = expression;
        }else{
            if(expression[expression.length - 1] == "+" || expression[expression.length - 1] == "-" ||         expression[expression.length - 1] == "*" || expression[expression.length - 1] == "/" ||
            expression[expression.length - 1] == "%" || expression[expression.length - 1] == "=")
            {
                if(expression[expression.length - 1] == "="){
                    expression = "";
                }
                output.value = "1";
                expression = expression.concat("1");
            }else
            {
                output.value = output.value.concat("1");
                expression = expression.concat("1");
            }
        }
        console.log(expression)

    });

    two.addEventListener("click", ()=>{

        if(expression == "0"){
            expression = "2";
            output.value = expression;
        }else{
            if(expression[expression.length - 1] == "+" || expression[expression.length - 1] == "-" || expression[expression.length - 1] == "*" || expression[expression.length - 1] == "/" ||
            expression[expression.length - 1] == "%" || expression[expression.length - 1] == "=")
            {
                if(expression[expression.length - 1] == "="){
                    expression = "";
                }
                output.value = "2";
                expression = expression.concat("2");
            }else
            {
                output.value = output.value.concat("2");
                expression = expression.concat("2");
            }
        }
        console.log(expression)

    });

    three.addEventListener("click", ()=>{

        if(expression == "0"){
            expression = "3";
            output.value = expression;
        }else{
            if(expression[expression.length - 1] == "+" || expression[expression.length - 1] == "-" || expression[expression.length - 1] == "*" || expression[expression.length - 1] == "/" ||
            expression[expression.length - 1] == "%" || expression[expression.length - 1] == "=")
            {
                if(expression[expression.length - 1] == "="){
                    expression = "";
                }
                output.value = "3";
                expression = expression.concat("3");
            }else
            {
                console.log("now i'm in else-> else condition")
                output.value = output.value.concat("3");
                expression = expression.concat("3");
            }
        }
        console.log(expression)

    });

    four.addEventListener("click", ()=>{

        if(expression == "0"){
            expression = "4";
            output.value = expression;
        }else{
            if(expression[expression.length - 1] == "+" || expression[expression.length - 1] == "-" || expression[expression.length - 1] == "*" || expression[expression.length - 1] == "/" ||
            expression[expression.length - 1] == "%" || expression[expression.length - 1] == "=")
            {
                if(expression[expression.length - 1] == "="){
                    expression = "";
                }
                output.value = "4";
                expression = expression.concat("4");
            }else
            {
                output.value = output.value.concat("4");
                expression = expression.concat("4");
            }
        }
        console.log(expression)

    });

    five.addEventListener("click", ()=>{

       if(expression == "0"){
            expression = "5";
            output.value = expression;
        }else{
            if(expression[expression.length - 1] == "+" || expression[expression.length - 1] == "-" || expression[expression.length - 1] == "*" || expression[expression.length - 1] == "/" ||
            expression[expression.length - 1] == "%" || expression[expression.length - 1] == "=")
            {
                if(expression[expression.length - 1] == "="){
                    expression = "";
                }
                output.value = "5";
                expression = expression.concat("5");
            }else
            {
                output.value = output.value.concat("5");
                expression = expression.concat("5");
            }
        }
        console.log(expression)

    });

    six.addEventListener("click", ()=>{

        if(expression == "0"){
            expression = "6";
            output.value = expression;
        }else{
            if(expression[expression.length - 1] == "+" || expression[expression.length - 1] == "-" || expression[expression.length - 1] == "*" || expression[expression.length - 1] == "/" ||
            expression[expression.length - 1] == "%" || expression[expression.length - 1] == "=")
            {
                if(expression[expression.length - 1] == "="){
                    expression = "";
                }
                output.value = "6";
                expression = expression.concat("6");
            }else
            {
                output.value = output.value.concat("6");
                expression = expression.concat("6");
            }
        }
        console.log(expression)

    });

    seven.addEventListener("click", ()=>{
        if(expression == "0"){
            expression = "7";
            output.value = expression;
        }else{
            if(expression[expression.length - 1] == "+" || expression[expression.length - 1] == "-" || expression[expression.length - 1] == "*" || expression[expression.length - 1] == "/" ||
            expression[expression.length - 1] == "%" || expression[expression.length - 1] == "=")
            {
                if(expression[expression.length - 1] == "="){
                    expression = "";
                }
                output.value = "7";
                expression = expression.concat("7");
            }else
            {
                output.value = output.value.concat("7");
                expression = expression.concat("7");
            }
        }
        console.log(expression)

    });

    eight.addEventListener("click", ()=>{

       if(expression == "0"){
            expression = "8";
            output.value = expression;
        }else{
            if(expression[expression.length - 1] == "+" || expression[expression.length - 1] == "-" || expression[expression.length - 1] == "*" || expression[expression.length - 1] == "/" ||
            expression[expression.length - 1] == "%" || expression[expression.length - 1] == "=")
            {
                if(expression[expression.length - 1] == "="){
                    expression = "";
                }
                output.value = "8";
                expression = expression.concat("8");
            }else
            {
                output.value = output.value.concat("8");
                expression = expression.concat("8");
            }
        }
        console.log(expression)

    });

    nine.addEventListener("click", ()=>{

     if(expression == "0"){
            expression = "9";
            output.value = expression;
        }else{
            if(expression[expression.length - 1] == "+" || expression[expression.length - 1] == "-" || expression[expression.length - 1] == "*" || expression[expression.length - 1] == "/" ||
            expression[expression.length - 1] == "%" || expression[expression.length - 1] == "=")
            {
                console.log(expression);

                if(expression[expression.length - 1] == "="){
                    expression = "";
                }

                console.log(expression);

                output.value = "9";
                expression = expression.concat("9");
            }else
            {
                output.value = output.value.concat("9");
                expression = expression.concat("9");
            }
        }
        console.log(expression)

    });


    add.addEventListener("click", ()=>{
        isDecimalAvailable = true;

        if(expression[expression.length - 1] == "="){
            expression = expression.replace("=", "");
        }
        for(let i = expression.length - 1; i >= 0; i--){
            if(expression[i] == "+" || expression[i] == "-" || expression[i] == "*" || expression[i] == "/" ||
               expression[i] == "%"){
                expression = evaluateExpression(expression);
                output.value = expression;
                expression = expression.concat("+");
                console.log(expression)
                return;
            }
        }
        expression = expression.concat("+");
        console.log(expression)

    });

    subtract.addEventListener("click", ()=>{
        isDecimalAvailable = true;

        if(expression[expression.length - 1] == "="){
            expression = expression.replace("=", "");
        }
        for(let i = expression.length - 1; i >= 0; i--){
            if(expression[i] == "+" || expression[i] == "-" || expression[i] == "*" || expression[i] == "/" ||
               expression[i] == "%"){
                expression = evaluateExpression(expression);
                output.value = expression;
                expression = expression.concat("-");
                console.log(expression)
                return;
            }
        }
        expression = expression.concat("-");
        console.log(expression)

    });

    multiply.addEventListener("click", ()=>{
        isDecimalAvailable = true;

        if(expression[expression.length - 1] == "="){
            expression = expression.replace("=", "");
        }
        for(let i = expression.length - 1; i >= 0; i--){
            if(expression[i] == "+" || expression[i] == "-" || expression[i] == "*" || expression[i] == "/" ||
               expression[i] == "%"){
                expression = evaluateExpression(expression);
                output.value = expression;
                expression = expression.concat("*");
                console.log(expression)
                return;
            }
        }
        expression = expression.concat("*");
        console.log(expression)

    });

    divide.addEventListener("click", ()=>{
        isDecimalAvailable = true;

        if(expression[expression.length - 1] == "="){
            expression = expression.replace("=", "");
        }
        for(let i = expression.length - 1; i >= 0; i--){
            if(expression[i] == "+" || expression[i] == "-" || expression[i] == "*" || expression[i] == "/" ||
               expression[i] == "%"){
                expression = evaluateExpression(expression);
                output.value = expression;
                expression = expression.concat("/");
                console.log(expression)
                return;
            }
        }
        expression = expression.concat("/");
        console.log(expression)

    });

    modulo.addEventListener("click", ()=>{
        isDecimalAvailable = true;

        if(expression[expression.length - 1] == "="){
            expression = expression.replace("=", "");
        }
        for(let i = expression.length - 1; i >= 0; i--){
            if(expression[i] == "+" || expression[i] == "-" || expression[i] == "*" || expression[i] == "/" ||
               expression[i] == "%"){
                expression = evaluateExpression(expression);
                output.value = expression;
                expression = expression.concat("%");
                console.log(expression)
                return;
            }
        }
        expression = expression.concat("%");
        console.log(expression)

    });



    equalTo.addEventListener("click", ()=>{
        isDecimalAvailable = true;
        expression = evaluateExpression(expression);
        if(expression[expression.length - 1] != "="){
            output.value = expression;
            expression = expression.concat("=");
        }
        console.log(expression)

    })

    dot.addEventListener("click",()=>{

        
        if(expression[expression.length - 1] == "="){
            expression = "";
        }

        if(isDecimalAvailable){
            expression = expression.concat(".");
            output.value = output.value.concat(".");
            isDecimalAvailable = false;
        }
        console.log(expression)

    })

 function evaluateExpression(exp){
    let arr = exp.split("");
    let operator = null;
    let firstvalue = "";
    let secondvalue = "";
    let ans = "";

    for(let i = 0; i<arr.length; i++){
        if(arr[i] == "+" || arr[i] == "-" || arr[i] == "*" || arr[i] == "/" || arr[i] == "%"){
            operator = arr[i];
        }else{
            if(operator == null){
                firstvalue = firstvalue.concat(arr[i]);
            }else{
                secondvalue = secondvalue.concat(arr[i]);
            }

        }

    }   

    console.log(firstvalue)
    console.log(operator)
    console.log(secondvalue)
    if(secondvalue == ""){
        return firstvalue;
    }

    firstvalue = Number(firstvalue);
    secondvalue = Number(secondvalue);

    switch(operator){
        case "+":
            ans = addVal(firstvalue, secondvalue);
        break;

        case "-":
            ans = subtractVal(firstvalue, secondvalue);
        break;

        case "*":
            ans = multiplyVal(firstvalue, secondvalue);
        break;

        case "/":
            ans = divideVal(firstvalue, secondvalue);
        break;

        case "%":
            ans = modVal(firstvalue, secondvalue);
        break;
    }
    
    if((ans - Math.floor(ans)) !== 0){
        ans = ans.toFixed(2);
    }

    return ans.toString()
 }

 function addVal(num1, num2){

    return num1 + num2;

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

  function modVal(num1, num2){
    return num1 % num2;
  }
