var pp = function(C, S, R, T, P)
{
    let myChart = document.getElementById('myChart').getContext('2d');

    Con = C;
    Safety = S;
    Res = R;
    Tra = T;
    Play = P;
    var callback = function(){
        
    let radarChart = new Chart(myChart, {
        type: 'radar',
        data: {
            labels: ['편의', '안전', '먹거리', '교통성', '놀거리'],
            datasets: 
            [{
                label: '점수',
                data: [Con, Safety, Res, Tra, Play],
                pointStyle: 'star',
                backgroundColor : 'rgba(168, 100, 255, 0.3)'
            }]
        },
        options: 
        {
            scale: 
            {
                ticks: {max : 5, min : 0, stepSize : 1},
                pointLabels : { fontSize : 13, fontStyle : 'bold'}
            }
        }
    });
    }

}