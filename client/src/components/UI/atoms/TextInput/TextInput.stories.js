import React from "react";
import TextInput from "./TextInput";

export default {
  title: "Atoms/TextInput",
  component: TextInput,
};

const Template = (args) => <TextInput {...args} />;

export const defaultTextInput = Template.bind({});
defaultTextInput.args = {};
export const icontTextInput = Template.bind({});
iconTextInput.args = {
  iconName: "User",
  iconWidth: 16,
  iconHeight: 16,
  iconColor: "black",
};
