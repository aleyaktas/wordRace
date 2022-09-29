const express = require("express");
const dotenv = require("dotenv");
const usersRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const privateWordRoute = require("./routes/privateWord");
const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const cors = require("cors");
app.use(cors());

const connectDB = require("./config/db");
const fileUpload = require("express-fileupload");
dotenv.config();

connectDB();
app.use(express.json());
app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/privateWord", privateWordRoute);
app.use(fileUpload({ useTempFiles: true }));

let rooms = [];
let users = [];

io.on("connection", async (socket) => {
  socket.on("friend_request", ({ username }) => {
    socket.broadcast.emit("incoming_request", { username });
  });
  socket.on("friend_accept", ({ username }) => {
    socket.broadcast.emit("accepted_request", { username });
  });
  socket.on("friend_delete", ({ username }) => {
    socket.broadcast.emit("deleted_friend", { username });
  });

  socket.on("create_room", ({ username, roomName, roomId }) => {
    socket.join(roomId);
    rooms.push({ id: roomId, name: roomName, image: "Bear", players: [username] });
    socket.emit("room_created", { rooms });
    socket.broadcast.emit("room_created", { rooms });
    socket.emit("get_rooms", { rooms });
  });
  socket.emit("get_rooms", { rooms });

  socket.on("join_room", function (username, roomId) {
    rooms.forEach((room) => {
      if (room.id === roomId) {
        if (room.players.length < 2) {
          socket.join(roomId);
          room.players.push(username);
          socket.emit("room_joined", { room });
        }
      }
    });
  });
  socket.on("invite_user", ({ username, ownerUser }) => {
    rooms.forEach((room) => {
      if (room.players.includes(ownerUser)) {
        io.emit(`invited_${username}`, { roomId: room.id, roomName: room.name, roomImage: room.image, roomPlayers: room.players });
      }
    });
  });

  socket.on("user_status", ({ findUsername }) => {
    let index = users.findIndex((x) => x.username === findUsername);

    if (index === -1) {
      users.push({ username: findUsername });
      socket.emit("online_users", { users });
      socket.broadcast.emit("online_users", { users });
    }
  });
  socket.on("logout_user", ({ username }) => {
    let indexUser = users.findIndex((x) => x.username === username);
    if (indexUser !== -1) {
      users.splice(indexUser, 1);
    }
    socket.emit("online_users", { users });
    socket.broadcast.emit("online_users", { users });
  });

  socket.on("disconnect", () => {
    let disconnectUser = socket.handshake.query.username;
    let indexUser = users.findIndex((x) => x.username === disconnectUser);
    if (indexUser !== -1) {
      users.splice(indexUser, 1);
    }
    socket.emit("online_users", { users });
    socket.broadcast.emit("online_users", { users });
  });
});

let port = process.env.PORT || 5001;

http.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
