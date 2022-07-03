import React from "react";
import Icon from "../../../../assets/icons/Icon";
import style from "./SidebarItem.style";

const SidebarItem = ({ sidebarItem }) => {
  const styles = style();
  return (
    <div style={styles.container}>
      <Icon name={sidebarItem} color="#F3B948" width="3rem" height="3rem" />
    </div>
  );
};

export default SidebarItem;
