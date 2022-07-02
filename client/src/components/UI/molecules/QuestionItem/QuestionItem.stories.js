import React from "react";
import QuestionItem from "./QuestionItem";

export default {
  title: "Molecules/QuestionItem",
  component: QuestionItem,
};

const Template = (args) => <QuestionItem {...args} />;

export const DefaultQuestionItem = Template.bind({});
DefaultQuestionItem.args = {
  option: "first option",
  className: "buttonHoverGold",
};
