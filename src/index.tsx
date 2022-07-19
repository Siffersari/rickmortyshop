import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {View, Text} from 'react-native';
import {createApolloClient} from './common/config/apollo-client';
import Home from './screens/Home';

const apolloClient = createApolloClient();

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <View>
        <Home />
      </View>
    </ApolloProvider>
  );
};

export default App;
