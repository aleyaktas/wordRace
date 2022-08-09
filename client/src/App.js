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
import { useAppDispatch, useAppSelector } from "./store";
import PrivateRoute from "./route/PrivateRoute";
function App() {
  const dispatch = useAppDispatch();
  const friends = [
    {
      username: "username",
      isInvite: false,
      isOnline: true,
    },
    {
      username: "username",
      isInvite: false,
      isOnline: true,
    },
    {
      username: "username",
      isInvite: false,
    },
    {
      username: "username",
      isInvite: false,
    },
    {
      username: "username",
      isInvite: false,
    },
  ];
  const pendingRequests = friends;
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const loading = useAppSelector((state) => state.auth.loading);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {loading === true || loading === undefined ? (
            ""
          ) : (
            <Route element={<PrivateRoute />}>
              <Route path="game/:roomId" element={<GamePage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="friends" element={<FriendsPage friends={friends} pendingRequests={pendingRequests} />} />
              <Route path="rooms" element={<RoomPage />} />
              <Route path="/*" element={<RoomPage />} />
            </Route>
          )}
          {loading === false ? <Route path="/*" element={<HomePage />} /> : ""}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
