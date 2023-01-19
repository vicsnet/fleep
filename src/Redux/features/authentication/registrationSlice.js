import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { message } from "antd";
// import * as api from "../../Api/api";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  message: "",
  token: "",
  loading: false,
  error: false,
  status: false,
  success: false,
  //   status: false,
};

export const signUpUser = createAsyncThunk(
  "auth/register",
  async (data, thunkApi) => {
    try {
      return await authService.register(data);
      //   return res
      // return await authService.register(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkApi.rejectWithValue(message);

      //   console.log(error);
      //   return isRejectedWithValue(error.response.data);
    }
  }
);

// export const signUpUser = createAsyncThunk("signupuser", async (data) => {
//   const res = await fetch(
//     "http://fleep.webhostingfree.io/public/api/user/register",
//     {
//       method: "post",

//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     }
//     );
//     const vince = await res.json()
//     return vince.status
//     // console.log(vince.status)
//     return await res.json();

// });

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
          state.token = action.payload.token
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.user = null;
      });

    //
  },
});

export const { setStatus, reset } = registrationSlice.actions;

export default registrationSlice.reducer;
