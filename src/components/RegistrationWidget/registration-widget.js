import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createRoot } from 'react-dom/client';

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
  cursor: pointer;
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

  const handleAddToCart = () => {
    // Emit a custom event when the button is clicked
    const addToCartEvent = new CustomEvent('addToCart', {
      detail: { text: `Congratulations, ${firstName}! Item added to cart.` },
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
          <Spinner />
          <br />
          <br />
          Checking eligibility...
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
