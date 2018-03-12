<?php

include("RestService.php");

/**
 * This class accesses a NOAA web service for retrieving weather
 * information
 */
class WeatherService extends RestService
{
   public function __construct($methods) 
   {
     parent::__construct($methods);
   }

  /**
   * Return the weather for the zip given
   */
  public function performGet($url, $arguments, $accept) 
  {
     if (!$zipToFetch = $arguments["zipcode"])
     {
        die("Need zipcode");
     }

    $url ="http://graphical.weather.gov/xml/sample_products/browser_interface/ndfdBrowserClientByDay.php?zipCodeList=$zipToFetch&format=24+hourly&numDays=7";
    // Create a new cURL resource handle
    $ch = curl_init();
 
    // Set URL to download
    curl_setopt($ch, CURLOPT_URL, $url);
 
    // Include header in result? (0 = yes, 1 = no)
    curl_setopt($ch, CURLOPT_HEADER, 0);
 
    // Should cURL return or print out the data? (true = return, false = print)
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
 
    // Download the given URL, and return output
    $output = curl_exec($ch);
 
    // Close the cURL resource, and free system resources
    curl_close($ch);

    // Because we're going to return XML we want to send a special
    // header with a custom content-type (not the normal PHP header)
    header('Content-type: application/xml');

    // Now display the XML output
    print $output;

  } // PerformGet

} // WeatherService 
  
// Create an instance of the service and handle the request
$service = new WeatherService('GET');
$service->handleRawRequest($_SERVER, $_GET, $_POST, $_FILES); 
?>