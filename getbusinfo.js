// 공공데이터 API를 이용하여 광주 시내버스 정류장 정보 얻어오는 스크립트
// node getbusinfo.js 입력시 public 폴더 내에 BUSSTOP_INFO.js 파일 생성 (혹은 갱신)
// API에서 제공하는 정보는 버스 정류장의 ID/이름/번호/경위도/영문이름 등등이 있는데 거기서 이름/번호/경위도만 추출 후 저장함.

const { json } = require('express');
const fs = require('fs');

var request = require('request');
var url = 'http://api.gwangju.go.kr/json/stationInfo';
var queryParams = '?' + encodeURIComponent('ServiceKey') + '=gbTUPjOl5EIUugrEBv9Z51k4T4Q8MrpQPeKtk4e4MBPFv%2BV2zn2AnKibKnvvUsTODOHt4JMCCMokuCCaTLxjFA%3D%3D';
queryParams += '&' + encodeURIComponent('serviceKey') + '=' + encodeURIComponent('');

var busArray = new Array();
var jsonData;

request({
    url: url + queryParams,
    method: 'GET'}, 
    function (error, response, body) 
    {
        let json = JSON.parse(body);
        console.log(json.STATION_LIST.length + "개 버스 정류장 정보 불러옴\n");
        //console.log('Status', response.statusCode);
        //console.log('Headers', JSON.stringify(response.headers));
        //console.log('Reponse received', body);

        for (const key of json.STATION_LIST)
        {
            busData = new Object();
            busData.STATION_NUM = key.STATION_NUM;
            busData.BUSSTOP_NAME = key.BUSSTOP_NAME;
            busData.LATITUDE = key.LATITUDE;
            busData.LONGITUDE = key.LONGITUDE;
            busArray.push(busData);    
        }
        jsonData = JSON.stringify(busArray);
        //console.log(jsonData);
        fs.writeFileSync("./public/BUSSTOP_INFO.json",jsonData)
        console.log("버스 정류장 번호, 이름, 경/위도 저장")
    }
);





