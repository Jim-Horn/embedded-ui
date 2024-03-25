import React from 'react';
import { StyledFormField } from '../elements-v2';
import { TextField } from '@soluto-private/mx-asurion-ui-react';

export const renderFormField = (id, label, value, setValue, isRequired, spanCol) => (
  <StyledFormField className={"spanCol"+spanCol}>
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
