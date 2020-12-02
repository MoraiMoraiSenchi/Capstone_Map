function make_Circle(m)
{
    circle_1 = new kakao.maps.Circle({
        radius: 100, // 미터 단위의 원의 반지름입니다
        strokeWeight: 1, // 선의 두께입니다
        strokeColor: '#75B8FA', // 선의 색깔입니다
        strokeOpacity: 0.5, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: 'solid', // 선의 스타일 입니다
        fillColor: '#CFE7FF', // 채우기 색깔입니다
        fillOpacity: 0.5, // 채우기 불투명도 입니다
        position: map.getCenter()
    });

    circle_2 = new kakao.maps.Circle({
        radius: 200, // 미터 단위의 원의 반지름입니다
        strokeWeight: 1, // 선의 두께입니다
        strokeColor: '#123456', // 선의 색깔입니다
        strokeOpacity: 0.5, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: 'solid', // 선의 스타일 입니다
        fillColor: '#654321', // 채우기 색깔입니다
        fillOpacity: 0.3, // 채우기 불투명도 입니다
        position: map.getCenter()
    });
    circle_1.setMap(m);
    circle_2.setMap(m);
}

function draw_Circle(ll)
{
    circle_1.setPosition(ll);
    circle_2.setPosition(ll);
}
