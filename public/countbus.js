function BUS_STATION_INFO_INIT()
{
    loadJSON(function(response){
        BUSSTOP_JSON = JSON.parse(response);
    });
}

function loadJSON(callback)
{
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'BUSSTOP_INFO.json', true);
    xobj.onreadystatechange = function()
    {
        if(xobj.readyState == 4 && xobj.status == "200")
        {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
    console.log('r' + xobj.readyState);
    console.log('s' + xobj.status);
}

function getDistanceFromLatLonInKm(lat1, lng1, lat2, lng2) // 경위도로 거리 계산하는 함수
{
  function deg2rad(deg) 
  {
    return deg * (Math.PI / 180);
  }

  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lng2 - lng1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km

  return d*1000; // m로 retrun
}
function count_bus(mouse_lat, mouse_long)
{
    var count_100 = 0;
    var count_200 = 0;
    var count_500 = 0;
    var distance = 0;

    for (const key of BUSSTOP_JSON)
    {
        distance = getDistanceFromLatLonInKm(key.LATITUDE, key.LONGITUDE, mouse_lat, mouse_long)
        if(distance <= 100) count_100++;
        if (distance <= 200) count_200++;
        if (distance <= 500) count_500++;
    }
    console.log(count_100);
    console.log(count_200);
    console.log(count_500);
}