import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increament: (state) => {
      state.value++;
    },
    decreament: (state) => {
      state.value--;
    },
    resetCount: (state) => {
      state.value = 100;
    },
  },
});
export const { increament, decreament, resetCount } = counterSlice.actions;
export default counterSlice.reducer;
