import axios from "axios";

export const getScore = async (setScore) => {
  const res = await axios.get("/api/auth/getScore");
  setScore(res.data);
};
