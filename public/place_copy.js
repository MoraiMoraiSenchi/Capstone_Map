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
                for(const key of result)
                {
                    // var marker = new kakao.maps.Marker({
                    // map: map,
                    // position: new kakao.maps.LatLng(key.y, key.x)
                    // }); // 위치 마커로 확인하고 싶을 때 주석 해제할 것

                    // console.log(key);
                    if(key.distance <= threshold) score[0] += 0.25;
                    else score[0] += (coef/key.distance);
                    score[1]++;
                } 
                if(pagination.hasNextPage) pagination.nextPage();
                resolve(score);
            }
        };

        places.keywordSearch(keyword, callback, { location : latlng, radius : r, sort : kakao.maps.services.SortBy.DISTANCE});

        delete places;
    });
}