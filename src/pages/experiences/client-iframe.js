import * as React from 'react';

import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { styled } from 'styled-components';
import FetchHtml from '../../components/FetchHtml';

const StyledCols = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 1rem;
  & > section {
    /* outline: 1px dotted grey; */
  }
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const StyledButtonLink = styled.a`
  background-color: #0066cc;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
`;

const ClientPage = () => {
  return (
    <Layout>
      <h1>Client page</h1>
      <FetchHtml url="https://jdhorn.com/" el="#to-be-fetched" />
      <StyledCols>
        <section>
          <h1>Enter the World of Unmatched Gaming with Xbox!</h1>

          <p>
            Take your gaming experience to the next level with our Xbox console!
            Its cutting-edge technology offers you an unparalleled gaming
            universe, promising high-resolution graphics and faster load times.
          </p>

          <p>
            Acclaimed by gaming critics and players alike, our Xbox console
            integrates advanced features and a user-friendly interface. Whether
            you are an avid gamer, a newbie exploring the gaming world, or
            someone who enjoys gaming with friends, this console is designed to
            elevate your gaming experience to uncharted territories.
          </p>

          <p>
            Join the Xbox community and transform your gaming narrative.
            Discover a new world of gaming, today!
          </p>

          <StyledButtonLink href="#">Add to cart</StyledButtonLink>
        </section>
        <section>
          <StyledIframe src="/registration?prodid=xbox" />
        </section>
      </StyledCols>
    </Layout>
  );
};

export const Head = () => <Seo title="Client page" />;

export default ClientPage;
