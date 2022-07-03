import React from "react";
import SidebarItem from "./SidebarItem";

export default {
  title: "Molecules/SidebarItem",
  component: SidebarItem,
};

const Template = (args) => <SidebarItem {...args} />;

export const DefaultSidebarItem = Template.bind({});
DefaultSidebarItem.args = {
  sidebarItem: "Password",
};
