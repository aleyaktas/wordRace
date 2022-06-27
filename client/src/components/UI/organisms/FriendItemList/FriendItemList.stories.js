import React from "react";
import FriendItemList from "./FriendItemList";

export default {
  title: "Molecules/FriendItemList",
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
