<?php
class GetData{

    /*
     * This function will hit the API provided in the instrution 
     * and returns data
     * @param
     * @return Json
     */
    function getDataFromAPI(){
        $data=  file_get_contents("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson");
        return $data;  
    }
}
