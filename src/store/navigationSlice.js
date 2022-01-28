import { createSlice } from '@reduxjs/toolkit';

const currentPath = window.location.pathname;

const initialNavState = {
    path: currentPath,
    showMenu: false,
};

const navigationSlice = createSlice({
    name: 'navigation',
    initialState: initialNavState,
    reducers: {
        setPath(state, action) {
            state.path = action.payload
        },
        toggleMenu(state) {
            state.showMenu = !state.showMenu
        },
    }
});

export const navActions = navigationSlice.actions;
export default navigationSlice;