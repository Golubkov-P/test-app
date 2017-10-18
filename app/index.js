import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

import AppRoute from './routes';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRoute />
  </Provider>
, document.getElementById('app'));
