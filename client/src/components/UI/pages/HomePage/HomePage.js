import React, { useEffect, useState } from "react";
import Text from "../../../../components/UI/atoms/Text/Text";
import HomePageFirstImg from "../../../../assets/images/HomePageFirstImg.png";
import HomePageSecondImg from "../../../../assets/images/HomePageSecondImg.png";
import HomePageThirdImg from "../../../../assets/images/HomePageThirdImg.png";
import HomePageFourthImg from "../../../../assets/images/HomePageFourthImg.png";
import { Animated } from "react-animated-css";
import style from "./HomePage.style";

const HomePage = () => {
  const styles = style();
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <>
      <div className="homePageContainer" style={styles.container}>
        <img className="homePageImg" src={HomePageFirstImg} alt="first" width="100%" />
        <div className="homePageText">
          <Animated animationIn="fadeInRight" animationInDuration={1800} isVisible={true}>
            <Text
              font="InterBold"
              textAlign="-webkit-center"
              color="#47607A"
              fontSize="2.5rem"
              lineHeight="3.5rem"
              text="How many English words do you know? How about learning more words by playing? Register now and start learning"
            />{" "}
          </Animated>{" "}
        </div>
      </div>

      <div className="homePageContainer2" style={styles.container}>
        <img className="homePageImg" src={HomePageSecondImg} alt="first" width="100%" />
        {scrollY > 230 && (
          <div className="homePageText">
            <Animated animationIn="fadeInLeft" animationInDuration={1800} isVisible={true}>
              <Text
                font="InterBold"
                textAlign="-webkit-center"
                color="#47607A"
                fontSize="2.5rem"
                lineHeight="3.5rem"
                text="If you want, you can create a room and invite your friends to the room. Are you ready for this learning journey?"
              />{" "}
            </Animated>{" "}
          </div>
        )}
      </div>
      <div className="homePageContainer" style={styles.container}>
        <img className="homePageImg" src={HomePageThirdImg} alt="first" width="100%" />
        {scrollY > 680 && (
          <div className="homePageText">
            <Animated animationIn="fadeInRight" animationInDuration={1800} isVisible={true}>
              <Text
                font="InterBold"
                textAlign="-webkit-center"
                color="#47607A"
                fontSize="2.5rem"
                lineHeight="3.5rem"
                text="Or you can join the created online rooms and play with different users"
              />{" "}
            </Animated>{" "}
          </div>
        )}
      </div>
      <div className="homePageContainer2" style={styles.container}>
        <img className="homePageImg" src={HomePageFourthImg} alt="first" width="100%" />
        {scrollY > 1000 && (
          <div className="homePageText">
            <Animated animationIn="fadeInLeft" animationInDuration={1800} isVisible={true}>
              <Text
                font="InterBold"
                textAlign="-webkit-center"
                color="#47607A"
                fontSize="2.5rem"
                lineHeight="3.5rem"
                text="It's game time! Don't be afraid, you have jockeys and don't forget to face your opponent to score, good luck"
              />{" "}
            </Animated>{" "}
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
