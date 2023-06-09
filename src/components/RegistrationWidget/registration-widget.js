import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createRoot } from 'react-dom/client';
import { AsurionDoodleSpinner } from '@soluto-private/mx-asurion-ui-react';

const StyledFormField = styled.div`
  margin-bottom: 1rem;
  label {
    display: block;
  }
`;

const StyledEmphasis = styled.p`
  font-style: italic;
  color: orangered;
  outline: 1px dotted orangered;
  padding: 0.25rem;
  text-align: left !important;
`;

const StyledH2 = styled.h2`
  margin-top: 0;
`;

const StyledSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
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
  cursor: pointer;
`;

const Alert = () => (
  <StyledEmphasis>
    Keep in mind that this is <strong>our</strong> embedded app. It's a web
    component, inserted as <code>&lt;registrion-widget&gt;</code>
  </StyledEmphasis>
);

function mockService(callback, minDelay = 1000, maxDelay = 3000) {
  const delay =
    Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

  setTimeout(() => {
    const result = 'Mock service response';
    callback(result);
  }, delay);
}

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

  const [pageState, setPageState] = useState('0');

  useEffect(() => {
    return () => {
      resetForm();
    };
  }, []);

  const resetForm = () => {
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

  const fillForm = ev => {
    ev.preventDefault();
    setFirstName('John');
    setLastName('Doe');
    setEmail('johndoe@example.com');
    setPhone('123-456-7890');
    setAddress1('123 Main Street');
    setAddress2('');
    setCity('New York');
    setState('NY');
    setZip('10001');
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
    setPageState('2');
    mockService(() => {
      setPageState('3');
    });
  };

  const fakeSummary = {
    customerIdentifier: '1234567890',
    sku: 'client-sku',
    price: '24.99',
    type: 'Asurion Protection Plan',
    dateTime: new Date(),
  };

  const handleAddToCart = () => {
    const addToCartEvent = new CustomEvent('addToCart', {
      detail: { payload: fakeSummary },
    });
    window.dispatchEvent(addToCartEvent);
    setPageState('4');
  };

  const content = {
    defaultValue: <p>State not found</p>,
    0: (
      <div id="to-be-fetched">
        <Alert />
        <p>Marketing material</p>
        <p>
          <StyledButtonLink
            href="#"
            onClick={() => {
              setPageState('1');
            }}>
            Check elegibility
          </StyledButtonLink>
        </p>
      </div>
    ),
    1: (
      <div>
        <Alert />
        <StyledH2>Our product</StyledH2>
        <form onSubmit={doVerification}>
          <button onClick={fillForm}>Fill form</button>
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
    ),
    2: (
      <>
        <Alert />
        <StyledH2>Our product</StyledH2>
        <StyledSpinnerContainer>
          <AsurionDoodleSpinner />
          <div>Checking eligibility...</div>
        </StyledSpinnerContainer>
      </>
    ),
    3: (
      <StyledSuccess>
        <Alert />
        <StyledH2>Congratulations!</StyledH2>

        <p>Congratulations, you're eligible, {firstName}!</p>
        <StyledButtonLink onClick={handleAddToCart}>
          Add to Cart
        </StyledButtonLink>
      </StyledSuccess>
    ),
    4: (
      <StyledSuccess>
        <Alert />
        <StyledH2>Coverage added to cart</StyledH2>
      </StyledSuccess>
    ),
  };

  function createMap({ defaultValue = '', ...data } = {}) {
    const map = new Map(Object.entries(data));
    return function (key = '') {
      return map.get(key) ?? defaultValue;
    };
  }

  const getContent = createMap(content);

  return <StyledPageContainer>{getContent(pageState)}</StyledPageContainer>;
};

class RegistrationWidgetElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    createRoot(this).render(<RegistrationWidget />);
  }
}

customElements.define('registration-widget', RegistrationWidgetElement);

export { RegistrationWidgetElement };
