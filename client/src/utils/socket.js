import socketIO from "socket.io-client";

const socket = socketIO("http://localhost:3000");

export default socket;
