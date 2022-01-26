import { createSlice } from '@reduxjs/toolkit';
import { wincData } from '../json-to-js/data-utils';

const initialDataState = [...wincData];

const allDataSlice = createSlice({
    name: 'data',
    initialState: initialDataState,
});

export default allDataSlice;