import React from "react";
import { Provider } from "react-redux";
import store from "../../../../store";
import ChangePasswordModal from "./ChangePasswordModal";

export default {
  title: "Molecules/ChangePasswordModal",
  component: ChangePasswordModal,
};

const Template = (args) => (
  <Provider store={store}>
    <ChangePasswordModal {...args} />
  </Provider>
);

export const DefaultChangePasswordModal = Template.bind({});
DefaultChangePasswordModal.args = {
  isOpen: true,
};
