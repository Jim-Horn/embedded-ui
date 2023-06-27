import React, { useEffect, useState, useRef } from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { styled } from 'styled-components';

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
  margin-top: 1rem;
  font-style: italic;
  color: orangered;
  outline: 1px dotted orangered;
  padding: 0.25rem;
  text-align: left !important;
  opacity: 0.6;
`;

const ClientPage = () => {
  const cart = useRef(null);
  const cartTotal = useRef(null);
  const checkElegibility = useRef(null);
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const handleAddToCart = event => {
      setSummary(event.detail.payload);
      const cartElementTerm = document.createElement('dt');
      const cartElementDefinition = document.createElement('dd');
      cartElementTerm.textContent = 'Asurion Protection Plan';
      cartElementDefinition.textContent = '$24.99';
      cart.current.appendChild(cartElementTerm);
      cart.current.appendChild(cartElementDefinition);
      cartTotal.current.textContent = 'Total: $524.98';
      checkElegibility.current.parentNode.removeChild(checkElegibility.current);
      dispatchEvent(
        new CustomEvent('show-modal', {
          detail: { show: false },
        })
      );
    };

    window.addEventListener('addToCart', handleAddToCart);

    return () => {
      window.removeEventListener('addToCart', handleAddToCart);
    };
  }, []);

  return (
    <Layout>
      <h1>Client page</h1>

      <h1>Your Shopping Cart</h1>

      <p ref={checkElegibility}>
        You may be elegible for coverage.{' '}
        <button
          onClick={ev => {
            dispatchEvent(
              new CustomEvent('show-modal', {
                detail: { show: true },
              })
            );
          }}>
          Check elegibility
        </button>
      </p>

      <StyledDiscriptionList ref={cart}>
        <dt>PlayStation 5</dt>
        <dd>$499.99</dd>
      </StyledDiscriptionList>

      <h2 ref={cartTotal}>Total: $499.99</h2>

      <button
        type="button"
        onClick={() =>
          alert(
            `This doesn't do anything - other than annoy those who dare click`
          )
        }>
        Proceed to Checkout
      </button>

      {summary && (
        <StyledEmphasis>
          <strong>Our response (tbd):</strong>
          <pre>{JSON.stringify(summary, null, 2)}</pre>
        </StyledEmphasis>
      )}

      <registration-widget mode="modal"></registration-widget>
    </Layout>
  );
};

export const Head = () => <Seo title="Client page (web component)" />;

export default ClientPage;
