import React from 'react';
import PersonalData from './PersonalData/PersonalData';
import RadarChart from './RadarChart/RadarChart';
import RadarChartButton from './RadarChart/RadarChartButton';

const StudentInfo = ({ studentData, index }) => {
    return ( 
        <React.Fragment>
                <PersonalData studentData={studentData} index={index}/>
                <RadarChartButton index={index} />
                <RadarChart studentData={studentData} index={index}/>
        </React.Fragment>
    );
};
 
export default StudentInfo;