import styled from 'styled-components';

export const StyledSignUp = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: row;
   background: #38185e;
`;

export const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   gap: 2rem;
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
