import { configureStore } from '@reduxjs/toolkit';
import allDataSlice from './dataSlice';
import assignmentsAverageSlice from './assignmentsSlice';
import navigationSlice from './navigationSlice';
import studentSlice from './studentSlice';
import windowSlice from './windowSlice';
import excelSlice from './excelSlice';
import horizontalBarSlice from './horizontalBarSlice'

export const store = configureStore({
  reducer: {
    data: allDataSlice.reducer,
    average: assignmentsAverageSlice.reducer,
    navigation: navigationSlice.reducer,
    student: studentSlice.reducer,
    window: windowSlice.reducer,
    excel: excelSlice.reducer,
    horizontalBar: horizontalBarSlice.reducer,
  },
});
