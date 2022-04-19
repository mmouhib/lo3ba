import styled from 'styled-components';

export const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   width: 100%;
   max-width: 500px;
   padding: 3rem;
   border-radius: 10px;
   background-color: #fafafa;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const StyledMultipleElementsInOneLine = styled.div`
   width: 100%;
   gap: 1rem;
   display: flex;
   align-items: center;
   justify-content: space-around;
`;

export const StyledSpan = styled.span`
   color: #3483e0;
   cursor: pointer;
   &:hover {
      text-decoration: underline;
   }
`;

export const StyledP = styled.p`
   font-weight: bold;
   font-size: 1.5rem;
   text-align: center;
`;
