import "./App.css";
import Navbar from "./components/UI/organisms/Navbar/Navbar";
import HomePage from "./components/UI/pages/HomePage/HomePage";
import FriendsPage from "./components/UI/pages/FriendsPage/FriendsPage";
import GamePage from "./components/UI/pages/GamePage/GamePage";
import ProfilePage from "./components/UI/pages/ProfilePage/ProfilePage";
import RoomPage from "./components/UI/pages/RoomPage/RoomPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="friends" element={<FriendsPage />} />
          <Route path="game/:roomId" element={<GamePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="rooms" element={<RoomPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
