import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: process.env["REACT_APP_APOLLO_ENDPOINT"],
});

const WrappedApp = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);


ReactDOM.render(WrappedApp, document.getElementById('root'));

serviceWorker.unregister();
