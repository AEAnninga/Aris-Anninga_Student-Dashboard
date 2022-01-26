import { createSlice } from '@reduxjs/toolkit';
import { initialStudentState } from './student-slice-utils';

const studentSlice = createSlice({
    name: 'student',
    initialState: initialStudentState,
    reducers: {
        setContent(state, action) {
            const id = action.payload
            const student = state.filter(item => id === item.id)
            const index = state.indexOf(student[0])
            state[index].showStudent = !state[index].showStudent
        },
        setTopFive(state, action) {
            let index = action.payload
            state[index].topFiveFun = !state[index].topFiveFun
        },
        setHasMoreFun(state, action) {
            const index = action.payload
            state[index].hasMoreFun = true
        },
        setExcelCheckBox(state, action) {
            const index = action.payload
            state[index].excelChecked = !state[index].excelChecked
        }
    }
});

export const studentActions = studentSlice.actions;
export default studentSlice;