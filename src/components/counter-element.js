import React from 'react';
import ReactDOM from 'react-dom';
import CounterComponent from './CounterComponent.js';

class CounterElement extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._count = 0;
  }

  connectedCallback() {
    this._updateRendering();
  }

  get count() {
    return this._count;
  }

  set count(value) {
    this._count = value;
    this.dispatchEvent(new CustomEvent('countchange', { detail: this._count }));
    this._updateRendering();
  }

  decrementCount = () => {
    this.count--;
  };

  resetCount = () => {
    this.count = 0;
  };

  incrementCount = () => {
    this.count++;
  };

  _updateRendering() {
    ReactDOM.render(
      <CounterComponent
        incrementCount={this.incrementCount}
        resetCount={this.resetCount}
        decrementCount={this.decrementCount}
      />,
      this._shadowRoot
    );
  }
}

customElements.define('counter-element', CounterElement);
