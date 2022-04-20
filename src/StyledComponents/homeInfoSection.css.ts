import styled from 'styled-components';

const StyledInfoSection = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: row;
   gap: 1.5vw;
   margin-top: 3%;
   @media (max-width: 1300px) {
      flex-direction: column;
   }

   .infos-content {
      width: 17vw;
      height: 50vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 6%;
      @media (max-width: 1300px) {
         display: none;
      }
   }

   .infos-content h1 {
      font-size: 1em;
      text-transform: uppercase;
      font-weight: bolder;
   }

   .infos-content p {
      font-size: 1em;
   }

   .infos-content ::selection {
      color: white;
      background: #8d2cff;
   }
`;

export default StyledInfoSection;
