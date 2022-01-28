import { createSlice } from '@reduxjs/toolkit';

const initialHorizontalBarState = {
    showHorizontalBar: false,
};

const horizontalBarSlice = createSlice({
    name: 'horizontalBar',
    initialState: initialHorizontalBarState,
    reducers: {
        setShowHorizontalBar(state, action) {
            state.showHorizontalBar = action.payload
        }
    }
});

export const horizontalBarActions = horizontalBarSlice.actions;
export default horizontalBarSlice;