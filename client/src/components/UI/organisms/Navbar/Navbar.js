import React from "react";
import style from "./Navbar.style";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";

const Navbar = () => {
  const styles = style();
  return (
    <div style={styles.navContainer}>
      <div style={styles.navText}>
        <Text text="WORD RACE" color="white" fontSize="2.5rem" font="InterSemiBold" letterSpacing="0.2rem" />
      </div>
      <div style={styles.navButton}>
        <Button width="12rem" height="4rem" borderRadius="1.8rem" margin="0 2rem" buttonColor="#EBD894" text="Sign Up" textColor="#6B5814" font="PoppinsMedium" fontSize="1.8rem" />
        <Button width="12rem" height="4rem" borderRadius="1.8rem" buttonColor="#F7F0D7" text="Login" textColor="#6B5814" font="PoppinsMedium" fontSize="1.8rem" />
      </div>
    </div>
  );
};

export default Navbar;
