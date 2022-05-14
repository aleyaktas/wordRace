import React from 'react';
import LoginModal from './LoginModal';

export default {
  title: 'Molecules/LoginModal',
  component: LoginModal,
};

const Template = (args) => <LoginModal {...args} />;

export const DefaultLoginModal = Template.bind({});
DefaultLoginModal.args = {
  isOpen:true,
};

