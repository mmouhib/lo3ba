import Home from './components/Home';
import styled from 'styled-components';

const StyledApp = styled.div`
   width: 100vw;
   height: 100vh;
`;

export const App = () => (
   <StyledApp>
      <Home />
   </StyledApp>
);
