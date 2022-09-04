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

io.on("connection", (socket) => {
  socket.on("friend_request", ({ username }) => {
    socket.broadcast.emit("incoming_request", { username });
  });
  socket.on("friend_accept", ({ username }) => {
    socket.broadcast.emit("accepted_request", { username });
  });
  socket.on("friend_delete", ({ username }) => {
    socket.broadcast.emit("deleted_friend", { username });
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

let port = process.env.PORT || 5001;

http.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
