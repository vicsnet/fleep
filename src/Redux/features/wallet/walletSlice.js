import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "walletSlice",
  initialState: {
    open: true,
    error: "",
    loading: false,
  },
  reducers: {
    openWithdrawToBank: (state, action) => {
      state.open = action.payload;
    },
    closeWithdrawToBank: (state, action) => {
      state.open = !action.payload;
    },
    openAddAcct: (state, action) => {
      state.open = action.payload;
    },
    closeAddAcct: (state, action) => {
      state.open = !action.payload;
    },
  },
});

export const { openWithdrawToBank, closeWithdrawToBank, openAddAcct, closeAddAcct } = walletSlice.actions;

export default walletSlice.reducer;
