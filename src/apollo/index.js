import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { resolvers, typeDefs } from './resolvers';
import initAppState from './initAppState';

const cache = new InMemoryCache({
    freezeResults: true,
});

const client = new ApolloClient({
  cache,
  resolvers,
  typeDefs,
  assumeImmutableResults: true,
});

cache.writeData(initAppState);

export default client;

