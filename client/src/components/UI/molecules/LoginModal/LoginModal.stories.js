import React from "react";
import LoginModal from "./LoginModal";
import { Provider } from "react-redux";
import store from "../../../../store";

export default {
  title: "Molecules/LoginModal",
  component: LoginModal,
};

const Template = (args) => (
  <Provider store={store}>
    <LoginModal {...args} />
  </Provider>
);
export const DefaultLoginModal = Template.bind({});
DefaultLoginModal.args = {
  isOpen: true,
};
