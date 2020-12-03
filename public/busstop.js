function BUS_STATION_INFO_INIT() // BUSSTOP_INFO.json 파일 불러오는 함수
{
    loadJSON(function(response){
        BUSSTOP_JSON = JSON.parse(response); // 전역변수로 선언됨
    });
}

function loadJSON(callback) // BUSSTOP_INFO.json 파일 불러오는 함수
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

function count_BUSSTOP(mouse_lat, mouse_long) // 주변의 버스 정류장의 수를 카운트 하는 함수. 매개변수는 경위도.
{
    var count_100 = 0; // count_100/200/500 : 해당 거리 반경 내의 버스정류장 수
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
    // console.log(count_100); // 콘솔창에서 확인 가능
    // console.log(count_200);
    // console.log(count_500);
}