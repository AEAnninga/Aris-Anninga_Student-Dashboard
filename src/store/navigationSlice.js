import { createSlice } from '@reduxjs/toolkit';

const currentPath = window.location.pathname;

const initialNavState = {
    path: currentPath,
};

const navigationSlice = createSlice({
    name: 'navigation',
    initialState: initialNavState,
    reducers: {
        setPath(state, action) {
            state.path = action.payload
        }
    }
});

export const navActions = navigationSlice.actions;
export default navigationSlice;