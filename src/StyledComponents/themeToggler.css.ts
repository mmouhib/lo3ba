import styled from 'styled-components';

const StyledThemeToggler = styled.div`
   position: absolute;
   top: 6.5vh;
   right: 7vw;
   background: white;
   border-radius: 10px;
   padding: 10px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
   font-family: 'soleil bold', sans-serif;
   display: flex;
   align-items: start;
   justify-content: center;
   flex-direction: column;
   gap: 10px;
   color: #8d2cff;
   user-select: none;

   & div {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 10px;
      padding: 15px;
      border-radius: 10px;
      width: 100%;
   }

   & div:hover {
      background: #eeeeee;
   }
`;

export default StyledThemeToggler;
