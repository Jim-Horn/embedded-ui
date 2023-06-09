import React, { useState } from 'react';
import styled from 'styled-components';
// import QRCode from 'qrcode.react';
import BarCode from 'react-barcode';

const StyledFormField = styled.div`
  margin-bottom: 1rem;
  label {
    display: block;
  }
`;

const StyledH2 = styled.h2`
  margin-top: 0;
`;

const StyledSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  outline: 1px dotted grey;
`;

const StyledPageContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const StyledSuccess = styled.div`
  & svg {
    max-width: 200px;
  }
  & > p {
    text-align: center;
  }
`;

const StyledButtonLink = styled.a`
  background-color: #0066cc;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
`;

const Spinner = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,10 10,90" stroke="#000" strokeWidth="2" fill="none">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 50 50"
        to="360 50 50"
        dur="2s"
        repeatCount="indefinite"
      />
    </polygon>
  </svg>
);

const RegistrationWidget = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [pageState, setPageState] = useState(0);

  const resetForm = ev => {
    ev.preventDefault();
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setAddress1('');
    setAddress2('');
    setCity('');
    setState('');
    setZip('');
  };

  const stateSummary = {
    firstName,
    lastName,
    email,
    phone,
    address1,
    address2,
    city,
    state,
    zip,
  };

  const doVerification = ev => {
    ev.preventDefault();
    console.table(stateSummary);
    setPageState(2);
    setTimeout(() => {
      setPageState(3);
    }, 3000);
  };

  return (
    <StyledPageContainer>
      {pageState === 0 && (
        <div id="to-be-fetched">
          <p>Marketing material</p>
          <StyledButtonLink
            href="#"
            onClick={() => {
              setPageState(1);
            }}>
            Check elegibility
          </StyledButtonLink>
        </div>
      )}
      {pageState === 1 && (
        <div>
          <StyledH2>Our product</StyledH2>
          <form onSubmit={doVerification}>
            <StyledFormField>
              <label htmlFor="first-name">First Name</label>
              <input
                id="first-name"
                type="text"
                value={firstName}
                required
                onChange={e => setFirstName(e.target.value)}
              />
            </StyledFormField>
            <StyledFormField>
              <label htmlFor="last-name">Last Name</label>
              <input
                id="last-name"
                type="text"
                value={lastName}
                required
                onChange={e => setLastName(e.target.value)}
              />
            </StyledFormField>
            <StyledFormField>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                value={email}
                required
                onChange={e => setEmail(e.target.value)}
              />
            </StyledFormField>
            <StyledFormField>
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="text"
                value={phone}
                required
                onChange={e => setPhone(e.target.value)}
              />
            </StyledFormField>
            <StyledFormField>
              <label htmlFor="address1">Address 1</label>
              <input
                id="address1"
                type="text"
                value={address1}
                required
                onChange={e => setAddress1(e.target.value)}
              />
            </StyledFormField>
            <StyledFormField>
              <label htmlFor="address2">Address 2</label>
              <input
                id="address2"
                type="text"
                value={address2}
                onChange={e => setAddress2(e.target.value)}
              />
            </StyledFormField>
            <StyledFormField>
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                value={city}
                required
                onChange={e => setCity(e.target.value)}
              />
            </StyledFormField>
            <StyledFormField>
              <label htmlFor="state">State</label>
              <input
                id="state"
                type="text"
                value={state}
                required
                onChange={e => setState(e.target.value)}
              />
            </StyledFormField>
            <StyledFormField>
              <label htmlFor="zip">Zip</label>
              <input
                id="zip"
                type="text"
                value={zip}
                required
                onChange={e => setZip(e.target.value)}
              />
            </StyledFormField>
            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" onClick={resetForm} />
          </form>
        </div>
      )}
      {pageState === 2 && (
        <>
          <StyledH2>Our product</StyledH2>
          <StyledSpinnerContainer>
            <Spinner />
            <br />
            <br />
            Checking eligibility...
          </StyledSpinnerContainer>
        </>
      )}
      {pageState === 3 && (
        <StyledSuccess>
          <StyledH2>Congratulations!</StyledH2>
          <div style={{ textAlign: 'center' }}>
            <BarCode value="asurion-135v547" />
          </div>
          <p>Congratulations, you're eligible, {firstName}!</p>
          <p>Scan to add our protection to your cart!</p>
        </StyledSuccess>
      )}
    </StyledPageContainer>
  );
};

export { RegistrationWidget };
