import React from "react";
import FriendsPage from "./FriendsPage";

export default {
  title: "Pages/FriendsPage",
  component: FriendsPage,
};

// const friends = [
//   {
//     username: "username",
//     isInvite: false,
//     isOnline: true,
//   },
//   {
//     username: "username",
//     isInvite: false,
//     isOnline: true,
//   },
//   {
//     username: "username",
//     isInvite: false,
//   },
//   {
//     username: "username",
//     isInvite: false,
//   },
//   {
//     username: "username",
//     isInvite: false,
//   },
// ];
// const pendingRequests = friends;

const Template = (args) => <FriendsPage {...args} />;

export const DefaultFriendsPage = Template.bind({});
DefaultFriendsPage.args = {
  // friends,
  // pendingRequests,
};

export const NoFriendsPage = Template.bind({});
NoFriendsPage.args = {
  // friends: [],
  // pendingRequests: [],
};
