import React from "react";
import { Provider } from "react-redux";
import store from "../../../../store";
import SidebarItemList from "./SidebarItemList";

export default {
  title: "Organisms/SidebarItemList",
  component: SidebarItemList,
};

const Template = (args) => (
  <Provider store={store}>
    <SidebarItemList {...args} />
  </Provider>
);
export const DefaultSidebarItemList = Template.bind({});
DefaultSidebarItemList.args = {};
