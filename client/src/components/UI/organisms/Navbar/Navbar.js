import React, { useState } from "react";
import style from "./Navbar.style";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import RegisterModal from "../../molecules/RegisterModal/RegisterModal";
import LoginModal from "../../molecules/LoginModal/LoginModal";
import ForgotPasswordModal from "../../molecules/ForgotPasswordModal/ForgotPasswordModal";

const Navbar = () => {
  const styles = style();
  const [isOpen, setIsOpen] = useState({ isOpenState: false, componentName: "" });

  const onClick = (modalName) => {
    setIsOpen({
      ...isOpen,
      isOpenState: true,
      componentName: modalName,
    });
  };
  const { isOpenState, componentName } = isOpen;

  return (
    <>
      <div style={styles.navContainer}>
        <div style={styles.navText}>
          <Text text="WORD RACE" color="white" fontSize="2.5rem" font="InterSemiBold" letterSpacing="0.2rem" />
        </div>
        {(isOpenState === true) & (componentName === "RegisterModal") ? (
          <RegisterModal setIsOpen={setIsOpen} isOpen={isOpen} modalClose={() => setIsOpen(false)} />
        ) : (isOpenState === true) & (componentName === "LoginModal") ? (
          <LoginModal setIsOpen={setIsOpen} isOpen={isOpen} modalClose={() => setIsOpen(false)} />
        ) : (isOpenState === true) & (componentName === "ForgotPasswordModal") ? (
          <ForgotPasswordModal setIsOpen={setIsOpen} isOpen={isOpen} modalClose={() => setIsOpen(false)} />
        ) : null}
        <div style={styles.navButton}>
          <Button
            onClick={() => onClick("RegisterModal")}
            className="buttonHoverGold"
            width="12rem"
            height="4rem"
            borderRadius="1.8rem"
            margin="0 2rem"
            buttonColor="#EBD894"
            text="Sign Up"
            textColor="#6B5814"
            font="RobotoMedium"
            fontSize="1.8rem"
          />
          <Button
            onClick={() => onClick("LoginModal")}
            className="buttonHoverYellow"
            width="12rem"
            height="4rem"
            borderRadius="1.8rem"
            buttonColor="#F7F0D7"
            text="Login"
            textColor="#6B5814"
            font="RobotoMedium"
            fontSize="1.8rem"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
