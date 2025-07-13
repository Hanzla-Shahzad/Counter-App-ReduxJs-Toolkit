import { configureStore } from "@reduxjs/toolkit";
import counter from "../slice/mainSlice";

export const store = configureStore({
  reducer: {
    counter: counter,
  },
});
