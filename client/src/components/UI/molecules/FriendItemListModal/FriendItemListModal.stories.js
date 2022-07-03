import React from "react";
import FriendItemListModal from "./FriendItemListModal";

export default {
  title: "Molecules/FriendItemListModal",
  component: FriendItemListModal,
};

const friends = [
  {
    index: 1,
    username: "username",
    isInvite: false,
  },
  {
    index: 1,
    username: "username",
    isInvite: false,
  },
  {
    index: 1,
    username: "username",
    isInvite: false,
  },
  {
    index: 1,
    username: "username",
    isInvite: false,
  },
  {
    index: 1,
    username: "username",
    isInvite: false,
  },
  {
    index: 1,
    username: "username",
    isInvite: false,
  },
  {
    index: 1,
    username: "username",
    isInvite: false,
  },
  {
    index: 1,
    username: "username",
    isInvite: false,
  },
  {
    index: 1,
    username: "username",
    isInvite: false,
  },
  {
    index: 1,
    username: "username",
    isInvite: false,
  },
];

const Template = (args) => <FriendItemListModal {...args} />;

export const DefaultFriendItemListModal = Template.bind({});
DefaultFriendItemListModal.args = {
  isOpen: true,
  friends,
};

export const InviteFriendItemListModal = Template.bind({});
InviteFriendItemListModal.args = {
  isOpen: true,
  friends,
  modalType: "inviteModal",
};

export const OnlineFriendItemListModal = Template.bind({});
OnlineFriendItemListModal.args = {
  isOpen: true,
  friends,
  modalType: "onlineModal",
};

export const RequestFriendItemListModal = Template.bind({});
RequestFriendItemListModal.args = {
  isOpen: true,
  friends,
  modalType: "requestModal",
};
