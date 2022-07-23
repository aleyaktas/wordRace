import React from "react";
import RoomCardList from "./RoomCardList";

export default {
  title: "Organisms/RoomCardList",
  component: RoomCardList,
};

const Template = (args) => <RoomCardList {...args} />;

export const DefaultRoomCardList = Template.bind({});
DefaultRoomCardList.args = {
  rooms: [
    { name: "Room 1", image: "Bear" },
    { name: "Room 2", image: "Cat" },
  ],
};
