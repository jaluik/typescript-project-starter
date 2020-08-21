import React from 'react';
import ReactDOM from 'react-dom';
import App from '@pages/app';

if (module && module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.querySelector('#root'));
