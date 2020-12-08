function findPlace(latlng, keyword, r, threshold, coef)
{
    return new Promise(function(resolve)
    {
        var places = new kakao.maps.services.Places();
        var score = [];
        score[0] = 0, score[1] = 0;

        var callback = function(result, status, pagination){
            if(status =='ZERO_RESULT') resolve(score);
            if(status === kakao.maps.services.Status.OK)
            {
                if(pagination.hasNextpage)
                {
                    pagination.nextPage();
                }
                for(const key of result)
                {
                    if(key.distance <= threshold) score[0] += 0.25;
                    else score[0] += (coef/key.distance);
                    score[1]++;
                }
                resolve(score);
            }
        };

        places.keywordSearch(keyword, callback, { location : latlng, radius : r, sort : kakao.maps.services.SortBy.DISTANCE});

        delete places;
    });
}