import React from 'react';
import { useSelector } from 'react-redux';
import { Radar } from 'react-chartjs-2';
import { 
    getTopFive, 
    createChartDataDifficult, 
    createChartDataFun 
} from './radar-chart-utils';

const RadarChart = ({ studentData, index }) => {
    const assignments = studentData.assignments;
    
    // boolean to handle top 5 view
    const funActive = useSelector(state => state.student[index].topFiveFun);

    // get top 5 from assignments
    const topFiveDifficult = getTopFive(assignments, 'difficulty');
    const topFiveFun = getTopFive(assignments, 'funfactor');

    // top 5 difficult chart data
    const dataDifficult = createChartDataDifficult(topFiveDifficult).data;
    const optionsDifficult = createChartDataDifficult(topFiveDifficult).options;
    const difficultChartTitle = optionsDifficult.plugins.title.text;
    
    // top 5 fun chart data
    const dataFun = createChartDataFun(topFiveFun).data;
    const optionsFun = createChartDataFun(topFiveFun).options; 
    const funChartTitle = optionsFun.plugins.title.text;
  
    return (  
        <div className='student-content-info-radar'>
            <div>
                <h1>{funActive ? funChartTitle : difficultChartTitle}</h1>
            </div>
            <section>
                <Radar
                    options={funActive ? optionsFun : optionsDifficult} 
                    data={funActive ? dataFun : dataDifficult}
                />
            </section>
        </div>
    );
};
 
export default RadarChart;