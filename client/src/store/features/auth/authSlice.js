import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import setAuthToken from "../../../utils/setAuthToken";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: null,
  message: null,
  loading: null,
};

export const registerUser = createAsyncThunk("registerUser", async ({ username, email, password }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ username, email, password });
  const res = await axios.post("/api/users/", body, config);
  return res.data;
});

export const loginUser = createAsyncThunk("loginUser", async ({ username, password }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username, password });
  const res = await axios.post("/api/auth", body, config);
  return res.data;
});

export const getUser = createAsyncThunk("getUser", async () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  const res = await axios.get("/api/auth/me");
  return res.data;
});

export const addFriend = createAsyncThunk("addFriend", async ({ username }, { rejectWithValue }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username });
  try {
    const res = await axios.post("/api/auth/addFriend", body, config);
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

export const acceptFriend = createAsyncThunk("acceptFriend", async ({ username }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ username });
  const res = await axios.post("/api/auth/acceptFriend", body, config);
  return res.data;
});

export const rejectFriend = createAsyncThunk("rejectFriend", async ({ username }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username });
  const res = await axios.post("/api/auth/rejectFriend", body, config);
  return res.data;
});

export const deleteFriend = createAsyncThunk("deleteFriend", async ({ username }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username });
  const res = await axios.post("/api/auth/deleteFriend", body, config);
  return res.data;
});

export const getFriends = createAsyncThunk("getFriends", async ({ username }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ username });
  const res = await axios.get("/api/auth/friends", body, config);
  return res.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem("token");
      state.isAuthenticated = false;
      setAuthToken(null);
      state.user = {};
      state.loading = false;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
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
      state.isAuthenticated = true;
      state.loading = false;
      state.token = localStorage.getItem("token");
      setAuthToken(localStorage.getItem("token"));
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
      state.isAuthenticated = true;
      state.loading = false;
      state.token = localStorage.getItem("token");
      setAuthToken(localStorage.getItem("token"));
    });
    builder.addCase(addFriend.pending, (state, action) => {
      state.error = "";
      state.message = "Loading";
    });

    builder.addCase(addFriend.rejected, (state, action) => {
      state.message = action.payload.error;
      toast(action.payload.error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: "warning",
        style: {
          fontSize: "1.8rem",
        },
      });
    });

    builder.addCase(addFriend.fulfilled, (state, action) => {
      state.message = "Friend added";
      toast(state.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          fontSize: "1.8rem",
        },
      });
    });
    builder.addCase(acceptFriend.pending, (state, action) => {
      state.error = "";
    });

    builder.addCase(acceptFriend.rejected, (state, action) => {
      state.error = action.error.message;
    });

    builder.addCase(acceptFriend.fulfilled, (state, action) => {
      state.message = "Friend request accepted";
    });

    builder.addCase(deleteFriend.pending, (state, action) => {
      state.error = "";
    });

    builder.addCase(deleteFriend.rejected, (state, action) => {
      state.error = action.error.message;
    });

    builder.addCase(deleteFriend.fulfilled, (state, action) => {
      state.message = "Friend deleted";
    });

    builder.addCase(rejectFriend.pending, (state, action) => {
      state.error = "";
    });

    builder.addCase(rejectFriend.rejected, (state, action) => {
      state.error = action.error.message;
    });

    builder.addCase(rejectFriend.fulfilled, (state, action) => {
      state.message = "Friend request rejected";
    });
    builder.addCase(getFriends.pending, (state, action) => {
      state.error = "";
    });

    builder.addCase(getFriends.rejected, (state, action) => {
      state.error = action.error.message;
    });

    builder.addCase(getFriends.fulfilled, (state, action) => {
      state.user.friends = action.payload.friends;
      state.user.pendingRequests = action.payload.pendingRequests;
    });
    builder.addCase(getUser.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(getUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      localStorage.removeItem("token");
      state.token = null;
      setAuthToken(null);
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isAuthenticated = action.payload?._id ? true : false;
      state.loading = false;
      state.user = action.payload;
      state.token = localStorage.getItem("token");
      setAuthToken(localStorage.getItem("token"));
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
