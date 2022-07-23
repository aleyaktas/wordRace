import React from "react";
import Navbar from "./Navbar";

export default {
  title: "Organisms/Navbar",
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const DefaultNavbar = Template.bind({});
DefaultNavbar.args = {};
