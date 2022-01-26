export const createChartAllData = averages => {
    const assignmentNames = averages.map(item => item.name);
    const difficultyAssignments = averages.map(item => item.averageDifficulty);
    const funfactorAssignments = averages.map(item => item.averageFunFactor);

    return {
        data: {
            labels: [...assignmentNames],
            datasets: [
                {
                    label: 'Average Difficulty',
                    labelColor: 'red',    
                    data: [...difficultyAssignments],
                    backgroundColor: [
                        '#69c',
                        'lightblue',
                        'gold',
                        'orange',
                        'purple'
                    ],
                },
                {
                    label: 'Average Funfactor',    
                    data: [...funfactorAssignments],
                    backgroundColor: [
                        '#69c',
                        'lightblue',
                        'gold',
                        'orange',
                        'purple'
                    ],
                },
            ]
        },
        options: {
            indexAxis: 'x',
            plugins: {
                legend: {
                    onHover: function(event) {;
                        event.native.target.style.cursor = 'pointer';
                    },
                    onLeave: function(event) {
                        event.native.target.style.cursor = '';
                    },
                },
                title: {
                    display: true,
                    text: 'Average Difficulty and Funfactor of Assignments',
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
                },
            },
        }
    }
};