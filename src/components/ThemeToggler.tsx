import { ReactComponent as SystemIcon } from '../assets/icons/themeTogglerIcons/system.svg';
import { ReactComponent as LightIcon } from '../assets/icons/themeTogglerIcons/light.svg';
import { ReactComponent as DarkIcon } from '../assets/icons/themeTogglerIcons/dark.svg';
import { themeContext, IThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { useThemeDetector } from '../hooks/systemTheme';
import '../styles/theme-toggler.css';

//todo: hide menu on click-away (useRef hook)
export default function ThemeToggler(): JSX.Element {
   const themeData: IThemeContext | null = useContext(themeContext);
   let systemTheme = useThemeDetector();

   return (
      <div className="theme-toggler-menu">
         <div
            onClick={() => {
               themeData?.setTheme(true);
            }}>
            <LightIcon />
            Light
         </div>
         <div
            onClick={() => {
               themeData?.setTheme(false);
            }}>
            <DarkIcon />
            Dark
         </div>
         <div
            onClick={() => {
               themeData?.setTheme(!systemTheme);
            }}>
            <SystemIcon />
            System
         </div>
      </div>
   );
}
