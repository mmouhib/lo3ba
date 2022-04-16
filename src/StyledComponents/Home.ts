import styled from 'styled-components';

export const StyledHome = styled.div`
   width: 100%;
   height: 100%;
   background: #251762;
`;

export const StyledHomeContent = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   flex-direction: row;
   height: 93%;
`;

export const StyledSloganDiv = styled.div`
   width: 30%;
  @media (max-width: 1200px) {
    width: 100%;
  }
   & p {
      color: white;
      font-size: 5em;
      font-family: 'Bebas Neue', cursive;
      letter-spacing: 3px;
      font-weight: bold;
      padding: 20px;
      width: fit-content;
      text-align: center;
      text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
      //text-shadow: black 15px 12px;

      & span {
         color: red;
      }
   }
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