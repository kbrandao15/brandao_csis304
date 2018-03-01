 
// functions for 6.2
function add62Listeners()
 {
   var nw = document.getElementById("nw");  
   var ne = document.getElementById("ne");  
   var sw = document.getElementById("sw");  
   var se = document.getElementById("se");  

   nw.addEventListener("click", moveme, false);  
   ne.addEventListener("click", moveme, false);  
   sw.addEventListener("click", moveme, false);  
   se.addEventListener("click", moveme, false);  
   return true;  
 }
 
function moveme(event)
 {
   var me = document.getElementById("me");  
   var buttons = event.currentTarget;  
   var location = buttons.value;  

   switch (location){
      case "NW":
        me.style.left = "8px";
        me.style.top = "760px";  
        me.style.position= "absolute";
        break;  	
      case "NE":
        me.style.left = "1150px";
        me.style.top = "760px";  
        me.style.position= "absolute";
        break;  	
      case "SW":
        me.style.left = "8px";
        me.style.top = "1170px";  
        me.style.position= "absolute";
        break;  	
      case "SE":
        me.style.left = "1150px";
        me.style.top = "1170px";  
        me.style.position= "absolute";
        break;  	
      default:
        me.style.left = "8px";
        me.style.top = "760px";  
        me.style.position= "absolute";
        break;  
    }
   return true;  
 }

// functions for 6.8
 function clickMe(event)
 {
    var me = document.getElementById("me3");  
    me.style.left = (event.pageX-50) + "px";
    me.style.top = (event.pageY-50) + "px";
    me.style.position = "absolute";  
    me.style.visibility = "visible";
 }

// functions for 6.9
 function initialLocation() 
{
  dom = document.getElementById("banner").style;  
  var finalx = 1050;
  //var text = document.getElementById("banner").style;  
  var x = dom.left;  
  x = x.match(/\d+/);
  moveBanner(x, finalx);  
}
 function moveBanner(initX, finalX)
 {

  var x = initX;  

  // until x reaches final x, add/subtract
 // when they match, final x becomes 0 or innerWidth
  
   if (x == finalX) 
   { 
      if (x == 0) { finalX = 1050;}
      else if (x !=0 ) { finalX = 0; } 
   }
   if (x!= finalX)
   {
     if (x > finalX) { x--; }
     else if (x < finalX) { x++; }
   }

   dom.left = x+"px";  
   dom.position = "absolute";  
   setTimeout("moveBanner(" + x +"," + finalX +")", 1);
   return true;  
 }

// functions for 6.10
 function initialLocation2() 
 {
  dom2 = document.getElementById("banner2").style;  
  var finalx = 1050;   
  //var text = document.getElementById("banner2").style;  
  var x = dom2.left;  
  x = x.match(/\d+/);
  var time = 0;  
  moveBanner2(x, finalx, time);  
 }

 function moveBanner2(initX, finalX, time)
 {
  // change color from red to blue on fifth steps
  time++;  
  if (time%5 == 0)
  {
    if (dom2.color == "blue"){dom2.color = "red";}
    else{ dom2.color = "blue";}
  }

  var x = initX;  

  // until x reaches final x, add/subtract
 // when they match, final x becomes 0 or innerWidth
  
   if (x == finalX) 
   { 
      if (x == 0) { finalX = 1050; }
      else if (x !=0 ) { finalX = 0; } 
   }
   else if (x!= finalX)
   {
    if (x > finalX) { x--; }
    else if (x < finalX) { x++; }
   }

   dom2.left = x+"px";  
   dom2.position = "absolute";  
   setTimeout("moveBanner2(" + x +"," + finalX +","+time+")", 1);
   return true;  
 }



