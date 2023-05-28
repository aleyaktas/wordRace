import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import setAuthToken from "../../../utils/setAuthToken";
import { showMessage } from "../../../utils/showMessage";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: null,
  message: null,
  loading: null,
  onlineUsers: [],
  rooms: [],
};

export const registerUser = createAsyncThunk("registerUser", async ({ username, email, password }, { rejectWithValue }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ username, email, password });
  try {
    const res = await axios.post("/api/users/", body, config);
    return res.data;
  } catch (err) {
    console.log(err);
    console.log(username, email, password);
    return rejectWithValue(err.response.data.errors);
  }
});

export const loginUser = createAsyncThunk("loginUser", async ({ username, password }, { rejectWithValue }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username, password });
  try {
    const res = await axios.post("/api/auth", body, config);
    return res.data;
  } catch (err) {
    console.log(err);
    return rejectWithValue(err.response.data);
  }
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

export const editProfile = createAsyncThunk("editProfile", async ({ url }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const body = JSON.stringify({ url });
    const res = await axios.post("/api/auth/editProfile", body, config);
    return res.data;
  } catch (err) {
    return err.response.data;
  }
});

export const changePassword = createAsyncThunk("changePassword", async ({ oldPassword, newPassword }, { rejectWithValue }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ password: oldPassword, newPassword });
  try {
    const res = await axios.post("/api/profile/changePassword", body, config);
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

export const forgotPassword = createAsyncThunk("forgotPassword", async ({ email }, { rejectWithValue }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log({ email });
  const body = JSON.stringify({ email });
  console.log(body);
  try {
    const res = await axios.post("/api/profile/forgotPassword", body, config);
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
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
    getOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload.users;
    },
    getRooms: (state, action) => {
      state.rooms = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(registerUser.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
      console.log(action.payload);
      showMessage(action.payload[0].msg, "error");
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
      showMessage(action.payload.msg, "error");
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
      showMessage(action.payload.error, "error");
    });

    builder.addCase(addFriend.fulfilled, (state, action) => {
      state.message = "Friend request send";
      showMessage("Friend request send", "success");
    });
    builder.addCase(acceptFriend.pending, (state, action) => {
      state.error = "";
    });

    builder.addCase(acceptFriend.rejected, (state, action) => {
      state.error = action.error.message;
    });

    builder.addCase(acceptFriend.fulfilled, (state, action) => {
      state.message = "Friend request accepted";
      showMessage("Friend request accepted", "success");
    });

    builder.addCase(deleteFriend.pending, (state, action) => {
      state.error = "";
    });

    builder.addCase(deleteFriend.rejected, (state, action) => {
      state.error = action.error.message;
    });

    builder.addCase(deleteFriend.fulfilled, (state, action) => {
      state.message = "Friend deleted";
      showMessage("Friend deleted", "success");
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
    builder.addCase(editProfile.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(editProfile.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(editProfile.fulfilled, (state, action) => {
      state.user.profileImage = action.payload;
      state.loading = false;
    });
    builder.addCase(changePassword.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(changePassword.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(changePassword.fulfilled, (state, action) => {
      state.loading = false;
    });
  },
});

export const { logout, getOnlineUsers, getRooms } = authSlice.actions;
export default authSlice.reducer;
