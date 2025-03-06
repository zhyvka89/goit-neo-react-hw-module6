import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    changeFilter(state, { payload }) {
      return payload;
    },
  },
});

export const getFilter = (state) => state.filter;

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;