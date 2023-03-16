import { createSlice } from "@reduxjs/toolkit";

export const usersEventSlice = createSlice({
  name: "usersEventSlice",
  initialState: {
    open: true,
    email:"",
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

    userEmailEvent:(state, action)=>{
      state.email = action.payload
    }
  },
});

export const { openUsersEvent, closeUsersEvent, userEmailEvent } = usersEventSlice.actions;

export default usersEventSlice.reducer;
