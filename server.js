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
const CreateQuestion = require("./utils/CreateQuestion");
const User = require("./models/User");
dotenv.config();

connectDB();
app.use(express.json());
app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/privateWord", privateWordRoute);
app.use(fileUpload({ useTempFiles: true }));
let rooms = [];
/* 
  room = 
  {
     id: string;
     name: string;
     image: string;
     timer: number;
     isPublic: boolean;
     questions: [
      {
        question: string;
        a: string;
        b: string;
        c: string;
        d: string;
        answer: string: 
      },
      {
        question: string;
        a: string;
        b: string;
        c: string;
        d: string;
        answer: string: 
      },
      {
        question: string;
        a: string;
        b: string;
        c: string;
        d: string;
        answer: string: 
      },
     ],
     players: [
      {
        username: string;
        score: number;
        image: string;
        isYourTurn: boolean;
      },
      {
        username: string;
        score: number;
        image: string;
        isYourTurn: boolean;
      }
     ]
  }

*/
let users = [];
let isReadyCount = 0;
const scores = [0, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000];

io.on("connection", (socket) => {
  socket.emit("get_rooms", { rooms });
  socket.on("friend_request", ({ username }) => {
    socket.broadcast.emit("incoming_request", { username });
  });

  socket.on("friend_accept", ({ username }) => {
    socket.broadcast.emit("accepted_request", { username });
  });

  socket.on("friend_delete", ({ username }) => {
    socket.broadcast.emit("deleted_friend", { username });
  });

  socket.on("create_room", ({ user, roomName, roomId, timer, isPublic }) => {
    const { username, image } = user;
    socket.join(roomId);
    const createRoom = {
      id: roomId,
      name: roomName,
      image: "Bear",
      timer,
      isPublic,
      questions: [],
      questionIndex: 0,
      messages: [],
      players: [
        {
          username,
          image,
          scoreIndex: 0,
          isYourTurn: true,
          usedJokers: [],
        },
      ],
    };
    rooms.push(createRoom);
    socket.emit("room_created", { room: createRoom });
    io.emit("get_rooms", { rooms });
  });

  socket.on("join_room", ({ user, roomId }) => {
    const { username, image } = user;
    const room = rooms.find((room) => room.id === roomId);
    isReadyCount += 1;
    if (room && room.players.length < 2) {
      socket.join(roomId);
      room.players.push({
        username,
        image,
        scoreIndex: 0,
        isYourTurn: false,
        usedJokers: [],
      });
      room.questions = CreateQuestion();
      socket.to(roomId).emit("room_joined", { room, joinUser: username });
      socket.emit("room_joined", { room, joinUser: username });
      io.emit("get_rooms", { rooms });
      isReadyCount = 0;
    }
  });

  socket.on("play_again", ({ roomId, username }) => {
    console.log("play_again");
    const room = rooms.find((room) => room.id === roomId);
    if (room) {
      room.questionIndex = 0;
      room.players.forEach((player) => {
        if (player.username === username) {
          player.scoreIndex = 0;
          player.usedJokers = [];
          isReadyCount += 1;
        }
        room.questions = CreateQuestion();
      });
      room.players[0].isYourTurn = true;
    }
    console.log(isReadyCount);

    if (isReadyCount === 1) {
      room.players.forEach((player) => {
        {
          player.username === username && player.isYourTurn === true;
        }
      });
      socket.emit("started_play_again", { room, isReadyCount });
    } else if (isReadyCount === 2) {
      io.to(roomId).emit("started_play_again", { room, isReadyCount });
      isReadyCount = 0;
    }
    console.log(room.players);
  });

  socket.on("quit_game", ({ roomId, username }) => {
    const room = rooms.find((room) => room.id === roomId);
    const player = room.players.find((player) => player.username === username);
    if (room) {
      if (player) {
        room.players = room.players.filter((player) => player.username !== username);
      }
      // console.log(room.players);
      socket.to(roomId).emit("opponent_quit", { username, room });
    }
  });

  socket.on("correct_answer", ({ username, roomId }) => {
    const room = rooms.find((room) => room.id === roomId);
    room.players.forEach((player) => {
      if (player.username === username) {
        player.scoreIndex += 1;
        player.isYourTurn = false;
      }
    });
    const nextPlayer = room.players.find((player) => player.username !== username);
    const indexNextPlayer = room.players.indexOf(nextPlayer);
    if (nextPlayer) {
      room.players[indexNextPlayer].isYourTurn = true;
    }
    if (room.questionIndex < room.questions.length - 1) {
      room.questionIndex += 1;
    }
    socket.to(roomId).emit("correct_answered", { room });
    socket.emit("correct_answered", { room });
  });

  socket.on("wrong_answer", ({ username, roomId }) => {
    const room = rooms.find((room) => room.id === roomId);
    room.players.forEach((player) => {
      if (player.username === username) {
        player.isYourTurn = false;
      }
    });
    const nextPlayer = room.players.find((player) => player.username !== username);
    const indexNextPlayer = room.players.indexOf(nextPlayer);
    if (nextPlayer) {
      room.players[indexNextPlayer].isYourTurn = true;
    }
    if (room.questionIndex < room.questions.length - 1) {
      room.questionIndex += 1;
    }
    socket.to(roomId).emit("wrong_answered", { room });
    socket.emit("wrong_answered", { room });
  });

  socket.on("game_over", ({ roomId }) => {
    const room = rooms.find((room) => room.id === roomId);
    let result;
    //find winner player
    result = room.players.reduce((prev, current) => (prev.scoreIndex > current.scoreIndex ? prev : current));
    //find equal score players
    const equalScorePlayers = room.players.filter((player) => player.scoreIndex === result.scoreIndex);

    if (equalScorePlayers.length > 1) {
      result = "draw";
    }

    room.players.map(async (player) => {
      const user = await User.findOne({ username: player.username });
      if (user) {
        user.score += scores[player.scoreIndex];
        await user.save();
      }
    });

    console.log("game over");
    console.log(room.players);
    socket.to(roomId).emit("game_finished", { result, room });
    socket.emit("game_finished", { result, room });
  });

  socket.on("fifty_fifty_joker", ({ username, roomId }) => {
    const room = rooms.find((room) => room.id === roomId);
    room.players.map((player) => {
      if (player.username === username) {
        player.usedJokers.push("fifty_fifty");
      }
    });
    const question = room.questions[room.questionIndex];
    const answer = question.answer;
    const wrongAnswers = [];
    if (answer !== "a") {
      wrongAnswers.push("a");
    }
    if (answer !== "b") {
      wrongAnswers.push("b");
    }
    if (answer !== "c") {
      wrongAnswers.push("c");
    }
    if (answer !== "d") {
      wrongAnswers.push("d");
    }
    const randomIndex = Math.floor(Math.random() * wrongAnswers.length);
    const wrongAnswer = wrongAnswers[randomIndex];
    console.log(room.players);
    wrongAnswers.map((item) => {
      if (item !== wrongAnswer) {
        question[item] = "";
      }
    });
    room.questions[room.questionIndex] = question;
    socket.emit("fifty_fifty_joker_used", { room });
  });

  socket.on("double_chance_joker", ({ username, roomId }) => {
    const room = rooms.find((room) => room.id === roomId);
    room.players.map((player) => {
      if (player.username === username) {
        player.usedJokers.push("double_chance");
      }
    });
    socket.emit("double_chance_joker_used", { room });
  });

  socket.on("send_message", ({ username, roomId, msg }) => {
    const room = rooms.find((room) => room.id === roomId);
    const findMe = room.players.find((player) => player.username === username);
    const message = {
      username,
      msg,
      img: findMe.image,
    };
    room.messages.push(message);
    socket.to(roomId).emit("message_received", { message });
    socket.emit("message_received", { message });
  });

  socket.on("invite_user", ({ username, ownerUser }) => {
    console.log(ownerUser);
    rooms.forEach((room) => {
      console.log(room.players);
      if (room.players.find((player) => player.username === ownerUser)) {
        console.log("room");
        io.emit(`invited_${username}`, { room });
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

  socket.on("left_room", ({ username }) => {
    //find room according to username
    const findRoom = rooms.find((room) => room.players.find((player) => player.username === username));
    // console.log(findRoom?.players);
    if (findRoom) {
      //player delete according to username
      const findPlayer = findRoom.players.find((player) => player.username === username);
      const indexPlayer = findRoom.players.indexOf(findPlayer);
      findRoom.players.splice(indexPlayer, 1);
      // console.log(findRoom?.players);
      if (findRoom.players.length === 0) {
        const indexRoom = rooms.indexOf(findRoom);
        rooms.splice(indexRoom, 1);
        return io.emit("get_rooms", { rooms });
      }
      const nextPlayer = findRoom.players.find((player) => player.username !== username);
      const indexNextPlayer = findRoom.players.indexOf(nextPlayer);
      if (nextPlayer) {
        findRoom.players[indexNextPlayer].isYourTurn = true;
      }
      socket.to(findRoom.id).emit("leave_room", { room: findRoom });
      socket.emit("leave_room", { room: findRoom });
      io.emit("get_rooms", { rooms });
    }
  });

  socket.on("disconnect", () => {
    let disconnectUser = socket.handshake.query.username;
    let indexUser = users.findIndex((x) => x.username === disconnectUser);
    if (indexUser !== -1) {
      users.splice(indexUser, 1);
    }
    socket.emit("online_users", { users });
    socket.broadcast.emit("online_users", { users });

    rooms.forEach((room) => {
      let index = room.players.findIndex((x) => x.username === disconnectUser);
      // console.log(index);
      if (index !== -1) {
        console.log("disconnected room");
        room.players.splice(index, 1);
        socket.to(room.id).emit("leave_room", { room, disconnectUser });
        socket.emit("leave_room", { room, disconnectUser });
        io.emit("get_rooms", { rooms });
      }
    });
  });
});

let port = process.env.PORT || 5001;

http.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
