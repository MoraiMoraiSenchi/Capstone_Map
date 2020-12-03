const fs = require('fs');

const jsonFile = fs.readFileSync('./CCTV_INFO_RAW.json');

const jsonData = JSON.parse(jsonFile);

saveArray = new Array();

var saveJson;

console.log("불러온 데이터 개수 : ", jsonData.length);

for (const key of jsonData)
{
    if(key.설치목적구분 == "생활방범")
    {
        saveData = new Object(); 
        saveData.NAME = key.소재지지번주소;
        saveData.PURPOSE = key.설치목적구분;
        saveData.LATITUDE = key.위도;
        saveData.LONGITUDE = key.경도;
        saveArray.push(saveData);
    }   
}
saveJson = JSON.stringify(saveArray);

fs.writeFileSync("./public/CCTV_INFO.json", saveJson);
console.log("방범용 CCTV 정보", saveArray.length, "개 저장");