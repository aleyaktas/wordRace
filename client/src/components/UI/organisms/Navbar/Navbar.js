import React, { Fragment, useState } from "react";
import style from "./Navbar.style";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import RegisterModal from "../../molecules/RegisterModal/RegisterModal";
import LoginModal from "../../molecules/LoginModal/LoginModal";
import ForgotPasswordModal from "../../molecules/ForgotPasswordModal/ForgotPasswordModal";
import { useAppDispatch, useAppSelector } from "../../../../store";
import Icon from "../../../../assets/icons/Icon";
import { forgotPassword, logout } from "../../../../store/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import socket from "../../../../utils/socket";
import { showMessage } from "../../../../utils/showMessage";

const Navbar = () => {
  const styles = style();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState({ isOpenState: false, componentName: "" });
  const dispatch = useAppDispatch();
  const { loading, isAuthenticated } = useAppSelector((state) => state.auth);
  const username = useAppSelector((state) => state.auth?.user?.username);
  const onClick = (modalName) => {
    setIsOpen({
      ...isOpen,
      isOpenState: true,
      componentName: modalName,
    });
  };
  const onClickResetPassword = async (email) => {
    if (email) {
      dispatch(forgotPassword({ email }));
      showMessage("Password reset link sent to your email", "success");
      setIsOpen({ isOpenState: false, componentName: "" });
    } else {
      showMessage("Please enter your email", "error");
    }
  };
  const onClickLogout = async () => {
    socket.emit("logout_user", { username });
    await dispatch(logout());
  };
  const { isOpenState, componentName } = isOpen;
  const guestLinks = (
    <>
      {(isOpenState === true) & (componentName === "RegisterModal") ? (
        <RegisterModal setIsOpen={setIsOpen} isOpen={isOpenState} modalClose={() => setIsOpen({ isOpenState: false, componentName: "" })} />
      ) : (isOpenState === true) & (componentName === "LoginModal") ? (
        <LoginModal setIsOpen={setIsOpen} isOpen={isOpenState} modalClose={() => setIsOpen({ isOpenState: false, componentName: "" })} />
      ) : (isOpenState === true) & (componentName === "ForgotPasswordModal") ? (
        <ForgotPasswordModal
          onClick={(email) => onClickResetPassword(email)}
          setIsOpen={setIsOpen}
          isOpen={isOpenState}
          modalClose={() => setIsOpen({ isOpenState: false, componentName: "" })}
        />
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
    </>
  );
  const authLinks = (
    <>
      <div style={styles.navUser} className="dropdown">
        <button className="dropbtn" style={{ display: "flex", alignItems: "center" }}>
          <Icon name="User" width="4rem" height="4rem" color="white" />
          <Text text={`Hello, ${username?.toUpperCase()}`} fontSize="1.8rem" color="white" font="RobotoMedium" className="hoverTextNavbar" />
        </button>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="dropdown-content">
            <Button
              onClick={() => navigate("/profile")}
              height="4rem"
              buttonColor="transparent"
              className="buttonHoverDropDown"
              color="black"
              iconName="ProfileSettings"
              iconPosition="start"
              iconSize="2.2rem"
              text="Profile"
            />
            <Button
              onClick={() => navigate("/friends")}
              height="4rem"
              buttonColor="transparent"
              className="buttonHoverDropDown"
              color="black"
              iconName="Friends"
              iconPosition="start"
              iconSize="2.2rem"
              text="Friends"
            />
            <Button
              height="4rem"
              buttonColor="transparent"
              className="buttonHoverDropDown"
              color="black"
              iconName="Logout"
              iconPosition="start"
              iconSize="2.2rem"
              text="Logout"
              onClick={onClickLogout}
            />
          </div>
        </div>
      </div>
      <div style={styles.dropdownButton}></div>
    </>
  );
  return (
    <>
      <div style={styles.navContainer}>
        <div onClick={() => navigate("/")} style={styles.navText}>
          <Text text="WORD RACE" color="white" fontSize="2.5rem" font="InterSemiBold" letterSpacing="0.2rem" />
        </div>
        {<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
      </div>
    </>
  );
};

export default Navbar;
