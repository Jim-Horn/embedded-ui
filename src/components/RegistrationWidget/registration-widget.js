import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

// Define the custom element name for the web component
const registrationWidgetElementName = 'registration-widget';

// Define the styles for the web component
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

// Create the RegistrationWidget web component
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

  useEffect(() => {
    // Handle cleanup when the component is unmounted
    return () => {
      // Reset the form state
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
    setPageState(2);
    setTimeout(() => {
      setPageState(3);
    }, 3000);
  };

  const handleAddToCart = () => {
    // Emit a custom event when the button is clicked
    const addToCartEvent = new CustomEvent('addToCart', {
      detail: { text: `Congratulations, ${firstName}! Item added to cart.` },
    });
    window.dispatchEvent(addToCartEvent);
    setPageState(4);
  };

  const renderContent = () => {
    switch (pageState) {
      case 0:
        return (
          <div id="to-be-fetched">
            <p>Marketing banter</p>
            <StyledButtonLink
              href="#"
              onClick={() => {
                setPageState(1);
              }}>
              Check eligibility
            </StyledButtonLink>
          </div>
        );
      case 1:
        return (
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
        );
      case 2:
        return (
          <>
            <StyledH2>Our product</StyledH2>
            <StyledSpinnerContainer>
              <Spinner />
              <br />
              <br />
              Checking eligibility...
            </StyledSpinnerContainer>
          </>
        );
      case 3:
        return (
          <StyledSuccess>
            <StyledH2>Congratulations!</StyledH2>

            <p>Congratulations, you're eligible, {firstName}!</p>
            <StyledButtonLink onClick={handleAddToCart}>
              Add to Cart
            </StyledButtonLink>
          </StyledSuccess>
        );
      case 4:
        return (
          <StyledSuccess>
            <StyledH2>Coverage added to cart</StyledH2>
          </StyledSuccess>
        );
      default:
        return null;
    }
  };

  return <StyledPageContainer>{renderContent()}</StyledPageContainer>;
};

// Define the custom element for the web component
class RegistrationWidgetElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    ReactDOM.render(<RegistrationWidget />, this);
  }
}

// Define the custom element using the specified element name
customElements.define(registrationWidgetElementName, RegistrationWidgetElement);

export { RegistrationWidgetElement };
