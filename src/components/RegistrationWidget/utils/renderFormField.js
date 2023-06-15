import React from 'react';
import { StyledFormField } from '../elements';
import { TextField } from '@soluto-private/mx-asurion-ui-react';

export const renderFormField = (id, label, value, setValue, isRequired) => (
  <StyledFormField>
    <TextField
      id={id}
      type="text"
      label={label}
      value={value}
      required={isRequired}
      onChange={e => setValue(e.target.value)}
    />
  </StyledFormField>
);
