import { createSlice } from '@reduxjs/toolkit';

const initialExcelState = {
    view: false,
    showAssignmentsTable: false,
};

const excelSlice = createSlice({
    name: 'excel',
    initialState: initialExcelState,
    reducers: {
        setView(state, action) {
            state.view = action.payload
        },
        setShowAssignmentsTable(state) {
            state.showAssignmentsTable = !state.showAssignmentsTable
        }
    }
});

export const excelActions = excelSlice.actions;
export default excelSlice;