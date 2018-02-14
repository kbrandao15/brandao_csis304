// radio_click.js
  
function colorChoice(color){
    switch (color) {
        case "red":
            alert("Red must be your favorite color! :)");  
            break;
        case "blue":
            alert("Blue must be your favorite color! :)");  
            break;
        case "green":
            alert("Green must be your favorite color! :)");  
            break;
        case "yellow":
            alert("Yellow must be your favorite color! :)");  
            break;
        case "orange":
            alert("Orange must be your favorite color! :)");  
            break;
    }
}

 function colorChoice2(){

    var dom = document.getElementById("myForm2");  
    for (var index = 0; index < dom.colorButton2.length; index++){
        if (dom.colorButton2[index].checked) {
            color = dom.colorButton2[index].value;  
            break;  
        }
    }
    switch (color) {
        case "red":
            alert("Red must be your favorite color! :)");  
            break;
        case "blue":
            alert("Blue must be your favorite color! :)");  
            break;
        case "green":
            alert("Green must be your favorite color! :)");  
            break;
        case "yellow":
            alert("Yellow must be your favorite color! :)");  
            break;
        case "orange":
            alert("Orange must be your favorite color! :)");  
            break;
    }
  }

 function assignElements(){
   var dom = document.getElementById("myForm2");  
   dom.elements[0].onclick = colorChoice2;    
   dom.elements[1].onclick = colorChoice2;    
   dom.elements[2].onclick = colorChoice2;    
   dom.elements[3].onclick = colorChoice2;  
   dom.elements[4].onclick = colorChoice2;   
} 