<html>
 <body>

  <?php
  
  $fullLists;  
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
     $copyList = array_values($copyList);  
     $newList = getPermutations($copyList);

     for ($j = 0; $j < sizeof($newList); $j++)
     {
      print_r($newList[$j]);
      echo "<br />";  
      print_r($newList);  
      echo "<br />";
      array_unshift($newList[$j], $char);
      if (sizeOf($newList[$j] == sizeOf($string))
      {
         array_push($fullLists, $newList[$j]);  
      }
     }

    }
     return $newList;
   }
  }

  $string = str_split($_POST["data"]);
  $listOfLists = getPermutations($string);
  print_r($listOfLists);  
  echo "<br /><br />";
  foreach($listOfLists as $word)
  {
   echo implode($word);
   echo "<br />";
  }
 
 ?>

 <a href="lab6Main.html">Try Again</a>

 </body>
</html>