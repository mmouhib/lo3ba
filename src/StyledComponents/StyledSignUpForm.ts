import styled from 'styled-components';

export const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   gap: 1.2rem;
   width: 100%;
   max-width: 500px;
   padding: 3rem;
   border-radius: 10px;
   background-color: #fafafa;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const StyledBirthdateSection = styled.div`
   width: 100%;
   gap: 1rem;
   display: flex;
   align-items: center;
   justify-content: space-around;
`;

export const StyledTermsSpan = styled.span`
   color: #3483e0;
   &:hover {
      text-decoration: underline;
   }
`;
