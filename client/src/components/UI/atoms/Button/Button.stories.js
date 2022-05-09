import React from 'react';
import ButtonItem from './Button';

export default {
  title: 'Atoms/Button',
  component: ButtonItem,
};

const Template = (args) => <ButtonItem {...args} />;

export const defaultButton = Template.bind({})
defaultButton.args = {
  text:"Button",
  outlined: true,
  borderColor: "#6B5814",
}

export const iconButton = Template.bind({})
iconButton.args = {
  text:"Button",
  iconName:"User",
  icon:true,
}


export const containedButton = Template.bind({})
containedButton.args = {
  text:"Button",
  buttonColor: '#EBD894',
}

