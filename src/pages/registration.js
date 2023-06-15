import * as React from 'react';

import Seo from '../components/seo';

import { RegistrationWidget } from '../components/RegistrationWidget';

const RegistrationPage = () => <RegistrationWidget />;

export const Head = () => <Seo title="Registration page" />;

export default RegistrationPage;
