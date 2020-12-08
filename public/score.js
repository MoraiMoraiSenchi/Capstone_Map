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

async function updateChart(latlng, chart, Tra, Safety)
{
    Con = await findCon(latlng) 
    + await findMart(latlng) 
    + await findLaundry(latlng) 
    + await findHair(latlng) 
    + await findStudy(latlng) 
    + await findHospital(latlng) 
    + await findBank(latlng) 
    + await findPhar(latlng);
    
    Res = await findRes(latlng);
    Safety -= await findBar(latlng);
    Play = await findPC(latlng) + await findGameRoom(latlng) + await findComic(latlng) + await findBar_Play(latlng) + await findTheater(latlng);


    Con = make_range(Con);
    Safety = make_range(Safety);
    Play = make_range(Play);

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
}