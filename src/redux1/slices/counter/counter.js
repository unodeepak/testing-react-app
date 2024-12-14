import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  initialState: 0,
  name: "counter",
  reducers: {
    increment: (val) => val + 1,
    decrement: (val) => val - 1,
  },
});


