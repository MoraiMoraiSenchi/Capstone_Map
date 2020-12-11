function Con_Click(Con){
    document.getElementById("info_p").innerText="편의는 주변의 생활 서비스 관련 가게들을 고려한 점수입니다";
    if(Con == undefined)
        document.getElementById("count_p").innerText= "지도를 클릭해주세요\n";
    else
         document.getElementById("count_p").innerText= 
        "주변에 편의점이 " + Con[0][1] + "개, " +
        "마트가 " + Con[1][1] + "개 있습니다\n" +
        "세탁소가 " + Con[2][1] + "개 있습니다\n" +
        "미용실이 " + Con[3][1] + "개 있습니다\n" +
        "스터디카페가 " + Con[4][1] + "개 있습니다\n" +
        "은행/ATM이 " + Con[5][1] + "개 있습니다\n" +
        "병원이 " + Con[6][1] + "개, " +
        "약국이 " + Con[7][1] + "개\n" +
        "헬스장이 " + Con[8][1] + "개 있습니다";

    return 1;
}

function Safety_Click(bcArr, Pub){
    
    document.getElementById("info_p").innerText="안전은 주변의 CCTV와 술집을 고려한 점수입니다\n 가까운 곳에 술집이 있으면 점수가 내려갑니다";

    if(bcArr[0] == undefined) 
        document.getElementById("count_p").innerText= "지도를 클릭해주세요\n";
    else 
        document.getElementById("count_p").innerText= "주변에 CCTV가 " + (bcArr.length-bcArr[0]-1) + "개 있습니다\n" + "너무 가까운 술집이 " + Pub[1] + "개 있습니다";

    return 2;
}

function Res_Click(Res){
    document.getElementById("info_p").innerText="먹거리는 주변의 음식점들을 고려한 점수입니다";
    if(Res == undefined)
        document.getElementById("count_p").innerText = "지도를 클릭해주세요\n";
    else
        document.getElementById("count_p").innerText = 
        "주변에 한식점이 " + Res[0][1] + "개, " +
        "양식점은 " + Res[1][1] + "개\n" +
        "중식점은 " + Res[2][1] + "개, " +
        "일식점은 " + Res[3][1] + "개\n" +
        "분식점은 " + Res[4][1] + "개, " +
        "패스트푸드점은 " + Res[5][1] + "개 있습니다";

    return 3;
}

function Tra_Click(bcArr){
    document.getElementById("info_p").innerText="교통성은 주변의 버스 정류장을 고려한 점수입니다"

    if(bcArr[0] == undefined) 
        document.getElementById("count_p").innerText= "지도를 클릭해주세요\n";
    else 
        document.getElementById("count_p").innerText="주변에 버스 정류장이 " + bcArr[0] + "개 있습니다"
    
    return 4;
}

function Play_Click(Play){
    document.getElementById("info_p").innerText = "놀거리는 주변의 PC방, 영화관, 노래방 등의\n 여가시설을 고려한 점수입니다";
    if(Play == undefined)
        document.getElementById("count_p").innerText = "지도를 클릭해주세요";
    else
        document.getElementById("count_p").innerText =
        "주변에 PC방이 " + Play[0][1] + "개, " +
        "오락실이 " + Play[1][1] + "개 있습니다\n" +
        "만화 카페는 " + Play[2][1] + "개 있습니다\n" +
        "노래방은 " + Play[3][1] + "개 있습니다\n" +
        "영화관은 " + Play[4][1] + "개 있습니다\n" +
        "술집은 " + (Play[5][1] + + Play[6][1] + Play[7][1]) + "개 있습니다\n";
    
    return 5;
}

function updateText(status, bcArr, Con, Res, Pub, Play)
{
    if(status === 0) return;
    if(status === 1) Con_Click(Con);
    if(status === 2) Safety_Click(bcArr, Pub);
    if(status === 3) Res_Click(Res);
    if(status === 4) Tra_Click(bcArr);
    if(status === 5) Play_Click(Play);
}