function findPlace(latlng, keyword, r, threshold, coef, coef_tf)
{
    return new Promise(function(resolve)
    {
        var places = new kakao.maps.services.Places();
        var score = [];
        var near_point = 0.25;
        score[0] = 0, score[1] = 0;

        if(coef_tf === false)
        {
            near_point = 0;
            coef = 0;
        }

        var callback = function(result, status, pagination){
            if(status =='ZERO_RESULT') resolve(score);
            if(status === kakao.maps.services.Status.OK)
            {
                console.log(keyword, "계수 활성화 : ", coef_tf, "near_point : ", near_point, "coef : ", coef)
                for(const key of result)
                {
                    // var marker = new kakao.maps.Marker({
                    // map: map,
                    // position: new kakao.maps.LatLng(key.y, key.x)
                    // }); // 위치 마커로 확인하고 싶을 때 주석 해제할 것

                    // console.log(key);
                    if(key.distance <= threshold) 
                    {
                        score[0] += near_point;
                    }
                    else 
                    {
                        score[0] += (coef/key.distance);
                    }
                    score[1]++;
                }
                if(pagination.hasNextPage) pagination.nextPage();
                console.log(keyword,"점수 : ", score[0])
                resolve(score);
            }
        };
        coef_count++;
        places.keywordSearch(keyword, callback, { location : latlng, radius : r, sort : kakao.maps.services.SortBy.DISTANCE});
        delete places;
    });
}