import styled from 'styled-components';

const StyledHome = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   flex-direction: column;
   padding-top: 10vh;

   .slogans {
      width: 55%;
      text-align: center;
      @media (max-width: 700px) {
         width: 90%;
      }
   }

   .slogan-one ::selection {
      color: black;
      background: #8d2cff;
   }

   span {
      color: #8d2cff;
   }

   .slogan-one {
      font-size: 4vh;
      font-family: 'soleil bold', serif;
      font-weight: bold;
      padding: 20px;
      width: fit-content;
      text-align: center;
      margin: auto;
      text-transform: uppercase;
   }

   .slogan-two {
      font-size: 2.7vh;
      letter-spacing: 1px;
      font-family: soleil, serif;
   }

   .signup-button {
      color: white;
      font-weight: bold;
      border: 2px solid #8d2cff;
      background: #8d2cff;
      width: 15vw;
      min-width: 160px;
      padding: 7px;
      margin: 3vh;
      border-radius: 4px;

      &:hover {
         transition: all 0.5s;
         border-color: #7c32d2;
         background: #7c32d2;
      }
   }

   .login-phrase {
      font-size: 1.7vh;
   }

   .login-span:hover {
      text-decoration: underline;
      cursor: pointer;
   }

   .login-modal {
      display: flex;
      align-items: center;
      justify-content: center;
   }
`;

export default StyledHome;
