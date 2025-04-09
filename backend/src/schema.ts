import gql from "graphql-tag";

export const typeDefs = gql`

  type Query {
    getUsers: [User]
    getUserById(id: ID!): User
  }

  type Mutation {
    createUserMut(name: String!, email: String!, age: Int!, password: String!): User
    signup(name: String!, email: String!, age: Int!, password: String!): AuthPayload
    signin(email: String!, password: String!): AuthPayload
  }

  type User {
    id: ID
    name: String!
    email: String!
    age: Int!
    password: String!
  }

  type AuthPayload {
    token: String
    user: User
  }

`;
