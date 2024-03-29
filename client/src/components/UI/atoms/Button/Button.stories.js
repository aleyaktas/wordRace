import React from "react";
import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const defaultButton = Template.bind({});
defaultButton.args = {
  text: "Button",
  width: "10rem",
  height: "3rem",
  text: "Button",
  borderColor: "#6B5814",
  borderRadius: "1rem",
};

export const iconButton = Template.bind({});
iconButton.args = {
  text: "Button",
  width: "15rem",
  height: "5rem",
  iconName: "User",
  iconPosition: "left",
  borderRadius: "1rem",
  textPosition: "center",
};

export const containedButton = Template.bind({});
containedButton.args = {
  text: "Button",
  width: "10rem",
  height: "3rem",
  buttonColor: "#EBD894",
  borderRadius: "1rem",
};
