import { createSlice } from '@reduxjs/toolkit';

const initialWindowState = {
    width: window.innerWidth,
};

const windowSlice = createSlice({
    name: 'window',
    initialState: initialWindowState,
    reducers: {
        setWidth(state) {
            state.width = window.innerWidth; 
        },
    }
});

export const windowActions = windowSlice.actions;
export default windowSlice;