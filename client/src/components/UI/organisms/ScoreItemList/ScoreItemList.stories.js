import React from "react";
import ScoreItemList from "./ScoreItemList";

export default {
  title: "Organisms/ScoreItemList",
  component: ScoreItemList,
};

const Template = (args) => <ScoreItemList {...args} />;

export const DefaultScoreItemList = Template.bind({});
DefaultScoreItemList.args = {
  scores: [10000, 5000, 2500, 1000, 500, 250, 100, 50, 25, 10, 0],
};
