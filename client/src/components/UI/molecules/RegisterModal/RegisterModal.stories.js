import React from 'react';
import RegisterModal from './RegisterModal';

export default {
  title: 'Molecules/RegisterModal',
  component: RegisterModal,
};

const Template = (args) => <RegisterModal {...args} />;

export const DefaultRegisterModal = Template.bind({});
DefaultRegisterModal.args = {
  isOpen:true,
};

