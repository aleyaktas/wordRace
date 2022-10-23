import axios from "axios";

export const getTopScores = async (setTopScores) => {
  const res = await axios.get("/api/auth/getTopScores");
  setTopScores(res.data);
};
