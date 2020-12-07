function make_Circle(m)
{
    circle_1 = new kakao.maps.Circle({
        radius: 100, // 미터 단위의 원의 반지름입니다
        strokeWeight: 1, // 선의 두께입니다
        strokeColor: '#', // 선의 색깔입니다
        strokeOpacity: 0.5, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: 'solid', // 선의 스타일 입니다
        fillColor: '#3588F3', // 채우기 색깔입니다
        fillOpacity: 0.1, // 채우기 불투명도 입니다
        position: map.getCenter()
    });

    circle_2 = new kakao.maps.Circle({
        radius: 200, // 미터 단위의 원의 반지름입니다
        strokeWeight: 1, // 선의 두께입니다
        strokeColor: '#', // 선의 색깔입니다
        strokeOpacity: 0.5, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: 'solid', // 선의 스타일 입니다
        fillColor: '#C08035', // 채우기 색깔입니다
        fillOpacity: 0.1, // 채우기 불투명도 입니다
        position: map.getCenter()
    });

    circle_3 = new kakao.maps.Circle({
        radius: 500, // 미터 단위의 원의 반지름입니다
        strokeWeight: 1, // 선의 두께입니다
        strokeColor: '#', // 선의 색깔입니다
        strokeOpacity: 0.5, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: 'solid', // 선의 스타일 입니다
        fillColor: '#295321', // 채우기 색깔입니다
        fillOpacity: 0.1, // 채우기 불투명도 입니다
        position: map.getCenter()
    });

    circle_1.setMap(m);
    circle_2.setMap(m);
    circle_3.setMap(m);
}

function draw_Circle(ll) // 원 그리는 함수
{
    circle_1.setPosition(ll);
    circle_2.setPosition(ll);
    circle_3.setPosition(ll);
}