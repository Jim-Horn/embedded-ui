import React, { useEffect, useState } from 'react';
import {
  CreditCardField,
  TextField,
  Checkbox,
} from '@soluto-private/mx-asurion-ui-react';
import { StyledH1 } from '../../components/RegistrationWidget/elements-v2';

const CreditCardInfo = () => {
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [ccFNameTextInput, setccFNameTextInput] = useState('');
  const [ccLNameTextInput, setccLNameTextInput] = useState('');
  const [FNameTextInput, setFNameTextInput] = useState('');
  const [LNameTextInput, setLNameTextInput] = useState('');
  const [PhoneTextInput, setPhoneTextInput] = useState('');
  const [EmailTextInput, setEmailTextInput] = useState('');
  const [AddressTextInput, setAddressTextInput] = useState('');
  const [AptTextInput, setAptTextInput] = useState('');
  const [CityTextInput, setCityTextInput] = useState('');
  const [StateTextInput, setStateTextInput] = useState('');
  const [ZipTextInput, setZipTextInput] = useState('');
  const [checked, setChecked] = useState(false);

  const handleChange = event => {
    const { value } = event.target;
    setCreditCardNumber(value);
  };
  const handleFNameChange = event => {
    const { value } = event.target;
    setccFNameTextInput(value);
  };

  const handleLNameChange = event => {
    const { value } = event.target;
    setccLNameTextInput(value);
  };

  useEffect(() => {
    console.log('useEffect');
    const receiveMessage = event => {
      console.log(`Received from parent: ${event.data}`);

      try {
        const {
          firstName,
          lastName,
          email,
          phone,
          address1,
          address2,
          city,
          state,
          zip,
        } = JSON.parse(event.data);

        setFNameTextInput(firstName);
        setLNameTextInput(lastName);
        setEmailTextInput(email);
        setPhoneTextInput(phone);
        setAddressTextInput(address1);
        setAptTextInput(address2);
        setCityTextInput(city);
        setStateTextInput(state);
        setZipTextInput(zip);
      } catch (error) {
        console.error('Error parsing message:', error);
      }
    };

    window.addEventListener('message', receiveMessage);

    return () => {
      window.removeEventListener('message', receiveMessage);
    };
  }, []);

  return (
    <>
      <StyledH1>Payment Information</StyledH1>
      <CreditCardField
        label="Credit Card Number"
        value={creditCardNumber}
        onChange={handleFNameChange}
        fieldStatus="default"
      />
      <div className="ccContainer">
        <TextField
          onChange={handleLNameChange}
          label="First Name"
          value={ccFNameTextInput}
          containerClassName="spanCol2"
        />
        <TextField
          onChange={handleChange}
          label="Last Name"
          value={ccLNameTextInput}
          containerClassName="spanCol2"
        />
      </div>
      <p className="tcCheckbox">
        <Checkbox
          label="Billing address is the same as home address"
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
        />
      </p>
      <StyledH1 className="spanCol4">Customer Information</StyledH1>
      <div className="ccContainer">
        <TextField
          onChange={handleLNameChange}
          label="First Name"
          value={FNameTextInput}
          containerClassName="spanCol2"
        />
        <TextField
          onChange={handleChange}
          label="Last Name"
          value={LNameTextInput}
          containerClassName="spanCol2"
        />
        <TextField
          onChange={handleLNameChange}
          label="Phone Number"
          value={PhoneTextInput}
          containerClassName="spanCol4"
        />
        <TextField
          onChange={handleChange}
          label="Email Address"
          value={EmailTextInput}
          containerClassName="spanCol4"
        />
        <StyledH1 className="spanCol4">Customer Address</StyledH1>
        <TextField
          onChange={handleLNameChange}
          label="Address"
          value={AddressTextInput}
          containerClassName="spanCol3"
        />
        <TextField
          onChange={handleChange}
          label="Apt., Suite, Attn."
          value={AptTextInput}
          containerClassName="spanCol1"
        />
        <TextField
          onChange={handleChange}
          label="City"
          value={CityTextInput}
          containerClassName="spanCol4"
        />
        <TextField
          onChange={handleLNameChange}
          label="State"
          value={StateTextInput}
          containerClassName="spanCol2"
        />
        <TextField
          onChange={handleChange}
          label="Zip Code"
          value={ZipTextInput}
          containerClassName="spanCol2"
        />
      </div>
    </>
  );
};

export default CreditCardInfo;
