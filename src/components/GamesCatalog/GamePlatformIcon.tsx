import { FaMobileAlt, FaPlaystation, FaXbox } from 'react-icons/fa';
import { DiLinux } from 'react-icons/di';
import { SiNintendo } from 'react-icons/si';
import { AiFillWindows, AiOutlineApple } from 'react-icons/ai';
import { useState } from 'react';

interface GamePlatformIcon {
   platformName: string;
}

export default function GamePlatformIcon(props: GamePlatformIcon) {
   const [iconSize, setIconSize] = useState<number>(15);

   return (
      <>
         {props.platformName.toLowerCase().includes('ps') && <FaPlaystation size={iconSize} />}
         {props.platformName.toLowerCase().includes('android') && <FaMobileAlt size={iconSize} />}
         {props.platformName.toLowerCase().includes('linux') && <DiLinux size={iconSize} />}
         {props.platformName.toLowerCase().includes('nintendo') && <SiNintendo size={iconSize} />}
         {props.platformName.toLowerCase().includes('pc') && <AiFillWindows size={iconSize} />}
         {props.platformName.toLowerCase().includes('mac') && <AiOutlineApple size={iconSize} />}
         {props.platformName.toLowerCase().includes('xbox') && <FaXbox size={iconSize} />}
      </>
   );
}
