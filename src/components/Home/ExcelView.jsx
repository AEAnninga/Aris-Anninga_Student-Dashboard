import React from 'react';
import { useSelector } from 'react-redux';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

const ExcelView = () => {
    
    const averages = useSelector(state => state.average.assignments);
    const rowData = [...averages];

    return (
        <div className="ag-theme-material" id='excel-view-home' >
            <AgGridReact rowData={rowData}>
                <AgGridColumn field="name" sortable={true} resizable={true}></AgGridColumn>
                <AgGridColumn field="averageDifficulty" sortable={true} resizable={true}></AgGridColumn>
                <AgGridColumn field="averageFunFactor" sortable={true} resizable={true}></AgGridColumn>
            </AgGridReact>
        </div>
    );
};
 
export default ExcelView;