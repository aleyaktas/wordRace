import React from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Atoms/Checkbox",
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const defaultCheckbox = Template.bind({});
defaultCheckbox.args = {
  text: "Default checkbox",
  checboxColor: "black",
  width: "20rem",
  size: "1.8rem",
  fontSize: "1.8rem",
};
