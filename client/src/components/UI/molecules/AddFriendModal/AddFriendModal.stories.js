import React from 'react';
import AddFriendModal from './AddFriendModal';

export default {
  title: 'Molecules/AddFriendModal',
  component: AddFriendModal,
};

const Template = (args) => <AddFriendModal {...args} />;

export const DefaultAddFriendModal = Template.bind({});
DefaultAddFriendModal.args = {
  isOpen:true,
};

