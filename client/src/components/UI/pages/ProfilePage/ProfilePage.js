import React, { useEffect, useState } from "react";
import style from "./ProfilePage.style";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import ChangePasswordModal from "../../molecules/ChangePasswordModal/ChangePasswordModal";
import { useAppDispatch, useAppSelector } from "../../../../store";
import Icon from "../../../../assets/icons/Icon";
import { storage } from "../../../../utils/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { changePassword, editProfile } from "../../../../store/features/auth/authSlice";
import { getScore } from "./actions";
import { showMessage } from "../../../../utils/showMessage";

const ProfilePage = () => {
  const styles = style();
  const { username, email, profileImage } = useAppSelector((state) => state?.auth?.user);
  const [image, setImage] = useState(profileImage);
  const [showImage, setShowImage] = useState(profileImage);
  const [isChecked, setIsChecked] = useState(false);
  const [score, setScore] = useState(0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    getScore(setScore);
  }, []);

  const handleImageChange = (e) => {
    e.preventDefault();
    setImage(e.target.files[0]);
    // if (e.target.files[0]) {
    //   setShowImage(URL.createObjectURL(e.target.files[0]));
    // }
  };

  const handleSubmitButton = async (e) => {
    console.log(e);
    e.preventDefault();
    if (image) {
      const storageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(storageRef, image);
      const downloadURL = await getDownloadURL(storageRef);

      await dispatch(editProfile({ url: downloadURL }));
      // window.location.reload(false);

      showMessage("Profile image updated successfully", "success");
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const imageRef = ref(storage, `images/${username}`);
  //   uploadBytes(imageRef, image)
  //     .then(() => {
  //       getDownloadURL(imageRef)
  //         .then((url) => {
  //           dispatch(editProfile({ url }));
  //         })
  //         .catch((error) => {
  //           console.log(error.message, "error getting the image url");
  //         });
  //       setImage(null);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };

  const handlePasswordChange = (value) => {
    if (value.newPassword === value.confirmPassword) {
      dispatch(changePassword({ oldPassword: value.oldPassword, newPassword: value.newPassword }));
      setIsChecked(false);
      return showMessage("Password changed successfully", "success");
    }
    setIsChecked(false);
    return showMessage("Password does not match", "error");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={(e) => handleSubmitButton(e)} encType="multipart/form-data">
        <div style={styles.imageContainer}>
          {profileImage ? <img src={profileImage} alt="profile" style={styles.profileImage} /> : <div style={styles.profileChar}>{username.charAt(0).toUpperCase()}</div>}
        </div>
        <div>
          <label for="file-input" style={styles.imageUpload}>
            <Icon name="Camera" width="3rem" height="3rem" color="white" />
            <input
              style={styles.imageInput}
              id="file-input"
              type="file"
              encType="multipart/form-data"
              name="photo"
              accept=".png, .jpg, .jpeg"
              onChange={(e) => handleImageChange(e)}
            />
          </label>
        </div>

        <div style={{ width: "25rem", marginBottom: "2.2rem", display: "flex" }}>
          <Text text={`Your score:\u00A0`} fontSize="1.4rem" font="RobotoMedium" />
          <Text text={`${score}p`} fontSize="1.4rem" font="InterSemiBold" color="rgb(11, 133, 45)" />
        </div>

        <div style={styles.textContainer}>
          <Text text="Username" fontSize="1.2rem" />
          <Text text={username} fontSize="1.6rem" opacity="70%" />
          <hr />
        </div>

        <div style={styles.textContainer}>
          <Text text="Email" fontSize="1.2rem" />
          <Text text={email} fontSize="1.6rem" opacity="70%" />
          <hr />
        </div>
        <div style={styles.changePassword}>
          <Text text="Change Password" fontSize="1.6rem" margin="0 4rem 0 0" />
          <label class="switch">
            <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
            <span class="slider round"></span>
          </label>
        </div>

        {isChecked && <ChangePasswordModal onClick={(value) => handlePasswordChange(value)} isOpen={isChecked} modalClose={() => setIsChecked(false)} />}
        <input
          className="buttonHoverGold"
          type="submit"
          // onClick={(e) => handleSubmitButton(e)}
          // type="submit"
          // text="Save Profile"
          // fontSize="1.6rem"
          // margin="2rem 0 0 0"
          // padding="1rem"
          // width="15rem"
          // buttonColor="#EBD894"
          // borderRadius="4rem"
        />
      </form>
    </div>
  );
};

export default ProfilePage;
