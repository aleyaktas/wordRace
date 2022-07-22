import React from "react";
import HomePage from "./HomePage";

export default {
  title: "Molecules/HomePage",
  component: HomePage,
};

const Template = (args) => <HomePage {...args} />;

export const DefaultHomePage = Template.bind({});
DefaultHomePage.args = {};
