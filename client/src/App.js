import "./App.css";
import Navbar from "./components/UI/organisms/Navbar/Navbar";
import HomePage from "./components/UI/pages/HomePage/HomePage";
import FriendsPage from "./components/UI/pages/FriendsPage/FriendsPage";
import GamePage from "./components/UI/pages/GamePage/GamePage";
import ProfilePage from "./components/UI/pages/ProfilePage/ProfilePage";
import RoomPage from "./components/UI/pages/RoomPage/RoomPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";
import PublicRoute from "./route/PublicRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store, { persistor, useAppDispatch } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider, useSelector } from "react-redux";
import setAuthToken from "./utils/setAuthToken";
import socketIO from "socket.io-client";
import { getOnlineUsers } from "./store/features/auth/authSlice";
import GameInviteModal from "./components/UI/molecules/GameInviteModal/GameInviteModal";

function App() {
  const [room, setRoom] = useState({});
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, []);
  let findUsername = useSelector((state) => state.auth?.user?.username);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (findUsername !== undefined) {
      const socket = socketIO("http://localhost:3000", {
        query: {
          username: findUsername,
        },
      });
      socket.emit("user_status", { findUsername });
      socket.on("online_users", ({ users }) => {
        dispatch(getOnlineUsers({ users }));
      });
      socket.on(`invited_${findUsername}`, ({ roomId, roomName, roomImage, roomPlayers }) => {
        setIsOpen(true);
        setRoom((room) => ({
          ...room,
          roomId,
          roomName,
          roomImage,
          roomPlayers,
          username: findUsername,
        }));
      });
    }
  }, [findUsername]);

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
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ToastContainer />
          <Navbar />
          <GameInviteModal room={room} isOpen={isOpen} modalClose={() => setIsOpen(false) && setRoom({})} />
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/*" element={<HomePage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="profile" element={<ProfilePage />} />
              <Route path="friends" element={<FriendsPage />} />
              <Route path="rooms" element={<RoomPage scores={scores} />} />
              <Route path="rooms/:id" element={<GamePage firstUser="firstUser" secondUser="" />} />
              <Route path="/*" element={<RoomPage />} />
              <Route path="/" element={<RoomPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
