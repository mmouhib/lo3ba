import styled from 'styled-components';

export const StyledSignUp = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: space-around;
   flex-direction: row;
   background: #38185e;
`;

export const StyledVerticalLine = styled.div`
   border-left: 1px solid #ffffff;
   height: 500px;

   @media (max-width: 1200px) {
      display: none;
   }
`;

export const StyledImage = styled.img`
   @media (max-width: 1200px) {
      display: none;
   }
`;
