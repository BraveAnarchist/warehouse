import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "counterSlice",
  initialState: {
    counter: 0,
  },
  reducers: {
    INCREMENT: function (state, action) {
      state.counter = state.counter + 1;
    },
    DECREMENT: function (state, action) {
      state.counter = state.counter - 1;
    },
  },
});

export const { INCREMENT, DECREMENT } = slice.actions;
export const counterReducer = slice.reducer;