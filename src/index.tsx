import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import GlobalStyle from './assets/styles/global-style';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createStore } from 'redux';
import persistedReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

const store = createStore(persistedReducer, composeWithDevTools());
const persistor = persistStore(store);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
