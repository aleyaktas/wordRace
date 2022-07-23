import React from "react";
import RoomPage from "./RoomPage";

export default {
  title: "Pages/RoomPage",
  component: RoomPage,
};

const Template = (args) => <RoomPage {...args} />;

export const DefaultRoomPage = Template.bind({});
DefaultRoomPage.args = {
  rooms: [
    { name: "Room 1", image: "Bear" },
    { name: "Room 2", image: "Cat" },
    { name: "Room 3", image: "Bird" },
    { name: "Room 4", image: "Bug" },
    { name: "Room 5", image: "Crown" },
    { name: "Room 6", image: "Elephant" },
    { name: "Room 7", image: "Flower" },
    { name: "Room 8", image: "Turtle" },
  ],
  scores: [
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
  ],
};

export const NoRoomPage = Template.bind({});
NoRoomPage.args = {
  rooms: [],
  scores: [
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
  ],
};
