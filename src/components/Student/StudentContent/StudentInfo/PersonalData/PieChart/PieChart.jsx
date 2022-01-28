import React from 'react';
import { useSelector } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import { createPieChartData } from './pie-chart-utils';

const PieChart = ({ index }) => {
    
    const averages = useSelector(state => state.student[index].averages);
    const data = createPieChartData(averages).data;
    const options = createPieChartData(averages).options;
    
    return (
        <Pie 
            options={options} 
            data={data} 
        />
    )
};

export default PieChart;