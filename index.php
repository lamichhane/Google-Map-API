<!DOCTYPE html>
<html lang ="en">
    <head>
        <meta charset="UTF-8">
        <title>Earthquake in last 24 hours</title>
        <link rel="stylesheet" type="text/css"  href="css/user.css"/>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-sm-12"> 
                    <h4>Earthquakes across globe in last 24 hours</h4>
                </div>
                <hr/>
                <?php
                require('backend/getData.php');
                $getDataClass = new GetData();
                $result = $getDataClass->getDataFromAPI();
                echo '<div id="mapdata">' . $result . '</div>';
                ?>
                <div id="map"></div>
        </div>
    </div>
    <script type="text/javascript" src="js/map.js"></script>
    <script async defer
            src="https://maps.googleapis.com/maps/api/js?v=weekly&key=API KEY&callback=loadMap">
    </script>
</body>
</html>
