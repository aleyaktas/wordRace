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
import { ReactComponent as Friend } from "./Icons/Friend.svg";
import { ReactComponent as OutlinedPlus } from "./Icons/OutlinedPlus.svg";
import { ReactComponent as LoginUser } from "./Icons/Login.svg";
import { ReactComponent as RegisterUser } from "./Icons/UserOutlined.svg";
import { ReactComponent as FiftyPercentJoker } from "./Icons/FiftyPercentJoker.svg";
import { ReactComponent as PassJoker } from "./Icons/PassJoker.svg";
import { ReactComponent as Message } from "./Icons/Message.svg";
import { ReactComponent as Out } from "./Icons/Out.svg";
import { ReactComponent as Question } from "./Icons/Question.svg";

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
    OutlinedPlus,
    LoginUser,
    RegisterUser,
    FiftyPercentJoker,
    PassJoker,
    Message,
    Out,
    Question,
    Plus,
  };

  const IconItem = icons[name];

  return (
    <div className={className} style={style}>
      <IconItem width={width} height={height} color={color} />
    </div>
  );
};
export default Icon;
