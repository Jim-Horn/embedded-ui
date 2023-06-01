import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import styled from 'styled-components';

const StyledOrderedList = styled.ol`
  margin-left: 2rem;
  li {
    margin-bottom: 0.5rem;
  }
`;

const IndexPage = () => (
  <Layout>
    <h1>
      🧑‍💻 Gatsby / Contentful - Embedded UI Demo and Development Environment
    </h1>

    <h2>🔍 Overview</h2>

    <p>
      This repo provides a GatsbyJS environment for creating and/or testing
      Embedded UI components. GatsbyJS is a React-based framework for building
      static websites, while Styled Components is a popular CSS-in-JS library
      for styling React components. Contentful is a headless CMS that provides
      content management and delivery services, and is currently used on
      projects such as <a href="https://www.asurion.com/">asurion.com</a>
    </p>

    <h2>🧰 Technologies</h2>

    <StyledOrderedList>
      <li>
        GatsbyJS: A React-based open-source framework for creating static
        websites and apps. It is designed to work with various data sources,
        including Contentful, and is optimized for performance. Learn more at{' '}
        <a href="https://www.gatsbyjs.com/">https://www.gatsbyjs.com/</a>
      </li>
      <li>
        Contentful: A headless Content Management System (CMS) that allows you
        to create, manage, and deliver content through APIs. It provides a
        user-friendly interface for managing content and can integrate with
        various frontend frameworks, including GatsbyJS. Learn more at{' '}
        <a href="https://www.contentful.com/">https://www.contentful.com/</a>
      </li>
      <li>
        Styled Components: A CSS-in-JS library that enables you to style your
        React components using JavaScript. It allows you to create reusable,
        dynamic, and themeable styles for your components. Learn more at{' '}
        <a href="https://styled-components.com/">
          https://styled-components.com/
        </a>
      </li>
    </StyledOrderedList>

    <h2>📝 How to add a new page</h2>

    <p>
      To add a new page to this application, simply export a new page component
      under the <code>src/pages</code> directory. See the existing pages for
      examples
    </p>

    <h2>🛠️ Setup</h2>

    <h3>Repo setup</h3>

    <StyledOrderedList>
      <li>
        Clone the repo to your local system:{' '}
        <code>git clone git@github.com:</code>
      </li>
      <li>
        Run <code>yarn</code> to install the project's dependencies
      </li>
      <li>Follow the Env setup instructions (below)</li>
      <li>
        Run <code>yarn start</code> to spin up the local development server
      </li>
    </StyledOrderedList>

    <h3>Env setup</h3>

    <p>
      Copy <code>example.env</code> to <code>.env</code>, then in that file
      update the following:
    </p>

    <StyledOrderedList>
      <li>
        If you have a Contentful environment, update the{' '}
        <code>CONTENTFUL_SPACE_ID</code> AND{' '}
        <code>CONTENTFUL_ACCESS_TOKEN</code> with the appropriate values. (If no
        space id is provided, the Contentful plugin won't be loaded)
      </li>
    </StyledOrderedList>
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;
