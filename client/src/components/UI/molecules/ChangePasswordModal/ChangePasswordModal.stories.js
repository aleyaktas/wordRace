import React from 'react';
import ChangePasswordModal from './ChangePasswordModal';

export default {
  title: 'Molecules/ChangePasswordModal',
  component: ChangePasswordModal,
};

const Template = (args) => <ChangePasswordModal {...args} />;

export const DefaultChangePasswordModal = Template.bind({});
DefaultChangePasswordModal.args = {
  isOpen:true,
};

