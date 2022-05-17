import React from 'react';
import CreateRoomModal from './CreateRoomModal';

export default {
  title: 'Molecules/CreateRoomModal',
  component: CreateRoomModal,
};

const Template = (args) => <CreateRoomModal {...args} />;

export const DefaultCreateRoomModal = Template.bind({});
DefaultCreateRoomModal.args = {
  isOpen:true,
};

