import { createSlice } from "@reduxjs/toolkit";

const uploadDPSlice = createSlice({
  name: "uploadDPSlice",
  initialState: {
    open: true,
    error: "",
    loading: false,
  },
  reducers: {
    openImage: (state, action) => {
      state.open = action.payload;
    },
    closeImage: (state, action) => {
      state.open = !action.payload;
    },
  },
});

export const { openImage, closeImage } = uploadDPSlice.actions;

export default uploadDPSlice.reducer;
