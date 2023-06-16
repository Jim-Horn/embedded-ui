import styled from 'styled-components';

export const StyledEmphasis = styled.p`
  font-style: italic;
  color: orangered;
  outline: 1px dotted orangered;
  padding: 0.25rem;
  text-align: left !important;
  opacity: 0.6;
  position: fixed;
  bottom: 0;
  left: 0;
`;

export const StyledFormField = styled.div`
  margin-bottom: 1rem;
`;

export const StyledH2 = styled.h2`
  margin-top: 0;
`;

export const StyledPageContainer = styled.div`
  width: 100%;
`;

export const StyledScrollingDiv = styled.div`
  padding: 0.5rem;
  overflow-y: scroll;
  border: 1px solid #ccc;
  height: 300px;
  box-shadow: inset 0 0 5px #ccc;
  margin-bottom: 1rem;
`;

export const StyledSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const StyledSuccess = styled.div`
  & svg {
    max-width: 200px;
  }
`;
