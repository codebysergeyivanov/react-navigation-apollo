import gql from 'graphql-tag';
// я бы назвал это экшенами :)

export const GET_HELLO = gql`
  query GetHello @client {
    hello {
      say
    }
  }
`;

export const CHANGE_SAY = gql`
  mutation ChangeHello($say: String!) {
    changeHello(say: $say) @client {
      say
    }
  }
`;