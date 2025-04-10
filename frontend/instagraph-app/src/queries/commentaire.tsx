import { graphql } from "../gql";

export const getCommentairesByArticle = graphql(`
  query QueryCommentaire($getCommentaireByArticleId: ID!) {
    getCommentaireByArticleId(id: $getCommentaireByArticleId) {
      auteur {
        username
      }
      contenu
      date
      id
    }
  }
`);

export const createCommentaire = graphql(`
  mutation MutationCreateCommentaire(
    $contenu: String!
    $userId: ID!
    $articleId: ID!
  ) {
    createCommentaire(
      contenu: $contenu
      userId: $userId
      articleId: $articleId
    ) {
      success
    }
  }
`);
