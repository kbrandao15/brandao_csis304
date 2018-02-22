// global variables -- a different total variable
// for each exercise
var total = 0.0;  
var total2 = 0.0;  
var total3 = 0.0;  
var total4 = 0.0;  


// functions for 5.3
// If a unique handler for each fruit was not necessary, 
// the check functions could be combined.  

function checkApple(apple)
{
    if (apple.checked){
       total += parseFloat(apple.value);  
    } else {
       total -= parseFloat(apple.value);
    }
}

function checkOrange(orange)
{
    if (orange.checked){
       total += parseFloat(orange.value);  
    } else {
       total -= parseFloat(orange.value);
    }
}

function checkBanana(banana)
{
    if (banana.checked){
       total += parseFloat(banana.value);  
    } else {
       total -= parseFloat(banana.value);  
    }
}

function calcTotal()
{
    var finalTotal = (total*1.05).toFixed(2);  
    alert("Your total cost is $"+finalTotal);  
    return false;  
}


// functions for 5.4
function valueApple(num)
{
    total2 += (0.59*num);     
}

function valueOrange(num)
{
    total2 += (0.49*num);     
}

function valueBanana(num)
{
    total2 += (0.39*num);     
}

function calcTotal2()
{
    var finalTotal = (total2*1.05).toFixed(2);  
    alert("Your total cost is $"+finalTotal);  
    return false;  
}


// functions for 5.5
function validateRange(num)
{
    var isValid = true;  
    if (isNaN(num.value) || num.value < 0 || num.value > 99)
    {
        alert("\""+num.value +"\" is not a valid number of fruit");  
        isValid = false;  
        num.focus();  
        num.value = "";  
    }
    return isValid;  
}

function validatedApple(num)
{
    total3 += (0.59*num);     
}

function validatedOrange(num)
{
    total3 += (0.49*num);     
}

function validatedBanana(num)
{
    total3 += (0.39*num);     
}

function calcTotal3()
{
    var finalTotal = (total3*1.05).toFixed(2);  
    alert("Your total cost is $"+finalTotal);  
    return false;  
}


// functions for 5.6
function validateRange2(num)
{
    var value = parseInt(num.value);  
    var isValid = true;  
    if (isNaN(value) || (value < parseInt(num.min)) || (value > parseInt(num.max)))
    {
        alert("\""+num.value +"\" is not a valid number of fruit");  
        isValid = false;  
        num.focus();  
        num.value = "";  
    }
    return isValid;  
}

function validatedApple2(num)
{
    total4 += (0.59*num);     
}

function validatedOrange2(num)
{
    total4 += (0.49*num);     
}

function validatedBanana2(num)
{
    total4 += (0.39*num);     
}

function calcTotal4()
{
    var finalTotal = (total4*1.05).toFixed(2);  
    alert("Your total cost is $"+finalTotal);  
    return false;  
}

