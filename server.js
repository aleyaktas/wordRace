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
dotenv.config();

connectDB();
app.use(express.json());
app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/privateWord", privateWordRoute);

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

let port = process.env.PORT || 5001;

http.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
