<html>
 <body>

  <?php

  function getPermutations($aList)
  {
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
     array_values($copyList[$i]);  
     $newList = getPermutations($copyList);

     for ($j = 0; $j < sizeof($newList); $j++)
     {
      print_r($newList[$j]);
      echo "<br />";  
      print_r($newList);  
      echo "<br />";
      array_unshift($newList[$j], $char);
     }
     foreach($newList as $value)
     {
       print_r(array_values($value));
       echo "<br />";
     }
    }
     return $newList;
   }
  }

  $string = str_split($_POST["data"]);
  $listOfLists = getPermutations($string);

  foreach($listOfLists as $word)
  {
   echo implode($word);
   echo "<br />";
  }
  foreach($string as $word)
  {
   echo $word;
   echo "<br />";
  }
 
 ?>

 <a href="lab6Main.html">Try Again</a>

 </body>
</html>