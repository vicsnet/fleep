import { configureStore } from "@reduxjs/toolkit";
import createEventReducer from "../features/createEventSlice";
import AddUserReducer from "../features/addUserSlice";
import UsersEventReducer from "../features/usersEventSlice";
import uploadDPReducer from "../features/uploadDPSlice";
import usersReducer from "../features/usersSlice";
import walletReducer from "../features/wallet/walletSlice";

export const store = configureStore({
  reducer: {
    crtEvent: createEventReducer,
    crtAddUser: AddUserReducer,
    crtUsrsEvent: UsersEventReducer,
    uploadDp: uploadDPReducer,
    users: usersReducer,
    wallet: walletReducer,
  },
});
