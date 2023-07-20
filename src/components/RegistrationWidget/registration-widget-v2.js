import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Modal } from '@soluto-private/aui-react-modal';
import {
  AsurionDoodleSpinner,
  Button,
  ButtonGroup,
  ProgressStepper,
} from '@soluto-private/mx-asurion-ui-react';
import { createRoot } from 'react-dom/client';
import Barcode from 'react-barcode';
import {
  StyledH2,
  StyledPageContainer,
  StyledScrollingDiv,
  StyledSpinnerContainer,
  StyledSuccess,
  StyledForm,
  StyledH1,
} from './elements-v2';
import {
  createMap,
  getRandomFormValue,
  mockService,
  renderFormField,
  useFormState,
} from './utils';
import { formOptions, summary, TsAndCs } from './fakeData';

const IframeComponent = forwardRef(({ src, setLoadedState }, ref) => {
  const handleOnLoad = () => {
    setLoadedState(true);
  };

  return (
    <iframe
      src={src}
      onLoad={handleOnLoad}
      title="Iframe Component"
      ref={ref}
      style={{ width: '100%', height: '100%' }}
    />
  );
});

const RegistrationWidget = ({
  mode = 'inline',
  showModal = false,
  showBarCode,
}) => {
  const { formState } = useFormState();
  const [pageState, setPageState] = useState('0');
  const [isModalOpen, setIsModalOpen] = useState(showModal);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [billingAddressIsChecked, setBillingAddressIsChecked] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    function handleShowModalClick(ev) {
      ev.detail.show === true
        ? setIsModalOpen(true)
        : window.setTimeout(() => {
            setIsModalOpen(false);
          }, 1500);
    }

    window.addEventListener('show-modal', handleShowModalClick);

    return function cleanup() {
      window.removeEventListener('click', handleShowModalClick);
    };
  }, []);

  const sendMessage = () => {
    setTimeout(() => {
      console.log('in the timeout');
      console.log(`iframeLoaded: ${iframeLoaded}`);
      console.log(`formState: ${JSON.stringify(formState, null, 2)}`);
      const iframe = iframeRef.current;
      console.log(`iframe: ${iframe}`);

      const iframeWindow = iframe.contentWindow;
      console.log(`iframeWindow: ${iframeWindow}`);

      iframeWindow.postMessage(
        JSON.stringify(formState),
        window.location.origin
      );
    }, 500); // doesn't work without ~500ms delay
  };

  const resetForm = () => {
    formState.setFirstName('');
    formState.setLastName('');
    formState.setEmail('');
    formState.setPhone('');
    formState.setAddress1('');
    formState.setAddress2('');
    formState.setCity('');
    formState.setState('');
    formState.setZip('');
  };

  const fillForm = ev => {
    ev.preventDefault();

    const cityOptions = Object.keys(formOptions.cityStateMap);

    formState.setFirstName(getRandomFormValue(formOptions.firstName));
    formState.setLastName(getRandomFormValue(formOptions.lastName));
    formState.setEmail(getRandomFormValue(formOptions.email));
    formState.setPhone(getRandomFormValue(formOptions.phone));
    formState.setAddress1(getRandomFormValue(formOptions.address1));
    formState.setAddress2('');

    const randomCity = getRandomFormValue(cityOptions);
    formState.setCity(randomCity);
    formState.setState(formOptions.cityStateMap[randomCity]);
    formState.setZip(getRandomFormValue(formOptions.zip));
  };

  const stateSummary = {
    firstName: formState.firstName,
    lastName: formState.lastName,
    email: formState.email,
    phone: formState.phone,
    address1: formState.address1,
    address2: formState.address2,
    city: formState.city,
    state: formState.state,
    zip: formState.zip,
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
    const addToCartEvent = new CustomEvent('addToCart', {
      detail: { payload: { ...stateSummary, ...summary } },
    });
    window.dispatchEvent(addToCartEvent);
    setPageState('5');
    mode === 'modal' &&
      setTimeout(() => {
        setIsModalOpen(false);
      }, 1500);
  };

  const formFields = [
    [
      'first-name',
      'First Name',
      formState.firstName,
      formState.setFirstName,
      true,
      2,
    ],
    [
      'last-name',
      'Last Name',
      formState.lastName,
      formState.setLastName,
      true,
      2,
    ],
    ['email', 'Email', formState.email, formState.setEmail, true, 4],
    ['phone', 'Phone Number', formState.phone, formState.setPhone, true, 4],
    [
      'address1',
      'Address 1',
      formState.address1,
      formState.setAddress1,
      true,
      3,
    ],
    [
      'address2',
      'Apt., Suite, Attn.',
      formState.address2,
      formState.setAddress2,
      false,
      1,
    ],
    ['city', 'City', formState.city, formState.setCity, true, 4],
    ['state', 'State', formState.state, formState.setState, true, 2],
    ['zip', 'Zip', formState.zip, formState.setZip, true, 2],
  ];

  const content = {
    defaultValue: <p>State not found</p>,
    0: (
      <>
        <StyledScrollingDiv>
          <TsAndCs />
        </StyledScrollingDiv>
      </>
    ),
    1: (
      <>
        <StyledH1>Customer Information</StyledH1>
        <p>
          <Button size="small" onClick={fillForm}>
            Fill form
          </Button>
        </p>
        <StyledForm onSubmit={doVerification}>
          {formFields.map(field => {
            return renderFormField(...field);
          })}
        </StyledForm>
      </>
    ),
    2: (
      <IframeComponent
        ref={iframeRef}
        src="/iframe/test"
        setLoadedState={setIframeLoaded}
      />
    ),
    3: (
      <>
        <StyledH2>Our product</StyledH2>
        <StyledSpinnerContainer>
          <AsurionDoodleSpinner />
          <div>Checking eligibility...</div>
        </StyledSpinnerContainer>
      </>
    ),
    4: (
      <StyledSuccess>
        <StyledH2>Congratulations!</StyledH2>

        <p>Congratulations, {formState.firstName}, you're eligible!</p>
        <Button size="small" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </StyledSuccess>
    ),
    5: (
      <StyledSuccess>
        <StyledH2>Coverage added to cart</StyledH2>
      </StyledSuccess>
    ),
    6: (
      <StyledSuccess>
        <StyledH2>Scan Barcode for V2</StyledH2>
        <Barcode value="barcode-example" />
      </StyledSuccess>
    ),
  };

  const getContent = createMap(content);

  const PartialModal = ({ children }) => (
    <Modal
      className="asurionModal"
      isSticky
      isOpen={isModalOpen}
      onCloseModal={() => {
        setIsModalOpen(false);
        setPageState('0');
        resetForm();
      }}>
      <Modal.Header className="asurionModalHeader">
        <div style={{ display: 'block' }}>
          <ProgressStepper
            className="test"
            orientation="horizontal"
            size="small"
            steps={[
              {
                state: 'incomplete',
              },
              {
                state: 'incomplete',
              },
              {
                state: 'incomplete',
              },
              {
                state: 'incomplete',
              },
            ]}
          />
        </div>
      </Modal.Header>
      <Modal.Content className="asurionModalBody">{children}</Modal.Content>
      <Modal.Footer className="asurionModalFooter">
        <ButtonGroup>
          <Button
            size="medium"
            type="submit"
            color="secondary"
            variant="outline"
            style={
              pageState === '0' ? { display: 'none' } : { display: 'block' }
            }
            onClick={() => {
              let prevPage = parseInt(pageState) - 1;
              prevPage = prevPage.toString();
              setPageState(() => prevPage);
              pageState !== '2' && setIframeLoaded(false);
            }}>
            Back
          </Button>
          <Button
            size="medium"
            onClick={() => {
              let nextPage = parseInt(pageState) + 1;
              nextPage = nextPage.toString();
              setPageState(() => nextPage);
              pageState !== '2' && setIframeLoaded(false);
            }}
            color="secondary">
            Next
          </Button>
        </ButtonGroup>
      </Modal.Footer>
    </Modal>
  );

  const Container = mode === 'modal' ? PartialModal : StyledPageContainer;

  useEffect(() => {
    iframeLoaded && sendMessage();
  }, [iframeLoaded]);

  return <Container>{getContent(pageState)}</Container>;
};

class RegistrationWidgetElement extends HTMLElement {
  connectedCallback() {
    this._mode = this.getAttribute('mode') || 'inline';
    this._showModal = false;
    this._showBarCode = false;
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
    const showBarCode = this._showBarCode;
    createRoot(this).render(
      <RegistrationWidget
        mode={mode}
        showModal={showModal}
        showBarCode={showBarCode}
      />
    );
  }
}

customElements.define('registration-widget-v2', RegistrationWidgetElement);

export { RegistrationWidgetElement };
