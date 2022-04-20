import styled from 'styled-components';

const StyledMobileHomeInfoSection = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 2vh;
   text-align: center;
   margin-bottom: 4vh;
   width: 100%;
   @media (min-width: 1300px) {
      display: none;
   }

   & h1 {
      text-transform: uppercase;
      font-weight: bolder;
   }

   .circle {
      aspect-ratio: 1/1;
      width: 12px;
      border-radius: 100%;
   }

   .circles-section {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 7vw;
      width: 100%;
   }
`;

export default StyledMobileHomeInfoSection;
