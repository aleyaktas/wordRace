import React from "react";
import { Provider } from "react-redux";
import store from "../../../../store";
import AddFriendModal from "./AddFriendModal";

export default {
  title: "Molecules/AddFriendModal",
  component: AddFriendModal,
};

const Template = (args) => (
  <Provider store={store}>
    <AddFriendModal {...args} />;
  </Provider>
);

export const DefaultAddFriendModal = Template.bind({});
DefaultAddFriendModal.args = {
  isOpen: true,
};
