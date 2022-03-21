import Search from './Search';
import styled from 'styled-components';

const StyledNavBar = styled.div`
   display: flex;
   gap: 10%;
   align-items: center;
`;

export default function NavBar() {
   return (
      <StyledNavBar>
         <p>red</p>
         <Search style={{ width: '25%' }} />
      </StyledNavBar>
   );
}
