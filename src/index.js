import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Components/Root/Root.js';
import * as serviceWorker from './serviceWorker.js';
import configureStore, { history } from './configureStore.js';
import { INITIAL_STATE } from './Reducers/reducers.js';

// Create the global Redux store
const store = configureStore(INITIAL_STATE);

ReactDOM.render(
  <Root store={store} history={history} />, document.getElementById('root')
);

serviceWorker.unregister();
