import React from 'react';

import {
  StyledUL,
} from './elements-v2';

export const formOptions = {
  firstName: ['John', 'David', 'Michael', 'Sarah', 'Emily'],
  lastName: ['Doe', 'Smith', 'Johnson', 'Brown', 'Lee'],
  email: [
    'johndoe@example.com',
    'smith@example.com',
    'johnson@example.com',
    'brown@example.com',
    'lee@example.com',
  ],
  phone: [
    '123-456-7890',
    '987-654-3210',
    '555-123-4567',
    '888-777-9999',
    '333-222-1111',
  ],
  address1: [
    '123 Main Street',
    '456 Elm Street',
    '789 Oak Street',
    '321 Pine Street',
    '555 Maple Street',
  ],
  zip: ['10001', '90001', '60601', '77001', '33101'],
  cityStateMap: {
    'New York': 'NY',
    'Los Angeles': 'CA',
    'Chicago': 'IL',
    'Houston': 'TX',
    'Miami': 'FL',
  },
};

export const summary = {
  customerIdentifier: '1234567890',
  sku: 'client-sku',
  price: '24.99',
  type: 'Asurion Protection Plan',
  dateTime: new Date(),
};

export const TsAndCs = () => (
  <>
    <h1>Home+ Legal Disclosures</h1>
    <StyledUL>
      <li>Asurion Home+ is $24.99 plus taxes per month.</li>
      <li>The plan will continue to renew each month unless canceled and will be billed to your payment card.</li>
      <li>You may cancel at any time for no additional charge. If canceled, a pro-rated refund of the service contract coverage may be provided as described in the terms and conditions.</li>
      <li>The plan begins on day 1 with access to technical support and device protection coverage begins on day 31 of enrollment. Any pre-existing conditions or breakdowns that occur before day 31 are not covered.</li> 
      <li>Device coverage includes mechanical and electrical breakdown on eligible devices and Accidental Damage from Handling for certain portable devices.</li>
      <li>The plan provides up to $5,000 in coverage every 12 months and $2,000 per approved claim.</li>
      <li>Non-original parts may be used for repair, and a replacement product may be a new, refurbished, or remanufactured product.</li>
      <li>A service fee of $0, $49 or $99 plus tax will be charged for each approved claim. </li>
      <li>Limitations and exclusions apply. Please see the Terms and Conditions for complete program details, including a binding individual arbitration provision applicable to this plan (unless state exceptions apply.)”</li>
    </StyledUL>

    <footer>
      <p>
        These terms and conditions were last updated on:{' '}
        <time datetime="2023-06-15">June 15, 2023</time>
      </p>
    </footer>
  </>
);
