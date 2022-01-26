import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { studentActions } from '../../../store/studentSlice';
import { excelActions } from '../../../store/excelSlice';
import { ThemeProvider } from '@mui/material/styles';
import { studentNavButtonTheme } from '../button-themes';
import 'font-awesome/css/font-awesome.min.css';

const StudentMenu = ({ studentData, index, showStudent }) => {
    const studentName = studentData.name;
    const isExcel = useSelector(state => state.student[index].excelChecked);
    const windowWidth = useSelector(state => state.window.width);
    
    const dispatch = useDispatch();

    const handleContent = (id) => {
        dispatch(studentActions.setContent(id))
    };

    const handleTableView = (index) => {
        dispatch(excelActions.setShowAssignmentsTable())
        dispatch(studentActions.setExcelCheckBox(index))
    };

    return ( 
        <ThemeProvider theme={studentNavButtonTheme}>
        <div className='student-menu'>
            <div className='student-menu-buttons'>
                <NavLink to={`/${studentName}`}>
                    <Button
                        color='student' 
                        variant='contained' 
                        disabled={showStudent && true} 
                        onClick={() => handleContent(studentData.id)}
                    >
                        {studentData.name}
                    </Button>
                </NavLink>
                <NavLink to={`/${studentName}/assignments`}>
                    <Button
                        color='student' 
                        variant='contained' 
                        disabled={!showStudent && true} 
                        onClick={() => handleContent(studentData.id)}
                    >
                        Assignments
                    </Button>
                </NavLink>
                {(!showStudent && windowWidth > 1100) &&
                    <React.Fragment>
                        {!isExcel && <i id='table-icon' className="fa fa-table" onClick={() => handleTableView(index)}/>}
                        {isExcel &&  <i id='bar-icon' className="fa fa-bar-chart" onClick={() => handleTableView(index)}/>}
                    </React.Fragment>
                }
            </div>   
        </div>
        </ThemeProvider>
    );
};

export default StudentMenu;