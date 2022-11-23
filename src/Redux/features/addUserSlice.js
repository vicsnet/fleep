import { createSlice } from "@reduxjs/toolkit";

const addUserSlice = createSlice({
  name: "addUserSlice",
  initialState: {
    open: true,
    error: "",
    loading: false,
  },
  reducers: {
    openAddUser: (state, action) => {
      state.open = action.payload;
    },

    closeAddUser: (state, action) => {
      state.open = !action.payload;
    },
  },
});

export const { openAddUser, closeAddUser } = addUserSlice.actions;

export default addUserSlice.reducer