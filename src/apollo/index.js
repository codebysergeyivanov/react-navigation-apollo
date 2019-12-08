import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { resolvers, typeDefs } from './resolvers';
import initAppState from './initAppState';
import { RestLink } from 'apollo-link-rest';

const cache = new InMemoryCache({
    freezeResults: true,
});

const restLink = new RestLink({ 
    endpoints: {
      person: { uri: 'https://swapi.co/api/' },
    },
});

const client = new ApolloClient({
  link: restLink,
  cache,
  resolvers,
  typeDefs,
  assumeImmutableResults: true,
});

cache.writeData(initAppState);

export default client;

