import React from "react";
import ScoreCard from "./ScoreCard";

export default {
  title: "Molecules/ScoreCard",
  component: ScoreCard,
};

const Template = (args) => <ScoreCard {...args} />;

export const DefaultScoreCard = Template.bind({});
DefaultScoreCard.args = {
  iconName: "User",
  firstUser: {
    name: "User 1",
    score: 100,
  },
  secondUser: {
    name: "User 2",
    score: 100,
  },
};
