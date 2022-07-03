import React from "react";
import SidebarItem from "../../molecules/SidebarItem/SidebarItem";

const SidebarItemList = ({ sidebarItems }) => {
  return (
    <div>
      {sidebarItems.map((sidebarItem) => (
        <SidebarItem sidebarItem={sidebarItem} />
      ))}
    </div>
  );
};

export default SidebarItemList;
