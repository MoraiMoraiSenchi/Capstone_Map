function TRA_score(bcArr) // 교통성 점수 내는 함수
{
    var score = 0;
    var i = 0;
    var index = bcArr[0];
    
    for(i=1; i<index; i++)
    {
        if(bcArr[i] < 200) score += 0.5;
        else score += (100/bcArr[i]);
    }

    if(score > 5)
    {   
        score = 5;
    }

    score = score.toFixed(1);
    score = Number.parseFloat(score);
    return score;
}

function SAFETY_score(bcArr)
{    
    var score = 0;
    var i = 0;
    var index = bcArr[0]; // 버스 정류장 개수
    var index2 = bcArr[1]; // CCTV

    
    for(i=2+index; i<2+index+index2; i++) // CCTV 개수만큼
    {
        if(bcArr[i] < 100) score +=0.1;
        else score += (50/bcArr[i]);
    }
    console.log("CCTV 점수 : ", score);
    for(i; i<bcArr.length; i++)
    {
        score += 0.05;
    }
    console.log("보안등 점수 : ",score)
    return score;
}

function ShowText(C, S, R, T, P)
{
    document.getElementById("ConScoreBox").innerHTML = C.toFixed(1);
    document.getElementById("SafetyScoreBox").innerHTML = S.toFixed(1);
    document.getElementById("ResScoreBox").innerHTML = R.toFixed(1);
    document.getElementById("TraScoreBox").innerHTML = T.toFixed(1);
    document.getElementById("PlayScoreBox").innerHTML = P.toFixed(1);
}

function make_range(x)
{
    if(x > 5) x = 5;
    if(x < 0) x = 0;
    return x = Number.parseFloat(x.toFixed(1));
}

async function updateChart(latlng, cA, chart, Tra, Safety, cb)
{
    var totalScore = document.getElementById("TotalScoreBox");

    var Con = 0, Play = 0, Pub = 0, Res = 0;
    var ResArray = new Array();
    var ConArray = new Array();
    var PlayArray = new Array();
    var coefArray = cA;

    /* findPlace 매개변수
        latlng : 경위도 (만질필요 없음), keyword(string), 반경(m), 경계값(m), 계수 */
    // findPlace 호출 순서 바꾸면 안 됨

    ConArray.push(await findPlace(latlng, '편의점', 100, 100, 25, coefArray[coef_count]));
    ConArray.push(await findPlace(latlng, '마트', 200, 80, 20, coefArray[coef_count]));
    ConArray.push(await findPlace(latlng, '세탁소', 200, 20, 5, coefArray[coef_count]));
    ConArray.push(await findPlace(latlng, '미용실', 200, 20, 5, coefArray[coef_count]));
    ConArray.push(await findPlace(latlng, '스터디카페', 250, 60, 15, coefArray[coef_count]));
    ConArray.push(await findPlace(latlng, '은행', 500, 28, 7, coefArray[coef_count]));
    ConArray.push(await findPlace(latlng, '병원', 500, 28, 7, coefArray[coef_count]));
    ConArray.push(await findPlace(latlng, '약국', 500, 28 ,7, coefArray[coef_count]));
    ConArray.push(await findPlace(latlng, '헬스장', 250, 40 ,10, coefArray[coef_count]));

    ResArray.push(await findPlace(latlng, '한식', 200, 52, 13, coefArray[coef_count]));
    ResArray.push(await findPlace(latlng, '양식', 200, 52, 13, coefArray[coef_count]));
    ResArray.push(await findPlace(latlng, '중식', 200, 52, 13, coefArray[coef_count]));
    ResArray.push(await findPlace(latlng, '일식', 200, 52, 13, coefArray[coef_count]));
    ResArray.push(await findPlace(latlng, '분식', 200, 52, 13, coefArray[coef_count]));
    ResArray.push(await findPlace(latlng, '패스트푸드', 200, 52, 13, coefArray[coef_count]));

    PlayArray.push(await findPlace(latlng, 'PC방', 250, 52, 13, coefArray[coef_count]));
    PlayArray.push(await findPlace(latlng, '오락실', 250, 52, 13, coefArray[coef_count]));
    PlayArray.push(await findPlace(latlng, '만화카페', 250, 52, 13, coefArray[coef_count]));
    PlayArray.push(await findPlace(latlng, '노래방', 250, 52, 13, coefArray[coef_count]));
    PlayArray.push(await findPlace(latlng, '영화관', 1000, 52, 13, coefArray[coef_count]));
    PlayArray.push(await findPlace(latlng, '호프', 250, 40, 10, coefArray[coef_count]));
    PlayArray.push(await findPlace(latlng, '이자카야', 250, 40, 10, coefArray[--coef_count]));
    PlayArray.push(await findPlace(latlng, '칵테일바', 250, 40, 10, coefArray[--coef_count]));

    Pub= await findPlace(latlng, '술집', 100, 32, 8, 1); // Pub은 가장 나중에 호출할 것

    for(const key of ResArray) Res += key[0];
    for(const key of ConArray) Con += key[0];
    for(const key of PlayArray) Play += key[0];
    
    Res = make_range(Res);
    Con = make_range(Con);
    Play = make_range(Play);

    Safety -= Pub[0];
    Safety = make_range(Safety);

    var r = Math.random() * 255;
    var g = Math.random() * 255;
    var b = Math.random() * 255;
    var str = 'rgba(' + r.toFixed(0) + ', ' + g.toFixed(0) + ', ' + b.toFixed(0) + ', 0.3)';

    chart.data.datasets.forEach((dataset) =>{
        dataset.data = [Con, Safety, Res, Tra, Play];
        dataset.backgroundColor = str;
    });

    chart.update();
    ShowText(Con, Safety, Res, Tra, Play);
    totalScore.innerText = (Con+Safety+Res+Tra+Play).toFixed(1);

    cb(ConArray, Pub, ResArray, PlayArray);
}