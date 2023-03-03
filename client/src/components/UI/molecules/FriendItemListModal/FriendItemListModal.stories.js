import React from "react";
import FriendItemListModal from "./FriendItemListModal";
import { Provider } from "react-redux";
import store from "../../../../store";

export default {
  title: "Molecules/FriendItemListModal",
  component: FriendItemListModal,
};

const friends = [
  {
    username: "username",
  },
  {
    username: "username2",
  },
];

const offlineFriends = [
  {
    username: "username2",
  },
];

const Template = (args) => (
  <Provider store={store}>
    <FriendItemListModal {...args} />
  </Provider>
);
export const DefaultFriendItemListModal = Template.bind({});
DefaultFriendItemListModal.args = {
  isOpen: true,
  friends: [],
  modalType: null,
  offlineFriends: friends,
  title: "Your Friends",
};

export const InviteFriendItemListModal = Template.bind({});
InviteFriendItemListModal.args = {
  isOpen: true,
  friends: [],
  modalType: "inviteModal",
};

export const OnlineFriendItemListModal = Template.bind({});
OnlineFriendItemListModal.args = {
  isOpen: true,
  friends: friends,
  offlineFriends: offlineFriends,
  modalType: "onlineModal",
};

export const RequestFriendItemListModal = Template.bind({});
RequestFriendItemListModal.args = {
  isOpen: true,
  friends,
  modalType: "requestModal",
};
