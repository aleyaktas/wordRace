import React from "react";
import RoomCard from "./RoomCard";

export default {
  title: "Molecules/RoomCard",
  component: RoomCard,
};

const Template = (args) => <RoomCard {...args} />;

export const DefaultRoomCard = Template.bind({});
DefaultRoomCard.args = {
  width: "22rem",
  height: "20rem",
  roomName: "Room Name",
  className: "card-container",
};
