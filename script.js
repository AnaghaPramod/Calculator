
    
    // 1.display number in the text box 
    function displayNum(num){
        result.value+=num;
        //console.log(num);
    }


    // 2.clear text box
    function clearBox(){
        result.value="";
    } 


    // 3.evaluate expression
    function evaluateExpression(){
        result.value=eval(result.value)

        // expression=result.value;
        // output=eval(expression);
        // result.value=output;
    }


    // 4.remove last item from the text box
    function removeLast(){
        currentExpression=result.value;
        result.value=currentExpression.slice(0,-1);
    }
