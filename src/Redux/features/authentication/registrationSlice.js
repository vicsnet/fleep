import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import * as api from "../../Api/api";

const initialState = {
  msg: "",
  user: "",
  token: "",
  loading: false,
  error: "",
  status: false,
};

export const signUpUser = createAsyncThunk(
  "auth/register",
  async ({ data }, { rejectWithValue }) => {
    try {
      const response = await api.registration(data);
      return response.data;
    } catch (error) {
      console.log(error);
      return isRejectedWithValue(error.response.data);
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
  name: "user",

  initialState,
  reducers: {},
  extraReducers: {
    [signUpUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signUpUser.fulfilled]: (state, { payload: { error, msg } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
      }
    },
    [signUpUser.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export default registrationSlice.reducer;
