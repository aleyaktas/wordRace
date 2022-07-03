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
};
