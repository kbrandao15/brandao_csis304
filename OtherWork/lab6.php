<html>
 <body>

  <?php

  $string = str_split($_POST["data"]);  
  $fullLists = array(array());
  function getPermutations($aList)
  {
   global $fullLists;  
   global $string;  
   $toReturn = array(array());  
   if (sizeof($aList) == 1)
   {
     if (sizeof($string) == 1)
     {
        array_push($fullLists, $aList);  
     }
     else{
      return array(0 => $aList);
     }
   }
   else
   {
    for ($i = 0; $i < sizeof($aList); $i++)
    {
     
     $copyList = $aList;
     $char = $copyList[$i];
     unset($copyList[$i]);
     $copyList = array_values($copyList);  
     $newList = getPermutations($copyList);  

     for ($j = 0; $j < sizeof($newList); $j++)
     {
      array_unshift($newList[$j], $char);  
      array_push($toReturn, $newList[$j]);  
      
      if (count($newList[$j]) == sizeof($string))
      {
         array_push($fullLists, $newList[$j]);  
      }
     }
    }
      return $toReturn;  
   }
  }

  
  getPermutations($string);
  $wordList = array();  
  foreach($fullLists as $word)
  {
   array_push($wordList,(implode($word)));
  }

  sort($wordList);  
  $wordList = array_unique($wordList);  

  foreach($wordList as $word){
     if (!empty($word) && $word !== "0")
     {
        echo $word;  
        echo "<br />";  
     }
  }
 
 ?>

 <a href="fooForm.html">Try Again</a>

 </body>
</html>