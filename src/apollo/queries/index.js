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

export const GET_PERSON = gql`
query luke {
  person @rest(type: "Person", endpoint: "person", path: "people/1/") {
    name
  }
}
`;