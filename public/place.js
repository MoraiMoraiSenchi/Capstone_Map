function findCafe(latlng, cb)
{
    var places = new kakao.maps.services.Places();
    var callback = function(result, status){
        if (status === kakao.maps.services.Status.OK)
        {
            console.log(result);
            cb(result.length);
        }
    };

    places.keywordSearch('카페', callback, { location : latlng, radius : 100});
}