import React, { useEffect, useState } from 'react';

const FetchHtml = ({ url, el }) => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');

        // Make sure that the HTML string is what you expect
        console.log('Fetched HTML:', data);

        // Make sure that the parsed document is what you expect
        console.log('Parsed document:', doc);

        const someElement = doc.querySelector(el);

        // Check if the element was found
        if (someElement) {
          setHtml(someElement.outerHTML);
        } else {
          console.log('Element not found');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default FetchHtml;
