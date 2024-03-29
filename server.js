const express = require("express");
const dotenv = require("dotenv");
const usersRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const profileRoute = require("./routes/profile");
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
app.use("/api/profile", profileRoute);
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

const scores = [0, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000];
const items = [
  "Bear",
  "Bird",
  "Bee",
  "Chicken",
  "Cow",
  "Deer",
  "Dog",
  "Elephant",
  "Frog",
  "Giraffe",
  "Jellyfish",
  "Koala",
  "Lion",
  "Monkey",
  "Penguin",
  "Rabbit",
  "Unicorn",
];

io.on("connection", (socket) => {
  rooms.find((room, index) => {
    if (room.players.length === 0) {
      rooms.splice(index, 1);
    }
  });
  socket.emit("get_rooms", { rooms });
  socket.broadcast.emit("get_rooms", { rooms });

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
    var item = items[Math.floor(Math.random() * items.length)];
    const { username, image } = user;
    //unique room name
    if (rooms.find((room) => room.name === roomName)) {
      socket.emit("room_name_error");
      return;
    }
    if (roomName !== "") {
      socket.join(roomId);
      const createRoom = {
        id: roomId,
        name: roomName,
        image: item,
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
            isReady: true,
            usedJokers: [],
          },
        ],
      };

      rooms.push(createRoom);
      socket.emit("room_created", { room: createRoom });
      io.emit("get_rooms", { rooms });
    }
  });

  socket.on("join_room", ({ user, roomId }) => {
    console.log(user.username);
    const { username, image } = user;
    const room = rooms.find((room) => room.id === roomId);

    if (room && room.players.length < 2) {
      socket.join(roomId);
      room.players.push({
        username,
        image,
        scoreIndex: 0,
        isYourTurn: false,
        isReady: true,
        usedJokers: [],
      });
      room.questions = CreateQuestion();
      room.players[0].isYourTurn = true;
      room.players[0].usedJokers = [];
      room.players[0].scoreIndex = 0;
      room.players[1].isYourTurn = false;
      socket.to(roomId).emit("room_joined", { room, joinUser: username });
      socket.emit("room_joined", { room, joinUser: username });
      io.emit("get_rooms", { rooms });
    }
  });

  socket.on("play_again", ({ roomId, username }) => {
    console.log("play_again");
    const room = rooms.find((room) => room.id === roomId);
    if (room) {
      room.players.map((player) => {
        if (player.username === username) {
          player.isReady = true;
          player.scoreIndex = 0;
          player.usedJokers = [];
          socket.emit("started_play_again", { room });
          socket.to(roomId).emit("started_play_again", { room });
        }
      });
      if (room.players.filter((player) => player.isReady === true).length === 2) {
        room.players[0].isYourTurn = true;
        room.players[1].isYourTurn = false;
        room.players[0].scoreIndex = 0;
        room.players[1].scoreIndex = 0;
        room.players[0].usedJokers = [];
        room.players[1].usedJokers = [];
        room.questionIndex = 0;
        room.questions = CreateQuestion();
        socket.emit("started_play_again", { room });
        socket.to(roomId).emit("started_play_again", { room });
        io.emit("get_rooms", { rooms });
      }
    }
    socket.emit("get_rooms", { rooms });
    socket.broadcast.emit("get_rooms", { rooms });
  });
  socket.on("quit_game", ({ roomId, username }) => {
    const room = rooms.find((room) => room.id === roomId);
    socket.leave(roomId);
    if (room) {
      const player = room.players.find((player) => player.username === username);
      if (player) {
        room.players = room.players.filter((player) => player.username !== username);
        room.questionIndex = 0;
      }
      if (room.players.length === 0) {
        rooms = rooms.filter((room) => room.id !== roomId);
      }

      socket.to(roomId).emit("opponent_quit", { username, room });
      //socket.emit("opponent_quit", { username, room });
    }
    socket.emit("get_rooms", { rooms });
    socket.broadcast.emit("get_rooms", { rooms });
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

  // socket.on("update_top_score", ({ roomId }) => {
  //   const room = rooms.find((room) => room.id === roomId);
  //   room.players.map(async (player) => {
  //     console.log("player", player);
  //     const user = await User.findOne({ username: player.username });
  //     if (user) {
  //       user.score += scores[player.scoreIndex];
  //       console.log(player.scoreIndex);
  //       await user.save();
  //     }
  //     console.log("user", user);
  //   });
  // });

  // update top score

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

    if (room.id === roomId) {
      room.players.map(async (player) => {
        const user = await User.findOne({ username: player.username });
        if (user) {
          console.log("user", user);
          console.log("player", player);
          user.score += scores[player.scoreIndex];
          await user.save();
          player.scoreIndex = 0;
          player.usedJokers = [];
          player.isReady = false;
        }
      });
      room.players[0].isYourTurn = true;
      room.players[1].isYourTurn = false;
      room.questionIndex = 0;
    }

    console.log("result", room.players);

    socket.to(roomId).emit("game_finished", { result, room });
    socket.emit("game_finished", { result, room });
    io.emit("get_rooms", { rooms });
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
      findRoom.questionIndex = 0;

      socket.leave(findRoom.id);
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

      if (index !== -1) {
        console.log("disconnected room");
        room.players.splice(index, 1);
        if (room.players.length === 0) {
          const indexRoom = rooms.indexOf(room);
          rooms.splice(indexRoom, 1);
          return io.emit("get_rooms", { rooms });
        }
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
