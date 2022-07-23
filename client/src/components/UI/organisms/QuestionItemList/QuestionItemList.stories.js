import React from "react";
import QuestionItemList from "./QuestionItemList";

export default {
  title: "Organisms/QuestionItemList",
  component: QuestionItemList,
};

const Template = (args) => <QuestionItemList {...args} />;

export const DefaultQuestionItemList = Template.bind({});
DefaultQuestionItemList.args = {
  options: ["first option", "second option", "third option", "fourth option"],
};
