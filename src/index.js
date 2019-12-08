import React from 'react';
import { AppRegistry } from 'react-native';
import { ApolloProvider } from "@apollo/react-hooks";

import client from './apollo';
import AppContainer from './navigation';

class Root extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppContainer />
      </ApolloProvider>
    );
  }
}

AppRegistry.registerComponent('RNNavigation', () => Root);

