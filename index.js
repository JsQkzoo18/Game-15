import React from 'react';
import { render } from 'react-dom';

import App from './src/App';

const rootEl = document.getElementById('root');

const renderComponent = (Component) => {
  render(<Component />, rootEl);
};

renderComponent(App);
