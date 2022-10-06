import React from "react";
import Text from "../../../atoms/Text/Text";
import Icon from "../../../../../assets/icons/Icon";
import PropTypes from "prop-types";
import style from "./ModalHeader.style";
import "../../../style.css";

const ModalHeader = ({ modalClose, text, description, iconName, height }) => {
  const styles = style({ height });

  return (
    <div style={styles.container}>
      <button id="close-button" onClick={modalClose}>
        <Icon name="Close" width="1.8rem" height="1.8rem" color="#8F8F8F" />
      </button>
      {iconName && (
        <div style={styles.iconContainer}>
          <Icon name={iconName} width="7rem" height="7rem" />
        </div>
      )}

      <Text textAlign="center" text={text} font="SfProDisplayMedium" letterSpacing="0.05rem" fontSize="2.4rem" margin={description ? "2rem 0 1rem 0" : "3rem 0"} />
      {description && <Text textAlign="center" text={description} font="PoppinsRegular" fontSize="1.6rem" margin="0 0 3rem 0" />}
    </div>
  );
};

ModalHeader.propTypes = {
  text: PropTypes.string,
};
ModalHeader.defaultProps = {
  text: null,
};

export default ModalHeader;
