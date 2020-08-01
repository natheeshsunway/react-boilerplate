import * as React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import configureStore from './reducers/store/configure-store';

import Root from './Root';

// Require globals
import './scss/style.scss';
import './assets/images/favicon.ico';

const store = configureStore();

const ROOT_ELEMENT = 'example-app';

ReactDOM.render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById(ROOT_ELEMENT)
);

// // Hot Module Replacement API
// if (module.hot!) {
//   module.hot.accept('./Root', () => {
//     import('./Root').then((NextApp) => {
//       ReactDOM.render(
//         <AppContainer>
//           <NextApp store={store} />
//         </AppContainer>,
//         document.getElementById(ROOT_ELEMENT)
//       );
//     });
//   });
// }
