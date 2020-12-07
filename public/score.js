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

    if(score > 5) 
    {   
        score = 5;
    }

    score = score.toFixed(1);
    score = Number.parseFloat(score);
    return score;
}