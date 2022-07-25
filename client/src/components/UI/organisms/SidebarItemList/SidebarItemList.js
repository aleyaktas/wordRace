import React from "react";
import SidebarItem from "../../molecules/SidebarItem/SidebarItem";
import style from "./SidebarItemList.style.js";

const SidebarItemList = () => {
  const styles = style();
  const sidebarItems = ["Message", "Friends", "Question", "Out"];

  return (
    <div style={styles.container}>
      {sidebarItems.map((sidebarItem) => (
        <SidebarItem sidebarItem={sidebarItem} />
      ))}
    </div>
  );
};

export default SidebarItemList;
