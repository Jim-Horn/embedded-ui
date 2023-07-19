import React, { useEffect, useState, useRef } from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { Button, Text } from '@soluto-private/mx-asurion-ui-react';
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
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e1e1e1;
  max-width: 405px;
  // height:372px;
  /* font-family: 'Apercu Pro'; */
  padding: 1.25rem;
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
const StyledEmphasis2 = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
`;
const StyledPara = styled.p`
  font-size: 0.875rem;
  line-height: 18.2px;
  margin-bottom: 1.25rem;
`;
const StyledH1 = styled.h1`
  font-size: 24px;
  line-height: 31.2px;
  font-weight: 100;
  margin-bottom: 0.625rem;
`;
const StyledUL = styled.ul`
  list-style-position: inside;
`;
const StyledLI = styled.li`
  font-size: 0.875rem;
  margin-left: 0.75rem;
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
      <StyledDiv>
        <StyledH1>
          Don't forget to ask your customer about Asurion Home+
        </StyledH1>
        <StyledPara>
          Asurion Home+® offers everything from screen repairs to video storage
          and so much more. Here are some of the plan’s best features:
        </StyledPara>
        <StyledUL>
          <StyledLI>Unlimited devices covered</StyledLI>
          <StyledLI>Live support by trusted experts</StyledLI>
          <StyledLI>In-home setup and installations</StyledLI>
          <StyledLI>Data security and protection</StyledLI>
          <StyledLI>Hassle-free claims</StyledLI>
        </StyledUL>

        <StyledPara ref={checkElegibility}>
          <StyledEmphasis2>Only $25</StyledEmphasis2> / month
        </StyledPara>
        <Button
          className="enrollBtn"
          color="secondary"
          onClick={ev => {
            dispatchEvent(
              new CustomEvent('show-modal', {
                detail: { show: true },
              })
            );
          }}>
          Start Enrollment
        </Button>
      </StyledDiv>
      {summary && (
        <StyledEmphasis>
          <strong>Our response (tbd):</strong>
          <pre>{JSON.stringify(summary, null, 2)}</pre>
        </StyledEmphasis>
      )}

      <registration-widget-v2 mode="modal"></registration-widget-v2>
    </Layout>
  );
};

export const Head = () => <Seo title="Client page (web component)" />;

export default ClientPage;
