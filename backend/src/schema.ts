import gql from "graphql-tag";

export const typeDefs = gql`
  type Mutation {
    incrementNombreDeLike(id: ID!): IncrementNombreDeLikeReponse!
    createUser(username: String!, password: String!): CreateUserResponse!
    signIn(username: String!, password: String!): SignInResponse!
    createArticle(
      titre: String!
      description: String!
      userId: ID!
    ): CreateArticleResponse!
    deleteArticle(id: ID!): DeleteArticleResponse!
    updateArticle(id: ID! titre: String!, description: String!):UpdateArticleResponse!
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
    getArticles: [Article]
    getArticleById(id: ID!): Article
  }

  type User {
    id: ID!
    username: String!
  }

  type Doctor {
    id: ID!
    username: String!
  }
  type Article {
    id: ID!
    titre: String!
    description: String!
    auteur: User!
    nombreDeLike: Int!
    date: String!
  }
  type IncrementNombreDeLikeReponse {
    code: Int!
    success: Boolean!
    message: String!
    article: Article
  }

  type CreateArticleResponse {
    code: Int!
    success: Boolean!
    message: String!
    article: Article
  }

  type DeleteArticleResponse {
    code: Int!
    success: Boolean!
    message: String!
    article: Article
  }

  type UpdateArticleResponse {
    code: Int!
    success: Boolean!
    message: String!
    article: Article
  }
`;
