import React from "react";
import { Provider } from "react-redux";
import store from "../../../../store";
import ScoreItem from "./ScoreItem";

export default {
  title: "Molecules/ScoreItem",
  component: ScoreItem,
};

const Template = (args) => (
  <Provider store={store}>
    <ScoreItem {...args} />
  </Provider>
);
export const DefaultScoreItem = Template.bind({});
DefaultScoreItem.args = {
  score: "100",
  firstUser: {
    name: "First User",
    scoreIndex: 0,
  },
  secondUser: {
    name: "Second User",
    scoreIndex: 1,
  },
};
