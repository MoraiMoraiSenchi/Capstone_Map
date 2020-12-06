function TRA_score(bcArr) // 교통성 점수 내는 함수
{
    score = 0;
    var i = 0;
    var index = bcArr[0];
    
    for(i=1; i<index; i++)
    {
        score += (100/bcArr[i]);
    }

    if(score > 5) score = 5;

    score = Number.parseFloat(score).toFixed(1);
    return score;
}

function SAFETY_score(bcArr)
{    
    score = 0;
    var i = 0;
    var index = bcArr[0][0];
    
    for(i=index+1; i<bcArr.length; i++)
    {
        score += (100/bcArr[i]);
    }

    if(score > 5) score = 5;

    score = Number.parseFloat(score).toFixed(1);
    return score;
}