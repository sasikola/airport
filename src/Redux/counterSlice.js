// actions
// reducers
// store

import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: 0,
// };

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state, payload) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

// slice --> reducers + actions
