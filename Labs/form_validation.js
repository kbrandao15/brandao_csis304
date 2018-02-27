

  function validateForm(field){
    var courses = document.getElementsByName("course[]"); 
    var validated = false;  
    var checked = false;  
    var email = document.getElementById("email");  
    var pass = document.getElementById("password1");  
    var repass = document.getElementById("password2");
    var passMatch = true;  
    // checks for a checked course
    for (i = 0; i < courses.length && !(checked); i++)
    { 
       if (courses[i].checked)
       {
         checked = true;  
       }
    }
    // checks all other fields are valid
    
    if (validateEmail(email) && validatePassword(pass) && validatePassword(repass))
    {
       pass.style.backgroundColor = "";  
       repass.style.backgroundColor = "";  
       validated = true;  
       if (pass.value != repass.value)
       {
          pass.style.backgroundColor = "#ff9999";
          repass.style.backgroundColor = "#ff9999";  
          validated = false;  
       }
       if (!checked)
       {
          validated = false;  
       }
    }
    return validated;    
  }

  function validateEmail(field){
    var email = field.value; 
    var pattern = /^\w+@\w+\.\w{3}/; 
    var validEmail = true;  
    field.style.backgroundColor = ""; 
    if (!(email.match(pattern)))
    {
       validEmail = false;
       field.style.backgroundColor = "#ff9999";   
    }
    return validEmail;  
  }

  function validatePassword(field){
    var pattern = /[A-Za-z]{6}\d+/;  
    var password = field.value;  
    var validPass = true;  
    field.style.backgroundColor = "";
    if (!(password.match(pattern)))
    {
      validPass = false;  
      field.style.backgroundColor = "#ff9999";  
    }
    return validPass; 
  }