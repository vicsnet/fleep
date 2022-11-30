import { createSlice } from "@reduxjs/toolkit";

const uploadDPSlice = createSlice({
  name: "uploadDPSlice",
  initialState: {
    open: true,
    imageOpen: true,
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
    uploadOpenImage: (state, action) => {
      state.imageOpen = action.payload;
    },
    uploadCloseImage: (state, action) => {
      state.imageOpen = !action.payload;
    },
  },
});

export const { openImage, closeImage, uploadOpenImage, uploadCloseImage } =
  uploadDPSlice.actions;

export default uploadDPSlice.reducer;
