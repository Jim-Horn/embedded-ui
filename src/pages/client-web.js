import React, { useEffect, useRef } from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { styled } from 'styled-components';

const StyledCols = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 1rem;
  & > section {
    outline: 1px dotted #ccc;
    padding: 0.25rem;
  }
`;

const StyledDiscriptionList = styled.dl`
  display: grid;
  grid-template-columns: 2fr 1fr;
  dt,
  dd {
    margin-bottom: 0;
  }
  dd {
    text-align: right;
  }
`;

const StyledEmphasis = styled.p`
  font-style: italic;
  color: orangered;
  outline: 1px dotted orangered;
  padding: 0.25rem;
  text-align: left !important;
  opacity: 0.6;
`;

const ClientPage = () => {
  const cartContainerRef = useRef(null);
  const cart = useRef(null);
  const cartTotal = useRef(null);

  useEffect(() => {
    const handleAddToCart = event => {
      const jsonResponse = JSON.stringify(event.detail.payload, null, 2);
      cartContainerRef.current.textContent = jsonResponse;
      const cartElementTerm = document.createElement('dt');
      const cartElementDefinition = document.createElement('dd');
      cartElementTerm.textContent = 'Asurion Protection Plan';
      cartElementDefinition.textContent = '$24.99';
      cart.current.appendChild(cartElementTerm);
      cart.current.appendChild(cartElementDefinition);
      cartTotal.current.textContent = 'Total: $524.98';
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

          <StyledDiscriptionList ref={cart}>
            <dt>PlayStation 5</dt>
            <dd>$499.99</dd>
          </StyledDiscriptionList>

          <h2 ref={cartTotal}>Total: $499.99</h2>

          <button type="button">Proceed to Checkout</button>
          <StyledEmphasis>
            <strong>Our response (tbd):</strong>
            <pre ref={cartContainerRef}></pre>
          </StyledEmphasis>
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
