import { createSlice } from "@reduxjs/toolkit";

const AddAcctSlice = createSlice({
  name: "walletSlice",
  initialState: {
    open: true,
    error: "",
    loading: false,
  },
  reducers: {
   
    openAddAcct: (state, action) => {
      state.open = action.payload;
    },
    closeAddAcct: (state, action) => {
      state.open = !action.payload;
    },
  },
});

export const {  openAddAcct, closeAddAcct } = AddAcctSlice.actions;

export default AddAcctSlice.reducer;
