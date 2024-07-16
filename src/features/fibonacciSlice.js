import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  series: [],
  history: [],
  status: 'idle',
  error: null,
};

const fibonacciSlice = createSlice({
  name: 'fibonacci',
  initialState,
  reducers: {
    generateSeries: (state, action) => {
      const { x, y, n } = action.payload;
      const series = [x, y];
      for (let i = 2; i < n + 2; i++) {
        series.push(series[i - 1] + series[i - 2]);
      }
      state.series = series.reverse();
      state.history.push({ series: state.series, time: new Date().toLocaleTimeString() });
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { generateSeries, setError } = fibonacciSlice.actions;

export default fibonacciSlice.reducer;
