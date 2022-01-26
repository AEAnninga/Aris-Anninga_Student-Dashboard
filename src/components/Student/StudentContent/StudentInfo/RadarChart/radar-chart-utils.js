export const getTopFive = (assignments, key) => {
    let topFive = [];
    let array = [...assignments];
    array.sort((a,b) => Number(b[key]) - Number(a[key]));
    for (let i=0;i < 5;i++) {
        topFive.push(array[i]);
    };
    return topFive;
};

export const createChartDataDifficult = array => {
    return {
        data: {
            labels: [...array.map(item => item.name)],
            datasets: [
                { 
                    label: 'Difficulty',      
                    data: [...array.map(item => item.difficulty)],
                    backgroundColor: ['rgba(30, 144, 255, 0.2)'],
                    borderColor: ['#69c']
                },
                { 
                    label: 'Funfactor',      
                    data: [...array.map(item => item.funfactor)],
                    backgroundColor: ['rgba(148, 0, 211, 0.2)'],
                    borderColor: ['purple']
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    onHover: function(event) {
                        event.native.target.style.cursor = 'pointer';
                    },
                    onLeave: function(event) {
                        event.native.target.style.cursor = '';
                    },
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'rectRot',
                    }
                },
                title: {
                    display: false,
                    text: 'Top 5 Difficult Assignments',
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
    };
};

export const createChartDataFun = array => {
    return {
        data: {
            labels: [...array.map(item => item.name)],
            datasets: [
                { 
                    label: 'Difficulty',      
                    data: [...array.map(item => item.difficulty)],
                    backgroundColor: ['rgba(30, 144, 255, 0.2)'],
                    borderColor: ['#69c']
                },
                { 
                    label: 'Funfactor',      
                    data: [...array.map(item => item.funfactor)],
                    backgroundColor: ['rgba(148, 0, 211, 0.2)'],
                    borderColor: ['purple']
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    onHover: function(event) {
                        event.native.target.style.cursor = 'pointer';
                    },
                    onLeave: function(event) {
                        event.native.target.style.cursor = '';
                    },
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'rectRot',
                    }
                },
                title: {
                    display: false,
                    text: 'Top 5 Fun Assignments',
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
    };
};