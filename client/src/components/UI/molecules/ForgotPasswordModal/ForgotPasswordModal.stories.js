import React from "react";
import ForgotPasswordModal from "./ForgotPasswordModal";
import { Provider } from "react-redux";
import store from "../../../../store";

export default {
  title: "Molecules/ForgotPasswordModal",
  component: ForgotPasswordModal,
};

const Template = (args) => (
  <Provider store={store}>
    <ForgotPasswordModal {...args} />
  </Provider>
);
export const DefaultForgotPasswordModal = Template.bind({});
DefaultForgotPasswordModal.args = {
  isOpen: true,
};
