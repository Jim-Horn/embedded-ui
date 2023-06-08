import React, { useEffect, useRef } from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { styled } from 'styled-components';

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
  const cartContainerRef = useRef(null);

  useEffect(() => {
    const handleAddToCart = event => {
      const text = event.detail.text;
      cartContainerRef.current.textContent = text;
    };

    window.addEventListener('addToCart', handleAddToCart);

    return () => {
      window.removeEventListener('addToCart', handleAddToCart);
    };
  }, []);

  return (
    <Layout>
      <h1>Client page</h1>
      <StyledCols>
        <section>
          <h1>Your Shopping Cart</h1>

          <dl>
            <dt>PlayStation 5</dt>
            <dd>Price: $499</dd>
            <dd>Quantity: 1</dd>
          </dl>

          <h2>Total: $499</h2>

          <button type="button">Proceed to Checkout</button>

          <div ref={cartContainerRef}></div>
        </section>
        <section>
          <registration-widget></registration-widget>
        </section>
      </StyledCols>
    </Layout>
  );
};

export const Head = () => <Seo title="Client page (web component)" />;

export default ClientPage;
