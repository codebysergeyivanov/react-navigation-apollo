import gql from "graphql-tag";

const typeDefs = gql`
  extend type Hello {
    say: String!
  }

  extend type ChangeHello {
    changeHello(say: String!): Hello
  }
`;