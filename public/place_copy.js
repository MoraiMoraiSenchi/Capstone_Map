function findRes(latlng)
{
    return new Promise(function(resolve)
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
                    if(key.distance <= 13) score += 0.25
                    else score += (13/key.distance);
                }
                if(score >=5) score = 5;
                score = score.toFixed(1);
                score = Number.parseFloat(score);
                resolve(score);
            }
        };
        places.keywordSearch('음식점', callback, { location : latlng, radius : 200, sort : kakao.maps.services.SortBy.DISTANCE},);
        delete places
    });
}

function findCon(latlng)
{
    return new Promise(function(resolve)
    {
        var places = new kakao.maps.services.Places();
        var score = 0;

        var callback = function(result, status, pagination){
            if(status == 'ZERO_RESULT') resolve(score);
            if (status === kakao.maps.services.Status.OK)
            {
                if(pagination.hasNextPage)
                {
                    pagination.nextPage();
                }
                for (const key of result)
                {
                    if(key.distance <= 20) score +=0.25;
                    else score += (20/key.distance);
                }
                resolve(score);
            }
        };
    
        places.keywordSearch('편의점', callback, { location : latlng, radius : 100, sort : kakao.maps.services.SortBy.DISTANCE}); // category_group_code == 'CS2'
        
        delete places;
    });
}

function findMart(latlng)
{
    return new Promise(function(resolve)
    {
        var places = new kakao.maps.services.Places();
        var score = 0;

        var callback = function(result, status, pagination){
            if(status == 'ZERO_RESULT') resolve(score);

            if (status === kakao.maps.services.Status.OK)
            {
                if(pagination.hasNextPage)
                {
                    pagination.nextPage();
                }
                for (const key of result)
                {
                    if(key.distance <= 20) score +=0.25;
                    else score += (15/key.distance);
                }
                resolve(score);
            }
        };
        
        places.keywordSearch('마트', callback, { location : latlng, radius : 200, sort : kakao.maps.services.SortBy.DISTANCE}); // category_name == "가정,생활 > 슈퍼마켓"
        
        delete places;
    });
}

function findLaundry(latlng)
{
    return new Promise(function(resolve)
    {
        var places = new kakao.maps.services.Places();
        var score = 0;

        var callback = function(result, status, pagination){
            if(status == 'ZERO_RESULT') resolve(score);

            if (status === kakao.maps.services.Status.OK)
            {
                if(pagination.hasNextPage)
                {
                    pagination.nextPage();
                }
                for (const key of result)
                {
                    if(key.distance <= 20) score +=0.25;
                    else score += (15/key.distance);
                }
                resolve(score);
            }
        };
        
        places.keywordSearch('세탁소', callback, { location : latlng, radius : 200, sort : kakao.maps.services.SortBy.DISTANCE}); // category_name == "가정,생활 > 세탁소"

        delete places;
    });
}
function findHair(latlng)
{
    return new Promise(function(resolve)
    {
        var places = new kakao.maps.services.Places();
        var score = 0;

        var callback = function(result, status, pagination){

            if(status == 'ZERO_RESULT') resolve(score);

            if (status === kakao.maps.services.Status.OK)
            {
                if(pagination.hasNextPage)
                {
                    pagination.nextPage();
                }
                for (const key of result)
                {
                    if(key.distance <= 20) score +=0.25;
                    else score += (10/key.distance);
                }
                resolve(score);
            }
        };
        
        places.keywordSearch('미용실', callback, { location : latlng, radius : 200, sort : kakao.maps.services.SortBy.DISTANCE}); // category_name == "가정,생활 > 미용 > 미용실"
        
        delete places;
    });
}
function findStudy(latlng)
{
    return new Promise(function(resolve)
    {
        var places = new kakao.maps.services.Places();
        var score = 0;

        var callback = function(result, status, pagination){
            if(status == 'ZERO_RESULT') resolve(score);

            if (status === kakao.maps.services.Status.OK)
            {
                if(pagination.hasNextPage)
                {
                    pagination.nextPage();
                }
                for (const key of result)
                {
                    if(key.distance <= 20) score +=0.25;
                    else score += (15/key.distance);
                }
                resolve(score);
            }
        };
        
        places.keywordSearch('스터디카페', callback, { location : latlng, radius : 250, sort : kakao.maps.services.SortBy.DISTANCE}); // category_name == "서비스,산업 > 전문대행 > 공간대여 > 스터디카페,스터디룸"
        
        delete places;
    });
}

function findBank(latlng)
{
    return new Promise(function(resolve)
    {
        var places = new kakao.maps.services.Places();
        var score = 0;

        var callback = function(result, status, pagination){

            if(status == 'ZERO_RESULT') resolve(score);

            if (status === kakao.maps.services.Status.OK)
            {
                if(pagination.hasNextPage)
                {
                    pagination.nextPage();
                }
                for (const key of result)
                {
                    if(key.distance <= 20) score +=0.25;
                    else score += (10/key.distance);
                }
                resolve(score);
            }
        };
        
        places.keywordSearch('은행', callback, { location : latlng, radius : 500, sort : kakao.maps.services.SortBy.DISTANCE}); // category_group_code == "BK9"
        
        delete places;
    });
}

function findHospital(latlng)
{
    return new Promise(function(resolve)
    {
        var places = new kakao.maps.services.Places();
        var score = 0;

        var callback = function(result, status, pagination){
            if(status == 'ZERO_RESULT') resolve(score);

            if (status === kakao.maps.services.Status.OK)
            {
                if(pagination.hasNextPage)
                {
                    pagination.nextPage();
                }
                for (const key of result)
                {
                    if(key.distance <= 20) score +=0.25;
                    else score += (10/key.distance);
                }
                resolve(score);
            }
        };
        
        places.keywordSearch('병원', callback, { location : latlng, radius : 1000, sort : kakao.maps.services.SortBy.DISTANCE}); // category_group_Code == "HP8"
        
        delete places;
    });
}

function findPhar(latlng)
{
    return new Promise(function(resolve)
    {
        var places = new kakao.maps.services.Places();
        var score = 0;

        var callback = function(result, status, pagination){
            if(status == 'ZERO_RESULT') resolve(score);

            if (status === kakao.maps.services.Status.OK)
            {
                if(pagination.hasNextPage)
                {
                    pagination.nextPage();
                }
                for (const key of result)
                {
                    if(key.distance <= 20) score +=0.25;
                    else score += (10/key.distance);
                }
                resolve(score);
            }
        };
        
        places.keywordSearch('약국', callback, { location : latlng, radius : 500, sort : kakao.maps.services.SortBy.DISTANCE}); // category_group_code == "PM9"
        
        delete places;
    });
}

function findPC(latlng)
{
    return new Promise(function(resolve)
    {
        var places = new kakao.maps.services.Places();
        var score = 0;

        var callback = function(result, status, pagination){
            if(status == 'ZERO_RESULT') resolve(score);

            if (status === kakao.maps.services.Status.OK)
            {
                if(pagination.hasNextPage)
                {
                    pagination.nextPage();
                }
                for (const key of result)
                {
                    if(key.distance <= 13) score +=0.25;
                    else score += (13/key.distance);
                }
                resolve(score);                
            }
        };
        places.keywordSearch('PC방', callback, { location : latlng, radius : 250, sort : kakao.maps.services.SortBy.DISTANCE});

        delete places;
    })
}

function findGameRoom(latlng)
{
    return new Promise(function(resolve)
    {
        var places = new kakao.maps.services.Places();
        var score = 0;

        var callback = function(result, status, pagination){
            if(status == 'ZERO_RESULT') resolve(score);
            
            if (status === kakao.maps.services.Status.OK)
            {
                if(pagination.hasNextPage)
                {
                    pagination.nextPage();
                }
                for (const key of result)
                {
                    if(key.distance <= 13) score +=0.25;
                    else score += (13/key.distance);
                }
                resolve(score);   
            }
        };
        places.keywordSearch('오락실', callback, { location : latlng, radius : 250, sort : kakao.maps.services.SortBy.DISTANCE});    

        delete places;
    })
}

function findBar_Play(latlng)
{
    return new Promise(function(resolve)
    {
        var places = new kakao.maps.services.Places();
        var score = 0;

        var callback = function(result, status, pagination){
            if(status == 'ZERO_RESULT') resolve(score);
            
            if (status === kakao.maps.services.Status.OK)
            {
                if(pagination.hasNextPage)
                {
                    pagination.nextPage();
                }
                for (const key of result)
                {
                    if(key.distance <= 13) score +=0.25;
                    else score += (13/key.distance);
                }
                resolve(score);                
            }
        };
        places.keywordSearch('술집', callback, { location : latlng, radius : 250, sort : kakao.maps.services.SortBy.DISTANCE});  
        
        delete places;
    })
}

function findComic(latlng)
{
    return new Promise(function(resolve)
    {
        var places = new kakao.maps.services.Places();
        var score = 0;

        var callback = function(result, status, pagination){
            if(status == 'ZERO_RESULT') resolve(score);
            
            if (status === kakao.maps.services.Status.OK)
            {
                if(pagination.hasNextPage)
                {
                    pagination.nextPage();
                }
                for (const key of result)
                {
                    if(key.distance <= 13) score +=0.25;
                    else score += (13/key.distance);
                }
                resolve(score);       
            }
        };
        places.keywordSearch('만화카페', callback, { location : latlng, radius : 250, sort : kakao.maps.services.SortBy.DISTANCE});   
        
        delete places;
    })
}
function findTheater(latlng)
{
    return new Promise(function(resolve)
    {
        var places = new kakao.maps.services.Places();
        var score = 0;

        var callback = function(result, status, pagination){
            if(status == 'ZERO_RESULT') resolve(score);
            
            if (status === kakao.maps.services.Status.OK)
            {
                if(pagination.hasNextPage)
                {
                    pagination.nextPage();
                }
                for (const key of result)
                {
                    if(key.distance <= 13) score +=0.25;
                    else score += (13/key.distance);
                }
                resolve(score);        
            }
        };
        places.keywordSearch('영화관', callback, { location : latlng, radius : 1000, sort : kakao.maps.services.SortBy.DISTANCE});     
        
        delete places;
    })
}

function findBar(latlng)
{
    return new Promise(function(resolve)
    {
        var places = new kakao.maps.services.Places();
        var score = 0;

        var callback = function(result, status, pagination){
            if(status == 'ZERO_RESULT') resolve(score);

            if (status === kakao.maps.services.Status.OK)
            {
                if(pagination.hasNextPage)
                {
                    pagination.nextPage();
                }
                for (const key of result)
                {
                    if(key.distance <= 50) score += 0.25;
                    else score += (13/key.distance);
                }

                resolve(score);
            }
        };
        places.keywordSearch('술집', callback, { location : latlng, radius : 100, sort : kakao.maps.services.SortBy.DISTANCE});  

        delete places;
    })
}
