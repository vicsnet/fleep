import { configureStore } from "@reduxjs/toolkit";
import createEventReducer from "../features/createEventSlice";
import AddUserReducer from "../features/addUserSlice";
import UsersEventReducer from "../features/usersEventSlice";

export const store = configureStore({
  reducer: {
    crtEvent: createEventReducer,
    crtAddUser: AddUserReducer,
    crtUsrsEvent: UsersEventReducer,
  },
});
