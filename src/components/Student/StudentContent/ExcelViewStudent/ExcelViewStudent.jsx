import React from 'react';
import { useSelector } from 'react-redux';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { createExcelData } from './excelview-student-utils';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

const ExcelViewStudent = ({ studentData }) => {

    const averages = useSelector(state => state.average.assignments);
    const rowData = createExcelData(studentData, averages);
    
    return (
        <div className="ag-theme-material" id='excel-view-student'>
            <AgGridReact
                rowData={rowData}>
                <AgGridColumn field="name" sortable={true} resizable={true}></AgGridColumn>
                <AgGridColumn field="studentDifficulty" sortable={true} resizable={true}></AgGridColumn>
                <AgGridColumn field="studentFunfactor" sortable={true} resizable={true}></AgGridColumn>
                <AgGridColumn field="averageDifficulty" sortable={true} resizable={true}></AgGridColumn>
                <AgGridColumn field="averageFunfactor" sortable={true} resizable={true}></AgGridColumn>
            </AgGridReact>
        </div>
    );
}
 
export default ExcelViewStudent;