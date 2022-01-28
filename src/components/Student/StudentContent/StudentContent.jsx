import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import StudentInfo from './StudentInfo/StudentInfo';
import BarChart from './BarChart/BarChart';
import BarChartHorizontal from './BarChart/BarChartHorizontal'
import ExcelViewStudent from './ExcelViewStudent/ExcelViewStudent';

const StudentContent = ({ studentData, index, showStudent }) => {
    
    const horizontalBarViewOnWindowResize = useSelector(state => state.horizontalBar.showHorizontalBar);
    const showTable = useSelector(state => state.student[index].excelChecked);
    const showBar = (!horizontalBarViewOnWindowResize && !showTable) === true;
    const showHorizontal = (horizontalBarViewOnWindowResize && !showTable) === true;

    return ( 
        <div className='student-content' id='student-data'>
            {showStudent && 
                <Route path={`/${studentData.name}`}>
                    <div className='student-content-info'>
                        <StudentInfo 
                            studentData={studentData}  
                            index={index}
                        />
                    </div>
                </Route>
            }
            {!showStudent && 
                <Route path={`/${studentData.name}`}>
                    <div className='student-content-bar'>
                        {showBar && 
                            <BarChart 
                                studentData={studentData} 
                            />
                        }
                        {showHorizontal && <BarChartHorizontal studentData={studentData}/>}
                        {showTable && <ExcelViewStudent studentData={studentData}/>}
                    </div>
                </Route>
            }
        </div>
    );
};
 
export default StudentContent;