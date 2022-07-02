import React from "react";
import QuestionItemList from "./QuestionItemList";

export default {
  title: "Molecules/QuestionItemList",
  component: QuestionItemList,
};

const Template = (args) => <QuestionItemList {...args} />;

export const DefaultQuestionItemList = Template.bind({});
DefaultQuestionItemList.args = {
  options: [{ text: "first option" }, { text: "second option" }, { text: "third option" }, { text: "fourth option" }],
};
