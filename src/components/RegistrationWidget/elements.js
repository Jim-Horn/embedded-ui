import styled from 'styled-components';

export const StyledFormField = styled.div`
  margin-bottom: 1rem;
`;
export const StyledEmphasis = styled.p`
  font-style: italic;
  color: orangered;
  outline: 1px dotted orangered;
  padding: 0.25rem;
  text-align: left !important;
  opacity: 0.6;
`;
export const StyledH2 = styled.h2`
  margin-top: 0;
`;
export const StyledSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
export const StyledPageContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
export const StyledSuccess = styled.div`
  & svg {
    max-width: 200px;
  }
  & > p {
    text-align: center;
  }
`;
