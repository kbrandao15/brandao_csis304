  function four1()
  {
    document.write("<table border = 1>\
                    <thead>\
                      <tr><th>Number</th>\
                          <th>Square</th>\
                          <th>Cube</th></thead><tbody>");

    for (var i = 5; i < 16; i++)
    {
        document.write("<tr><td>"+i+"</td>\
                            <td>"+Math.pow(i, 2)+"</td>\
                            <td>"+Math.pow(i, 3)+"</td></tr>");  
    }

    document.write("</tbody></table>"); 
  }

  function four2()
  {
     var fib0 = 0;
     var fib1 = 1;  
     var fibNext = 0;   
     for (var i = 0; i < 20; i++)
     {
         fibNext = fib0+fib1;  
         document.write(fib1+ ", ");  
         fib0 = fib1;  
         fib1 = fibNext;  
     }
  }


  function four3()
  {   
      var nums = [];  
      for (var i = 0; i < 3; i++)
      {
         nums[i] = prompt("Enter you input number "+(i+1)+":");  
      }
      document.write("The largest of your three input numbers is "+Math.max(...nums)+".  ");  
  }


  function four4()
  {
     n = prompt("Enter the number of Fibonacci numbers to output:");
     var fib0 = 0;
     var fib1 = 1;  
     var fibNext = 0;   
     for (var i = 0; i < n; i++)
     {
         document.write(fib1+ ", ");
         fibNext = fib0+fib1;    
         fib0 = fib1;  
         fib1 = fibNext;  
     }
  }