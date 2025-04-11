import { graphql } from "../gql";

export const getArticles = graphql(`
  query Query {
    getArticles {
      date
      description
      id
      nombreDeLike
      titre
      auteur {
        id
        username
        email
        ntel
      }
    }
  }
`);

export const getArticlesByUser = graphql(`
  query QueryUser($getArticleByUserId: ID!) {
    getArticleByUserId(id: $getArticleByUserId) {
      id
      titre
      description
      nombreDeLike
      date
    }
  }
`);

export const incrementLike = graphql(`
  mutation Mutation($incrementNombreDeLikeId: ID!) {
    incrementNombreDeLike(id: $incrementNombreDeLikeId) {
      code
      success
      message
      article {
        nombreDeLike
      }
    }
  }
`);

export const ajoutArticle = graphql(`
  mutation ajoutArticle($titre: String!, $description: String!, $userId: ID!) {
    createArticle(titre: $titre, description: $description, userId: $userId) {
      success
      message
    }
  }
`);