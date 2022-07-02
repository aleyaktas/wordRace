import React from "react";
import QuestionJoker from "./QuestionJoker";

export default {
  title: "Molecules/QuestionJoker",
  component: QuestionJoker,
};

const Template = (args) => <QuestionJoker {...args} />;

export const DefaultQuestionJoker = Template.bind({});
DefaultQuestionJoker.args = {
  time: "20",
};
