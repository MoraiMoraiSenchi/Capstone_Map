function BUS_STATION_CCTV_INFO_INIT() // BUSSTOP_INFO.json와 CCTV_INFO.json 파일 불러온 뒤 파싱하는 함수
{
    loadBUS(function(response){
        BUSSTOP_JSON = JSON.parse(response);
    });
    loadCCTV(function(response){
        CCTV_JSON = JSON.parse(response);
    })
}

function loadBUS(callback) // BUSSTOP_INFO.json 파일 불러오는 함수
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

function loadCCTV(callback) // CCTV_INFO.json 파일 불러오는 함수
{
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'CCTV_INFO.json', true);
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

  return 1000*d; // retrun
}

function count_BUSSTOP_CCTV(mouse_lat, mouse_long) // 주변의 버스 정류장과 CCTV의 개수,거리를 카운트 하고 리턴하는 함수. 매개변수는 경위도.
{
    /* count_bus_cctv 설명
        단순히 특정 반경 내 버스 정류장이나 CCTV 개수를 세는 것으로 점수를 내보니 조금 이상한 부분이 있음.
        -> 버스 정류장과 CCTV의 거리를 점수에 반영해야함
        count_bus_cctv[0]에는 반경 500m 이내의 버스정류장과 개수를 저장
        count_bus_cctv[1]부터 버스 정류장의 개수와 CCTV의 거리를 저장함.
    */

    var count_bus_cctv = new Array();
    var i = 1;
    var distance = 0;
    var bus_index = 0; // 버스 정류장의 개수를 저장할 변수

    for (const key of BUSSTOP_JSON)
    {
        distance = getDistanceFromLatLonInKm(key.LATITUDE, key.LONGITUDE, mouse_lat, mouse_long)
        if(distance <= 500) 
        {
            bus_index++;
            count_bus_cctv[i] = distance;
            i++;

            // var marker = new kakao.maps.Marker({
            //     map: map,
            //     position: new kakao.maps.LatLng(key.LATITUDE, key.LONGITUDE)
            // }); // 위치 마커로 확인하고 싶을 때 주석 해제할 것
        }
    }
    for (const key of CCTV_JSON)
    {
        distance = getDistanceFromLatLonInKm(key.LATITUDE, key.LONGITUDE, mouse_lat, mouse_long)
        if(distance <= 500) 
        {
            count_bus_cctv[i] = distance;
            i++;

            var marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(key.LATITUDE, key.LONGITUDE),
                opacity : 0.5
            }); // 위치 마커로 확인하고 싶을 때 주석 해제할 것
        }
    }

    count_bus_cctv[0] = [bus_index];
    //console.log(count_bus_cctv);

    return count_bus_cctv;
}