import { useState } from 'react';

export const useFormState = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  return {
    formState: {
      firstName,
      setFirstName,
      lastName,
      setLastName,
      email,
      setEmail,
      phone,
      setPhone,
      address1,
      setAddress1,
      address2,
      setAddress2,
      city,
      setCity,
      state,
      setState,
      zip,
      setZip,
    },
  };
};
