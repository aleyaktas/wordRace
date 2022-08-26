import "./App.css";
import Navbar from "./components/UI/organisms/Navbar/Navbar";
import HomePage from "./components/UI/pages/HomePage/HomePage";
import FriendsPage from "./components/UI/pages/FriendsPage/FriendsPage";
import GamePage from "./components/UI/pages/GamePage/GamePage";
import ProfilePage from "./components/UI/pages/ProfilePage/ProfilePage";
import RoomPage from "./components/UI/pages/RoomPage/RoomPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { getUser } from "./store/features/auth/authSlice";
import { useAppDispatch } from "./store";
import PrivateRoute from "./route/PrivateRoute";
import PublicRoute from "./route/PublicRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const rooms = [];
  const scores = [
    { name: "firstUser", score: 10 },
    { name: "secondUser", score: 5 },
    { name: "firstUser", score: 10 },
    { name: "secondUser", score: 5 },
    { name: "firstUser", score: 10 },
    { name: "secondUser", score: 5 },
    { name: "firstUser", score: 10 },
    { name: "secondUser", score: 5 },
    { name: "firstUser", score: 10 },
    { name: "secondUser", score: 5 },
    { name: "secondUser", score: 5 },
    { name: "firstUser", score: 10 },
  ];

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={<HomePage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="game/:roomId" element={<GamePage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="friends" element={<FriendsPage />} />
            <Route path="rooms" element={<RoomPage rooms={rooms} scores={scores} />} />
            <Route path="/*" element={<ProfilePage />} />
            <Route path="/" element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
