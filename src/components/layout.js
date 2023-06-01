/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GlobalStyles } from '@soluto-private/mx-asurion-ui-react';
import styled from 'styled-components';

import Header from './header';
import './layout.css';

const MainDiv = styled.div`
  margin: 0 auto;
  max-width: var(--size-content);
  padding: var(--size-gutter);
`;

const StyledFooter = styled.footer`
  margin-top: var(--space-5);
  font-size: var(--font-sm);
  margin-bottom: var(--space-5);
  display: flex;
  justify-content: center;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <MainDiv>
        <main>{children}</main>
      </MainDiv>
      <StyledFooter>
        <Link to="/sitemap/">Site Map</Link>
      </StyledFooter>
    </>
  );
};

export default Layout;
