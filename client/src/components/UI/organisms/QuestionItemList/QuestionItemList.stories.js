import React from "react";
import QuestionItemList from "./QuestionItemList";

export default {
  title: "Molecules/QuestionItemList",
  component: QuestionItemList,
};

const Template = (args) => <QuestionItemList {...args} />;

export const DefaultQuestionItemList = Template.bind({});
DefaultQuestionItemList.args = {
  options: ["first option", "second option", "third option"],
};
