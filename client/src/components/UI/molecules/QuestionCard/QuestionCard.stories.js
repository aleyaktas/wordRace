import React from "react";
import QuestionCard from "./QuestionCard";

export default {
  title: "Molecules/QuestionCard",
  component: QuestionCard,
};

const Template = (args) => <QuestionCard {...args} />;

export const DefaultQuestionCard = Template.bind({});
DefaultQuestionCard.args = {
  question: {
    inner: "What is the answer?",
    options: ["first option", "second option", "third option", "fourth option"],
  },
  time: "20",
};
