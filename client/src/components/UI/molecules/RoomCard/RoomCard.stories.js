import React from 'react';
import RoomCard from './RoomCard';

export default {
  title: 'Molecules/RoomCard',
  component: RoomCard,
};

const Template = (args) => <RoomCard {...args} />;

export const DefaultRoomCard = Template.bind({});
DefaultRoomCard.args = {
  width:"220px",
  height:"200px",
  roomName:"Room Name"
};

