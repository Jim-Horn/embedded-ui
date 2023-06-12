import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createRoot } from 'react-dom/client';
import {
  AsurionDoodleSpinner,
  Button,
  ButtonGroup,
  TextField,
} from '@soluto-private/mx-asurion-ui-react';
import { Modal } from '@soluto-private/aui-react-modal';

const StyledFormField = styled.div`
  margin-bottom: 1rem;
`;

const StyledEmphasis = styled.p`
  font-style: italic;
  color: orangered;
  outline: 1px dotted orangered;
  padding: 0.25rem;
  text-align: left !important;
  opacity: 0.6;
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

const RegistrationWidget = ({ mode = 'inline' }) => {
  console.log(`mode: ${mode}`);
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

  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(
    () => () => {
      resetForm();
    },
    []
  );

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

  const getRandomValue = options => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };

  const fillForm = ev => {
    ev.preventDefault();

    const firstNameOptions = ['John', 'David', 'Michael', 'Sarah', 'Emily'];
    const lastNameOptions = ['Doe', 'Smith', 'Johnson', 'Brown', 'Lee'];
    const emailOptions = [
      'johndoe@example.com',
      'smith@example.com',
      'johnson@example.com',
      'brown@example.com',
      'lee@example.com',
    ];
    const phoneOptions = [
      '123-456-7890',
      '987-654-3210',
      '555-123-4567',
      '888-777-9999',
      '333-222-1111',
    ];
    const address1Options = [
      '123 Main Street',
      '456 Elm Street',
      '789 Oak Street',
      '321 Pine Street',
      '555 Maple Street',
    ];
    const cityStateMap = {
      'New York': 'NY',
      'Los Angeles': 'CA',
      Chicago: 'IL',
      Houston: 'TX',
      Miami: 'FL',
    };

    const cityOptions = Object.keys(cityStateMap);
    const zipOptions = ['10001', '90001', '60601', '77001', '33101'];

    setFirstName(getRandomValue(firstNameOptions));
    setLastName(getRandomValue(lastNameOptions));
    setEmail(getRandomValue(emailOptions));
    setPhone(getRandomValue(phoneOptions));
    setAddress1(getRandomValue(address1Options));

    setAddress2('');
    const randomCity = getRandomValue(cityOptions);
    setCity(randomCity);
    setState(cityStateMap[randomCity]);
    setZip(getRandomValue(zipOptions));
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
      <>
        <Alert />
        <p>Marketing material</p>

        <p>
          <Button
            size="small"
            href="#"
            onClick={() => {
              setPageState('1');
            }}>
            Check elegibility
          </Button>
        </p>
      </>
    ),
    1: (
      <>
        <Alert />
        <StyledH2>Our product</StyledH2>
        <p>
          <Button size="small" onClick={fillForm}>
            Fill form
          </Button>
        </p>
        <form onSubmit={doVerification}>
          <StyledFormField>
            <TextField
              id="first-name"
              type="text"
              label="First Name"
              value={firstName}
              required
              onChange={e => setFirstName(e.target.value)}
            />
          </StyledFormField>
          <StyledFormField>
            <TextField
              id="last-name"
              type="text"
              label="Last Name"
              value={lastName}
              required
              onChange={e => setLastName(e.target.value)}
            />
          </StyledFormField>
          <StyledFormField>
            <TextField
              id="email"
              type="text"
              label="Email"
              value={email}
              required
              onChange={e => setEmail(e.target.value)}
            />
          </StyledFormField>
          <StyledFormField>
            <TextField
              id="phone"
              type="text"
              label="Phone Number"
              value={phone}
              required
              onChange={e => setPhone(e.target.value)}
            />
          </StyledFormField>
          <StyledFormField>
            <TextField
              id="address1"
              type="text"
              label="Address 1"
              value={address1}
              required
              onChange={e => setAddress1(e.target.value)}
            />
          </StyledFormField>
          <StyledFormField>
            <TextField
              id="address2"
              type="text"
              label="Address 2"
              value={address2}
              onChange={e => setAddress2(e.target.value)}
            />
          </StyledFormField>
          <StyledFormField>
            <TextField
              id="city"
              type="text"
              label="City"
              value={city}
              required
              onChange={e => setCity(e.target.value)}
            />
          </StyledFormField>
          <StyledFormField>
            <TextField
              id="state"
              type="text"
              label="State"
              value={state}
              required
              onChange={e => setState(e.target.value)}
            />
          </StyledFormField>
          <StyledFormField>
            <TextField
              id="zip"
              type="text"
              label="Zip"
              value={zip}
              required
              onChange={e => setZip(e.target.value)}
            />
          </StyledFormField>
          <ButtonGroup>
            <Button
              size="small"
              type="submit"
              onClick={() => {
                window.scrollTo(0, 0);
              }}>
              Submit
            </Button>
            <Button size="small" onClick={resetForm}>
              Reset
            </Button>
          </ButtonGroup>
        </form>
      </>
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

        <p>Congratulations, {firstName}, you're eligible!</p>
        <Button size="small" onClick={handleAddToCart}>
          Add to Cart
        </Button>
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

  return mode !== 'modal' ? (
    <StyledPageContainer>{getContent(pageState)}</StyledPageContainer>
  ) : (
    <Modal isOpen={isModalOpen} onCloseModal={() => setIsModalOpen(false)}>
      <Modal.Header>
        <Modal.Title>Our Service</Modal.Title>
        <Modal.Subtitle>Subtitle goes here</Modal.Subtitle>
      </Modal.Header>
      <Modal.Content>{getContent(pageState)}</Modal.Content>
    </Modal>
  );
};

class RegistrationWidgetElement extends HTMLElement {
  connectedCallback() {
    this._mode = this.getAttribute('mode') || 'inline';
    this.render();
  }

  render() {
    const mode = this._mode;
    createRoot(this).render(<RegistrationWidget mode={mode} />);
  }
}

customElements.define('registration-widget', RegistrationWidgetElement);

export { RegistrationWidgetElement };
