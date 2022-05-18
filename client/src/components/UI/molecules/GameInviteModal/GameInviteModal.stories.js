import React from 'react';
import GameInviteModal from './GameInviteModal';

export default {
  title: 'Molecules/GameInviteModal',
  component: GameInviteModal,
};

const Template = (args) => <GameInviteModal {...args} />;

export const DefaultGameInviteModal = Template.bind({});
DefaultGameInviteModal.args = {
  isOpen:true
};

