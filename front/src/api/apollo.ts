import { ApolloClient, InMemoryCache } from '@apollo/client';
import { API_URL } from '../configs'

export const apollo = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});