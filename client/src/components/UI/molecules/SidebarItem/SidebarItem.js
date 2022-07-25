import React from "react";
import Icon from "../../../../assets/icons/Icon";
import style from "./SidebarItem.style";
import ReactTooltip from "react-tooltip";

const SidebarItem = ({ sidebarItem }) => {
  const styles = style();
  const onClick = () => {
    console.log(sidebarItem);
  };
  return (
    <div>
      <div data-tip={sidebarItem} onClick={onClick} style={styles.container}>
        <Icon name={sidebarItem} color="#F3B948" width="3rem" height="3rem" />
      </div>
      <ReactTooltip textColor="#6B5814" backgroundColor="#EBD894" />
    </div>
  );
};

export default SidebarItem;
