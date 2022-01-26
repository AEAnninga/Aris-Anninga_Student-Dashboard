export const createBarChartData = (studentData, averages) => {
    // averages assignments all students
    const averageDifficulties = averages.map(item => item.averageDifficulty);
    const averageFunFactors = averages.map(item => item.averageFunFactor);
    // student scores
    const assignmentNames = studentData.assignments.map(item => item.name);
    const difficulties = studentData.assignments.map(item => item.difficulty);
    const funfactors = studentData.assignments.map(item => item.funfactor);
    const studentName = studentData.name;

    return {
        data: {
            labels: [...assignmentNames],
            datasets: [
                {   
                    type: 'line',
                    label: 'Average Difficulty All Students',      
                    data: [...averageDifficulties],
                    backgroundColor: ['orange'],
                    borderColor: ['orange'],
                },
                {   
                    type: 'line',
                    label: 'Average FunFactor All Students',      
                    data: [...averageFunFactors],
                    backgroundColor: ['gold'],
                    borderColor: ['gold'],
                },
                {   type: 'bar',
                    label: 'Student Difficulty',      
                    data: [...difficulties],
                    backgroundColor: ['rgba(102, 153, 204, 0.9)'],
                    borderColor: ['#69c'],
                },
                {   
                    type: 'bar',
                    label: 'Student Funfactor',      
                    data: [...funfactors, 4.5],
                    backgroundColor: ['rgba(128, 0, 128, 0.7'],
                    borderColor: ['purple'],
                },
            ]
        },
        options: {
            plugins: {
                legend: {
                    onHover: function(event) {
                        // legend is clickable, change cursor onHover
                        // With devtools and console.log > search event, legendItem and legend to find cursor style, found it in event:
                        // console.log('hovering?', legendItem)
                        // console.log('legend', legend)
                        // console.log('hover event', event.native.target.style)
                        event.native.target.style.cursor = 'pointer';
                    },
                    onLeave: function(event) {
                        // change cursor back to default onLeave
                        event.native.target.style.cursor = '';
                    },
                },
                title: {
                    display: true,
                    text: `${studentName} Assignments Difficulty & Funfactor`,
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