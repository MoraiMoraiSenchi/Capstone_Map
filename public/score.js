function TRA_score(bcArr) // 교통성 점수 내는 함수
{
    var score = 0;
    var i = 0;
    var index = bcArr[0];
    
    for(i=1; i<index; i++)
    {
        score += (100/bcArr[i]);
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
    var index = bcArr[0][0];
    
    for(i=index+1; i<bcArr.length; i++)
    {
        score += (75/bcArr[i]);
    }
    return score;
}

function ShowText(C, S, R, T, P)
{
    document.getElementById("Con").innerHTML = C.toFixed(1);
    document.getElementById("Safety").innerHTML = S.toFixed(1);
    document.getElementById("Res").innerHTML = R.toFixed(1);
    document.getElementById("Tra").innerHTML = T.toFixed(1);
    document.getElementById("Play").innerHTML = P.toFixed(1);
}

function make_range(x)
{
    if(x > 5) x = 5;
    if(x < 0) x = 0;
    return x = Number.parseFloat(x.toFixed(1));
}

async function updateChart(latlng, chart, Tra, Safety, cb)
{
    var Con = 0, Play = 0;
    ConArray = new Array();
    PlayArray = new Array();

    var Res = await findPlace(latlng, '음식점', 200, 13, 13);
    var Pub = await findPlace(latlng, '술집', 100, 50, 13);

    ConArray.push(await findPlace(latlng, '편의점', 100, 20, 20));
    ConArray.push(await findPlace(latlng, '마트', 200, 20, 15));
    ConArray.push(await findPlace(latlng, '세탁소', 200, 20, 15));
    ConArray.push(await findPlace(latlng, '미용실', 200, 20, 10));
    ConArray.push(await findPlace(latlng, '스터디카페', 250, 20, 15));
    ConArray.push(await findPlace(latlng, '은행', 500, 20, 10));
    ConArray.push(await findPlace(latlng, '병원', 500, 20, 10));
    ConArray.push(await findPlace(latlng, '약국', 500, 20 ,10));

    //console.log(ConArray);

    PlayArray.push(await findPlace(latlng, 'PC방', 250, 13, 13));
    PlayArray.push(await findPlace(latlng, '오락실', 250, 13, 13));
    PlayArray.push(await findPlace(latlng, '만화카페', 250, 13, 13));
    PlayArray.push(await findPlace(latlng, '술집', 250, 13, 13));
    PlayArray.push(await findPlace(latlng, '노래방', 250, 13, 13));
    PlayArray.push(await findPlace(latlng, '영화관', 1000, 13, 13));

    for(const key of ConArray) Con += key[0];
    for(const key of PlayArray) Play += key[0];
    
   
    Con = make_range(Con);

    Safety -= Pub[0];
    Safety = make_range(Safety);

    Res[0] = make_range(Res[0]);

    Play = make_range(Play);

    var r = Math.random() * 255;
    var g = Math.random() * 255;
    var b = Math.random() * 255;
    var str = 'rgba(' + r.toFixed(0) + ', ' + g.toFixed(0) + ', ' + b.toFixed(0) + ', 0.3)';

    chart.data.datasets.forEach((dataset) =>{
        dataset.data = [Con, Safety, Res[0], Tra, Play];
        dataset.backgroundColor = str;
    });

    chart.update();
    ShowText(Con, Safety, Res[0], Tra, Play);

    cb(ConArray, Pub, Res, PlayArray);
}