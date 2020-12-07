var rad = new Array();

function findRes(latlng, cb)
{
    var places = new kakao.maps.services.Places();
    var score = 0;

    var callback = function(result, status, pagination){
        if (status === kakao.maps.services.Status.OK)
        {
            if(pagination.hasNextPage)
            {
                pagination.nextPage();
            }
            for (const key of result)
            {
                score += (8/key.distance);
            }
            if(score >=5) score = 5;
            score = score.toFixed(1);
            score = Number.parseFloat(score);
            cb(score);
        }
    };
    places.keywordSearch('음식점', callback, { location : latlng, radius : 150, sort : kakao.maps.services.SortBy.DISTANCE},);
}

function findCon(latlng, cb)
{
    var places = new kakao.maps.services.Places();
    var score = 0;

    var callback = function(result, status, pagination){
        if (status === kakao.maps.services.Status.OK)
        {
            if(pagination.hasNextPage)
            {
                pagination.nextPage();
            }
            for (const key of result)
            {
                if(key.category_group_code == 'CS2')
                {
                    score += (20/key.distance);
                    
                }
                if(key.category_name == "가정,생활 > 슈퍼마켓")
                {
                    score += (15/key.distance);
                }
                if(key.category_name == "가정,생활 > 세탁소")
                {
                    score += (15/key.distance);
                }
                if(key.category_name == "가정,생활 > 미용 > 미용실")
                {
                    score += (10/key.distance);
                }
                if(key.category_name == "서비스,산업 > 전문대행 > 공간대여 > 스터디카페,스터디룸")
                {
                    score += (15/key.distance);
                }
                if(key.category_group_code == "BK9")
                {
                    score += (10/key.distance);
                }
                if(key.category_group_code == "HP8")
                {
                    score += (10/key.distance);
                }
                if(key.category_group_code == "PM9")
                {
                    score += (10/key.distance);
                }
            }
            if(score >=5) score = 5;
            score = score.toFixed(1);
            score = Number.parseFloat(score);
            cb(score);
        }
    };
    places.keywordSearch('편의점', callback, { location : latlng, radius : 100, sort : kakao.maps.services.SortBy.DISTANCE}); // category_group_code == 'CS2'
    places.keywordSearch('마트', callback, { location : latlng, radius : 200, sort : kakao.maps.services.SortBy.DISTANCE}); // category_name == "가정,생활 > 슈퍼마켓"
    places.keywordSearch('세탁소', callback, { location : latlng, radius : 200, sort : kakao.maps.services.SortBy.DISTANCE}); // category_name == "가정,생활 > 세탁소"
    places.keywordSearch('미용실', callback, { location : latlng, radius : 200, sort : kakao.maps.services.SortBy.DISTANCE}); // category_name == "가정,생활 > 미용 > 미용실"
    places.keywordSearch('스터디카페', callback, { location : latlng, radius : 250, sort : kakao.maps.services.SortBy.DISTANCE}); // category_name == "서비스,산업 > 전문대행 > 공간대여 > 스터디카페,스터디룸"
    places.keywordSearch('은행', callback, { location : latlng, radius : 500, sort : kakao.maps.services.SortBy.DISTANCE}); // category_group_code == "BK9"
    places.keywordSearch('병원', callback, { location : latlng, radius : 1000, sort : kakao.maps.services.SortBy.DISTANCE}); // category_group_Code == "HP8"
    places.keywordSearch('약국', callback, { location : latlng, radius : 500, sort : kakao.maps.services.SortBy.DISTANCE}); // category_group_code == "PM9"
}


function findPlay(latlng, cb)
{
    var places = new kakao.maps.services.Places();
    var score = 0;

    var callback = function(result, status, pagination){
        if (status === kakao.maps.services.Status.OK)
        {
            if(pagination.hasNextPage)
            {
                pagination.nextPage();
            }
            for (const key of result)
            {
                score += (13/key.distance);
            }
            if(score >=5) score = 5;
            score = score.toFixed(1);
            score = Number.parseFloat(score);
            cb(score);

        }
    };
    places.keywordSearch('PC방', callback, { location : latlng, radius : 250, sort : kakao.maps.services.SortBy.DISTANCE});
    places.keywordSearch('오락실', callback, { location : latlng, radius : 250, sort : kakao.maps.services.SortBy.DISTANCE});
    places.keywordSearch('술집', callback, { location : latlng, radius : 250, sort : kakao.maps.services.SortBy.DISTANCE});
    places.keywordSearch('만화카페', callback, { location : latlng, radius : 250, sort : kakao.maps.services.SortBy.DISTANCE});
    places.keywordSearch('영화관', callback, { location : latlng, radius : 1000, sort : kakao.maps.services.SortBy.DISTANCE});     
}

function findBar(latlng, cb)
{
    var places = new kakao.maps.services.Places();
    var score = 0;

    var callback = function(result, status, pagination){
        if(status == 'ZERO_RESULT')
        {
            cb(score);
        }
        if (status === kakao.maps.services.Status.OK)
        {
            if(pagination.hasNextPage)
            {
                pagination.nextPage();
            }
            for (const key of result)
            {                
                score += (5/key.distance);
            }
            if(score >=5) score = 5;
            score = score.toFixed(1);
            score = Number.parseFloat(score);
            cb(score);

        }
    };
    places.keywordSearch('술집', callback, { location : latlng, radius : 50, sort : kakao.maps.services.SortBy.DISTANCE});  
}

function update(chart, data)
{
    chart.data.datasets.forEach((dataset) =>{
        dataset.data = data;
    });
    chart.update();
}