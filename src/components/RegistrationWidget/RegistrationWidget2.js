import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

const StyledFormField = styled.div`
  margin-bottom: 1rem;
  label {
    display: block;
  }
`;

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return {
    value,
    onChange: handleChange,
    reset,
  };
};

const FormInput = ({ id, type, required, ...props }) => (
  <StyledFormField>
    <label htmlFor={id}>{id.charAt(0).toUpperCase() + id.slice(1)}</label>
    <input id={id} type={type} required={required} {...props} />
  </StyledFormField>
);

const RegistrationWidget2 = () => {
  const firstName = useFormInput('');
  const lastName = useFormInput('');
  const email = useFormInput('');
  const phone = useFormInput('');
  const address1 = useFormInput('');
  const address2 = useFormInput('');
  const city = useFormInput('');
  const state = useFormInput('');
  const zip = useFormInput('');

  const formFields = {
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

  const resetForm = ev => {
    ev.preventDefault();
    // Reset the form by resetting each individual field
    Object.values(formFields).forEach(field => field.reset());
  };

  const stateSummary = useMemo(() => {
    return Object.keys(formFields).reduce((acc, key) => {
      acc[key] = formFields[key].value;
      return acc;
    }, {});
  }, [formFields]);

  return (
    <div>
      <h2>Register</h2>
      <form
        onSubmit={ev => {
          ev.preventDefault();
          console.table(stateSummary);
        }}>
        {Object.entries(formFields).map(([key, field]) => (
          <FormInput
            id={key}
            type="text"
            required={key !== 'address2'}
            {...field}
          />
        ))}
        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" onClick={ev => resetForm(ev)} />
      </form>
      <pre>{JSON.stringify(stateSummary, null, 2)}</pre>
    </div>
  );
};

export { RegistrationWidget2 };
