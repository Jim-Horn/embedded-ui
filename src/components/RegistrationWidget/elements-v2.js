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

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap:10px;
`;

export const StyledFormField = styled.div`
  display:inline;
`;

export const StyledH2 = styled.h2`
  margin-top: 0;
`;

export const StyledPageContainer = styled.div`
  width: 100%;
`;

export const StyledScrollingDiv = styled.div`
  padding: 1.25rem;
  overflow-y: scroll;
  height: 300px;
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

export const StyledPara = styled.p`
  font-size:.875rem;
  line-height:18.2px;
  margin-bottom:1.25rem;
`;

export const StyledH1 = styled.h1`
  font-size: 24px;
  line-height: 31.2px;
  font-weight: 100;
  margin-bottom: .625rem;
`;

export const StyledUL = styled.ul`
  padding:1.25rem
`;