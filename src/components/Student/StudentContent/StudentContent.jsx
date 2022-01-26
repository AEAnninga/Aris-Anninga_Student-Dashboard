import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import StudentInfo from './StudentInfo/StudentInfo';
import BarChart from './BarChart/BarChart';
import ExcelViewStudent from './ExcelViewStudent/ExcelViewStudent';

const StudentContent = ({ studentData, index, showStudent }) => {
    
    const excelViewOnWindowResize = useSelector(state => state.excel.view);
    const showAssignmentsTable = useSelector(state => state.student[index].excelChecked);
    const showTable = (!excelViewOnWindowResize && showAssignmentsTable) === true;
    const showBar = (!excelViewOnWindowResize && !showAssignmentsTable) === true;

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
                        {excelViewOnWindowResize && <ExcelViewStudent studentData={studentData}/>}
                        {showTable && <ExcelViewStudent studentData={studentData}/>}
                    </div>
                </Route>
            }
        </div>
    );
};
 
export default StudentContent;