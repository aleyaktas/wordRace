import React from 'react';
import QuestionCard from './QuestionCard';

export default {
  title: 'Molecules/QuestionCard',
  component: QuestionCard,
};

const Template = (args) => <QuestionCard {...args} />;

export const DefaultQuestionCard = Template.bind({});
DefaultQuestionCard.args = {
  width:"65vh",
  height:"45vh",
  backgroundColor:"yellow",
};

