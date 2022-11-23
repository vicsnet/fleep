import { createSlice } from "@reduxjs/toolkit";

export const usersEventSlice = createSlice({
  name: "usersEventSlice",
  initialState: {
    open: true,
    error: "",
    loading: false,
  },

  reducers: {
    openUsersEvent: (state, action) => {
      state.open = action.payload;
    },

    closeUsersEvent: (state, action) => {
      state.open = !action.payload;
    },
  },
});

export const { openUsersEvent, closeUsersEvent } = usersEventSlice.actions;

export default usersEventSlice.reducer;
