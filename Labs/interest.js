// Create a money number formatter by subclassing the NumberFormat class
// for US currency (no bugs here)
var moneyFormatter = new Intl.NumberFormat('en-US', 
   { style: 'currency', currency: 'USD' }
);





/**
 * Validate balance field
 *	
 * @return {true} if field is falid, {false} otherwise
 */
function validBalance(field) {
   var balance = event.currentTarget;
   if ( isNaN(parseInt(balance.value)) ) {
      alert("\""+balance.value + "\" is not a valid value");
      balance.focus();
      balance.value = "";
   } else {
       compute();
   }
}



/**
 * Compute future value and display on page
 */
function compute() {
   var rate = document.getElementById("rate");
   var year = document.getElementById("years");
   var balance = document.getElementById("balance");
   // If all of the fields have something in them, compute and display 
   // the future value; otherwise we do nothing
   if (rate.value && year.value && balance.value) {
      // Display the value formatted as $999.99
      document.getElementById("total").innerHTML = moneyFormatter.format(
         // Forumula is Future = initialbalance * (1 + rate.value/12) ^ (12*years.value) 
         // assumes rate is given as a whole number (e.g., 3 is .03) so
         // convert to fractional value in the equation
         balance.value * Math.pow((1 + (rate.value/100.0)/12), (years.value*12))
      );
   }
 
}