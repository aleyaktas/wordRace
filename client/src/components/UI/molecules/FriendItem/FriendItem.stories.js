import React from "react";
import FriendItem from "./FriendItem";

export default {
  title: "Molecules/FriendItem",
  component: FriendItem,
};

const Template = (args) => <FriendItem {...args} />;

export const DefaultFriendItem = Template.bind({});
DefaultFriendItem.args = {
  index: 1,
  username: "username",
};
export const OnlineFriendItem = Template.bind({});
OnlineFriendItem.args = {
  index: 1,
  username: "username",
  modalType: "onlineModal",
  isOnline: true,
};

export const InviteFriendItem = Template.bind({});
InviteFriendItem.args = {
  index: 1,
  username: "username",
  modalType: "inviteModal",
};

export const RequestFriendItem = Template.bind({});
RequestFriendItem.args = {
  index: 1,
  username: "username",
  modalType: "requestModal",
};
