import socketIO from "socket.io-client";
// const socket = socketIO("http://localhost:5001");

const socket = socketIO("https://api-wordrace.aleynaaktas.com");

export default socket;
