import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import './config';

const enhancer = process.env.NODE_ENV === 'production' ? 
compose(applyMiddleware(ReduxThunk)) 
: composeWithDevTools(applyMiddleware(ReduxThunk, logger));

const store = createStore(rootReducer, enhancer);
const persistor = persistStore(store);
console.log(process.env.NODE_ENV);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
