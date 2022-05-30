import React from 'react'
import { ReactComponent as User } from "./Icons/User.svg";
import { ReactComponent as Clock } from "./Icons/Clock.svg";
import { ReactComponent as Close } from "./Icons/Close.svg";
import { ReactComponent as Friends } from "./Icons/Friends.svg";
import { ReactComponent as Lock } from "./Icons/Lock.svg";
import { ReactComponent as Logout } from "./Icons/Logout.svg";
import { ReactComponent as Mail } from "./Icons/Mail.svg";
import { ReactComponent as Plus } from "./Icons/Plus.svg";
import { ReactComponent as Profile } from "./Icons/Profile-Settings.svg";
import { ReactComponent as Refresh } from "./Icons/Refresh.svg";
import { ReactComponent as Letter } from "./Icons/Letter.svg";
import { ReactComponent as Tick } from "./Icons/Tick.svg";
import { ReactComponent as AddFriend } from "./Icons/Add-Friend.svg";

const Icon = ({name,width=24,height=24,color}) => {
const icons = {
    User,
    Clock,
    Close,
    Friends,
    Lock,
    Logout,
    Mail,
    Plus,
    Profile,
    Refresh,
    Letter,
    Tick,
    AddFriend
}

const IconItem = icons[name]

return (
    <div>
        <IconItem width={width} height={height} color={color} />
    </div>
    )
}
export default Icon



