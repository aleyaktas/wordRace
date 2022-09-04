import "./App.css";
import Navbar from "./components/UI/organisms/Navbar/Navbar";
import HomePage from "./components/UI/pages/HomePage/HomePage";
import FriendsPage from "./components/UI/pages/FriendsPage/FriendsPage";
import GamePage from "./components/UI/pages/GamePage/GamePage";
import ProfilePage from "./components/UI/pages/ProfilePage/ProfilePage";
import RoomPage from "./components/UI/pages/RoomPage/RoomPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import PrivateRoute from "./route/PrivateRoute";
import PublicRoute from "./route/PublicRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import setAuthToken from "./utils/setAuthToken";

function App() {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, []);

  const rooms = [
    { name: "Room 1", image: "Bear" },
    { name: "Room 2", image: "Cat" },
    { name: "Room 3", image: "Bird" },
    { name: "Room 4", image: "Bug" },
    { name: "Room 5", image: "Crown" },
    { name: "Room 6", image: "Elephant" },
    { name: "Room 7", image: "Flower" },
    { name: "Room 8", image: "Turtle" },
  ];
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
      </PersistGate>
    </Provider>
  );
}

export default App;
