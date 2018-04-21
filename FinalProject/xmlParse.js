
     // The URL we'll pull data from
     var theURL = "https://disneyland.disney.go.com/media/flashComponents/maps/datafeeds/dlr/DLRMaps32.xml";

    // to be used in searches:
    var selectedPark = "";  
    var searchTerm = "";  

     // attributes/elements grabbed from the XML
       var park1 = "disneyland";  
       var park2 = "disneys-california-adventure";  
       var filter = "attraction";  
       var lands_d = [];  
       var lands_ca = [];  

      // empty a list
      function removeListOptions(emptyList)
      {
          if(emptyList !== null){
           for(var i = emptyList.options.length - 1 ; i >= 0 ; i--)
            {
               emptyList.remove(i);
            }  
          }      
     }
 

      function formatLand(land)
      {
          land = land.replace(/-/g, ' ');
          return land.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      }

      // update land list
      function changeLands(park)
      {
          var landList = [];  

          if (park == park1)
          {
             landList = lands_d;  
          }
          else if (park == park2)
          {
             landList = lands_ca;  
          }

          var lands = document.getElementById("selectLand");  

          removeListOptions(lands);  
          removeListOptions(document.getElementById("selectAttraction"));  
          changeAttraction(landList[0].name);  

          // add new select drop-down menu
          for(var i = 0; i < landList.length; i++)
          {
             var option = document.createElement("option");
             option.value = landList[i].name;
             option.text = formatLand(landList[i].name);  
             lands.add(option);
          }
      }

      // update attraction list
      function changeAttraction(land)
      {
          // determine land list
          var landList = [];  
          var park = document.getElementById("selectPark").value;  

          if (park == park1)
          {
             landList = lands_d;  
          }
          else if (park == park2)
          {
             landList = lands_ca;  
          }
          
          var attractions = document.getElementById("selectAttraction");

          removeListOptions(attractions);   
          
          // add new select drop-down menu
          var index = search(land, landList);  
          for(var i = 0; i < landList[index].length; i++)
          {
             var option = document.createElement("option");
             option.text = landList[index][i];
             attractions.add(option);
          }
         }
          
    
    
    
      // selected values set
      function setPark()
      {
         selectedPark = document.getElementById("selectPark").value;  
         player.loadPlaylist({listType:'search', list: selectedPark+' '+searchTerm+' music' });  
      }

      // set Land
      function setLand()
      {
         searchTerm = document.getElementById("selectLand").value;  
      }

      function setAttraction()
      {
         searchTerm = document.getElementById("selectAttraction").value;  
      }


       // find index of multidimensional array
       function search(nameKey, myArray){
         for (var i=0; i < myArray.length; i++) {
           if (myArray[i].name === nameKey) {
              return i;  
           }
         }
         return -1;  
       }


      /**
      * A simple callback function to display some results from an
      * Ajax call. Note that 'this' in the context of the function will
      * be an XMLHttpRequest object at runtime
      */
     function setUpCallBack()
     {

        // If the request was successfull, put the response into
        // an area on the web page
        if (this.readyState==4 && this.status==200)
        {
           // Creates a DOMParser and parses the response as XML and then grabs
           // some attributes (max/min temps, images, warnings) from the document
           parser = new DOMParser();
           xmlDoc=parser.parseFromString(this.responseText,"text/xml");
           
           
           // get the nodeList of entities in the xml, then go through all of them, searching for specific children
           entities = xmlDoc.getElementsByTagName("entity");  
           for (var i = 0; i < entities.length; i++){ 
               var parts = [];  
               entity = entities[i].children;  
               for (var j = 0; j < entity.length; j++){
                  parts.push(entity[j].nodeName);  
                }
                     
               var i_map = parts.indexOf("map");  
               var i_land = parts.indexOf("land");  
               var i_type = parts.indexOf("filters");  
               var i_attraction = parts.indexOf("label");  

           // attractions and lands get added to respective lists
           if (i_map >=0 && i_land >=0 && i_type >= 0 && i_attraction >= 0){ 
               var map = entity[i_map].childNodes[0].nodeValue;  
               var land = entity[i_land].childNodes[0].nodeValue;  
               var type = entity[i_type].children[0].childNodes[0].nodeValue;  
               var attraction = entity[i_attraction].childNodes[0].nodeValue;                
                 
            
               // determines if the entity is an attraction
               if (type == "attraction"){

                  // determines if part of the disneyland or disneys-california-adventure map,
                  // adding it to a land's list.  
                  if (map == park1){
                    var i_dland = search(land, lands_d);  
                    if (i_dland < 0)
                    {
                        var newLand = [];  
                        lands_d.push(newLand);  
                        i_dland = lands_d.length - 1;  
                        lands_d[i_dland].name = land;  
                    }
                    lands_d[i_dland].push(attraction);  

                  } else if (map == park2){
                       var i_caland = search(land, lands_ca);  
                      if (i_caland < 0)
                      {
                        var newLand = [];  
                        lands_ca.push(newLand);  
                        i_caland = lands_ca.length - 1;  
                        lands_ca[i_caland].name = land;  
                      }
                     lands_ca[i_caland].push(attraction);                       
                  }
                }
               }
           } // end of loop
            
           // fill drop-down select forms
           changeLands(document.getElementById("selectPark").value);  
       }
     }

      /**
      * Generic function to make an asynchronous call to the given URL
      * and call the given function to process the results
      *
      * param url to retrieve
      * param callbackFunction to invoke when done retrieving
      */
     function makeAsynchRequest(url, setUpCallBack)
     {
         // code for IE7+, Firefox, Chrome, Opera, Safari
         if (window.XMLHttpRequest)
         {
            xmlhttp=new XMLHttpRequest();
         }
         else // code for IE6, IE5
         {
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
         }

         // Create an anonymous function as the "callback" function
         // to be executed when the request finishes
         xmlhttp.onreadystatechange=setUpCallBack;

         // Get the request, encoding the URL to ensure that any
         // parameters it includes do not confuse the proxy
         xmlhttp.open("GET","proxy.php?mode=native&url="+
               encodeURIComponent(url), true);
         xmlhttp.send();
     }