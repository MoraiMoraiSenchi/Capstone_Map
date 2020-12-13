const fs = require('fs');

const jsonFile = fs.readFileSync('./LIGHT_INFO_RAW.json');

const jsonData = JSON.parse(jsonFile);

saveArray = new Array();

var saveJson;

console.log("불러온 데이터 개수 : ", jsonData.length);

for (const key of jsonData)
{
    if(key.위도 != "" && key.경도 != "")
    {
        saveData = new Object(); 
        saveData.NAME = key.보안등위치명;
        saveData.LATITUDE = key.위도;
        saveData.LONGITUDE = key.경도;
        saveArray.push(saveData);
    }   
}
saveJson = JSON.stringify(saveArray);

fs.writeFileSync("./public/LIGHT_INFO.json", saveJson);
console.log("보안등 정보", saveArray.length, "개 저장");