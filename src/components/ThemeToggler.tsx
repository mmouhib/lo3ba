import styled from 'styled-components';
import { ReactComponent as SystemIcon } from '../assets/icons/themeTogglerIcons/system.svg';
import { ReactComponent as LightIcon } from '../assets/icons/themeTogglerIcons/light.svg';
import { ReactComponent as DarkIcon } from '../assets/icons/themeTogglerIcons/dark.svg';
import StyledThemeToggler from '../StyledComponents/themeToggler.css';

//todo: hide menu on click-away (useRef hook)
export default function ThemeToggler(): JSX.Element {
   return (
      <StyledThemeToggler>
         <div>
            <LightIcon />
            Light
         </div>
         <div>
            <DarkIcon />
            Dark
         </div>
         <div>
            <SystemIcon />
            System
         </div>
      </StyledThemeToggler>
   );
}
