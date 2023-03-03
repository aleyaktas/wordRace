import React from "react";
import { Provider } from "react-redux";
import store from "../../../../store";
import QuestionItemList from "./QuestionItemList";

export default {
  title: "Organisms/QuestionItemList",
  component: QuestionItemList,
};

const Template = (args) => (
  <Provider store={store}>
    <QuestionItemList {...args} />
  </Provider>
);
export const DefaultQuestionItemList = Template.bind({});
DefaultQuestionItemList.args = {
  options: {
    a: "First option",
    b: "Second option",
    c: "Third option",
    d: "Fourth option",
  },
};
