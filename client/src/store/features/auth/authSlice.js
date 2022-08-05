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
  return res.data;
});

export const loginUser = createAsyncThunk("loginUser", async ({ email, password }, { dispatch }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });
  const res = await axios.post("/api/auth", body, config);
  return res.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem("token");
      state.isAuthenticated = false;
      state.user = "";
      state.loading = false;
      state.token = null;
    },
  },
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
      state.isAuthenticated = action.payload?._id ? true : false;
      state.loading = false;
      state.user = action.payload;
      state.token = localStorage.getItem("token");
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
      localStorage.setItem("token", action.payload.token);
      const updatedState = { ...state };
      updatedState.isAuthenticated = false;
      updatedState.token = localStorage.getItem("token");
      return updatedState;
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      localStorage.setItem("token", action.payload.token);
      const updatedState = { ...state };
      updatedState.isAuthenticated = true;
      updatedState.token = localStorage.getItem("token");
      return updatedState;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
