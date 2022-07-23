import React from "react";
import ForgotPasswordModal from "./ForgotPasswordModal";

export default {
  title: "Molecules/ForgotPasswordModal",
  component: ForgotPasswordModal,
};

const Template = (args) => <ForgotPasswordModal {...args} />;

export const DefaultForgotPasswordModal = Template.bind({});
DefaultForgotPasswordModal.args = {
  isOpen: true,
};
