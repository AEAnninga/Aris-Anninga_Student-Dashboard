import React from 'react';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { createBarChartData } from './bar-chart-utils';

const BarChart = ({ studentData }) => {
    // studentData could also be obtained from state by using index (must be passed as prop from StudentContent) 
    // averages all assignments from all students from state
    const averages = useSelector(state => state.average.assignments);

    // studentData (props) and averages (state) into function to keep component clean
    const barChartData = createBarChartData(studentData, averages);

    // function returned object with properties data and option:
    const data = barChartData.data;
    const options = barChartData.options;
   
    return (
        <div className='student-content-bar-chart'>
            <Bar 
                options={options}
                data={data}
            />
        </div>
    );
};
 
export default BarChart;