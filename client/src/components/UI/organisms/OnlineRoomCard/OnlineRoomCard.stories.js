import React from "react";
import OnlineRoomCard from "./OnlineRoomCard";

export default {
  title: "Organisms/OnlineRoomCard",
  component: OnlineRoomCard,
};

const Template = (args) => <OnlineRoomCard {...args} />;

export const DefaultOnlineRoomCard = Template.bind({});
DefaultOnlineRoomCard.args = {
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
};
