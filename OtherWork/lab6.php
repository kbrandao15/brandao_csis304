<html>
 <body>

  <?php

  $string = str_split($_POST["data"]);  
  $fullLists = array(array());
  function getPermutations($aList)
  {
   global $fullLists;  
   global $string;  
   global $newList;  
   if (sizeof($aList) == 1)
   {
    return array(0 => $aList);
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
      
      if (count($newList[$j]) == sizeof($string))
      {
         array_push($fullLists, $newList[$j]);  
      }
     }
    }
      return $newList;  
   }
  }

  
  $listOfLists = getPermutations($string);
  print_r($fullLists);  
  $wordList = array();  
  foreach($fullLists as $word)
  {
   array_push($wordList,(implode($word)));
  }
  sort($wordList);  

  foreach($wordList as $word){
     echo $word;  
     echo "<br />";  
  }
 
 ?>

 <a href="lab6Main.html">Try Again</a>

 </body>
</html>