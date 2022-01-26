export const createPieChartData = averages => {

    return {
        data: {
            labels: ['Avg. Difficulty', 'Avg. Fun'],
            datasets: [
                {   
                    data: [averages.difficulty, averages.funfactor],
                    backgroundColor: [
                        'rgba(102,153,204, 0.7)',
                        'rgba(128,0,128,0.7)',
                    ],
                    rotation: -180,
                },
            ]
        },
        options: {
            normalized: true,
            plugins: {
                legend: {
                    onHover: function(event) {
                        event.native.target.style.cursor = 'pointer'
                    },
                    onLeave: function(event) {
                        event.native.target.style.cursor = ''
                    },
                    labels: {
                        boxWidth: 12,
                        borderRadius: 50,
                        usePointStyle: true,
                        pointStyle: 'circle',
                    }
                },
                title: {
                    display: false,
                    text: 'Ratio Fun vs. Difficult',
                    color:'#69c',
                    font: {
                        size:26
                    },
                    padding:{
                        top:30,
                        bottom:30
                    },
                    responsive:true,
                    animation:{
                        animateScale: true,
                    }
                }
            }
        }
    }
};