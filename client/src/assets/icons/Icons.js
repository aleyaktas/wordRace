import { FaUser } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { HiLockClosed } from 'react-icons/hi';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiUserSettingsFill } from 'react-icons/ri';
import { FaUserFriends } from 'react-icons/fa';
import { GrPowerShutdown} from 'react-icons/gr';
import { ImUserPlus} from 'react-icons/im';
import { ImUserMinus} from 'react-icons/im';
import { IoIosMail} from 'react-icons/io';
import { FiRefreshCcw} from 'react-icons/fi';
import { IoMdTime} from 'react-icons/io';
import { TiTick} from 'react-icons/ti';
import { MdOutlineCancel} from 'react-icons/md';


export const User  = ({width, height, color})=> <FaUser height={height} width={width} color={color}  />
export const Mail  = ({width, height, color})=> <IoMdMail height={height} width={width} color={color}  />
export const Lock  = ({width, height, color})=> <HiLockClosed height={height} width={width} color={color}  />
export const Plus  = ({width, height, color})=> <AiOutlinePlus height={height} width={width} color={color}  />
export const UserSettings  = ({width, height, color})=> <RiUserSettingsFill height={height} width={width} color={color}  />
export const UserFriends  = ({width, height, color})=> <FaUserFriends height={height} width={width} color={color}  />
export const Logout  = ({width, height, color})=> <GrPowerShutdown height={height} width={width} color={color}  />
export const AddFriend  = ({width, height, color})=> <ImUserPlus height={height} width={width} color={color}  />
export const RemoveFriend  = ({width, height, color})=> <ImUserMinus height={height} width={width} color={color}  />
export const InviteFriend  = ({width, height, color})=> <IoIosMail height={height} width={width} color={color}  />
export const ChangeQuestion  = ({width, height, color})=> <FiRefreshCcw height={height} width={width} color={color}  />
export const Time  = ({width, height, color})=> <IoMdTime height={height} width={width} color={color}  />
export const Tick  = ({width, height, color})=> <TiTick height={height} width={width} color={color}  />
export const Cancel  = ({width, height, color})=> <MdOutlineCancel height={height} width={width} color={color}  />



