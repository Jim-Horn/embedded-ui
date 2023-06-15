import { Modal } from '@soluto-private/aui-react-modal';
import {
  AsurionDoodleSpinner,
  Button,
  ButtonGroup,
  TextField,
} from '@soluto-private/mx-asurion-ui-react';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  StyledEmphasis,
  StyledFormField,
  StyledH2,
  StyledPageContainer,
  StyledSpinnerContainer,
  StyledSuccess,
} from './elements';
import { getRandomFormValue, mockService } from './utils';
import { formOptions } from './formData';

const Alert = () => (
  <StyledEmphasis>
    Keep in mind that this is <strong>our</strong> embedded app. It's a web
    component, inserted as <code>&lt;registrion-widget&gt;</code>
  </StyledEmphasis>
);

const RegistrationWidget = ({ mode = 'inline', showModal = false }) => {
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

  const [isModalOpen, setIsModalOpen] = useState(showModal);

  useEffect(() => {
    function handleShowModalClick(ev) {
      setIsModalOpen(true);
    }

    window.addEventListener('show-modal', handleShowModalClick);

    return function cleanup() {
      window.removeEventListener('click', handleShowModalClick);
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

    const cityOptions = Object.keys(formOptions.cityStateMap);

    setFirstName(getRandomFormValue(formOptions.firstName));
    setLastName(getRandomFormValue(formOptions.lastName));
    setEmail(getRandomFormValue(formOptions.email));
    setPhone(getRandomFormValue(formOptions.phone));
    setAddress1(getRandomFormValue(formOptions.address1));
    setAddress2('');

    const randomCity = getRandomFormValue(cityOptions);
    setCity(randomCity);
    setState(formOptions.cityStateMap[randomCity]);
    setZip(getRandomFormValue(formOptions.zip));
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
    mode === 'modal' &&
      setTimeout(() => {
        setIsModalOpen(false);
      }, 1500);
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

  const PartialModal = ({ children }) => (
    <Modal isOpen={isModalOpen} onCloseModal={() => setIsModalOpen(false)}>
      <Modal.Header>
        <Modal.Title>Our Service</Modal.Title>
        <Modal.Subtitle>Subtitle goes here</Modal.Subtitle>
      </Modal.Header>
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );

  const Container = mode === 'modal' ? PartialModal : StyledPageContainer;

  return <Container>{getContent(pageState)}</Container>;
};

class RegistrationWidgetElement extends HTMLElement {
  connectedCallback() {
    this._mode = this.getAttribute('mode') || 'inline';
    this._showModal = false;
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'showModal') {
      this._showModal = newValue;
      this.render();
    }
  }

  render() {
    const mode = this._mode;
    const showModal = this._showModal;
    createRoot(this).render(
      <RegistrationWidget mode={mode} showModal={showModal} />
    );
  }
}

customElements.define('registration-widget', RegistrationWidgetElement);

export { RegistrationWidgetElement };
