import React from "react";
import GamePage from "./GamePage";

export default {
  title: "Pages/GamePage",
  component: GamePage,
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
const Template = (args) => <GamePage {...args} />;

export const DefaultGamePage = Template.bind({});
DefaultGamePage.args = {
  firstUser: "firstUser",
  secondUser: "secondUser",
  question: {
    inner: "What is the answer?",
    options: ["first option", "second option", "third option", "fourth option"],
  },
  time: "20",
  iconName: "User",
};
export const UserWaitingGamePage = Template.bind({});
UserWaitingGamePage.args = {
  firstUser: "firstUser",
  friends: friends,
  secondUser: "",
};
