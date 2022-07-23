import React from "react";
import FriendItemList from "./FriendItemList";

export default {
  title: "Organisms/FriendItemList",
  component: FriendItemList,
};

const friends = [
  {
    username: "username",
    isInvite: false,
  },
  {
    username: "username",
    isInvite: false,
  },
  {
    username: "username",
    isInvite: false,
  },
  {
    username: "username",
    isInvite: false,
  },
  {
    username: "username",
    isInvite: false,
  },
];

const Template = (args) => <FriendItemList {...args} />;

export const DefaultFriendItemList = Template.bind({});
DefaultFriendItemList.args = {
  friends,
  height: "40rem",
};
export const OnlineFriendItemList = Template.bind({});

OnlineFriendItemList.args = {
  friends,
  height: "40rem",
  modalType: "onlineModal",
};
export const InviteFriendItemList = Template.bind({});

InviteFriendItemList.args = {
  friends,
  height: "40rem",
  modalType: "inviteModal",
};
