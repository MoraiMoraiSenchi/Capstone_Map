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
                score += (13/key.distance);
            }
            if(score >=5) score = 5;
            cb(score);
        }
    };
    places.keywordSearch('음식점', callback, { location : latlng, radius : 250});
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
                score += (13/key.distance);
            }
            if(score >=5) score = 5;
            cb(score);
        }
    };
    places.keywordSearch('편의점', callback, { location : latlng, radius : 50});
    places.keywordSearch('마트', callback, { location : latlng, radius : 100});
    places.keywordSearch('세탁소', callback, { location : latlng, radius : 250});
    places.keywordSearch('미용실', callback, { location : latlng, radius : 250});
    places.keywordSearch('스터디카페', callback, { location : latlng, radius : 500});
    places.keywordSearch('은행', callback, { location : latlng, radius : 250});
    places.keywordSearch('병원', callback, { location : latlng, radius : 500});
    places.keywordSearch('약국', callback, { location : latlng, radius : 250});
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
            cb(score);
        }
    };
    places.keywordSearch('PC방', callback, { location : latlng, radius : 200});
    places.keywordSearch('오락실', callback, { location : latlng, radius : 200});
    places.keywordSearch('술집', callback, { location : latlng, radius : 200});
    places.keywordSearch('만화카페', callback, { location : latlng, radius : 200});    
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
                score += (13/key.distance);
            }
            if(score >=5) score = 5;
            cb(score);
        }
    };
    places.keywordSearch('편의점', callback, { location : latlng, radius : 50});
    places.keywordSearch('마트', callback, { location : latlng, radius : 100});
    places.keywordSearch('세탁소', callback, { location : latlng, radius : 250});
    places.keywordSearch('미용실', callback, { location : latlng, radius : 250});
    places.keywordSearch('스터디카페', callback, { location : latlng, radius : 500});
    places.keywordSearch('은행', callback, { location : latlng, radius : 250});
    places.keywordSearch('병원', callback, { location : latlng, radius : 500});
    places.keywordSearch('약국', callback, { location : latlng, radius : 250});
}

function findBar(latlng, cb)
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
            cb(score);
        }
    };
    places.keywordSearch('술집', callback, { location : latlng, radius : 100});  
}