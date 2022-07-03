import React from "react";
import ScoreItem from "./ScoreItem";

export default {
  title: "Molecules/ScoreItem",
  component: ScoreItem,
};

const Template = (args) => <ScoreItem {...args} />;

export const DefaultScoreItem = Template.bind({});
DefaultScoreItem.args = {
  score: "100",
};
