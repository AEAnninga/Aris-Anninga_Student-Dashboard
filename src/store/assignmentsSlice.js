import { createSlice } from '@reduxjs/toolkit'
import { averageAllAssignments } from './assignments-utils';

const initialAverageAssignmentsState = {
    assignments: [...averageAllAssignments],
};  

const assignmentsAverageSlice = createSlice({
    name: 'average',
    initialState: initialAverageAssignmentsState,
});

export default assignmentsAverageSlice;