import axios from "axios";
import store, { useAppSelector } from "../../../../store";
import { editProfile } from "../../../../store/features/auth/authSlice";

export const getScore = async (setScore) => {
  const res = await axios.get("/api/auth/getScore");
  setScore(res.data);
};

export const changePassword = async ({ oldPassword, newPassword }) => {
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
    return err.response.data;
  }
};

export const updateProfile = async ({ url }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ url });
  const res = await axios.post("/api/auth/editProfile", body, config);

  return res.data;
};
