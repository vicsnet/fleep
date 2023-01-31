import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import * as api from "../../Api/api";
import authService from "./authService";

// const user = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  // user: user ? user : null,
  user: null,
  userName:"",
  message: "",
  token: token ? token : null,
  loading: false,
  error: false,
  status: false,
  success: false,
};

export const signUpUser = createAsyncThunk(
  "auth/register",
  async (data, thunkApi) => {
    try {
      return await authService.register(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);
// lo0gin user
export const login = createAsyncThunk("auth/login", async (data, thunkApi) => {
  try {
    return await authService.login(data);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkApi.rejectWithValue(message);
  }
});

//logout
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

const registrationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.status = action.payload.status;
        state.user = action.payload;
        state.message = action.payload.message;
        // state.token = action.payload.token;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.user = null;
      })

      //login
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        // state.status = action.payload.status;
        state.user = action.payload;
        state.message = action.payload.message;
        state.userName = action.payload.full_name
        // state.token = action.payload.token;
         state.token = action.payload?.access_token;
         localStorage.setItem("token", JSON.stringify(action.payload?.access_token));
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.user = null;
      })

      //logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
    //
  },
});

export const { setStatus, reset } = registrationSlice.actions;

export default registrationSlice.reducer;
