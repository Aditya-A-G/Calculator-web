const para = document.querySelector("p");
const output = document.querySelector(".output");
const dispExp = document.querySelector(".exp");


 const zero = document.querySelector(".zero");
 const doubleZero = document.querySelector(".doubleZero");
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
 const backspace = document.querySelector(".backspace");
 const empty = document.querySelector(".empty");
 const dot = document.querySelector(".dot");
 
 let expression = output.value;
 let isDecimalAvailable = true;

window.addEventListener("keydown", (e)=>{

    console.log(e)
    
    switch(e.key){
        case "0":
            selectZero()
        break;
        case "1":
            selectOne();
        break;
        case "2":
            selectTwo();
        break;
        case "3":
            selectThree();
        break;
        case "4":
            selectFour();
        break;
        case "5":
            selectFive();
        break;
        case "6":
            selectSix();
        break;
        case "7":
            selectSeven();
        break;
        case "8":
            selectEight();
        break;
        case "9":
            selectNine();
        break;
        case ".":
            selectDot();
        break;
        case "+":
            selectAdd();
        break;
        case "-":
            selectSubtract();
        break;
        case "*":
            selectMultiply();
        break;
        case "/":
            selectDivide();
        break;
        case "%":
            selectModulo();
        break;
        case "=":
            selectEqualTo();
        break;
        case "Backspace":
            selectBackspace();
        break;
        case "Enter":
            selectEqualTo();
        break;
        default:
            e.preventDefault()
            
    }
})

 zero.addEventListener("click", selectZero);
 doubleZero.addEventListener("click", selectDoubleZero);
 one.addEventListener("click", selectOne);
 two.addEventListener("click", selectTwo);
 three.addEventListener("click", selectThree);
 four.addEventListener("click", selectFour);
 five.addEventListener("click", selectFive);
 six.addEventListener("click", selectSix);
 seven.addEventListener("click", selectSeven);
 eight.addEventListener("click", selectEight);
 nine.addEventListener("click", selectNine);
 dot.addEventListener("click", selectDot);
 add.addEventListener("click", selectAdd);
 subtract.addEventListener("click", selectSubtract);
 multiply.addEventListener("click", selectMultiply);
 divide.addEventListener("click", selectDivide);
 modulo.addEventListener("click", selectModulo);
 equalTo.addEventListener("click", selectEqualTo);
 backspace.addEventListener("click", selectBackspace);
 empty.addEventListener("click", selectEmpty);

 function selectEmpty(){
    expression = "0";
    output.value = "0";
    dispExp.value = "0";
    isDecimalAvailable = true;
 }
    function selectZero(){

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

            dispExp.value = expression;
        }

        console.log(expression)

    }


    function selectDoubleZero(){
        if(expression != "0"){
            if(expression[expression.length - 1] == "+" || expression[expression.length - 1] == "-" ||         expression[expression.length - 1] == "*" || expression[expression.length - 1] == "/" ||
            expression[expression.length - 1] == "%" || expression[expression.length - 1] == "=")
            {
                if(expression[expression.length - 1] == "="){
                    expression = "";
                }
                output.value = "00";
                expression = expression.concat("00");
            }else
            {
                output.value = output.value.concat("00");
                expression = expression.concat("00");
            }

            dispExp.value = expression;
        }

        console.log(expression)
    }



    function selectOne(){

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
        dispExp.value = expression;
        console.log(expression)

    }

    function selectTwo(){

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
        dispExp.value = expression;
        console.log(expression)

    }

    function selectThree(){

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
        dispExp.value = expression;
        console.log(expression)

    }

    function selectFour(){

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
        dispExp.value = expression;
        console.log(expression)

    }

    function selectFive(){

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
         dispExp.value = expression;
         console.log(expression)
 
     }

     function selectSix(){

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
        dispExp.value = expression;
        console.log(expression)

    }

    function selectSeven(){
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
        dispExp.value = expression;
        console.log(expression)

    }

    function selectEight(){

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
         dispExp.value = expression;
         console.log(expression)
 
     }

     function selectNine(){

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
           dispExp.value = expression;
           console.log(expression)
   
       }

    function selectDot(){

        if(expression[expression.length - 1] == "="){
            expression = "";
        }

        if(isDecimalAvailable){
            expression = expression.concat(".");
            output.value = output.value.concat(".");
            isDecimalAvailable = false;
        }
        dispExp.value = expression;
        console.log(expression)

    }


    function selectAdd(){
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
                dispExp.value = expression;
                console.log(expression)
                return;
            }
        }
        expression = expression.concat("+");
        dispExp.value = expression;
        console.log(expression)

    }

    function selectSubtract(){
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
                dispExp.value = expression;
                console.log(expression)
                return;
            }
        }
        expression = expression.concat("-");
        dispExp.value = expression;
        console.log(expression)

    }

    function selectMultiply(){
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
                dispExp.value = expression;
                console.log(expression)
                return;
            }
        }
        expression = expression.concat("*");
        dispExp.value = expression;
        console.log(expression)

    }

    function selectDivide(){
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
                dispExp.value = expression;
                console.log(expression)
                return;
            }
        }
        expression = expression.concat("/");
        dispExp.value = expression;
        console.log(expression)

    }

    function selectModulo(){
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
                dispExp.value = expression;
                console.log(expression)
                return;
            }
        }
        expression = expression.concat("%");
        dispExp.value = expression;
        console.log(expression)

    }



    function selectEqualTo(){
        isDecimalAvailable = true;

        expression = evaluateExpression(expression);
        if(expression[expression.length - 1] != "="){
            dispExp.value = expression;
            output.value = expression;
            expression = expression.concat("=");
        }
        console.log(expression)

    }

    function selectBackspace(){

        if(expression[expression.length - 1] == "+" || expression[expression.length - 1] == "-" || 
           expression[expression.length - 1] == "*" || expression[expression.length - 1] == "/" ||
           expression[expression.length - 1] == "%"){

               expression = expression.slice(0,expression.length - 1);

               dispExp.value = expression;
           }else if(expression[expression.length - 1] != "="){

            expression = expression.slice(0,expression.length - 1)

            dispExp.value = expression;
            output.value = output.value.slice(0,output.value.length - 1);
                if(output.value.length == 0){

                    output.value = expression.slice(0,expression.length - 1);

                }
           }else{
            expression = expression.slice(0,expression.length - 1);


            expression = expression.slice(0,expression.length - 1);

            dispExp.value = expression;

            output.value = output.value.slice(0,output.value.length - 1);
           }

    }

    

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


    if(secondvalue == ""){
        return firstvalue;
    }else if(secondvalue == "0"){
        para.textContent = "Cannot divide by zero";

        setTimeout(() => {
            para.textContent = "";
        }, 5000);

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
