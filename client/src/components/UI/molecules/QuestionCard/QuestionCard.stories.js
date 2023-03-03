import React from "react";
import { Provider } from "react-redux";
import store from "../../../../store";
import QuestionCard from "./QuestionCard";

export default {
  title: "Molecules/QuestionCard",
  component: QuestionCard,
};

const Template = (args) => (
  <Provider store={store}>
    <QuestionCard {...args} />
  </Provider>
);
export const DefaultQuestionCard = Template.bind({});
DefaultQuestionCard.args = {
  question: {
    question: "What is the answer?",
    a: "First option",
    b: "Second option",
    c: "Third option",
    d: "Fourth option",
  },
  timer: "20",
  messages: [],
  usedJokers: [],
};
