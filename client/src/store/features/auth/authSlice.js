import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import setAuthToken from "../../../utils/setAuthToken";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: null,
};

export const loadUser = createAsyncThunk("loadUser", async () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  const res = await axios.get("/api/auth");
  return res.data;
});

export const registerUser = createAsyncThunk("registerUser", async ({ username, email, password }, { dispatch }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ username, email, password });
  const res = await axios.post("/api/users/", body, config);

  await localStorage.setItem("token", res.data.token);
  await dispatch(loadUser());

  return res.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadUser.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(loadUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = action.payload?._id ? true : false;
      state.loading = false;
    });
    builder.addCase(registerUser.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(registerUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
  },
});

export default authSlice.reducer;
