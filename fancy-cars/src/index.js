/*author: smorampudi */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './state/store';
import registerServiceWorker from './registerServiceWorker';

/*productApi.fetchAll().then((products) => console.log('products',products))
  this Api call is used to fetch all the products and display in the console
*/
const store = configureStore({  });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();