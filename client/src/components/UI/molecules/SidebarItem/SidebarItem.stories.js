import React from "react";
import { Provider } from "react-redux";
import store from "../../../../store";
import SidebarItem from "./SidebarItem";

export default {
  title: "Molecules/SidebarItem",
  component: SidebarItem,
};

const Template = (args) => (
  <Provider store={store}>
    <SidebarItem {...args} />
  </Provider>
);
export const DefaultSidebarItem = Template.bind({});
DefaultSidebarItem.args = {
  sidebarItem: "Message",
};
