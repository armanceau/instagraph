import gql from "graphql-tag";

export const typeDefs = gql`

  type Mutation {
    # incrementNumberOfLikes(id: ID!): IncrementNumberOfLikesResponse! A rajouter lors de l'ajout des likes dans l'article
    createUser(username: String!, password: String!): CreateUserResponse!
    signIn(username: String!, password: String!): SignInResponse!
  }


  # type IncrementNumberOfLikesResponse {
  #   code: Int!
  #   success: Boolean!
  #   message: String!
  #   track: Track
  # }
  
  type CreateUserResponse {
    code: Int!
    success: Boolean!
    message: String!
    user: User
  }

  type SignInResponse {
    code: Int!
    success: Boolean!
    message: String!
    token: String
  }

  type Query {
    doctors: [Doctor]
  }

  type User {
    id: ID!
    username: String!
  }

  type Doctor {
    id: ID!
    username: String!
  }
`;
