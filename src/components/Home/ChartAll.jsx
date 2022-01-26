import React from 'react';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { createChartAllData } from './chart-all-utils';

const ChartAll = () => {
    
    const averages = useSelector(state => state.average.assignments);
    const data = createChartAllData(averages).data;
    const options = createChartAllData(averages).options;

    return (
        <div id='chart-all'>
            <Bar 
                options={options}
                data={data} 
            />
        </div>
    );
};
 
export default ChartAll;