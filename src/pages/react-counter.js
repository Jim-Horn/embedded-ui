import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const ReactCounterPage = () => {
  const [count, setCount] = useState(0);
  const counterRef = useRef();

  useEffect(() => {
    const handleCountChange = ev => {
      setCount(ev.detail);
    };

    const counterElement = counterRef.current;
    counterElement.addEventListener('countchange', handleCountChange);
    return () => {
      counterElement.removeEventListener('countchange', handleCountChange);
    };
  }, []);
  return (
    <Layout>
      <h1>React counter page</h1>
      <p>
        This page uses a custom webcomponent:{' '}
        <code>&lt;counter-element&gt;</code>. It has controls both in the parent
        page and in the component to decrement, increment, and reset the counter
      </p>
      <counter-element ref={counterRef}></counter-element>
      <div>Count: {count}</div>
      <button onClick={() => counterRef.current.decrementCount()}>
        Decrement Counter
      </button>
      <button onClick={() => counterRef.current.resetCount()}>Reset</button>
      <button onClick={() => counterRef.current.incrementCount()}>
        Increment Counter
      </button>
    </Layout>
  );
};

export const Head = () => <Seo title="React counter page" />;

export default ReactCounterPage;
