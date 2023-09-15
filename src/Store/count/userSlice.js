import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "count",
  initialState: 0,

  reducers: {
    increment: (state) => (state += 1),
    decrement: (state) => (state -= 1),

    valueByInput: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { increment, decrement, valueByInput } = userSlice.actions;

export default userSlice.reducer;
