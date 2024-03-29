import React from "react";
import { ReactComponent as User } from "./Icons/User.svg";
import { ReactComponent as Clock } from "./Icons/Clock.svg";
import { ReactComponent as Close } from "./Icons/Close.svg";
import { ReactComponent as Friends } from "./Icons/Friends.svg";
import { ReactComponent as Lock } from "./Icons/Lock.svg";
import { ReactComponent as Logout } from "./Icons/Logout.svg";
import { ReactComponent as Mail } from "./Icons/Mail.svg";
import { ReactComponent as CreatePlus } from "./Icons/CreatePlus.svg";
import { ReactComponent as Plus } from "./Icons/Plus.svg";
import { ReactComponent as Profile } from "./Icons/Profile-Settings.svg";
import { ReactComponent as Refresh } from "./Icons/Refresh.svg";
import { ReactComponent as Letter } from "./Icons/Letter.svg";
import { ReactComponent as Tick } from "./Icons/Tick.svg";
import { ReactComponent as AddFriend } from "./Icons/Add-Friend.svg";
import { ReactComponent as Password } from "./Icons/Password.svg";
import { ReactComponent as ForgotPassword } from "./Icons/Forgot-Password.svg";
import { ReactComponent as Friend } from "./Icons/Friend.svg";
import { ReactComponent as OutlinedPlus } from "./Icons/OutlinedPlus.svg";
import { ReactComponent as LoginUser } from "./Icons/Login.svg";
import { ReactComponent as RegisterUser } from "./Icons/UserOutlined.svg";
import { ReactComponent as FiftyPercentJoker } from "./Icons/FiftyPercentJoker.svg";
import { ReactComponent as DoubleChanceJoker } from "./Icons/DoubleChance.svg";
import { ReactComponent as Message } from "./Icons/Message.svg";
import { ReactComponent as Out } from "./Icons/Out.svg";
import { ReactComponent as Question } from "./Icons/Question.svg";
import { ReactComponent as DeleteFriend } from "./Icons/Delete-Friend.svg";
import { ReactComponent as DeleteFriend2 } from "./Icons/Delete-Friend-2.svg";
import { ReactComponent as ProfileSettings } from "./Icons/Profile-Settings.svg";
import { ReactComponent as Trash } from "./Icons/Trash.svg";
import { ReactComponent as Camera } from "./Icons/Camera.svg";
import { ReactComponent as Win } from "./Icons/Win.svg";
import { ReactComponent as Winners } from "./Icons/Win-2.svg";
import { ReactComponent as Lose } from "./Icons/Lose.svg";
import { ReactComponent as Draw } from "./Icons/Draw.svg";
import { ReactComponent as Bear } from "./Icons/Animals/Bear.svg";
import { ReactComponent as Bird } from "./Icons/Animals/Bird.svg";
import { ReactComponent as Bee } from "./Icons/Animals/Bee.svg";
import { ReactComponent as Chicken } from "./Icons/Animals/Chicken.svg";
import { ReactComponent as Cow } from "./Icons/Animals/Cow.svg";
import { ReactComponent as Deer } from "./Icons/Animals/Deer.svg";
import { ReactComponent as Dog } from "./Icons/Animals/Dog.svg";
import { ReactComponent as Elephant } from "./Icons/Animals/Elephant.svg";
import { ReactComponent as Frog } from "./Icons/Animals/Frog.svg";
import { ReactComponent as Giraffe } from "./Icons/Animals/Giraffe.svg";
import { ReactComponent as Jellyfish } from "./Icons/Animals/Jellyfish.svg";
import { ReactComponent as Koala } from "./Icons/Animals/Koala.svg";
import { ReactComponent as Lion } from "./Icons/Animals/Lion.svg";
import { ReactComponent as Monkey } from "./Icons/Animals/Monkey.svg";
import { ReactComponent as Penguin } from "./Icons/Animals/Penguin.svg";
import { ReactComponent as Rabbit } from "./Icons/Animals/Rabbit.svg";
import { ReactComponent as Unicorn } from "./Icons/Animals/Unicorn.svg";

const Icon = ({ className, name, width = "2.4rem", height = "2.4rem", color, style }) => {
  const icons = {
    User,
    Clock,
    Close,
    Friends,
    Lock,
    Logout,
    Mail,
    CreatePlus,
    Profile,
    Refresh,
    Letter,
    Tick,
    AddFriend,
    Friend,
    Password,
    ForgotPassword,
    OutlinedPlus,
    LoginUser,
    RegisterUser,
    FiftyPercentJoker,
    Message,
    Out,
    Question,
    Plus,
    DeleteFriend,
    DeleteFriend2,
    ProfileSettings,
    Trash,
    Camera,
    DoubleChanceJoker,
    Win,
    Winners,
    Lose,
    Draw,
    Bear,
    Bird,
    Bee,
    Chicken,
    Cow,
    Deer,
    Dog,
    Elephant,
    Frog,
    Giraffe,
    Jellyfish,
    Koala,
    Lion,
    Monkey,
    Penguin,
    Rabbit,
    Unicorn,
  };

  const IconItem = icons[name];

  return (
    <div className={className} style={style}>
      <IconItem width={width} height={height} color={color || "black"} />
    </div>
  );
};
export default Icon;
