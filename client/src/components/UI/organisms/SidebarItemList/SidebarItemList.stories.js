import React from "react";
import SidebarItemList from "./SidebarItemList";

export default {
  title: "Molecules/SidebarItemList",
  component: SidebarItemList,
};

const Template = (args) => <SidebarItemList {...args} />;

export const DefaultSidebarItemList = Template.bind({});
DefaultSidebarItemList.args = {
  sidebarItems: ["Message", "Friends", "Question", "Out"],
};
