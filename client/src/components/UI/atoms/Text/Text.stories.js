import React from "react";
import Text from "./Text";

export default {
  title: "Atoms/Text",
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const defaultText = Template.bind({});
defaultText.args = {
  text: "Text",
  fontSize: "1.6rem",
};
